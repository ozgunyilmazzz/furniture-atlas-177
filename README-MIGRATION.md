# Faz 1 — Next.js İskeleti (aynı site, yeni kabuk)

## Ne yapıldı?
- Temiz bir Next.js 16 (App Router + TypeScript) projesi kuruldu.
- Eski tek-dosya `furniture-atlas.html` içindeki CSS, body markup ve JS
  HİÇ değiştirilmeden ayrıştırılıp `public/legacy/` altına kondu:
  - `atlas.css`      → tüm görsel stiller
  - `atlas-body.html`→ `<body>` içeriği (header, globe, modallar, vs.)
  - `atlas-init.js`  → Supabase başlatma
  - `atlas-app.js`   → ana uygulama mantığı (veri, render, filtreler)
  - `atlas-router.js`→ query-string tabanlı history/routing + ticker
- `app/layout.tsx`: meta etiketler, Open Graph, JSON-LD (Organization + WebSite)
- `app/page.tsx`: yukarıdaki legacy dosyaları sunucu tarafında okuyup
  sayfaya gömüyor (SSG) — yani `/` artık build anında statik HTML olarak
  üretiliyor, boş kabuk olarak gitmiyor.
- Script sırası eski dosyayla birebir aynı: supabase CDN → init → app → router.

## Doğrulandı
- `npm run build` başarılı, `/` statik (○) olarak işaretleniyor.
- `npm run start` ile üretim sunucusu çalıştırıldı, gelen HTML'de body
  içeriği ve JSON-LD script'leri gerçekten mevcut (view-source ile görülebilir).

## Sırada ne var? (Faz 2)
- `/country/[slug]` dinamik route'unu eklemek: her ülke için
  `generateStaticParams` ile build-time'da ayrı, kendi meta/JSON-LD'sine
  sahip statik sayfa üretmek.
- Bunu yaparken şimdilik globe/list/diğer görünümler eski SPA mantığında
  (query-string) kalmaya devam edecek — tek seferde her şeyi değiştirmiyoruz.

## Çalıştırmak için
```bash
npm install
npm run dev     # geliştirme
npm run build && npm run start   # üretim testi
```

## Faz 2 — /country/[slug] route'u (TAMAMLANDI)

- `lib/countries-data.js`: eski `atlas-app.js`'in "veri" kısmı (DOM'a hiç
  dokunmayan bölüm, ~968 satır) ayrıştırılıp Node'da çalışabilir hale
  getirildi. Bu, 10 elle hazırlanmış ülke + WORLD_DATA'dan otomatik
  türetilen 167 ülke olmak üzere toplam **177 ülkeyi** build-time'da verir.
- `app/country/[slug]/page.tsx`:
  - `generateStaticParams()` → 177 ülke için ayrı statik sayfa üretir
  - `generateMetadata()` → her ülkeye özel title/description/canonical/OG/Twitter
  - BreadcrumbList JSON-LD eklenir
  - Var olmayan slug'lar için `notFound()` (gerçek 404)
- `components/LegacyAtlasApp.tsx`: hem `/` hem `/country/[slug]` aynı SPA
  gövdesini kullanıyor (kod tekrarı yok).
- `public/legacy/atlas-app.js` içinde routing mantığı güncellendi:
  - `stateToUrl()` artık ülke görünümü için `/country/<slug>` path'i üretiyor
    (eskiden `?country=<slug>` idi)
  - `initHistoryFromUrl()` artık önce path'i okuyor, yoksa eski `?country=`
    query'sine bakıyor (eski paylaşılan linkler kırılmasın diye)

### Doğrulandı
- `npm run build`: 177 ülke sayfası + ana sayfa, hepsi statik (SSG) üretildi
- `/country/spain` → doğru title, description, canonical, BreadcrumbList JSON-LD
- Var olmayan slug → gerçek 404

### Sırada ne var? (Faz 3 fikirleri — opsiyonel)
- Her ülke sayfasına, JS çalışmadan önce de görünen kısa bir statik özet
  (pazar büyüklüğü, Türkiye payı gibi) eklemek — şu an içerik JS ile
  render ediliyor, Google JS çalıştırıyor ama sunucu tarafında hazır
  metin daha da güçlü olur.
- `sitemap.xml`'i 177 ülke için otomatik üretmek (`app/sitemap.ts`)
- Ana SPA JS bundle'ının boyutunu küçültmek (şu an ~500KB, her sayfada aynı)

## Faz 3 — HS koduna göre ayrı statik sayfalar (TAMAMLANDI)

- `/country/<slug>` -> varsayilan kategori (Dosemeli Oturma Grubu, HS 9401.61)
- `/country/<slug>/ahsap-mobilya` -> Ahsap Mobilya kategorisi (HS 9403.60),
  kendi title/description/canonical/BreadcrumbList'i ile ayri statik sayfa
- `lib/countries-data.js`'den `buildWoodVariant()` de export edildi;
  build-time'da her ulkenin ahsap kategorisi rakamlarini (pazar buyuklugu,
  yillik ithalat) hesaplayip meta aciklamasina gercek sayilarla yaziyor
- `atlas-app.js` icindeki routing guncellendi: kategori artik `?cat=wood`
  yerine path'in parcasi (`CATEGORY_SLUGS` / `CATEGORY_SLUGS_REVERSE`
  eslemesiyle). Eski `?cat=` linkleri hala calisiyor (geriye donuk uyumlu).
- Toplam statik sayfa sayisi: 177 ulke x 2 kategori + ana sayfa = 355 sayfa,
  hepsi `npm run build`'de uretiliyor.

### Dogrulandi
- `/country/spain/ahsap-mobilya` -> dogru title, gercek pazar buyuklugu
  rakamiyla description, canonical, 3 seviyeli BreadcrumbList
- Gecersiz kategori slug'i (`/country/spain/yanlis-kategori`) -> gercek 404

### Yeni bir HS kodu/kategori eklenirse
Iki yerde esleme guncellenmeli:
1. `public/legacy/atlas-app.js` -> `CATEGORY_SLUGS` objesi
2. `app/country/[slug]/[category]/page.tsx` -> `CATEGORY_SLUG_MAP` objesi

## Faz 4 — Kure ve Liste gorunumlerinde de HS koduna gore ayri sayfalar (TAMAMLANDI)

URL semasi genisledi:
- `/`                      -> kure, Oturma Grubu (varsayilan)
- `/ahsap-mobilya`         -> kure, Ahsap Mobilya (HS 9403.60)
- `/liste`                 -> liste, Oturma Grubu
- `/liste/ahsap-mobilya`   -> liste, Ahsap Mobilya (HS 9403.60)
- `/country/<slug>`                    -> ulke, Oturma Grubu
- `/country/<slug>/ahsap-mobilya`      -> ulke, Ahsap Mobilya

Yeni dosyalar:
- `app/[category]/page.tsx`        -> kure + kategori (root seviyede tek segment)
- `app/liste/page.tsx`             -> liste, statik metadata
- `app/liste/[category]/page.tsx`  -> liste + kategori

`atlas-app.js` icindeki `stateToUrl()` ve `initHistoryFromUrl()` tum
gorunumler (kure/liste/ulke) icin kategoriyi path'in parcasi olarak
okuyup yaziyor artik. Eski `?cat=`, `?view=list`, `?country=` query'leri
hala calisiyor (geriye donuk uyumluluk).

Onemli: `app/[category]/page.tsx` root seviyede dinamik bir route oldugu
icin `dynamicParams = false` ile sinirlandirildi — sadece
`generateStaticParams()`'ta listelenen slug'lar (su an: `ahsap-mobilya`)
gercek sayfa uretir, geri kalan her tek segmentli path gercek 404 doner.
Ileride kok seviyede baska bir sayfa (ornegin `/hakkimizda`) eklenirse,
literal bir klasor (`app/hakkimizda/`) dinamik route'tan once eslesir,
cakisma olmaz.

### Dogrulandi
- `/ahsap-mobilya`, `/liste`, `/liste/ahsap-mobilya` -> dogru title/description/canonical/BreadcrumbList
- `/yanlis-sey`, `/liste/yanlis-kategori` -> gercek 404
- `/country/spain` ve `/country/spain/ahsap-mobilya` yeni route'larla cakismadan calismaya devam ediyor

### Toplam statik sayfa sayisi
1 (ana sayfa) + 1 (/ahsap-mobilya) + 1 (/liste) + 1 (/liste/ahsap-mobilya)
+ 177 (ulke) + 177 (ulke x ahsap-mobilya) = 358 sayfa

## Faz 5 - Haberler, Fuarlar, Hedef Ulkelerim ve footer sayfalari (TAMAMLANDI)

Uygulamadaki tum "modal" bazli sabit sayfalar (footer + ust menu) artik
kendi bagimsiz URL'lerine sahip. Hangi gorunumun (kure/liste/ulke) ustunde
acilirsa acilsin, URL'de her zaman oncelikli - kendi basina paylasilabilir
birer sayfa:

| Sayfa                  | URL                     | Not |
|-------------------------|--------------------------|-----|
| Sektor Haberleri        | /haberler                | |
| Fuar Takvimi             | /fuarlar                 | |
| Hedef Ulkelerim          | /hedef-ulkelerim         | **noindex** (kisisel/bos icerik) |
| Seyahat Planla           | /seyahat-planla          | |
| Premium (uyelik)         | /premium                 | |
| Kuresel Raporlar         | /kuresel-raporlar        | |
| Atlas Research+          | /atlas-research          | |
| Cerez Politikasi         | /cerez-politikasi        | |
| Kullanim Sartlari        | /kullanim-sartlari       | |
| Gizlilik Politikasi      | /gizlilik-politikasi     | |
| Yardim Merkezi           | /yardim-merkezi          | |
| Is Ortaklari             | /is-ortaklari            | |
| Iletisim                 | /iletisim                | |
| Hakkimizda               | /hakkimizda              | |

