-- =========================================================
-- SAHA NOTLARI (Field Notes) — Supabase migration
-- Bu dosyanın TAMAMINI Supabase Dashboard → SQL Editor içine
-- yapıştırıp "Run" ile bir kere çalıştırman yeterli.
-- =========================================================

-- ---------------------------------------------------------
-- 1) ADMIN TABLOSU
-- Onay verecek kişilerin (şimdilik sen) user_id'lerini tutar.
-- ---------------------------------------------------------
create table if not exists app_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table app_admins enable row level security;

-- Kimse doğrudan bu tabloyu okuyamaz/yazamaz (yalnızca is_app_admin() üzerinden
-- security definer olarak kontrol edilir). RLS açık ama policy yok = erişim kapalı.

create or replace function is_app_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists(select 1 from app_admins where user_id = auth.uid());
$$;

-- ---------------------------------------------------------
-- 2) SAHA NOTLARI TABLOSU
-- ---------------------------------------------------------
create table if not exists field_notes (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  country_id text not null,          -- örn. 'germany' (uygulamadaki country.id ile aynı)
  city text,                          -- opsiyonel, serbest metin
  category text not null,             -- örn. 'İş Yapma Kültürü', 'Gümrük', vb.
  title text not null,
  body text not null,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  helpful_count integer not null default 0,
  created_at timestamptz not null default now(),
  approved_at timestamptz,
  constraint title_len check (char_length(title) between 3 and 140),
  constraint body_len check (char_length(body) between 20 and 4000)
);

create index if not exists field_notes_country_status_idx
  on field_notes (country_id, status, created_at desc);

alter table field_notes enable row level security;

-- Herkes onaylanmış notları görebilir; kullanıcı kendi (henüz onaylanmamış)
-- notunu da görebilir; admin hepsini görebilir.
-- NOT: Onaylanmış notları görmek de giriş yapmayı gerektirir (üyelere özel).
create policy "field_notes_select" on field_notes
  for select
  using ((status = 'approved' and auth.uid() is not null) or user_id = auth.uid() or is_app_admin());

-- Giriş yapan herkes kendi adına, her zaman 'pending' durumunda not oluşturabilir.
create policy "field_notes_insert" on field_notes
  for insert
  with check (user_id = auth.uid() and status = 'pending');

-- Onay/red işlemi yalnızca admin.
create policy "field_notes_update_admin" on field_notes
  for update
  using (is_app_admin())
  with check (is_app_admin());

-- Silme: admin her zaman, kullanıcı yalnızca kendi onaylanmamış notunu silebilir.
create policy "field_notes_delete" on field_notes
  for delete
  using (is_app_admin() or (user_id = auth.uid() and status = 'pending'));

-- ---------------------------------------------------------
-- 3) "FAYDALI BULUNDU" OYLARI
-- Doğrudan client yazamaz; yalnızca aşağıdaki RPC (security definer) üzerinden.
-- ---------------------------------------------------------
create table if not exists field_note_votes (
  note_id bigint not null references field_notes(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (note_id, user_id)
);

alter table field_note_votes enable row level security;

-- Kullanıcı yalnızca kendi oyunu görebilir (kart açıldığında "zaten oy verdim mi" kontrolü için).
create policy "field_note_votes_select_own" on field_note_votes
  for select
  using (user_id = auth.uid());

-- Doğrudan insert/delete kapalı — sadece RPC üzerinden (security definer, RLS'i by-pass eder).
-- (İnsert/delete için policy eklenmiyor; RLS açık + policy yok = client için tamamen kapalı.)

create or replace function toggle_field_note_helpful(note_id_input bigint)
returns table(new_count integer, voted boolean)
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  already_voted boolean;
begin
  if uid is null then
    raise exception 'not_authenticated';
  end if;

  select exists(
    select 1 from field_note_votes where note_id = note_id_input and user_id = uid
  ) into already_voted;

  if already_voted then
    delete from field_note_votes where note_id = note_id_input and user_id = uid;
  else
    -- not var mı ve onaylı mı kontrolü (olmayan/onaysız bir nota oy eklenemesin)
    if not exists(select 1 from field_notes where id = note_id_input and status = 'approved') then
      raise exception 'note_not_found_or_not_approved';
    end if;
    insert into field_note_votes(note_id, user_id) values (note_id_input, uid);
  end if;

  update field_notes
    set helpful_count = (select count(*) from field_note_votes where note_id = note_id_input)
    where id = note_id_input;

  return query
    select f.helpful_count, (not already_voted)
    from field_notes f
    where f.id = note_id_input;
end;
$$;

grant execute on function toggle_field_note_helpful(bigint) to authenticated;
grant execute on function is_app_admin() to authenticated, anon;

-- ---------------------------------------------------------
-- 4) KENDİNİ ADMIN YAPMAK İÇİN (bir kereye mahsus, elle çalıştır):
-- Önce siteye normal üye olarak giriş yap, sonra Supabase Dashboard →
-- Authentication → Users kısmından kendi kullanıcının UUID'sini kopyala
-- ve aşağıdaki satırı UUID'yi yapıştırıp çalıştır:
--
-- insert into app_admins (user_id) values ('BURAYA-KENDI-UUID-NI-YAPISTIR');

-- ---------------------------------------------------------
-- 5) GÜNCELLEME (PATCH) — Bu dosyayı DAHA ÖNCE bir kez çalıştırdıysan,
-- yukarıdaki tüm dosyayı tekrar çalıştırma (policy'ler zaten var, hata verir).
-- Sadece aşağıdaki iki satırı çalıştırman yeterli — bu, onaylanmış
-- saha notlarını görmeyi de (paylaşmak gibi) giriş yapmış üyelere özel yapar:
-- ---------------------------------------------------------
-- drop policy if exists "field_notes_select" on field_notes;
-- create policy "field_notes_select" on field_notes
--   for select
--   using ((status = 'approved' and auth.uid() is not null) or user_id = auth.uid() or is_app_admin());
-- =========================================================
