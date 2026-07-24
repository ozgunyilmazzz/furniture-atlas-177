/* =========================================================
   PİYASA ŞERİDİ (Atlas Ticker) — sayfanın en altında sabit duran
   kayan bilgi şeridi. Bağımsız bir bileşen; FACTS dizisini
   güncelleyerek içeriği kolayca değiştirebilirsiniz.
   ========================================================= */
(function(){
  var FACTS = [
    {t:"Türkiye 2025'te mobilyada en büyük tekil pazarı Irak oldu", v:"609 milyon $", dir:"up"},
    {t:"Almanya, Türk mobilya ihracatında 2. sırada", v:"372 milyon $", dir:"flat"},
    {t:"Fransa'nın oturma grubu mobilya ithalatı 2025'te geriledi", v:"-%2,3 · 1,16 milyar $", dir:"down"},
    {t:"Fransa'nın ahşap mobilya ithalatı ise arttı", v:"+%0,9 · 1,51 milyar $", dir:"up"},
    {t:"ABD, dünyanın en büyük oturma grubu ithalatçısı ama pazar daraldı", v:"-%9,9 · 7,36 milyar $", dir:"down"},
    {t:"İspanya, oturma grubu ithalatında 2025'in en hızlı büyüyen pazarı", v:"+%23,8 · 284 milyon $", dir:"up"},
    {t:"Hindistan'ın ahşap mobilya ithalatı 2025'te sıçradı", v:"+%51,0 · 74 milyon $", dir:"up"},
    {t:"Malezya'nın ahşap mobilya ithalatı hızla büyüdü", v:"+%35,6 · 317 milyon $", dir:"up"},
    {t:"Çin'in oturma grubu ithalatı 2025'te en sert düşen pazarlardan", v:"-%11,4 · 148 milyon $", dir:"down"},
    {t:"İsrail'in oturma grubu ithalatı geriledi", v:"-%9,0 · 113 milyon $", dir:"down"},
    {t:"Irak'ta Türkiye'nin oturma grubu pazar payı", v:"%91 — dünyada en yüksek tekil hakimiyet", dir:"up"},
    {t:"Suriye'de Türk mobilyasının pazar payı", v:"%94", dir:"up"},
    {t:"Türkmenistan'da ahşap mobilyada Türkiye lider", v:"%61 pay", dir:"up"},
    {t:"Libya'da Türkiye oturma grubunda lider konumda", v:"%68 pay · pazar 22,6 milyon $", dir:"up"},
    {t:"Ürdün'e Türk ahşap mobilya ihracatı 2025'te patladı", v:"+%171 · 9,1 milyon $", dir:"up"},
    {t:"Danimarka'ya Türk ahşap mobilya ihracatı ikiye katlandı", v:"+%116", dir:"up"},
    {t:"Sırbistan'a Türk ahşap mobilya ihracatı ikiye katlandı", v:"+%98 · 11,7 milyon $", dir:"up"},
    {t:"Birleşik Krallık'a Türk ahşap mobilya ihracatı sıçradı", v:"+%63 · 31,7 milyon $", dir:"up"},
    {t:"Nijerya'ya Türk ahşap mobilya ihracatı çöktü", v:"-%97,6 · 252 bin $", dir:"down"},
    {t:"Kuveyt'e Türk ahşap mobilya ihracatı geriledi", v:"-%54,3", dir:"down"},
    {t:"ABD'nin ahşap mobilya ithalatı da daraldı", v:"-%10,6 · 6,43 milyar $", dir:"down"},
    {t:"Japonya'nın oturma grubu pazarında Çin bağımlılığı en yüksek seviyede", v:"%66 Çin payı", dir:"flat"},
    {t:"Avustralya oturma grubu ithalatının çoğunu Çin'den yapıyor", v:"%77 Çin payı", dir:"flat"},
    {t:"Gürcistan'da Türkiye oturma grubu pazarının önemli kısmına sahip", v:"%41 pay", dir:"up"},
    {t:"Romanya, Türk mobilya ihracatında 5. büyük pazar", v:"219 milyon $", dir:"flat"},
    {t:"Meksika'nın oturma grubu ithalatı hafif geriledi", v:"-%1,7 · 190 milyon $", dir:"down"},
    {t:"Yeni Zelanda'nın oturma grubu ithalatı düştü", v:"-%4,4 · 93 milyon $", dir:"down"}
  ];

  function arrow(dir){
    if(dir==="up") return '<span class="up">▲</span>';
    if(dir==="down") return '<span class="down">▼</span>';
    return '<span class="flag">●</span>';
  }

  function buildItems(){
    return FACTS.map(function(f){
      return '<span class="item">'+arrow(f.dir)+' '+f.t+' — <b>'+f.v+'</b></span>';
    }).join('');
  }

  var track = document.getElementById('atlas-ticker-track');
  // Sonsuz döngü için içeriği iki kez basıyoruz (animasyon %-50 kayınca sıfırlanıyor)
  var html = buildItems();
  track.innerHTML = html + html;

  // Şerit artık varsayılan olarak KAPALI — ana sayfada kendiliğinden görünmez.
  // Harita/Liste sekmelerinin yanındaki "Sektör Nabzı" butonuyla isteğe bağlı açılır.
  var STORAGE_KEY = 'atlasTickerOpen';
  var wrap = document.getElementById('atlas-ticker-wrap');
  var toggleBtn = document.getElementById('atlas-ticker-toggle');
  var closeBtn = document.getElementById('atlas-ticker-close');
  var root = document.documentElement;

  function close(){
    wrap.style.display = 'none';
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-pressed', 'false');
    root.style.setProperty('--ticker-h', '0px');
    try{ localStorage.removeItem(STORAGE_KEY); }catch(e){}
  }
  function open(){
    wrap.style.display = 'block';
    toggleBtn.classList.add('active');
    toggleBtn.setAttribute('aria-pressed', 'true');
    root.style.setProperty('--ticker-h', '40px');
    try{ localStorage.setItem(STORAGE_KEY,'1'); }catch(e){}
  }

  closeBtn.addEventListener('click', close);
  toggleBtn.addEventListener('click', function(){
    if(wrap.style.display === 'block') close(); else open();
  });

  try{
    if(localStorage.getItem(STORAGE_KEY) === '1'){ open(); }
  }catch(e){}
})();