Yeni dosyalar:
- `lib/staticPageMeta.ts` -> bu 14 sayfa icin ortak metadata + breadcrumb
  JSON-LD ureten yardimci fonksiyonlar (kod tekrarini onlemek icin)
- `app/<slug>/page.tsx` (x14) -> her biri ~20 satir, yardimci fonksiyonlari kullanir

`atlas-app.js` icinde:
- `MODAL_SLUGS` / `MODAL_SLUGS_REVERSE` eslemesi eklendi
- `stateToUrl()`: modal aciksa, altindaki gorunum ne olursa olsun
  modal'in kendi URL'i yazilir (ornegin `/haberler`)
- `initHistoryFromUrl()`: path once modal slug'larina bakiyor (en yuksek
  oncelik), sonra ulke/liste/kategori. Eski `?modal=` query'si hala
  geriye donuk calisiyor.

### Neden "Hedef Ulkelerim" noindex?
Bu sayfa kullanicinin kendi kaydettigi ulkeleri gosteriyor - ziyaretciye
gore icerik degisiyor / anonim ziyaretci icin bos. Google'a indexletmek
bos/yaniltici sayfa gostermek anlamina gelir; URL yine de dogrudan
paylasilabilir ve calisir, sadece arama sonuclarinda cikmiyor.

### Dogrulandi
- 14 sayfanin hepsi test edildi: dogru title, description, canonical,
  BreadcrumbList JSON-LD
- `/hedef-ulkelerim` -> robots: noindex, follow; digerleri index, follow
- Mevcut route'lar (`/`, `/country/spain`, `/liste`) hicbir cakisma
  olmadan calismaya devam ediyor

### Toplam statik sayfa sayisi
358 (onceki fazlardan) + 14 (yeni sabit sayfalar) - 1 (liste sayimi
duzeltmesi) = **375 sayfa**, hepsi `npm run build`'de uretiliyor.

## Faz 6 - Kilit gorsellerinde duzeltmeler (TAMAMLANDI)

- Filtrele butonu artik "Members Only" ipucu / kilit ikonu GOSTERMIYOR.
  (`updatePremiumUI()` icinde artik sadece Yazdir/PDF butonu icin uygulaniyor.)
- Karsilastir butonu (hem ust bardaki hem de tepside acilan) artik ayni
  kilit gorunumune sahip: ziyaretci girisken kilit ikonu + "Members Only"
  hover ipucu (`updateCompareButtonsUI()` guncellendi).
- Ziyaretci "Karsilastir"a tikladiginda acilan kilitli ekranin metni
  degistirildi:
  - Baslik: "Karsilastirma Uyelere Ozeldir"
  - Aciklama: "Birden fazla ulkenin Pazar Genel Bakisi, Ticaret Ortami,
    Rekabet ve Lojistik verilerini karsilastirmak icin hemen giris yapin."

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda ana sayfa HTML ciktisinda yeni metin ("Karsilastirma
  Uyelere Ozeldir" + "Pazar Genel Bakisi...") dogrulandi

## Faz 7 - Metin duzeltmesi + Liste checkbox hata giderme (TAMAMLANDI)

- `atlas.css`: kilitli ogeler uzerine gelince cikan ipucu artik ingilizce
  "Members Only" degil, "Uyelere Ozel" yaziyor.
- Liste sayfasindaki (`/liste`) ulke checkbox'lari saglamlastirildi:
  eskiden inline `onclick`/`onchange` niteliklerine dayaniyordu; artik
  `countryTableBody` uzerinde CAPTURE asamasinda calisan tek bir delegated
  listener kullaniliyor. Checkbox hucresine yapilan HER tiklama, satirin
  kendi acilma davranisi calismadan ONCE durduruluyor - yani checkbox'a
  tiklamak artik hicbir kosulda ulke sayfasini acamaz, sadece secim yapar.

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda `/liste` sayfasinin HTML/JS ciktisinda eski
  `handleListCheckCellClick` fonksiyonu artik yok, yeni
  `countryTableBodyEl` delegated listener'lari mevcut
- CSS'teki tooltip metni "Uyelere Ozel" olarak dogrulandi

## Faz 8 - Kesif Uyeligi (ucretsiz tier) eklendi (TAMAMLANDI)

Kayit formuna, mevcut Kurucu Uye / Standart Uye kartlarinin SOLUNA
ucuncu bir kart eklendi: "Kesif Uyeligi" (Ucretsiz). Plan-grid artik
3 sutunlu.

- `atlas-body.html`: `registerPlanFree` id'li yeni plan-card, verilen
  ozellik listesi ve "Ucretsiz Baslangic" bilgi kutusuyla eklendi.
- `atlas.css`: `.plan-grid` 3 sutuna cikarildi; `.plan-card-free` icin
  norotr/teal vurgulu yeni stil eklendi.
- `atlas-app.js`:
  - Ucuncu kart icin tiklama davranisi eklendi (`selectedRegisterPlan='free'`,
    buton metni "Ucretsiz Basla" olur)
  - Free plan secilip kayit olundugunda hicbir RPC/uyelik talebi
    gonderilmiyor (`pendingMembershipClaim = null` bu durumda) - zaten
    herkesin varsayilan tier'i 'free', ekstra bir islem gerekmiyor
  - Varsayilan secili kart hala "Kurucu Uye" (ilk 100 kisiye ozel
    aciliyet mesaji korunuyor icin) - bu bir varsayimdir, istenirse
    Kesif Uyeligi varsayilan yapilabilir

Ayrica, kullanicinin ucretsiz tier'da KESINLIKLE olmamasi gerektigini
belirttigi ozelliklerden ikisinde eksik gorulen bir kilit eklendi:
- **Kuresel Raporlar** ve **Atlas Research+** linkleri artik
  `isPremiumUser()` kontrolu yapiyor - ucretsiz/ziyaretci kullanici
  tikladiginda dogrudan Premium ekranina yonlendiriliyor (eskiden bu
  ikisi hicbir kisitlama olmadan herkese acikti)
- Bu kisitlama hem link tiklamasinda hem de dogrudan URL ile
  (`/kuresel-raporlar`, `/atlas-research`) gelindiginde uygulaniyor
  (`applyHistoryState` icine `PREMIUM_ONLY_MODALS` seti eklendi)

Karsilastirma, PDF/Yazdir ve Filtreleme zaten onceki fazlardan beri
premium kilitliydi, degisiklik gerekmedi. "Tam ulke raporlari" icin
mevcut "ilk ulke ucretsiz onizleme" davranisi (canOpenCountryFree)
korundu - bu ayri, onceden var olan bir teaser mekanizmasi, degistirilmedi.

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda ana sayfada "Kesif Uyeligi" karti, 3 sutunlu
  plan-grid CSS'i ve PREMIUM_ONLY_MODALS mantigi dogrulandi

## Faz 9 - Sektor Nabzi butonu tasindi + olasi footer-alti bosluk sorunu (TAMAMLANDI)

**Buton tasindi:** "Sektor Nabzini Goster/Gizle" artik footer'da degil,
Harita/Liste sekmelerinin hemen yaninda (toolbar'da) - "Sektor Nabzi"
adinda, canli-veri gostergesi gibi kucuk yesil/teal renkli nabiz
noktasiyla. Acikken buton `active` sinifi aliyor (yesil vurgulu), metin
degismiyor - boylece dar toolbar alaninda genislik zipllamiyor.

**"Footer altinda sacma metinler" sorunu:** Bunun kok nedenini
kesin olarak goremedim (canli tarayicida gorsel dogrulama yapamiyorum),
ama en olasi/riskli mekanizmayi duzelttim: sekiz acikken
`html,body { padding-bottom: var(--ticker-h) }` kurali, footer'in
HEMEN ALTINDA, sayfanin gercek govdesinde bos/rezerve bir kaydirma
alani olusturuyordu - bu alan teorik olarak bos olmasi gerekirken,
herhangi bir DOM/render tuhafligi orada gorunur hale gelebilirdi.
Bu padding'i artik dogrudan `body`ye degil, `.site-footer`e (kendi
arka plan rengiyle sinirli bir kutu icine) tasidim - boylece o "kimsenin
sahiplenmedigi" bos alan ortadan kalkti.

**Eger sorun hala goruluyorsa:** Bir sonraki mesajda ekran goruntusu
paylasirsan (hangi cihaz/tarayici, tam olarak ne yaziyor) kok nedeni
kesin olarak bulup duzeltebilirim.

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda buton artik `#viewToggle` icinde (Harita/Liste
  yaninda), footer'da eski buton kalmadi
- `padding-bottom:var(--ticker-h)` artik `.site-footer` kuralinda

## Faz 10 - KOK NEDEN BULUNDU: footer altindaki "sacma metinler" (TAMAMLANDI)

Paylastigin ekran goruntusu kok nedeni kesinlestirdi: gorunen metin,
Sektor Nabzi widget'inin FACTS dizisinin HAM JAVASCRIPT KAYNAK KODUYDU
("Nijerya'ya Turk ahsap mobilya ihracati coktu" vs.) - yani script bir
noktada calisan kod olarak degil, duz metin olarak sayfaya basiliyordu.

**Sebep:** `atlas-app.js` (~500KB), `atlas-init.js` ve `atlas-router.js`
dosyalari `next/script`'e `dangerouslySetInnerHTML` ile GOMULU (inline)
olarak veriliyordu. Bu kadar buyuk inline script icerigi, Next.js'in
Script bilesenindeki nadir bir hydration/reconciliation hatasina yol
acip icerigin bazen ham metin olarak DOM'da kalmasina neden oluyor.

**Cozum:** `components/LegacyAtlasApp.tsx` yeniden yazildi - script'ler
artik icerik gomme yerine gercek harici dosyalara (`/legacy/*.js`)
`src` ile isaret ediyor (zaten public/legacy altinda duruyorlardi).
Bu, Next.js'in resmi olarak desteklenen, standart script yukleme
yontemi - inline gomme sinifi hatayi tamamen ortadan kaldiriyor.

Ek olarak: her script icin `?v=<dosya-icerik-hash>` cache-busting
parametresi eklendi - boylece her yeni deploy'da tarayicilar eski
surumu onbellekten degil, guncel dosyayi cekiyor.

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda script'lerin gercekten `src="/legacy/atlas-app.js?v=..."`
  seklinde harici dosya olarak yuklendigi dogrulandi
- Sayfa govdesinde FACTS dizisinin ham metni ARTIK YOK (0 sonuc)
- `/legacy/atlas-app.js`, `/legacy/atlas-init.js`, `/legacy/atlas-router.js`
  dogrudan 200 donuyor

## Faz 11 - Karsilastirma tablosu premium gorsel yenileme + kayit formu genisletildi (TAMAMLANDI)

**Onemli:** Veri yapisi, tablo duzeni (grid sutunlari, bolumler, satirlar)
ve renk paleti HIC degistirilmedi - sadece tipografi, bosluk ve vurgu
sistemi iyilestirildi.

Karsilastirma tablosu (`vs-grid` ve turevleri) icin:
- Satir yuksekligi arttirildi (padding 14px -> 16-18px)
- Baslik satiri (ulke kartlari): bayrak buyutuldu, isim kalinlastirildi
  (artik sans-serif, italik degil), firsat skoru artik rozet/pill
  seklinde (arka planli, yuvarlak kose)
- En iyi deger hucreleri: renk + hafif arka plan vurgusuna ek olarak
  kucuk "✓ En Iyi" rozeti eklendi (teal renkli, pill)
- Bolum basliklari (Pazar Genel Bakisi, Ticaret Ortami, vb.): daha
  belirgin ust/alt cizgiler, daha genis harf araligi
- Zebra gorunumu: her satir cift/tek indeksine gore cok hafif farkli
  arka plan tonu aliyor (`vs-row-alt` sinifi, JS'te satir index'i
  hesaplanip eklendi - veri/mantik degismedi, sadece stil kancasi)
- Hucrelerdeki sayilar artik mono yerine sans-serif (var(--body)) font
  ile, tabular-nums hizalamasiyla gosteriliyor
- Satir hover: fareyle uzerine gelinen TUM satir (etiket + tum ulke
  hucreleri) hafifce aydinlaniyor - `compareBody` uzerinde tek seferlik
  delegated event listener ile yapildi (`initCompareRowHover`)
- Kart govdesi: daha belirgin kenarlik + derin golge (`box-shadow`)

**Kayit ol formu genisletildi:** 3 planli kart (Kesif/Kurucu/Standart)
artik sikismis gorunmuyor. `showAuthTab()` icindeki modal genisligi
kayit sekmesinde 640px -> 960px'e cikarildi (giris sekmesi hala 460px,
degismedi). Form alanlari (isim, e-posta, sifre vb.) ise okunakli
kalsin diye 480px'lik ortalanmis bir sutunda tutuluyor - sadece
plan-grid tam genisligi kullaniyor.

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda yeni CSS siniflari (`vs-best-badge`, `vs-row-alt`,
  `vs-row-hover`), 960px modal genisligi ve form-ortalama kurali
  dogrulandi

## Faz 11 - Karsilastirma tablosu ve kayit ekrani gorsel iyilestirme (TAMAMLANDI)

Sadece CSS/tipografi/bosluk degisikligi - hicbir veri yapisi, tablo
duzeni veya JS mantigi degistirilmedi.

**Pazar Karsilastirmasi (`.vs-*` siniflari, atlas.css):**
- Satir yuksekligi artirildi (padding 16px -> 19px)
- Baslik satiri guclendirildi: bayrak biraz buyudu + golge, ulke ismi
  daha kalin (700->800), skor rozeti daha belirgin (altin kenarlik)
- Kazanan hucreler: arka plan vurgusuna ek olarak SOL kenarda ince teal
  cizgi eklendi (rozet zaten vardi, sadece rafine edildi)
- Bolum basliklarina sol tarafta ince altin ayirici cubuk eklendi,
  harf araligi genisletildi
- Zebra ve hover kontrastlari hafifce guclendirildi (hala "cok hafif")
- Hucre tipografisi: rakamlar artik --mono (aslinda sans-serif sistem
  fontu) ile, tabular-nums korunuyor
- Kart golgesi/kenarligi derinlestirildi (daha "premium" his)

**Kayit Ol ekrani:**
- Uc plan karti (Kesif/Kurucu/Standart) icin modal genisligi 960px'ten
  1040px'e cikarildi (bu genislik zaten JS'te `showAuthTab()` icinde
  dinamik olarak ayarlaniyordu - sadece degeri buyuttum)
- Plan-grid bosluk 16px->20px, kart ic bosluk 22px->26px - kutular
  daha ferah ve estetik duruyor
- Giris (login) sekmesi genisligi (460px) degismedi

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda tum CSS/JS degisiklikleri dogrulandi

## Faz 12 - Sektor Nabzi kilitlenme hatasi + iki adimli kayit akisi (TAMAMLANDI)

**1) KOK NEDEN BULUNDU: "Sektor Nabzi" tiklaninca sayfa kilitleniyordu**
Faz 9'da butonu Harita/Liste'nin yanina tasirken, gorsel tutarlilik icin
ona da `view-btn` sinifini vermistim. Sorun su: atlas-app.js'te TUM
`.view-btn` elemanlarina otomatik olarak "gorunum degistir" tiklama
davranisi baglayan genel bir kod var (Harita/Liste icin). Bizim yeni
butonun `data-view` niteligi olmadigi icin bu kod `showView(null)` ve
gecersiz bir `pushHistoryState()` cagirip sayfayi kilitliyordu - iki
farkli click handler ayni butonda catisiyordu.

**Cozum:** Ticker butonundan `view-btn` sinifi tamamen kaldirildi,
kendi bagimsiz `.ticker-toggle-btn` sinifi ile ayni gorsel stil
(pill + nabiz noktasi) korunarak yeniden tanimlandi. Artik sadece
kendi ac/kapa mantigi calisiyor, baska hicbir kodla catismiyor.

**2) Kayit ekrani iki adima bolundu**
- **Adim 1:** Uc paket karti (Kesif/Kurucu/Standart) + "Devam Et" butonu
- **Adim 2:** Secilen paket etiketi ("Secilen paket: Kurucu Uye") +
  "Geri" linki + kisisel bilgiler formu (isim, e-posta, sifre, sirket,
  telefon) + kayit butonu
- Adim 1'de modal genis (1040px, kartlar rahat), Adim 2'ye gecince
  modal daralir (460px, tek sutunlu form gibi gorunur)
- Sekmeler (Giris/Kayit Ol) arasinda gecis yapildiginda kayit akisi
  otomatik olarak Adim 1'e sifirlanir

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda ticker butonunun class'inin SADECE `ticker-toggle-btn`
  oldugu (view-btn icermedigi) dogrulandi
- registerStep1/registerStep2/registerContinueBtn/registerBackBtn
  elemanlarinin varligi dogrulandi

## Faz 13 - Ucuncu kademe kullanici yolculugu + Potansiyel Alici Veritabani (TAMAMLANDI)

Uc net seviye tanimlandi: **Ziyaretci** (oturum yok), **Baslangic/Kesif
Uyesi** (oturum var, ucretsiz), **Premium** (Kurucu/Standart). Yeni
`isVisitor()` / `isFreeMember()` yardimci fonksiyonlariyla ayirt ediliyor.

**Ulke raporu (tam rapor) kilidi - YENIDEN YAZILDI:**
- Eskiden: herkes (ziyaretci dahil) HAYAT BOYU 1 ulkeyi ucretsiz gorebiliyordu
- Simdi: **Ziyaretci** hicbir tam raporu goremez (sadece ust kisimdaki ozet
  KPI'lar - Firsat Skoru, Nufus - acik kalir). **Baslangic uyesi** ayda
  FARKLI 3 ulkenin tam raporunu acabilir (`FREE_MONTHLY_REPORT_LIMIT`),
  ay degisince kota sifirlanir (`getOpenedCountriesThisMonth` /
  `addOpenedCountryThisMonth`, ay bazli localStorage anahtari)
- Kilit ekrani artik ikiye ayrildi: ziyaretciye "Ucretsiz Kayit Ol",
  kotasi dolan uyeye "Uyeligimi Yukselt" (Premium modal) gosteriliyor

**Karsilastirma:**
- Ziyaretci: hic goremez, "Hemen Giris Yap" ile login'e yonlenir
- Baslangic uyesi: tek seferlik, EN FAZLA 2 ulke (eskiden 4'tu, artik
  premium disi herkes icin sinir 2). Hakki dolunca "Uyeligimi Yukselt"
  gosterilir (Premium modal)

**Filtreleme:**
- Ziyaretci: panel acilinca sadece "Gelismis filtreleme uyelere
  ozeldir" banner'i gorunur, alttaki kaydirici/secim alanlari TAMAMEN
  GIZLI (`filter-locked` CSS sinifi, eskiden sadece soluklastiriliyordu)
- Baslangic uyesi (ve premium): tam erisim, hicbir kisitlama yok

**PDF / Yazdir:** Ziyaretci tiklarsa artik Premium modal yerine dogrudan
GIRIS ekranina yonlendiriliyor; giris yapmis ucretsiz uye hala Premium
ekranina yonleniyor (PDF Baslangic'ta yok).

**Alicilar Listesi Talebi -> Potansiyel Alici Veritabani (TAMAMEN
YENIDEN TASARLANDI):**
- Eskiden: ucretsiz, T.C. Ticaret Bakanligi sitesine yonlendiren bir
  bilgi penceresiydi, herkese acikti
- Simdi: **satilan bir urun karti**. Ziyaretci tiklarsa giris ekranina
  yonlenir. Giris yapmis herkese (ucretsiz veya premium fark etmez -
  bu ayri, tek seferlik bir satin alma) yeni tasarim gosterilir:
  rozet + baslik + alt baslik + kisa aciklama + ikonlu 7 ozellik
  listesi (2 sutunlu) + altin fiyat karti ("Tek Ulke + 2 GTIP Kodu",
  $29 USD, "Hazir veri dosyasi") + buyuk altin CTA ("Satin Al ve
  Indir") + kucuk puntoda odeme notu
- Odeme altyapisi henuz baglanmadigi icin CTA tiklaninca durust bir
  toast gosteriliyor ("Odeme altyapisi yakinda aktif olacak") - sahte
  basari mesaji gosterilmiyor
- Yeni CSS sinif ailesi: `.buyer-db-*` (mevcut tema diliyle - --display
  italik baslik, --mono fiyat, altin gradyan rozet - uyumlu)

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda tum yeni fonksiyonlar (isVisitor, isFreeMember,
  FREE_MONTHLY_REPORT_LIMIT), yeni urun karti metni ve CSS siniflari
  dogrulandi
- Eski `getUnlockedCountryId` kodu bundle'da artik yok
- Ana sayfa ve ulke sayfalari sorunsuz yukleniyor (200)

### Not - kapsam disi birakilanlar
- "Guncelleme bildirimlerini alabilir" (Baslangic uye ozelligi) icin
  sitede hazir bir bildirim sistemi yok - bu, yeni bir ozellik
  gelistirmeyi gerektirir, bu oturumun kapsaminda degildi
- Kuresel Raporlar / Atlas Research+ gorunurlugu degistirilmedi (hala
  her zaman Premium modal aciyor) - istenirse ziyaretci/uye ayrimi
  oraya da eklenebilir

## Faz 14 - Kesif uyeligi limitleri haftalik oldu + kayit ekraninda belirtildi (TAMAMLANDI)

**Kota degisikligi: aylik -> haftalik**
- Ulke tam raporu: eskiden ayda 3 farkli ulke -> simdi **haftada 1 ulke**
  (`FREE_WEEKLY_REPORT_LIMIT = 1`)
- Karsilastirma: eskiden hayat boyu tek seferlik -> simdi **haftada 1 kez**
  (ayni hafta icinde tekrar denenirse kilitli kalir, hafta degisince
  sifirlanir)
- Yeni `currentWeekKey()` yardimcisi (ISO hafta numarasi, ornek "2026-W29")
  hem rapor hem karsilastirma kotasinin anahtarinda kullaniliyor
- Kilit ekranlarindaki metinler "bu ayki" -> "bu haftaki" olarak guncellendi

**Kayit ekraninda belirtildi**
Kesif Uyeligi kartinin ozellik listesine iki net madde EN BASA eklendi:
- "Haftada 1 ulke icin tam pazar raporu erisimi"
- "Haftada 1 kez, 2 ulke karsilastirma"

Ayrica listeye "Gelismis filtreleme araclarini kullanma" ve "Favori ulke
ekleme" maddeleri de eklendi (bunlar zaten Baslangic uyeligine taninan
haklar, kart bunu artik acikca belirtiyor).

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda `FREE_WEEKLY_REPORT_LIMIT`, `currentWeekKey` bundle'da
  mevcut, eski `FREE_MONTHLY_*` kodu tamamen kalkti
- Kayit ekranindaki iki yeni ozellik maddesi sayfa ciktisinda dogrulandi

## Faz 15 - Kurucu Uye rozeti yeniden tasarlandi (TAMAMLANDI)

Sadece gorsel - yerlesim (rozetin nerede gorundugu) degismedi.

- Yapisi degisti: eskiden tek metin satiri ("★ Kurucu Uye #1"), simdi
  3 ayri parca: `.badge-icon` (yildiz), `.badge-label` ("Kurucu Uye"),
  `.badge-number` (ayri kucuk chip, "#001" - 3 haneli, sifirla
  doldurulmus)
- Tipografi: italik `--display` yerine okunabilir `--body`, font-weight
  700 - daha guclu ve net
- Kenarlik: kalin duz sari yerine ince (1px) actin ton kenarlik
- Arka plan: duz renk yerine 3 durakli altin gradient (acik->orta->koyu)
  + hafif cam hissi icin ust ic golge (inset highlight)
  ve alt ic golge katmani
- Glow: onceki `0 2px 12px rgba(...,0.5)` -> `0 2px 8px rgba(...,0.35)`
  (~%30 azaltildi), sadece hover'da biraz guclenip geri donuyor
- Koseler: tam yuvarlak pilden (100px) -> yumusak kose (9px) kutu
  rozete gecildi - "#001" chip'i kendi icinde hala pilli (100px)
- Surekli calisan shimmer animasyonu KALDIRILDI (dikkat dagitmasin
  diye) - yerine SADECE hover'da calisan ince bir "isik gecisi" (light
  sweep) efekti eklendi

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda yeni `.badge-icon`/`.badge-label`/`.badge-number`
  yapisi ve guncellenmis `.membership-badge-founding` CSS'i dogrulandi

## Faz 16 - Kilit ipucu metni + /premium yeniden tasarim + Alici Listesi one cikarma (TAMAMLANDI)

**1) Kilitli buton ipucu artik kullaniciya gore degisiyor**
`.is-locked::after` CSS'i artik sabit "Uyelere Ozel" yerine
`content:attr(data-lock-tooltip)` kullaniyor. JS (`updatePremiumUI`,
`updateCompareButtonsUI`) bu attribute'u dolduruyor:
- Giris yapmis Kesif (ucretsiz) uye icin: **"UYELIGINIZI YUKSELTIN"**
- Ziyaretci icin: **"UYELERE OZEL"**
Yazdir/PDF ve Karsilastir butonlarinin ikisinde de gecerli.

**2) /premium sayfasi tamamen yeniden tasarlandi**
Eskiden dar (480px), sadece Kurucu+Standart gosteren dikey bir liste
idi. Simdi kayit ekranindaki 3 kartlik duzenle ayni dilde (genis,
1040px, `.plan-grid`, `.plan-card` aile siniflari) 3 sutunlu bir
karsilastirma sayfasi:
- **Kesif Uyeligi karti** (yeni) - giris yapmis ucretsiz uye icin
  "Su Anki Planiniz" rozeti (teal) + "Aktif Planiniz" bilgi kutusu;
  ziyaretci icin "Ucretsiz Baslangic" rozeti + "Ucretsiz Kayit Ol"
  butonu (yeni `updatePremiumFreeCard()` fonksiyonu, hem modal
  acilirken hem `/premium` URL'sine dogrudan gelindiginde calisiyor)
- **Kurucu Uye** ve **Standart** kartlari - icerik/fiyat/buton
  davranisi (odeme altyapisi olmadigi icin mevcut "tikla, uyelik
  hemen aktiflessin" akisi) degismedi, sadece gorsel olarak plan-card
  ailesine tasindi

**3) Alici Listesi Talebi dikkat cekiyor**
Butona artik: altin tonlu kenarlik/arka plan, kucuk "$29" fiyat
etiketi (chip) ve cok hafif, yavas bir parlama animasyonu eklendi
(`dash-action-featured` / `dash-action-badge` / `dashActionGlow`).
Rozetteki "dikkat dagitmasin" prensibinin aksine, burada amac zaten
tiklanmasi istenen bir CTA oldugu icin kasitli olarak goze carpiyor.

### Dogrulandi
- `npm run build` hatasiz gecti
- `/premium` sayfasinda 3 kart (Kesif/Kurucu/Standart) ve "Su Anki
  Planiniz" rozeti dogrulandi
- `updatePremiumFreeCard` ve "UYELIGINIZI YUKSELTIN" metni bundle'da
  mevcut
- Alici Listesi butonunun yeni CSS siniflari sayfada dogrulandi

## Faz 17 - Profil ekrani kontrolu + Alici Listesi fiyati kaldirildi (TAMAMLANDI)

**1) Profil -> Uyeligi Yukselt (zaten dogru calisiyordu)**
`openProfileModal()` fonksiyonu zaten `isFreeMember()` ise "Uyeligi
Yukselt" butonu gosteriyor ve tiklaninca `showPremiumModal()` acarak
Faz 16'da yeniden tasarlanan 3 kolonlu plan karsilastirma ekranina
yonlendiriyor. Ekstra degisiklik gerekmedi, dogrulandi.

**2) Alici Listesi butonundan fiyat kaldirildi**
`dash-action-badge` ("$29" cip'i) butondan kaldirildi. Altin vurgu +
hafif parlama animasyonu (`dash-action-featured`) korundu - buton hala
dikkat cekiyor, sadece fiyat artik butonda yazmiyor (fiyat zaten
tiklaninca acilan urun kartinda gosteriliyor).

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda buton HTML'inde "$29" / `dash-action-badge` yok,
  `dash-action-featured` sinifi hala mevcut
- `profileUpgradeBtn` ve "Uyeligi Yukselt" metni JS bundle'inda dogrulandi

## Faz 17 - Alici Listesi Talebi butonundan fiyat kaldirildi (TAMAMLANDI)

Buton uzerindeki "$29" fiyat etiketi (chip) kaldirildi. Buton hala
altin tonlu vurgu ve hafif parlama animasyonuyla dikkat cekiyor
(`dash-action-featured`), sadece fiyat artik yazmiyor - fiyat sadece
tiklanip acildigi Potansiyel Alici Veritabani urun karti icinde
gorunuyor. Kullanilmayan `.dash-action-badge` CSS kurali temizlendi.

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda "$29" metni ana sayfada artik gecmiyor (0 sonuc)
- `dash-action-featured` stili hala mevcut (buton hala vurgulu)

## Faz 18 - Logo favicon olarak eklendi (TAMAMLANDI)

Kullanicinin gonderdigi altin "A" + kure logosu (1024x1024, seffaf
arka planli PNG) favicon olarak entegre edildi. Next.js App Router'in
ozel dosya isimlendirme kurali kullanildi - hicbir kod degisikligi
gerekmedi, dosyalari doru yere koymak yetti:

- `app/favicon.ico` (16/32/48px, multi-size ICO)
- `app/icon.png` (512px)
- `app/apple-icon.png` (180px, iOS ana ekrana eklemek icin)
- `public/favicon-180.png` (180px - layout.tsx'in OG/Twitter/JSON-LD
  meta etiketlerinde zaten referans verdigi dosya, artik gercekten var)
- `public/logo.png` (1024px, orijinal cozunurluk - ileride baslikta
  kullanilmak istenirse hazir)

Site basligindaki ("Atlas." yazan yer) metin tasarimina DOKUNULMADI -
kullanici sadece favicon istedi, baslik degismedi.

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda `/favicon.ico`, `/icon.png`, `/apple-icon.png`,
  `/favicon-180.png` hepsi 200 donuyor
- Next.js'in otomatik olusturdugu `<link rel="icon">` ve
  `<link rel="apple-touch-icon">` etiketleri sayfa head'inde dogrulandi

## Faz 19 - Tam logo lockup sosyal medya paylasim gorseli olarak eklendi (TAMAMLANDI)

Kullanicinin gonderdigi tam marka gorseli (koyu lacivert zemin, altin
"A" + kure ikonu, "FURNITURE ATLAS" yazisi, "Dunya Pazarlari. Dogru
Veri. Dogru Karar." slogani - 1536x1024) Open Graph / Twitter Card
paylasim gorseli olarak ayarlandi:

- `public/og-image.jpg` (1200x800, JPEG kalite 90, ~72KB - orijinal
  1536x1024 PNG'den yeniden boyutlandirilip sikistirildi)
- `app/layout.tsx`: `openGraph.images` ve `twitter.images` artik bu
  dosyayi kullaniyor (genislik/yukseklik/alt metniyle birlikte,
  eskiden sadece kucuk favicon-180.png kullaniliyordu)

Artik link WhatsApp/Twitter/LinkedIn gibi yerlerde paylasildiginda bu
zengin marka gorseli onizleme olarak cikacak.

Site basligina (header) hala DOKUNULMADI - kullanici sadece favicon +
paylasim gorseli istedi, "Atlas." yazisi degismedi.

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda `/og-image.jpg` 200 donuyor
- `og:image`, `og:image:width/height/alt`, `twitter:image` meta
  etiketleri dogru degerlerle sayfa head'inde dogrulandi

## Faz 20 - Sadece yillik uyelik + metin sadelestirme (TAMAMLANDI)

**1) /premium sayfasi - aylik odeme secenegi kaldirildi**
Kurucu Uye ve Standart kartlarinda eskiden "aylik" ($1,99/ay, $9,99/ay)
VE "yillik" (alternatif buton) secenekleri birlikte sunuluyordu. Artik
SADECE yillik satisiliyor:
- Kurucu Uye: tek fiyat $19,90/yil (altinda "yaklasik $1,66/ay" bilgi
  amacli, kayit ekraniyla ayni format), tek buton "Kurucu Uye Ol —
  $19,90 / yil"
- Standart: tek fiyat $99,90/yil, tek buton "Standart ile Devam Et —
  $99,90 / yil"
- Artik var olmayan "veya .../ay" alternatif butonlarina bagli JS
  event listener'lari da kaldirildi (yoksa sayfa hata verip
  kilitlenirdi - `getElementById` null donup `.addEventListener`
  cagirinca patlardi)

**2) "olarak oder" ifadesi kaldirildi**
Kayit ekranindaki plan kartlarinda "yaklasik $1,66/ay olarak oder" ->
"yaklasik $1,66/ay" (Kurucu ve Standart kartlarinin ikisinde de)

**3) Kurucu Uye rozetinden numara detayi kaldirildi**
Rozet artik sadece "★ Kurucu Uye" gosteriyor, "#001" gibi bir sayi
chip'i yok. (Arka planda uyelik sirasi/founder_number verisi hala
Supabase'de saklaniyor ve kayit sirasinda gosterilen "Tebrikler -
Kurucu Uye #X oldunuz" tebrik mesajinda hala geciyor - sadece KALICI
rozetten kaldirildi.)

### Dogrulandi
- `npm run build` hatasiz gecti
- `/premium` sayfasinda $1,99 ve $9,99 (aylik fiyatlar) hic gecmiyor;
  $19,90 ve $99,90 (yillik fiyatlar) dogru sayida geciyor
- Kaldirilan yearly-toggle butonlarina ait JS kodu bundle'da yok
- Ana sayfada "olarak oder" ifadesi artik hic gecmiyor
- Rozet JS kodunda "#" iceren numara chip'i artik yok

## Faz 21 - Filtrele butonundaki kilit sadece ziyaretciye ozel (TAMAMLANDI)

**Bulunan sorun 1:** Filtrele butonunun kilit ikonu HTML'e SABIT olarak
yaziliydi (`<svg>` dogrudan buton icinde), hicbir JS kosulu ona
baglanmiyordu - bu yuzden giris yapmis olsun olmasin HERKESE
gorunuyordu.

**Cozum:** Kilit ikonu `<span id="filterLockIcon">` ile sarmalandi,
`updatePremiumUI()` icinde artik `isVisitor()` durumuna gore
gizleniyor/gosteriliyor - sadece ziyaretcide gorunuyor, herhangi bir
uyelikle (Kesif dahil) giris yapildiginda tamamen kalkiyor.

**Bulunan sorun 2 (daha derin bir hata):** `syncMembershipFromServer()`
fonksiyonu, kullanicinin `memberships` tablosunda satiri YOKSA (yani
tam olarak Kesif/ucretsiz uyeler icin - onlarin hic satiri olmuyor)
sessizce hicbir sey yapmadan cikiyordu - `updatePremiumUI()` bir daha
hic cagrilmiyordu. Sonuc: bir Kesif uyesi sayfayi yeniledigin de,
oturum dogrulanana kadar `updatePremiumUI()` "ziyaretci" durumuyla
calismis oluyordu ve BIR DAHA GUNCELLENMIYORDU - kilit ikonu (ve
potansiyel olarak baska kilit gostergeleri) yanlislikla takili
kaliyordu.

**Cozum:** Hem `sb.auth.getSession().then(...)` hem
`sb.auth.onAuthStateChange(...)` icinde, `syncMembershipFromServer()`
sonucu ne olursa olsun (satir bulunsa da bulunmasa da) artik HER
ZAMAN `updatePremiumUI()` tekrar cagriliyor. Bu, sadece Filtrele
ikonu icin degil, gelecekte eklenecek her turlu uyelik-bazli UI
gostergesi icin de kok neden duzeltmesi niteliginde.

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda `filterLockIcon` span'i hem HTML'de hem
  guncellenmis `updatePremiumUI()` icinde dogrulandi
- Session-refresh duzeltmesi (`updatePremiumUI(); // Keşif` yorumuyla
  isaretli satir) bundle'da mevcut

## Faz 22 - Kurucu Uye rozeti sikismasi duzeltildi (TAMAMLANDI)

**Sorun:** Rozet, header'daki dar flex satirinda (`.header-actions`)
diger butonlarla birlikte duruyor ama kendisine `flex-shrink:0`
tanimlanmamisti - bu yuzden satir sikistiginda (ozellikle mobilde,
`.header-actions` `max-width:70%` ile sinirli) rozet kucultulmeye
zorlaniyor, "★ Kurucu Uye" metni tam sigmiyordu.

**Cozum:** `.membership-badge` kuraline `flex-shrink:0` ve
`white-space:nowrap` eklendi - rozet artik asla sikistirilamaz,
her zaman dogal genisliginde tam metniyle gorunuyor. Mobilde
header-actions zaten yatay kaydirmali oldugu icin (diger butonlar
gibi) rozet de gerekirse kaydirilarak tam gorulebiliyor, kesilmiyor.

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda guncellenmis `.membership-badge` kurali
  (`flex-shrink:0; white-space:nowrap;`) dogrulandi

## Faz 23 - Favicon guncellendi (yeni tasarim) (TAMAMLANDI)

Kullanicinin gonderdigi yeni logo (altin cember icinde geometrik
kure - teal/altin/koyu facetli, koyu lacivert zemin, 1254x1254)
onceki favicon'un yerine gecti. Ayni dosyalar guncellendi:

- `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`
- `public/favicon-180.png`, `public/logo.png`

Kod tarafinda degisiklik gerekmedi (Next.js dosya adlandirma
kurali sayesinde otomatik algilaniyor). OG/Twitter paylasim gorseli
(`og-image.jpg`, ayri bir tam logo lockup) bu degisiklikten
etkilenmedi, o hala oncekiyle ayni.

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda tum favicon endpoint'leri (favicon.ico, icon.png,
  apple-icon.png, favicon-180.png) 200 donuyor

## Faz 24 - Netlify deploy hazirligi (TAMAMLANDI)

Proje Netlify'da calisacak sekilde ayarlandi:

- `netlify.toml` eklendi: build komutu (`npm run build`), Node surumu
  (22) ve resmi `@netlify/plugin-nextjs` plugin'i tanimli
- `@netlify/plugin-nextjs` package.json'a devDependency olarak eklendi
  (Netlify normalde bunu otomatik kuruyor ama acik yazmak daha
  guvenilir)

**ONEMLI - Netlify'in kendi "surukle-birak" ozelligi (Netlify Drop)
bizim projede ISE YARAMAZ.** Netlify Drop sadece HAZIR statik dosyalari
kabul ediyor, kaynak kodu derlemiyor (build calistirmiyor). Bizim
projemiz `next build` calismasi gerektigi icin iki secenek var:

**Secenek A - GitHub baglama (onerilen, kalici site icin):**
1. Bu projeyi bir GitHub reposuna yukle
2. app.netlify.com'da "Add new site" -> "Import an existing project"
3. GitHub reposunu sec - Netlify Next.js'i otomatik algilayip
   `netlify.toml`'daki ayarlari kullanarak build edip deploy eder
4. Her `git push`'ta otomatik yeniden deploy olur

**Secenek B - Netlify CLI (tek seferlik/hizli test icin):**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --build          # onizleme (draft) deploy
netlify deploy --build --prod   # canli (production) deploy
```
Bu, projeyi lokal makinede build edip doğrudan Netlify'a yukler,
GitHub gerektirmez.

### Dogrulandi
- `npm run build` (netlify.toml eklendikten sonra da) hatasiz gecti
- `netlify.toml` standart/guncel Netlify Next.js Runtime formatinda
  (resmi dokumantasyonla dogrulandi - web arama)
- Projede Netlify'da desteklenmeyen bir ozellik kullanilmiyor: tum
  sayfalar statik (SSG) uretiliyor, `fs.readFileSync` cagrilari
  sadece BUILD ANINDA calisiyor (Netlify'in "filesystem desteklenmiyor"
  uyarisi sadece CALISMA ANINDAKI (serverless function) dosya
  yazma/okuma islemleri icin gecerli, bizim SSG sayfalarimizi
  etkilemiyor)

## Faz 25 - Favicon seffaf/yuvarlak yapildi (TAMAMLANDI)

Favicon kare/siyah arka planla gorunuyordu (orijinal logo RGB'ydi,
seffaflik yoktu). Duzeltme:

1. Goruntu analiz edilip altin cemberin tam merkezi/yaricapi
   piksel bazinda tespit edildi (~merkez 627,627 - yaricap ~531px,
   1254x1254'luk gorselde)
2. Cemberin DISI seffaf yapildi (anti-aliased/yumusak kenarli
   dairesel maske, 4x supersample ile), cemberin İCİ (siyah zemin
   dahil - bu tasarimin kendi parcasi) aynen korundu
3. Tum favicon boyutlari bu yeni seffaf/dairesel kaynaktan yeniden
   uretildi: `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`,
   `public/favicon-180.png`, `public/logo.png`

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda tum favicon endpoint'leri 200 donuyor
- `icon.png` kose pikseli test edildi: (0,0,0,0) - tam seffaf

## Faz 26 - Footer premium tasarim (TAMAMLANDI)

Sadece CSS - yapi, linkler, metinler HIC degismedi.

- Ust ayirici: duz `border-top` yerine ince (1px), kenarlarda solan
  altin tonlu gradient cizgi (`::before` pseudo-element)
- Arka plan: duz renk yerine yukaridan gelen cok hafif radial gradient
  (altin tonlu, %5 opaklik) - tamamen duz siyah gorunmuyor artik
- "Furniture Atlas" marka blogu buyutuldu (22px->26px) ve daha genis
  bosluk verildi (max-width 280->320px, sag padding eklendi)
- Kolon basliklari: harf araligi ve font-weight artirildi, renk
  --amber (#c9a961) yerine tam istenen #D6B56C oldu
- Linkler: hover'da artik beyaza donup (var(--text-0)) 4px sola kayiyor
  (`transform:translateX(4px)`) - eskiden sadece teal renge doenuyordu
- Satir araligi (footer-col gap) 13px->17px, kolonlar arasi bosluk
  64px->80px
- Copyright satiri: font-weight 300 (ince) + opacity 0.68 (dusuk
  saydamlik) eklendi
- Footer toplam yuksekligi ~%20 artti (footer-inner padding
  56/26->68/32, footer-top padding-bottom 38->46, footer-col gap
  artisi da katkida bulundu)
- Kucuk ikon (mail/telefon/konum) zaten yoktu, eklenmedi (talimat
  geregi yeni icerik/ozellik eklenmedi)

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda yeni `.footer-col-title` rengi (#d6b56c) ve tum
  orijinal link/metinlerin (Hakkimizda, Yardim Merkezi, Kuresel
  Raporlar vb.) degismeden durdugu dogrulandi

## Faz 27 - Footer bilgi sayfalari premium yeniden tasarim (TAMAMLANDI)

Hakkimizda, Yardim Merkezi, Iletisim, Gizlilik Politikasi, Kullanim
Sartlari, Cerez Politikasi, Is Ortaklari (7 modal) - SADECE sunum
bicimi degisti. Hicbir metin, link veya icerik degistirilmedi/silinmedi
(Python script ile otomatik dogrulandi: her modalin normallestirilmis
duz metni islem oncesi/sonrasi birebir karsilastirildi).

**Onemli mimari karar:** Yeni stiller `.info-doc-body` diye YENI bir
scope sinifi altinda tanimlandi (sadece bu 7 modal'a eklendi). Eski
`.gr-card`, `.gr-list`, `.cp-section-title` gibi PAYLASILAN siniflar
degistirilmedi - cunku bunlar Kuresel Raporlar modalinda VE ulke
dashboard sayfalarinin kendi bolum basliklarinda da kullaniliyor.
Degistirseydik, istemeden butun siteyi etkilerdik. Dogruladim:
globalReportsModal HTML'i `info-doc-body` sinifini icermiyor, eski
gorunumunu aynen koruyor.

**Yapilan degisiklikler:**
- Her modalin `.compare-body`'sine `info-doc-body` sinifi eklendi,
  eski inline `max-width:760/820px` kaldirildi - hepsi artik tutarli
  960px genislikte
- Giris paragraflari `.info-intro` icine sarildi, `.gr-lead` (zaten
  var olan "hero" sinifi) buyutuldu (19px->25px, italik serif)
- Her `<h3 class="cp-section-title">...</h3>` + sonrasindaki icerik
  otomatik olarak `.info-section` paneline sarildi (koyu, #11161f
  arka planli, yumusak kenarli kutu) - "bol dikey bosluk" ve "bolum
  ayirimi" boyle saglandi
- Baslik altina altin renkli (#d6b56c) kisa accent cizgi eklendi
  (::after ile, mevcut kalin border-bottom yerine)
- Kart (`gr-card`) basliklarina altin checkmark ikon eklendi (CSS
  mask ile, ekstra HTML gerekmedi)
- Liste maddelerinin ('—' tire yerine) artik ince altin halka
  (outline nokta) ikonu var
- Satir yuksekligi genel olarak artirildi (1.9)
- **Icerik yapisi degisikligi (metin AYNI, sadece HTML sarmalayici
  degisti):** aboutModal'daki "Neler Sunuyoruz?" ve partnersModal'daki
  "Neden Furniture Atlas?" listeleri, ayni 6/5 maddeyi birebir
  koruyarak duz liste yerine 2-3 sutunlu feature kart izgarasina
  cevrildi

### Dogrulandi
- `npm run build` hatasiz gecti
- Python script ile TUM 7 modalin metni (etiketler cikarilip
  normallestirildikten sonra) islem oncesi/sonrasi birebir ayni
  cikti dogrulandi
- Uretim sunucusunda tum orijinal metinler (basliklar, e-postalar,
  liste maddeleri) sayfa ciktisinda mevcut
- globalReportsModal'in HTML'i `info-doc-body` sinifi icermiyor -
  etkilenmedi

## Faz 28 - Mobil zoom butonlari + ozet kart geri geldi (TAMAMLANDI)

**1) KOK NEDEN: +/- yakinlastirma butonlari mobilde tiklama uretmiyordu**
`.zoom-controls` butonlari, kureyi surukleme icin kullanilan
`#globeStage` (`stage`) elementinin ICINDE duruyor. `stage`'in
`touchstart` dinleyicisi HER dokunusta `e.preventDefault()` cagiriyordu
- bu da tarayicinin o dokunustan normalde uretecegi "click" olayini
tamamen iptal ediyordu, butonlar dahil. Duzeltme: touchstart
handler'ina, dokunulan yer `.zoom-controls` icindeyse hicbir sey
yapmadan cikan bir kontrol eklendi - artik +/- butonlarina dokunmak
normal sekilde tiklama olusturuyor, kureyi surukleme mantigi devreye
girmiyor.

**2) Mobilde artik masaustundeki gibi once ozet kart aciliyor**
Kodda zaten hazir duran ama kullanilmayan bir fonksiyon bulundu:
`tryPreviewAtPoint()` - masaustu "uzerine gelme" kartinin AYNISINI
(+ "Detaya Git ->" butonu) mobilde de gostermek icin yazilmis, ama
bir asamada devre disi birakilip yerine dogrudan tam sayfa acan
`tryOpenAtPoint()` kullanilmaya baslanmisti.

Duzeltme: `endDrag()` icinde artik parmakla dokunma (touch) ile
tiklama ayirt ediliyor - dokunmatikse `tryPreviewAtPoint()` (ozet
kart + "Detaya Git" butonu), fare tiklamasiysa eskisi gibi
`tryOpenAtPoint()` (dogrudan sayfa) cagriliyor. "Detaya Git"
butonunun kendi tiklama mantigi zaten tam calisir haldeydi
(`hcDetailBtn`), sadece bu yeni yola hic yonlendirilmiyordu.

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda hem zoom-controls touchstart korumasi hem
  `tryPreviewAtPoint` cagrisi bundle'da dogrulandi

## Faz 29 - Veri yili notlari, Turkiye'ye uzaklik karti, Gelecek Kaynaklar kaldirildi,
## Alici Listesi eski haline dondu, mobil kapat butonu, marka tablosu birlestirme (TAMAMLANDI)

**1) Veri yili bilgisi eklendi**
Ulke sayfasindaki Pazar Genel Bakisi (Nufus/GSYIH/Enflasyon) ve Ana
Tedarikci Ulkeler bolumlerine, kodda zaten var olan ama ekranda hic
gosterilmeyen gercek kaynak yillari (IMF WEO Nisan 2026, IMF WEO 2025,
importDataSource alani) footnote olarak eklendi. Hicbir yil UYDURULMADI -
hepsi mevcut veri/yorumlardan alindi.

**2) Turkiye'ye Uzaklik karti eklendi**
Her ulke sayfasina, ziyaretciye bile acik (kilitsiz) sicak bir kart
eklendi: iki bayrak + ucus hatti gorseli + gercek koordinatlardan
(zaten veride olan lat/lon) Haversine formuluyle hesaplanan km +
tahmini dogrudan ucus suresi. `haversineKm()` ve `renderDistanceCard()`
fonksiyonlari eklendi, matematik Node'da test edildi (Turkiye->Almanya
~2337km, Turkiye->ABD ~10166km - gercekci degerler).

**3) "Gelecek Kaynaklar" bolumu kaldirildi**
Ulke sayfasindaki "12 Gelecek Kaynaklar" basligi ve altindaki "Yakinda
eklenecek" placeholder kartlari tamamen kaldirildi.

**4) Alicilar Listesi Talebi eski (basit) haline dondu**
- Faz 16'da eklenen "$29 Potansiyel Alici Veritabani" urunu TAMAMEN
  kaldirildi (modal, JS mantigi, CSS - hepsi silindi)
- Buton artik dogrudan bir `<a>` linki: tiklaninca yeni sekmede
  `https://musaviredanisin.ticaret.gov.tr/` aciyor
- Altin "featured" vurgusu kaldirildi (`.dash-action-featured` CSS'i de
  silindi)
- Hover'da altin renkli "ticaret.gov.tr" ipucu cikiyor (yeni `.gov-link`
  CSS sinifi)
- /premium sayfasindaki "Alici veri tabani" ozellik maddesi kaldirildi
- Site genelinde sirket/alici verisi paylasildigi izlenimi veren baska
  metin bulunamadi

**5) Mobil ozet kartina Kapat (X) butonu eklendi**
`showHoverCard()` ve `showTurkeyCard()` fonksiyonlarinin ikisine de sag
ust kosede kucuk bir kapat butonu eklendi (`hc-close-btn`). Kart
`pointer-events:none` oldugu icin butona ozel olarak `pointer-events:auto`
verildi (aksi halde tiklanamaz olurdu).

**6) Marka tablosunda "Bilinmeyen" satirlar birlestirildi**
"Premium Italyan Mobilya Markalari" tablosunda Natuzzi, BoConcept,
Calligaris, Rimadesio icin her zaman 4 ayri "Bilinmiyor" satiri
gosteriliyordu. Artik tek bir birlesik satirda: "Natuzzi Italia,
BoConcept, Calligaris, Rimadesio | Ulke bazinda dogrulanmis veri yok"
seklinde gosteriliyor (colspan ile).

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda: Alici Listesi linkinin dogru URL'e gittigi,
  "Gelecek Kaynaklar" basliginin JS'te artik gecmedigi, mesafe karti
  fonksiyonlarinin (`renderDistanceCard`, `haversineKm`), kapat
  butonunun (`hcCloseBtn`), birlesik marka satirinin (`noDataBrands`)
  ve veri yili notlarinin bundle'da mevcut oldugu dogrulandi

## Faz 29 - Veri yili, mesafe karti, Gelecek Kaynaklar kaldirma, Alici Listesi geri alma (TAMAMLANDI)

**1) Veri yili bilgisi eklendi**
Kodda zaten var olan ama hic ekranda gosterilmeyen kaynak/yil bilgileri
artik ulke sayfasinda gorunuyor:
- Pazar Genel Bakisi bolumune: "Nufus ve GSYIH 2026 tahminidir (IMF WEO,
  Nisan 2026), Enflasyon 2025 (IMF WEO)" notu eklendi
- Ana Tedarikci Ulkeler bolumune: mevcut ama kullanilmayan
  `c.importDataSource` alani artik footnote olarak gosteriliyor
  (orn. "2024, HS 9403, UN Comtrade (GTAIC)")
- Hicbir yeni/uydurma yil eklenmedi - hepsi veride zaten mevcut olan
  gercek kaynak bilgileri

**2) Turkiye'ye Uzaklik karti eklendi (ulke sayfasi atmosferi)**
Her ulke sayfasinin en ustune, ZIYARETCIYE BILE ACIK (kilitsiz) yeni
bir kart eklendi: iki bayrak + kesik cizgili "ucus hatti" gorseli +
gercek km mesafe + tahmini dogrudan ucus suresi. Mesafe, ulkelerin
veride zaten var olan gercek lat/lon koordinatlarindan Haversine
formuluyle hesaplaniyor (uydurma degil, gercek geometri). Ucus suresi
acikca "tahmini" olarak etiketlendi (ortalama seyir hizi + sabit
kalkis/inis suresi varsayimiyla).

**3) "Gelecek Kaynaklar" bolumu kaldirildi**
Ulke sayfasinin en altindaki, henuz doldurulmamis 6 veri seti icin
"Yakinda eklenecek" placeholder karti gosteren bolum tamamen
kaldirildi.

**4) Alici Listesi Talebi eski (ucretsiz yonlendirme) haline
DONDURULDU**
Faz 16'da "Potansiyel Alici Veritabani" adiyla $29'a satilan urun
kartina cevrilmisti - bu TAMAMEN GERI ALINDI:
- Altin "featured" vurgusu kaldirildi (`dash-action-featured` sinifi
  ve CSS'i tamamen silindi)
- Buton artik JS ile acilan bir modal degil, DOGRUDAN dis linke giden
  bir `<a>` etiketi: `https://musaviredanisin.ticaret.gov.tr/`,
  `target="_blank"`
- Uzerine gelince altin renkli "ticaret.gov.tr" ipucu cikiyor (yeni
  `.gov-link` CSS sinifi, mevcut kilit-ipucu diliyle tutarli)
- Eski urun karti modali (`buyerListModal`), onun JS mantigi
  (`buyerListBtn` click handler, ~40 satir urun karti HTML'i) ve CSS'i
  (`.buyer-db-*`, ~55 satir) TAMAMEN silindi

**5) Sirket/alici verisi paylasimi izlenimi veren metin temizlendi**
/premium sayfasinin Standart plan kartindaki "Alici veri tabani"
ozellik maddesi kaldirildi. Baska bir yerde boyle bir ifade
bulunamadi (arandi, dogrulandi).

### Dogrulandi
- `npm run build` hatasiz gecti
- JS bundle'inda: "Gelecek Kaynaklar" 0, "Veri yili" 2, mesafe karti
  fonksiyonlari (renderDistanceCard/haversineKm/TURKEY_COORDS) 8,
  eski urun karti kodu 0
- Ana sayfa HTML'inde: musaviredanisin linki ve gov-link sinifi
  dogrulandi, dash-action-featured tamamen kalkti
- /premium sayfasinda "Alici veri tabani" ifadesi artik gecmiyor

## Faz 30 - Filtre gostergesi, liste checkbox saglamlastirma, hedef ulke pini (TAMAMLANDI)

**1) Filtre aktif gostergesi - KOK NEDEN DUZELTILDI**
Bulunan gercek hata: buton varsayilan (filtre YOKKEN) durumda surekli
titresiyordu (`filterPulse` animasyonu), filtre AKTIFKEN ise animasyon
tamamen KAPANIYORDU (`animation:none`) - yani tam ters calisiyordu,
kullanicinin filtrenin acik kaldigini unutmasinin sebebi buydu.
Duzeltme: titresen animasyon artik SADECE filtre aktifken calisiyor
(`filterActivePulse`, amber renkli genisleyen halka), bos durumda
buton sakin duruyor. Aktif filtre sayisi da artik buton yaninda
kontrast bir "rozet" (koyu zeminde altin sayi) olarak gösteriliyor,
eskiden dusuk kontrastli duz metindi.

**2) Liste sayfasi checkbox - daha saglam hale getirildi**
Kod analizinde mevcut capture-phase korumasi yapisal olarak dogru
gorundu (checkbox ayri bir <td>, digerleriyle onclick paylasmiyor);
yine de riski sifirlamak icin checkbox artik bir `<label>` ile
sarmalandi - TUM hucre artik checkbox'in native, tarayici-standardi
tiklama alani (JS ile manuel toggle mantigi kaldirildi, cift
tetiklenme riski de boylece ortadan kalkti). Hucrenin tamami artik
tiklanabilir/secilebilir, ama satiri KESINLIKLE acamaz.

**3) Hedef Ulkelerim icin kurede pin gosterimi eklendi**
Kullanicinin "Hedef Ulkelerim"e ekledigi ulkeler artik ana sayfadaki
kurede altin renkli, hafif ziplayan bir pin ile isaretleniyor - normal
noktalardan acikca ayrisiyor, dikkat cekici. Giris/cikis ve hedef
ekleme/cikarma anlarinda pin durumu otomatik guncelleniyor (performans
icin bir cache mekanizmasi var, ilgili her yerde invalidate ediliyor).

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda: `filterActivePulse` CSS'i, `td-check-label` hem
  CSS hem JS'te, `node-pin` CSS'i ve `getTargetIdsCache`/
  `invalidateTargetIdsCache`/`is-target` JS'te dogrulandi

## Faz 31 - robots.txt ve sitemap.xml eklendi (TAMAMLANDI)

Next.js App Router'in resmi Metadata API'si kullanildi - hicbir
mevcut route/dosya degistirilmedi, sadece iki yeni dosya eklendi:

- `app/robots.ts` -> `/robots.txt` otomatik uretiliyor:
  ```
  User-Agent: *
  Allow: /

  Sitemap: https://furnitureatlas.org/sitemap.xml
  ```
- `app/sitemap.ts` -> `/sitemap.xml` otomatik uretiliyor, toplam
  **371 URL**:
  - 17 statik sayfa (Ana Sayfa, Liste, Ahsap Mobilya varyantlari,
    Premium, Haberler, Fuarlar, Seyahat Planla, Kuresel Raporlar,
    Atlas Research+, Hakkimizda, Iletisim, Is Ortaklari, Yardim
    Merkezi, Gizlilik Politikasi, Kullanim Sartlari, Cerez Politikasi)
  - 177 ulke x 2 kategori (`/country/<slug>` ve
    `/country/<slug>/ahsap-mobilya`) = 354 URL
  - `lib/countries-data.js`'deki ayni `COUNTRIES` listesi kullanildi
    (route'larin `generateStaticParams`'iyla birebir tutarli)
- **Kasitli olarak DAHIL EDILMEYEN:** `/hedef-ulkelerim` - bu sayfa
  zaten `noindex` (kisiye ozel/bos icerik), sitemap'e de girmiyor

### Dogrulandi
- `npm run build` hatasiz gecti, `/robots.txt` ve `/sitemap.xml`
  route listesinde statik olarak goruldu
- Uretim sunucusunda robots.txt icerigi istenen formatla dogrulandi
- sitemap.xml gecerli XML, tam 371 URL iceriyor
- `/hedef-ulkelerim` sitemap'te YOK (dogrulandi)
- Ornek ulke sayfalari (`/country/spain`,
  `/country/spain/ahsap-mobilya`) sitemap'te mevcut

## Faz 32 - KRITIK HATA DUZELTMESI: site tamamen calismiyordu (TAMAMLANDI)

**Bulunan sorun:** Bir onceki fazda (Faz 30, hedef ulke pin ozelligi)
eklenen `getTargetIdsCache()` fonksiyonu `getCurrentUser()`'i cagiriyor,
o da `currentSupabaseSession` degiskenini okuyordu. Sorun su: bu
degisken `let currentSupabaseSession = null;` ile dosyanin COK
ILERISINDE (satir ~3661) tanimliyken, kurenin render() fonksiyonu
sayfa yuklenir yuklenmez, SENKRON olarak COK DAHA ERKEN (satir ~2303)
cagriliyor. JavaScript'te `let`/`const` degiskenleri "temporal dead
zone" (TDZ) icinde olur - tanimlandiklari satira gelene kadar
erisilemezler, erisilmeye calisilirsa ReferenceError firlatilir.

Sonuc: sayfa acilir acilmaz, render() -> updateMarkers() ->
getTargetIdsCache() -> getCurrentUser() zincirinde bir
ReferenceError firlatiliyor, bu da SENKRON oldugu icin TUM SCRIPT'IN
o noktada calismayi durdurmasina yol aciyordu. Bu noktadan SONRAKI
hicbir kod (Harita/Liste/Sektor Nabzi sekme tiklama olaylari, filtre
mantigi, kurenin donme animasyon dongusu vb.) HIC KAYDEDILMIYORDU -
tam olarak bildirilen "sekmeler calismiyor, dunya donmuyor" belirtisi.

**Duzeltme:** `getTargetIdsCache()` artik `getCurrentUser()`
cagrisini try/catch ile koruyor - degisken henuz TDZ'deyse sessizce
bos hedef listesiyle devam ediyor, oturum bilgisi gercekten
yuklendiginde (birkac satir sonra calisan invalidateTargetIdsCache()
cagrilariyla) otomatik duzeliyor.

**Dogrulama yontemi:** Once Node.js'te izole bir kod ornegiyle
(`let X` kullanmadan once okuyan bir fonksiyon + try/catch) TDZ
hatasinin gercekten bu sekilde olustugunu VE try/catch'in onu
dogru sekilde yakaladigini kanitladim. Sonra gercek atlas-app.js
dosyasini mock bir tarayici ortaminda calistirip, script'in artik
eski cokme noktasinin (satir 2303) COK otesine (satir 4264'e kadar)
sorunsuz ilerledigini dogruladim.

### Dogrulandi
- `npm run build` hatasiz gecti
- Node'da izole TDZ testi: hata once yakalaniyor, degisken
  tanimlandiktan sonra dogru calisiyor
- Uretim sunucusunda yeni try/catch korumasi bundle'da mevcut
- Mock tarayici ortaminda script artik onceki cokme noktasinin
  cok otesine kadar hatasiz ilerliyor

## Faz 33 - Ulke sayfasi "Market Overview" hero bolumu (TAMAMLANDI)

Ulke sayfalarinin en ustune, mevcut veri yapisini BOZMADAN yeni bir
karsilama alani eklendi. Amac: sadece veri gostermek degil, hedef
pazari "tanitmak" ve motivasyon olusturmak.

**Neden gercek fotograf (Eyfel Kulesi, Tokyo skyline vb.) KULLANILMADI:**
177 ulke icin telifsiz/lisansli gercek fotograf tedarik etmek hem
olcek olarak imkansiza yakin hem de olasi telif hakki ihlali riski
tasiyor (rastgele bir "Eyfel Kulesi" gorseline hotlink vermek, o
gorselin haklarina sahip olmadan kullanmak anlamina gelebilir).
Bunun yerine, sitenin zaten sahip oldugu GERCEK verilerle (koordinat,
bolge siniflandirmasi, bayrak) tamamen ozgun, telif riski sifir,
premium bir gorsel dil kuruldu.

**Eklenenler:**

1. **REAL_CAPITALS** - 177 ulkenin gercek baskent bilgisi (statik
   cografi gercek, bayrak/koordinat gibi ayni kategoride - "uydurma
   veri" degil).

2. **Bolgeye gore hero teması** - mevcut `REGION_MAP` (zaten vardi)
   kullanilarak her ulkeye kendi bolgesine (Avrupa, Ortadogu, Uzak
   Dogu, Afrika vb.) ozgu bir gradyan renk teması atandi - 177 ulke
   birbirinden gorsel olarak ayrisiyor.

3. **Kucuk ulke haritasi** - WORLD_DATA'daki GERCEK sinir (rings)
   koordinatlarindan (zaten kurenin kendisini cizmek icin kullanilan
   ayni veri) kucuk bir SVG harita uretiliyor. Denizasiri topraklari
   olan ulkelerde (ABD-Alaska, Fransa-Fransiz Guyanasi gibi) olcek
   bozulmasin diye sadece en buyuk ana kara parcasi gosteriliyor.

4. **Turkiye baglanti rotasi** - onceki fazda eklenen mesafe karti
   buraya tasindi/birlestirildi: iki bayrak, kesikli animasyonlu
   "ucus hatti", gercek km mesafe ve tahmini ucus suresi.

5. **Baskent bilgisi** - REAL_CAPITALS'tan gosteriliyor.

6. **Karsilama basligi** - "MARKET OVERVIEW" etiketi + buyuk ulke
   adi + bayrak, sicak/modern bir karsilama hissi icin.

Sayfanin geri kalani (Yonetici Ozeti, Pazar Genel Bakisi, Ticaret
Ozeti vb.) HIC DEGISMEDI - hero sadece en basa eklendi.

### Kritik hata sonrasi ekstra dogrulama adimlari
Bir onceki mesajda yasanan "TDZ hatasi tum siteyi kilitledi" olayindan
sonra, bu fazda EKSTRA dogrulama yapildi:
- Node'da mock tarayici ortaminda TUM script calistirildi, hicbir
  yeni hata bulunmadi (script eskisi gibi ayni (beklenen, zararsiz)
  noktaya kadar sorunsuz ilerledi)
- `renderCountryHero` fonksiyonu GERCEK COUNTRIES verisiyle DOGRUDAN
  cagirilip HTML ciktisi dogrulandi (bayrak, baskent, minimap, route
  hepsi doğru uretildi)
- Ispanya, Japonya, ABD, Fransa, Nijerya icin mesafe hesaplari elle
  kontrol edildi (ornegin Turkiye-Japonya ~8542 km, cografi olarak
  dogru araliktadir)

### Dogrulandi
- `npm run build` hatasiz gecti
- Node mock tarayici testinde script hatasiz calisti
- `renderCountryHero` gercek veriyle dogrudan test edildi, dogru HTML
  uretti
- Uretim sunucusunda `country-hero`, `REAL_CAPITALS`,
  `renderCountryMiniMap`, `hero-route` JS'te; `.country-hero{}`,
  `.hero-minimap` CSS'te dogrulandi

## Faz 34 - "Market Overview" -> "Ülke Profili" (TAMAMLANDI)

Hero'daki ust etiket ingilizce "MARKET OVERVIEW" yerine "ÜLKE PROFİLİ"
olarak degistirildi. Baska hicbir sey degismedi.

### Dogrulandi
- `npm run build` hatasiz gecti
- Uretim sunucusunda "ÜLKE PROFİLİ" metni bundle'da var, eski
  "MARKET OVERVIEW" tamamen kalkti
