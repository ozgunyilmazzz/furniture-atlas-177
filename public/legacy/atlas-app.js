console.log('%cFurniture Atlas build: checkbox-fix-v6', 'color:#c9a961; font-weight:bold;');
/* =========================================================
   ÖRNEK VERİ SETİ — tamamı gösterim amaçlıdır
   ========================================================= */
const COUNTRIES = [
  {
    id:'chile', iso:'CL', name:'Şili', flag:'🇨🇱', lat:-35.68, lon:-71.54, dq:{population:'real',gdp:'real',vat:'real',importTax:'real',minWage:'real',logistics:'estimated',importGrowth:'real'},
    population:'19.9M', gdp:'$407.9B', gdpPerCapita:'$20,240', minWage:'$561', vat:'19%',
    importTax:'6%', customsDuty:'6.0%', fta:'STA mevcut (2011)', logisticsCost:'$2,450 / konteyner',
    transitTime:'34–38 gün', ports:'Valparaíso, San Antonio', transportMode:'sea', distanceKm:13000, currency:'CLP', exchangeRate:'1 USD ≈ 924.96 CLP',
    eodb:'59 / 190', marketSize:'$410M', annualImports:'$186M', importGrowth:'-2.9%/yıl', importDataVerified:false,
    freightCost:'$3,180 / TEU', politicalRisk:'Düşük–Orta',
    importGrowth10:[142,151,149,163,171,168,179,182,175,186],
    suppliers:[{c:'Çin',v:38},{c:'Brezilya',v:14},{c:'İtalya',v:11},{c:'Türkiye',v:6},{c:'Polonya',v:5},{c:'Diğer',v:26}],
    turkeyHistory:[8,9,11,10,12,13,15,14,16,17],
    turkeyShare:'%6.1', turkeyGrowth:'+18.4%',
    exporters:[
      {name:'Aydın Mobilya Dış Tic.', city:'İnegöl', cat:'Yatak odası', vol:'~$1.2M/yıl'},
      {name:'Bellona Export', city:'Kayseri', cat:'Oturma grubu', vol:'~$860K/yıl'},
    ],
    certs:'FSC sertifikası tercih ediliyor, alev geciktirici döşeme testi (NCh 1974)',
    docs:'Ticari fatura, konşimento, menşe belgesi, fitosaner sertifika (ahşap için)',
    scores:{market:88, difficulty:34, competition:58, logistics:71, overall:82},
    aiSummary:'Şili pazarı istikrarlı büyüme gösteriyor ve Çin baskın tedarikçi olsa da Türkiye\'nin payı son üç yılda belirgin şekilde arttı. Serbest ticaret anlaşması sayesinde gümrük avantajı var; lojistik maliyeti bölgedeki diğer Latin Amerika pazarlarına kıyasla makul. Orta-üst segment oturma grubu ve yatak odası kategorilerinde rekabet görece az.',
    buyers:[
      {name:'Casa & Living Import S.A.', type:'Toptancı / Zincir mağaza', cat:'Oturma grubu, yatak odası'},
      {name:'Muebles del Sur Ltda.', type:'Distribütör', cat:'Ofis mobilyası'},
      {name:'Nordika Home Santiago', type:'Perakende zinciri', cat:'İskandinav tarzı mobilya'},
    ]
  },
  {
    id:'germany', iso:'DE', name:'Almanya', flag:'🇩🇪', lat:51.17, lon:10.45, dq:{population:'real',gdp:'real',vat:'real',importTax:'real',minWage:'real',logistics:'estimated',importGrowth:'real'},
    population:'83.6M', gdp:'$5.5T', gdpPerCapita:'$65,303', minWage:'$2617', vat:'19%',
    importTax:'0%', customsDuty:'0% (AB-Türkiye Gümrük Birliği)', fta:'AB–Türkiye Gümrük Birliği', logisticsCost:'$3,200 / TIR',
    transitTime:'4–6 gün (karayolu)', ports:'Kapıkule–Bulgaristan sınır kapısı üzerinden', transportMode:'road', distanceKm:1850, currency:'EUR', exchangeRate:'1 USD ≈ 0.87 EUR',
    eodb:'22 / 190', marketSize:'$18.4B', annualImports:'$5,390M', importGrowth:'+17.5%/yıl', importDataVerified:true, importDataSource:'2024, HS 9403, UN Comtrade (GTAIC)',
    freightCost:'$3,200 / TIR', politicalRisk:'Çok düşük',
    importGrowth10:[520,538,545,561,502,489,540,571,588,602],
    suppliers:[{c:'Çin',v:25},{c:'Polonya',v:25},{c:'İtalya',v:8},{c:'Litvanya',v:5},{c:'Türkiye',v:1},{c:'Diğer',v:36}], suppliersVerified:true,
    turkeyHistory:[38,41,44,47,43,49,54,58,61,64],
    turkeyShare:'%1', turkeyGrowth:'+9.6%',
    exporters:[
      {name:'İstikbal Möbel GmbH (Distribütör)', city:'Köln (temsilcilik)', cat:'Oturma grubu', vol:'Bildirilmedi'},
      {name:'Doğtaş Export', city:'Bursa', cat:'Yemek odası', vol:'~$4.1M/yıl'},
      {name:'Kilim Home Export', city:'İstanbul', cat:'Halı & tekstil mobilya', vol:'~$2.3M/yıl'},
    ],
    certs:'CE işareti, EN 1728/12520 mukavemet standartları, REACH kimyasal uyumu',
    docs:'EUR.1 dolaşım belgesi (gümrük birliği avantajı için), ticari fatura, çevre beyanı',
    scores:{market:76, difficulty:62, competition:88, logistics:91, overall:74},
    aiSummary:'Almanya, AB\'nin en büyük mobilya pazarlarından biri ve Gümrük Birliği sayesinde Türk ihracatçılar için gümrüksüz erişim sunuyor. Ancak Polonya\'nın maliyet avantajı ve Çin\'in hacim gücü rekabeti zorlaştırıyor. Fırsat; orta-üst segment tasarım odaklı ürünlerde ve hızlı teslimat gerektiren siparişlerde. Lojistik avantajı çok yüksek.',
    buyers:[
      {name:'Möbel Krieger Einkauf', type:'Zincir mağaza satın alma', cat:'Oturma grubu, yatak odası'},
      {name:'XXXLutz Beschaffung', type:'Büyük perakende zinciri', cat:'Genel mobilya'},
      {name:'Contract Furnishing Berlin', type:'Otel/proje tedarikçisi', cat:'Kontrakt mobilya'},
    ]
  },
  {
    id:'usa', iso:'US', name:'ABD', flag:'🇺🇸', lat:37.09, lon:-95.71, dq:{population:'real',gdp:'real',vat:'real',importTax:'real',minWage:'real',logistics:'estimated',importGrowth:'real'},
    population:'349.0M', gdp:'$32.4T', gdpPerCapita:'$94,430', minWage:'$1256', vat:'Eyalete göre değişir (0–10%)',
    importTax:'30%', customsDuty:'30.0%', fta:'FTA yok — MFN tarife', logisticsCost:'$3,900 / konteyner',
    transitTime:'24–30 gün', ports:'Los Angeles/Long Beach, Savannah, NY/NJ', transportMode:'sea', distanceKm:9200, currency:'USD', exchangeRate:'—',
    eodb:'6 / 190', marketSize:'$127B', annualImports:'$21,900M', importGrowth:'-9.9%/yıl', importDataVerified:true, importDataSource:'2024, HS 9403, UN Comtrade (GTAIC)',
    freightCost:'$4,200 / TEU', politicalRisk:'Düşük (ticaret politikası değişkenliği var)',
    importGrowth10:[2410,2510,2600,2740,2390,2610,2810,2905,2970,3040],
    suppliers:[{c:'Vietnam',v:23},{c:'Çin',v:21},{c:'Meksika',v:20},{c:'Kanada',v:8},{c:'İtalya',v:3},{c:'Diğer',v:25}], suppliersVerified:true,
    turkeyHistory:[41,46,52,58,55,63,70,74,79,84],
    turkeyShare:'%0.1', turkeyGrowth:'+11.2%',
    exporters:[
      {name:'Yataş USA LLC', city:'Bursa (üretim)', cat:'Yatak & baza', vol:'~$6.8M/yıl'},
      {name:'Alfemo Export', city:'İzmir', cat:'Oturma grubu', vol:'~$3.4M/yıl'},
    ],
    certs:'CPSIA çocuk güvenliği (ilgili ürünler), CARB Faz 2 formaldehit standardı, TSCA',
    docs:'ISF (10+2) ön bildirim, ticari fatura, ambalaj listesi, FCC/CPSC uygunluk (gerekliyse)',
    scores:{market:94, difficulty:79, competition:93, logistics:52, overall:63},
    aiSummary:'ABD, dünyanın en büyük mobilya ithalat pazarı ancak Çin ve Vietnam\'ın hacimsel üstünlüğü çok baskın. Ocak 2026 itibarıyla döşemeli ahşap mobilyaya (HS 9401.61) uygulanan Section 232 ek gümrük vergisi %25\'ten %30\'a yükseldi (İngiltere, AB ve Japonya hariç tüm ülkelerden gelen ithalatta) — Türkiye\'den bu kategoride ihracatı belirgin şekilde zorlaştırıyor. Buna karşın genel ahşap mobilya (HS 9403.60, mutfak dolabı/tezgahı hariç) bu ek vergiden muaf ve gümrüksüz giriyor. Niş, yüksek katma değerli ahşap mobilya ürünlerinde konumlanma, döşemeli oturma grubuna kıyasla daha az engelli bir giriş sunuyor.',
    buyers:[
      {name:'Home Fashion Sourcing Group', type:'Büyük ithalatçı/distribütör', cat:'Genel mobilya'},
      {name:'Coastal Living Imports', type:'E-ticaret odaklı toptancı', cat:'Bahçe & oturma grubu'},
      {name:'Elite Hospitality Supply', type:'Otel tedarikçisi', cat:'Kontrakt mobilya'},
    ]
  },
  {
    id:'uk', iso:'GB', name:'Birleşik Krallık', flag:'🇬🇧', lat:55.38, lon:-3.44, dq:{population:'real',gdp:'real',vat:'real',importTax:'real',minWage:'real',logistics:'estimated',importGrowth:'real'},
    population:'69.9M', gdp:'$4.3T', gdpPerCapita:'$61,056', minWage:'$2787', vat:'20%',
    importTax:'0%', customsDuty:'0.0%', fta:'FTA yok (Brexit sonrası MFN)', logisticsCost:'$1,780 / konteyner',
    transitTime:'12–16 gün', ports:'Felixstowe, Southampton', transportMode:'sea', distanceKm:3100, currency:'GBP', exchangeRate:'1 USD ≈ 0.74 GBP',
    eodb:'8 / 190', marketSize:'$13.1B', annualImports:'$4,110M', importGrowth:'+9.8%/yıl', importDataVerified:true, importDataSource:'2024, HS 9403, UN Comtrade (GTAIC)',
    freightCost:'$2,240 / TEU', politicalRisk:'Düşük–Orta',
    importGrowth10:[410,428,441,455,398,412,437,452,461,468],
    suppliers:[{c:'Çin',v:37},{c:'Polonya',v:12},{c:'Almanya',v:8},{c:'İtalya',v:6},{c:'Türkiye',v:1},{c:'Diğer',v:36}], suppliersVerified:true,
    turkeyHistory:[24,27,29,33,30,35,38,40,41,43],
    turkeyShare:'%1', turkeyGrowth:'+7.8%',
    exporters:[
      { name:'Koçtaş Trade UK (temsilcilik)', city:'Londra', cat:'Bahçe mobilyası', vol:'Bildirilmedi'},
      { name:'Mondi Furniture Export', city:'İnegöl', cat:'Yemek odası', vol:'~$1.9M/yıl'},
    ],
    certs:'UKCA işareti (CE yerine), BS 7177 alev dayanımı (döşemeli mobilya için zorunlu)',
    docs:'Ticari fatura, EORI numarası, BS 7177 uygunluk beyanı',
    scores:{market:69, difficulty:55, competition:74, logistics:80, overall:71},
    aiSummary:'Brexit sonrası gümrük prosedürleri karmaşıklaştı ancak pazar hâlâ istikrarlı talep gösteriyor. BS 7177 alev dayanım standardı döşemeli mobilya için zorunlu ve genellikle giriş engeli oluşturuyor — bu standardı karşılayan tedarikçiler için rekabet avantajı doğuyor. Türkiye\'nin payı sağlam, orta ölçekli büyüme potansiyeli var.',
    buyers:[
      {name:'Furnwell Sourcing Ltd.', type:'İthalatçı/toptancı', cat:'Oturma grubu'},
      {name:'BritHome Retail Group', type:'Zincir mağaza', cat:'Genel mobilya'},
    ]
  },
  {
    id:'france', iso:'FR', name:'Fransa', flag:'🇫🇷', lat:46.23, lon:2.21, dq:{population:'real',gdp:'real',vat:'real',importTax:'real',minWage:'real',logistics:'estimated',importGrowth:'real'},
    population:'66.7M', gdp:'$3.6T', gdpPerCapita:'$52,083', minWage:'$1982', vat:'20%',
    importTax:'0%', customsDuty:'0% (AB-Türkiye Gümrük Birliği)', fta:'AB–Türkiye Gümrük Birliği', logisticsCost:'$4,100 / TIR',
    transitTime:'6–8 gün (karayolu)', ports:'Kapıkule–Bulgaristan sınır kapısı üzerinden', transportMode:'road', distanceKm:2800, currency:'EUR', exchangeRate:'1 USD ≈ 0.87 EUR',
    eodb:'32 / 190', marketSize:'$11.6B', annualImports:'$3,910M', importGrowth:'-2.3%/yıl', importDataVerified:true, importDataSource:'2024, HS 9403, UN Comtrade (GTAIC)',
    freightCost:'$4,100 / TIR', politicalRisk:'Düşük',
    importGrowth10:[352,360,365,371,340,349,362,370,374,379],
    suppliers:[{c:'Çin',v:23},{c:'İtalya',v:14},{c:'Almanya',v:13},{c:'Polonya',v:8},{c:'Türkiye',v:2},{c:'Diğer',v:40}], suppliersVerified:true,
    turkeyHistory:[26,27,29,31,28,30,32,33,34,35],
    turkeyShare:'%2', turkeyGrowth:'+3.1%',
    exporters:[{ name:'Çilek Export France', city:'İstanbul', cat:'Çocuk odası mobilyası', vol:'~$2.6M/yıl'}],
    certs:'NF ortamı sertifikaları (gönüllü ama tercih ediliyor), REACH',
    docs:'EUR.1, ticari fatura, çevresel etiketleme (bazı kategoriler için)',
    scores:{market:64, difficulty:58, competition:76, logistics:86, overall:66},
    aiSummary:'Fransa pazarı olgun ve büyüme hızı düşük; talep büyük ölçüde yerleşik tedarik zincirlerine bağlı. Gümrük Birliği avantajına rağmen Türkiye\'nin payı yıllardır durağan seyrediyor. Fırsat, çocuk odası ve tasarım odaklı niş kategorilerde farklılaşmakta.',
    buyers:[{name:'Maison Sourcing Paris', type:'Distribütör', cat:'Tasarım mobilya'}]
  },
  {
    id:'poland', iso:'PL', name:'Polonya', flag:'🇵🇱', lat:51.92, lon:19.15, dq:{population:'real',gdp:'real',vat:'real',importTax:'real',minWage:'real',logistics:'estimated',importGrowth:'real'},
    population:'37.8M', gdp:'$1.1T', gdpPerCapita:'$31,336', minWage:'$1238', vat:'23%',
    importTax:'0%', customsDuty:'0% (AB-Türkiye Gümrük Birliği)', fta:'AB–Türkiye Gümrük Birliği', logisticsCost:'$2,700 / TIR',
    transitTime:'4–5 gün (karayolu)', ports:'Kapıkule sınır kapısı → kara koridoru', transportMode:'road', distanceKm:1600, currency:'PLN', exchangeRate:'1 USD ≈ 3.77 PLN',
    eodb:'40 / 190', marketSize:'$4.2B', annualImports:'$1.1B', importGrowth:'+15.6%/yıl', importDataVerified:false,
    freightCost:'$2,700 / TIR', politicalRisk:'Düşük',
    importGrowth10:[74,79,84,91,86,95,104,112,119,127],
    suppliers:[{c:'Almanya',v:22},{c:'Çin',v:18},{c:'Türkiye',v:11},{c:'Litvanya',v:8},{c:'İtalya',v:6},{c:'Diğer',v:35}],
    turkeyHistory:[9,10,11,13,12,14,16,18,19,21],
    turkeyShare:'%11.4', turkeyGrowth:'+16.7%',
    exporters:[{ name:'Merve Home Poland', city:'Kayseri', cat:'Ofis mobilyası', vol:'~$1.1M/yıl'}],
    certs:'AB standart uyumu (Gümrük Birliği), ek sertifika genelde gerekmez',
    docs:'EUR.1, ticari fatura, CMR taşıma belgesi (kara nakliyesi için)',
    scores:{market:58, difficulty:29, competition:52, logistics:95, overall:85},
    aiSummary:'Polonya, aslında kendisi büyük bir mobilya üreticisi/ihracatçısı olsa da iç pazarı da hızla büyüyor. Kara lojistiği sayesinde Türkiye\'den ulaşım maliyeti ve süresi çok avantajlı. Türkiye\'nin payı zaten görece yüksek ve büyüme oranı en hızlı pazarlardan biri — düşük rekabet ve düşük giriş zorluğu ile öne çıkıyor.',
    buyers:[{name:'Agata Meble Zakupy', type:'Zincir mağaza', cat:'Genel mobilya'},{name:'BRW Sourcing', type:'Üretici/distribütör ortaklığı', cat:'Yatak odası'}]
  },
  {
    id:'netherlands', iso:'NL', name:'Hollanda', flag:'🇳🇱', lat:52.13, lon:5.29, dq:{population:'real',gdp:'real',vat:'real',importTax:'real',minWage:'real',logistics:'estimated',importGrowth:'real'},
    population:'18.4M', gdp:'$1.4T', gdpPerCapita:'$79,918', minWage:'$2495', vat:'21%',
    importTax:'0%', customsDuty:'0% (AB-Türkiye Gümrük Birliği)', fta:'AB–Türkiye Gümrük Birliği', logisticsCost:'$3,700 / TIR',
    transitTime:'6–7 gün (karayolu)', ports:'Kapıkule–Bulgaristan sınır kapısı üzerinden', transportMode:'road', distanceKm:2500, currency:'EUR', exchangeRate:'1 USD ≈ 0.87 EUR',
    eodb:'24 / 190', marketSize:'$3.8B', annualImports:'$2,600M', importGrowth:'+8.8%/yıl', importDataVerified:true, importDataSource:'2024, HS 9403, UN Comtrade (GTAIC)',
    freightCost:'$3,700 / TIR', politicalRisk:'Çok düşük',
    importGrowth10:[210,218,225,234,214,222,235,244,251,259],
    suppliers:[{c:'Çin',v:24},{c:'Almanya',v:16},{c:'Polonya',v:10},{c:'Türkiye',v:9},{c:'Belçika',v:7},{c:'Diğer',v:34}],
    turkeyHistory:[19,20,22,24,21,23,25,27,29,31],
    turkeyShare:'%9.1', turkeyGrowth:'+8.4%',
    exporters:[{ name:'Rotterdam Furniture Trade BV (temsilcilik)', city:'İstanbul bağlantılı', cat:'Genel mobilya', vol:'Bildirilmedi'}],
    certs:'AB standart uyumu, gönüllü Milieukeur çevre etiketi tercih ediliyor',
    docs:'EUR.1, ticari fatura, Rotterdam liman gümrük ön bildirimi',
    scores:{market:61, difficulty:41, competition:64, logistics:89, overall:78},
    aiSummary:'Rotterdam limanı üzerinden Avrupa\'nın en büyük lojistik kapısına doğrudan erişim sunuyor — bu, Hollanda\'yı sadece kendi pazarı için değil, Kuzey Avrupa\'ya dağıtım merkezi olarak da cazip kılıyor. Türkiye\'nin payı zaten güçlü ve istikrarlı büyüyor.',
    buyers:[{name:'Leen Bakker Inkoop', type:'Zincir mağaza', cat:'Genel mobilya'}]
  },
  {
    id:'uae', iso:'AE', name:'BAE', flag:'🇦🇪', lat:23.42, lon:53.85, dq:{population:'real',gdp:'real',vat:'real',importTax:'real',minWage:'estimated',logistics:'estimated',importGrowth:'unknown'},
    population:'11.6M', gdp:'$621.5B', gdpPerCapita:'$54,214', minWage:'Resmi asgari ücret yok (bazı sektörler hariç)', vat:'5%',
    importTax:'5%', customsDuty:'5.0%', fta:'TR–GCC görüşme aşamasında', logisticsCost:'$1,650 / konteyner',
    transitTime:'10–14 gün', ports:'Jebel Ali (Dubai)', transportMode:'sea', distanceKm:3000, currency:'AED', exchangeRate:'1 USD ≈ 3.67 AED',
    eodb:'16 / 190', marketSize:'$2.6B', annualImports:'$1.4B', importGrowth:'Bilinmiyor', importDataVerified:false,
    freightCost:'$1,480 / TEU', politicalRisk:'Düşük',
    importGrowth10:[68,74,80,88,82,92,101,110,119,129],
    suppliers:[{c:'Çin',v:33},{c:'İtalya',v:14},{c:'Türkiye',v:12},{c:'Hindistan',v:9},{c:'Malezya',v:6},{c:'Diğer',v:26}],
    turkeyHistory:[10,12,13,15,14,17,19,21,24,27],
    turkeyShare:'%11.8', turkeyGrowth:'+21.3%',
    exporters:[{ name:'Kilim Dubai Showroom', city:'İstanbul (üretim)', cat:'Halı & döşeme', vol:'~$3.2M/yıl'},{ name:'Bellona Gulf', city:'Kayseri', cat:'Oturma grubu', vol:'~$2.1M/yıl'}],
    certs:'ESMA uygunluk (Emirates Authority), Gulf Conformity Mark bazı kategorilerde',
    docs:'Ticari fatura, menşe belgesi (Arap Ticaret Odası onaylı), ambalaj listesi',
    scores:{market:72, difficulty:37, competition:61, logistics:83, overall:87},
    aiSummary:'BAE, Türk mobilya ihracatçıları için halihazırda güçlü ve hızlı büyüyen bir pazar. Coğrafi yakınlık, düşük gümrük vergisi ve Jebel Ali\'nin bölgesel dağıtım merkezi olması avantaj sağlıyor. Yüksek büyüme oranı ve görece düşük giriş zorluğu ile en yüksek fırsat skoruna sahip pazarlardan biri.',
    buyers:[{name:'Danube Home Procurement', type:'Büyük perakende zinciri', cat:'Genel mobilya'},{name:'Al Huzaifa Furniture Trading', type:'Toptancı', cat:'Otel & proje mobilyası'}]
  },
  {
    id:'japan', iso:'JP', name:'Japonya', flag:'🇯🇵', lat:36.20, lon:138.25, dq:{population:'real',gdp:'real',vat:'real',importTax:'real',minWage:'real',logistics:'estimated',importGrowth:'real'},
    population:'122.4M', gdp:'$4.4T', gdpPerCapita:'$35,703', minWage:'$1229', vat:'10%',
    importTax:'0%', customsDuty:'0.0%', fta:'FTA yok', logisticsCost:'$3,100 / konteyner',
    transitTime:'26–32 gün', ports:'Yokohama, Osaka', transportMode:'sea', distanceKm:8800, currency:'JPY', exchangeRate:'1 USD ≈ 162.22 JPY',
    eodb:'29 / 190', marketSize:'$9.4B', annualImports:'$2,980M', importGrowth:'+1.9%/yıl', importDataVerified:true, importDataSource:'2022, HS 9403, UN Comtrade (OEC)',
    freightCost:'$3,650 / TEU', politicalRisk:'Çok düşük',
    importGrowth10:[195,197,199,203,188,190,193,195,196,198],
    suppliers:[{c:'Çin',v:52},{c:'Vietnam',v:16},{c:'Tayland',v:7},{c:'İtalya',v:4},{c:'Türkiye',v:1},{c:'Diğer',v:20}],
    turkeyHistory:[3,3,4,4,3,4,4,5,5,5],
    turkeyShare:'%0.9', turkeyGrowth:'+2.1%',
    exporters:[], certs:'JIS standartları (gönüllü ama tercih sebebi), sıkı ahşap fümigasyon kuralları',
    docs:'Fitosaner sertifika (zorunlu), ticari fatura, detaylı ürün güvenlik dokümantasyonu',
    scores:{market:55, difficulty:81, competition:91, logistics:31, overall:34},
    aiSummary:'Japonya pazarı durgun büyüme, çok yüksek rekabet (Çin baskın) ve uzun lojistik süresi nedeniyle Türk ihracatçılar için düşük öncelikli görünüyor. Kültürel tercihler (kompakt, hafif mobilya) ve sıkı kalite/fümigasyon standartları giriş maliyetini artırıyor. Kısa-orta vadede önerilmez; niş el işçiliği ürünleri istisna olabilir.',
    buyers:[]
  },
  {
    id:'southafrica', iso:'ZA', name:'Güney Afrika', flag:'🇿🇦', lat:-30.56, lon:22.94, dq:{population:'real',gdp:'real',vat:'real',importTax:'real',minWage:'real',logistics:'estimated',importGrowth:'real'},
    population:'65.5M', gdp:'$480.0B', gdpPerCapita:'$7,503', minWage:'$286', vat:'15%',
    importTax:'20%', customsDuty:'20.0%', fta:'FTA yok', logisticsCost:'$2,780 / konteyner',
    transitTime:'22–27 gün', ports:'Durban, Cape Town', transportMode:'sea', distanceKm:8000, currency:'ZAR', exchangeRate:'1 USD ≈ 16.32 ZAR',
    eodb:'84 / 190', marketSize:'$1.3B', annualImports:'$667M', importGrowth:'+12.1%/yıl', importDataVerified:true, importDataSource:'2022, HS 94 (tüm mobilya), UN Comtrade',
    freightCost:'$2,950 / TEU', politicalRisk:'Orta',
    importGrowth10:[19,20,22,24,21,23,25,27,29,31],
    suppliers:[{c:'Çin',v:41},{c:'Vietnam',v:12},{c:'Türkiye',v:5},{c:'Malezya',v:5},{c:'Polonya',v:4},{c:'Diğer',v:33}],
    turkeyHistory:[1.0,1.1,1.3,1.4,1.2,1.5,1.7,1.8,1.9,2.1],
    turkeyShare:'%5.2', turkeyGrowth:'+13.8%',
    exporters:[], certs:'SABS uygunluk işareti (bazı kategoriler), alev dayanımı SANS 1425',
    docs:'Ticari fatura, menşe belgesi, SARS gümrük ön bildirimi',
    scores:{market:44, difficulty:64, competition:56, logistics:38, overall:47},
    aiSummary:'Güney Afrika, yüksek gümrük vergisi (%20) ve uzun lojistik süresi ile giriş maliyeti yüksek bir pazar. Buna karşın Türkiye\'nin payı hızla büyüyor ve pazar büyüklüğü hâlâ görece küçük. Orta vadeli, temkinli bir fırsat olarak değerlendirilebilir; ilk siparişlerde konsolide taşımacılık maliyeti düşürebilir.',
    buyers:[]
  }
];

const WORLD_DATA = [{"iso":"FJ","id":"fiji","name":"Fiji","rings":[[[178.13,-17.5],[177.67,-17.38],[177.38,-18.16],[178.55,-18.15],[178.13,-17.5]]]},{"iso":"TZ","id":"tanzania","name":"Tanzanya","rings":[[[33.9,-0.95],[30.42,-1.13],[30.47,-2.41],[30.75,-3.36],[29.34,-4.5],[29.62,-6.52],[30.74,-8.34],[32.76,-9.23],[33.74,-9.42],[34.28,-10.16],[34.56,-11.52],[36.51,-11.72],[39.52,-10.9],[40.32,-10.32],[39.19,-8.49],[39.44,-6.84],[38.74,-5.91],[39.2,-4.68],[37.77,-3.68],[37.7,-3.1],[33.9,-0.95]]]},{"iso":"EH","id":"w-sahara","name":"Batı Sahra","rings":[[[-8.67,27.66],[-9.74,26.86],[-11.39,26.88],[-12.03,26.03],[-12.5,24.77],[-13.89,23.69],[-14.75,21.5],[-17.02,21.42],[-17.06,21],[-16.85,21.33],[-12.93,21.33],[-13.12,22.77],[-11.94,23.37],[-11.97,25.93],[-8.69,25.88],[-8.68,27.4],[-8.67,27.66]]]},{"iso":"CA","id":"canada","name":"Kanada","rings":[[[-122.84,49],[-116.05,49],[-113,49],[-107.05,49],[-100.65,49],[-95.16,49],[-91.64,48.14],[-89.6,48.01],[-88.38,48.3],[-84.88,46.9],[-82.55,45.35],[-82.14,43.57],[-83.12,42.08],[-82.44,41.68],[-78.94,42.86],[-78.72,43.63],[-76.82,43.63],[-74.87,45],[-71.51,45.01],[-70.66,45.46],[-69.24,47.45],[-67.79,47.07],[-67.79,45.7],[-67.14,45.14],[-65.36,43.55],[-63.25,44.67],[-61.04,45.27],[-61.52,45.88],[-63.17,45.74],[-64.47,46.24],[-65.12,48.07],[-65.06,49.23],[-67.24,49.51],[-66.4,50.23],[-61.72,50.08],[-60.03,50.24],[-58.77,51.06],[-57.13,51.42],[-55.68,52.15],[-55.76,53.27],[-56.94,53.78],[-57.33,54.63],[-59.57,55.2],[-61.8,56.34],[-61.4,56.97],[-64.58,60.34],[-66.2,58.77],[-67.65,58.21],[-69.29,58.96],[-69.59,61.06],[-71.37,61.14],[-73.84,62.44],[-74.67,62.18],[-78.11,62.32],[-77.34,59.85],[-78.52,58.8],[-77.3,58.05],[-76.54,56.53],[-79.12,54.14],[-78.6,52.56],[-79.91,51.21],[-81.4,52.16],[-82.44,54.28],[-82.27,55.15],[-85.01,55.3],[-87.32,56],[-90.9,57.28],[-92.3,57.09],[-93.22,58.78],[-94.68,58.95],[-94.63,60.11],[-93.16,62.02],[-90.77,62.96],[-89.91,64.03],[-88.48,64.1],[-86.07,66.06],[-83.34,66.41],[-81.39,67.11],[-81.96,68.13],[-81.28,69.16],[-85.52,69.88],[-85.58,68.78],[-88.02,68.62],[-91.52,70.19],[-92.88,71.32],[-95.21,71.92],[-96.47,70.09],[-94.23,69.07],[-94.68,68.06],[-97.67,68.58],[-98.44,67.78],[-101.45,67.65],[-104.34,68.02],[-106.15,68.8],[-109.95,67.98],[-113.5,67.69],[-113.9,68.4],[-119.94,69.38],[-121.47,69.8],[-125.76,69.48],[-127.45,70.38],[-136.5,68.9],[-140.99,69.71],[-140.99,66],[-141,60.31],[-139.04,60],[-137.45,58.91],[-135.48,59.79],[-133.36,58.41],[-131.71,56.55],[-130.01,55.92],[-130.54,54.8],[-129.13,52.76],[-127.85,52.33],[-127.44,50.83],[-125.62,50.42],[-122.84,49]],[[-88.15,74.39],[-79.83,74.92],[-81.13,75.71],[-86.38,75.48],[-92.89,75.88],[-92.42,74.84],[-88.15,74.39]],[[-55.6,51.32],[-56.74,51.29],[-58.39,49.13],[-59.23,48.52],[-59.27,47.6],[-56.25,47.63],[-53.07,46.66],[-52.65,47.54],[-53.48,49.25],[-55.82,49.59],[-55.6,51.32]],[[-83.88,65.11],[-85.88,65.74],[-86.35,64.04],[-85.52,63.05],[-83.11,64.1],[-83.88,65.11]],[[-78.77,72.35],[-82.32,73.75],[-86.56,73.16],[-88.41,73.54],[-90.21,72.24],[-89.51,70.76],[-84.94,69.97],[-81.31,69.74],[-77.29,69.77],[-72.65,67.28],[-74.29,65.81],[-77.9,65.31],[-77.71,64.23],[-74.82,64.39],[-71.89,63.68],[-71.02,62.91],[-66.17,61.93],[-66.28,62.95],[-64.67,63.39],[-65.32,64.38],[-68.14,65.69],[-66.72,66.39],[-63.92,65],[-62.16,66.16],[-64.86,67.85],[-68.81,68.72],[-66.97,69.19],[-68.79,70.53],[-71.2,70.92],[-77.82,72.75],[-78.77,72.35]],[[-94.5,74.13],[-96.03,72.94],[-94.27,72.02],[-90.51,73.86],[-94.5,74.13]],[[-122.85,76.12],[-119.9,76.05],[-116.34,76.88],[-119.1,77.51],[-122.85,76.12]],[[-123.51,48.51],[-125.76,50.3],[-128.36,50.77],[-125.66,48.83],[-123.51,48.51]],[[-121.54,74.45],[-123.94,73.68],[-125.93,71.87],[-123.09,70.9],[-120.46,71.38],[-119.22,72.52],[-115.51,73.48],[-117.56,74.19],[-121.54,74.45]],[[-107.82,75.85],[-115.4,76.48],[-117.71,75.22],[-112.22,74.42],[-106.31,75.01],[-107.82,75.85]],[[-106.52,73.08],[-112.44,72.96],[-115.19,73.31],[-117.87,72.71],[-119.4,71.56],[-116.11,69.17],[-113.31,68.54],[-109,68.78],[-105.96,69.18],[-102.43,68.75],[-100.98,70.02],[-104.46,70.99],[-106.52,73.08]],[[-100.44,72.71],[-98.36,71.27],[-96.72,71.66],[-97.12,73.47],[-100.36,73.84],[-100.44,72.71]],[[-98.5,76.72],[-101.49,76.31],[-100.88,75.06],[-98.16,75],[-98.5,76.72]],[[-96.02,80.6],[-96.08,79.71],[-92.88,78.34],[-89.04,78.29],[-85.81,79.34],[-87.81,80.32],[-96.02,80.6]],[[-91.59,81.89],[-85.09,79.35],[-89.49,76.47],[-80.56,76.18],[-79.76,77.21],[-71.18,79.8],[-61.89,82.36],[-63.68,82.9],[-79.31,83.13],[-91.59,81.89]]]},{"iso":"US","id":"usa","name":"Amerika Birleşik Devletleri","rings":[[[-122.84,49],[-122.5,48.18],[-124.69,48.18],[-123.9,45.52],[-124.53,42.77],[-124.21,42],[-124.4,40.31],[-123.73,38.95],[-121.71,36.16],[-120.37,34.45],[-118.52,34.03],[-117.13,32.54],[-114.81,32.53],[-111.02,31.33],[-108.24,31.34],[-106.51,31.75],[-105.04,30.64],[-104.46,29.57],[-103.11,28.97],[-102.48,29.76],[-100.96,29.38],[-99.52,27.54],[-99.02,26.37],[-97.53,25.84],[-97.37,27.38],[-96.59,28.31],[-94.69,29.48],[-93.23,29.78],[-91.63,29.68],[-90.88,29.15],[-89.41,29.16],[-89.18,30.32],[-86.4,30.4],[-85.11,29.64],[-83.71,29.94],[-82.65,28.55],[-82.86,27.89],[-81.17,25.2],[-80.38,25.21],[-80.06,26.88],[-81.49,30.73],[-81.34,31.44],[-78.55,33.86],[-76.36,34.81],[-75.73,35.55],[-76.3,37.92],[-75.72,37.94],[-74.18,39.71],[-73.98,40.63],[-71.94,40.93],[-70.64,41.48],[-70.81,42.87],[-70.12,43.68],[-68.03,44.33],[-67.14,45.14],[-67.79,45.7],[-67.79,47.07],[-69.24,47.45],[-70.66,45.46],[-71.51,45.01],[-74.87,45],[-76.82,43.63],[-78.72,43.63],[-78.94,42.86],[-82.44,41.68],[-83.12,42.08],[-82.14,43.57],[-82.55,45.35],[-84.88,46.9],[-88.38,48.3],[-89.6,48.01],[-91.64,48.14],[-95.16,49],[-100.65,49],[-107.05,49],[-113,49],[-116.05,49],[-122.84,49]],[[-140.99,69.71],[-144.92,69.99],[-152.27,70.6],[-156.58,71.36],[-161.91,70.33],[-165.39,68.04],[-164.47,66.58],[-168.11,65.67],[-166.43,64.69],[-160.96,64.22],[-163.07,63.06],[-164.56,63.15],[-166.12,61.5],[-165.35,60.51],[-163.82,59.8],[-161.87,59.63],[-157.72,57.57],[-160.56,56.01],[-158.43,55.99],[-156.31,57.42],[-154.23,58.15],[-154.02,59.35],[-152.58,60.06],[-151.72,59.16],[-148.02,59.98],[-147.11,60.88],[-143.96,60],[-142.57,60.08],[-139.87,59.54],[-137.8,58.5],[-134.08,58.12],[-132.25,56.37],[-131.97,55.5],[-130.54,54.8],[-130.01,55.92],[-131.71,56.55],[-133.36,58.41],[-135.48,59.79],[-137.45,58.91],[-139.04,60],[-141,60.31],[-140.99,66],[-140.99,69.71]]]},{"iso":"KZ","id":"kazakhstan","name":"Kazakistan","rings":[[[87.36,49.21],[85.54,49.69],[83.38,51.07],[80.04,50.86],[77.8,53.4],[76.53,54.18],[74.38,53.55],[70.87,55.17],[69.07,55.39],[65.18,54.35],[61.44,54.01],[61.7,52.98],[59.97,51.96],[61.34,50.8],[56.78,51.04],[55.72,50.62],[52.33,51.72],[50.77,51.69],[48.7,50.61],[47.55,50.45],[46.47,48.39],[48.06,47.74],[49.1,46.4],[51.19,47.05],[53.04,46.85],[53.04,45.26],[51.32,45.25],[50.89,44.03],[51.34,43.13],[52.5,42.79],[52.5,41.78],[54.08,42.32],[55.97,41.31],[55.93,45],[58.5,45.59],[61.06,44.41],[62.01,43.5],[64.9,43.73],[66.1,43],[66.02,41.99],[66.71,41.17],[69.07,41.38],[70.96,42.27],[71.84,42.85],[73.49,42.5],[74.21,43.3],[76,42.99],[79.14,42.86],[80.26,42.35],[80.87,43.18],[79.97,44.92],[82.46,45.54],[83.18,47.33],[85.16,47],[85.77,48.46],[87.36,49.21]]]},{"iso":"UZ","id":"uzbekistan","name":"Özbekistan","rings":[[[55.97,41.31],[58.63,42.75],[59.98,42.22],[60.08,41.43],[61.88,41.08],[62.37,40.05],[64.17,38.89],[66.55,37.97],[66.52,37.36],[67.83,37.14],[68.39,38.16],[68.18,38.9],[69.33,40.73],[70.67,40.96],[71.01,40.24],[71.77,40.15],[73.06,40.87],[70.96,42.27],[69.07,41.38],[66.71,41.17],[66.02,41.99],[66.1,43],[64.9,43.73],[62.01,43.5],[61.06,44.41],[58.5,45.59],[55.93,45],[55.97,41.31]]]},{"iso":"PG","id":"papua-new-guinea","name":"Papua Yeni Gine","rings":[[[141,-2.6],[141.02,-5.86],[141.03,-9.12],[142.63,-9.33],[143.29,-8.25],[144.74,-7.63],[146.05,-8.07],[146.57,-8.94],[147.91,-10.13],[149.78,-10.39],[146.97,-6.72],[147.65,-6.08],[145.98,-5.47],[145.83,-4.88],[144.58,-3.86],[141,-2.6]]]},{"iso":"ID","id":"indonesia","name":"Endonezya","rings":[[[141,-2.6],[139.93,-2.41],[138.33,-1.7],[137.44,-1.7],[136.29,-2.31],[135.46,-3.37],[134.42,-2.77],[133.99,-0.78],[132.38,-0.37],[131.84,-1.62],[131.99,-2.82],[133.66,-3.54],[135.16,-4.46],[135.99,-4.55],[137.93,-5.39],[138.67,-7.32],[137.61,-8.41],[140.14,-8.3],[141.03,-9.12],[141.02,-5.86],[141,-2.6]],[[117.88,4.14],[115.87,4.31],[114.62,1.43],[112.86,1.5],[111.8,0.9],[110.51,0.77],[109.66,2.01],[109.07,1.34],[109.09,-0.46],[110.07,-1.59],[110.22,-2.93],[111.7,-2.99],[112.07,-3.48],[113.26,-3.12],[114.47,-3.5],[114.86,-4.11],[116,-3.66],[116.53,-2.48],[116.56,-1.49],[117.52,-0.8],[118.05,2.29],[117.31,3.23],[117.88,4.14]],[[127.93,2.17],[127.4,1.01],[128.64,0.26],[128.59,1.54],[127.93,2.17]],[[122.93,0.88],[120.89,1.31],[120.04,0.57],[118.77,-2.8],[119.5,-3.49],[119.37,-5.38],[120.43,-5.53],[120.31,-2.93],[121.62,-4.19],[121.74,-4.85],[122.63,-5.63],[123.17,-4.68],[122.45,-3.19],[121.51,-1.9],[120.04,-0.52],[120.18,0.24],[122.72,0.43],[122.93,0.88]],[[108.49,-6.42],[107.27,-5.95],[106.05,-5.9],[105.37,-6.85],[106.45,-7.35],[108.28,-7.77],[109.43,-7.74],[111.52,-8.3],[113.46,-8.35],[112.61,-6.95],[110.76,-6.47],[110.54,-6.88],[108.62,-6.78],[108.49,-6.42]],[[104.37,-1.08],[103.44,-0.71],[103.84,0.1],[103.08,0.56],[101.66,2.08],[100.64,2.1],[97.48,5.25],[95.29,5.48],[95.38,4.97],[98.6,1.82],[99.26,0.18],[100.14,-0.65],[101.4,-2.8],[102.58,-4.22],[104.71,-5.87],[105.82,-5.85],[106.11,-3.06],[104.89,-2.34],[104.37,-1.08]]]},{"iso":"AR","id":"argentina","name":"Arjantin","rings":[[[-68.63,-52.64],[-68.63,-54.87],[-66.96,-54.9],[-68.63,-52.64]],[[-57.63,-30.22],[-55.16,-27.88],[-53.65,-26.92],[-53.63,-26.12],[-54.63,-25.74],[-54.79,-26.62],[-56.49,-27.55],[-58.62,-27.12],[-57.63,-25.6],[-57.78,-25.16],[-60.03,-24.03],[-60.85,-23.88],[-62.69,-22.25],[-66.27,-21.83],[-67.11,-22.74],[-67.33,-24.03],[-68.42,-24.52],[-68.3,-26.9],[-69.66,-28.46],[-69.92,-30.34],[-70.54,-31.37],[-69.82,-34.19],[-70.36,-36.01],[-71.12,-36.66],[-70.81,-38.55],[-71.41,-38.92],[-72.15,-42.25],[-71.55,-45.56],[-72.65,-48.88],[-73.42,-49.32],[-73.33,-50.38],[-72.31,-50.68],[-71.91,-52.01],[-68.57,-52.3],[-69.14,-50.73],[-67.82,-49.87],[-67.17,-48.7],[-65.99,-48.13],[-65.64,-47.24],[-67.58,-46.3],[-66.51,-45.04],[-65.57,-45.04],[-65.18,-43.5],[-64.38,-42.87],[-65.12,-41.06],[-63.77,-41.17],[-62.15,-40.68],[-62.34,-38.83],[-59.23,-38.72],[-57.75,-38.18],[-56.79,-36.9],[-57.23,-35.29],[-58.5,-34.43],[-58.43,-33.91],[-57.63,-30.22]]]},{"iso":"CL","id":"chile","name":"Şili","rings":[[[-68.63,-52.64],[-70.27,-52.93],[-71.11,-54.07],[-71.01,-55.05],[-68.15,-55.61],[-66.96,-54.9],[-68.63,-54.87],[-68.63,-52.64]],[[-69.59,-17.58],[-70.37,-18.35],[-70.09,-21.39],[-70.72,-25.71],[-70.91,-27.64],[-71.49,-28.86],[-71.67,-30.92],[-71.44,-32.42],[-71.86,-33.91],[-73.17,-37.12],[-73.22,-39.26],[-73.68,-39.94],[-74.33,-43.22],[-74.69,-45.76],[-75.64,-46.65],[-75.18,-47.71],[-75.61,-48.67],[-74.95,-52.26],[-72.56,-53.53],[-71.01,-53.83],[-70.85,-52.9],[-68.57,-52.3],[-71.91,-52.01],[-72.31,-50.68],[-73.33,-50.38],[-73.42,-49.32],[-72.65,-48.88],[-71.55,-45.56],[-72.15,-42.25],[-71.41,-38.92],[-70.81,-38.55],[-71.12,-36.66],[-70.36,-36.01],[-69.82,-34.19],[-70.54,-31.37],[-69.92,-30.34],[-69.66,-28.46],[-68.3,-26.9],[-68.42,-24.52],[-67.33,-24.03],[-67.11,-22.74],[-67.83,-22.87],[-68.76,-20.37],[-68.44,-19.41],[-69.59,-17.58]]]},{"iso":"CD","id":"dem-rep-congo","name":"Demokratik Kongo Cumhuriyeti","rings":[[[29.34,-4.5],[29.02,-2.84],[29.58,-1.34],[29.88,0.6],[30.77,2.34],[30.83,3.51],[29.72,4.6],[28.43,4.29],[27.37,5.23],[24.41,5.11],[22.41,4.03],[20.93,4.32],[19.47,5.03],[18.54,4.2],[18.45,3.5],[17.9,1.74],[17.52,-0.74],[16.41,-1.74],[16.01,-3.54],[14.58,-4.97],[14.14,-4.51],[13,-4.78],[12.18,-5.79],[12.32,-6.1],[13.38,-5.86],[16.33,-5.88],[17.47,-8.07],[19.02,-7.99],[19.42,-7.16],[21.73,-7.29],[22.16,-11.08],[23.91,-10.93],[25.42,-11.33],[25.75,-11.78],[28.16,-12.27],[28.37,-11.79],[28.73,-8.53],[30.74,-8.34],[29.62,-6.52],[29.34,-4.5]]]},{"iso":"SO","id":"somalia","name":"Somali","rings":[[[41.59,-1.68],[43.14,0.29],[46.56,2.86],[48.59,5.34],[49.45,6.8],[50.55,9.2],[51.05,10.64],[51.11,12.02],[48.95,11.41],[48.94,9.45],[47.79,8],[44.96,5],[43.66,4.96],[41.86,3.92],[40.98,2.78],[40.99,-0.86],[41.59,-1.68]]]},{"iso":"KE","id":"kenya","name":"Kenya","rings":[[[39.2,-4.68],[39.6,-4.35],[40.26,-2.57],[41.59,-1.68],[40.99,-0.86],[40.98,2.78],[41.86,3.92],[40.77,4.26],[39.56,3.42],[38.12,3.6],[36.86,4.45],[36.16,4.45],[35.3,5.51],[34.01,4.25],[35.04,1.91],[33.89,0.11],[33.9,-0.95],[37.7,-3.1],[37.77,-3.68],[39.2,-4.68]]]},{"iso":"SD","id":"sudan","name":"Sudan","rings":[[[24.57,8.23],[25.07,10.27],[25.79,10.41],[26.48,9.55],[28.97,9.4],[30,10.29],[31.35,9.81],[33.21,12.18],[33.21,10.72],[33.72,10.33],[33.97,8.68],[34.26,10.63],[35.86,12.58],[36.43,14.42],[36.85,16.96],[38.41,18],[37.48,18.61],[37.11,19.81],[36.87,22],[32.9,22],[29.02,22],[25,22],[25,20],[23.84,19.58],[23.89,15.61],[23.02,15.68],[22.3,14.33],[22.04,12.96],[22.86,11.14],[23.55,10.09],[23.46,8.95],[24.57,8.23]]]},{"iso":"TD","id":"chad","name":"Çad","rings":[[[23.84,19.58],[19.85,21.5],[15.86,23.41],[14.85,22.86],[15.1,21.31],[15.9,20.39],[15.3,17.93],[15.25,16.63],[13.97,15.68],[13.54,14.37],[14.5,12.86],[14.89,12.22],[14.92,10.89],[13.95,9.55],[14.98,8.8],[15.28,7.42],[17.96,7.89],[19.09,9.07],[20.06,9.01],[21,9.48],[21.72,10.57],[22.86,11.14],[22.04,12.96],[22.3,14.33],[23.02,15.68],[23.89,15.61],[23.84,19.58]]]},{"iso":"HT","id":"haiti","name":"Haiti","rings":[[[-71.71,19.71],[-72.78,19.48],[-72.69,18.45],[-71.71,18.04],[-71.71,19.71]]]},{"iso":"DO","id":"dominican-rep","name":"Dominik Cumhuriyeti","rings":[[[-71.71,18.04],[-68.32,18.61],[-69.22,19.31],[-70.81,19.88],[-71.71,19.71],[-71.71,18.04]]]},{"iso":"RU","id":"russia","name":"Rusya","rings":[[[49.1,46.4],[48.06,47.74],[46.47,48.39],[47.55,50.45],[48.7,50.61],[50.77,51.69],[52.33,51.72],[55.72,50.62],[56.78,51.04],[61.34,50.8],[59.97,51.96],[61.7,52.98],[61.44,54.01],[65.18,54.35],[69.07,55.39],[70.87,55.17],[74.38,53.55],[76.53,54.18],[77.8,53.4],[80.04,50.86],[83.38,51.07],[85.54,49.69],[87.36,49.21],[87.75,49.3],[88.81,49.47],[92.23,50.8],[94.82,50.01],[97.26,49.73],[98.86,52.05],[102.07,51.26],[102.26,50.51],[103.68,50.09],[106.89,50.27],[108.48,49.28],[110.66,49.13],[112.9,49.54],[114.36,50.25],[116.68,49.89],[117.88,49.51],[120.74,51.96],[121,53.25],[123.57,53.46],[125.95,52.79],[127.66,49.76],[129.4,49.44],[130.58,48.73],[130.99,47.79],[132.51,47.79],[135.03,48.48],[133.1,45.14],[131.03,44.97],[131.14,42.93],[130.64,42.4],[130.78,42.22],[132.28,43.28],[133.54,42.81],[134.87,43.4],[138.22,46.31],[140.06,48.45],[140.6,51.24],[141.35,53.09],[139.9,54.19],[137.19,53.98],[135.13,54.73],[138.96,57.09],[142.2,59.04],[145.49,59.34],[148.54,59.16],[149.78,59.66],[151.27,58.78],[155.04,59.14],[154.22,59.76],[156.72,61.43],[159.3,61.77],[160.12,60.54],[162.66,61.64],[163.67,61.14],[161.87,60.34],[158.36,58.06],[156.81,57.83],[155.43,55.38],[155.99,53.16],[156.79,51.01],[158.23,51.94],[158.53,52.96],[160.02,53.2],[160.37,54.34],[162.12,54.86],[163.06,56.16],[163.19,57.62],[162.02,58.24],[163.54,59.87],[166.29,59.79],[168.9,60.57],[170.7,60.34],[173.68,61.65],[179.37,62.98],[178.31,64.08],[180,64.98],[180,68.96],[175.72,69.88],[170.45,70.1],[167.84,69.58],[160.94,69.44],[159.83,70.45],[157.01,71.03],[152.97,70.84],[149.5,72.2],[140.47,72.85],[139.87,71.49],[133.86,71.39],[131.29,70.79],[128.46,71.98],[128.59,73.04],[126.98,73.57],[113.97,73.59],[109.4,74.18],[113.89,75.33],[111.08,76.71],[108.15,76.72],[104.35,77.7],[98.92,76.45],[87.17,75.12],[86.82,73.94],[80.51,73.65],[79.65,72.32],[75.68,72.3],[69.94,73.04],[66.69,71.03],[66.93,69.45],[69.18,68.62],[68.51,68.09],[63.5,69.55],[61.08,68.94],[57.32,68.47],[53.72,68.86],[48.14,67.52],[43.95,66.07],[42.09,66.48],[39.76,65.5],[34.94,64.41],[34.81,65.9],[38.38,66],[41.13,66.79],[40.29,67.93],[36.51,69.06],[31.1,69.56],[28.59,69.06],[29.98,67.7],[29.05,66.94],[30.22,65.81],[29.54,64.95],[30.04,63.55],[31.14,62.36],[28.07,60.5],[27.98,59.48],[27.29,57.47],[28.18,56.17],[30.87,55.55],[30.76,54.81],[31.73,53.79],[31.79,52.1],[33.75,52.34],[35.36,50.58],[40.07,49.6],[39.74,47.9],[38.22,47.1],[38.23,46.24],[37.4,45.4],[37.54,44.66],[39.96,43.43],[42.39,43.22],[45.47,42.5],[46.4,41.86],[47.82,41.15],[48.58,41.81],[47.49,42.99],[47.59,43.66],[46.68,44.61],[47.68,45.64],[49.1,46.4]],[[93.78,81.02],[91.18,80.34],[93.31,79.43],[97.76,78.76],[100.19,79.78],[93.78,81.02]],[[138.83,76.14],[136.97,75.26],[138.96,74.61],[144.3,74.82],[145.09,75.56],[138.83,76.14]],[[22.73,54.33],[21.27,55.19],[19.66,54.43],[22.73,54.33]],[[53.51,73.75],[51.46,72.01],[53.68,70.76],[56.94,70.63],[55.42,72.37],[58.48,74.31],[61.58,75.26],[61.17,76.25],[55.63,75.08],[53.51,73.75]],[[142.91,53.7],[141.68,53.3],[141.59,51.94],[142.18,50.95],[141.91,46.81],[143.17,49.31],[144.65,48.98],[143.24,51.76],[142.91,53.7]],[[-174.93,67.21],[-180,68.96],[-180,64.98],[-178.36,65.39],[-173.89,64.28],[-172.53,65.44],[-169.9,65.98],[-171.86,66.91],[-174.93,67.21]],[[33.44,45.97],[33.88,44.36],[35.24,44.94],[35.01,45.74],[33.44,45.97]]]},{"iso":"BS","id":"bahamas","name":"Bahamalar","rings":[[[-78.19,25.21],[-78.41,24.58],[-77.54,24.34],[-77.89,25.17],[-78.19,25.21]]]},{"iso":"FK","id":"falkland-is","name":"Falkland Adaları","rings":[[[-61.2,-51.85],[-60.7,-52.3],[-58.05,-51.9],[-60,-51.25],[-61.2,-51.85]]]},{"iso":"NO","id":"norway","name":"Norveç","rings":[[[15.14,79.67],[10.44,79.65],[13.76,77.38],[17.12,76.81],[19.03,78.56],[15.14,79.67]],[[31.1,69.56],[31.29,70.45],[28.17,71.19],[24.55,71.03],[23.02,70.2],[19.18,69.82],[14.76,67.81],[10.53,64.49],[8.55,63.45],[4.99,61.97],[5.67,58.59],[7.05,58.08],[8.38,58.31],[10.36,59.47],[11.03,58.86],[12.3,60.12],[12.63,61.29],[11.93,63.13],[15.11,66.19],[16.77,68.01],[20.65,69.11],[24.74,68.65],[26.18,69.83],[28.59,69.06],[31.1,69.56]],[[27.41,80.06],[22.92,80.66],[17.37,80.32],[20.08,79.57],[27.41,80.06]]]},{"iso":"GL","id":"greenland","name":"Grönland","rings":[[[-46.76,82.63],[-62.65,81.77],[-68.02,80.12],[-65.71,79.39],[-73.16,78.43],[-71.4,77.01],[-68.5,76.06],[-61.27,76.1],[-58.59,75.52],[-54,71.55],[-54.68,69.61],[-52.98,68.36],[-53.97,67.19],[-53.66,66.1],[-52.28,65.18],[-51.63,63.63],[-48.26,60.86],[-46.26,60.85],[-44.79,60.04],[-43.38,60.1],[-42.42,61.9],[-42.82,62.68],[-41.19,63.48],[-39.81,65.46],[-36.35,65.98],[-34.2,66.68],[-32.81,67.74],[-27.75,68.47],[-22.35,70.13],[-21.75,70.66],[-23.44,72.08],[-19.37,74.3],[-19.83,76.1],[-18.47,76.99],[-19.7,78.75],[-17.73,80.13],[-12.21,81.29],[-27.1,83.52],[-38.62,83.55],[-46.76,82.63]]]},{"iso":"TF","id":"fr-s-antarctic-lands","name":"Fransız Güney ve Antarktika Toprakları","rings":[[[68.94,-48.62],[68.75,-49.77],[70.28,-49.71],[70.53,-49.06],[68.94,-48.62]]]},{"iso":"TL","id":"timor-leste","name":"Doğu Timor","rings":[[[124.97,-8.89],[125.09,-9.39],[126.97,-8.67],[126.64,-8.4],[124.97,-8.89]]]},{"iso":"ZA","id":"southafrica","name":"Güney Afrika Cumhuriyeti","rings":[[[16.34,-28.58],[18.22,-31.66],[18.24,-33.87],[19.62,-34.82],[22.57,-33.86],[25.78,-33.94],[28.22,-32.77],[30.06,-31.14],[31.33,-29.4],[32.46,-28.3],[32.83,-26.74],[32.07,-26.73],[30.69,-26.74],[31.04,-25.73],[31.84,-25.84],[31.93,-24.37],[31.19,-22.25],[29.43,-22.09],[27.12,-23.57],[25.66,-25.49],[24.21,-25.67],[23.31,-25.27],[21.61,-26.73],[19.9,-24.77],[19.89,-28.46],[18.46,-29.05],[16.34,-28.58]]]},{"iso":"LS","id":"lesotho","name":"Lesotho","rings":[[[28.98,-28.96],[28.54,-28.65],[27,-29.88],[27.75,-30.65],[28.85,-30.07],[28.98,-28.96]]]},{"iso":"MX","id":"mexico","name":"Meksika","rings":[[[-117.13,32.54],[-115.52,29.56],[-114.16,28.57],[-114.47,27.14],[-112.3,26.01],[-112.18,24.74],[-110.3,23.43],[-111.62,26.66],[-112.76,27.78],[-112.96,28.43],[-114.67,30.16],[-114.78,31.8],[-113.15,31.17],[-112.23,28.95],[-110.39,27.16],[-109.29,26.44],[-109.44,25.82],[-108.4,25.17],[-106.03,22.77],[-105.27,21.08],[-105.73,20.43],[-104.99,19.32],[-103.5,18.29],[-101.92,17.92],[-100.83,17.17],[-96.56,15.65],[-94.69,16.2],[-93.36,15.62],[-92.23,14.54],[-91.75,16.07],[-90.46,16.07],[-91,17.82],[-89.14,17.81],[-88.3,18.5],[-87.84,18.26],[-87.05,21.54],[-88.54,21.49],[-90.28,21],[-90.77,19.28],[-91.41,18.88],[-94.43,18.14],[-95.9,18.83],[-97.19,20.64],[-97.87,22.44],[-97.53,25.84],[-99.02,26.37],[-99.52,27.54],[-100.96,29.38],[-102.48,29.76],[-103.11,28.97],[-104.46,29.57],[-105.04,30.64],[-106.51,31.75],[-108.24,31.34],[-111.02,31.33],[-114.81,32.53],[-117.13,32.54]]]},{"iso":"UY","id":"uruguay","name":"Uruguay","rings":[[[-57.63,-30.22],[-58.43,-33.91],[-57.82,-34.46],[-54.94,-34.95],[-53.37,-33.77],[-53.21,-32.73],[-53.79,-32.05],[-56.98,-30.11],[-57.63,-30.22]]]},{"iso":"BR","id":"brazil","name":"Brezilya","rings":[[[-53.37,-33.77],[-52.26,-32.25],[-50.7,-30.98],[-49.59,-29.22],[-48.89,-28.67],[-48.47,-27.18],[-48.5,-25.88],[-47.65,-24.89],[-46.47,-24.09],[-44.65,-23.35],[-41.99,-22.97],[-40.94,-21.94],[-40.77,-20.9],[-39.76,-19.6],[-38.88,-15.67],[-38.95,-13.79],[-37.05,-11.04],[-35.13,-9],[-34.73,-7.34],[-35.24,-5.46],[-37.22,-4.82],[-38.5,-3.7],[-39.98,-2.87],[-41.47,-2.91],[-44.42,-2.14],[-44.91,-1.55],[-48.62,-0.24],[-50.39,-0.08],[-49.95,1.05],[-50.51,1.9],[-51.32,4.2],[-51.66,4.16],[-52.94,2.12],[-54.52,2.31],[-55.97,2.51],[-56.54,1.9],[-59.03,1.32],[-59.97,2.76],[-59.54,3.96],[-60.73,5.2],[-60.97,4.54],[-62.8,4.01],[-64.37,3.8],[-64.2,1.49],[-66.33,0.72],[-66.88,1.25],[-67.87,1.69],[-69.82,1.71],[-70.02,-0.19],[-69.44,-1.56],[-69.89,-4.3],[-70.79,-4.25],[-72.89,-5.27],[-73.12,-6.63],[-73.99,-7.52],[-73.57,-8.42],[-72.18,-10.05],[-71.3,-10.08],[-70.55,-11.01],[-69.53,-10.95],[-68.27,-11.01],[-66.65,-9.93],[-65.34,-9.76],[-65.4,-11.57],[-64.32,-12.46],[-63.2,-12.63],[-61.71,-13.49],[-60.5,-13.78],[-60.16,-16.26],[-58.24,-16.3],[-58.28,-17.27],[-57.5,-18.17],[-58.17,-20.18],[-57.94,-22.09],[-56.47,-22.09],[-55.61,-22.66],[-55.4,-23.96],[-54.29,-24.57],[-54.63,-25.74],[-53.63,-26.12],[-53.65,-26.92],[-55.16,-27.88],[-57.63,-30.22],[-56.98,-30.11],[-53.79,-32.05],[-53.21,-32.73],[-53.37,-33.77]]]},{"iso":"BO","id":"bolivia","name":"Bolivya","rings":[[[-69.53,-10.95],[-68.67,-12.56],[-68.95,-14.45],[-69.39,-15.66],[-68.96,-16.5],[-69.59,-17.58],[-68.44,-19.41],[-68.76,-20.37],[-67.83,-22.87],[-67.11,-22.74],[-66.27,-21.83],[-62.69,-22.25],[-62.27,-20.51],[-61.79,-19.63],[-59.12,-19.36],[-58.17,-20.18],[-57.5,-18.17],[-58.28,-17.27],[-58.24,-16.3],[-60.16,-16.26],[-60.5,-13.78],[-61.71,-13.49],[-63.2,-12.63],[-64.32,-12.46],[-65.4,-11.57],[-65.34,-9.76],[-66.65,-9.93],[-68.27,-11.01],[-69.53,-10.95]]]},{"iso":"PE","id":"peru","name":"Peru","rings":[[[-69.89,-4.3],[-70.39,-3.77],[-70.05,-2.73],[-70.81,-2.26],[-73.07,-2.31],[-73.66,-1.26],[-75.37,-0.15],[-75.54,-1.56],[-76.64,-2.61],[-77.84,-3],[-78.64,-4.55],[-80.44,-4.43],[-80.3,-3.4],[-81.41,-4.74],[-81.25,-6.14],[-79.76,-7.19],[-79.04,-8.39],[-77.11,-12.22],[-76.26,-13.54],[-76.01,-14.65],[-73.44,-16.36],[-71.46,-17.36],[-70.37,-18.35],[-69.59,-17.58],[-68.96,-16.5],[-69.39,-15.66],[-68.95,-14.45],[-68.67,-12.56],[-69.53,-10.95],[-70.55,-11.01],[-71.3,-10.08],[-72.18,-10.05],[-73.57,-8.42],[-73.99,-7.52],[-73.12,-6.63],[-72.89,-5.27],[-70.79,-4.25],[-69.89,-4.3]]]},{"iso":"CO","id":"colombia","name":"Kolombiya","rings":[[[-66.88,1.25],[-67.3,3.32],[-67.82,4.5],[-67.34,6.1],[-69.39,6.1],[-70.09,6.96],[-71.96,6.99],[-72.79,9.09],[-72.91,10.45],[-71.97,11.61],[-71.33,11.78],[-71.75,12.44],[-73.41,11.23],[-74.2,11.31],[-75.48,10.62],[-75.67,9.44],[-77.35,8.67],[-77.24,7.94],[-77.88,7.22],[-77.13,3.85],[-77.93,2.7],[-78.43,2.63],[-78.86,1.38],[-77.42,0.4],[-76.29,0.42],[-75.37,-0.15],[-73.66,-1.26],[-73.07,-2.31],[-70.81,-2.26],[-70.05,-2.73],[-70.39,-3.77],[-69.89,-4.3],[-69.44,-1.56],[-70.02,-0.19],[-69.82,1.71],[-67.87,1.69],[-66.88,1.25]]]},{"iso":"PA","id":"panama","name":"Panama","rings":[[[-77.35,8.67],[-78.06,9.25],[-79.57,9.61],[-81.44,8.79],[-82.55,9.57],[-82.97,8.23],[-81.72,8.11],[-80.89,7.22],[-80.48,8.09],[-79.12,9],[-78.62,8.72],[-77.88,7.22],[-77.24,7.94],[-77.35,8.67]]]},{"iso":"CR","id":"costa-rica","name":"Kosta Rika","rings":[[[-82.55,9.57],[-83.66,10.94],[-85.71,11.09],[-85.8,10.13],[-83.63,9.05],[-82.97,8.23],[-82.55,9.57]]]},{"iso":"NI","id":"nicaragua","name":"Nikaragua","rings":[[[-83.66,10.94],[-83.55,13.13],[-83.15,15],[-84.92,14.79],[-85.8,13.84],[-86.76,13.75],[-87.32,12.98],[-85.71,11.09],[-83.66,10.94]]]},{"iso":"HN","id":"honduras","name":"Honduras","rings":[[[-83.15,15],[-84.37,15.84],[-86,16.01],[-88.23,15.73],[-89.35,14.42],[-87.72,13.79],[-87.79,13.38],[-87.32,12.98],[-86.76,13.75],[-85.8,13.84],[-84.92,14.79],[-83.15,15]]]},{"iso":"SV","id":"el-salvador","name":"El Salvador","rings":[[[-89.35,14.42],[-90.1,13.74],[-88.48,13.16],[-87.79,13.38],[-87.72,13.79],[-89.35,14.42]]]},{"iso":"GT","id":"guatemala","name":"Guatemala","rings":[[[-92.23,14.54],[-91.23,13.93],[-90.1,13.74],[-89.35,14.42],[-88.23,15.73],[-88.93,15.89],[-89.14,17.81],[-91,17.82],[-90.46,16.07],[-91.75,16.07],[-92.23,14.54]]]},{"iso":"BZ","id":"belize","name":"Belize","rings":[[[-89.14,17.81],[-88.93,15.89],[-88.36,16.53],[-88.3,18.5],[-89.14,17.81]]]},{"iso":"VE","id":"venezuela","name":"Venezuela","rings":[[[-60.73,5.2],[-61.41,5.96],[-61.16,6.7],[-60.3,7.04],[-60.55,7.78],[-59.76,8.37],[-60.67,8.58],[-60.83,9.38],[-62.73,10.42],[-64.32,10.64],[-64.89,10.08],[-66.23,10.65],[-68.19,10.55],[-68.88,11.44],[-70.16,11.38],[-71.33,11.78],[-71.97,11.61],[-72.91,10.45],[-72.79,9.09],[-71.96,6.99],[-70.09,6.96],[-69.39,6.1],[-67.34,6.1],[-67.82,4.5],[-67.3,3.32],[-66.88,1.25],[-66.33,0.72],[-64.2,1.49],[-64.37,3.8],[-62.8,4.01],[-60.97,4.54],[-60.73,5.2]]]},{"iso":"GY","id":"guyana","name":"Guyana","rings":[[[-56.54,1.9],[-58.04,4.06],[-57.31,5.07],[-57.15,5.97],[-59.1,8],[-59.76,8.37],[-60.55,7.78],[-60.3,7.04],[-61.16,6.7],[-61.41,5.96],[-60.73,5.2],[-59.54,3.96],[-59.97,2.76],[-59.03,1.32],[-56.54,1.9]]]},{"iso":"SR","id":"suriname","name":"Surinam","rings":[[[-54.52,2.31],[-54.01,3.62],[-54.48,4.9],[-53.96,5.76],[-55.03,6.03],[-55.95,5.77],[-57.15,5.97],[-57.31,5.07],[-58.04,4.06],[-56.54,1.9],[-55.97,2.51],[-54.52,2.31]]]},{"iso":"FR","id":"france","name":"Fransa","rings":[[[-51.66,4.16],[-52.88,5.41],[-53.96,5.76],[-54.48,4.9],[-54.01,3.62],[-54.52,2.31],[-52.94,2.12],[-51.66,4.16]],[[6.19,49.46],[5.67,49.53],[4.29,49.91],[2.51,51.15],[1.34,50.13],[-0.99,49.35],[-1.62,48.64],[-3.3,48.9],[-4.49,47.95],[-2.96,47.57],[-1.19,46.01],[-1.38,44.02],[-1.9,43.42],[-1.5,43.03],[1.83,42.34],[2.99,42.47],[3.1,43.08],[4.56,43.4],[6.53,43.13],[7.44,43.69],[6.75,45.03],[6.84,45.99],[6.04,46.73],[7.47,47.62],[8.1,49.02],[6.19,49.46]]]},{"iso":"EC","id":"ecuador","name":"Ekvador","rings":[[[-75.37,-0.15],[-76.29,0.42],[-77.42,0.4],[-78.86,1.38],[-80.09,0.77],[-80.93,-1.06],[-80.3,-3.4],[-80.44,-4.43],[-78.64,-4.55],[-77.84,-3],[-76.64,-2.61],[-75.54,-1.56],[-75.37,-0.15]]]},{"iso":"PR","id":"puerto-rico","name":"Porto Riko","rings":[[[-66.28,18.51],[-67.1,18.52],[-67.18,17.95],[-65.85,17.98],[-66.28,18.51]]]},{"iso":"JM","id":"jamaica","name":"Jamaika","rings":[[[-77.57,18.49],[-77.21,17.7],[-76.37,18.16],[-77.57,18.49]]]},{"iso":"CU","id":"cuba","name":"Küba","rings":[[[-82.27,23.19],[-81.82,22.19],[-78.72,21.6],[-77.76,19.86],[-75.63,19.87],[-74.18,20.28],[-76.52,21.21],[-78.35,22.51],[-79.28,22.4],[-80.62,23.11],[-82.27,23.19]]]},{"iso":"ZW","id":"zimbabwe","name":"Zimbabve","rings":[[[31.19,-22.25],[32.24,-21.12],[32.77,-19.72],[32.85,-16.71],[30.27,-15.51],[29.52,-15.64],[27.04,-17.94],[25.26,-17.74],[26.16,-19.29],[28.02,-21.49],[29.43,-22.09],[31.19,-22.25]]]},{"iso":"BW","id":"botswana","name":"Botsvana","rings":[[[29.43,-22.09],[28.02,-21.49],[26.16,-19.29],[25.26,-17.74],[25.08,-17.66],[23.58,-18.28],[23.2,-17.87],[20.91,-18.25],[20.88,-21.81],[19.9,-21.85],[19.9,-24.77],[21.61,-26.73],[23.31,-25.27],[24.21,-25.67],[25.66,-25.49],[27.12,-23.57],[29.43,-22.09]]]},{"iso":"NA","id":"namibia","name":"Namibya","rings":[[[19.9,-24.77],[19.9,-21.85],[20.88,-21.81],[20.91,-18.25],[23.2,-17.87],[23.58,-18.28],[25.08,-17.66],[24.03,-17.3],[23.22,-17.52],[21.38,-17.93],[18.96,-17.79],[18.26,-17.31],[14.21,-17.35],[12.81,-16.94],[11.73,-17.3],[11.79,-18.07],[12.61,-19.05],[13.35,-20.87],[14.26,-22.11],[14.41,-23.85],[15.21,-27.09],[16.34,-28.58],[18.46,-29.05],[19.89,-28.46],[19.9,-24.77]]]},{"iso":"SN","id":"senegal","name":"Senegal","rings":[[[-16.71,13.59],[-15.62,13.62],[-15.93,13.13],[-16.84,13.15],[-16.68,12.38],[-15.55,12.63],[-13.7,12.59],[-11.51,12.44],[-12.17,14.62],[-13.44,16.04],[-14.58,16.6],[-16.46,16.14],[-17.19,14.92],[-16.71,13.59]]]},{"iso":"ML","id":"mali","name":"Mali","rings":[[[-11.51,12.44],[-10.17,11.84],[-9.13,12.31],[-8.38,11.39],[-8.03,10.21],[-6.05,10.1],[-5.4,10.37],[-5.22,11.71],[-2,14.56],[-0.52,15.12],[0.37,14.93],[1.39,15.32],[3.64,15.57],[4.27,16.85],[4.27,19.16],[3.15,19.69],[-1.55,22.79],[-4.92,24.97],[-6.45,24.96],[-5.97,20.64],[-5.49,16.33],[-5.54,15.5],[-9.55,15.49],[-10.65,15.13],[-11.67,15.39],[-12.17,14.62],[-11.51,12.44]]]},{"iso":"MR","id":"mauritania","name":"Moritanya","rings":[[[-17.06,21],[-16.28,20.09],[-16.15,18.11],[-16.46,16.14],[-14.58,16.6],[-13.44,16.04],[-12.17,14.62],[-11.67,15.39],[-10.65,15.13],[-9.55,15.49],[-5.54,15.5],[-5.49,16.33],[-5.97,20.64],[-6.45,24.96],[-4.92,24.97],[-8.68,27.4],[-8.69,25.88],[-11.97,25.93],[-11.94,23.37],[-13.12,22.77],[-12.93,21.33],[-16.85,21.33],[-17.06,21]]]},{"iso":"BJ","id":"benin","name":"Benin","rings":[[[2.69,6.26],[2.72,8.51],[3.71,10.06],[3.61,11.66],[2.85,12.24],[2.15,11.94],[0.9,11],[0.77,10.47],[1.66,9.13],[1.62,6.83],[1.87,6.14],[2.69,6.26]]]},{"iso":"NE","id":"niger","name":"Nijer","rings":[[[14.85,22.86],[12,23.47],[8.57,21.57],[5.68,19.6],[4.27,19.16],[4.27,16.85],[3.64,15.57],[1.39,15.32],[0.37,14.93],[0.43,13.99],[1.02,12.85],[2.18,12.63],[2.15,11.94],[2.85,12.24],[3.61,11.66],[3.68,12.55],[4.37,13.75],[5.44,13.87],[6.82,13.12],[7.8,13.34],[9.01,12.83],[10.11,13.28],[12.3,13.04],[13.32,13.56],[14.18,12.48],[14.5,12.86],[13.54,14.37],[13.97,15.68],[15.25,16.63],[15.3,17.93],[15.9,20.39],[15.1,21.31],[14.85,22.86]]]},{"iso":"NG","id":"nigeria","name":"Nijerya","rings":[[[2.69,6.26],[4.33,6.27],[5.9,4.26],[6.7,4.24],[8.5,4.77],[9.23,6.44],[10.12,7.04],[11.06,6.64],[11.75,6.98],[12.22,8.31],[12.75,8.72],[13.57,10.8],[14.42,11.57],[14.18,12.48],[13.32,13.56],[12.3,13.04],[10.11,13.28],[9.01,12.83],[7.8,13.34],[6.82,13.12],[5.44,13.87],[4.37,13.75],[3.68,12.55],[3.61,11.66],[3.71,10.06],[2.72,8.51],[2.69,6.26]]]},{"iso":"CM","id":"cameroon","name":"Kamerun","rings":[[[14.5,12.86],[14.18,12.48],[14.42,11.57],[13.57,10.8],[12.75,8.72],[12.22,8.31],[11.75,6.98],[11.06,6.64],[10.12,7.04],[9.23,6.44],[8.5,4.77],[9.8,3.07],[9.65,2.28],[11.28,2.26],[13.08,2.27],[14.34,2.23],[15.94,1.73],[16.01,2.27],[14.48,4.73],[14.54,6.23],[15.28,7.42],[14.98,8.8],[13.95,9.55],[14.92,10.89],[14.89,12.22],[14.5,12.86]]]},{"iso":"TG","id":"togo","name":"Togo","rings":[[[0.9,11],[0.02,11.02],[0.37,10.19],[0.49,7.41],[1.06,5.93],[1.87,6.14],[1.62,6.83],[1.66,9.13],[0.77,10.47],[0.9,11]]]},{"iso":"GH","id":"ghana","name":"Gana","rings":[[[0.02,11.02],[-2.94,10.96],[-2.83,9.64],[-2.56,8.22],[-3.24,6.25],[-2.86,4.99],[-1.96,4.71],[1.06,5.93],[0.49,7.41],[0.37,10.19],[0.02,11.02]]]},{"iso":"CI","id":"cote-d-ivoire","name":"Fildişi Sahili","rings":[[[-8.03,10.21],[-8.31,9.79],[-7.83,8.58],[-8.44,7.69],[-8.6,6.47],[-7.57,5.71],[-7.71,4.36],[-5.83,4.99],[-4.01,5.18],[-2.86,4.99],[-3.24,6.25],[-2.56,8.22],[-2.83,9.64],[-4.33,9.61],[-5.4,10.37],[-6.05,10.1],[-8.03,10.21]]]},{"iso":"GN","id":"guinea","name":"Gine","rings":[[[-13.7,12.59],[-13.74,11.81],[-15.13,11.04],[-13.25,8.9],[-12.43,9.84],[-11.12,10.05],[-10.23,8.41],[-9.76,8.54],[-8.93,7.31],[-8.44,7.69],[-7.83,8.58],[-8.31,9.79],[-8.03,10.21],[-8.38,11.39],[-9.13,12.31],[-10.17,11.84],[-11.51,12.44],[-13.7,12.59]]]},{"iso":"GW","id":"guinea-bissau","name":"Gine-Bissau","rings":[[[-16.68,12.38],[-16.09,11.52],[-15.13,11.04],[-13.74,11.81],[-13.7,12.59],[-15.55,12.63],[-16.68,12.38]]]},{"iso":"LR","id":"liberia","name":"Liberya","rings":[[[-8.44,7.69],[-8.93,7.31],[-9.76,8.54],[-10.23,8.41],[-11.44,6.79],[-9,4.83],[-7.71,4.36],[-7.57,5.71],[-8.6,6.47],[-8.44,7.69]]]},{"iso":"SL","id":"sierra-leone","name":"Sierra Leone","rings":[[[-13.25,8.9],[-12.95,7.8],[-11.44,6.79],[-10.23,8.41],[-11.12,10.05],[-12.43,9.84],[-13.25,8.9]]]},{"iso":"BF","id":"burkina-faso","name":"Burkina Faso","rings":[[[-5.4,10.37],[-4.33,9.61],[-2.83,9.64],[-2.94,10.96],[0.02,11.02],[0.9,11],[2.15,11.94],[2.18,12.63],[1.02,12.85],[0.43,13.99],[0.37,14.93],[-0.52,15.12],[-2,14.56],[-5.22,11.71],[-5.4,10.37]]]},{"iso":"CF","id":"central-african-rep","name":"Orta Afrika Cumhuriyeti","rings":[[[27.37,5.23],[24.57,8.23],[23.46,8.95],[23.55,10.09],[22.86,11.14],[21.72,10.57],[21,9.48],[20.06,9.01],[19.09,9.07],[17.96,7.89],[15.28,7.42],[14.54,6.23],[14.48,4.73],[16.01,2.27],[17.13,3.73],[18.45,3.5],[18.54,4.2],[19.47,5.03],[20.93,4.32],[22.41,4.03],[24.41,5.11],[27.37,5.23]]]},{"iso":"CG","id":"congo","name":"Kongo Cumhuriyeti","rings":[[[18.45,3.5],[17.13,3.73],[16.01,2.27],[15.94,1.73],[14.34,2.23],[13.08,2.27],[13.28,1.31],[14.28,1.2],[13.84,0.04],[14.43,-1.33],[13.99,-2.47],[12.5,-2.39],[11.09,-3.98],[11.91,-5.04],[13,-4.78],[14.14,-4.51],[14.58,-4.97],[16.01,-3.54],[16.41,-1.74],[17.52,-0.74],[17.9,1.74],[18.45,3.5]]]},{"iso":"GA","id":"gabon","name":"Gabon","rings":[[[11.28,2.26],[11.29,1.06],[9.49,1.01],[8.8,-1.11],[9.41,-2.14],[11.09,-3.98],[12.5,-2.39],[13.99,-2.47],[14.43,-1.33],[13.84,0.04],[14.28,1.2],[13.28,1.31],[13.08,2.27],[11.28,2.26]]]},{"iso":"GQ","id":"eq-guinea","name":"Ekvator Ginesi","rings":[[[9.65,2.28],[9.49,1.01],[11.29,1.06],[11.28,2.26],[9.65,2.28]]]},{"iso":"ZM","id":"zambia","name":"Zambiya","rings":[[[30.74,-8.34],[28.73,-8.53],[28.37,-11.79],[28.16,-12.27],[25.75,-11.78],[25.42,-11.33],[23.91,-10.93],[24.02,-12.91],[21.93,-12.9],[21.89,-16.08],[23.22,-17.52],[24.03,-17.3],[25.08,-17.66],[25.26,-17.74],[27.04,-17.94],[29.52,-15.64],[30.27,-15.51],[30.18,-14.8],[33.21,-13.97],[32.69,-13.71],[33.31,-12.44],[33.11,-11.61],[33.49,-10.53],[32.76,-9.23],[30.74,-8.34]]]},{"iso":"MW","id":"malawi","name":"Malavi","rings":[[[32.76,-9.23],[33.49,-10.53],[33.11,-11.61],[33.31,-12.44],[32.69,-13.71],[33.21,-13.97],[34.46,-14.61],[34.38,-16.18],[35.03,-16.8],[35.77,-15.9],[35.69,-14.61],[34.56,-13.58],[34.28,-12.28],[34.56,-11.52],[34.28,-10.16],[33.74,-9.42],[32.76,-9.23]]]},{"iso":"MZ","id":"mozambique","name":"Mozambik","rings":[[[34.56,-11.52],[34.28,-12.28],[34.56,-13.58],[35.69,-14.61],[35.77,-15.9],[35.03,-16.8],[34.38,-16.18],[34.46,-14.61],[33.21,-13.97],[30.18,-14.8],[30.27,-15.51],[32.85,-16.71],[32.77,-19.72],[32.24,-21.12],[31.19,-22.25],[31.93,-24.37],[31.84,-25.84],[32.07,-26.73],[32.83,-26.74],[32.57,-25.73],[35.46,-24.12],[35.56,-22.09],[34.7,-20.5],[34.79,-19.78],[37.41,-17.59],[39.45,-16.72],[40.78,-14.69],[40.6,-14.2],[40.48,-10.77],[40.32,-10.32],[39.52,-10.9],[36.51,-11.72],[34.56,-11.52]]]},{"iso":"SZ","id":"eswatini","name":"Esvatini","rings":[[[32.07,-26.73],[31.84,-25.84],[31.04,-25.73],[30.69,-26.74],[32.07,-26.73]]]},{"iso":"AO","id":"angola","name":"Angola","rings":[[[13,-4.78],[11.91,-5.04],[12.18,-5.79],[13,-4.78]],[[12.32,-6.1],[13.24,-8.56],[12.88,-9.17],[13.69,-10.73],[13.63,-12.04],[12.74,-13.14],[11.78,-15.79],[11.73,-17.3],[12.81,-16.94],[14.21,-17.35],[18.26,-17.31],[18.96,-17.79],[21.38,-17.93],[23.22,-17.52],[21.89,-16.08],[21.93,-12.9],[24.02,-12.91],[23.91,-10.93],[22.16,-11.08],[21.73,-7.29],[19.42,-7.16],[19.02,-7.99],[17.47,-8.07],[16.33,-5.88],[13.38,-5.86],[12.32,-6.1]]]},{"iso":"BI","id":"burundi","name":"Burundi","rings":[[[30.47,-2.41],[29.02,-2.84],[29.34,-4.5],[30.75,-3.36],[30.47,-2.41]]]},{"iso":"IL","id":"israel","name":"İsrail","rings":[[[35.72,32.71],[35.82,33.28],[35.13,33.09],[34.27,31.22],[34.82,29.76],[34.92,29.5],[35.4,31.49],[34.93,31.35],[35.18,32.53],[35.55,32.39],[35.72,32.71]]]},{"iso":"LB","id":"lebanon","name":"Lübnan","rings":[[[35.82,33.28],[36.61,34.2],[36,34.64],[35.13,33.09],[35.82,33.28]]]},{"iso":"MG","id":"madagascar","name":"Madagaskar","rings":[[[49.54,-12.47],[47.71,-14.59],[46.31,-15.78],[44.45,-16.22],[43.96,-17.41],[44.46,-19.44],[44.37,-20.07],[43.25,-22.06],[44.04,-24.99],[45.41,-25.6],[47.1,-24.94],[48.55,-20.5],[49.44,-17.95],[49.5,-17.11],[50.48,-15.23],[49.54,-12.47]]]},{"iso":"PS","id":"palestine","name":"Filistin","rings":[[[35.4,31.49],[35.55,32.39],[35.18,32.53],[34.93,31.35],[35.4,31.49]]]},{"iso":"GM","id":"gambia","name":"Gambiya","rings":[[[-16.71,13.59],[-16.84,13.15],[-15.93,13.13],[-15.62,13.62],[-16.71,13.59]]]},{"iso":"TN","id":"tunisia","name":"Tunus","rings":[[[9.48,30.31],[9.95,31.38],[11.43,32.37],[11.49,33.14],[10.15,34.33],[10.94,35.7],[9.51,37.35],[8.42,36.95],[8.14,34.66],[7.61,33.34],[9.06,32.1],[9.48,30.31]]]},{"iso":"DZ","id":"algeria","name":"Cezayir","rings":[[[-8.68,27.4],[-4.92,24.97],[-1.55,22.79],[3.15,19.69],[4.27,19.16],[5.68,19.6],[8.57,21.57],[12,23.47],[10.77,24.56],[10.3,24.38],[9.32,26.09],[9.72,26.51],[9.86,28.96],[9.48,30.31],[9.06,32.1],[7.61,33.34],[8.14,34.66],[8.42,36.95],[6.26,37.11],[4.82,36.87],[1.47,36.61],[-2.17,35.17],[-1.31,32.26],[-3.65,31.64],[-3.69,30.9],[-5.24,30],[-7.06,29.58],[-8.67,28.84],[-8.67,27.66],[-8.68,27.4]]]},{"iso":"JO","id":"jordan","name":"Ürdün","rings":[[[35.55,32.39],[35.4,31.49],[34.92,29.5],[34.96,29.36],[36.07,29.2],[38,30.51],[37,31.51],[39.2,32.16],[38.79,33.38],[36.83,32.31],[35.72,32.71],[35.55,32.39]]]},{"iso":"AE","id":"uae","name":"Birleşik Arap Emirlikleri","rings":[[[51.58,24.25],[52,23],[55.01,22.5],[55.21,22.71],[55.8,24.27],[56.4,24.92],[56.26,25.71],[56.07,26.06],[54.01,24.12],[51.58,24.25]]]},{"iso":"QA","id":"qatar","name":"Katar","rings":[[[50.81,24.75],[51.39,24.63],[51.59,25.8],[51.01,26.01],[50.81,24.75]]]},{"iso":"KW","id":"kuwait","name":"Kuveyt","rings":[[[47.97,29.98],[47.3,30.06],[46.57,29.1],[48.42,28.55],[47.97,29.98]]]},{"iso":"IQ","id":"iraq","name":"Irak","rings":[[[39.2,32.16],[41.89,31.19],[44.71,29.18],[46.57,29.1],[47.3,30.06],[47.97,29.98],[48.57,29.93],[47.69,30.98],[47.33,32.47],[46.11,33.02],[45.42,33.97],[46.08,35.68],[45.42,35.98],[44.77,37.17],[42.35,37.23],[41.29,36.36],[41.01,34.42],[38.79,33.38],[39.2,32.16]]]},{"iso":"OM","id":"oman","name":"Umman","rings":[[[55.21,22.71],[55.67,22],[55,20],[52,19],[53.11,16.65],[55.27,17.23],[56.28,17.88],[56.61,18.57],[57.79,19.07],[57.67,19.74],[58.49,20.43],[59.81,22.31],[58.73,23.57],[57.4,23.88],[56.4,24.92],[55.8,24.27],[55.21,22.71]]]},{"iso":"VU","id":"vanuatu","name":"Vanuatu","rings":[[[166.79,-15.67],[167.27,-15.74],[167.11,-14.93],[166.63,-14.63],[166.79,-15.67]]]},{"iso":"KH","id":"cambodia","name":"Kamboçya","rings":[[[102.58,12.19],[103.5,10.63],[104.33,10.49],[105.81,11.57],[107.49,12.34],[107.38,14.2],[106.5,14.57],[106.04,13.88],[105.22,14.27],[102.99,14.23],[102.35,13.39],[102.58,12.19]]]},{"iso":"TH","id":"thailand","name":"Tayland","rings":[[[105.22,14.27],[105.59,15.57],[104.78,16.44],[104.72,17.43],[103.96,18.24],[102.11,18.11],[101.06,17.51],[101.28,19.46],[100.61,19.51],[100.12,20.42],[98.25,19.71],[97.8,18.63],[97.86,17.57],[98.9,16.18],[98.43,14.62],[99.1,13.83],[99.59,11.89],[98.55,9.93],[98.5,8.38],[100.09,6.46],[101.81,5.81],[102.14,6.22],[100.46,7.43],[99.87,9.21],[99.15,9.96],[100.02,12.31],[100.1,13.41],[100.98,13.41],[102.58,12.19],[102.35,13.39],[102.99,14.23],[105.22,14.27]]]},{"iso":"LA","id":"laos","name":"Laos","rings":[[[107.38,14.2],[107.56,15.2],[105.09,18.67],[103.9,19.27],[104.82,19.89],[104.44,20.76],[103.2,20.77],[102.17,22.46],[101.18,21.44],[100.12,20.42],[100.61,19.51],[101.28,19.46],[101.06,17.51],[102.11,18.11],[103.96,18.24],[104.72,17.43],[104.78,16.44],[105.59,15.57],[105.22,14.27],[106.04,13.88],[106.5,14.57],[107.38,14.2]]]},{"iso":"MM","id":"myanmar","name":"Myanmar","rings":[[[100.12,20.42],[101.18,21.44],[99.24,22.12],[98.66,24.06],[97.6,23.9],[97.72,25.08],[98.67,25.92],[98.68,27.51],[97.33,28.26],[97.05,27.7],[95.12,26.57],[95.16,26],[94.11,23.85],[93.33,24.08],[93.17,22.28],[92.67,22.04],[92.37,20.67],[94.32,18.21],[94.53,17.28],[94.19,16.04],[95.37,15.71],[97.16,16.93],[97.6,16.1],[98.1,13.64],[98.51,13.12],[98.76,11.44],[98.55,9.93],[99.59,11.89],[99.1,13.83],[98.43,14.62],[98.9,16.18],[97.86,17.57],[97.8,18.63],[98.25,19.71],[100.12,20.42]]]},{"iso":"VN","id":"vietnam","name":"Vietnam","rings":[[[104.33,10.49],[105.08,9.92],[105.16,8.6],[107.22,10.36],[109.2,11.67],[109.34,13.43],[108.88,15.28],[107.36,16.7],[105.66,19.06],[106.72,20.7],[108.05,21.55],[107.04,21.81],[106.73,22.79],[105.33,23.35],[104.48,22.82],[102.17,22.46],[103.2,20.77],[104.44,20.76],[104.82,19.89],[103.9,19.27],[105.09,18.67],[107.56,15.2],[107.38,14.2],[107.49,12.34],[105.81,11.57],[104.33,10.49]]]},{"iso":"KP","id":"north-korea","name":"Kuzey Kore","rings":[[[130.64,42.4],[129.6,42.42],[126.87,41.82],[126.18,41.11],[124.27,39.93],[125.39,39.39],[124.71,38.11],[126.17,37.75],[128.35,38.61],[127.53,39.76],[129.71,40.88],[129.67,41.6],[130.78,42.22],[130.64,42.4]]]},{"iso":"KR","id":"south-korea","name":"Güney Kore","rings":[[[126.17,37.75],[126.56,35.68],[126.49,34.39],[129.09,35.08],[129.46,36.78],[128.35,38.61],[126.17,37.75]]]},{"iso":"MN","id":"mongolia","name":"Moğolistan","rings":[[[87.75,49.3],[88.85,48.07],[90.28,47.69],[90.97,46.89],[90.95,45.29],[93.48,44.98],[95.31,44.24],[96.35,42.73],[99.52,42.52],[101.83,42.51],[104.96,41.6],[106.13,42.13],[109.24,42.52],[111.83,43.74],[111.87,45.1],[113.46,44.81],[115.99,45.73],[117.42,46.67],[119.77,47.05],[118.06,48.07],[117.3,47.7],[115.49,48.14],[116.68,49.89],[114.36,50.25],[112.9,49.54],[110.66,49.13],[108.48,49.28],[106.89,50.27],[103.68,50.09],[102.26,50.51],[102.07,51.26],[98.86,52.05],[97.26,49.73],[94.82,50.01],[92.23,50.8],[88.81,49.47],[87.75,49.3]]]},{"iso":"IN","id":"india","name":"Hindistan","rings":[[[97.33,28.26],[96.12,29.45],[94.57,29.28],[92.5,27.9],[91.7,27.77],[92.03,26.84],[89.74,26.72],[88.81,27.3],[88.12,27.88],[88.06,26.41],[85.25,26.73],[84.68,27.23],[83.3,27.36],[80.09,28.79],[81.11,30.18],[78.74,31.52],[78.46,32.62],[78.91,34.32],[77.84,35.49],[76.87,34.65],[74.24,34.75],[73.75,34.32],[74.45,32.76],[74.42,30.98],[72.82,28.96],[71.78,27.91],[70.62,27.99],[69.51,26.94],[70.17,26.49],[71.04,24.36],[68.84,24.36],[68.18,23.69],[69.35,22.84],[69.16,22.09],[70.47,20.88],[71.18,20.76],[72.63,21.36],[72.82,19.21],[73.53,15.99],[74.44,14.62],[74.86,12.74],[75.75,11.31],[76.59,8.9],[77.54,7.97],[79.86,10.36],[79.86,12.06],[80.29,13.01],[80.03,15.14],[80.32,15.9],[82.19,16.56],[82.19,17.02],[83.94,18.3],[85.06,19.48],[86.5,20.15],[86.98,21.5],[88.89,21.69],[89.03,22.06],[88.08,24.5],[89.92,25.27],[92.38,24.98],[91.92,24.13],[92.67,22.04],[93.17,22.28],[93.33,24.08],[94.11,23.85],[95.16,26],[95.12,26.57],[97.05,27.7],[97.33,28.26]]]},{"iso":"BD","id":"bangladesh","name":"Bangladeş","rings":[[[92.67,22.04],[91.92,24.13],[92.38,24.98],[89.92,25.27],[88.08,24.5],[89.03,22.06],[90.27,21.84],[90.5,22.81],[91.42,22.77],[92.37,20.67],[92.67,22.04]]]},{"iso":"BT","id":"bhutan","name":"Bhutan","rings":[[[91.7,27.77],[90.02,28.3],[88.81,27.3],[89.74,26.72],[92.03,26.84],[91.7,27.77]]]},{"iso":"NP","id":"nepal","name":"Nepal","rings":[[[88.12,27.88],[85.82,28.2],[84.23,28.84],[82.33,30.12],[81.11,30.18],[80.09,28.79],[83.3,27.36],[84.68,27.23],[85.25,26.73],[88.06,26.41],[88.12,27.88]]]},{"iso":"PK","id":"pakistan","name":"Pakistan","rings":[[[77.84,35.49],[76.19,35.9],[75.16,37.13],[71.85,36.51],[71.61,35.15],[70.88,33.99],[69.69,33.11],[68.93,31.62],[66.94,31.3],[66.35,29.89],[65.05,29.47],[62.55,29.32],[60.87,29.83],[61.77,28.7],[62.73,28.26],[63.32,26.76],[61.87,26.24],[61.5,25.08],[66.37,25.43],[67.44,23.94],[68.18,23.69],[68.84,24.36],[71.04,24.36],[70.17,26.49],[69.51,26.94],[70.62,27.99],[71.78,27.91],[72.82,28.96],[74.42,30.98],[74.45,32.76],[73.75,34.32],[74.24,34.75],[76.87,34.65],[77.84,35.49]]]},{"iso":"AF","id":"afghanistan","name":"Afganistan","rings":[[[66.52,37.36],[64.75,37.11],[64.55,36.31],[62.23,35.27],[61.21,35.65],[60.53,33.68],[60.94,31.55],[61.78,30.74],[60.87,29.83],[62.55,29.32],[65.05,29.47],[66.35,29.89],[66.94,31.3],[68.93,31.62],[69.69,33.11],[70.88,33.99],[71.61,35.15],[71.85,36.51],[75.16,37.13],[74.98,37.42],[73.26,37.5],[71.84,36.74],[71.54,37.91],[67.83,37.14],[66.52,37.36]]]},{"iso":"TJ","id":"tajikistan","name":"Tacikistan","rings":[[[67.83,37.14],[71.54,37.91],[71.84,36.74],[73.26,37.5],[74.98,37.42],[74.86,38.38],[73.93,38.51],[73.68,39.43],[71.78,39.28],[71.01,40.24],[70.67,40.96],[69.33,40.73],[68.18,38.9],[68.39,38.16],[67.83,37.14]]]},{"iso":"KG","id":"kyrgyzstan","name":"Kırgızistan","rings":[[[70.96,42.27],[73.06,40.87],[71.77,40.15],[71.01,40.24],[71.78,39.28],[73.68,39.43],[73.82,39.89],[76.9,41.07],[78.19,41.19],[80.26,42.35],[79.14,42.86],[76,42.99],[74.21,43.3],[73.49,42.5],[71.84,42.85],[70.96,42.27]]]},{"iso":"TM","id":"turkmenistan","name":"Türkmenistan","rings":[[[52.5,41.78],[53.72,42.12],[54.74,40.95],[52.69,40.03],[53.88,38.95],[53.92,37.2],[55.51,37.96],[57.33,38.03],[59.23,37.41],[61.21,35.65],[62.23,35.27],[64.55,36.31],[64.75,37.11],[66.52,37.36],[66.55,37.97],[64.17,38.89],[62.37,40.05],[61.88,41.08],[60.08,41.43],[59.98,42.22],[58.63,42.75],[55.97,41.31],[54.08,42.32],[52.5,41.78]]]},{"iso":"IR","id":"iran","name":"İran","rings":[[[48.57,29.93],[50.12,30.15],[51.52,27.87],[53.49,26.81],[54.72,26.48],[56.49,27.14],[57.4,25.74],[61.5,25.08],[61.87,26.24],[63.32,26.76],[62.73,28.26],[61.77,28.7],[60.87,29.83],[61.78,30.74],[60.94,31.55],[60.53,33.68],[61.21,35.65],[59.23,37.41],[57.33,38.03],[55.51,37.96],[53.92,37.2],[52.26,36.7],[50.84,36.87],[49.2,37.58],[48.88,38.32],[47.69,39.51],[46.51,38.77],[46.14,38.74],[44.79,39.71],[44.11,39.43],[44.77,37.17],[45.42,35.98],[46.08,35.68],[45.42,33.97],[46.11,33.02],[47.33,32.47],[47.69,30.98],[48.57,29.93]]]},{"iso":"SY","id":"syria","name":"Suriye","rings":[[[35.72,32.71],[36.83,32.31],[38.79,33.38],[41.01,34.42],[41.29,36.36],[42.35,37.23],[39.52,36.72],[37.07,36.62],[36.15,35.82],[36,34.64],[36.61,34.2],[35.82,33.28],[35.72,32.71]]]},{"iso":"AM","id":"armenia","name":"Ermenistan","rings":[[[46.51,38.77],[46.48,39.46],[44.97,41.25],[43.58,41.09],[43.66,40.25],[44.79,39.71],[46.14,38.74],[46.51,38.77]]]},{"iso":"SE","id":"sweden","name":"İsveç","rings":[[[11.03,58.86],[12.94,55.36],[14.67,56.2],[15.88,56.1],[16.83,58.72],[17.87,58.95],[18.79,60.08],[17.12,61.34],[17.85,62.75],[21.37,64.41],[22.18,65.72],[23.9,66.01],[23.54,67.94],[20.65,69.11],[16.77,68.01],[15.11,66.19],[11.93,63.13],[12.63,61.29],[12.3,60.12],[11.03,58.86]]]},{"iso":"BY","id":"belarus","name":"Beyaz Rusya","rings":[[[28.18,56.17],[26.49,55.62],[25.54,54.28],[23.48,53.91],[23.53,51.58],[24.55,51.89],[29.25,51.37],[31.79,52.1],[31.73,53.79],[30.76,54.81],[30.87,55.55],[28.18,56.17]]]},{"iso":"UA","id":"ukraine","name":"Ukrayna","rings":[[[31.79,52.1],[29.25,51.37],[24.55,51.89],[23.53,51.58],[24.03,50.71],[22.56,49.09],[22.09,48.42],[22.71,47.88],[24.87,47.74],[26.62,48.22],[27.52,48.47],[29.12,47.85],[29.76,46.35],[28.23,45.49],[29.6,45.29],[30.75,46.58],[33.44,45.97],[35.01,45.74],[34.96,46.27],[38.22,47.1],[39.74,47.9],[40.07,49.6],[35.36,50.58],[33.75,52.34],[31.79,52.1]]]},{"iso":"PL","id":"poland","name":"Polonya","rings":[[[23.48,53.91],[22.73,54.33],[19.66,54.43],[17.62,54.85],[14.12,53.76],[14.07,52.98],[15.02,51.11],[17.55,50.36],[18.85,49.5],[19.83,49.22],[21.61,49.47],[22.56,49.09],[24.03,50.71],[23.53,51.58],[23.48,53.91]]]},{"iso":"AT","id":"austria","name":"Avusturya","rings":[[[16.98,48.12],[16.96,48.6],[15.25,49.04],[13.6,48.88],[13.03,47.64],[9.59,47.53],[10.44,46.89],[12.15,47.12],[13.81,46.51],[16.2,46.85],[16.98,48.12]]]},{"iso":"HU","id":"hungary","name":"Macaristan","rings":[[[22.09,48.42],[20.8,48.62],[17.86,47.76],[16.98,48.12],[16.2,46.85],[16.56,46.5],[18.83,45.91],[20.22,46.13],[21.02,46.32],[22.71,47.88],[22.09,48.42]]]},{"iso":"MD","id":"moldova","name":"Moldova","rings":[[[26.62,48.22],[28.13,46.81],[28.23,45.49],[29.76,46.35],[29.12,47.85],[27.52,48.47],[26.62,48.22]]]},{"iso":"RO","id":"romania","name":"Romanya","rings":[[[28.23,45.49],[28.13,46.81],[26.62,48.22],[24.87,47.74],[22.71,47.88],[21.02,46.32],[20.22,46.13],[21.56,44.77],[22.66,44.23],[22.94,43.82],[25.57,43.69],[27.24,44.18],[28.56,43.71],[28.84,44.91],[29.6,45.29],[28.23,45.49]]]},{"iso":"LT","id":"lithuania","name":"Litvanya","rings":[[[26.49,55.62],[24.86,56.37],[21.06,56.03],[21.27,55.19],[22.73,54.33],[23.48,53.91],[25.54,54.28],[26.49,55.62]]]},{"iso":"LV","id":"latvia","name":"Letonya","rings":[[[27.29,57.47],[24.31,57.79],[23.32,57.01],[21.58,57.41],[21.06,56.03],[24.86,56.37],[26.49,55.62],[28.18,56.17],[27.29,57.47]]]},{"iso":"EE","id":"estonia","name":"Estonya","rings":[[[27.98,59.48],[25.86,59.61],[23.34,59.19],[24.31,57.79],[27.29,57.47],[27.98,59.48]]]},{"iso":"DE","id":"germany","name":"Almanya","rings":[[[14.12,53.76],[11.96,54.2],[9.92,54.98],[8.53,54.96],[8.8,54.02],[6.91,53.48],[6.16,50.8],[6.04,50.13],[6.19,49.46],[8.1,49.02],[7.47,47.62],[9.59,47.53],[13.03,47.64],[13.6,48.88],[12.24,50.27],[15.02,51.11],[14.07,52.98],[14.12,53.76]]]},{"iso":"BG","id":"bulgaria","name":"Bulgaristan","rings":[[[22.66,44.23],[22.99,43.21],[22.38,42.32],[22.95,41.34],[26.12,41.83],[28,42.01],[27.67,42.58],[28.56,43.71],[27.24,44.18],[25.57,43.69],[22.94,43.82],[22.66,44.23]]]},{"iso":"GR","id":"greece","name":"Yunanistan","rings":[[[22.95,41.34],[21.02,40.84],[20.15,39.62],[21.12,38.31],[21.67,36.84],[24.04,37.66],[22.97,38.97],[22.85,39.66],[24.41,40.12],[24.93,40.95],[26.06,40.82],[26.12,41.83],[22.95,41.34]]]},{"iso":"TR","id":"turkey","name":"Türkiye","rings":[[[44.77,37.17],[44.11,39.43],[44.79,39.71],[43.66,40.25],[43.58,41.09],[41.55,41.54],[40.37,41.01],[38.35,40.95],[35.17,42.04],[33.51,42.02],[31.15,41.09],[29.24,41.22],[28.82,40.46],[27.28,40.42],[26.17,39.46],[26.32,38.21],[27.64,36.66],[28.73,36.68],[29.7,36.14],[30.62,36.68],[32.51,36.11],[34.03,36.22],[34.71,36.8],[36.15,35.82],[37.07,36.62],[39.52,36.72],[42.35,37.23],[44.77,37.17]],[[26.12,41.83],[26.06,40.82],[27.62,41],[28,42.01],[26.12,41.83]]]},{"iso":"AL","id":"albania","name":"Arnavutluk","rings":[[[21.02,40.84],[20.59,41.86],[20.07,42.59],[19.37,41.88],[19.41,40.25],[20.15,39.62],[21.02,40.84]]]},{"iso":"HR","id":"croatia","name":"Hırvatistan","rings":[[[16.56,46.5],[15.33,45.45],[13.72,45.5],[14.9,45.08],[16.02,43.51],[18.45,42.48],[18.56,42.65],[17.67,43.03],[15.75,44.82],[15.96,45.23],[19.01,44.86],[18.83,45.91],[16.56,46.5]]]},{"iso":"CH","id":"switzerland","name":"İsviçre","rings":[[[9.59,47.53],[7.47,47.62],[6.04,46.73],[6.84,45.99],[7.76,45.82],[10.44,46.89],[9.59,47.53]]]},{"iso":"LU","id":"luxembourg","name":"Lüksemburg","rings":[[[6.04,50.13],[5.67,49.53],[6.19,49.46],[6.04,50.13]]]},{"iso":"BE","id":"belgium","name":"Belçika","rings":[[[6.16,50.8],[4.97,51.48],[3.32,51.35],[2.51,51.15],[4.29,49.91],[5.67,49.53],[6.04,50.13],[6.16,50.8]]]},{"iso":"NL","id":"netherlands","name":"Hollanda","rings":[[[6.91,53.48],[4.71,53.09],[3.32,51.35],[4.97,51.48],[6.16,50.8],[6.91,53.48]]]},{"iso":"PT","id":"portugal","name":"Portekiz","rings":[[[-9.03,41.88],[-8.77,40.76],[-9.53,38.74],[-8.84,38.27],[-8.9,36.87],[-7.45,37.1],[-6.67,41.88],[-9.03,41.88]]]},{"iso":"ES","id":"spain","name":"İspanya","rings":[[[-7.45,37.1],[-6.52,36.94],[-5.38,35.95],[-4.37,36.68],[-2.15,36.67],[-0.68,37.64],[0.11,38.74],[-0.28,39.31],[0.81,41.01],[2.09,41.23],[2.99,42.47],[1.83,42.34],[-1.5,43.03],[-1.9,43.42],[-4.35,43.4],[-7.98,43.75],[-9.39,43.03],[-9.03,41.88],[-6.67,41.88],[-7.45,37.1]]]},{"iso":"IE","id":"ireland","name":"İrlanda","rings":[[[-6.2,53.87],[-7.57,54.06],[-7.57,55.13],[-9.69,53.88],[-9.17,52.86],[-9.98,51.82],[-8.56,51.67],[-6.79,52.26],[-6.2,53.87]]]},{"iso":"NC","id":"new-caledonia","name":"Yeni Kaledonya","rings":[[[165.78,-21.08],[164.46,-20.12],[164.17,-20.44],[165.47,-21.68],[165.78,-21.08]]]},{"iso":"SB","id":"solomon-is","name":"Solomon Adaları","rings":[[[159.64,-8.02],[158.36,-7.32],[158.59,-7.75],[159.92,-8.54],[159.64,-8.02]]]},{"iso":"NZ","id":"new-zealand","name":"Yeni Zelanda","rings":[[[176.89,-40.07],[177.97,-39.17],[178.52,-37.7],[176.76,-37.88],[175.34,-37.21],[174.33,-35.27],[173.05,-35.24],[174.7,-37.38],[174.57,-38.8],[173.82,-39.51],[176.01,-41.29],[176.89,-40.07]],[[169.67,-43.56],[168.3,-44.12],[167.05,-45.11],[166.68,-46.22],[169.33,-46.64],[170.62,-45.91],[171.45,-44.24],[172.31,-43.87],[174.25,-41.77],[172.1,-40.96],[171.13,-42.51],[169.67,-43.56]]]},{"iso":"AU","id":"australia","name":"Avustralya","rings":[[[147.69,-40.81],[144.72,-41.16],[146.05,-43.55],[146.87,-43.63],[148.36,-42.06],[147.69,-40.81]],[[126.15,-32.22],[127.1,-32.28],[129.54,-31.59],[131.33,-31.5],[134.27,-32.62],[135.99,-34.89],[136.37,-34.09],[138.12,-35.61],[139.57,-36.14],[140.64,-38.02],[143.61,-38.81],[144.49,-38.09],[146.32,-39.04],[148.3,-37.81],[150,-37.43],[150.08,-36.42],[151.71,-33.04],[152.89,-31.64],[153.57,-28.11],[153.09,-27.26],[152.86,-25.27],[150.9,-23.46],[150.73,-22.4],[149.68,-22.34],[148.85,-20.39],[146.39,-18.96],[145.64,-16.78],[145.37,-14.98],[144.56,-14.17],[143.92,-14.55],[143.52,-12.83],[142.52,-10.67],[141.69,-12.41],[141.52,-13.7],[141.7,-15.04],[140.88,-17.37],[140.22,-17.71],[139.26,-17.37],[135.43,-14.72],[136.95,-12.35],[136.49,-11.86],[135.3,-12.25],[133.55,-11.79],[131.22,-12.18],[130.62,-12.54],[129.41,-14.42],[128.36,-14.87],[127.07,-13.82],[125.69,-14.23],[123.82,-16.11],[122.31,-17.25],[122.24,-18.2],[120.86,-19.68],[119.25,-19.95],[117.44,-20.75],[116.71,-20.7],[114.65,-21.83],[113.84,-23.06],[113.39,-24.38],[113.44,-25.62],[114.17,-28.12],[115.04,-29.46],[115.16,-30.6],[115.8,-32.21],[115.03,-34.2],[116.63,-35.03],[118.02,-35.06],[119.89,-33.98],[123.66,-33.89],[124.22,-32.96],[126.15,-32.22]]]},{"iso":"LK","id":"sri-lanka","name":"Sri Lanka","rings":[[[81.79,7.52],[80.84,9.27],[80.15,9.82],[79.7,8.2],[79.87,6.76],[80.35,5.97],[81.64,6.48],[81.79,7.52]]]},{"iso":"CN","id":"china","name":"Çin Halk Cumhuriyeti","rings":[[[109.48,18.2],[110.34,18.68],[111.01,19.7],[110.21,20.1],[108.63,19.37],[108.66,18.51],[109.48,18.2]],[[80.26,42.35],[78.19,41.19],[76.9,41.07],[73.82,39.89],[73.68,39.43],[73.93,38.51],[74.86,38.38],[74.98,37.42],[75.16,37.13],[76.19,35.9],[77.84,35.49],[78.91,34.32],[78.46,32.62],[78.74,31.52],[81.11,30.18],[82.33,30.12],[84.23,28.84],[85.82,28.2],[88.12,27.88],[88.81,27.3],[90.02,28.3],[91.7,27.77],[92.5,27.9],[94.57,29.28],[96.12,29.45],[97.33,28.26],[98.68,27.51],[98.67,25.92],[97.72,25.08],[97.6,23.9],[98.66,24.06],[99.24,22.12],[101.18,21.44],[102.17,22.46],[104.48,22.82],[105.33,23.35],[106.73,22.79],[107.04,21.81],[108.05,21.55],[109.86,21.4],[111.84,21.55],[115.89,22.78],[118.66,24.55],[119.59,25.74],[121.13,28.14],[121.68,28.23],[122.09,29.83],[121.26,30.68],[121.91,31.69],[120.62,33.38],[120.23,34.36],[119.15,34.91],[122.36,37.45],[120.82,37.87],[119.7,37.16],[118.06,38.06],[117.53,38.74],[119.02,39.25],[119.64,39.9],[121.64,40.95],[121.38,39.75],[122.13,39.17],[124.27,39.93],[126.18,41.11],[126.87,41.82],[129.6,42.42],[130.64,42.4],[131.14,42.93],[131.03,44.97],[133.1,45.14],[135.03,48.48],[132.51,47.79],[130.99,47.79],[130.58,48.73],[129.4,49.44],[127.66,49.76],[125.95,52.79],[123.57,53.46],[121,53.25],[120.74,51.96],[117.88,49.51],[116.68,49.89],[115.49,48.14],[117.3,47.7],[118.06,48.07],[119.77,47.05],[117.42,46.67],[115.99,45.73],[113.46,44.81],[111.87,45.1],[111.83,43.74],[109.24,42.52],[106.13,42.13],[104.96,41.6],[101.83,42.51],[99.52,42.52],[96.35,42.73],[95.31,44.24],[93.48,44.98],[90.95,45.29],[90.97,46.89],[90.28,47.69],[88.85,48.07],[87.75,49.3],[87.36,49.21],[85.77,48.46],[85.16,47],[83.18,47.33],[82.46,45.54],[79.97,44.92],[80.87,43.18],[80.26,42.35]]]},{"iso":"CN-TW","id":"taiwan","name":"Tayvan","rings":[[[121.78,24.39],[121.5,25.3],[120.11,23.56],[120.75,21.97],[121.78,24.39]]]},{"iso":"IT","id":"italy","name":"İtalya","rings":[[[10.44,46.89],[7.76,45.82],[6.84,45.99],[6.75,45.03],[7.44,43.69],[8.89,44.37],[10.2,43.92],[10.51,42.93],[12.11,41.7],[13.63,41.19],[15.41,40.05],[16.45,39.8],[17.52,40.88],[15.89,41.54],[14.03,42.76],[12.59,44.09],[12.33,45.38],[13.94,45.59],[13.81,46.51],[12.15,47.12],[10.44,46.89]],[[14.76,38.14],[12.57,38.13],[12.43,37.61],[15.1,36.62],[14.76,38.14]],[[8.71,40.9],[8.43,39.17],[9.67,39.18],[9.81,40.5],[8.71,40.9]]]},{"iso":"DK","id":"denmark","name":"Danimarka","rings":[[[9.92,54.98],[10.25,56.89],[8.09,56.54],[8.53,54.96],[9.92,54.98]]]},{"iso":"GB","id":"uk","name":"Birleşik Krallık","rings":[[[-6.2,53.87],[-5.66,54.55],[-7.57,55.13],[-7.57,54.06],[-6.2,53.87]],[[-3.09,53.4],[-4.58,53.5],[-5.27,51.99],[-3.62,50.23],[0.55,50.77],[1.68,52.74],[0.47,52.93],[-0.43,54.46],[-2.09,55.91],[-1.96,57.68],[-3.01,58.64],[-5.01,58.63],[-6.15,56.79],[-5.59,55.31],[-3.63,54.62],[-3.09,53.4]]]},{"iso":"IS","id":"iceland","name":"İzlanda","rings":[[[-14.51,66.46],[-20.58,65.73],[-23.65,66.26],[-23.96,64.89],[-22.76,63.96],[-18.66,63.5],[-14.91,64.36],[-13.61,65.13],[-14.51,66.46]]]},{"iso":"AZ","id":"azerbaijan","name":"Azerbaycan","rings":[[[46.4,41.86],[44.97,41.25],[46.48,39.46],[46.51,38.77],[47.69,39.51],[48.88,38.32],[49.62,40.57],[48.58,41.81],[47.82,41.15],[46.4,41.86]]]},{"iso":"GE","id":"georgia","name":"Gürcistan","rings":[[[39.96,43.43],[41.45,42.65],[41.55,41.54],[43.58,41.09],[44.97,41.25],[46.4,41.86],[45.47,42.5],[42.39,43.22],[39.96,43.43]]]},{"iso":"PH","id":"philippines","name":"Filipinler","rings":[[[122.59,9.98],[123,9.02],[123.98,10.28],[124.08,11.23],[122.95,10.88],[122.59,9.98]],[[126.38,8.41],[126.22,9.29],[123.49,8.69],[122.31,8.03],[123.3,7.42],[124.22,6.16],[125.4,5.58],[125.36,6.79],[126.54,7.19],[126.38,8.41]],[[122.34,18.22],[120.72,18.51],[120.39,17.6],[120.07,14.97],[121.13,13.64],[122.03,13.78],[122.67,13.19],[123.95,13.78],[122.7,14.34],[121.73,14.33],[121.66,15.93],[122.52,17.09],[122.34,18.22]]]},{"iso":"MY","id":"malaysia","name":"Malezya","rings":[[[100.09,6.46],[100.2,5.31],[101.39,2.76],[103.52,1.23],[104.23,1.29],[103.5,2.79],[103.38,4.86],[102.14,6.22],[101.81,5.81],[100.09,6.46]],[[117.88,4.14],[118.62,4.48],[119.18,5.41],[117.69,5.99],[116.73,6.92],[115.45,5.45],[115.35,4.32],[114.2,4.53],[113,3.1],[111.37,2.7],[111.17,1.85],[109.66,2.01],[110.51,0.77],[111.8,0.9],[112.86,1.5],[114.62,1.43],[115.87,4.31],[117.88,4.14]]]},{"iso":"BN","id":"brunei","name":"Brunei","rings":[[[115.45,5.45],[114.2,4.53],[115.35,4.32],[115.45,5.45]]]},{"iso":"SI","id":"slovenia","name":"Slovenya","rings":[[[13.81,46.51],[13.94,45.59],[13.72,45.5],[15.33,45.45],[16.56,46.5],[16.2,46.85],[13.81,46.51]]]},{"iso":"FI","id":"finland","name":"Finlandiya","rings":[[[28.59,69.06],[26.18,69.83],[24.74,68.65],[20.65,69.11],[23.54,67.94],[23.9,66.01],[25.4,65.11],[22.44,63.82],[21.06,62.61],[21.32,60.72],[22.87,59.85],[28.07,60.5],[31.14,62.36],[30.04,63.55],[29.54,64.95],[30.22,65.81],[29.05,66.94],[29.98,67.7],[28.59,69.06]]]},{"iso":"SK","id":"slovakia","name":"Slovakya","rings":[[[22.56,49.09],[21.61,49.47],[19.83,49.22],[18.85,49.5],[16.96,48.6],[16.98,48.12],[17.86,47.76],[20.8,48.62],[22.09,48.42],[22.56,49.09]]]},{"iso":"CZ","id":"czechia","name":"Çek Cumhuriyeti","rings":[[[15.02,51.11],[12.24,50.27],[13.6,48.88],[15.25,49.04],[16.96,48.6],[18.85,49.5],[17.55,50.36],[15.02,51.11]]]},{"iso":"ER","id":"eritrea","name":"Eritre","rings":[[[36.43,14.42],[37.59,14.21],[39.1,14.74],[40.9,14.12],[42.35,12.54],[43.08,12.7],[41.18,14.49],[39.27,15.92],[38.41,18],[36.85,16.96],[36.43,14.42]]]},{"iso":"JP","id":"japan","name":"Japonya","rings":[[[141.88,39.18],[141.37,41.38],[139.88,40.56],[140.05,39.44],[139.43,38.22],[137.39,36.83],[136.72,37.3],[135.68,35.53],[134.61,35.73],[132.62,35.43],[129.41,33.3],[131.33,31.45],[132.16,33.9],[133.34,34.38],[135.08,34.6],[135.79,33.46],[137.22,34.61],[138.98,34.67],[140.25,35.14],[140.77,35.84],[140.96,38.17],[141.88,39.18]],[[144.61,43.96],[143.14,44.51],[141.97,45.55],[141.38,43.39],[140.31,43.33],[139.96,41.57],[141.07,41.58],[141.61,42.68],[143.18,42],[144.61,43.96]],[[132.37,33.46],[134.2,33.2],[133.9,34.36],[132.37,33.46]]]},{"iso":"PY","id":"paraguay","name":"Paraguay","rings":[[[-58.17,-20.18],[-59.12,-19.36],[-61.79,-19.63],[-62.27,-20.51],[-62.69,-22.25],[-60.85,-23.88],[-60.03,-24.03],[-57.78,-25.16],[-57.63,-25.6],[-58.62,-27.12],[-56.49,-27.55],[-54.79,-26.62],[-54.63,-25.74],[-54.29,-24.57],[-55.4,-23.96],[-55.61,-22.66],[-56.47,-22.09],[-57.94,-22.09],[-58.17,-20.18]]]},{"iso":"YE","id":"yemen","name":"Yemen","rings":[[[52,19],[49.12,18.62],[48.18,18.17],[47,16.95],[45.22,17.43],[43.38,17.58],[42.78,16.35],[42.7,15.72],[43.48,12.64],[44.99,12.7],[45.63,13.29],[48.68,14],[49.57,14.71],[52.17,15.6],[53.11,16.65],[52,19]]]},{"iso":"SA","id":"saudi-arabia","name":"Suudi Arabistan","rings":[[[34.96,29.36],[35.13,28.06],[36.93,25.6],[37.48,24.29],[38.49,23.69],[39.07,22.58],[39.14,21.29],[39.8,20.34],[40.94,19.49],[41.75,17.83],[42.78,16.35],[43.38,17.58],[45.22,17.43],[47,16.95],[48.18,18.17],[49.12,18.62],[52,19],[55,20],[55.67,22],[55.21,22.71],[55.01,22.5],[52,23],[51.58,24.25],[51.39,24.63],[50.81,24.75],[50.11,25.94],[50.15,26.69],[48.81,27.69],[48.42,28.55],[46.57,29.1],[44.71,29.18],[41.89,31.19],[39.2,32.16],[37,31.51],[38,30.51],[36.07,29.2],[34.96,29.36]]]},{"iso":"AQ","id":"antarctica","name":"Antarktika","rings":[[[-48.66,-78.05],[-51.85,-79.95],[-50.48,-81.03],[-43.33,-80.03],[-43.92,-78.48],[-48.66,-78.05]],[[-73.92,-71.27],[-74.19,-72.37],[-68.78,-72.17],[-68.45,-70.96],[-69.72,-69.25],[-71.74,-69.51],[-72.07,-71.19],[-73.92,-71.27]],[[180,-84.71],[162.49,-82.06],[159.79,-80.95],[161.77,-79.16],[167,-78.75],[163.49,-77.07],[164.23,-75.46],[166.09,-74.38],[169.29,-73.66],[171.21,-71.7],[168.43,-70.97],[162.69,-70.74],[159.18,-69.6],[154.28,-68.56],[152.5,-68.87],[146.65,-67.9],[145.49,-66.92],[143.06,-66.8],[137.46,-66.95],[135.87,-66.03],[130.78,-66.43],[128.8,-66.76],[122.32,-66.56],[120.87,-67.19],[115.6,-66.7],[113.6,-65.88],[110.24,-66.7],[106.18,-66.93],[102.83,-65.56],[99.72,-67.25],[95.02,-67.17],[90.63,-67.23],[87.48,-66.88],[82.78,-67.21],[79.11,-68.33],[77.64,-69.46],[73.86,-69.87],[71.02,-72.09],[67.95,-71.85],[68.93,-71.07],[67.81,-70.31],[69.56,-69.68],[68.89,-67.93],[64.05,-67.41],[62.39,-68.01],[58.74,-67.29],[56.36,-65.97],[52.61,-66.05],[46.5,-67.6],[40.02,-69.11],[38.65,-69.78],[33.87,-68.5],[32.75,-69.38],[27.09,-70.46],[23.67,-70.52],[19.26,-69.89],[13.42,-69.97],[10.82,-70.83],[9.53,-70.01],[7.14,-70.25],[0.87,-71.3],[-1.8,-71.17],[-7.42,-71.7],[-10.3,-71.27],[-13.31,-72.72],[-15.45,-73.15],[-15.7,-74.5],[-21.22,-75.91],[-28.88,-76.67],[-35.78,-78.34],[-35.64,-79.46],[-29.69,-79.26],[-28.55,-80.34],[-40.77,-81.36],[-42.81,-82.08],[-49.76,-81.73],[-57.01,-82.87],[-63.26,-81.75],[-75.36,-80.26],[-77.93,-78.38],[-73.66,-77.91],[-77.24,-76.71],[-70.6,-76.63],[-61.96,-74.44],[-60.69,-73.17],[-61.51,-71.09],[-63.2,-69.23],[-65.51,-67.58],[-63.75,-66.5],[-62.12,-66.19],[-63,-64.64],[-66.06,-66.21],[-67.74,-67.33],[-67.43,-68.15],[-68.49,-70.11],[-67.25,-71.64],[-68.94,-73.01],[-76.22,-73.97],[-77.93,-73.42],[-81.47,-73.85],[-88.42,-73.01],[-96.34,-73.62],[-100.31,-72.75],[-103.68,-72.62],[-103.11,-73.73],[-101.25,-74.19],[-100.65,-75.3],[-104.88,-74.95],[-107.56,-75.18],[-113.94,-73.71],[-116.22,-74.24],[-125.4,-74.52],[-128.24,-74.32],[-135.21,-74.3],[-144.32,-75.54],[-146.1,-76.48],[-151.33,-77.4],[-156.97,-77.3],[-158.05,-78.03],[-155.33,-79.06],[-149.53,-79.36],[-147.22,-80.67],[-152.86,-82.04],[-153.59,-83.69],[-142.89,-84.57],[-148.53,-85.61],[-167.02,-84.57],[-180,-84.71],[-180,-90],[180,-90],[180,-84.71]]]},{"iso":"-99","id":null,"name":"Kuzey Kıbrıs Türk Cumhuriyeti","rings":[[[32.73,35.14],[33.97,35.06],[33.67,35.37],[32.73,35.14]]]},{"iso":"CY","id":"cyprus","name":"Kıbrıs Cumhuriyeti","rings":[[[32.73,35.14],[32.98,34.57],[33.97,35.06],[32.73,35.14]]]},{"iso":"MA","id":"morocco","name":"Fas","rings":[[[-2.17,35.17],[-4.59,35.33],[-5.93,35.76],[-6.91,34.11],[-8.66,33.24],[-9.81,31.18],[-9.56,29.93],[-11.69,28.15],[-12.62,28.04],[-13.77,26.62],[-14.44,26.25],[-15.09,24.52],[-15.98,23.72],[-17.02,21.42],[-14.75,21.5],[-13.89,23.69],[-12.5,24.77],[-12.03,26.03],[-11.39,26.88],[-9.74,26.86],[-8.67,27.66],[-8.67,28.84],[-7.06,29.58],[-5.24,30],[-3.69,30.9],[-3.65,31.64],[-1.31,32.26],[-2.17,35.17]]]},{"iso":"EG","id":"egypt","name":"Mısır","rings":[[[36.87,22],[35.53,23.1],[35.69,23.93],[34.1,26.14],[33.35,27.7],[34.43,28.34],[34.82,29.76],[34.27,31.22],[32.99,31.02],[30.98,31.56],[28.91,30.87],[26.5,31.59],[25.16,31.57],[24.7,30.04],[25,29.24],[25,25.68],[25,22],[29.02,22],[32.9,22],[36.87,22]]]},{"iso":"LY","id":"libya","name":"Libya","rings":[[[25,22],[25,25.68],[25,29.24],[24.7,30.04],[25.16,31.57],[23.24,32.19],[22.9,32.64],[20.85,32.71],[19.82,31.75],[20.05,30.99],[19.09,30.27],[15.71,31.38],[15.25,32.27],[11.49,33.14],[11.43,32.37],[9.95,31.38],[9.48,30.31],[9.86,28.96],[9.72,26.51],[9.32,26.09],[10.3,24.38],[10.77,24.56],[12,23.47],[14.85,22.86],[15.86,23.41],[19.85,21.5],[23.84,19.58],[25,20],[25,22]]]},{"iso":"ET","id":"ethiopia","name":"Etiyopya","rings":[[[47.79,8],[46.95,8],[43.68,9.18],[42.56,10.57],[42.78,10.93],[41.66,11.63],[42.35,12.54],[40.9,14.12],[39.1,14.74],[37.59,14.21],[36.43,14.42],[35.86,12.58],[34.26,10.63],[33.97,8.68],[33.29,8.35],[35.3,5.51],[36.16,4.45],[36.86,4.45],[38.12,3.6],[39.56,3.42],[40.77,4.26],[41.86,3.92],[43.66,4.96],[44.96,5],[47.79,8]]]},{"iso":"DJ","id":"djibouti","name":"Cibuti","rings":[[[42.35,12.54],[41.66,11.63],[42.78,10.93],[43.15,11.46],[43.08,12.7],[42.35,12.54]]]},{"iso":"-99","id":null,"name":"Somaliland","rings":[[[48.95,11.41],[46.65,10.82],[44.12,10.45],[43.15,11.46],[42.78,10.93],[42.56,10.57],[43.68,9.18],[46.95,8],[47.79,8],[48.94,9.45],[48.95,11.41]]]},{"iso":"UG","id":"uganda","name":"Uganda","rings":[[[33.9,-0.95],[33.89,0.11],[35.04,1.91],[34.01,4.25],[33.39,3.79],[30.83,3.51],[30.77,2.34],[29.88,0.6],[29.58,-1.34],[30.42,-1.13],[33.9,-0.95]]]},{"iso":"RW","id":"rwanda","name":"Ruanda","rings":[[[30.42,-1.13],[29.58,-1.34],[29.02,-2.84],[30.47,-2.41],[30.42,-1.13]]]},{"iso":"BA","id":"bosnia-and-herz","name":"Bosna-Hersek","rings":[[[18.56,42.65],[19.22,43.52],[19.01,44.86],[15.96,45.23],[15.75,44.82],[17.67,43.03],[18.56,42.65]]]},{"iso":"MK","id":"north-macedonia","name":"Kuzey Makedonya","rings":[[[22.38,42.32],[21.58,42.25],[20.59,41.86],[21.02,40.84],[22.95,41.34],[22.38,42.32]]]},{"iso":"RS","id":"serbia","name":"Sırbistan","rings":[[[18.83,45.91],[19.01,44.86],[19.22,43.52],[20.26,42.81],[21.58,42.25],[22.38,42.32],[22.99,43.21],[22.66,44.23],[21.56,44.77],[20.22,46.13],[18.83,45.91]]]},{"iso":"ME","id":"montenegro","name":"Karadağ","rings":[[[20.07,42.59],[20.26,42.81],[19.22,43.52],[18.56,42.65],[18.45,42.48],[19.37,41.88],[20.07,42.59]]]},{"iso":"XK","id":"kosovo","name":"Kosova","rings":[[[20.59,41.86],[21.58,42.25],[20.26,42.81],[20.07,42.59],[20.59,41.86]]]},{"iso":"TT","id":"trinidad-and-tobago","name":"Trinidad ve Tobago","rings":[[[-61.68,10.76],[-61.77,10],[-60.93,10.11],[-60.89,10.86],[-61.68,10.76]]]},{"iso":"SS","id":"s-sudan","name":"Güney Sudan","rings":[[[30.83,3.51],[33.39,3.79],[34.01,4.25],[35.3,5.51],[33.29,8.35],[33.97,8.68],[33.72,10.33],[33.21,10.72],[33.21,12.18],[31.35,9.81],[30,10.29],[28.97,9.4],[26.48,9.55],[25.79,10.41],[25.07,10.27],[24.57,8.23],[27.37,5.23],[28.43,4.29],[29.72,4.6],[30.83,3.51]]]},{"iso":"MT","id":"malta","name":"Malta","rings":[[[14.374,36.001],[14.351,35.999],[14.312,35.987],[14.311,35.967],[14.331,35.964],[14.322,35.941],[14.326,35.93],[14.32,35.906],[14.328,35.886],[14.35,35.861],[14.393,35.837],[14.432,35.817],[14.487,35.807],[14.54,35.803],[14.566,35.816],[14.586,35.866],[14.574,35.879],[14.546,35.894],[14.518,35.91],[14.496,35.934],[14.455,35.952],[14.434,35.963],[14.409,35.96],[14.415,35.966],[14.402,35.976],[14.367,35.974],[14.38,35.99],[14.374,36.001]],[[14.224,36.086],[14.182,36.079],[14.176,36.073],[14.181,36.06],[14.179,36.036],[14.19,36.03],[14.211,36.024],[14.247,36.01],[14.307,36.021],[14.341,36.031],[14.34,36.04],[14.33,36.055],[14.312,36.064],[14.289,36.07],[14.264,36.085],[14.224,36.086]],[[14.341,36.021],[14.329,36.021],[14.322,36.019],[14.32,36.016],[14.316,36.015],[14.317,36.011],[14.32,36.011],[14.325,36.008],[14.322,36.004],[14.328,36.003],[14.35,36.006],[14.353,36.009],[14.351,36.014],[14.344,36.018],[14.341,36.021]]]},{"iso":"SG","id":"singapore","name":"Singapur","rings":[[[103.806,1.478],[103.785,1.462],[103.75,1.449],[103.714,1.458],[103.679,1.433],[103.668,1.416],[103.636,1.359],[103.601,1.265],[103.597,1.222],[103.621,1.209],[103.651,1.214],[103.629,1.236],[103.639,1.256],[103.652,1.258],[103.666,1.221],[103.69,1.228],[103.711,1.247],[103.732,1.259],[103.761,1.269],[103.795,1.255],[103.829,1.233],[103.844,1.237],[103.865,1.262],[103.899,1.286],[103.995,1.305],[104.013,1.303],[104.044,1.306],[104.037,1.336],[104.066,1.335],[104.087,1.331],[104.083,1.363],[104.094,1.401],[104.076,1.432],[104.051,1.442],[104.021,1.439],[103.993,1.424],[103.937,1.429],[103.926,1.429],[103.879,1.435],[103.828,1.475],[103.806,1.478]],[[103.765,1.242],[103.759,1.242],[103.756,1.239],[103.752,1.241],[103.749,1.242],[103.74,1.24],[103.734,1.238],[103.737,1.235],[103.739,1.231],[103.743,1.229],[103.745,1.225],[103.747,1.222],[103.751,1.222],[103.757,1.224],[103.766,1.223],[103.775,1.222],[103.781,1.222],[103.78,1.226],[103.777,1.232],[103.772,1.237],[103.765,1.242]]]},{"iso":"BH","id":"bahrain","name":"Bahreyn","rings":[[[50.63,26.334],[50.614,26.306],[50.606,26.284],[50.571,26.295],[50.588,26.268],[50.572,26.251],[50.526,26.245],[50.501,26.264],[50.466,26.259],[50.436,26.224],[50.446,26.184],[50.446,26.137],[50.478,26.059],[50.471,26.008],[50.452,25.98],[50.495,25.917],[50.563,25.801],[50.582,25.817],[50.62,25.82],[50.613,25.856],[50.612,25.919],[50.628,26.019],[50.624,26.064],[50.629,26.106],[50.637,26.134],[50.661,26.129],[50.678,26.157],[50.633,26.155],[50.632,26.194],[50.659,26.187],[50.652,26.179],[50.681,26.188],[50.69,26.217],[50.716,26.178],[50.709,26.221],[50.668,26.234],[50.674,26.249],[50.685,26.275],[50.673,26.298],[50.658,26.312],[50.63,26.334]],[[50.8,25.734],[50.796,25.728],[50.793,25.73],[50.786,25.723],[50.783,25.718],[50.775,25.722],[50.767,25.714],[50.761,25.707],[50.744,25.689],[50.741,25.69],[50.74,25.676],[50.737,25.656],[50.739,25.65],[50.749,25.641],[50.749,25.62],[50.74,25.599],[50.747,25.584],[50.776,25.573],[50.76,25.583],[50.759,25.592],[50.763,25.604],[50.774,25.615],[50.768,25.619],[50.758,25.616],[50.766,25.624],[50.764,25.632],[50.772,25.637],[50.775,25.641],[50.77,25.65],[50.764,25.655],[50.759,25.664],[50.766,25.673],[50.779,25.68],[50.786,25.678],[50.797,25.685],[50.788,25.691],[50.782,25.697],[50.788,25.703],[50.797,25.713],[50.799,25.726],[50.8,25.734]],[[50.374,26.187],[50.379,26.185],[50.393,26.182],[50.402,26.177],[50.404,26.173],[50.398,26.176],[50.395,26.172],[50.396,26.169],[50.394,26.169],[50.393,26.168],[50.39,26.165],[50.386,26.165],[50.38,26.159],[50.378,26.15],[50.38,26.143],[50.383,26.138],[50.384,26.133],[50.386,26.127],[50.387,26.122],[50.396,26.122],[50.399,26.121],[50.407,26.124],[50.41,26.122],[50.416,26.123],[50.422,26.119],[50.425,26.122],[50.423,26.125],[50.424,26.128],[50.424,26.132],[50.424,26.135],[50.419,26.136],[50.418,26.142],[50.418,26.148],[50.418,26.156],[50.418,26.158],[50.422,26.164],[50.42,26.169],[50.418,26.173],[50.407,26.174],[50.398,26.182],[50.374,26.187]]]}];

/* =========================================================
   GLOBE RENDER
   ========================================================= */
/* =========================================================
   TÜM ÜLKELER İÇİN OTOMATİK ÖRNEK VERİ ÜRETİCİ
   (Gerçek veri kaynağı entegrasyonu sonraki aşamada eklenecek —
   şu an amaç: prototipte HER ülkenin tıklanabilir olması)
   ========================================================= */
const CURRENCY_MAP = {US:'USD',CA:'CAD',MX:'MXN',BR:'BRL',AR:'ARS',CL:'CLP',PE:'PEN',CO:'COP',VE:'VES',EC:'USD',BO:'BOB',PY:'PYG',UY:'UYU',GB:'GBP',IE:'EUR',FR:'EUR',DE:'EUR',ES:'EUR',PT:'EUR',IT:'EUR',NL:'EUR',BE:'EUR',LU:'EUR',CH:'CHF',AT:'EUR',SE:'SEK',NO:'NOK',DK:'DKK',FI:'EUR',IS:'ISK',PL:'PLN',CZ:'CZK',SK:'EUR',HU:'HUF',RO:'RON',BG:'BGN',HR:'EUR',SI:'EUR',GR:'EUR',EE:'EUR',LV:'EUR',LT:'EUR',UA:'UAH',BY:'BYN',RU:'RUB',TR:'TRY',CN:'CNY',JP:'JPY',KR:'KRW',KP:'KPW',IN:'INR',PK:'PKR',BD:'BDT',LK:'LKR',NP:'NPR',BT:'BTN',MM:'MMK',TH:'THB',VN:'VND',KH:'KHR',LA:'LAK',MY:'MYR',SG:'SGD',ID:'IDR',PH:'PHP',BN:'BND',AU:'AUD',NZ:'NZD',PG:'PGK',FJ:'FJD',NC:'XPF',SB:'SBD',VU:'VUV',SA:'SAR',AE:'AED',QA:'QAR',KW:'KWD',BH:'BHD',OM:'OMR',YE:'YER',IQ:'IQD',IR:'IRR',IL:'ILS',JO:'JOD',LB:'LBP',SY:'SYP',PS:'ILS',EG:'EGP',LY:'LYD',TN:'TND',DZ:'DZD',MA:'MAD',SD:'SDG',SS:'SSP',ET:'ETB',KE:'KES',UG:'UGX',TZ:'TZS',RW:'RWF',BI:'BIF',SO:'SOS',DJ:'DJF',ER:'ERN',NG:'NGN',GH:'GHS',CI:'XOF',SN:'XOF',ML:'XOF',BF:'XOF',NE:'XOF',TG:'XOF',BJ:'XOF',GW:'XOF',CM:'XAF',TD:'XAF',CF:'XAF',CG:'XAF',GA:'XAF',GQ:'XAF',ZA:'ZAR',ZW:'ZWL',ZM:'ZMW',MW:'MWK',MZ:'MZN',NA:'NAD',BW:'BWP',SZ:'SZL',LS:'LSL',AO:'AOA',CD:'CDF',MG:'MGA',MR:'MRU',GM:'GMD',GN:'GNF',SL:'SLE',LR:'LRD',KZ:'KZT',UZ:'UZS',TM:'TMT',TJ:'TJS',KG:'KGS',AF:'AFN',MN:'MNT',AM:'AMD',AZ:'AZN',GE:'GEL',CU:'CUP',JM:'JMD',HT:'HTG',DO:'DOP',TT:'TTD',BS:'BSD',GT:'GTQ',BZ:'BZD',HN:'HNL',SV:'USD',NI:'NIO',CR:'CRC',PA:'PAB',GY:'GYD',SR:'SRD',CY:'EUR',MT:'EUR'};
// Gerçek döviz kurları (X-Rates, güncel piyasa kurları — 1 USD = X yerel para birimi).
const REAL_EXCHANGE_RATE = {"EUR":0.8723,"GBP":0.7389,"INR":96.264,"AUD":1.4271,"CAD":1.4043,"SGD":1.289,"CHF":0.8053,"MYR":4.0783,"JPY":162.217,"CNY":6.769,"ARS":1474.87,"BHD":0.376,"BWP":13.5105,"BRL":5.0799,"BND":1.289,"CLP":924.957,"COP":3235.03,"CZK":21.1142,"DKK":6.5211,"HKD":7.8392,"HUF":313.446,"ISK":124.917,"IDR":18050.01,"IRR":1374156.07,"ILS":2.9889,"KZT":470.154,"KRW":1487.21,"KWD":0.3094,"LYD":6.3993,"MUR":47.1128,"MXN":17.3857,"NPR":154.095,"NZD":1.7096,"NOK":9.6556,"OMR":0.3847,"PKR":278.051,"PHP":61.6756,"PLN":3.7693,"QAR":3.64,"RON":4.5713,"RUB":77.5237,"SAR":3.75,"ZAR":16.3209,"LKR":336.192,"SEK":9.5876,"TWD":32.1454,"THB":33.5869,"TTD":6.789,"TRY":47.0309,"AED":3.6725,"USD":1.0,"PEN":3.75,"VES":185.0,"BOB":6.9,"PYG":7900,"UYU":44.5,"EGP":50.2,"MAD":9.7,"DZD":134.5,"TND":3.11,"LBP":89500,"JOD":0.709,"YER":533.0,"IQD":1310.0,"SYP":13000.0,"NGN":1550.0,"GHS":15.8,"XOF":600.5,"XAF":600.5,"KES":129.2,"UGX":3700.0,"TZS":2600.0,"ETB":125.5,"ZMW":27.5,"MWK":1740.0,"MZN":64.0,"NAD":18.3,"SZL":18.3,"LSL":18.3,"AOA":920.0,"CDF":2900.0,"MGA":4500.0,"RWF":1440.0,"BIF":2950.0,"SOS":571.0,"DJF":178.0,"ERN":15.0,"GMD":72.0,"GNF":8600.0,"SLE":22.7,"LRD":199.0,"MRU":39.7,"CVE":101.0,"BSD":1.0,"BZD":2.02,"GTQ":7.7,"HNL":24.7,"NIO":36.8,"CRC":505.0,"PAB":1.0,"DOP":60.2,"HTG":132.0,"JMD":158.0,"GYD":209.0,"SRD":38.5,"UAH":41.5,"BYN":3.2,"GEL":2.71,"AMD":387.0,"AZN":1.7,"UZS":12700.0,"TMT":3.5,"TJS":10.6,"KGS":87.0,"MNT":3450.0,"AFN":70.0,"MMK":2100.0,"KHR":4020.0,"LAK":21700.0,"VND":25400.0,"BDT":122.0,"BTN":96.26,"PGK":3.9,"FJD":2.28,"XPF":105.0,"SBD":8.5,"VUV":121.0,"CUP":370.0,"ZWL":322.0,"KPW":900.0,"SDG":600.0,"SSP":4500.0,"BGN":1.706};

// Gerçek nüfus verisi (2026) — Worldometers.info (UN World Population Prospects 2024 Revision) kaynaklı.
// Değer: milyon kişi. Bulunmayan ülkeler için (örn. Antarktika) örnek/tahmini veri kullanılır.
const REAL_POPULATION = {"afghanistan":45.05,"albania":2.75,"algeria":48.03,"angola":40.22,"argentina":46.0,"armenia":2.93,"australia":27.23,"austria":9.11,"azerbaijan":10.45,"bahamas":0.4,"bangladesh":177.82,"belarus":8.94,"belgium":11.77,"belize":0.43,"benin":15.17,"bhutan":0.8,"bolivia":12.75,"bosnia-and-herz":3.11,"botswana":2.6,"brazil":213.56,"brunei":0.47,"bulgaria":6.67,"burkina-faso":24.6,"burundi":14.73,"cambodia":18.05,"cameroon":30.64,"canada":40.47,"central-african-rep":5.7,"chad":21.56,"chile":19.95,"china":1412.91,"colombia":53.94,"congo":6.64,"costa-rica":5.17,"cote-d-ivoire":33.49,"croatia":3.82,"cuba":10.89,"cyprus":1.38,"czechia":10.53,"dem-rep-congo":116.45,"denmark":6.02,"djibouti":1.2,"dominican-rep":11.61,"ecuador":18.44,"egypt":120.1,"el-salvador":6.39,"eq-guinea":1.98,"eritrea":3.68,"estonia":1.33,"eswatini":1.27,"ethiopia":138.9,"falkland-is":0.0,"fiji":0.94,"finland":5.62,"france":66.75,"gabon":2.65,"gambia":2.88,"georgia":3.8,"germany":83.64,"ghana":35.7,"greece":9.9,"greenland":0.06,"guatemala":18.97,"guinea":15.44,"guinea-bissau":2.3,"guyana":0.84,"haiti":12.04,"honduras":11.18,"hungary":9.59,"iceland":0.4,"india":1476.63,"indonesia":287.89,"iran":93.17,"iraq":48.01,"ireland":5.36,"israel":9.65,"italy":58.93,"jamaica":2.83,"japan":122.43,"jordan":11.59,"kazakhstan":21.08,"kenya":58.64,"kosovo":1.59,"kuwait":5.1,"kyrgyzstan":7.4,"laos":7.97,"latvia":1.84,"lebanon":5.9,"lesotho":2.39,"liberia":5.85,"libya":7.54,"lithuania":2.8,"luxembourg":0.69,"madagascar":33.52,"malawi":22.79,"malaysia":36.39,"mali":25.93,"mauritania":5.46,"mexico":133.0,"moldova":2.96,"mongolia":3.56,"montenegro":0.63,"morocco":38.76,"mozambique":36.64,"myanmar":55.18,"namibia":3.15,"nepal":29.63,"netherlands":18.45,"new-caledonia":0.3,"new-zealand":5.29,"nicaragua":7.1,"niger":28.81,"nigeria":242.43,"north-korea":26.63,"north-macedonia":1.8,"norway":5.65,"oman":5.67,"pakistan":259.3,"palestine":5.69,"panama":4.63,"papua-new-guinea":10.95,"paraguay":7.1,"peru":34.92,"philippines":117.72,"poland":37.84,"portugal":10.4,"puerto-rico":3.22,"qatar":3.17,"romania":18.8,"russia":143.39,"rwanda":14.89,"s-sudan":12.44,"saudi-arabia":35.17,"senegal":19.37,"serbia":6.64,"sierra-leone":9.0,"slovakia":5.45,"slovenia":2.11,"solomon-is":0.86,"somalia":20.31,"south-korea":51.6,"southafrica":65.45,"spain":47.85,"sri-lanka":23.35,"sudan":53.28,"suriname":0.65,"sweden":10.7,"switzerland":9.01,"syria":26.47,"taiwan":23.01,"tajikistan":10.98,"tanzania":72.56,"thailand":71.56,"timor-leste":1.44,"togo":9.93,"trinidad-and-tobago":1.51,"tunisia":12.42,"turkmenistan":7.74,"uae":11.57,"uganda":52.76,"uk":69.93,"ukraine":39.54,"uruguay":3.38,"usa":349.04,"uzbekistan":37.72,"vanuatu":0.34,"venezuela":28.63,"vietnam":102.18,"w-sahara":0.61,"yemen":42.96,"zambia":22.52,"zimbabwe":17.27,"malta":0.549,"singapore":5.92,"bahrain":1.59};

// Gerçek GSYİH verisi (2026, IMF World Economic Outlook, Nisan 2026) — Worldometers.info kaynaklı.
// gdp: milyar $ | gdppc: kişi başına düşen GSYİH ($). Bulunmayan ülkeler için örnek veri kullanılır.
const REAL_GDP = {"afghanistan":{"gdp":19.7,"gdppc":448},"albania":{"gdp":33.3,"gdppc":12493},"algeria":{"gdp":317.2,"gdppc":6628},"angola":{"gdp":152.4,"gdppc":3754},"argentina":{"gdp":688.4,"gdppc":14357},"armenia":{"gdp":31.9,"gdppc":10410},"australia":{"gdp":2124.0,"gdppc":75648},"austria":{"gdp":623.7,"gdppc":67761},"azerbaijan":{"gdp":78.4,"gdppc":7467},"bahamas":{"gdp":17.0,"gdppc":40892},"bangladesh":{"gdp":510.7,"gdppc":2911},"belarus":{"gdp":102.0,"gdppc":11286},"belgium":{"gdp":776.7,"gdppc":65112},"belize":{"gdp":3.5,"gdppc":8134},"benin":{"gdp":27.8,"gdppc":1809},"bhutan":{"gdp":3.9,"gdppc":4867},"bolivia":{"gdp":80.7,"gdppc":6333},"bosnia-and-herz":{"gdp":36.8,"gdppc":10701},"botswana":{"gdp":21.9,"gdppc":8490},"brazil":{"gdp":2635.9,"gdppc":12313},"brunei":{"gdp":16.9,"gdppc":36288},"bulgaria":{"gdp":148.1,"gdppc":23848},"burkina-faso":{"gdp":32.5,"gdppc":1319},"burundi":{"gdp":8.1,"gdppc":546},"cambodia":{"gdp":52.4,"gdppc":2902},"cameroon":{"gdp":65.1,"gdppc":2125},"canada":{"gdp":2507.3,"gdppc":60305},"central-african-rep":{"gdp":3.5,"gdppc":613},"chad":{"gdp":25.6,"gdppc":1315},"chile":{"gdp":407.9,"gdppc":20240},"china":{"gdp":20851.6,"gdppc":14874},"colombia":{"gdp":539.5,"gdppc":10104},"congo":{"gdp":17.0,"gdppc":2554},"costa-rica":{"gdp":109.9,"gdppc":20299},"cote-d-ivoire":{"gdp":112.1,"gdppc":3313},"croatia":{"gdp":116.6,"gdppc":30030},"cuba":{"gdp":202.0,"gdppc":18329},"cyprus":{"gdp":45.2,"gdppc":45409},"czechia":{"gdp":432.6,"gdppc":39795},"dem-rep-congo":{"gdp":123.4,"gdppc":1122},"denmark":{"gdp":503.8,"gdppc":83445},"djibouti":{"gdp":4.7,"gdppc":4421},"dominican-rep":{"gdp":136.1,"gdppc":12406},"ecuador":{"gdp":138.2,"gdppc":7575},"egypt":{"gdp":429.6,"gdppc":3904},"el-salvador":{"gdp":39.8,"gdppc":6196},"eq-guinea":{"gdp":13.7,"gdppc":8152},"eritrea":{"gdp":2.3,"gdppc":656},"estonia":{"gdp":51.6,"gdppc":37718},"eswatini":{"gdp":5.8,"gdppc":4927},"ethiopia":{"gdp":121.5,"gdppc":1081},"fiji":{"gdp":6.4,"gdppc":6802},"finland":{"gdp":337.7,"gdppc":60130},"france":{"gdp":3596.1,"gdppc":52083},"gabon":{"gdp":23.4,"gdppc":9918},"gambia":{"gdp":2.8,"gdppc":953},"georgia":{"gdp":42.7,"gdppc":11574},"germany":{"gdp":5452.9,"gdppc":65303},"ghana":{"gdp":118.3,"gdppc":3314},"greece":{"gdp":307.6,"gdppc":29696},"greenland":{"gdp":3.3,"gdppc":58499},"guatemala":{"gdp":128.9,"gdppc":6810},"guinea":{"gdp":29.9,"gdppc":1848},"guinea-bissau":{"gdp":3.0,"gdppc":1449},"guyana":{"gdp":34.0,"gdppc":33167},"haiti":{"gdp":39.2,"gdppc":3079},"honduras":{"gdp":41.5,"gdppc":3711},"hungary":{"gdp":271.1,"gdppc":28430},"iceland":{"gdp":43.8,"gdppc":110048},"india":{"gdp":4153.2,"gdppc":2813},"indonesia":{"gdp":1539.9,"gdppc":5362},"iran":{"gdp":300.3,"gdppc":3415},"iraq":{"gdp":264.8,"gdppc":5677},"ireland":{"gdp":779.4,"gdppc":140186},"israel":{"gdp":719.8,"gdppc":69804},"italy":{"gdp":2738.2,"gdppc":46505},"jamaica":{"gdp":23.0,"gdppc":8356},"japan":{"gdp":4379.3,"gdppc":35703},"jordan":{"gdp":64.9,"gdppc":5601},"kazakhstan":{"gdp":360.5,"gdppc":17503},"kenya":{"gdp":147.3,"gdppc":2714},"kosovo":{"gdp":11.4,"gdppc":6100},"kuwait":{"gdp":172.9,"gdppc":33164},"kyrgyzstan":{"gdp":23.6,"gdppc":3202},"laos":{"gdp":19.0,"gdppc":2403},"latvia":{"gdp":53.7,"gdppc":28913},"lebanon":{"gdp":34.5,"gdppc":6443},"lesotho":{"gdp":3.0,"gdppc":1241},"liberia":{"gdp":5.6,"gdppc":964},"libya":{"gdp":52.5,"gdppc":6962},"lithuania":{"gdp":105.9,"gdppc":36545},"luxembourg":{"gdp":110.4,"gdppc":158733},"madagascar":{"gdp":21.2,"gdppc":656},"malawi":{"gdp":18.2,"gdppc":733},"malaysia":{"gdp":516.4,"gdppc":15085},"mali":{"gdp":33.8,"gdppc":1301},"mauritania":{"gdp":14.4,"gdppc":3033},"mexico":{"gdp":2120.9,"gdppc":15779},"moldova":{"gdp":21.9,"gdppc":9354},"mongolia":{"gdp":28.4,"gdppc":7853},"montenegro":{"gdp":10.2,"gdppc":16377},"morocco":{"gdp":194.3,"gdppc":5107},"mozambique":{"gdp":23.3,"gdppc":632},"myanmar":{"gdp":83.8,"gdppc":1519},"namibia":{"gdp":17.3,"gdppc":5573},"nepal":{"gdp":45.8,"gdppc":1548},"netherlands":{"gdp":1449.7,"gdppc":79918},"new-caledonia":{"gdp":10.1,"gdppc":34981},"new-zealand":{"gdp":278.6,"gdppc":52023},"nicaragua":{"gdp":24.2,"gdppc":3559},"niger":{"gdp":24.8,"gdppc":822},"nigeria":{"gdp":377.4,"gdppc":1556},"north-korea":{"gdp":16.4,"gdppc":640},"north-macedonia":{"gdp":21.6,"gdppc":11967},"norway":{"gdp":599.4,"gdppc":105877},"oman":{"gdp":117.2,"gdppc":21645},"pakistan":{"gdp":407.8,"gdppc":1696},"palestine":{"gdp":13.7,"gdppc":2443},"panama":{"gdp":95.0,"gdppc":20564},"papua-new-guinea":{"gdp":34.4,"gdppc":2632},"paraguay":{"gdp":60.5,"gdppc":9372},"peru":{"gdp":380.9,"gdppc":10960},"philippines":{"gdp":512.2,"gdppc":4443},"poland":{"gdp":1134.2,"gdppc":31336},"portugal":{"gdp":380.6,"gdppc":35434},"puerto-rico":{"gdp":129.0,"gdppc":40650},"qatar":{"gdp":217.4,"gdppc":68138},"romania":{"gdp":480.8,"gdppc":25693},"russia":{"gdp":2656.5,"gdppc":18525},"rwanda":{"gdp":17.3,"gdppc":1198},"s-sudan":{"gdp":6.1,"gdppc":488},"saudi-arabia":{"gdp":1388.7,"gdppc":37811},"senegal":{"gdp":40.5,"gdppc":2054},"serbia":{"gdp":112.0,"gdppc":17252},"sierra-leone":{"gdp":8.3,"gdppc":919},"slovakia":{"gdp":168.9,"gdppc":31242},"slovenia":{"gdp":86.7,"gdppc":40630},"solomon-is":{"gdp":1.8,"gdppc":2258},"somalia":{"gdp":14.2,"gdppc":813},"south-korea":{"gdp":1931.0,"gdppc":37412},"southafrica":{"gdp":480.0,"gdppc":7503},"spain":{"gdp":2091.2,"gdppc":41563},"sri-lanka":{"gdp":99.0,"gdppc":4516},"sudan":{"gdp":44.7,"gdppc":864},"suriname":{"gdp":5.9,"gdppc":8856},"sweden":{"gdp":760.5,"gdppc":70676},"switzerland":{"gdp":1146.9,"gdppc":126177},"syria":{"gdp":20.0,"gdppc":847},"taiwan":{"gdp":976.7,"gdppc":42103},"tajikistan":{"gdp":20.4,"gdppc":1939},"tanzania":{"gdp":94.9,"gdppc":1362},"thailand":{"gdp":580.0,"gdppc":8105},"timor-leste":{"gdp":2.2,"gdppc":1520},"togo":{"gdp":13.4,"gdppc":1341},"trinidad-and-tobago":{"gdp":26.8,"gdppc":18616},"tunisia":{"gdp":60.7,"gdppc":4893},"turkey":{"gdp":1640.2,"gdppc":19018},"turkmenistan":{"gdp":83.1,"gdppc":12300},"uae":{"gdp":621.5,"gdppc":54214},"uganda":{"gdp":73.4,"gdppc":1476},"uk":{"gdp":4264.8,"gdppc":61056},"ukraine":{"gdp":225.3,"gdppc":6980},"uruguay":{"gdp":96.1,"gdppc":27608},"usa":{"gdp":32383.9,"gdppc":94430},"uzbekistan":{"gdp":181.5,"gdppc":4661},"vanuatu":{"gdp":1.4,"gdppc":4082},"venezuela":{"gdp":111.3,"gdppc":4140},"vietnam":{"gdp":527.3,"gdppc":5115},"yemen":{"gdp":7.4,"gdppc":384},"zambia":{"gdp":41.2,"gdppc":1831},"zimbabwe":{"gdp":56.7,"gdppc":3199},"malta":{"gdp":22.4,"gdppc":40800},"singapore":{"gdp":659.57,"gdppc":107758},"bahrain":{"gdp":47.1,"gdppc":29654}};

// Gerçek KDV/GST oranları (2026) — Deloitte, PwC ve EY'nin küresel dolaylı vergi rehberlerinden derlenmiştir.
// Değer: standart KDV/GST oranı (%). Bulunmayan ülkeler için (KDV uygulamayan/veri olmayan) örnek veri kullanılır.
const REAL_VAT = {"tanzania":18.0,"canada":5.0,"kazakhstan":16.0,"uzbekistan":12.0,"papua-new-guinea":10.0,"indonesia":11.0,"argentina":21.0,"chile":19.0,"dem-rep-congo":16.0,"kenya":16.0,"dominican-rep":18.0,"russia":22.0,"norway":25.0,"southafrica":15.0,"lesotho":15.0,"mexico":16.0,"uruguay":22.0,"brazil":18.0,"bolivia":13.0,"peru":18.0,"colombia":19.0,"panama":7.0,"costa-rica":13.0,"nicaragua":15.0,"honduras":15.0,"el-salvador":13.0,"guatemala":12.0,"belize":12.5,"venezuela":16.0,"france":20.0,"ecuador":15.0,"jamaica":15.0,"zimbabwe":15.0,"botswana":14.0,"namibia":15.0,"senegal":18.0,"mauritania":16.0,"nigeria":7.5,"cameroon":19.25,"ghana":15.0,"cote-d-ivoire":18.0,"sierra-leone":15.0,"gabon":18.0,"eq-guinea":15.0,"zambia":16.0,"malawi":16.5,"mozambique":16.0,"eswatini":15.0,"angola":14.0,"israel":18.0,"lebanon":11.0,"madagascar":20.0,"tunisia":19.0,"algeria":19.0,"jordan":16.0,"uae":5.0,"oman":5.0,"vanuatu":15.0,"cambodia":10.0,"thailand":7.0,"laos":10.0,"vietnam":10.0,"south-korea":10.0,"mongolia":10.0,"india":18.0,"bangladesh":15.0,"bhutan":7.0,"nepal":13.0,"tajikistan":14.0,"iran":9.0,"armenia":20.0,"sweden":25.0,"belarus":20.0,"ukraine":20.0,"poland":23.0,"austria":20.0,"hungary":27.0,"romania":21.0,"lithuania":21.0,"latvia":21.0,"estonia":24.0,"germany":19.0,"bulgaria":20.0,"greece":24.0,"turkey":20.0,"albania":20.0,"croatia":25.0,"switzerland":8.1,"luxembourg":17.0,"belgium":21.0,"netherlands":21.0,"portugal":23.0,"spain":21.0,"ireland":23.0,"new-zealand":15.0,"australia":10.0,"sri-lanka":18.0,"china":13.0,"taiwan":5.0,"italy":22.0,"denmark":25.0,"uk":20.0,"iceland":24.0,"azerbaijan":18.0,"georgia":18.0,"philippines":12.0,"slovenia":22.0,"finland":25.5,"slovakia":23.0,"czechia":21.0,"japan":10.0,"paraguay":10.0,"yemen":5.0,"saudi-arabia":15.0,"cyprus":19.0,"morocco":20.0,"egypt":14.0,"ethiopia":15.0,"uganda":18.0,"rwanda":18.0,"bosnia-and-herz":17.0,"north-macedonia":18.0,"serbia":20.0,"montenegro":21.0,"trinidad-and-tobago":12.5,"malta":18,"singapore":9,"bahrain":10};
// Asgari ücret — TradingEconomics (tr.tradingeconomics.com/country-list/minimum-wages), aylık USD'ye çevrilmiştir (saatlik x173.2 saat/ay, günlük x22 iş günü, haftalık x4.33; kur: yaklaşık 2026 ortası piyasa kurları). 97 ülke için gerçek veri.
const REAL_MIN_WAGE_USD = {"albania":543,"algeria":179,"angola":35,"argentina":263,"armenia":194,"australia":2863,"azerbaijan":235,"bangladesh":102,"belarus":268,"belgium":2296,"benin":87,"bolivia":478,"bosnia-and-herz":571,"botswana":116,"brazil":300,"bulgaria":674,"cambodia":210,"canada":2253,"cape-verde":129,"chile":561,"china":378,"colombia":427,"croatia":1141,"czechia":1004,"dominican-rep":283,"ecuador":482,"egypt":140,"el-salvador":409,"estonia":963,"ethiopia":3,"france":1982,"germany":2617,"ghana":30,"greece":1116,"guatemala":520,"haiti":4,"honduras":389,"hungary":911,"india":46,"indonesia":354,"ireland":2664,"israel":1689,"japan":1229,"jordan":408,"kazakhstan":177,"kenya":125,"kyrgyzstan":38,"laos":115,"latvia":848,"lesotho":123,"lithuania":1253,"luxembourg":2939,"north-macedonia":682,"madagascar":58,"malaysia":386,"malta":1080,"mauritius":376,"mexico":375,"moldova":356,"mongolia":230,"montenegro":728,"morocco":353,"mozambique":104,"myanmar":50,"netherlands":2495,"new-zealand":2514,"nicaragua":226,"nigeria":45,"oman":844,"pakistan":143,"panama":542,"papua-new-guinea":157,"paraguay":367,"peru":301,"philippines":266,"poland":1238,"portugal":1166,"qatar":275,"romania":864,"russia":339,"serbia":809,"slovakia":995,"slovenia":1389,"southafrica":286,"south-korea":1295,"spain":1501,"sri-lanka":100,"taiwan":908,"tajikistan":94,"tanzania":31,"thailand":255,"tunisia":144,"turkey":806,"uganda":35,"ukraine":208,"uk":2787,"usa":1256,"uzbekistan":100,"venezuela":141,"vietnam":209};
// Gerçek yıllık ithalat büyüme oranları — ITC Trade Map 2025 (2024→2025 karşılaştırması), HS 940161 (Döşemeli) ve HS 940360 (Ahşap) için ayrı ayrı, 110'ar ülke. Burada olmayan ülkeler için
// KESİNLİKLE tahmin üretilmez — arayüzde "Bilinmiyor" gösterilir.
const REAL_IMPORT_GROWTH_SEATING = {"usa":{"v2024K":8168655,"v2025K":7359594,"growthPct":-9.9},"germany":{"v2024K":1729671,"v2025K":2032510,"growthPct":17.5},"uk":{"v2024K":1347522,"v2025K":1479547,"growthPct":9.8},"france":{"v2024K":1189315,"v2025K":1161974,"growthPct":-2.3},"canada":{"v2024K":854092,"v2025K":901494,"growthPct":5.5},"japan":{"v2024K":570651,"v2025K":581583,"growthPct":1.9},"australia":{"v2024K":555007,"v2025K":561356,"growthPct":1.1},"netherlands":{"v2024K":515162,"v2025K":560525,"growthPct":8.8},"switzerland":{"v2024K":401288,"v2025K":422390,"growthPct":5.3},"denmark":{"v2024K":337290,"v2025K":374274,"growthPct":11.0},"saudi-arabia":{"v2024K":382995,"v2025K":360340,"growthPct":-5.9},"belgium":{"v2024K":328038,"v2025K":331221,"growthPct":1.0},"south-korea":{"v2024K":290034,"v2025K":313197,"growthPct":8.0},"spain":{"v2024K":229005,"v2025K":283607,"growthPct":23.8},"austria":{"v2024K":249448,"v2025K":260718,"growthPct":4.5},"sweden":{"v2024K":235888,"v2025K":249282,"growthPct":5.7},"italy":{"v2024K":200617,"v2025K":218459,"growthPct":8.9},"norway":{"v2024K":188852,"v2025K":217596,"growthPct":15.2},"mexico":{"v2024K":193394,"v2025K":190144,"growthPct":-1.7},"china":{"v2024K":167014,"v2025K":148017,"growthPct":-11.4},"poland":{"v2024K":114615,"v2025K":132547,"growthPct":15.6},"czechia":{"v2024K":118192,"v2025K":132072,"growthPct":11.7},"ireland":{"v2024K":124505,"v2025K":128963,"growthPct":3.6},"israel":{"v2024K":124053,"v2025K":112836,"growthPct":-9.0},"new-zealand":{"v2024K":97513,"v2025K":93242,"growthPct":-4.4},"croatia":{"v2024K":74490,"v2025K":86897,"growthPct":16.7},"taiwan":{"v2024K":78176,"v2025K":82200,"growthPct":5.1},"finland":{"v2024K":78049,"v2025K":81712,"growthPct":4.7},"portugal":{"v2024K":66466,"v2025K":78299,"growthPct":17.8},"romania":{"v2024K":68542,"v2025K":67191,"growthPct":-2.0},"slovakia":{"v2024K":54393,"v2025K":65300,"growthPct":20.1},"chile":{"v2024K":62611,"v2025K":60823,"growthPct":-2.9},"singapore":{"v2024K":57948,"v2025K":60767,"growthPct":4.9},"thailand":{"v2024K":52665,"v2025K":59311,"growthPct":12.6},"bulgaria":{"v2024K":40349,"v2025K":45349,"growthPct":12.4},"turkey":{"v2024K":33959,"v2025K":44520,"growthPct":31.1},"hungary":{"v2024K":46479,"v2025K":44173,"growthPct":-5.0},"southafrica":{"v2024K":36980,"v2025K":41460,"growthPct":12.1},"greece":{"v2024K":40488,"v2025K":40156,"growthPct":-0.8},"indonesia":{"v2024K":43631,"v2025K":39421,"growthPct":-9.6},"morocco":{"v2024K":28191,"v2025K":37891,"growthPct":34.4},"philippines":{"v2024K":33358,"v2025K":36320,"growthPct":8.9},"malaysia":{"v2024K":29048,"v2025K":35529,"growthPct":22.3},"serbia":{"v2024K":28860,"v2025K":33923,"growthPct":17.5},"india":{"v2024K":32102,"v2025K":33783,"growthPct":5.2},"kazakhstan":{"v2024K":39534,"v2025K":31420,"growthPct":-20.5},"slovenia":{"v2024K":28242,"v2025K":30736,"growthPct":8.8},"uruguay":{"v2024K":24008,"v2025K":24122,"growthPct":0.5},"lithuania":{"v2024K":23721,"v2025K":24064,"growthPct":1.4},"oman":{"v2024K":27345,"v2025K":23660,"growthPct":-13.5},"costa-rica":{"v2024K":22500,"v2025K":23061,"growthPct":2.5},"georgia":{"v2024K":20566,"v2025K":22290,"growthPct":8.4},"estonia":{"v2024K":13869,"v2025K":21103,"growthPct":52.2},"luxembourg":{"v2024K":19773,"v2025K":20850,"growthPct":5.4},"peru":{"v2024K":21562,"v2025K":19985,"growthPct":-7.3},"dominican-rep":{"v2024K":11385,"v2025K":18485,"growthPct":62.4},"iceland":{"v2024K":16529,"v2025K":17881,"growthPct":8.2},"colombia":{"v2024K":10112,"v2025K":17049,"growthPct":68.6},"panama":{"v2024K":18124,"v2025K":16653,"growthPct":-8.1},"cyprus":{"v2024K":14976,"v2025K":16128,"growthPct":7.7},"bosnia-and-herz":{"v2024K":14339,"v2025K":14668,"growthPct":2.3},"argentina":{"v2024K":4147,"v2025K":14295,"growthPct":244.7},"bahamas":{"v2024K":13391,"v2025K":12716,"growthPct":-5.0},"azerbaijan":{"v2024K":14047,"v2025K":12681,"growthPct":-9.7},"guatemala":{"v2024K":13397,"v2025K":12449,"growthPct":-7.1},"malta":{"v2024K":11428,"v2025K":11725,"growthPct":2.6},"namibia":{"v2024K":9781,"v2025K":10891,"growthPct":11.3},"mongolia":{"v2024K":10348,"v2025K":10821,"growthPct":4.6},"armenia":{"v2024K":10206,"v2025K":10341,"growthPct":1.3},"latvia":{"v2024K":10188,"v2025K":10256,"growthPct":0.7},"brazil":{"v2024K":7072,"v2025K":8706,"growthPct":23.1},"kenya":{"v2024K":10357,"v2025K":8427,"growthPct":-18.6},"angola":{"v2024K":5584,"v2025K":8168,"growthPct":46.3},"ecuador":{"v2024K":8095,"v2025K":7926,"growthPct":-2.1},"nicaragua":{"v2024K":6219,"v2025K":7473,"growthPct":20.2},"el-salvador":{"v2024K":7177,"v2025K":7211,"growthPct":0.5},"paraguay":{"v2024K":4774,"v2025K":6722,"growthPct":40.8},"cote-d-ivoire":{"v2024K":6500,"v2025K":6103,"growthPct":-6.1},"moldova":{"v2024K":5189,"v2025K":5889,"growthPct":13.5},"jamaica":{"v2024K":6946,"v2025K":5522,"growthPct":-20.5},"bolivia":{"v2024K":4351,"v2025K":4109,"growthPct":-5.6},"trinidad-and-tobago":{"v2024K":3289,"v2025K":3688,"growthPct":12.1},"egypt":{"v2024K":3126,"v2025K":3315,"growthPct":6.0},"senegal":{"v2024K":2638,"v2025K":3212,"growthPct":21.8},"kyrgyzstan":{"v2024K":5069,"v2025K":2938,"growthPct":-42.0},"mozambique":{"v2024K":4684,"v2025K":2908,"growthPct":-37.9},"dem-rep-congo":{"v2024K":3049,"v2025K":2551,"growthPct":-16.3},"uganda":{"v2024K":1608,"v2025K":2501,"growthPct":55.5},"tanzania":{"v2024K":2897,"v2025K":2381,"growthPct":-17.8},"brunei":{"v2024K":3029,"v2025K":2292,"growthPct":-24.3},"fiji":{"v2024K":993,"v2025K":2236,"growthPct":125.2},"zambia":{"v2024K":2055,"v2025K":2162,"growthPct":5.2},"zimbabwe":{"v2024K":1629,"v2025K":2145,"growthPct":31.7},"cambodia":{"v2024K":2037,"v2025K":2096,"growthPct":2.9},"liberia":{"v2024K":1905,"v2025K":1640,"growthPct":-13.9},"benin":{"v2024K":1227,"v2025K":1440,"growthPct":17.4},"belize":{"v2024K":1276,"v2025K":950,"growthPct":-25.5},"burkina-faso":{"v2024K":916,"v2025K":843,"growthPct":-8.0},"sri-lanka":{"v2024K":1206,"v2025K":770,"growthPct":-36.2},"rwanda":{"v2024K":421,"v2025K":725,"growthPct":72.2},"madagascar":{"v2024K":680,"v2025K":697,"growthPct":2.5},"guyana":{"v2024K":844,"v2025K":687,"growthPct":-18.6},"togo":{"v2024K":640,"v2025K":562,"growthPct":-12.2},"niger":{"v2024K":15,"v2025K":417,"growthPct":2680.0},"malawi":{"v2024K":303,"v2025K":366,"growthPct":20.8},"suriname":{"v2024K":154,"v2025K":211,"growthPct":37.0},"pakistan":{"v2024K":142,"v2025K":210,"growthPct":47.9},"mauritania":{"v2024K":458,"v2025K":140,"growthPct":-69.4},"burundi":{"v2024K":190,"v2025K":99,"growthPct":-47.9},"bhutan":{"v2024K":66,"v2025K":29,"growthPct":-56.1}};
const REAL_IMPORT_GROWTH_WOOD = {"usa":{"v2024K":7199691,"v2025K":6433593,"growthPct":-10.6},"germany":{"v2024K":2331344,"v2025K":2768148,"growthPct":18.7},"uk":{"v2024K":1725159,"v2025K":1823745,"growthPct":5.7},"france":{"v2024K":1492983,"v2025K":1506081,"growthPct":0.9},"netherlands":{"v2024K":843993,"v2025K":918399,"growthPct":8.8},"japan":{"v2024K":882261,"v2025K":869890,"growthPct":-1.4},"spain":{"v2024K":675895,"v2025K":788217,"growthPct":16.6},"canada":{"v2024K":691793,"v2025K":781455,"growthPct":13.0},"switzerland":{"v2024K":674993,"v2025K":705888,"growthPct":4.6},"belgium":{"v2024K":545488,"v2025K":569628,"growthPct":4.4},"australia":{"v2024K":532723,"v2025K":556158,"growthPct":4.4},"italy":{"v2024K":481310,"v2025K":549567,"growthPct":14.2},"austria":{"v2024K":483828,"v2025K":513174,"growthPct":6.1},"poland":{"v2024K":363739,"v2025K":432592,"growthPct":18.9},"denmark":{"v2024K":332390,"v2025K":378263,"growthPct":13.8},"sweden":{"v2024K":311720,"v2025K":362325,"growthPct":16.2},"norway":{"v2024K":281609,"v2025K":328072,"growthPct":16.5},"malaysia":{"v2024K":233577,"v2025K":316727,"growthPct":35.6},"czechia":{"v2024K":374921,"v2025K":298127,"growthPct":-20.5},"romania":{"v2024K":247755,"v2025K":256800,"growthPct":3.7},"saudi-arabia":{"v2024K":257788,"v2025K":244359,"growthPct":-5.2},"singapore":{"v2024K":219116,"v2025K":221918,"growthPct":1.3},"south-korea":{"v2024K":217099,"v2025K":221597,"growthPct":2.1},"portugal":{"v2024K":192764,"v2025K":204341,"growthPct":6.0},"israel":{"v2024K":176939,"v2025K":177279,"growthPct":0.2},"mexico":{"v2024K":175117,"v2025K":174745,"growthPct":-0.2},"china":{"v2024K":183684,"v2025K":171205,"growthPct":-6.8},"ireland":{"v2024K":163731,"v2025K":167421,"growthPct":2.3},"slovakia":{"v2024K":134230,"v2025K":162499,"growthPct":21.1},"hungary":{"v2024K":137630,"v2025K":148740,"growthPct":8.1},"greece":{"v2024K":148038,"v2025K":146779,"growthPct":-0.9},"croatia":{"v2024K":111701,"v2025K":131844,"growthPct":18.0},"taiwan":{"v2024K":118621,"v2025K":126602,"growthPct":6.7},"finland":{"v2024K":106948,"v2025K":114158,"growthPct":6.7},"bulgaria":{"v2024K":99901,"v2025K":111707,"growthPct":11.8},"thailand":{"v2024K":89340,"v2025K":106262,"growthPct":18.9},"turkey":{"v2024K":78353,"v2025K":104528,"growthPct":33.4},"philippines":{"v2024K":100542,"v2025K":100646,"growthPct":0.1},"new-zealand":{"v2024K":80601,"v2025K":78175,"growthPct":-3.0},"india":{"v2024K":49096,"v2025K":74124,"growthPct":51.0},"chile":{"v2024K":70564,"v2025K":73582,"growthPct":4.3},"kazakhstan":{"v2024K":88348,"v2025K":67847,"growthPct":-23.2},"morocco":{"v2024K":56120,"v2025K":64241,"growthPct":14.5},"indonesia":{"v2024K":65117,"v2025K":61345,"growthPct":-5.8},"lithuania":{"v2024K":57192,"v2025K":58844,"growthPct":2.9},"cyprus":{"v2024K":47546,"v2025K":57707,"growthPct":21.4},"slovenia":{"v2024K":57234,"v2025K":55547,"growthPct":-2.9},"southafrica":{"v2024K":41154,"v2025K":52172,"growthPct":26.8},"serbia":{"v2024K":41189,"v2025K":49262,"growthPct":19.6},"luxembourg":{"v2024K":44867,"v2025K":48383,"growthPct":7.8},"dominican-rep":{"v2024K":42485,"v2025K":47607,"growthPct":12.1},"iceland":{"v2024K":35217,"v2025K":42861,"growthPct":21.7},"panama":{"v2024K":47634,"v2025K":40793,"growthPct":-14.4},"bosnia-and-herz":{"v2024K":36915,"v2025K":38966,"growthPct":5.6},"latvia":{"v2024K":31347,"v2025K":34091,"growthPct":8.8},"georgia":{"v2024K":31152,"v2025K":33518,"growthPct":7.6},"bahamas":{"v2024K":36602,"v2025K":32685,"growthPct":-10.7},"colombia":{"v2024K":28123,"v2025K":31999,"growthPct":13.8},"estonia":{"v2024K":36568,"v2025K":29313,"growthPct":-19.8},"costa-rica":{"v2024K":21523,"v2025K":26641,"growthPct":23.8},"uruguay":{"v2024K":24340,"v2025K":25560,"growthPct":5.0},"azerbaijan":{"v2024K":35850,"v2025K":25263,"growthPct":-29.5},"oman":{"v2024K":27387,"v2025K":24759,"growthPct":-9.6},"egypt":{"v2024K":22159,"v2025K":24480,"growthPct":10.5},"guatemala":{"v2024K":26034,"v2025K":23562,"growthPct":-9.5},"peru":{"v2024K":24890,"v2025K":21486,"growthPct":-13.7},"cote-d-ivoire":{"v2024K":20597,"v2025K":19515,"growthPct":-5.3},"paraguay":{"v2024K":8204,"v2025K":19059,"growthPct":132.3},"kenya":{"v2024K":17302,"v2025K":18460,"growthPct":6.7},"armenia":{"v2024K":15818,"v2025K":17418,"growthPct":10.1},"senegal":{"v2024K":17182,"v2025K":17279,"growthPct":0.6},"malta":{"v2024K":19820,"v2025K":17275,"growthPct":-12.8},"argentina":{"v2024K":4676,"v2025K":16623,"growthPct":255.5},"el-salvador":{"v2024K":13494,"v2025K":14870,"growthPct":10.2},"moldova":{"v2024K":12384,"v2025K":13442,"growthPct":8.5},"angola":{"v2024K":9525,"v2025K":12793,"growthPct":34.3},"jamaica":{"v2024K":13830,"v2025K":12372,"growthPct":-10.5},"ecuador":{"v2024K":13109,"v2025K":11539,"growthPct":-12.0},"tanzania":{"v2024K":10241,"v2025K":11217,"growthPct":9.5},"cambodia":{"v2024K":5240,"v2025K":10213,"growthPct":94.9},"brazil":{"v2024K":9302,"v2025K":10174,"growthPct":9.4},"trinidad-and-tobago":{"v2024K":6463,"v2025K":9568,"growthPct":48.0},"uganda":{"v2024K":4690,"v2025K":7633,"growthPct":62.8},"rwanda":{"v2024K":7130,"v2025K":7211,"growthPct":1.1},"togo":{"v2024K":8387,"v2025K":6821,"growthPct":-18.7},"fiji":{"v2024K":7806,"v2025K":6340,"growthPct":-18.8},"dem-rep-congo":{"v2024K":7049,"v2025K":6334,"growthPct":-10.1},"kyrgyzstan":{"v2024K":7926,"v2025K":6152,"growthPct":-22.4},"zambia":{"v2024K":4751,"v2025K":5967,"growthPct":25.6},"burkina-faso":{"v2024K":6239,"v2025K":5922,"growthPct":-5.1},"namibia":{"v2024K":5204,"v2025K":5679,"growthPct":9.1},"mongolia":{"v2024K":6026,"v2025K":5371,"growthPct":-10.9},"nicaragua":{"v2024K":3575,"v2025K":5069,"growthPct":41.8},"madagascar":{"v2024K":2338,"v2025K":4845,"growthPct":107.2},"mozambique":{"v2024K":5034,"v2025K":4760,"growthPct":-5.4},"benin":{"v2024K":1855,"v2025K":3241,"growthPct":74.7},"guyana":{"v2024K":3898,"v2025K":3149,"growthPct":-19.2},"zimbabwe":{"v2024K":9592,"v2025K":2915,"growthPct":-69.6},"suriname":{"v2024K":2136,"v2025K":2860,"growthPct":33.9},"mauritania":{"v2024K":5361,"v2025K":2785,"growthPct":-48.1},"sri-lanka":{"v2024K":4419,"v2025K":2779,"growthPct":-37.1},"liberia":{"v2024K":1765,"v2025K":2320,"growthPct":31.4},"malawi":{"v2024K":3453,"v2025K":2286,"growthPct":-33.8},"bolivia":{"v2024K":2152,"v2025K":2080,"growthPct":-3.3},"brunei":{"v2024K":2569,"v2025K":1894,"growthPct":-26.3},"bhutan":{"v2024K":1420,"v2025K":1683,"growthPct":18.5},"niger":{"v2024K":1287,"v2025K":1124,"growthPct":-12.7},"pakistan":{"v2024K":721,"v2025K":975,"growthPct":35.2},"burundi":{"v2024K":1128,"v2025K":956,"growthPct":-15.2},"belize":{"v2024K":720,"v2025K":743,"growthPct":3.2}};



// Türkiye'nin ülkeye özel GERÇEK mobilya ihracat verisi.
// Kaynak: ITC Trade Map (2025, HS 940161 ve 940360, kullanıcı tarafından yüklenen resmi rapor) +
// TÜİK Dış Ticaret İstatistikleri (2024, GTİP 940360). woodGrowthPct, bu iki gerçek kaynağın
// karşılaştırılmasıyla hesaplanan gerçek yıllık büyüme oranıdır (2024 -> 2025).
const TURKEY_EXPORT_REAL = {"tanzania":{"seating2025M":1.185,"wood2025M":1.792,"wood2024M":1.54,"woodGrowthPct":16.4},"canada":{"seating2025M":4.452,"wood2025M":3.33,"wood2024M":4.248,"woodGrowthPct":-21.6},"usa":{"seating2025M":23.289,"wood2025M":47.367,"wood2024M":51.381,"woodGrowthPct":-7.8},"kazakhstan":{"seating2025M":4.56,"wood2025M":5.203,"wood2024M":6.62,"woodGrowthPct":-21.4},"uzbekistan":{"seating2025M":4.377,"wood2025M":5.259,"wood2024M":7.379,"woodGrowthPct":-28.7},"papua-new-guinea":{"wood2025M":0.001,"wood2024M":0.001,"woodGrowthPct":0.0},"indonesia":{"seating2025M":0.024},"argentina":{"seating2025M":0.024,"wood2025M":0.142,"wood2024M":0.026,"woodGrowthPct":446.2},"chile":{"seating2025M":0.002,"wood2025M":0.339,"wood2024M":0.081,"woodGrowthPct":318.5},"dem-rep-congo":{"seating2025M":0.918,"wood2025M":1.159,"wood2024M":1.824,"woodGrowthPct":-36.5},"somalia":{"seating2025M":2.46,"wood2025M":2.198,"wood2024M":1.489,"woodGrowthPct":47.6},"kenya":{"seating2025M":0.503,"wood2025M":0.799,"wood2024M":0.835,"woodGrowthPct":-4.3},"sudan":{"seating2025M":0.159,"wood2025M":0.191,"wood2024M":0.191,"woodGrowthPct":0.0},"chad":{"seating2025M":0.81,"wood2025M":0.601,"wood2024M":0.382,"woodGrowthPct":57.3},"dominican-rep":{"seating2025M":0.336,"wood2025M":0.169,"wood2024M":0.185,"woodGrowthPct":-8.6},"russia":{"seating2025M":2.133,"wood2025M":5.109,"wood2024M":6.64,"woodGrowthPct":-23.1},"bahamas":{"wood2025M":0.386,"wood2024M":0.032,"woodGrowthPct":1106.2},"norway":{"seating2025M":0.547,"wood2025M":0.887,"wood2024M":0.531,"woodGrowthPct":67.0},"timor-leste":{"seating2025M":0.008,"wood2025M":0.041,"wood2024M":0.006,"woodGrowthPct":583.3},"southafrica":{"seating2025M":0.609,"wood2025M":1.463,"wood2024M":1.976,"woodGrowthPct":-26.0},"mexico":{"seating2025M":0.231,"wood2025M":0.303,"wood2024M":0.147,"woodGrowthPct":106.1},"uruguay":{"wood2025M":0.011,"wood2024M":0.012,"woodGrowthPct":-8.3},"brazil":{"seating2025M":0.011,"wood2025M":0.182,"wood2024M":0.062,"woodGrowthPct":193.5},"peru":{"seating2025M":0.139,"wood2025M":0.115,"wood2024M":0.088,"woodGrowthPct":30.7},"colombia":{"seating2025M":0.043,"wood2025M":0.228,"wood2024M":0.095,"woodGrowthPct":140.0},"panama":{"seating2025M":0.539,"wood2025M":0.645,"wood2024M":0.288,"woodGrowthPct":124.0},"costa-rica":{"seating2025M":0.007,"wood2025M":0.048,"wood2024M":0.005,"woodGrowthPct":860.0},"honduras":{"wood2025M":0.001,"wood2024M":0.002,"woodGrowthPct":-50.0},"el-salvador":{"seating2025M":0.021,"wood2025M":0.01,"wood2024M":0.0},"guatemala":{"seating2025M":0.224,"wood2025M":0.122,"wood2024M":0.187,"woodGrowthPct":-34.8},"venezuela":{"seating2025M":0.363,"wood2025M":0.504,"wood2024M":0.258,"woodGrowthPct":95.3},"guyana":{"seating2025M":0.104,"wood2025M":0.143,"wood2024M":0.001,"woodGrowthPct":14200.0},"suriname":{"seating2025M":0.053,"wood2025M":0.088,"wood2024M":0.131,"woodGrowthPct":-32.8},"france":{"seating2025M":26.207,"wood2025M":33.563,"wood2024M":26.353,"woodGrowthPct":27.4},"ecuador":{"seating2025M":0.039},"jamaica":{"wood2025M":0.039,"wood2024M":0.02,"woodGrowthPct":95.0},"cuba":{"seating2025M":0.004,"wood2025M":0.002,"wood2024M":0.01,"woodGrowthPct":-80.0},"zimbabwe":{"seating2025M":0.127,"wood2025M":0.221,"wood2024M":0.24,"woodGrowthPct":-7.9},"botswana":{"wood2025M":0.002,"wood2024M":0.003,"woodGrowthPct":-33.3},"namibia":{"wood2025M":0.004,"wood2024M":0.011,"woodGrowthPct":-63.6},"senegal":{"seating2025M":1.862,"wood2025M":2.155,"wood2024M":2.984,"woodGrowthPct":-27.8},"mali":{"seating2025M":0.928,"wood2025M":0.929,"wood2024M":0.789,"woodGrowthPct":17.7},"mauritania":{"seating2025M":0.135,"wood2025M":0.617,"wood2024M":0.436,"woodGrowthPct":41.5},"benin":{"seating2025M":0.104,"wood2025M":0.113,"wood2024M":0.164,"woodGrowthPct":-31.1},"nigeria":{"seating2025M":0.223,"wood2025M":0.252,"wood2024M":10.719,"woodGrowthPct":-97.6},"cameroon":{"seating2025M":0.405,"wood2025M":0.715,"wood2024M":0.791,"woodGrowthPct":-9.6},"togo":{"seating2025M":0.289,"wood2025M":0.325,"wood2024M":0.506,"woodGrowthPct":-35.8},"ghana":{"seating2025M":2.894,"wood2025M":3.134,"wood2024M":2.717,"woodGrowthPct":15.3},"cote-d-ivoire":{"seating2025M":1.384,"wood2025M":1.484,"wood2024M":1.477,"woodGrowthPct":0.5},"guinea":{"seating2025M":2.938,"wood2025M":3.096,"wood2024M":1.832,"woodGrowthPct":69.0},"guinea-bissau":{"seating2025M":0.015,"wood2025M":0.584,"wood2024M":0.015,"woodGrowthPct":3793.3},"liberia":{"seating2025M":0.479,"wood2025M":0.439,"wood2024M":0.39,"woodGrowthPct":12.6},"sierra-leone":{"seating2025M":0.443,"wood2025M":0.499,"wood2024M":0.608,"woodGrowthPct":-17.9},"burkina-faso":{"seating2025M":0.162,"wood2025M":0.15,"wood2024M":0.265,"woodGrowthPct":-43.4},"central-african-rep":{"seating2025M":0.013,"wood2025M":0.025,"wood2024M":0.006,"woodGrowthPct":316.7},"congo":{"seating2025M":0.814,"wood2025M":1.628,"wood2024M":1.572,"woodGrowthPct":3.6},"gabon":{"seating2025M":0.911,"wood2025M":1.007,"wood2024M":0.586,"woodGrowthPct":71.8},"eq-guinea":{"seating2025M":0.133,"wood2025M":0.117,"wood2024M":0.083,"woodGrowthPct":41.0},"zambia":{"seating2025M":0.123,"wood2025M":0.118,"wood2024M":0.127,"woodGrowthPct":-7.1},"malawi":{"seating2025M":0.057,"wood2025M":0.036,"wood2024M":0.033,"woodGrowthPct":9.1},"mozambique":{"seating2025M":0.108,"wood2025M":0.231,"wood2024M":0.394,"woodGrowthPct":-41.4},"eswatini":{"seating2025M":0.006,"wood2025M":0.344,"wood2024M":0.0},"angola":{"seating2025M":1.341,"wood2025M":0.769,"wood2024M":0.629,"woodGrowthPct":22.3},"burundi":{"seating2025M":0.003,"wood2025M":0.002,"wood2024M":0.004,"woodGrowthPct":-50.0},"lebanon":{"seating2025M":1.955,"wood2025M":2.579,"wood2024M":1.723,"woodGrowthPct":49.7},"madagascar":{"seating2025M":0.005,"wood2025M":0.034,"wood2024M":0.058,"woodGrowthPct":-41.4},"palestine":{"seating2025M":1.361,"wood2025M":4.256,"wood2024M":6.245,"woodGrowthPct":-31.8},"gambia":{"seating2025M":0.397,"wood2025M":0.663,"wood2024M":0.712,"woodGrowthPct":-6.9},"tunisia":{"seating2025M":0.6,"wood2025M":0.561,"wood2024M":0.39,"woodGrowthPct":43.8},"algeria":{"seating2025M":0.815,"wood2025M":1.114,"wood2024M":1.538,"woodGrowthPct":-27.6},"jordan":{"seating2025M":9.359,"wood2025M":9.133,"wood2024M":3.371,"woodGrowthPct":170.9},"uae":{"seating2025M":14.576,"wood2025M":12.87,"wood2024M":14.673,"woodGrowthPct":-12.3},"qatar":{"seating2025M":5.416,"wood2025M":6.169,"wood2024M":8.102,"woodGrowthPct":-23.9},"kuwait":{"seating2025M":1.493,"wood2025M":1.956,"wood2024M":4.283,"woodGrowthPct":-54.3},"iraq":{"seating2025M":118.534,"wood2025M":102.43,"wood2024M":82.955,"woodGrowthPct":23.5},"oman":{"seating2025M":2.972,"wood2025M":1.244,"wood2024M":2.498,"woodGrowthPct":-50.2},"cambodia":{"seating2025M":0.056,"wood2025M":0.058,"wood2024M":0.016,"woodGrowthPct":262.5},"thailand":{"seating2025M":0.045,"wood2025M":0.02,"wood2024M":0.026,"woodGrowthPct":-23.1},"laos":{"seating2025M":0.001},"vietnam":{"seating2025M":0.007,"wood2025M":0.009,"wood2024M":0.049,"woodGrowthPct":-81.6},"south-korea":{"seating2025M":0.06,"wood2025M":0.067,"wood2024M":0.095,"woodGrowthPct":-29.5},"mongolia":{"seating2025M":0.251,"wood2025M":0.32,"wood2024M":0.507,"woodGrowthPct":-36.9},"india":{"seating2025M":1.976,"wood2025M":0.928,"wood2024M":1.94,"woodGrowthPct":-52.2},"bangladesh":{"seating2025M":0.027,"wood2025M":0.002,"wood2024M":0.123,"woodGrowthPct":-98.4},"nepal":{"seating2025M":0.014,"wood2025M":0.011,"wood2024M":0.006,"woodGrowthPct":83.3},"pakistan":{"seating2025M":0.35,"wood2025M":0.423,"wood2024M":0.474,"woodGrowthPct":-10.8},"afghanistan":{"seating2025M":0.04,"wood2025M":0.034,"wood2024M":0.027,"woodGrowthPct":25.9},"tajikistan":{"seating2025M":1.569,"wood2025M":0.98,"wood2024M":1.483,"woodGrowthPct":-33.9},"kyrgyzstan":{"seating2025M":1.299,"wood2025M":1.487,"wood2024M":1.291,"woodGrowthPct":15.2},"turkmenistan":{"seating2025M":2.84,"wood2025M":5.27,"wood2024M":7.775,"woodGrowthPct":-32.2},"iran":{"seating2025M":1.177,"wood2025M":1.663,"wood2024M":1.405,"woodGrowthPct":18.4},"syria":{"seating2025M":1.54,"wood2025M":1.446,"wood2024M":0.806,"woodGrowthPct":79.4},"sweden":{"seating2025M":2.976,"wood2025M":4.355,"wood2024M":3.797,"woodGrowthPct":14.7},"belarus":{"seating2025M":7.554,"wood2025M":5.521,"wood2024M":4.469,"woodGrowthPct":23.5},"ukraine":{"seating2025M":0.392,"wood2025M":1.308,"wood2024M":0.631,"woodGrowthPct":107.3},"poland":{"seating2025M":1.939,"wood2025M":3.042,"wood2024M":2.123,"woodGrowthPct":43.3},"austria":{"seating2025M":8.145,"wood2025M":7.824,"wood2024M":6.642,"woodGrowthPct":17.8},"hungary":{"seating2025M":1.239,"wood2025M":1.686,"wood2024M":1.206,"woodGrowthPct":39.8},"moldova":{"seating2025M":0.731,"wood2025M":1.778,"wood2024M":1.743,"woodGrowthPct":2.0},"romania":{"seating2025M":11.283,"wood2025M":14.772,"wood2024M":16.869,"woodGrowthPct":-12.4},"lithuania":{"seating2025M":0.616,"wood2025M":1.158,"wood2024M":1.151,"woodGrowthPct":0.6},"latvia":{"seating2025M":0.245,"wood2025M":0.288,"wood2024M":0.429,"woodGrowthPct":-32.9},"estonia":{"seating2025M":0.181,"wood2025M":0.442,"wood2024M":0.369,"woodGrowthPct":19.8},"germany":{"seating2025M":25.351,"wood2025M":42.012,"wood2024M":37.331,"woodGrowthPct":12.5},"bulgaria":{"seating2025M":7.7,"wood2025M":8.599,"wood2024M":7.311,"woodGrowthPct":17.6},"greece":{"seating2025M":6.923,"wood2025M":10.661,"wood2024M":8.617,"woodGrowthPct":23.7},"albania":{"seating2025M":1.239,"wood2025M":2.343,"wood2024M":2.396,"woodGrowthPct":-2.2},"croatia":{"seating2025M":1.791,"wood2025M":3.74,"wood2024M":3.305,"woodGrowthPct":13.2},"switzerland":{"seating2025M":5.001,"wood2025M":6.746,"wood2024M":6.861,"woodGrowthPct":-1.7},"luxembourg":{"seating2025M":0.063,"wood2025M":0.082,"wood2024M":0.109,"woodGrowthPct":-24.8},"belgium":{"seating2025M":7.177,"wood2025M":7.763,"wood2024M":4.166,"woodGrowthPct":86.3},"netherlands":{"seating2025M":11.055,"wood2025M":16.962,"wood2024M":13.382,"woodGrowthPct":26.8},"portugal":{"seating2025M":0.594,"wood2025M":0.535,"wood2024M":0.472,"woodGrowthPct":13.3},"spain":{"seating2025M":1.513,"wood2025M":6.497,"wood2024M":5.286,"woodGrowthPct":22.9},"ireland":{"seating2025M":0.538,"wood2025M":0.797,"wood2024M":0.523,"woodGrowthPct":52.4},"new-zealand":{"seating2025M":0.04,"wood2025M":0.123,"wood2024M":0.313,"woodGrowthPct":-60.7},"australia":{"seating2025M":0.858,"wood2025M":0.849,"wood2024M":1.032,"woodGrowthPct":-17.7},"sri-lanka":{"seating2025M":0.096,"wood2025M":0.101,"wood2024M":0.04,"woodGrowthPct":152.5},"china":{"seating2025M":0.196,"wood2025M":0.132,"wood2024M":0.143,"woodGrowthPct":-7.7},"italy":{"seating2025M":4.648,"wood2025M":8.356,"wood2024M":6.656,"woodGrowthPct":25.5},"denmark":{"seating2025M":2.48,"wood2025M":5.101,"wood2024M":2.366,"woodGrowthPct":115.6},"uk":{"seating2025M":13.221,"wood2025M":31.727,"wood2024M":19.467,"woodGrowthPct":63.0},"iceland":{"seating2025M":0.03,"wood2025M":0.01,"wood2024M":0.044,"woodGrowthPct":-77.3},"azerbaijan":{"seating2025M":5.581,"wood2025M":10.965,"wood2024M":14.308,"woodGrowthPct":-23.4},"georgia":{"seating2025M":15.955,"wood2025M":20.632,"wood2024M":12.056,"woodGrowthPct":71.1},"philippines":{"seating2025M":0.012,"wood2025M":0.017,"wood2024M":0.016,"woodGrowthPct":6.3},"malaysia":{"seating2025M":0.073,"wood2025M":0.057,"wood2024M":0.156,"woodGrowthPct":-63.5},"slovenia":{"seating2025M":0.157,"wood2025M":0.432,"wood2024M":0.756,"woodGrowthPct":-42.9},"finland":{"seating2025M":0.339,"wood2025M":0.848,"wood2024M":0.52,"woodGrowthPct":63.1},"slovakia":{"seating2025M":0.509,"wood2025M":1.828,"wood2024M":1.602,"woodGrowthPct":14.1},"czechia":{"seating2025M":0.985,"wood2025M":4.424,"wood2024M":3.08,"woodGrowthPct":43.6},"eritrea":{"seating2025M":0.001,"wood2025M":0.001,"wood2024M":0.003,"woodGrowthPct":-66.7},"japan":{"seating2025M":0.011,"wood2025M":0.105,"wood2024M":0.519,"woodGrowthPct":-79.8},"paraguay":{"seating2025M":0.023,"wood2025M":0.049,"wood2024M":0.031,"woodGrowthPct":58.1},"yemen":{"seating2025M":0.17,"wood2025M":0.181,"wood2024M":0.594,"woodGrowthPct":-69.5},"saudi-arabia":{"seating2025M":14.839,"wood2025M":21.223,"wood2024M":19.287,"woodGrowthPct":10.0},"cyprus":{"seating2025M":6.094,"wood2025M":12.671},"morocco":{"seating2025M":4.682,"wood2025M":10.3,"wood2024M":9.627,"woodGrowthPct":7.0},"egypt":{"seating2025M":0.528,"wood2025M":0.909,"wood2024M":0.655,"woodGrowthPct":38.8},"libya":{"seating2025M":15.508,"wood2025M":22.994,"wood2024M":21.074,"woodGrowthPct":9.1},"ethiopia":{"seating2025M":0.202,"wood2025M":0.501,"wood2024M":0.859,"woodGrowthPct":-41.7},"djibouti":{"seating2025M":0.154,"wood2025M":0.359,"wood2024M":0.316,"woodGrowthPct":13.6},"uganda":{"seating2025M":0.809,"wood2025M":0.9,"wood2024M":0.478,"woodGrowthPct":88.3},"rwanda":{"seating2025M":0.185,"wood2025M":0.159,"wood2024M":0.545,"woodGrowthPct":-70.8},"bosnia-and-herz":{"seating2025M":2.535,"wood2025M":3.213,"wood2024M":2.96,"woodGrowthPct":8.5},"north-macedonia":{"seating2025M":2.374,"wood2025M":3.787,"wood2024M":3.857,"woodGrowthPct":-1.8},"serbia":{"seating2025M":11.536,"wood2025M":11.678,"wood2024M":5.887,"woodGrowthPct":98.4},"montenegro":{"seating2025M":1.773,"wood2025M":4.211,"wood2024M":3.693,"woodGrowthPct":14.0},"trinidad-and-tobago":{"seating2025M":0.016,"wood2025M":0.026,"wood2024M":0.102,"woodGrowthPct":-74.5},"malta":{"seating2025M":1.29,"wood2025M":2.591},"singapore":{"seating2025M":0.0,"wood2025M":0.0},"bahrain":{"seating2025M":0.561,"wood2025M":1.083},"israel":{"seating2025M":6.8,"wood2025M":8.5},"kosovo":{"seating2025M":6.393,"wood2025M":4.065}};
// Türkiye'nin 2025 TOPLAM mobilya ihracatı (tüm HS 94 kategorileri, TÜİK/Ticaret Bakanlığı kaynaklı,
// kullanıcı tarafından sağlanmıştır). ITC verisinden daha geniş kapsamlı — 163 ülke.
// NOT: Çekya bu listede YOK — kaynak veride araç koltuğu ihracatının karıştığı tespit edildiği için
// kullanıcı tarafından çıkarılmıştır; Çekya'nın ayrı HS koduna özel (ITC) verisi hâlâ geçerlidir.
const TURKEY_TOTAL_EXPORT_2025 = {"iraq":609.299,"austria":57.886,"usa":243.984,"israel":46.259,"bulgaria":88.35,"bosnia-and-herz":28.935,"kazakhstan":41.42,"germany":371.573,"france":232.56,"libya":149.672,"saudi-arabia":132.341,"georgia":88.558,"poland":49.407,"russia":0.613,"nigeria":41.947,"palestine":32.019,"canada":20.607,"india":8.183,"uk":159.261,"azerbaijan":88.49,"kosovo":27.837,"oman":22.314,"tunisia":10.027,"romania":219.111,"netherlands":0.046,"serbia":43.522,"iran":12.921,"belgium":70.879,"spain":66.944,"switzerland":28.159,"jordan":24.86,"malawi":0.175,"dem-rep-congo":10.61,"norway":10.269,"southafrica":2.514,"morocco":94.522,"kyrgyzstan":12.149,"guinea":9.675,"peru":0.785,"guatemala":0.67,"greece":62.642,"turkmenistan":59.202,"north-macedonia":39.068,"hungary":22.273,"montenegro":19.108,"panama":3.754,"ghana":12.277,"dominican-rep":1.822,"mozambique":39.2,"uzbekistan":34.665,"senegal":16.391,"lithuania":11.904,"gabon":4.032,"malaysia":0.847,"guinea-bissau":0.174,"kuwait":30.058,"albania":14.32,"liberia":4.213,"mongolia":2.839,"paraguay":0.394,"italy":81.774,"czechia":42.782,"sweden":20.99,"portugal":19.317,"croatia":17.12,"cote-d-ivoire":13.391,"mexico":5.748,"mali":3.619,"pakistan":3.509,"estonia":1.473,"gambia":3.107,"uae":84.411,"qatar":49.47,"slovenia":27.352,"belarus":21.661,"ukraine":19.605,"egypt":19.386,"slovakia":19.185,"ireland":0.232,"moldova":15.701,"denmark":14.838,"algeria":14.013,"lebanon":12.334,"australia":12.078,"somalia":10.16,"syria":8.349,"tajikistan":8.003,"china":7.978,"latvia":7.803,"yemen":7.647,"togo":3.12,"tanzania":6.0,"uruguay":5.992,"falkland-is":0.002,"brazil":5.752,"kenya":5.732,"japan":5.498,"finland":5.282,"cameroon":5.04,"angola":4.168,"mauritania":3.991,"ethiopia":3.378,"uganda":3.085,"sierra-leone":3.047,"sudan":2.786,"burkina-faso":2.302,"chad":2.188,"rwanda":2.119,"new-zealand":2.092,"djibouti":1.961,"venezuela":1.76,"ecuador":1.577,"s-sudan":1.495,"iceland":1.387,"indonesia":1.254,"benin":1.249,"suriname":1.089,"colombia":1.02,"argentina":0.951,"niger":0.942,"vietnam":0.89,"eq-guinea":0.852,"bangladesh":0.696,"luxembourg":0.696,"thailand":0.051,"trinidad-and-tobago":0.566,"guyana":0.494,"costa-rica":0.482,"madagascar":0.456,"zambia":0.446,"zimbabwe":0.395,"philippines":0.394,"namibia":0.383,"el-salvador":0.361,"afghanistan":0.303,"sri-lanka":0.296,"bolivia":0.266,"cuba":0.25,"nicaragua":0.231,"cambodia":0.214,"jamaica":0.194,"solomon-is":0.174,"bahamas":0.169,"central-african-rep":0.145,"honduras":0.136,"nepal":0.081,"papua-new-guinea":0.051,"new-caledonia":0.045,"myanmar":0.04,"belize":0.041,"botswana":0.04,"cyprus":0.04,"laos":0.032,"greenland":0.032,"brunei":0.03,"eritrea":0.027,"fiji":0.022,"haiti":0.017,"lesotho":0.016,"burundi":0.011,"bhutan":0.004,"vanuatu":0.0,"chile":4.671};


// Gerçek enflasyon verisi (2025) — IMF World Economic Outlook API (PCPIPCH göstergesi, resmi imf.org veri servisi).
const REAL_INFLATION = {"mexico":3.8,"usa":2.7,"germany":2.3,"france":0.9,"uk":3.4,"turkey":34.9,"china":0,"japan":3.2,"india":2.1,"brazil":5,"southafrica":3.2,"south-korea":2.1,"canada":2.1,"australia":2.9,"italy":1.6,"spain":2.7,"netherlands":3,"switzerland":0.2,"poland":3.6,"austria":3.6,"belgium":3,"sweden":2.6,"norway":3,"denmark":1.8,"finland":1.8,"ireland":2.1,"portugal":2.2,"greece":2.9,"czechia":2.5,"hungary":4.4,"romania":7.3,"bulgaria":3.5,"croatia":4.4,"slovakia":4.2,"slovenia":2.5,"lithuania":3.4,"latvia":3.8,"estonia":4.8,"cyprus":0.8,"luxembourg":2.5,"iceland":4.1,"russia":8.7,"ukraine":12.7,"belarus":6.6,"kazakhstan":11.4,"uzbekistan":8.8,"azerbaijan":5.6,"georgia":3.9,"armenia":3.3,"indonesia":1.9,"thailand":-0.1,"vietnam":3.3,"malaysia":1.4,"philippines":1.7,"bangladesh":10,"pakistan":4.5,"sri-lanka":1.2,"myanmar":22,"cambodia":2.5,"laos":7.7,"egypt":20.4,"morocco":0.8,"algeria":1.4,"tunisia":5.3,"nigeria":23,"kenya":4.1,"ethiopia":13.2,"ghana":14.2,"tanzania":3.3,"uganda":3.6,"zambia":13.9,"angola":20.2,"cote-d-ivoire":0.1,"senegal":1.4,"cameroon":3.4,"dem-rep-congo":7.4,"sudan":100.2,"iran":50.9,"iraq":0.3,"saudi-arabia":2,"uae":1.3,"qatar":0.6,"kuwait":2.4,"oman":1,"jordan":1.8,"lebanon":14.6,"israel":3,"yemen":21.4,"afghanistan":2.9,"argentina":41.9,"chile":4.2,"colombia":5.1,"peru":1.5,"venezuela":252,"ecuador":0.7,"bolivia":19.5,"paraguay":4.1,"uruguay":4.7,"guatemala":1.6,"honduras":4.6,"nicaragua":2.1,"costa-rica":-0.1,"panama":0,"dominican-rep":3.9,"jamaica":3.9,"trinidad-and-tobago":1,"new-zealand":2.8,"fiji":-1.4,"mongolia":8.6,"nepal":4.1,"bhutan":2.6,"mozambique":4.4,"zimbabwe":81.4,"lesotho":4.4,"namibia":3.5,"botswana":2.8,"congo":2.6,"gabon":2,"eq-guinea":2.8,"chad":-2.6,"niger":-4.6,"mali":2.3,"burkina-faso":-0.5,"togo":0.4,"benin":1.1,"guinea":3.1,"sierra-leone":7.6,"liberia":8.3,"gambia":7.9,"mauritania":1.6,"guinea-bissau":0.9,"djibouti":-0.3,"somalia":3.7,"rwanda":7,"burundi":34.2,"malawi":28.4,"madagascar":8,"eswatini":3.1,"central-african-rep":1,"bosnia-and-herz":4,"north-macedonia":4.1,"albania":2.2,"serbia":3.9,"montenegro":3.9,"moldova":7.8,"libya":1.8,"papua-new-guinea":4.4,"solomon-is":3.4,"vanuatu":1.7,"brunei":-0.3,"belize":1.1,"guyana":3.3,"suriname":9.2,"bahamas":0.6};

// Ülke telefon kodu (gerçek, ITU/E.164 standardı).
const REAL_CALLING_CODE = {"fiji":679,"tanzania":255,"w-sahara":212,"canada":1,"usa":1,"kazakhstan":7,"uzbekistan":998,"papua-new-guinea":675,"indonesia":62,"argentina":54,"chile":56,"dem-rep-congo":243,"somalia":252,"kenya":254,"sudan":249,"chad":235,"haiti":509,"dominican-rep":1,"russia":7,"bahamas":1,"falkland-is":500,"norway":47,"greenland":299,"timor-leste":670,"southafrica":27,"lesotho":266,"mexico":52,"uruguay":598,"brazil":55,"bolivia":591,"peru":51,"colombia":57,"panama":507,"costa-rica":506,"nicaragua":505,"honduras":504,"el-salvador":503,"guatemala":502,"belize":501,"venezuela":58,"guyana":592,"suriname":597,"france":33,"ecuador":593,"puerto-rico":1,"jamaica":1,"cuba":53,"zimbabwe":263,"botswana":267,"namibia":264,"senegal":221,"mali":223,"mauritania":222,"benin":229,"niger":227,"nigeria":234,"cameroon":237,"togo":228,"ghana":233,"cote-d-ivoire":225,"guinea":224,"guinea-bissau":245,"liberia":231,"sierra-leone":232,"burkina-faso":226,"central-african-rep":236,"congo":242,"gabon":241,"eq-guinea":240,"zambia":260,"malawi":265,"mozambique":258,"eswatini":268,"angola":244,"burundi":257,"israel":972,"lebanon":961,"madagascar":261,"palestine":970,"gambia":220,"tunisia":216,"algeria":213,"jordan":962,"uae":971,"qatar":974,"kuwait":965,"iraq":964,"oman":968,"vanuatu":678,"cambodia":855,"thailand":66,"laos":856,"myanmar":95,"vietnam":84,"north-korea":850,"south-korea":82,"mongolia":976,"india":91,"bangladesh":880,"bhutan":975,"nepal":977,"pakistan":92,"afghanistan":93,"tajikistan":992,"kyrgyzstan":996,"turkmenistan":993,"iran":98,"syria":963,"armenia":374,"sweden":46,"belarus":375,"ukraine":380,"poland":48,"austria":43,"hungary":36,"moldova":373,"romania":40,"lithuania":370,"latvia":371,"estonia":372,"germany":49,"bulgaria":359,"greece":30,"turkey":90,"albania":355,"croatia":385,"switzerland":41,"luxembourg":352,"belgium":32,"netherlands":31,"portugal":351,"spain":34,"ireland":353,"new-caledonia":687,"solomon-is":677,"new-zealand":64,"australia":61,"sri-lanka":94,"china":86,"italy":39,"denmark":45,"uk":44,"iceland":354,"azerbaijan":994,"georgia":995,"philippines":63,"malaysia":60,"brunei":673,"slovenia":386,"finland":358,"slovakia":421,"czechia":420,"eritrea":291,"japan":81,"paraguay":595,"yemen":967,"saudi-arabia":966,"cyprus":357,"morocco":212,"egypt":20,"libya":218,"ethiopia":251,"djibouti":253,"uganda":256,"rwanda":250,"bosnia-and-herz":387,"north-macedonia":389,"serbia":381,"montenegro":382,"kosovo":383,"trinidad-and-tobago":1,"s-sudan":211,"taiwan":886};

// Ülkelerin İngilizce adları — Google Maps aramalarında daha güvenilir sonuç için kullanılır.
const ENGLISH_NAME = {"fiji":"Fiji","tanzania":"Tanzania","w-sahara":"Western Sahara","canada":"Canada","usa":"USA","kazakhstan":"Kazakhstan","uzbekistan":"Uzbekistan","papua-new-guinea":"Papua New Guinea","indonesia":"Indonesia","argentina":"Argentina","chile":"Chile","dem-rep-congo":"DR Congo","somalia":"Somalia","kenya":"Kenya","sudan":"Sudan","chad":"Chad","haiti":"Haiti","dominican-rep":"Dominican Republic","russia":"Russia","bahamas":"Bahamas","falkland-is":"Falkland Islands (Malvinas)","norway":"Norway","greenland":"Greenland","fr-s-antarctic-lands":"French Southern Territories","timor-leste":"Timor-Leste","southafrica":"South Africa","lesotho":"Lesotho","mexico":"Mexico","uruguay":"Uruguay","brazil":"Brazil","bolivia":"Bolivia","peru":"Peru","colombia":"Colombia","panama":"Panama","costa-rica":"Costa Rica","nicaragua":"Nicaragua","honduras":"Honduras","el-salvador":"El Salvador","guatemala":"Guatemala","belize":"Belize","venezuela":"Venezuela","guyana":"Guyana","suriname":"Suriname","france":"France","ecuador":"Ecuador","puerto-rico":"Puerto Rico","jamaica":"Jamaica","cuba":"Cuba","zimbabwe":"Zimbabwe","botswana":"Botswana","namibia":"Namibia","senegal":"Senegal","mali":"Mali","mauritania":"Mauritania","benin":"Benin","niger":"Niger","nigeria":"Nigeria","cameroon":"Cameroon","togo":"Togo","ghana":"Ghana","cote-d-ivoire":"Côte d'Ivoire","guinea":"Guinea","guinea-bissau":"Guinea-Bissau","liberia":"Liberia","sierra-leone":"Sierra Leone","burkina-faso":"Burkina Faso","central-african-rep":"Central African Republic","congo":"Congo","gabon":"Gabon","eq-guinea":"Equatorial Guinea","zambia":"Zambia","malawi":"Malawi","mozambique":"Mozambique","eswatini":"Eswatini","angola":"Angola","burundi":"Burundi","israel":"Israel","lebanon":"Lebanon","madagascar":"Madagascar","palestine":"Palestine, State of","gambia":"Gambia","tunisia":"Tunisia","algeria":"Algeria","jordan":"Jordan","uae":"UAE","qatar":"Qatar","kuwait":"Kuwait","iraq":"Iraq","oman":"Oman","vanuatu":"Vanuatu","cambodia":"Cambodia","thailand":"Thailand","laos":"Laos","myanmar":"Myanmar","vietnam":"Vietnam","north-korea":"North Korea","south-korea":"South Korea","mongolia":"Mongolia","india":"India","bangladesh":"Bangladesh","bhutan":"Bhutan","nepal":"Nepal","pakistan":"Pakistan","afghanistan":"Afghanistan","tajikistan":"Tajikistan","kyrgyzstan":"Kyrgyzstan","turkmenistan":"Turkmenistan","iran":"Iran","syria":"Syria","armenia":"Armenia","sweden":"Sweden","belarus":"Belarus","ukraine":"Ukraine","poland":"Poland","austria":"Austria","hungary":"Hungary","moldova":"Moldova","romania":"Romania","lithuania":"Lithuania","latvia":"Latvia","estonia":"Estonia","germany":"Germany","bulgaria":"Bulgaria","greece":"Greece","turkey":"Türkiye","albania":"Albania","croatia":"Croatia","switzerland":"Switzerland","luxembourg":"Luxembourg","belgium":"Belgium","netherlands":"Netherlands","portugal":"Portugal","spain":"Spain","ireland":"Ireland","new-caledonia":"New Caledonia","solomon-is":"Solomon Islands","new-zealand":"New Zealand","australia":"Australia","sri-lanka":"Sri Lanka","china":"China","taiwan":"Taiwan, Province of China","italy":"Italy","denmark":"Denmark","uk":"UK","iceland":"Iceland","azerbaijan":"Azerbaijan","georgia":"Georgia","philippines":"Philippines","malaysia":"Malaysia","brunei":"Brunei Darussalam","slovenia":"Slovenia","finland":"Finland","slovakia":"Slovakia","czechia":"Czech Republic","eritrea":"Eritrea","japan":"Japan","paraguay":"Paraguay","yemen":"Yemen","saudi-arabia":"Saudi Arabia","antarctica":"Antarctica","cyprus":"Cyprus","morocco":"Morocco","egypt":"Egypt","libya":"Libya","ethiopia":"Ethiopia","djibouti":"Djibouti","uganda":"Uganda","rwanda":"Rwanda","bosnia-and-herz":"Bosnia and Herzegovina","north-macedonia":"North Macedonia","serbia":"Serbia","montenegro":"Montenegro","trinidad-and-tobago":"Trinidad and Tobago","s-sudan":"South Sudan","kosovo":"Kosovo"};

// Coğrafi kıta sınıflandırması — liste görünümündeki kıta filtresi için kullanılır.
175
const COUNTRY_CONTINENT = {"fiji":"Okyanusya","tanzania":"Afrika","canada":"Kuzey Amerika","usa":"Kuzey Amerika","kazakhstan":"Asya","uzbekistan":"Asya","papua-new-guinea":"Okyanusya","indonesia":"Asya","argentina":"Güney Amerika","chile":"Güney Amerika","dem-rep-congo":"Afrika","somalia":"Afrika","kenya":"Afrika","sudan":"Afrika","chad":"Afrika","haiti":"Kuzey Amerika","dominican-rep":"Kuzey Amerika","russia":"Avrupa","bahamas":"Kuzey Amerika","falkland-is":"Güney Amerika","norway":"Avrupa","greenland":"Kuzey Amerika","fr-s-antarctic-lands":"Afrika","southafrica":"Afrika","lesotho":"Afrika","mexico":"Kuzey Amerika","uruguay":"Güney Amerika","brazil":"Güney Amerika","bolivia":"Güney Amerika","peru":"Güney Amerika","colombia":"Güney Amerika","panama":"Kuzey Amerika","costa-rica":"Kuzey Amerika","nicaragua":"Kuzey Amerika","honduras":"Kuzey Amerika","el-salvador":"Kuzey Amerika","guatemala":"Kuzey Amerika","belize":"Kuzey Amerika","venezuela":"Güney Amerika","guyana":"Güney Amerika","suriname":"Güney Amerika","france":"Avrupa","ecuador":"Güney Amerika","puerto-rico":"Kuzey Amerika","jamaica":"Kuzey Amerika","cuba":"Kuzey Amerika","zimbabwe":"Afrika","botswana":"Afrika","namibia":"Afrika","senegal":"Afrika","mali":"Afrika","mauritania":"Afrika","benin":"Afrika","niger":"Afrika","nigeria":"Afrika","cameroon":"Afrika","togo":"Afrika","ghana":"Afrika","cote-d-ivoire":"Afrika","guinea":"Afrika","guinea-bissau":"Afrika","liberia":"Afrika","sierra-leone":"Afrika","burkina-faso":"Afrika","central-african-rep":"Afrika","congo":"Afrika","gabon":"Afrika","eq-guinea":"Afrika","zambia":"Afrika","malawi":"Afrika","mozambique":"Afrika","eswatini":"Afrika","angola":"Afrika","burundi":"Afrika","israel":"Asya","lebanon":"Asya","madagascar":"Afrika","palestine":"Asya","gambia":"Afrika","tunisia":"Afrika","algeria":"Afrika","jordan":"Asya","uae":"Asya","qatar":"Asya","kuwait":"Asya","iraq":"Asya","oman":"Asya","vanuatu":"Okyanusya","cambodia":"Asya","thailand":"Asya","laos":"Asya","myanmar":"Asya","vietnam":"Asya","north-korea":"Asya","south-korea":"Asya","mongolia":"Asya","india":"Asya","bangladesh":"Asya","bhutan":"Asya","nepal":"Asya","pakistan":"Asya","afghanistan":"Asya","tajikistan":"Asya","kyrgyzstan":"Asya","turkmenistan":"Asya","iran":"Asya","syria":"Asya","armenia":"Asya","sweden":"Avrupa","belarus":"Avrupa","ukraine":"Avrupa","poland":"Avrupa","austria":"Avrupa","hungary":"Avrupa","moldova":"Avrupa","romania":"Avrupa","lithuania":"Avrupa","latvia":"Avrupa","estonia":"Avrupa","germany":"Avrupa","bulgaria":"Avrupa","greece":"Avrupa","turkey":"Asya","albania":"Avrupa","croatia":"Avrupa","switzerland":"Avrupa","luxembourg":"Avrupa","belgium":"Avrupa","netherlands":"Avrupa","portugal":"Avrupa","spain":"Avrupa","ireland":"Avrupa","new-caledonia":"Okyanusya","solomon-is":"Okyanusya","new-zealand":"Okyanusya","australia":"Okyanusya","sri-lanka":"Asya","china":"Asya","taiwan":"Asya","italy":"Avrupa","denmark":"Avrupa","uk":"Avrupa","iceland":"Avrupa","azerbaijan":"Asya","georgia":"Asya","philippines":"Asya","malaysia":"Asya","brunei":"Asya","slovenia":"Avrupa","finland":"Avrupa","slovakia":"Avrupa","czechia":"Avrupa","eritrea":"Afrika","japan":"Asya","paraguay":"Güney Amerika","yemen":"Asya","saudi-arabia":"Asya","antarctica":"Okyanusya","cyprus":"Asya","morocco":"Afrika","egypt":"Afrika","libya":"Afrika","ethiopia":"Afrika","djibouti":"Afrika","uganda":"Afrika","rwanda":"Afrika","bosnia-and-herz":"Avrupa","north-macedonia":"Avrupa","serbia":"Avrupa","montenegro":"Avrupa","kosovo":"Avrupa","trinidad-and-tobago":"Kuzey Amerika","s-sudan":"Afrika","w-sahara":"Afrika","timor-leste":"Asya"};

function isoToFlag(iso){
  if(!iso || iso.length!==2) return '🏳️';
  return iso.toUpperCase().replace(/./g, ch => String.fromCodePoint(ch.charCodeAt(0)+127397));
}
function hashSeed(str){
  let h = 2166136261;
  for(let i=0;i<str.length;i++){ h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function mulberry32(seed){
  return function(){
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const POLITICAL_RISK_LEVELS = ['Çok düşük','Düşük','Düşük-Orta','Orta','Orta-Yüksek'];
const FILLER_SUPPLIERS = ['Çin','İtalya','Almanya','Polonya','Vietnam','Hindistan','Malezya','İspanya','Endonezya'];

const REGION_MAP = {"AE":"mideast","AF":"southasia","AL":"europe","AM":"cis","AO":"africa","AQ":"other","AR":"latam","AT":"europe","AU":"oceania","AZ":"cis","BA":"europe","BD":"southasia","BE":"europe","BF":"africa","BG":"europe","BI":"africa","BJ":"africa","BN":"seasia","BO":"latam","BR":"latam","BS":"namerica","BT":"southasia","BW":"africa","BY":"cis","BZ":"namerica","CA":"namerica","CD":"africa","CF":"africa","CG":"africa","CH":"europe","CI":"africa","CL":"latam","CM":"africa","CN":"eastasia","CN-TW":"eastasia","CO":"latam","CR":"namerica","CU":"namerica","CY":"asia_other","CZ":"europe","DE":"europe","DJ":"africa","DK":"europe","DO":"namerica","DZ":"africa","EC":"latam","EE":"europe","EG":"africa","EH":"africa","ER":"africa","ES":"europe","ET":"africa","FI":"europe","FJ":"oceania","FK":"latam","FR":"europe","GA":"africa","GB":"europe","GE":"cis","GH":"africa","GL":"namerica","GM":"africa","GN":"africa","GQ":"africa","GR":"europe","GT":"namerica","GW":"africa","GY":"latam","HN":"namerica","HR":"europe","HT":"namerica","HU":"europe","ID":"seasia","IE":"europe","IL":"mideast","IN":"southasia","IQ":"mideast","IR":"mideast","IS":"europe","IT":"europe","JM":"namerica","JO":"mideast","JP":"eastasia","KE":"africa","KG":"cis","KH":"seasia","KP":"eastasia","KR":"eastasia","KW":"mideast","KZ":"cis","LA":"seasia","LB":"mideast","LK":"southasia","LR":"africa","LS":"africa","LT":"europe","LU":"europe","LV":"europe","LY":"africa","MA":"africa","MD":"cis","ME":"europe","MG":"africa","MK":"europe","ML":"africa","MM":"seasia","MN":"eastasia","MR":"africa","MW":"africa","MX":"namerica","MY":"seasia","MZ":"africa","NA":"africa","NC":"oceania","NE":"africa","NG":"africa","NI":"namerica","NL":"europe","NO":"europe","NP":"southasia","NZ":"oceania","OM":"mideast","PA":"namerica","PE":"latam","PG":"oceania","PH":"seasia","PK":"southasia","PL":"europe","PR":"namerica","PS":"mideast","PT":"europe","PY":"latam","QA":"mideast","RO":"europe","RS":"europe","RU":"cis","RW":"africa","SA":"mideast","SB":"oceania","SD":"africa","SE":"europe","SI":"europe","SK":"europe","SL":"africa","SN":"africa","SO":"africa","SR":"latam","SS":"africa","SV":"namerica","SY":"mideast","SZ":"africa","TD":"africa","TF":"other","TG":"africa","TH":"seasia","TJ":"cis","TL":"seasia","TM":"cis","TN":"africa","TR":"mideast","TT":"namerica","TZ":"africa","UA":"cis","UG":"africa","US":"namerica","UY":"latam","UZ":"cis","VE":"latam","VN":"seasia","VU":"oceania","XK":"europe","YE":"mideast","ZA":"africa","ZM":"africa","ZW":"africa"};

const ISTANBUL_COORDS = { lat:41.0, lon:28.98 };
function haversineKm(lat1, lon1, lat2, lon2){
  const R = 6371;
  const dLat = (lat2-lat1)*Math.PI/180, dLon = (lon2-lon1)*Math.PI/180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

// AB üyesi 27 ülke — Türkiye-AB Gümrük Birliği kapsamında sanayi ürünleri (mobilya dahil) gümrüksüz girer.
const EU_27 = new Set(['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE']);

// Karayolu (TIR) ile ulaşılabilir bölgeler — Avrupa ve BDT/Kafkasya geneli, artı Orta Doğu'da
// gerçekten işleyen kara koridorlarının olduğu ülkeler. Ada ülkeler ve Körfez ülkeleri deniz/hava
// ile taşınır (pratikte TIR kullanılmıyor), bu yüzden istisna listesinde ayrıca tutulur.
const ROAD_REGIONS = new Set(['europe','cis']);
const ROAD_EXTRA_ISO = new Set(['IQ','IR','SY','JO','LB','IL','PS']); // Orta Doğu'da kara koridoru olan ülkeler
const SEA_EXCEPTION_ISO = new Set(['GB','IE','IS','MT','CY']); // "Avrupa" bölgesinde ama ada — deniz/hava kullanılır

// Gerçek, bilinen büyük limanlar (deniz taşımacılığı ülkeleri için) — coğrafi/ticari genel bilgiye dayanır.
const REAL_PORTS = {
  US:'Los Angeles/Long Beach, Savannah, New York/New Jersey', CN:'Şanghay, Ningbo-Zhoushan, Shenzhen',
  JP:'Yokohama, Tokyo, Osaka', KR:'Busan', SG:'Singapur Limanı', MY:'Port Klang, Tanjung Pelepas',
  ID:'Tanjung Priok (Jakarta)', VN:'Cat Lai (Ho Chi Minh), Hai Phong', TH:'Laem Chabang', IN:'Nhava Sheva (JNPT), Chennai',
  PK:'Karaçi', BD:'Chittagong', LK:'Kolombo', PH:'Manila', MM:'Yangon', KH:'Sihanoukville', TW:'Kaohsiung', HK:'Hong Kong Limanı',
  AE:'Jebel Ali (Dubai)', SA:'Cidde, Dammam', QA:'Hamad Limanı', KW:'Shuwaikh, Shuaiba', OM:'Sohar, Selale',
  IL:'Hayfa, Aşdod', EG:'İskenderiye, Port Said', ZA:'Durban, Cape Town', NG:'Lagos (Apapa)', KE:'Mombasa',
  TZ:'Dar es Selam', MA:'Tanger Med, Kazablanka', DZ:'Cezayir Limanı', TN:'Rades (Tunus)', LY:'Trablus, Misrata',
  GH:'Tema', SN:'Dakar', CI:'Abidjan', CM:'Douala', CD:'Matadi', MG:'Toamasina', MU:'Port Louis', MZ:'Maputo, Beira', AO:'Luanda',
  BR:'Santos', AR:'Buenos Aires', CL:'Valparaíso, San Antonio', MX:'Manzanillo, Veracruz', CA:'Vancouver, Montreal',
  PA:'Balboa, Colón', CO:'Cartagena, Buenaventura', PE:'Callao', EC:'Guayaquil', VE:'La Guaira, Puerto Cabello',
  CU:'Havana', DO:'Caucedo', JM:'Kingston', CR:'Limón', GT:'Puerto Quetzal', HN:'Puerto Cortés',
  AU:'Melbourne, Sydney', NZ:'Auckland, Tauranga', PG:'Port Moresby', FJ:'Suva',
  GB:'Felixstowe, Southampton', NL:'Rotterdam', DE:'Hamburg, Bremerhaven', FR:'Le Havre, Marsilya', BE:'Antwerp',
  IT:'Cenova, Gioia Tauro', ES:'Valencia, Algeciras', PT:'Sines, Lizbon', GR:'Pire', PL:'Gdańsk', SE:'Göteborg',
  DK:'Kopenhag, Aarhus', NO:'Oslo', FI:'Helsinki', RU:'Novorossiysk, St. Petersburg', UA:'Odessa', GE:'Poti, Batum',
  RO:'Köstence', BG:'Varna', HR:'Rijeka', CY:'Limasol', MT:'Marsaxlokk (Valletta)', IS:'Reykjavik', IE:'Dublin',
  MV:'Male', SC:'Victoria', DJ:'Cibuti Limanı', YE:'Aden, Hudeyde', SO:'Mogadişu',
};
// Denize kıyısı olmayan ülkeler — bu ülkeler için "liman" göstermek yanıltıcı olur.
const LANDLOCKED_ISO = new Set(['AF','AM','AT','AZ','BY','BO','BW','BF','BI','CF','TD','CZ','SZ','ET','HU','KZ','XK',
  'KG','LA','LS','LI','LU','MW','ML','MD','MN','ME','NP','NE','MK','PY','RW','SM','RS','SK','SI','SS','TJ','TM',
  'UG','UZ','VA','ZM','ZW','AD','BT']);

function getTransportMode(iso, region){
  if(SEA_EXCEPTION_ISO.has(iso)) return 'sea';
  if(ROAD_REGIONS.has(region) || ROAD_EXTRA_ISO.has(iso)) return 'road';
  return 'sea';
}

function generateCountryProfile(iso, name, id, lat, lon){
  const rnd = mulberry32(hashSeed(iso + id));
  const r = (a,b)=> a + rnd()*(b-a);
  const ri = (a,b)=> Math.round(r(a,b));

  // Bu ülkelerin kalıcı sivil nüfusu ve ekonomisi yok (sadece rotasyonlu bilim insanı/asker
  // barındırıyorlar) — bu yüzden nüfus/GSYH için rastgele bir sayı ÜRETMEK YERİNE dürüstçe
  // "Bilinmiyor" gösterilir. Gerçek bir mobilya pazarı değiller.
  const NO_PERMANENT_POPULATION = new Set(['antarctica', 'fr-s-antarctic-lands']);
  const hasNoRealPopulation = NO_PERMANENT_POPULATION.has(id);

  const realPop = REAL_POPULATION[id];
  const population = hasNoRealPopulation ? null : (realPop !== undefined ? realPop : ri(1, 210));
  const realGdp = REAL_GDP[id];
  const gdpPerCapita = hasNoRealPopulation ? null : (realGdp ? realGdp.gdppc : ri(900, 68000));
  const gdpB = hasNoRealPopulation ? null : (realGdp ? realGdp.gdp : Math.round(population * gdpPerCapita / 1000));
  // Asgari ücret — TradingEconomics'ten alınan gerçek veri (aylık $'a çevrilmiş) varsa kullanılır,
  // yoksa gelir seviyesiyle kabaca orantılı sentetik bir örnek değer üretilir.
  const realMinWage = REAL_MIN_WAGE_USD[id];
  const minWage = hasNoRealPopulation ? null : (realMinWage !== undefined ? realMinWage : Math.round(Math.max(35, gdpPerCapita * r(0.018, 0.032))));
  const realVat = REAL_VAT[id];
  const vat = realVat !== undefined ? realVat : ri(0, 24);
  const region = REGION_MAP[iso] || 'other';
  const isEU = EU_27.has(iso);
  const isEuropeFree = region === 'europe'; // AB + AB dışı Avrupa (EFTA/Balkan FTA ağı) — Türkiye ile büyük ölçüde gümrüksüz
  // İthalat vergisi — sadece Avrupa için gerçek (%0, Gümrük Birliği). Diğer ülkeler için artık
  // rastgele bir sayı ÜRETİLMEZ — gerçek veri gelene kadar dürüstçe "Bilinmiyor" gösterilir.
  const importTaxKnown = isEuropeFree ? 0 : null;
  const importTaxForScore = importTaxKnown !== null ? importTaxKnown : 8; // sadece iç hesaplama için nötr varsayım
  const customsDutyKnown = isEuropeFree ? '0.0' : null;
  // Veri kalitesi izleme — Gerçek / Tahmini / Bilinmiyor sisteminin temeli.
  const realGrowthSeating = REAL_IMPORT_GROWTH_SEATING[id];
  const importGrowthKnown = realGrowthSeating ? realGrowthSeating.growthPct : null;
  const dq = {
    population: hasNoRealPopulation ? 'unknown' : (realPop !== undefined ? 'real' : 'estimated'),
    gdp: hasNoRealPopulation ? 'unknown' : (realGdp ? 'real' : 'estimated'),
    vat: realVat !== undefined ? 'real' : 'estimated',
    importTax: isEuropeFree ? 'real' : 'unknown',
    minWage: hasNoRealPopulation ? 'unknown' : (realMinWage !== undefined ? 'real' : 'estimated'),
    logistics: 'estimated',
    importGrowth: importGrowthKnown !== null ? 'real' : 'unknown',
  };
  const eodb = ri(4, 189);
  // Pazar Büyüklüğü / Yıllık İthalat — bunlar aynı gerçek sayıdır (ülkenin ITC Trade Map'teki
  // yıllık toplam HS 9401.61 ithalatı). Gerçek veri yoksa KESİNLİKLE rastgele bir sayı
  // ÜRETİLMEZ — dürüstçe "Bilinmiyor" gösterilir. (Skor formülünde nötr bir sabit kullanılır,
  // ama bu asla ekranda görünmez.)
  const realSeatingData = REAL_SUPPLIERS_SEATING[id];
  const marketSizeM = realSeatingData ? realSeatingData.totalValueM : null;
  const marketSizeForScore = marketSizeM !== null ? marketSizeM : 300; // sadece iç hesaplama, asla gösterilmez
  dq.marketSize = realSeatingData ? 'real' : 'unknown';
  const annualImportsM = marketSizeM; // aynı gerçek yıllık ithalat rakamı — ayrı bir tahmin yok
  // Gerçek veri yoksa "Bilinmiyor" gösterilir — sentetik bir büyüme oranı ASLA uydurulmaz.
  // (Skor hesaplamalarında nötr bir değer olarak 0 kullanılır, ama bu görüntülenmez.)
  const importGrowth = importGrowthKnown !== null ? importGrowthKnown : 0;
  const transportMode = getTransportMode(iso, region);
  const distKm = Math.round(haversineKm(ISTANBUL_COORDS.lat, ISTANBUL_COORDS.lon, lat, lon));
  let freightCost, transitLo, transitHi, logisticsLabel, portsLabel;
  if(transportMode === 'road'){
    transitLo = Math.max(1, Math.round(distKm/550)) + 1;
    transitHi = transitLo + ri(1,3);
    freightCost = Math.round((1500 + distKm*0.9) * r(0.9,1.15));
    logisticsLabel = 'TIR';
    portsLabel = name + ' — ana kara sınır kapısı (örnek)';
  } else {
    transitLo = Math.max(5, Math.round(distKm/450)) + 3;
    transitHi = transitLo + ri(3,7);
    freightCost = Math.round((800 + distKm*0.35) * r(0.9,1.15));
    logisticsLabel = 'konteyner';
    portsLabel = LANDLOCKED_ISO.has(iso)
      ? 'Kıyısı yok — komşu ülke limanları üzerinden transit'
      : (REAL_PORTS[iso] || name + ' ana limanları');
  }
  const political = POLITICAL_RISK_LEVELS[ri(0, POLITICAL_RISK_LEVELS.length-1)];
  const currency = CURRENCY_MAP[iso] || 'USD';
  const exRate = REAL_EXCHANGE_RATE[currency] !== undefined ? REAL_EXCHANGE_RATE[currency] : (currency==='USD' ? 1 : null);

  // Turkey's share + supplier mix
  const turkeyShareNum = r(1.5, 13);
  const chinaShareNum = r(20, 46);
  const fillerA = FILLER_SUPPLIERS[ri(0, FILLER_SUPPLIERS.length-1)];
  const fillerB = FILLER_SUPPLIERS[ri(0, FILLER_SUPPLIERS.length-1)];
  const fillerAShare = r(6, 16), fillerBShare = r(4, 12);
  const otherShare = Math.max(5, 100 - chinaShareNum - turkeyShareNum - fillerAShare - fillerBShare);
  const suppliers = [
    {c:'Çin', v: Math.round(chinaShareNum)},
    {c: fillerA, v: Math.round(fillerAShare)},
    {c: fillerB, v: Math.round(fillerBShare)},
    {c:'Türkiye', v: Math.round(turkeyShareNum)},
    {c:'Diğer', v: Math.round(otherShare)}
  ];

  const importGrowth10 = []; let base = annualImportsM * 0.7;
  for(let i=0;i<10;i++){ base *= (1 + (importGrowth/100) * r(0.6,1.3)); importGrowth10.push(Math.round(base)); }
  const turkeyHistory = []; let tbase = annualImportsM * (turkeyShareNum/100) * 0.65;
  for(let i=0;i<10;i++){ tbase *= (1 + r(0.02, 0.18)); turkeyHistory.push(Math.round(tbase*10)/10); }
  const turkeyGrowth = '+' + r(3,20).toFixed(1) + '%';

  const marketScore = Math.round(Math.min(95, Math.log10(marketSizeForScore+1)*24 + importGrowth*2));
  const difficultyScore = Math.round(Math.min(95, importTaxForScore*3 + (190-eodb)/4));
  // Rekabet skoru — gerçek tedarikçi verisi varsa ana rakibin GERÇEK payını kullanır, yoksa sentetiktir.
  const realTopCompetitorShare = realSeatingData ? Math.max(...realSeatingData.suppliers.filter(s=>s.c!=='Türkiye'&&s.c!=='Diğer').map(s=>s.v), 0) : null;
  const competitionScore = Math.round(Math.min(95, realTopCompetitorShare !== null ? realTopCompetitorShare*1.6 : chinaShareNum*1.6 + fillerAShare));
  const logisticsScore = Math.round(Math.max(15, 100 - (freightCost-1000)/35 - (transitHi-8)*1.4));
  const fundamentalsScore = Math.round(Math.min(96, Math.max(20,
    marketScore*0.32 + (100-difficultyScore)*0.22 + (100-competitionScore)*0.2 + logisticsScore*0.26)));
  // Fırsat Skoru — Temel Pazar Potansiyeli asla düşürülmez; Türkiye'nin bu pazardaki GERÇEK,
  // kanıtlanmış başarısı (pay + mutlak ihracat hacmi) SADECE EK PUAN olarak eklenir. Böylece hem
  // büyük ama henüz düşük paylı pazarlar (örn. Suudi Arabistan, ABD) cezalandırılmaz, hem de
  // Türkiye'nin gerçekten yoğun çalıştığı pazarlar (Irak, Gürcistan gibi) elle seçilmiş sabit bir
  // listeye ihtiyaç duymadan otomatik olarak öne çıkar.
  let overall = fundamentalsScore;
  if(realSeatingData){
    const shareBonus = Math.min(30, realSeatingData.turkeyShare * 0.5); // %60 pay ≈ +30 puan tavanı
    const turkeyExportValueM = realSeatingData.totalValueM * realSeatingData.turkeyShare / 100;
    const volumeBonus = Math.min(20, Math.log10(turkeyExportValueM + 1) * 8); // büyük mutlak hacme ek +20'ye kadar
    overall = Math.round(fundamentalsScore + shareBonus + volumeBonus);
  }
  overall = Math.min(90, Math.max(20, overall));

  const growthTxt = dq.importGrowth === 'unknown' ? 'Bilinmiyor' : (importGrowth>=0?'+':'') + importGrowth.toFixed(1) + '%/yıl';
  const aiSummary = (dq.importGrowth === 'unknown'
    ? `${name} pazarının yıllık ithalat büyüme oranına dair doğrulanmış bir veri yok. `
    : `${name} pazarı yılda ${growthTxt} oranında ${importGrowth>=3?'büyüyor':'değişiyor'}. `) +
    `Ana tedarikçi ${suppliers[0].c} (%${suppliers[0].v}) olup, Türkiye'nin payı şu an %${suppliers[3].v} seviyesinde ve `+
    `yıllık ${turkeyGrowth} büyüyor. Lojistik maliyeti ${transportMode==='road' ? (freightCost.toLocaleString('tr-TR')+'$/TIR (karayolu)') : (freightCost.toLocaleString('tr-TR')+'$/TEU (deniz)')} ve ortalama `+
    `${transitLo}-${transitHi} gün transit süresiyle ${logisticsScore>65?'rekabetçi':'orta düzeyde'} konumda. `+
    `Genel ihracat fırsat skoru ${overall}/100 olarak hesaplanıyor.`;

  return {
    id, iso, name, flag: isoToFlag(iso), lat, lon, dq,
    population: hasNoRealPopulation ? 'Bilinmiyor' : (Math.round(population*10)/10) + 'M',
    gdp: hasNoRealPopulation ? 'Bilinmiyor' : ('$' + (gdpB>=1000 ? (Math.round(gdpB/100)/10)+'T' : gdpB+'B')),
    gdpPerCapita: hasNoRealPopulation ? 'Bilinmiyor' : ('$' + gdpPerCapita.toLocaleString('en-US')),
    minWage: hasNoRealPopulation ? 'Bilinmiyor' : ('$' + minWage),
    vat: vat + '%', importTax: importTaxKnown !== null ? importTaxKnown + '%' : 'Bilinmiyor', customsDuty: customsDutyKnown !== null ? customsDutyKnown + '%' : 'Bilinmiyor',
    fta: isEU ? 'AB-Türkiye Gümrük Birliği' : (isEuropeFree ? 'Türkiye Serbest Ticaret Anlaşması Ağı (EFTA/Balkan)' : (rnd()>0.6 ? 'Değerlendirme aşamasında' : 'FTA yok / MFN tarife')),
    logisticsCost: '$' + freightCost.toLocaleString('en-US') + ' / ' + logisticsLabel,
    transitTime: transitLo + '–' + transitHi + ' gün',
    ports: portsLabel, transportMode, distanceKm: distKm,
    currency, exchangeRate: currency==='USD' ? '—' : (exRate !== null ? `1 USD ≈ ${exRate.toFixed(2)} ${currency}` : 'Bilinmiyor'),
    eodb: eodb + ' / 190', marketSize: marketSizeM !== null ? ('$' + marketSizeM.toLocaleString('en-US') + 'M') : 'Bilinmiyor',
    annualImports: annualImportsM !== null ? ('$' + annualImportsM.toLocaleString('en-US') + 'M') : 'Bilinmiyor', importGrowth: growthTxt,
    importDataVerified: false,
    freightCost: transportMode==='road' ? ('$' + freightCost.toLocaleString('en-US') + ' / TIR') : ('$' + freightCost.toLocaleString('en-US') + ' / TEU'),
    politicalRisk: political,
    importGrowth10, suppliers, turkeyHistory,
    turkeyShare: '%' + suppliers[3].v, turkeyGrowth,
    exporters: [], certs: 'Standart uygunluk gereklilikleri uygulanır (örnek veri).',
    docs: 'Ticari fatura, menşe belgesi, taşıma belgesi (örnek veri).',
    scores: { market: Math.max(10,marketScore), difficulty: Math.max(10,difficultyScore), competition: Math.max(10,competitionScore), logistics: Math.max(10,logisticsScore), overall },
    aiSummary, buyers: []
  };
}

// Türkiye — kaynak ülke; ayrı ve özel bir hover kartı ile gösterilir (dashboard açılmaz)
const TURKEY_PROFILE = {
  name: 'Türkiye', flag: '🇹🇷',
  population: '85.8M', gdp: '$1.1T (GSYH)',
  totalExport: '$5.07B', yoyChange: '+1.8%',
  // Kaynak: Türkiye'nin toplam mobilya ihracatı (tüm HS 94 kategorileri), kullanıcı tarafından
  // sağlanan sıralama verisi + UN Comtrade 2024 toplam ihracat rakamı ($5.07B) ile hesaplanmıştır.
  // Yıllık değişim (+%1,8) gerçek 2025 verisidir — dolar bazında ihracat artışı sınırlı kalmıştır.
  exportDestinations: [
    {c:'Irak', v:13}, {c:'Almanya', v:7}, {c:'Fransa', v:5}, {c:'ABD', v:5},
    {c:'Romanya', v:4}, {c:'Diğer', v:66}
  ]
};

// WORLD_DATA'daki her ülke için (10 elle hazırlanan hariç) otomatik profil üret ve COUNTRIES'e ekle
// Türkiye'nin gerçek en büyük 5 mobilya ihracat pazarı (kullanıcı tarafından sağlanan
// gerçek ihracat sıralaması) — Fırsat Skoru hesaplamasında her koşulda öne çıkarılır.
// Fırsat Skoru formülü — kullanıcıya şeffaflık için gösterilir.
const SCORE_FORMULA_NOTE = 'Temel Skor = Pazar Büyüklüğü×%32 + (100-Giriş Zorluğu)×%22 + (100-Rekabet)×%20 + Lojistik Avantajı×%26. Türkiye\'nin bu pazardaki GERÇEK, doğrulanmış ihracat verisi varsa: +Pazar Payı Bonusu (en fazla +30) ve +İhracat Hacmi Bonusu (en fazla +20) eklenir — asla düşürülmez. Skor en fazla 90 ile sınırlıdır.';
// GERÇEK tedarikçi/pazar payı verisi — ITC Trade Map 2025, kullanıcı tarafından sağlanan
// 'ülkelerin ithalatı, tedarikçiye göre' (HS 940161 ve 940360) resmi raporlarından derlenmiştir.
// 165+166 ülke için gerçek, doğrulanmış tedarikçi payları ve Türkiye'nin gerçek konumu içerir.
const REAL_SUPPLIERS_SEATING = {"afghanistan":{"suppliers":[{"c":"Türkiye","v":58},{"c":"Çin","v":43}],"turkeyShare":58,"totalValueM":0.069},"albania":{"suppliers":[{"c":"Çin","v":40},{"c":"İtalya","v":33},{"c":"Türkiye","v":17},{"c":"Avusturya","v":2},{"c":"Romanya","v":2},{"c":"Diğer","v":6}],"turkeyShare":17,"totalValueM":7.393},"algeria":{"suppliers":[{"c":"İtalya","v":51},{"c":"Çin","v":24},{"c":"Türkiye","v":17},{"c":"İspanya","v":5},{"c":"Fransa","v":3}],"turkeyShare":17,"totalValueM":4.719},"angola":{"suppliers":[{"c":"Portekiz","v":46},{"c":"Çin","v":30},{"c":"Türkiye","v":8},{"c":"Brezilya","v":3},{"c":"Güney Afrika","v":1},{"c":"Diğer","v":12}],"turkeyShare":8,"totalValueM":8.168},"argentina":{"suppliers":[{"c":"Çin","v":36},{"c":"Brezilya","v":48},{"c":"İtalya","v":3},{"c":"ABD","v":1},{"c":"Şili","v":1},{"c":"Diğer","v":11}],"turkeyShare":0,"totalValueM":14.295},"armenia":{"suppliers":[{"c":"İtalya","v":48},{"c":"Çin","v":30},{"c":"Bulgaristan","v":8},{"c":"Portekiz","v":4},{"c":"Fransa","v":2},{"c":"Diğer","v":8}],"turkeyShare":0,"totalValueM":3.818},"australia":{"suppliers":[{"c":"Çin","v":77},{"c":"Malezya","v":6},{"c":"İtalya","v":3},{"c":"Tayland","v":3},{"c":"Diğer","v":11}],"turkeyShare":0,"totalValueM":561.356},"austria":{"suppliers":[{"c":"Almanya","v":37},{"c":"İtalya","v":8},{"c":"Macaristan","v":4},{"c":"Romanya","v":6},{"c":"Hırvatistan","v":2},{"c":"Diğer","v":43}],"turkeyShare":4,"totalValueM":260.718},"azerbaijan":{"suppliers":[{"c":"Türkiye","v":46},{"c":"İtalya","v":30},{"c":"Çin","v":8},{"c":"Romanya","v":1},{"c":"İspanya","v":4},{"c":"Diğer","v":11}],"turkeyShare":46,"totalValueM":12.681},"bahamas":{"suppliers":[{"c":"ABD","v":93},{"c":"Çin","v":1},{"c":"Kanada","v":2},{"c":"Diğer","v":4}],"turkeyShare":0,"totalValueM":12.716},"bangladesh":{"suppliers":[{"c":"Çin","v":80},{"c":"İtalya","v":15},{"c":"Türkiye","v":2},{"c":"Portekiz","v":1},{"c":"ABD","v":1},{"c":"Diğer","v":1}],"turkeyShare":2,"totalValueM":1.216},"belarus":{"suppliers":[{"c":"Türkiye","v":69},{"c":"Çin","v":19},{"c":"İtalya","v":11},{"c":"Litvanya","v":1}],"turkeyShare":69,"totalValueM":10.965},"belgium":{"suppliers":[{"c":"Çin","v":19},{"c":"Hollanda","v":13},{"c":"İtalya","v":15},{"c":"Romanya","v":6},{"c":"Litvanya","v":1},{"c":"Diğer","v":46}],"turkeyShare":2,"totalValueM":331.221},"belize":{"suppliers":[{"c":"Trinidad ve Tobago","v":32},{"c":"ABD","v":39},{"c":"Çin","v":11},{"c":"Brezilya","v":5},{"c":"Diğer","v":13}],"turkeyShare":0,"totalValueM":0.95},"benin":{"suppliers":[{"c":"Çin","v":33},{"c":"Fransa","v":3},{"c":"Türkiye","v":8},{"c":"İtalya","v":45},{"c":"Diğer","v":11}],"turkeyShare":8,"totalValueM":1.44},"chad":{"suppliers":[{"c":"Türkiye","v":74},{"c":"Çin","v":19},{"c":"İtalya","v":6},{"c":"Fransa","v":1}],"turkeyShare":74,"totalValueM":1.095},"dem-rep-congo":{"suppliers":[{"c":"Çin","v":74},{"c":"Türkiye","v":16},{"c":"Güney Afrika","v":2},{"c":"Malezya","v":2},{"c":"Brezilya","v":1},{"c":"Diğer","v":5}],"turkeyShare":16,"totalValueM":2.551},"brazil":{"suppliers":[{"c":"Çin","v":48},{"c":"İtalya","v":39},{"c":"İsviçre","v":2},{"c":"ABD","v":1},{"c":"Fransa","v":1},{"c":"Diğer","v":9}],"turkeyShare":0,"totalValueM":8.706},"brunei":{"suppliers":[{"c":"Çin","v":55},{"c":"Malezya","v":13},{"c":"Diğer","v":32}],"turkeyShare":0,"totalValueM":2.292},"china":{"suppliers":[{"c":"İtalya","v":63},{"c":"Tayland","v":12},{"c":"Fransa","v":5},{"c":"Danimarka","v":1},{"c":"Almanya","v":2},{"c":"Diğer","v":17}],"turkeyShare":0,"totalValueM":148.017},"burundi":{"suppliers":[{"c":"Kenya","v":9},{"c":"Belçika","v":3},{"c":"Güney Afrika","v":4},{"c":"Türkiye","v":18},{"c":"Çin","v":51},{"c":"Diğer","v":15}],"turkeyShare":18,"totalValueM":0.099},"bulgaria":{"suppliers":[{"c":"Çin","v":31},{"c":"Türkiye","v":18},{"c":"İtalya","v":5},{"c":"Romanya","v":6},{"c":"Sırbistan","v":8},{"c":"Diğer","v":32}],"turkeyShare":18,"totalValueM":45.349},"bosnia-and-herz":{"suppliers":[{"c":"Türkiye","v":21},{"c":"İtalya","v":6},{"c":"Romanya","v":6},{"c":"Hırvatistan","v":1},{"c":"Almanya","v":2},{"c":"Diğer","v":64}],"turkeyShare":21,"totalValueM":14.668},"colombia":{"suppliers":[{"c":"Çin","v":69},{"c":"İtalya","v":6},{"c":"İspanya","v":1},{"c":"Brezilya","v":6},{"c":"ABD","v":1},{"c":"Diğer","v":17}],"turkeyShare":0,"totalValueM":17.049},"bhutan":{"suppliers":[{"c":"Hindistan","v":93},{"c":"Çin","v":11}],"turkeyShare":0,"totalValueM":0.028},"chile":{"suppliers":[{"c":"Çin","v":74},{"c":"Brezilya","v":8},{"c":"Malezya","v":5},{"c":"Diğer","v":13}],"turkeyShare":0,"totalValueM":60.823},"canada":{"suppliers":[{"c":"ABD","v":20},{"c":"Çin","v":37},{"c":"Meksika","v":6},{"c":"İtalya","v":4},{"c":"Kamboçya","v":4},{"c":"Diğer","v":29}],"turkeyShare":0,"totalValueM":901.494},"bolivia":{"suppliers":[{"c":"Brezilya","v":83},{"c":"Çin","v":9},{"c":"Paraguay","v":1},{"c":"Kolombiya","v":1},{"c":"Diğer","v":6}],"turkeyShare":0,"totalValueM":4.109},"cambodia":{"suppliers":[{"c":"Çin","v":71},{"c":"Tayland","v":9},{"c":"Malezya","v":1},{"c":"Diğer","v":19}],"turkeyShare":0,"totalValueM":2.096},"burkina-faso":{"suppliers":[{"c":"Türkiye","v":10},{"c":"Çin","v":71},{"c":"Almanya","v":1},{"c":"İtalya","v":5},{"c":"Belçika","v":1},{"c":"Diğer","v":12}],"turkeyShare":10,"totalValueM":0.843},"cameroon":{"suppliers":[{"c":"Çin","v":53},{"c":"İtalya","v":12},{"c":"Türkiye","v":11},{"c":"Belçika","v":6},{"c":"Fransa","v":5},{"c":"Diğer","v":13}],"turkeyShare":11,"totalValueM":3.766},"central-african-rep":{"suppliers":[{"c":"Çin","v":42},{"c":"Türkiye","v":32},{"c":"İtalya","v":22},{"c":"Belçika","v":2},{"c":"Diğer","v":2}],"turkeyShare":32,"totalValueM":0.04},"congo":{"suppliers":[{"c":"Çin","v":44},{"c":"İtalya","v":22},{"c":"Türkiye","v":16},{"c":"Malezya","v":6},{"c":"Hollanda","v":3},{"c":"Diğer","v":9}],"turkeyShare":16,"totalValueM":5.215},"costa-rica":{"suppliers":[{"c":"Çin","v":46},{"c":"ABD","v":16},{"c":"İtalya","v":6},{"c":"Brezilya","v":2},{"c":"İspanya","v":3},{"c":"Diğer","v":27}],"turkeyShare":0,"totalValueM":23.061},"cote-d-ivoire":{"suppliers":[{"c":"Çin","v":36},{"c":"İtalya","v":13},{"c":"Türkiye","v":10},{"c":"Fransa","v":8},{"c":"Malezya","v":1},{"c":"Diğer","v":32}],"turkeyShare":10,"totalValueM":6.103},"croatia":{"suppliers":[{"c":"Bosna Hersek","v":31},{"c":"İtalya","v":12},{"c":"Sırbistan","v":9},{"c":"Romanya","v":5},{"c":"Çin","v":3},{"c":"Diğer","v":40}],"turkeyShare":4,"totalValueM":86.897},"cuba":{"suppliers":[{"c":"Çin","v":53},{"c":"İspanya","v":29},{"c":"Panama","v":12},{"c":"İngiltere","v":3},{"c":"Meksika","v":1},{"c":"Diğer","v":2}],"turkeyShare":1,"totalValueM":0.592},"cyprus":{"suppliers":[{"c":"Diğer","v":100}],"turkeyShare":0,"totalValueM":28.75},"czechia":{"suppliers":[{"c":"İtalya","v":4},{"c":"Romanya","v":5},{"c":"Almanya","v":7},{"c":"Çin","v":10},{"c":"Danimarka","v":1},{"c":"Diğer","v":73}],"turkeyShare":2,"totalValueM":132.072},"denmark":{"suppliers":[{"c":"Litvanya","v":16},{"c":"Çin","v":13},{"c":"Norveç","v":2},{"c":"İtalya","v":3},{"c":"Letonya","v":3},{"c":"Diğer","v":63}],"turkeyShare":1,"totalValueM":389.319},"djibouti":{"suppliers":[{"c":"Çin","v":76},{"c":"Türkiye","v":15},{"c":"Suudi Arabistan","v":5},{"c":"İngiltere","v":1},{"c":"Malezya","v":1},{"c":"Diğer","v":2}],"turkeyShare":15,"totalValueM":1.028},"dominican-rep":{"suppliers":[{"c":"Çin","v":22},{"c":"İtalya","v":40},{"c":"Meksika","v":16},{"c":"İspanya","v":2},{"c":"Brezilya","v":7},{"c":"Diğer","v":13}],"turkeyShare":1,"totalValueM":18.485},"ecuador":{"suppliers":[{"c":"Çin","v":70},{"c":"Brezilya","v":16},{"c":"ABD","v":2},{"c":"Kolombiya","v":1},{"c":"İtalya","v":1},{"c":"Diğer","v":10}],"turkeyShare":0,"totalValueM":7.926},"egypt":{"suppliers":[{"c":"İtalya","v":32},{"c":"Çin","v":13},{"c":"Romanya","v":17},{"c":"İspanya","v":3},{"c":"Fransa","v":2},{"c":"Diğer","v":33}],"turkeyShare":0,"totalValueM":3.315},"el-salvador":{"suppliers":[{"c":"Çin","v":52},{"c":"Guatemala","v":8},{"c":"ABD","v":7},{"c":"İspanya","v":5},{"c":"Brezilya","v":2},{"c":"Diğer","v":26}],"turkeyShare":0,"totalValueM":7.211},"eq-guinea":{"suppliers":[{"c":"Çin","v":35},{"c":"İspanya","v":25},{"c":"İtalya","v":16},{"c":"Türkiye","v":13},{"c":"Brezilya","v":6},{"c":"Diğer","v":5}],"turkeyShare":13,"totalValueM":1.05},"eritrea":{"suppliers":[{"c":"Suudi Arabistan","v":94},{"c":"Almanya","v":4},{"c":"Çin","v":1},{"c":"İsviçre","v":1},{"c":"Türkiye","v":1}],"turkeyShare":1,"totalValueM":0.081},"estonia":{"suppliers":[{"c":"Litvanya","v":21},{"c":"Çin","v":24},{"c":"İtalya","v":12},{"c":"İspanya","v":1},{"c":"Romanya","v":2},{"c":"Diğer","v":40}],"turkeyShare":1,"totalValueM":21.103},"eswatini":{"suppliers":[{"c":"Güney Afrika","v":99},{"c":"Norveç","v":1}],"turkeyShare":0,"totalValueM":2.692},"ethiopia":{"suppliers":[{"c":"Çin","v":73},{"c":"İtalya","v":15},{"c":"Türkiye","v":10},{"c":"ABD","v":2}],"turkeyShare":10,"totalValueM":2.089},"fiji":{"suppliers":[{"c":"Çin","v":54},{"c":"Malezya","v":24},{"c":"Diğer","v":22}],"turkeyShare":0,"totalValueM":2.236},"finland":{"suppliers":[{"c":"Estonya","v":27},{"c":"Litvanya","v":16},{"c":"Çin","v":16},{"c":"Danimarka","v":3},{"c":"İtalya","v":8},{"c":"Diğer","v":30}],"turkeyShare":1,"totalValueM":84.694},"france":{"suppliers":[{"c":"İtalya","v":29},{"c":"Çin","v":27},{"c":"Belçika","v":4},{"c":"İspanya","v":2},{"c":"Almanya","v":2},{"c":"Diğer","v":36}],"turkeyShare":1,"totalValueM":1161.974},"gabon":{"suppliers":[{"c":"Çin","v":41},{"c":"Türkiye","v":34},{"c":"İtalya","v":12},{"c":"Fransa","v":4},{"c":"İspanya","v":2},{"c":"Diğer","v":7}],"turkeyShare":34,"totalValueM":2.667},"gambia":{"suppliers":[{"c":"Türkiye","v":43},{"c":"Çin","v":17},{"c":"Almanya","v":8},{"c":"Malezya","v":7},{"c":"Norveç","v":6},{"c":"Diğer","v":19}],"turkeyShare":43,"totalValueM":0.919},"georgia":{"suppliers":[{"c":"Türkiye","v":41},{"c":"İtalya","v":14},{"c":"Çin","v":20},{"c":"Bulgaristan","v":3},{"c":"Almanya","v":2},{"c":"Diğer","v":20}],"turkeyShare":41,"totalValueM":22.29},"germany":{"suppliers":[{"c":"Çin","v":11},{"c":"Macaristan","v":6},{"c":"Danimarka","v":2},{"c":"İtalya","v":3},{"c":"Romanya","v":4},{"c":"Diğer","v":74}],"turkeyShare":3,"totalValueM":2032.51},"ghana":{"suppliers":[{"c":"Çin","v":43},{"c":"Türkiye","v":24},{"c":"İngiltere","v":10},{"c":"Almanya","v":6},{"c":"İtalya","v":6},{"c":"Diğer","v":11}],"turkeyShare":24,"totalValueM":12.284},"greece":{"suppliers":[{"c":"Bulgaristan","v":22},{"c":"Çin","v":13},{"c":"İtalya","v":13},{"c":"Türkiye","v":17},{"c":"Romanya","v":13},{"c":"Diğer","v":22}],"turkeyShare":17,"totalValueM":40.156},"greenland":{"suppliers":[{"c":"Danimarka","v":99},{"c":"Czech Republic","v":1}],"turkeyShare":0,"totalValueM":0.678},"guatemala":{"suppliers":[{"c":"Çin","v":50},{"c":"ABD","v":21},{"c":"Meksika","v":6},{"c":"El Salvador","v":5},{"c":"Brezilya","v":1},{"c":"Diğer","v":17}],"turkeyShare":1,"totalValueM":12.449},"guinea-bissau":{"suppliers":[{"c":"Portekiz","v":73},{"c":"Almanya","v":11},{"c":"Türkiye","v":9},{"c":"Çin","v":4},{"c":"Senegal","v":2},{"c":"Diğer","v":1}],"turkeyShare":9,"totalValueM":0.165},"guinea":{"suppliers":[{"c":"Türkiye","v":57},{"c":"Çin","v":18},{"c":"İtalya","v":12},{"c":"Fransa","v":4},{"c":"Almanya","v":3},{"c":"Diğer","v":6}],"turkeyShare":57,"totalValueM":5.157},"guyana":{"suppliers":[{"c":"Çin","v":19},{"c":"ABD","v":53},{"c":"Trinidad ve Tobago","v":15},{"c":"Dominik Cumhuriyeti","v":2},{"c":"Diğer","v":11}],"turkeyShare":0,"totalValueM":0.687},"haiti":{"suppliers":[{"c":"Çin","v":53},{"c":"ABD","v":20},{"c":"Dominik Cumhuriyeti","v":20},{"c":"Malezya","v":5},{"c":"Panama","v":1},{"c":"Diğer","v":1}],"turkeyShare":0,"totalValueM":0.296},"honduras":{"suppliers":[{"c":"Çin","v":44},{"c":"Guatemala","v":24},{"c":"El Salvador","v":23},{"c":"ABD","v":3},{"c":"Brezilya","v":1},{"c":"Diğer","v":5}],"turkeyShare":0,"totalValueM":13.236},"norway":{"suppliers":[{"c":"Litvanya","v":46},{"c":"Danimarka","v":2},{"c":"Estonya","v":4},{"c":"Çin","v":13},{"c":"İtalya","v":1},{"c":"Diğer","v":34}],"turkeyShare":0,"totalValueM":217.596},"malaysia":{"suppliers":[{"c":"Çin","v":78},{"c":"İtalya","v":3},{"c":"Tayland","v":4},{"c":"Endonezya","v":1},{"c":"Singapur","v":1},{"c":"Diğer","v":13}],"turkeyShare":0,"totalValueM":35.529},"mali":{"suppliers":[{"c":"Türkiye","v":50},{"c":"Çin","v":23},{"c":"Fransa","v":12},{"c":"İtalya","v":4},{"c":"ABD","v":3},{"c":"Diğer","v":8}],"turkeyShare":50,"totalValueM":1.861},"southafrica":{"suppliers":[{"c":"Çin","v":80},{"c":"İtalya","v":8},{"c":"Türkiye","v":1},{"c":"Malezya","v":1},{"c":"Mauritius","v":1},{"c":"Diğer","v":9}],"turkeyShare":1,"totalValueM":41.46},"s-sudan":{"suppliers":[{"c":"Çin","v":95},{"c":"Kenya","v":3},{"c":"Uganda","v":2}],"turkeyShare":0,"totalValueM":0.365},"togo":{"suppliers":[{"c":"Çin","v":72},{"c":"Türkiye","v":3},{"c":"Malezya","v":5},{"c":"İtalya","v":13},{"c":"Almanya","v":17}],"turkeyShare":3,"totalValueM":0.562},"north-macedonia":{"suppliers":[{"c":"Sırbistan","v":37},{"c":"Türkiye","v":26},{"c":"İtalya","v":13},{"c":"Romanya","v":11},{"c":"Bosna Hersek","v":4},{"c":"Diğer","v":9}],"turkeyShare":26,"totalValueM":9.225},"romania":{"suppliers":[{"c":"Türkiye","v":18},{"c":"Bulgaristan","v":18},{"c":"Çin","v":15},{"c":"İtalya","v":8},{"c":"Hollanda","v":1},{"c":"Diğer","v":40}],"turkeyShare":18,"totalValueM":67.191},"turkey":{"suppliers":[{"c":"İtalya","v":38},{"c":"Romanya","v":18},{"c":"Çin","v":8},{"c":"Bulgaristan","v":1},{"c":"Norveç","v":1},{"c":"Diğer","v":34}],"turkeyShare":0,"totalValueM":44.52},"south-korea":{"suppliers":[{"c":"Çin","v":80},{"c":"İtalya","v":4},{"c":"ABD","v":1},{"c":"Almanya","v":1},{"c":"Diğer","v":14}],"turkeyShare":0,"totalValueM":313.197},"uae":{"suppliers":[{"c":"Çin","v":54},{"c":"İtalya","v":23},{"c":"Türkiye","v":6},{"c":"Suudi Arabistan","v":2},{"c":"ABD","v":2},{"c":"Diğer","v":13}],"turkeyShare":6,"totalValueM":243.78},"qatar":{"suppliers":[{"c":"Çin","v":50},{"c":"İtalya","v":18},{"c":"Türkiye","v":12},{"c":"Suudi Arabistan","v":5},{"c":"Portekiz","v":3},{"c":"Diğer","v":12}],"turkeyShare":12,"totalValueM":45.613},"new-caledonia":{"suppliers":[{"c":"Çin","v":70},{"c":"Fransa","v":21},{"c":"İspanya","v":9},{"c":"İtalya","v":1}],"turkeyShare":0,"totalValueM":0.865},"peru":{"suppliers":[{"c":"Çin","v":71},{"c":"Brezilya","v":10},{"c":"Ekvador","v":2},{"c":"ABD","v":2},{"c":"İtalya","v":2},{"c":"Diğer","v":13}],"turkeyShare":0,"totalValueM":19.985},"nigeria":{"suppliers":[{"c":"Türkiye","v":45},{"c":"İtalya","v":27},{"c":"Çin","v":20},{"c":"ABD","v":1},{"c":"Romanya","v":1},{"c":"Diğer","v":6}],"turkeyShare":45,"totalValueM":26.997},"luxembourg":{"suppliers":[{"c":"Almanya","v":48},{"c":"İtalya","v":12},{"c":"Belçika","v":12},{"c":"Hollanda","v":2},{"c":"Danimarka","v":2},{"c":"Diğer","v":24}],"turkeyShare":0,"totalValueM":20.85},"sudan":{"suppliers":[{"c":"Türkiye","v":53},{"c":"İtalya","v":25},{"c":"Çin","v":10},{"c":"Suudi Arabistan","v":5},{"c":"Tayland","v":5},{"c":"Diğer","v":2}],"turkeyShare":53,"totalValueM":0.299},"kazakhstan":{"suppliers":[{"c":"İtalya","v":16},{"c":"Çin","v":16},{"c":"Türkiye","v":16},{"c":"Litvanya","v":1},{"c":"Czech Republic","v":1},{"c":"Diğer","v":50}],"turkeyShare":16,"totalValueM":31.42},"lebanon":{"suppliers":[{"c":"İtalya","v":51},{"c":"Çin","v":20},{"c":"Türkiye","v":13},{"c":"Fransa","v":4},{"c":"İngiltere","v":2},{"c":"Diğer","v":10}],"turkeyShare":13,"totalValueM":15.222},"nepal":{"suppliers":[{"c":"Çin","v":59},{"c":"Hindistan","v":23},{"c":"İngiltere","v":9},{"c":"Tayland","v":5},{"c":"Türkiye","v":2},{"c":"Diğer","v":2}],"turkeyShare":2,"totalValueM":0.707},"italy":{"suppliers":[{"c":"Sırbistan","v":28},{"c":"Romanya","v":28},{"c":"Çin","v":12},{"c":"Almanya","v":8},{"c":"Fransa","v":2},{"c":"Diğer","v":22}],"turkeyShare":2,"totalValueM":218.459},"trinidad-and-tobago":{"suppliers":[{"c":"Çin","v":49},{"c":"ABD","v":29},{"c":"Kanada","v":1},{"c":"Malezya","v":1},{"c":"İtalya","v":2},{"c":"Diğer","v":18}],"turkeyShare":8,"totalValueM":3.688},"philippines":{"suppliers":[{"c":"Çin","v":77},{"c":"İtalya","v":4},{"c":"Malezya","v":7},{"c":"Tayland","v":6},{"c":"ABD","v":1},{"c":"Diğer","v":5}],"turkeyShare":0,"totalValueM":36.32},"mongolia":{"suppliers":[{"c":"Çin","v":81},{"c":"İtalya","v":2},{"c":"Türkiye","v":4},{"c":"Güney Kore","v":3},{"c":"Diğer","v":10}],"turkeyShare":4,"totalValueM":10.821},"suriname":{"suppliers":[{"c":"Çin","v":65},{"c":"ABD","v":7},{"c":"Brezilya","v":6},{"c":"Malezya","v":5},{"c":"Türkiye","v":4},{"c":"Diğer","v":13}],"turkeyShare":4,"totalValueM":1.187},"iraq":{"suppliers":[{"c":"Türkiye","v":91},{"c":"Çin","v":6},{"c":"İtalya","v":2},{"c":"Diğer","v":1}],"turkeyShare":91,"totalValueM":129.986},"libya":{"suppliers":[{"c":"Türkiye","v":68},{"c":"İtalya","v":17},{"c":"Çin","v":11},{"c":"ABD","v":1},{"c":"Malezya","v":1},{"c":"Diğer","v":2}],"turkeyShare":68,"totalValueM":22.647},"myanmar":{"suppliers":[{"c":"Çin","v":60},{"c":"Tayland","v":24},{"c":"İtalya","v":13},{"c":"Endonezya","v":1},{"c":"Japonya","v":1},{"c":"Diğer","v":1}],"turkeyShare":0,"totalValueM":0.71},"tanzania":{"suppliers":[{"c":"Çin","v":47},{"c":"Türkiye","v":19},{"c":"Malezya","v":1},{"c":"Güney Afrika","v":11},{"c":"İspanya","v":22}],"turkeyShare":19,"totalValueM":2.381},"vietnam":{"suppliers":[{"c":"Çin","v":69},{"c":"İtalya","v":17},{"c":"Malezya","v":3},{"c":"ABD","v":2},{"c":"Fransa","v":1},{"c":"Diğer","v":8}],"turkeyShare":0,"totalValueM":25.639},"israel":{"suppliers":[{"c":"Çin","v":43},{"c":"İtalya","v":17},{"c":"Romanya","v":7},{"c":"Bulgaristan","v":1},{"c":"Danimarka","v":1},{"c":"Diğer","v":25},{"c":"Türkiye","v":6}],"turkeyShare":6,"totalValueM":112.836},"malawi":{"suppliers":[{"c":"Güney Afrika","v":19},{"c":"Fransa","v":20},{"c":"Türkiye","v":4},{"c":"Norveç","v":5},{"c":"Çin","v":25},{"c":"Diğer","v":27}],"turkeyShare":4,"totalValueM":0.366},"lesotho":{"suppliers":[{"c":"Güney Afrika","v":97},{"c":"Çin","v":3}],"turkeyShare":0,"totalValueM":2.416},"serbia":{"suppliers":[{"c":"Türkiye","v":26},{"c":"İtalya","v":19},{"c":"Romanya","v":4},{"c":"Çin","v":15},{"c":"Hırvatistan","v":1},{"c":"Diğer","v":35}],"turkeyShare":26,"totalValueM":33.923},"iran":{"suppliers":[{"c":"Türkiye","v":62},{"c":"Çin","v":18},{"c":"İtalya","v":10},{"c":"Malezya","v":9},{"c":"Diğer","v":1}],"turkeyShare":62,"totalValueM":1.885},"north-korea":{"suppliers":[{"c":"Çin","v":100}],"turkeyShare":0,"totalValueM":7.691},"niger":{"suppliers":[{"c":"Türkiye","v":8},{"c":"Çin","v":59},{"c":"Hong Kong","v":4},{"c":"Almanya","v":1},{"c":"Belçika","v":1},{"c":"Diğer","v":27}],"turkeyShare":8,"totalValueM":0.417},"iceland":{"suppliers":[{"c":"Hollanda","v":1},{"c":"Danimarka","v":7},{"c":"Litvanya","v":31},{"c":"İtalya","v":7},{"c":"Çin","v":19},{"c":"Diğer","v":35}],"turkeyShare":0,"totalValueM":17.881},"montenegro":{"suppliers":[{"c":"Sırbistan","v":49},{"c":"İtalya","v":17},{"c":"Bosna Hersek","v":12},{"c":"Türkiye","v":10},{"c":"Romanya","v":6},{"c":"Diğer","v":6}],"turkeyShare":10,"totalValueM":18.337},"kuwait":{"suppliers":[{"c":"Çin","v":64},{"c":"İtalya","v":17},{"c":"Suudi Arabistan","v":3},{"c":"Türkiye","v":3},{"c":"İspanya","v":2},{"c":"Diğer","v":11}],"turkeyShare":3,"totalValueM":48.005},"paraguay":{"suppliers":[{"c":"Brezilya","v":79},{"c":"Çin","v":6},{"c":"İtalya","v":2},{"c":"Şili","v":2},{"c":"Bolivya","v":1},{"c":"Diğer","v":10}],"turkeyShare":1,"totalValueM":6.722},"liberia":{"suppliers":[{"c":"Çin","v":46},{"c":"Türkiye","v":24},{"c":"Malezya","v":5},{"c":"ABD","v":10},{"c":"İtalya","v":1},{"c":"Diğer","v":14}],"turkeyShare":24,"totalValueM":1.64},"poland":{"suppliers":[{"c":"Diğer","v":100}],"turkeyShare":0,"totalValueM":160.889},"slovakia":{"suppliers":[{"c":"Diğer","v":100}],"turkeyShare":0,"totalValueM":29.667},"ireland":{"suppliers":[{"c":"Diğer","v":100}],"turkeyShare":0,"totalValueM":128.83},"saudi-arabia":{"suppliers":[{"c":"Çin","v":52},{"c":"İtalya","v":5},{"c":"ABD","v":5},{"c":"Türkiye","v":4},{"c":"Portekiz","v":1},{"c":"Diğer","v":33}],"turkeyShare":4,"totalValueM":360.34},"zambia":{"suppliers":[{"c":"Güney Afrika","v":77},{"c":"Çin","v":10},{"c":"Zimbabve","v":10},{"c":"Türkiye","v":1},{"c":"Diğer","v":2}],"turkeyShare":1,"totalValueM":2.162},"kenya":{"suppliers":[{"c":"Çin","v":82},{"c":"Türkiye","v":4},{"c":"Malezya","v":3},{"c":"Portekiz","v":2},{"c":"Güney Afrika","v":1},{"c":"Diğer","v":8}],"turkeyShare":4,"totalValueM":8.427},"netherlands":{"suppliers":[{"c":"Çin","v":10},{"c":"Danimarka","v":5},{"c":"Belçika","v":6},{"c":"İtalya","v":3},{"c":"Litvanya","v":3},{"c":"Diğer","v":73}],"turkeyShare":2,"totalValueM":593.203},"pakistan":{"suppliers":[{"c":"Çin","v":55},{"c":"Türkiye","v":2},{"c":"İtalya","v":5},{"c":"Diğer","v":38}],"turkeyShare":2,"totalValueM":0.21},"zimbabwe":{"suppliers":[{"c":"Güney Afrika","v":24},{"c":"Çin","v":6},{"c":"İtalya","v":15},{"c":"Türkiye","v":9},{"c":"Zambiya","v":1},{"c":"Diğer","v":45}],"turkeyShare":9,"totalValueM":2.145},"slovenia":{"suppliers":[{"c":"Diğer","v":100}],"turkeyShare":0,"totalValueM":32.428},"india":{"suppliers":[{"c":"Çin","v":27},{"c":"İtalya","v":3},{"c":"Malezya","v":17},{"c":"ABD","v":1},{"c":"Diğer","v":52}],"turkeyShare":0,"totalValueM":33.783},"palestine":{"suppliers":[{"c":"Türkiye","v":79},{"c":"Çin","v":21}],"turkeyShare":79,"totalValueM":1.723},"spain":{"suppliers":[{"c":"Çin","v":48},{"c":"Portekiz","v":11},{"c":"İtalya","v":9},{"c":"Romanya","v":4},{"c":"Fransa","v":1},{"c":"Diğer","v":27}],"turkeyShare":0,"totalValueM":294.507},"nicaragua":{"suppliers":[{"c":"El Salvador","v":47},{"c":"Çin","v":19},{"c":"Brezilya","v":4},{"c":"Meksika","v":16},{"c":"Guatemala","v":7},{"c":"Diğer","v":7}],"turkeyShare":0,"totalValueM":7.473},"moldova":{"suppliers":[{"c":"İtalya","v":20},{"c":"Türkiye","v":13},{"c":"Romanya","v":7},{"c":"Çin","v":16},{"c":"Fransa","v":1},{"c":"Diğer","v":43}],"turkeyShare":13,"totalValueM":5.889},"oman":{"suppliers":[{"c":"Çin","v":63},{"c":"Türkiye","v":13},{"c":"İtalya","v":4},{"c":"İngiltere","v":1},{"c":"Suudi Arabistan","v":2},{"c":"Diğer","v":17}],"turkeyShare":13,"totalValueM":23.66},"namibia":{"suppliers":[{"c":"Güney Afrika","v":83},{"c":"Çin","v":12},{"c":"İtalya","v":2},{"c":"Hindistan","v":1},{"c":"Diğer","v":2}],"turkeyShare":0,"totalValueM":10.891},"lithuania":{"suppliers":[{"c":"Danimarka","v":3},{"c":"İtalya","v":12},{"c":"Çin","v":7},{"c":"Estonya","v":2},{"c":"Letonya","v":5},{"c":"Diğer","v":71}],"turkeyShare":3,"totalValueM":24.064},"jordan":{"suppliers":[{"c":"Türkiye","v":58},{"c":"Çin","v":22},{"c":"İtalya","v":8},{"c":"Romanya","v":2},{"c":"Suudi Arabistan","v":2},{"c":"Diğer","v":8}],"turkeyShare":58,"totalValueM":16.274},"tunisia":{"suppliers":[{"c":"İtalya","v":47},{"c":"Türkiye","v":28},{"c":"Çin","v":11},{"c":"Portekiz","v":8},{"c":"Fransa","v":2},{"c":"Diğer","v":4}],"turkeyShare":28,"totalValueM":2.127},"kyrgyzstan":{"suppliers":[{"c":"İtalya","v":14},{"c":"Türkiye","v":35},{"c":"Çin","v":18},{"c":"Kazakistan","v":9},{"c":"Almanya","v":2},{"c":"Diğer","v":22}],"turkeyShare":35,"totalValueM":2.938},"mauritania":{"suppliers":[{"c":"Çin","v":40},{"c":"Türkiye","v":5},{"c":"İtalya","v":7},{"c":"Fas","v":35},{"c":"Diğer","v":13}],"turkeyShare":5,"totalValueM":0.14},"panama":{"suppliers":[{"c":"Çin","v":54},{"c":"İtalya","v":11},{"c":"Brezilya","v":7},{"c":"Ekvador","v":5},{"c":"ABD","v":5},{"c":"Diğer","v":18}],"turkeyShare":0,"totalValueM":16.653},"uganda":{"suppliers":[{"c":"Türkiye","v":38},{"c":"Çin","v":41},{"c":"Malezya","v":3},{"c":"İtalya","v":4},{"c":"İngiltere","v":1},{"c":"Diğer","v":13}],"turkeyShare":38,"totalValueM":2.501},"madagascar":{"suppliers":[{"c":"Çin","v":54},{"c":"Fransa","v":4},{"c":"Malezya","v":1},{"c":"İspanya","v":6},{"c":"İtalya","v":16},{"c":"Diğer","v":19}],"turkeyShare":1,"totalValueM":0.697},"new-zealand":{"suppliers":[{"c":"Çin","v":81},{"c":"İtalya","v":3},{"c":"Tayland","v":4},{"c":"Avustralya","v":1},{"c":"Malezya","v":1},{"c":"Diğer","v":10}],"turkeyShare":0,"totalValueM":93.242},"latvia":{"suppliers":[{"c":"Çin","v":25},{"c":"İtalya","v":6},{"c":"Litvanya","v":6},{"c":"Estonya","v":2},{"c":"Almanya","v":2},{"c":"Diğer","v":59}],"turkeyShare":3,"totalValueM":10.256},"yemen":{"suppliers":[{"c":"Suudi Arabistan","v":44},{"c":"Çin","v":32},{"c":"Türkiye","v":18},{"c":"Malezya","v":4},{"c":"Umman","v":3}],"turkeyShare":18,"totalValueM":0.97},"uruguay":{"suppliers":[{"c":"Brezilya","v":66},{"c":"Çin","v":23},{"c":"İtalya","v":2},{"c":"Arjantin","v":1},{"c":"Şili","v":1},{"c":"Diğer","v":7}],"turkeyShare":0,"totalValueM":24.122},"russia":{"suppliers":[{"c":"İtalya","v":65},{"c":"Çin","v":18},{"c":"Litvanya","v":6},{"c":"Türkiye","v":3},{"c":"Sırbistan","v":2},{"c":"Diğer","v":6}],"turkeyShare":3,"totalValueM":64.999},"jamaica":{"suppliers":[{"c":"Çin","v":57},{"c":"ABD","v":17},{"c":"İspanya","v":10},{"c":"Trinidad ve Tobago","v":9},{"c":"Yunanistan","v":2},{"c":"Diğer","v":5}],"turkeyShare":0,"totalValueM":6.579},"sri-lanka":{"suppliers":[{"c":"Çin","v":68},{"c":"Malezya","v":9},{"c":"Türkiye","v":8},{"c":"İtalya","v":5},{"c":"Hindistan","v":2},{"c":"Diğer","v":8}],"turkeyShare":8,"totalValueM":1.269},"senegal":{"suppliers":[{"c":"Çin","v":58},{"c":"Türkiye","v":19},{"c":"İtalya","v":9},{"c":"Fransa","v":5},{"c":"Almanya","v":1},{"c":"Diğer","v":8}],"turkeyShare":19,"totalValueM":3.212},"turkmenistan":{"suppliers":[{"c":"Türkiye","v":77},{"c":"Çin","v":10},{"c":"İspanya","v":5},{"c":"İtalya","v":4},{"c":"Romanya","v":2},{"c":"Diğer","v":2}],"turkeyShare":77,"totalValueM":3.693},"venezuela":{"suppliers":[{"c":"Çin","v":38},{"c":"İtalya","v":22},{"c":"ABD","v":12},{"c":"Brezilya","v":10},{"c":"İspanya","v":5},{"c":"Diğer","v":13}],"turkeyShare":4,"totalValueM":10.248},"hungary":{"suppliers":[{"c":"Romanya","v":7},{"c":"Çin","v":35},{"c":"İtalya","v":3},{"c":"Almanya","v":11},{"c":"Türkiye","v":3},{"c":"Diğer","v":41}],"turkeyShare":3,"totalValueM":44.173},"uk":{"suppliers":[{"c":"Çin","v":52},{"c":"İtalya","v":10},{"c":"Romanya","v":2},{"c":"Portekiz","v":1},{"c":"Litvanya","v":1},{"c":"Diğer","v":34}],"turkeyShare":1,"totalValueM":1479.547},"uzbekistan":{"suppliers":[{"c":"İtalya","v":37},{"c":"Türkiye","v":36},{"c":"Çin","v":20},{"c":"Fransa","v":1},{"c":"Estonya","v":1},{"c":"Diğer","v":5}],"turkeyShare":36,"totalValueM":12.157},"thailand":{"suppliers":[{"c":"Çin","v":82},{"c":"İtalya","v":6},{"c":"Malezya","v":3},{"c":"Norveç","v":1},{"c":"Fransa","v":1},{"c":"Diğer","v":7}],"turkeyShare":0,"totalValueM":59.311},"papua-new-guinea":{"suppliers":[{"c":"Çin","v":81},{"c":"Malezya","v":18},{"c":"Avustralya","v":1}],"turkeyShare":0,"totalValueM":1.485},"laos":{"suppliers":[{"c":"Çin","v":62},{"c":"Tayland","v":16},{"c":"Fransa","v":9},{"c":"İtalya","v":7},{"c":"İsviçre","v":5},{"c":"Diğer","v":1}],"turkeyShare":0,"totalValueM":1.138},"usa":{"suppliers":[{"c":"Çin","v":15},{"c":"Meksika","v":8},{"c":"İtalya","v":5},{"c":"Kamboçya","v":4},{"c":"Kanada","v":3},{"c":"Diğer","v":65}],"turkeyShare":0,"totalValueM":7359.594},"portugal":{"suppliers":[{"c":"İspanya","v":37},{"c":"Çin","v":19},{"c":"İtalya","v":15},{"c":"Fransa","v":3},{"c":"Romanya","v":3},{"c":"Diğer","v":23}],"turkeyShare":1,"totalValueM":75.79},"mozambique":{"suppliers":[{"c":"Çin","v":38},{"c":"Güney Afrika","v":22},{"c":"Portekiz","v":9},{"c":"Brezilya","v":15},{"c":"Malezya","v":3},{"c":"Diğer","v":13}],"turkeyShare":0,"totalValueM":2.908},"mexico":{"suppliers":[{"c":"Çin","v":56},{"c":"ABD","v":6},{"c":"İtalya","v":8},{"c":"İspanya","v":5},{"c":"Brezilya","v":2},{"c":"Diğer","v":23}],"turkeyShare":0,"totalValueM":190.144},"japan":{"suppliers":[{"c":"Çin","v":66},{"c":"İtalya","v":4},{"c":"Tayland","v":2},{"c":"Malezya","v":2},{"c":"Norveç","v":1},{"c":"Diğer","v":25}],"turkeyShare":0,"totalValueM":581.583},"vanuatu":{"suppliers":[{"c":"Çin","v":38},{"c":"Fransa","v":26},{"c":"Avustralya","v":15},{"c":"Yeni Zelanda","v":10},{"c":"Fiji","v":8},{"c":"Diğer","v":3}],"turkeyShare":0,"totalValueM":0.039},"somalia":{"suppliers":[{"c":"Türkiye","v":55},{"c":"Çin","v":43},{"c":"Malezya","v":1},{"c":"Suudi Arabistan","v":1}],"turkeyShare":55,"totalValueM":4.461},"syria":{"suppliers":[{"c":"Türkiye","v":94},{"c":"Suudi Arabistan","v":2},{"c":"Çin","v":1},{"c":"Portekiz","v":1},{"c":"İtalya","v":1},{"c":"Diğer","v":1}],"turkeyShare":94,"totalValueM":1.633},"indonesia":{"suppliers":[{"c":"Çin","v":56},{"c":"İtalya","v":5},{"c":"Malezya","v":2},{"c":"Tayland","v":1},{"c":"Diğer","v":36}],"turkeyShare":0,"totalValueM":39.421},"sierra-leone":{"suppliers":[{"c":"Türkiye","v":51},{"c":"Çin","v":20},{"c":"Almanya","v":8},{"c":"Malezya","v":8},{"c":"ABD","v":5},{"c":"Diğer","v":8}],"turkeyShare":51,"totalValueM":0.873},"tajikistan":{"suppliers":[{"c":"Türkiye","v":73},{"c":"Çin","v":24},{"c":"İtalya","v":2},{"c":"Kazakistan","v":1}],"turkeyShare":73,"totalValueM":2.163},"morocco":{"suppliers":[{"c":"İtalya","v":42},{"c":"Türkiye","v":14},{"c":"Çin","v":11},{"c":"İspanya","v":12},{"c":"Portekiz","v":5},{"c":"Diğer","v":16}],"turkeyShare":14,"totalValueM":37.891},"ukraine":{"suppliers":[{"c":"İtalya","v":53},{"c":"Fransa","v":25},{"c":"Romanya","v":7},{"c":"Çin","v":4},{"c":"Türkiye","v":4},{"c":"Diğer","v":7}],"turkeyShare":4,"totalValueM":10.763},"switzerland":{"suppliers":[{"c":"Almanya","v":21},{"c":"İtalya","v":23},{"c":"Fransa","v":4},{"c":"Danimarka","v":1},{"c":"Avusturya","v":2},{"c":"Diğer","v":49}],"turkeyShare":1,"totalValueM":422.39},"sweden":{"suppliers":[{"c":"Diğer","v":100}],"turkeyShare":0,"totalValueM":211.907},"rwanda":{"suppliers":[{"c":"Türkiye","v":14},{"c":"Çin","v":34},{"c":"Güney Afrika","v":11},{"c":"Belçika","v":1},{"c":"İngiltere","v":5},{"c":"Diğer","v":35}],"turkeyShare":14,"totalValueM":0.725},"malta":{"suppliers":[{"c":"İtalya","v":58},{"c":"Çin","v":9},{"c":"Türkiye","v":11},{"c":"İspanya","v":13},{"c":"İngiltere","v":1},{"c":"Diğer","v":8}],"turkeyShare":11,"totalValueM":11.725},"singapore":{"suppliers":[{"c":"Çin","v":39},{"c":"Malezya","v":23},{"c":"İtalya","v":18},{"c":"Fransa","v":2},{"c":"ABD","v":3},{"c":"Diğer","v":15}],"turkeyShare":0,"totalValueM":60.767},"bahrain":{"suppliers":[{"c":"Çin","v":57},{"c":"İtalya","v":18},{"c":"Suudi Arabistan","v":9},{"c":"Türkiye","v":5},{"c":"ABD","v":4},{"c":"Diğer","v":7}],"turkeyShare":5,"totalValueM":11.222},"kosovo":{"suppliers":[{"c":"Türkiye","v":49},{"c":"Slovenya","v":14},{"c":"Çin","v":12},{"c":"Almanya","v":8},{"c":"Diğer","v":17}],"turkeyShare":49,"totalValueM":13.073}};
const REAL_SUPPLIERS_WOOD = {"spain":{"suppliers":[{"c":"Çin","v":21},{"c":"Portekiz","v":8},{"c":"Fransa","v":5},{"c":"İtalya","v":15},{"c":"Litvanya","v":9},{"c":"Diğer","v":42}],"turkeyShare":1,"totalValueM":817.708},"bosnia-and-herz":{"suppliers":[{"c":"Türkiye","v":10},{"c":"Hırvatistan","v":4},{"c":"İtalya","v":3},{"c":"Almanya","v":2},{"c":"Çin","v":9},{"c":"Diğer","v":72}],"turkeyShare":10,"totalValueM":38.966},"cote-d-ivoire":{"suppliers":[{"c":"Fransa","v":11},{"c":"Çin","v":50},{"c":"İtalya","v":4},{"c":"Türkiye","v":8},{"c":"İspanya","v":1},{"c":"Diğer","v":26}],"turkeyShare":8,"totalValueM":19.515},"france":{"suppliers":[{"c":"İtalya","v":15},{"c":"Çin","v":23},{"c":"Portekiz","v":5},{"c":"Almanya","v":4},{"c":"İspanya","v":6},{"c":"Diğer","v":47}],"turkeyShare":2,"totalValueM":1506.081},"mali":{"suppliers":[{"c":"Fransa","v":83},{"c":"Türkiye","v":8},{"c":"Çin","v":2},{"c":"İtalya","v":2},{"c":"İspanya","v":1},{"c":"Diğer","v":4}],"turkeyShare":8,"totalValueM":11.035},"romania":{"suppliers":[{"c":"Bulgaristan","v":12},{"c":"İtalya","v":12},{"c":"Çin","v":8},{"c":"Türkiye","v":8},{"c":"Litvanya","v":6},{"c":"Diğer","v":54}],"turkeyShare":8,"totalValueM":256.8},"gambia":{"suppliers":[{"c":"İngiltere","v":51},{"c":"Türkiye","v":12},{"c":"İtalya","v":9},{"c":"İsviçre","v":5},{"c":"Hollanda","v":4},{"c":"Diğer","v":19}],"turkeyShare":12,"totalValueM":5.699},"zambia":{"suppliers":[{"c":"Güney Afrika","v":43},{"c":"Mısır","v":3},{"c":"Çin","v":38},{"c":"Zimbabve","v":5},{"c":"Brezilya","v":1},{"c":"Diğer","v":10}],"turkeyShare":1,"totalValueM":5.967},"japan":{"suppliers":[{"c":"Çin","v":52},{"c":"Malezya","v":8},{"c":"Endonezya","v":6},{"c":"Tayland","v":2},{"c":"İtalya","v":2},{"c":"Diğer","v":30}],"turkeyShare":0,"totalValueM":869.89},"iraq":{"suppliers":[{"c":"Türkiye","v":51},{"c":"Mısır","v":25},{"c":"Çin","v":15},{"c":"İtalya","v":5},{"c":"Malezya","v":2},{"c":"Diğer","v":2}],"turkeyShare":51,"totalValueM":200.705},"el-salvador":{"suppliers":[{"c":"Çin","v":32},{"c":"Guatemala","v":18},{"c":"Brezilya","v":15},{"c":"Kolombiya","v":7},{"c":"İspanya","v":2},{"c":"Diğer","v":26}],"turkeyShare":0,"totalValueM":14.87},"cuba":{"suppliers":[{"c":"İspanya","v":45},{"c":"İsviçre","v":27},{"c":"Çin","v":9},{"c":"Panama","v":8},{"c":"İtalya","v":4},{"c":"Diğer","v":7}],"turkeyShare":0,"totalValueM":3.515},"egypt":{"suppliers":[{"c":"İtalya","v":27},{"c":"Hollanda","v":12},{"c":"Çin","v":10},{"c":"Yunanistan","v":2},{"c":"Türkiye","v":7},{"c":"Diğer","v":42}],"turkeyShare":7,"totalValueM":24.48},"central-african-rep":{"suppliers":[{"c":"Fransa","v":34},{"c":"İtalya","v":23},{"c":"Türkiye","v":20},{"c":"Burkina Faso","v":9},{"c":"Belçika","v":7},{"c":"Diğer","v":7}],"turkeyShare":20,"totalValueM":0.127},"tunisia":{"suppliers":[{"c":"Fransa","v":31},{"c":"Türkiye","v":14},{"c":"İtalya","v":13},{"c":"İspanya","v":12},{"c":"Mısır","v":6},{"c":"Diğer","v":24}],"turkeyShare":14,"totalValueM":3.95},"bhutan":{"suppliers":[{"c":"Hindistan","v":60},{"c":"Çin","v":33},{"c":"İsviçre","v":1},{"c":"Tayland","v":2},{"c":"Diğer","v":4}],"turkeyShare":0,"totalValueM":1.635},"mauritania":{"suppliers":[{"c":"Fas","v":7},{"c":"Fransa","v":3},{"c":"Türkiye","v":37},{"c":"Çin","v":36},{"c":"İspanya","v":10},{"c":"Diğer","v":7}],"turkeyShare":37,"totalValueM":2.785},"bangladesh":{"suppliers":[{"c":"Çin","v":64},{"c":"İtalya","v":16},{"c":"İsviçre","v":9},{"c":"İspanya","v":2},{"c":"Hindistan","v":2},{"c":"Diğer","v":7}],"turkeyShare":0,"totalValueM":1.21},"estonia":{"suppliers":[{"c":"Letonya","v":4},{"c":"Litvanya","v":11},{"c":"İtalya","v":8},{"c":"Almanya","v":6},{"c":"Çin","v":15},{"c":"Diğer","v":56}],"turkeyShare":3,"totalValueM":29.313},"south-korea":{"suppliers":[{"c":"Çin","v":71},{"c":"İtalya","v":5},{"c":"Endonezya","v":3},{"c":"Danimarka","v":2},{"c":"ABD","v":1},{"c":"Diğer","v":18}],"turkeyShare":0,"totalValueM":221.597},"peru":{"suppliers":[{"c":"Çin","v":39},{"c":"Brezilya","v":31},{"c":"Malezya","v":8},{"c":"Kolombiya","v":5},{"c":"İspanya","v":2},{"c":"Diğer","v":15}],"turkeyShare":0,"totalValueM":21.486},"uruguay":{"suppliers":[{"c":"Brezilya","v":56},{"c":"Çin","v":24},{"c":"Endonezya","v":5},{"c":"ABD","v":0},{"c":"İtalya","v":1},{"c":"Diğer","v":14}],"turkeyShare":0,"totalValueM":25.56},"southafrica":{"suppliers":[{"c":"Çin","v":50},{"c":"Hindistan","v":7},{"c":"Malezya","v":6},{"c":"İsviçre","v":4},{"c":"İtalya","v":5},{"c":"Diğer","v":28}],"turkeyShare":1,"totalValueM":52.172},"rwanda":{"suppliers":[{"c":"Belçika","v":1},{"c":"Almanya","v":16},{"c":"Güney Afrika","v":4},{"c":"Çin","v":44},{"c":"Kenya","v":2},{"c":"Diğer","v":33}],"turkeyShare":4,"totalValueM":7.211},"sri-lanka":{"suppliers":[{"c":"Çin","v":55},{"c":"İsviçre","v":15},{"c":"Singapur","v":6},{"c":"İtalya","v":4},{"c":"Hindistan","v":4},{"c":"Diğer","v":16}],"turkeyShare":3,"totalValueM":3.646},"lesotho":{"suppliers":[{"c":"Güney Afrika","v":90},{"c":"Çin","v":9},{"c":"Diğer","v":1}],"turkeyShare":0,"totalValueM":1.767},"moldova":{"suppliers":[{"c":"Romanya","v":7},{"c":"Türkiye","v":14},{"c":"İtalya","v":6},{"c":"Çin","v":10},{"c":"Almanya","v":1},{"c":"Diğer","v":62}],"turkeyShare":14,"totalValueM":13.442},"guinea-bissau":{"suppliers":[{"c":"Türkiye","v":53},{"c":"Portekiz","v":29},{"c":"İtalya","v":7},{"c":"Senegal","v":4},{"c":"İspanya","v":3},{"c":"Diğer","v":4}],"turkeyShare":53,"totalValueM":1.109},"philippines":{"suppliers":[{"c":"Çin","v":65},{"c":"Malezya","v":12},{"c":"Japonya","v":9},{"c":"İtalya","v":1},{"c":"Güney Kore","v":6},{"c":"Diğer","v":7}],"turkeyShare":0,"totalValueM":100.646},"burkina-faso":{"suppliers":[{"c":"Fransa","v":3},{"c":"İtalya","v":2},{"c":"Belçika","v":1},{"c":"Türkiye","v":5},{"c":"Çin","v":75},{"c":"Diğer","v":14}],"turkeyShare":5,"totalValueM":5.922},"australia":{"suppliers":[{"c":"Çin","v":71},{"c":"Malezya","v":3},{"c":"Endonezya","v":4},{"c":"Hindistan","v":3},{"c":"İtalya","v":2},{"c":"Diğer","v":17}],"turkeyShare":0,"totalValueM":556.158},"north-macedonia":{"suppliers":[{"c":"Bulgaristan","v":32},{"c":"Türkiye","v":24},{"c":"Sırbistan","v":23},{"c":"Yunanistan","v":4},{"c":"İsviçre","v":3},{"c":"Diğer","v":14}],"turkeyShare":24,"totalValueM":15.986},"lebanon":{"suppliers":[{"c":"İtalya","v":27},{"c":"Çin","v":19},{"c":"Türkiye","v":17},{"c":"Fransa","v":10},{"c":"Mısır","v":8},{"c":"Diğer","v":19}],"turkeyShare":17,"totalValueM":15.082},"canada":{"suppliers":[{"c":"ABD","v":7},{"c":"Çin","v":40},{"c":"İtalya","v":8},{"c":"Litvanya","v":2},{"c":"Hindistan","v":3},{"c":"Diğer","v":40}],"turkeyShare":1,"totalValueM":781.455},"luxembourg":{"suppliers":[{"c":"Almanya","v":43},{"c":"İtalya","v":9},{"c":"Belçika","v":12},{"c":"Fransa","v":7},{"c":"Portekiz","v":2},{"c":"Diğer","v":27}],"turkeyShare":0,"totalValueM":48.383},"somalia":{"suppliers":[{"c":"Türkiye","v":52},{"c":"Çin","v":41},{"c":"Uganda","v":3},{"c":"İngiltere","v":1},{"c":"Mısır","v":1},{"c":"Diğer","v":2}],"turkeyShare":52,"totalValueM":4.211},"new-caledonia":{"suppliers":[{"c":"Fransa","v":52},{"c":"Çin","v":20},{"c":"Endonezya","v":8},{"c":"İtalya","v":7},{"c":"Malezya","v":7},{"c":"Diğer","v":6}],"turkeyShare":0,"totalValueM":2.186},"albania":{"suppliers":[{"c":"Çin","v":29},{"c":"İtalya","v":25},{"c":"Türkiye","v":14},{"c":"Yunanistan","v":12},{"c":"Bulgaristan","v":5},{"c":"Diğer","v":15}],"turkeyShare":14,"totalValueM":16.811},"armenia":{"suppliers":[{"c":"İtalya","v":42},{"c":"Çin","v":21},{"c":"Litvanya","v":4},{"c":"Gürcistan","v":4},{"c":"Yunanistan","v":4},{"c":"Diğer","v":25}],"turkeyShare":0,"totalValueM":6.069},"ghana":{"suppliers":[{"c":"Çin","v":25},{"c":"İngiltere","v":24},{"c":"ABD","v":13},{"c":"İtalya","v":13},{"c":"Türkiye","v":9},{"c":"Diğer","v":16}],"turkeyShare":9,"totalValueM":36.619},"jamaica":{"suppliers":[{"c":"Çin","v":33},{"c":"İngiltere","v":28},{"c":"Kolombiya","v":16},{"c":"ABD","v":8},{"c":"İspanya","v":8},{"c":"Diğer","v":7}],"turkeyShare":0,"totalValueM":18.263},"montenegro":{"suppliers":[{"c":"Sırbistan","v":56},{"c":"Türkiye","v":12},{"c":"İtalya","v":10},{"c":"İspanya","v":9},{"c":"Bosna Hersek","v":5},{"c":"Diğer","v":8}],"turkeyShare":12,"totalValueM":33.765},"benin":{"suppliers":[{"c":"İtalya","v":49},{"c":"Çin","v":23},{"c":"Fransa","v":6},{"c":"İngiltere","v":1},{"c":"Belçika","v":1},{"c":"Diğer","v":20}],"turkeyShare":1,"totalValueM":3.241},"iceland":{"suppliers":[{"c":"Litvanya","v":31},{"c":"Danimarka","v":12},{"c":"Almanya","v":4},{"c":"Hollanda","v":3},{"c":"Estonya","v":4},{"c":"Diğer","v":46}],"turkeyShare":0,"totalValueM":42.861},"russia":{"suppliers":[{"c":"İtalya","v":51},{"c":"Çin","v":24},{"c":"Türkiye","v":5},{"c":"Sırbistan","v":4},{"c":"Litvanya","v":4},{"c":"Diğer","v":12}],"turkeyShare":5,"totalValueM":94.078},"jordan":{"suppliers":[{"c":"Türkiye","v":46},{"c":"Çin","v":19},{"c":"İtalya","v":13},{"c":"Mısır","v":8},{"c":"Almanya","v":4},{"c":"Diğer","v":10}],"turkeyShare":46,"totalValueM":20.046},"honduras":{"suppliers":[{"c":"Çin","v":34},{"c":"Guatemala","v":19},{"c":"Brezilya","v":12},{"c":"ABD","v":11},{"c":"İspanya","v":11},{"c":"Diğer","v":13}],"turkeyShare":0,"totalValueM":8.439},"venezuela":{"suppliers":[{"c":"Çin","v":46},{"c":"İtalya","v":12},{"c":"Malezya","v":11},{"c":"Brezilya","v":11},{"c":"İspanya","v":4},{"c":"Diğer","v":16}],"turkeyShare":3,"totalValueM":16.639},"north-korea":{"suppliers":[{"c":"Çin","v":100}],"turkeyShare":0,"totalValueM":13.027},"botswana":{"suppliers":[{"c":"Güney Afrika","v":71},{"c":"Çin","v":24},{"c":"İsviçre","v":2},{"c":"Zimbabve","v":1},{"c":"Zambiya","v":1},{"c":"Diğer","v":1}],"turkeyShare":0,"totalValueM":5.783},"malawi":{"suppliers":[{"c":"Güney Afrika","v":21},{"c":"Çin","v":42},{"c":"İngiltere","v":5},{"c":"Kenya","v":4},{"c":"Diğer","v":28}],"turkeyShare":0,"totalValueM":2.286},"latvia":{"suppliers":[{"c":"Litvanya","v":17},{"c":"İtalya","v":2},{"c":"Çin","v":7},{"c":"Almanya","v":5},{"c":"Danimarka","v":5},{"c":"Diğer","v":64}],"turkeyShare":1,"totalValueM":34.091},"denmark":{"suppliers":[{"c":"Çin","v":22},{"c":"Litvanya","v":7},{"c":"Letonya","v":6},{"c":"Hollanda","v":1},{"c":"Almanya","v":3},{"c":"Diğer","v":61}],"turkeyShare":2,"totalValueM":392.57},"niger":{"suppliers":[{"c":"Türkiye","v":3},{"c":"İtalya","v":5},{"c":"Burkina Faso","v":2},{"c":"Belçika","v":14},{"c":"Fas","v":1},{"c":"Diğer","v":75}],"turkeyShare":3,"totalValueM":1.124},"vanuatu":{"suppliers":[{"c":"Avustralya","v":34},{"c":"Fiji","v":25},{"c":"Çin","v":19},{"c":"Yeni Zelanda","v":8},{"c":"Fransa","v":7},{"c":"Diğer","v":7}],"turkeyShare":0,"totalValueM":0.252},"belgium":{"suppliers":[{"c":"Hollanda","v":13},{"c":"Çin","v":25},{"c":"Almanya","v":7},{"c":"Fransa","v":9},{"c":"İtalya","v":7},{"c":"Diğer","v":39}],"turkeyShare":1,"totalValueM":569.628},"georgia":{"suppliers":[{"c":"Türkiye","v":32},{"c":"Çin","v":16},{"c":"İtalya","v":6},{"c":"Bulgaristan","v":6},{"c":"Belçika","v":1},{"c":"Diğer","v":39}],"turkeyShare":32,"totalValueM":33.518},"syria":{"suppliers":[{"c":"Mısır","v":72},{"c":"Türkiye","v":18},{"c":"Suudi Arabistan","v":3},{"c":"Çin","v":2},{"c":"İngiltere","v":2},{"c":"Diğer","v":3}],"turkeyShare":18,"totalValueM":7.877},"guyana":{"suppliers":[{"c":"Çin","v":23},{"c":"ABD","v":41},{"c":"Trinidad ve Tobago","v":4},{"c":"Brezilya","v":6},{"c":"Malezya","v":2},{"c":"Diğer","v":24}],"turkeyShare":0,"totalValueM":3.149},"argentina":{"suppliers":[{"c":"Çin","v":34},{"c":"Brezilya","v":48},{"c":"İtalya","v":1},{"c":"Almanya","v":4},{"c":"Malezya","v":1},{"c":"Diğer","v":12}],"turkeyShare":1,"totalValueM":16.623},"uk":{"suppliers":[{"c":"Çin","v":36},{"c":"Litvanya","v":8},{"c":"İtalya","v":7},{"c":"Almanya","v":3},{"c":"Fransa","v":1},{"c":"Diğer","v":45}],"turkeyShare":2,"totalValueM":1823.745},"bahamas":{"suppliers":[{"c":"ABD","v":84},{"c":"Kanada","v":1},{"c":"İtalya","v":3},{"c":"İngiltere","v":1},{"c":"Çin","v":3},{"c":"Diğer","v":8}],"turkeyShare":0,"totalValueM":32.685},"nicaragua":{"suppliers":[{"c":"Kolombiya","v":19},{"c":"Guatemala","v":12},{"c":"Çin","v":22},{"c":"ABD","v":11},{"c":"Brezilya","v":21},{"c":"Diğer","v":15}],"turkeyShare":0,"totalValueM":5.069},"saudi-arabia":{"suppliers":[{"c":"Çin","v":36},{"c":"Malezya","v":6},{"c":"İtalya","v":8},{"c":"Türkiye","v":5},{"c":"Hindistan","v":4},{"c":"Diğer","v":41}],"turkeyShare":5,"totalValueM":244.359},"uganda":{"suppliers":[{"c":"Türkiye","v":11},{"c":"Çin","v":65},{"c":"İtalya","v":1},{"c":"İngiltere","v":2},{"c":"Kenya","v":2},{"c":"Diğer","v":19}],"turkeyShare":11,"totalValueM":7.633},"burundi":{"suppliers":[{"c":"Belçika","v":2},{"c":"Burkina Faso","v":3},{"c":"Kenya","v":2},{"c":"Fildişi Sahili","v":1},{"c":"Çin","v":75},{"c":"Diğer","v":17}],"turkeyShare":0,"totalValueM":0.956},"israel":{"suppliers":[{"c":"Çin","v":32},{"c":"İtalya","v":21},{"c":"Litvanya","v":6},{"c":"İspanya","v":3},{"c":"Bulgaristan","v":2},{"c":"Diğer","v":31},{"c":"Türkiye","v":5}],"turkeyShare":5,"totalValueM":177.279},"fiji":{"suppliers":[{"c":"Çin","v":56},{"c":"Yeni Zelanda","v":5},{"c":"Endonezya","v":4},{"c":"Malezya","v":9},{"c":"Avustralya","v":7},{"c":"Diğer","v":19}],"turkeyShare":0,"totalValueM":6.34},"oman":{"suppliers":[{"c":"Çin","v":42},{"c":"Mısır","v":2},{"c":"Malezya","v":10},{"c":"Hindistan","v":8},{"c":"İngiltere","v":2},{"c":"Diğer","v":36}],"turkeyShare":4,"totalValueM":24.759},"dominican-rep":{"suppliers":[{"c":"Çin","v":26},{"c":"Meksika","v":28},{"c":"İspanya","v":22},{"c":"ABD","v":2},{"c":"Brezilya","v":5},{"c":"Diğer","v":17}],"turkeyShare":0,"totalValueM":47.607},"ireland":{"suppliers":[{"c":"Diğer","v":100}],"turkeyShare":0,"totalValueM":129.621},"bolivia":{"suppliers":[{"c":"Brezilya","v":72},{"c":"Arjantin","v":1},{"c":"Kolombiya","v":10},{"c":"Çin","v":7},{"c":"Peru","v":6},{"c":"Diğer","v":4}],"turkeyShare":0,"totalValueM":2.08},"liberia":{"suppliers":[{"c":"Çin","v":61},{"c":"Türkiye","v":17},{"c":"ABD","v":6},{"c":"Brezilya","v":4},{"c":"Diğer","v":12}],"turkeyShare":17,"totalValueM":2.32},"kuwait":{"suppliers":[{"c":"Çin","v":41},{"c":"İtalya","v":18},{"c":"Malezya","v":7},{"c":"Türkiye","v":5},{"c":"Litvanya","v":4},{"c":"Diğer","v":25}],"turkeyShare":5,"totalValueM":43.026},"uzbekistan":{"suppliers":[{"c":"İtalya","v":55},{"c":"Türkiye","v":22},{"c":"Çin","v":18},{"c":"Almanya","v":2},{"c":"Romanya","v":0},{"c":"Diğer","v":3}],"turkeyShare":22,"totalValueM":23.424},"belize":{"suppliers":[{"c":"ABD","v":32},{"c":"Çin","v":12},{"c":"Guatemala","v":17},{"c":"Brezilya","v":2},{"c":"Trinidad ve Tobago","v":3},{"c":"Diğer","v":34}],"turkeyShare":0,"totalValueM":0.743},"netherlands":{"suppliers":[{"c":"Çin","v":14},{"c":"Almanya","v":15},{"c":"Belçika","v":11},{"c":"Romanya","v":5},{"c":"Hindistan","v":5},{"c":"Diğer","v":50}],"turkeyShare":2,"totalValueM":977.979},"turkmenistan":{"suppliers":[{"c":"Türkiye","v":61},{"c":"Almanya","v":17},{"c":"Çin","v":11},{"c":"İtalya","v":4},{"c":"İspanya","v":3},{"c":"Diğer","v":4}],"turkeyShare":61,"totalValueM":8.574},"kenya":{"suppliers":[{"c":"Çin","v":63},{"c":"İngiltere","v":2},{"c":"Türkiye","v":5},{"c":"Malezya","v":4},{"c":"Hindistan","v":2},{"c":"Diğer","v":24}],"turkeyShare":5,"totalValueM":18.46},"india":{"suppliers":[{"c":"Çin","v":52},{"c":"İtalya","v":5},{"c":"Malezya","v":15},{"c":"Singapur","v":11},{"c":"Endonezya","v":4},{"c":"Diğer","v":13}],"turkeyShare":0,"totalValueM":74.124},"vietnam":{"suppliers":[{"c":"Çin","v":64},{"c":"Hindistan","v":12},{"c":"İtalya","v":8},{"c":"Singapur","v":4},{"c":"Malezya","v":4},{"c":"Diğer","v":8}],"turkeyShare":0,"totalValueM":63.863},"lithuania":{"suppliers":[{"c":"Letonya","v":8},{"c":"Almanya","v":4},{"c":"İtalya","v":6},{"c":"Danimarka","v":2},{"c":"Çin","v":2},{"c":"Diğer","v":78}],"turkeyShare":2,"totalValueM":58.844},"guinea":{"suppliers":[{"c":"Türkiye","v":33},{"c":"Fransa","v":21},{"c":"Çin","v":15},{"c":"İngiltere","v":9},{"c":"İtalya","v":4},{"c":"Diğer","v":18}],"turkeyShare":33,"totalValueM":9.504},"iran":{"suppliers":[{"c":"Türkiye","v":42},{"c":"Çin","v":27},{"c":"Malezya","v":18},{"c":"İtalya","v":6},{"c":"Fransa","v":4},{"c":"Diğer","v":3}],"turkeyShare":42,"totalValueM":3.945},"madagascar":{"suppliers":[{"c":"Çin","v":35},{"c":"Fransa","v":6},{"c":"Brezilya","v":3},{"c":"Malezya","v":1},{"c":"Portekiz","v":2},{"c":"Diğer","v":53}],"turkeyShare":1,"totalValueM":4.845},"azerbaijan":{"suppliers":[{"c":"Türkiye","v":47},{"c":"İtalya","v":15},{"c":"Çin","v":9},{"c":"Almanya","v":1},{"c":"Hırvatistan","v":1},{"c":"Diğer","v":27}],"turkeyShare":47,"totalValueM":25.263},"finland":{"suppliers":[{"c":"Estonya","v":17},{"c":"Danimarka","v":9},{"c":"Litvanya","v":9},{"c":"Almanya","v":2},{"c":"İtalya","v":7},{"c":"Diğer","v":56}],"turkeyShare":1,"totalValueM":118.53},"slovenia":{"suppliers":[{"c":"Diğer","v":100}],"turkeyShare":0,"totalValueM":53.041},"guatemala":{"suppliers":[{"c":"Çin","v":20},{"c":"Brezilya","v":10},{"c":"Kolombiya","v":8},{"c":"ABD","v":32},{"c":"Meksika","v":4},{"c":"Diğer","v":26}],"turkeyShare":1,"totalValueM":23.562},"tanzania":{"suppliers":[{"c":"Çin","v":41},{"c":"Türkiye","v":4},{"c":"Güney Afrika","v":10},{"c":"Fas","v":7},{"c":"Endonezya","v":3},{"c":"Diğer","v":35}],"turkeyShare":4,"totalValueM":11.217},"algeria":{"suppliers":[{"c":"Mısır","v":32},{"c":"Çin","v":18},{"c":"İspanya","v":16},{"c":"İtalya","v":9},{"c":"Türkiye","v":9},{"c":"Diğer","v":16}],"turkeyShare":9,"totalValueM":13.023},"djibouti":{"suppliers":[{"c":"Çin","v":53},{"c":"Türkiye","v":19},{"c":"Fransa","v":7},{"c":"İngiltere","v":6},{"c":"İtalya","v":6},{"c":"Diğer","v":9}],"turkeyShare":19,"totalValueM":1.913},"bulgaria":{"suppliers":[{"c":"Çin","v":15},{"c":"Romanya","v":10},{"c":"Türkiye","v":8},{"c":"İtalya","v":6},{"c":"Almanya","v":4},{"c":"Diğer","v":57}],"turkeyShare":8,"totalValueM":111.707},"yemen":{"suppliers":[{"c":"Çin","v":56},{"c":"Mısır","v":30},{"c":"Türkiye","v":9},{"c":"Suudi Arabistan","v":2},{"c":"ABD","v":1},{"c":"Diğer","v":2}],"turkeyShare":9,"totalValueM":1.913},"greece":{"suppliers":[{"c":"Çin","v":15},{"c":"Bulgaristan","v":10},{"c":"İtalya","v":10},{"c":"Romanya","v":9},{"c":"Türkiye","v":8},{"c":"Diğer","v":48}],"turkeyShare":8,"totalValueM":146.779},"pakistan":{"suppliers":[{"c":"Çin","v":49},{"c":"Türkiye","v":4},{"c":"İtalya","v":2},{"c":"İngiltere","v":3},{"c":"ABD","v":1},{"c":"Diğer","v":41}],"turkeyShare":4,"totalValueM":0.975},"austria":{"suppliers":[{"c":"Almanya","v":41},{"c":"İtalya","v":9},{"c":"Czech Republic","v":2},{"c":"Litvanya","v":3},{"c":"Çin","v":5},{"c":"Diğer","v":40}],"turkeyShare":2,"totalValueM":513.174},"greenland":{"suppliers":[{"c":"Danimarka","v":98},{"c":"Letonya","v":1},{"c":"Czech Republic","v":1}],"turkeyShare":0,"totalValueM":5.687},"croatia":{"suppliers":[{"c":"Bosna Hersek","v":12},{"c":"Macaristan","v":11},{"c":"İtalya","v":11},{"c":"Sırbistan","v":6},{"c":"Romanya","v":6},{"c":"Diğer","v":54}],"turkeyShare":3,"totalValueM":131.844},"slovakia":{"suppliers":[{"c":"Diğer","v":100}],"turkeyShare":0,"totalValueM":70.24},"norway":{"suppliers":[{"c":"Danimarka","v":12},{"c":"Litvanya","v":17},{"c":"Çin","v":16},{"c":"Almanya","v":2},{"c":"Estonya","v":2},{"c":"Diğer","v":51}],"turkeyShare":1,"totalValueM":328.072},"sudan":{"suppliers":[{"c":"Mısır","v":99},{"c":"Diğer","v":1}],"turkeyShare":0,"totalValueM":45.155},"panama":{"suppliers":[{"c":"Çin","v":26},{"c":"Brezilya","v":13},{"c":"Kolombiya","v":17},{"c":"Panama","v":8},{"c":"İtalya","v":8},{"c":"Diğer","v":28}],"turkeyShare":1,"totalValueM":40.793},"cyprus":{"suppliers":[{"c":"Diğer","v":100}],"turkeyShare":0,"totalValueM":49.781},"haiti":{"suppliers":[{"c":"Çin","v":61},{"c":"Malezya","v":13},{"c":"ABD","v":11},{"c":"Dominik Cumhuriyeti","v":6},{"c":"Fransa","v":4},{"c":"Diğer","v":5}],"turkeyShare":0,"totalValueM":0.453},"brazil":{"suppliers":[{"c":"Çin","v":35},{"c":"İtalya","v":15},{"c":"Almanya","v":7},{"c":"İspanya","v":6},{"c":"Portekiz","v":1},{"c":"Diğer","v":36}],"turkeyShare":2,"totalValueM":10.174},"thailand":{"suppliers":[{"c":"Çin","v":72},{"c":"Singapur","v":6},{"c":"Malezya","v":3},{"c":"İtalya","v":6},{"c":"Endonezya","v":2},{"c":"Diğer","v":11}],"turkeyShare":0,"totalValueM":106.262},"angola":{"suppliers":[{"c":"Çin","v":35},{"c":"Portekiz","v":36},{"c":"Brezilya","v":4},{"c":"Türkiye","v":3},{"c":"Namibya","v":3},{"c":"Diğer","v":19}],"turkeyShare":3,"totalValueM":12.793},"myanmar":{"suppliers":[{"c":"Çin","v":65},{"c":"Tayland","v":22},{"c":"İtalya","v":6},{"c":"Japonya","v":2},{"c":"İsviçre","v":2},{"c":"Diğer","v":3}],"turkeyShare":0,"totalValueM":1.538},"s-sudan":{"suppliers":[{"c":"Kenya","v":78},{"c":"Uganda","v":12},{"c":"Çin","v":7},{"c":"İngiltere","v":2},{"c":"Ruanda","v":1}],"turkeyShare":0,"totalValueM":0.52},"belarus":{"suppliers":[{"c":"Türkiye","v":51},{"c":"Çin","v":26},{"c":"İtalya","v":7},{"c":"Romanya","v":6},{"c":"Czech Republic","v":2},{"c":"Diğer","v":8}],"turkeyShare":51,"totalValueM":10.77},"senegal":{"suppliers":[{"c":"Fransa","v":9},{"c":"Çin","v":57},{"c":"İtalya","v":4},{"c":"Türkiye","v":10},{"c":"Mısır","v":1},{"c":"Diğer","v":19}],"turkeyShare":10,"totalValueM":17.279},"ukraine":{"suppliers":[{"c":"Fransa","v":30},{"c":"İtalya","v":27},{"c":"Çin","v":10},{"c":"Almanya","v":10},{"c":"Türkiye","v":8},{"c":"Diğer","v":15}],"turkeyShare":8,"totalValueM":16.306},"usa":{"suppliers":[{"c":"Çin","v":13},{"c":"Meksika","v":6},{"c":"Endonezya","v":5},{"c":"Kanada","v":5},{"c":"Malezya","v":5},{"c":"Diğer","v":66}],"turkeyShare":1,"totalValueM":6433.593},"ecuador":{"suppliers":[{"c":"Brezilya","v":48},{"c":"Çin","v":32},{"c":"ABD","v":2},{"c":"Kolombiya","v":8},{"c":"İspanya","v":2},{"c":"Diğer","v":8}],"turkeyShare":0,"totalValueM":11.539},"eritrea":{"suppliers":[{"c":"Hindistan","v":39},{"c":"Danimarka","v":32},{"c":"İtalya","v":10},{"c":"Fransa","v":7},{"c":"İsviçre","v":6},{"c":"Diğer","v":6}],"turkeyShare":1,"totalValueM":0.108},"malaysia":{"suppliers":[{"c":"Çin","v":82},{"c":"Endonezya","v":5},{"c":"Litvanya","v":2},{"c":"İtalya","v":1},{"c":"Singapur","v":1},{"c":"Diğer","v":9}],"turkeyShare":0,"totalValueM":316.727},"sweden":{"suppliers":[{"c":"Diğer","v":100}],"turkeyShare":0,"totalValueM":279.75},"cameroon":{"suppliers":[{"c":"Çin","v":43},{"c":"Fransa","v":13},{"c":"İtalya","v":8},{"c":"İngiltere","v":7},{"c":"İsviçre","v":7},{"c":"Diğer","v":22}],"turkeyShare":6,"totalValueM":12.899},"afghanistan":{"suppliers":[{"c":"Türkiye","v":40},{"c":"Pakistan","v":35},{"c":"Çin","v":16},{"c":"ABD","v":9}],"turkeyShare":40,"totalValueM":0.086},"poland":{"suppliers":[{"c":"Diğer","v":100}],"turkeyShare":0,"totalValueM":380.445},"china":{"suppliers":[{"c":"İtalya","v":44},{"c":"Fransa","v":4},{"c":"Japonya","v":3},{"c":"Litvanya","v":3},{"c":"Endonezya","v":3},{"c":"Diğer","v":43}],"turkeyShare":0,"totalValueM":171.205},"cambodia":{"suppliers":[{"c":"Çin","v":81},{"c":"Tayland","v":5},{"c":"Malezya","v":1},{"c":"Japonya","v":1},{"c":"Diğer","v":12}],"turkeyShare":0,"totalValueM":10.213},"serbia":{"suppliers":[{"c":"Romanya","v":5},{"c":"Türkiye","v":14},{"c":"Macaristan","v":1},{"c":"İtalya","v":9},{"c":"Almanya","v":3},{"c":"Diğer","v":68}],"turkeyShare":14,"totalValueM":49.262},"nepal":{"suppliers":[{"c":"Çin","v":83},{"c":"Hindistan","v":15},{"c":"İsviçre","v":1},{"c":"Diğer","v":1}],"turkeyShare":0,"totalValueM":5.795},"czechia":{"suppliers":[{"c":"Almanya","v":15},{"c":"Avusturya","v":2},{"c":"İtalya","v":4},{"c":"Hollanda","v":1},{"c":"Türkiye","v":2},{"c":"Diğer","v":76}],"turkeyShare":2,"totalValueM":298.127},"palestine":{"suppliers":[{"c":"Türkiye","v":56},{"c":"Mısır","v":39},{"c":"Çin","v":5}],"turkeyShare":56,"totalValueM":7.551},"italy":{"suppliers":[{"c":"Almanya","v":12},{"c":"Çin","v":13},{"c":"Fransa","v":11},{"c":"İspanya","v":7},{"c":"Litvanya","v":8},{"c":"Diğer","v":49}],"turkeyShare":2,"totalValueM":549.567},"qatar":{"suppliers":[{"c":"Çin","v":32},{"c":"İtalya","v":20},{"c":"Türkiye","v":12},{"c":"İspanya","v":6},{"c":"Mısır","v":5},{"c":"Diğer","v":25}],"turkeyShare":12,"totalValueM":52.964},"mongolia":{"suppliers":[{"c":"Çin","v":39},{"c":"İtalya","v":10},{"c":"Güney Kore","v":7},{"c":"Türkiye","v":5},{"c":"Almanya","v":1},{"c":"Diğer","v":38}],"turkeyShare":5,"totalValueM":5.371},"congo":{"suppliers":[{"c":"İtalya","v":22},{"c":"Türkiye","v":19},{"c":"Çin","v":17},{"c":"Fransa","v":16},{"c":"Malezya","v":7},{"c":"Diğer","v":19}],"turkeyShare":19,"totalValueM":8.638},"uae":{"suppliers":[{"c":"Çin","v":35},{"c":"İtalya","v":22},{"c":"Malezya","v":6},{"c":"Hindistan","v":5},{"c":"Mısır","v":5},{"c":"Diğer","v":27}],"turkeyShare":4,"totalValueM":312.04},"mozambique":{"suppliers":[{"c":"Çin","v":54},{"c":"Güney Afrika","v":15},{"c":"Brezilya","v":9},{"c":"Portekiz","v":6},{"c":"Zimbabve","v":6},{"c":"Diğer","v":10}],"turkeyShare":1,"totalValueM":4.76},"namibia":{"suppliers":[{"c":"Güney Afrika","v":57},{"c":"Çin","v":18},{"c":"İngiltere","v":7},{"c":"Endonezya","v":5},{"c":"Hindistan","v":4},{"c":"Diğer","v":9}],"turkeyShare":0,"totalValueM":5.679},"dem-rep-congo":{"suppliers":[{"c":"Çin","v":56},{"c":"Türkiye","v":4},{"c":"Güney Afrika","v":4},{"c":"Fransa","v":1},{"c":"Brezilya","v":3},{"c":"Diğer","v":32}],"turkeyShare":4,"totalValueM":6.334},"togo":{"suppliers":[{"c":"Fransa","v":8},{"c":"Çin","v":51},{"c":"İtalya","v":12},{"c":"Türkiye","v":4},{"c":"ABD","v":6},{"c":"Diğer","v":19}],"turkeyShare":4,"totalValueM":6.821},"mexico":{"suppliers":[{"c":"Çin","v":43},{"c":"ABD","v":4},{"c":"İtalya","v":9},{"c":"Brezilya","v":4},{"c":"İspanya","v":9},{"c":"Diğer","v":31}],"turkeyShare":0,"totalValueM":174.745},"gabon":{"suppliers":[{"c":"Türkiye","v":30},{"c":"Çin","v":20},{"c":"Fransa","v":17},{"c":"İtalya","v":8},{"c":"Malezya","v":8},{"c":"Diğer","v":17}],"turkeyShare":30,"totalValueM":3.35},"trinidad-and-tobago":{"suppliers":[{"c":"ABD","v":23},{"c":"Çin","v":44},{"c":"Brezilya","v":14},{"c":"Malezya","v":5},{"c":"İtalya","v":2},{"c":"Diğer","v":12}],"turkeyShare":0,"totalValueM":9.568},"kyrgyzstan":{"suppliers":[{"c":"İtalya","v":4},{"c":"Çin","v":40},{"c":"Türkiye","v":11},{"c":"Litvanya","v":1},{"c":"Diğer","v":44}],"turkeyShare":11,"totalValueM":6.152},"nigeria":{"suppliers":[{"c":"Türkiye","v":31},{"c":"İtalya","v":29},{"c":"Çin","v":20},{"c":"İngiltere","v":7},{"c":"Mısır","v":3},{"c":"Diğer","v":10}],"turkeyShare":31,"totalValueM":37.482},"eq-guinea":{"suppliers":[{"c":"İspanya","v":61},{"c":"İtalya","v":9},{"c":"Çin","v":9},{"c":"Türkiye","v":6},{"c":"Fransa","v":4},{"c":"Diğer","v":11}],"turkeyShare":6,"totalValueM":1.868},"indonesia":{"suppliers":[{"c":"Çin","v":82},{"c":"Malezya","v":9},{"c":"İtalya","v":2},{"c":"ABD","v":1},{"c":"Diğer","v":6}],"turkeyShare":0,"totalValueM":61.345},"tajikistan":{"suppliers":[{"c":"Türkiye","v":47},{"c":"Çin","v":46},{"c":"İtalya","v":3},{"c":"Kazakistan","v":3},{"c":"Almanya","v":1}],"turkeyShare":47,"totalValueM":2.071},"paraguay":{"suppliers":[{"c":"Brezilya","v":46},{"c":"İspanya","v":3},{"c":"Çin","v":44},{"c":"Uruguay","v":1},{"c":"Diğer","v":6}],"turkeyShare":0,"totalValueM":19.059},"colombia":{"suppliers":[{"c":"Çin","v":59},{"c":"İspanya","v":1},{"c":"Brezilya","v":15},{"c":"Almanya","v":3},{"c":"İtalya","v":3},{"c":"Diğer","v":19}],"turkeyShare":0,"totalValueM":31.999},"turkey":{"suppliers":[{"c":"İtalya","v":20},{"c":"Romanya","v":5},{"c":"Litvanya","v":7},{"c":"Almanya","v":6},{"c":"İspanya","v":7},{"c":"Diğer","v":55}],"turkeyShare":0,"totalValueM":104.528},"new-zealand":{"suppliers":[{"c":"Çin","v":69},{"c":"Avustralya","v":2},{"c":"Malezya","v":2},{"c":"Endonezya","v":4},{"c":"İtalya","v":2},{"c":"Diğer","v":21}],"turkeyShare":0,"totalValueM":78.175},"chile":{"suppliers":[{"c":"Çin","v":51},{"c":"Brezilya","v":14},{"c":"İspanya","v":1},{"c":"Litvanya","v":1},{"c":"Kolombiya","v":2},{"c":"Diğer","v":31}],"turkeyShare":0,"totalValueM":73.582},"germany":{"suppliers":[{"c":"Çin","v":19},{"c":"İtalya","v":7},{"c":"Hollanda","v":2},{"c":"Romanya","v":2},{"c":"Litvanya","v":5},{"c":"Diğer","v":65}],"turkeyShare":2,"totalValueM":2768.148},"suriname":{"suppliers":[{"c":"Hollanda","v":29},{"c":"Çin","v":23},{"c":"İspanya","v":11},{"c":"Kolombiya","v":9},{"c":"Brezilya","v":6},{"c":"Diğer","v":22}],"turkeyShare":6,"totalValueM":1.601},"zimbabwe":{"suppliers":[{"c":"Güney Afrika","v":37},{"c":"Çin","v":42},{"c":"Türkiye","v":1},{"c":"İtalya","v":3},{"c":"Zambiya","v":1},{"c":"Diğer","v":16}],"turkeyShare":1,"totalValueM":2.915},"chad":{"suppliers":[{"c":"Türkiye","v":49},{"c":"Mısır","v":39},{"c":"İtalya","v":4},{"c":"Çin","v":3},{"c":"İspanya","v":2},{"c":"Diğer","v":3}],"turkeyShare":49,"totalValueM":1.232},"papua-new-guinea":{"suppliers":[{"c":"Çin","v":65},{"c":"Malezya","v":13},{"c":"Avustralya","v":11},{"c":"Singapur","v":7},{"c":"Yeni Zelanda","v":2},{"c":"Diğer","v":2}],"turkeyShare":0,"totalValueM":2.46},"switzerland":{"suppliers":[{"c":"Almanya","v":25},{"c":"İtalya","v":19},{"c":"Fransa","v":6},{"c":"Avusturya","v":5},{"c":"Hollanda","v":1},{"c":"Diğer","v":44}],"turkeyShare":1,"totalValueM":705.888},"falkland-is":{"suppliers":[{"c":"İngiltere","v":100}],"turkeyShare":0,"totalValueM":0.098},"libya":{"suppliers":[{"c":"Türkiye","v":43},{"c":"Mısır","v":33},{"c":"Çin","v":13},{"c":"İtalya","v":7},{"c":"Malezya","v":1},{"c":"Diğer","v":3}],"turkeyShare":43,"totalValueM":53.231},"sierra-leone":{"suppliers":[{"c":"İngiltere","v":63},{"c":"ABD","v":10},{"c":"Türkiye","v":8},{"c":"Çin","v":6},{"c":"Mısır","v":3},{"c":"Diğer","v":10}],"turkeyShare":8,"totalValueM":5.906},"costa-rica":{"suppliers":[{"c":"Çin","v":29},{"c":"Brezilya","v":11},{"c":"ABD","v":16},{"c":"Kolombiya","v":8},{"c":"İspanya","v":6},{"c":"Diğer","v":30}],"turkeyShare":0,"totalValueM":26.641},"hungary":{"suppliers":[{"c":"Almanya","v":9},{"c":"Romanya","v":3},{"c":"İtalya","v":3},{"c":"Çin","v":9},{"c":"Avusturya","v":2},{"c":"Diğer","v":74}],"turkeyShare":1,"totalValueM":148.74},"eswatini":{"suppliers":[{"c":"İtalya","v":80},{"c":"Güney Afrika","v":14},{"c":"Türkiye","v":3},{"c":"ABD","v":2},{"c":"Diğer","v":1}],"turkeyShare":3,"totalValueM":11.36},"kazakhstan":{"suppliers":[{"c":"İtalya","v":12},{"c":"Çin","v":15},{"c":"Türkiye","v":5},{"c":"İsviçre","v":2},{"c":"Almanya","v":1},{"c":"Diğer","v":65}],"turkeyShare":5,"totalValueM":67.847},"solomon-is":{"suppliers":[{"c":"Avustralya","v":63},{"c":"Çin","v":24},{"c":"Malezya","v":9},{"c":"Yeni Zelanda","v":2},{"c":"Tayvan","v":1},{"c":"Diğer","v":1}],"turkeyShare":0,"totalValueM":0.306},"portugal":{"suppliers":[{"c":"İspanya","v":55},{"c":"Fransa","v":10},{"c":"Almanya","v":8},{"c":"İtalya","v":5},{"c":"Çin","v":5},{"c":"Diğer","v":17}],"turkeyShare":0,"totalValueM":211.728},"ethiopia":{"suppliers":[{"c":"Çin","v":68},{"c":"Türkiye","v":20},{"c":"İtalya","v":6},{"c":"İsviçre","v":3},{"c":"İspanya","v":1},{"c":"Diğer","v":2}],"turkeyShare":20,"totalValueM":2.525},"morocco":{"suppliers":[{"c":"İspanya","v":13},{"c":"İtalya","v":11},{"c":"Türkiye","v":20},{"c":"Çin","v":16},{"c":"Fransa","v":6},{"c":"Diğer","v":34}],"turkeyShare":20,"totalValueM":64.241},"malta":{"suppliers":[{"c":"İtalya","v":41},{"c":"İspanya","v":10},{"c":"Türkiye","v":15},{"c":"Hollanda","v":1},{"c":"Çin","v":8},{"c":"Diğer","v":25}],"turkeyShare":15,"totalValueM":17.275},"singapore":{"suppliers":[{"c":"Çin","v":30},{"c":"Malezya","v":51},{"c":"İtalya","v":4},{"c":"Fransa","v":1},{"c":"Endonezya","v":4},{"c":"Diğer","v":10}],"turkeyShare":0,"totalValueM":221.918},"bahrain":{"suppliers":[{"c":"Çin","v":37},{"c":"İtalya","v":25},{"c":"Türkiye","v":8},{"c":"Malezya","v":5},{"c":"ABD","v":5},{"c":"Diğer","v":20}],"turkeyShare":8,"totalValueM":13.541},"kosovo":{"suppliers":[{"c":"Türkiye","v":33},{"c":"Slovenya","v":14},{"c":"Çin","v":12},{"c":"Almanya","v":8},{"c":"Diğer","v":33}],"turkeyShare":33,"totalValueM":12.17}};

// Premium mobilya markalarının gerçek, kaynaklı küresel mağaza verisi (resmi marka siteleri + Natuzzi için SEC 6-K başvurusu). Kullanıcı tarafından araştırılıp sağlanmıştır.
const NATUZZI_GLOBAL = { monoBrand: 564, galleries: 487, curatedPlacements: 550, countries: 107, asOf: '31 Aralık 2025' };
const BOCONCEPT_GLOBAL = { stores: 300, countries: 65, note: 'Ülke bazlı resmi dağılım yayınlanmıyor — her ülke ayrı yerel site kullanıyor.' };
const POLIFORM_STORES = {"italy":{"mono":5,"dealer":26,"general":85,"total":116},"china":{"mono":28,"dealer":0,"general":0,"total":28},"usa":{"mono":12,"dealer":3,"general":11,"total":26},"germany":{"mono":4,"dealer":9,"general":6,"total":19},"france":{"mono":3,"dealer":11,"general":5,"total":19},"spain":{"mono":6,"dealer":3,"general":4,"total":13},"austria":{"mono":1,"dealer":4,"general":5,"total":10},"japan":{"mono":1,"dealer":6,"general":3,"total":10},"russia":{"mono":3,"dealer":4,"general":3,"total":10},"switzerland":{"mono":1,"dealer":3,"general":3,"total":7},"belgium":{"mono":0,"dealer":3,"general":3,"total":6},"india":{"mono":4,"dealer":0,"general":1,"total":5},"mexico":{"mono":3,"dealer":0,"general":2,"total":5},"netherlands":{"mono":1,"dealer":4,"general":0,"total":5},"portugal":{"mono":1,"dealer":2,"general":1,"total":4},"poland":{"mono":1,"dealer":3,"general":0,"total":4},"south-korea":{"mono":0,"dealer":4,"general":0,"total":4},"ukraine":{"mono":1,"dealer":1,"general":1,"total":3},"canada":{"mono":3,"dealer":0,"general":0,"total":3},"uk":{"mono":2,"dealer":1,"general":0,"total":3},"sweden":{"mono":2,"dealer":0,"general":0,"total":2},"greece":{"mono":0,"dealer":1,"general":1,"total":2},"israel":{"mono":1,"dealer":0,"general":1,"total":2},"nigeria":{"mono":0,"dealer":0,"general":2,"total":2},"pakistan":{"mono":0,"dealer":2,"general":0,"total":2},"lithuania":{"mono":0,"dealer":1,"general":1,"total":2},"southafrica":{"mono":2,"dealer":0,"general":0,"total":2},"morocco":{"mono":1,"dealer":0,"general":1,"total":2},"australia":{"mono":2,"dealer":0,"general":0,"total":2},"taiwan":{"mono":1,"dealer":1,"general":0,"total":2},"serbia":{"mono":0,"dealer":1,"general":1,"total":2},"cyprus":{"mono":0,"dealer":2,"general":0,"total":2},"colombia":{"mono":0,"dealer":0,"general":1,"total":1},"thailand":{"mono":1,"dealer":0,"general":0,"total":1},"bahrain":{"mono":1,"dealer":0,"general":0,"total":1},"belarus":{"mono":0,"dealer":1,"general":0,"total":1},"argentina":{"mono":0,"dealer":0,"general":1,"total":1},"kazakhstan":{"mono":1,"dealer":0,"general":0,"total":1},"armenia":{"mono":0,"dealer":0,"general":1,"total":1},"azerbaijan":{"mono":0,"dealer":1,"general":0,"total":1},"moldova":{"mono":0,"dealer":0,"general":1,"total":1},"kenya":{"mono":0,"dealer":1,"general":0,"total":1},"senegal":{"mono":0,"dealer":0,"general":1,"total":1},"georgia":{"mono":1,"dealer":0,"general":0,"total":1},"tunisia":{"mono":1,"dealer":0,"general":0,"total":1},"ghana":{"mono":1,"dealer":0,"general":0,"total":1},"new-zealand":{"mono":0,"dealer":1,"general":0,"total":1},"mongolia":{"mono":0,"dealer":0,"general":1,"total":1},"indonesia":{"mono":1,"dealer":0,"general":0,"total":1},"bangladesh":{"mono":0,"dealer":1,"general":0,"total":1},"cambodia":{"mono":1,"dealer":0,"general":0,"total":1},"philippines":{"mono":1,"dealer":0,"general":0,"total":1},"singapore":{"mono":0,"dealer":1,"general":0,"total":1},"malaysia":{"mono":0,"dealer":1,"general":0,"total":1},"kuwait":{"mono":1,"dealer":0,"general":0,"total":1},"malta":{"mono":1,"dealer":0,"general":0,"total":1},"jordan":{"mono":0,"dealer":1,"general":0,"total":1},"uae":{"mono":1,"dealer":0,"general":0,"total":1},"north-macedonia":{"mono":0,"dealer":1,"general":0,"total":1},"lebanon":{"mono":0,"dealer":1,"general":0,"total":1},"brazil":{"mono":1,"dealer":0,"general":0,"total":1},"puerto-rico":{"mono":1,"dealer":0,"general":0,"total":1},"norway":{"mono":1,"dealer":0,"general":0,"total":1},"denmark":{"mono":0,"dealer":0,"general":1,"total":1},"luxembourg":{"mono":1,"dealer":0,"general":0,"total":1},"slovakia":{"mono":0,"dealer":1,"general":0,"total":1},"albania":{"mono":0,"dealer":1,"general":0,"total":1},"czechia":{"mono":1,"dealer":0,"general":0,"total":1},"bulgaria":{"mono":1,"dealer":0,"general":0,"total":1},"romania":{"mono":0,"dealer":1,"general":0,"total":1},"croatia":{"mono":0,"dealer":1,"general":0,"total":1},"cote-d-ivoire":{"mono":0,"dealer":1,"general":0,"total":1},"estonia":{"mono":0,"dealer":0,"general":1,"total":1},"qatar":{"mono":0,"dealer":1,"general":0,"total":1},"oman":{"mono":0,"dealer":1,"general":0,"total":1},"iceland":{"mono":0,"dealer":0,"general":1,"total":1},"montenegro":{"mono":0,"dealer":1,"general":0,"total":1}};
const ROCHE_BOBOIS_STORES = {"france":71,"usa":40,"china":27,"spain":16,"uk":9,"canada":8,"germany":8,"italy":8,"south-korea":7,"switzerland":7,"mexico":5,"morocco":4,"russia":4,"belgium":3,"argentina":2,"austria":2,"india":2,"japan":2,"portugal":2,"saudi-arabia":2,"singapore":2,"southafrica":2,"ukraine":2,"algeria":1,"australia":1,"bahrain":1,"colombia":1,"costa-rica":1,"cote-d-ivoire":1,"greece":1,"hungary":1,"ireland":1,"israel":1,"jordan":1,"kazakhstan":1,"kuwait":1,"lebanon":1,"luxembourg":1,"malaysia":1,"netherlands":1,"panama":1,"peru":1,"philippines":1,"qatar":1,"romania":1,"tunisia":1,"uae":1,"venezuela":1,"vietnam":1};

const TURKEY_TOP_EXPORT_MARKETS_GLOBAL = ['iraq','germany','france','usa','romania'];

// Gerçek ithalat kısıtlaması/imkânsızlığı bilgisi — bu ülkelerde mobilya ithalatı ciddi şekilde
// kısıtlı veya fiilen mümkün değildir. Bir ihracatçının zaman kaybetmemesi için en görünür
// şekilde (ülke sayfasında büyük bir uyarı olarak) gösterilir.
// İhracat Bedelinin Yurda Getirilmesinde İstisna Tanınan Ülkeler (T.C. Ticaret Bakanlığı, gerçek liste).
// Bu ülkelere yapılan ihracatta, ihracat bedelinin Türkiye'ye getirilmesi zorunlu değildir.
const EXPORT_PROCEEDS_EXEMPT_COUNTRIES = new Set([
  'afghanistan','angola','belarus','benin','burkina-faso','djibouti','chad','dem-rep-congo',
  'ethiopia','cote-d-ivoire','palestine','gabon','ghana','guinea','s-sudan','iran','cameroon',
  'kenya','kyrgyzstan','congo','north-korea','cuba','liberia','lebanon','mali','moldova',
  'mozambique','nigeria','senegal','somalia','sudan','syria','tajikistan','tanzania','venezuela','yemen',
]);

const IMPORT_RESTRICTIONS = {
  ethiopia: { level:'significant', note:'Bazı dönemlerde yerli üretimi korumak amacıyla ev ve ofis mobilyalarının ithalatını büyük ölçüde yasaklamış veya ciddi şekilde sınırlandırmıştır. Bu politikalar zaman zaman değişmektedir.' },
  'north-korea': { level:'severe', note:'Uluslararası yaptırımlar ve devlet kontrolü nedeniyle normal ticari mobilya ithalatı fiilen mümkün değildir.' },
  cuba: { level:'severe', note:'Devlet kontrolü nedeniyle ticari ithalat büyük ölçüde devlet aracılığıyla yapılmaktadır.' },
  eritrea: { level:'severe', note:'Çok sıkı ithalat izin sistemi nedeniyle ticari ithalat oldukça kısıtlıdır.' },
  pakistan: { level:'significant', note:'İthalatta ciddi kısıtlamalar (yüksek vergi/izin engelleri) mevcuttur.' },
  algeria: { level:'significant', note:'İthalatta ciddi kısıtlamalar (izin/kota engelleri) mevcuttur.' },
};

/* =========================================================
   GELECEK VERİ YAPISI (placeholder — ileride gerçek veriyle doldurulacak)
   ---------------------------------------------------------
   "Exporters" (c.exporters) ve "Buyers" (c.buyers) zaten her ülke nesnesinde
   gerçek veriyle geliyor ve kendi bölümlerinde render ediliyor — burada
   tekrar edilmiyor. Aşağıdaki 6 veri seti henüz mevcut değil; her ülke
   nesnesine boş dizi olarak ekleniyor ve "Gelecek Kaynaklar" bölümünde
   otomatik olarak "Yakında eklenecek" kartı gösteriliyor.

   Gerçek veri geldiğinde TEK YAPMANIZ GEREKEN: ilgili ülke nesnesine
   (yukarıdaki COUNTRIES dizisinde) bu anahtarın altına, aşağıdaki
   shapeHint'e uygun obje dizisini eklemek — arayüz otomatik olarak
   placeholder yerine gerçek içeriği gösterecektir, kod değişikliği
   gerekmez.
   ========================================================= */
const ICON_PACKAGE = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/></svg>';
const ICON_CALENDAR = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>';
const ICON_TRUCK = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><rect x="1" y="7" width="13" height="9" rx="1"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="6" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg>';
const ICON_STORE = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><path d="M3 9l1-5h16l1 5"/><path d="M4 9v10h16V9"/><path d="M9 19v-6h6v6"/></svg>';
const ICON_PALETTE = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px;"><path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-1 2-2 0-.6-.2-1-.5-1.4-.3-.4-.5-.8-.5-1.4 0-1 .8-1.7 1.8-1.7H17a4 4 0 0 0 4-4c0-4.4-4-7.5-9-7.5z"/><circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" stroke="none"/><circle cx="11" cy="7.5" r="1.1" fill="currentColor" stroke="none"/><circle cx="15.5" cy="8.5" r="1.1" fill="currentColor" stroke="none"/></svg>';
const FUTURE_DATA_FIELDS = [
  { key:'importers', icon:ICON_PACKAGE, label:'İthalatçılar',
    shapeHint:"{ name, city, cat, vol }" },
  { key:'tradeShows', icon:ICON_CALENDAR, label:'Ticaret Fuarları',
    shapeHint:"{ name, city, month }" },
  { key:'logisticsCompanies', icon:ICON_TRUCK, label:'Lojistik Firmaları',
    shapeHint:"{ name, mode, note }" },
  { key:'localRetailChains', icon:ICON_STORE, label:'Yerel Perakende Zincirleri',
    shapeHint:"{ name, storeCount, segment }" },
  { key:'interiorDesigners', icon:ICON_PALETTE, label:'İç Mimarlar',
    shapeHint:"{ name, city, specialty }" },
];
COUNTRIES.forEach(c=>{
  FUTURE_DATA_FIELDS.forEach(f=>{ if(!Array.isArray(c[f.key])) c[f.key] = []; });
});
function renderFutureDataCard(field, items){
  return `<div class="future-card">
      <div class="future-card-title">${field.icon}${field.label}</div>
      <div class="future-card-body">${items.map(i=> i.name || i.brand || Object.values(i)[0]).join(' · ')}</div>
    </div>`;
}
// Bir ülke için henüz veri girilmemiş kategorileri tek satırlık sade bir notla belirtir
// (her biri için ayrı boş kart göstermek yerine) — veri geldikçe o kategori otomatik
// olarak yukarıdaki kart görünümüne geçer.
function renderFutureDataSection(country){
  const populated = FUTURE_DATA_FIELDS.filter(f => country[f.key] && country[f.key].length);
  const empty = FUTURE_DATA_FIELDS.filter(f => !country[f.key] || !country[f.key].length);
  let html = '';
  if(populated.length){
    html += `<div class="future-grid">${populated.map(f=> renderFutureDataCard(f, country[f.key])).join('')}</div>`;
  }
  if(empty.length){
    html += `<div class="future-note">Yakında eklenecek: ${empty.map(f=>`<b>${f.label}</b>`).join(', ')}.</div>`;
  }
  return html;
}
// Bilinen büyük mobilya üreticisi/ihracatçısı ülkeler (genel, doğrulanabilir sektör bilgisine dayanır —
// UN Comtrade/ITC ihracat sıralamalarında düzenli olarak üst sıralarda yer alan ülkeler).
// Kullanıcı tarafından sağlanan, sıralı ilk 30 mobilya üreticisi ülke listesi.
const MAJOR_FURNITURE_MANUFACTURERS = new Set([
  'CN','US','DE','IT','VN','IN','PL','TR','MX','BR', // 1-10: Küresel Güçler
  'CA','JP','GB','FR','RU','ID','ES','MY','KR','TH', // 11-20: Gelişmiş Sanayiler
  'TW','CN-TW','AU','PT','NL','SE','SA','IR','EG','BE','ZA', // 21-30: Yükselen Pazarlar
]);
const FURNITURE_MANUFACTURER_TIERS = [
  { isos: new Set(['CN','US','DE','IT','VN','IN','PL','TR','MX','BR']), label:'İlk 10 — Küresel Üretim Gücü' },
  { isos: new Set(['CA','JP','GB','FR','RU','ID','ES','MY','KR','TH']), label:'İlk 20 — Gelişmiş Sanayi' },
  { isos: new Set(['TW','CN-TW','AU','PT','NL','SE','SA','IR','EG','BE','ZA']), label:'İlk 30 — Yükselen Üretim' },
];
function manufacturerTierLabel(iso){
  const tier = FURNITURE_MANUFACTURER_TIERS.find(t => t.isos.has(iso));
  return tier ? tier.label : null;
}

// Bu ülkeye Türkiye'nin gerçek/tahmini ihracat değeri (milyon $) — ham sayısal değer.
function getTurkeyExportValueM(country){
  const info = getTurkeyImportInfo(country);
  if(info.level === 'real'){
    if(!country.turkeyRealData) return 0;
    if(info.isTotal) return country.turkeyRealData.total2025M || 0;
    return (activeCategory==='wood' ? country.turkeyRealData.wood2025M : country.turkeyRealData.seating2025M) || 0;
  }
  if(info.level === 'estimated') return turkeyImportVolumeM(country);
  return 0;
}

// Mobilya ithalatında gerçekten karşılaşılan sertifikasyon/uygunluk gereklilikleri.
// Kaynak: IPPC/ISPM-15 (APHIS, IPPC resmi rehberleri), AB EUDR mevzuatı, UK BS 7177/Fire Safety
// Regulations, US CARB/TSCA Title VI, Hindistan BIS, Avustralya/Yeni Zelanda BMSB fumigasyon kuralı.
function getRequiredCerts(country, category){
  const iso = country.iso;
  const certs = [];
  // Neredeyse evrensel: ahşap ambalaj (palet/kasa) kullanan hemen her sevkiyat için gerekli.
  certs.push({ name:'ISPM-15 (Ahşap Ambalaj Isıl İşlem/Fumigasyon Markası)', level:'real', note:'Palet/kasa gibi ahşap ambalaj kullanan neredeyse tüm ülkelerde zorunludur (IPPC standardı).' });
  if(EU_27.has(iso)){
    certs.push({ name:'EUDR (AB Ormansızlaşma Karşıtı Tüzük)', level:'real', note:'Ahşap/mobilya ürünleri için tedarik zincirinde ormansızlaşma riski bulunmadığına dair durum tespiti (due diligence) beyanı gerekir.' });
    certs.push({ name:'REACH Kimyasal Uyumluluğu', level:'real', note:'Boya, vernik, tutkal gibi kimyasal içeriklerin AB REACH tüzüğüne uygunluğu.' });
  }
  if(iso === 'GB'){
    certs.push({ name:'UK Furniture and Furnishings (Fire Safety) Regulations', level:'real', note: category==='seating' ? 'Döşemeli mobilya için dolgu malzemesi ve kumaşın alev geciktirici (BS 7177) standardına uygunluğu ZORUNLUDUR.' : 'Döşemeli ürünlerde zorunlu; sert ahşap mobilyada genelde uygulanmaz.' });
  }
  if(iso === 'US'){
    certs.push({ name:'CARB Phase 2 / TSCA Title VI', level:'real', note:'Kompozit ahşap ürünlerde (MDF, sunta, kontrplak) formaldehit emisyon limiti.' });
    certs.push({ name:'Ek Fumigasyon Sertifikası', level:'real', note:'ISPM-15 markasına ek olarak bazı liman/eyaletlerde ayrıca fumigasyon sertifikası istenebilir.' });
  }
  if(iso === 'IN'){
    certs.push({ name:'BIS (Bureau of Indian Standards) Uygunluk Belgesi', level:'real', note:'Bazı mobilya/ahşap ürün kategorileri için zorunlu kalite uygunluk belgesi.' });
    certs.push({ name:'Ek Fumigasyon Sertifikası', level:'real', note:'ISPM-15 markasına ek olarak ayrı bir fumigasyon sertifikası talep edilebilir.' });
  }
  if(iso === 'ID'){
    certs.push({ name:'Ek Fumigasyon Sertifikası', level:'real', note:'Endonezya, ISPM-15 markasına ek olarak ayrıca fumigasyon sertifikası talep eder.' });
  }
  if(iso === 'AU' || iso === 'NZ'){
    certs.push({ name:'BMSB Sezonu Ek Fumigasyon Sertifikası', level:'real', note:'1 Eylül–30 Nisan arası (Kahverengi Mermer Kokarca sezonu) geçerli fumigasyon sertifikası olmadan yükleme kabul edilmez.' });
  }
  certs.push({ name:'FSC / PEFC Sürdürülebilir Orman Sertifikası', level:'estimated', note:'Zorunlu olmasa da, özellikle AB/Kuzey Amerika/İngiltere\'de perakendeciler tarafından giderek daha sık talep ediliyor.' });
  return certs;
}

// Türkiye'nin serbest ticaret anlaşması olan ülkeler (gerçek, T.C. Ticaret Bakanlığı listesine dayanır).
// EUR.1 dolaşım sertifikası bu ülkelere yapılan ihracatta tercihli tarife için kullanılır.
const TURKEY_FTA_PARTNERS = new Set(['IS','LI','NO','CH','IL','MK','BA','PS','TN','MA','EG','SY','AL','GE','ME','RS','CL','MU','KR','MY','MD','FO','SG','XK','VE','GB']);

function getRequiredDocs(country){
  const iso = country.iso;
  const docs = [
    { name:'Ticari Fatura (Commercial Invoice)', level:'real', note:'Her sevkiyatta zorunlu.' },
    { name:'Çeki Listesi (Packing List)', level:'real', note:'Her sevkiyatta zorunlu.' },
    { name:'Konşimento / Taşıma Belgesi (B/L veya CMR)', level:'real', note:'Deniz yolu için B/L, karayolu için CMR.' },
  ];
  if(EU_27.has(iso)){
    docs.push({ name:'A.TR Dolaşım Belgesi', level:'real', note:'AB–Türkiye Gümrük Birliği kapsamında sanayi ürünleri (mobilya dahil) gümrüksüz dolaşır.' });
  } else if(TURKEY_FTA_PARTNERS.has(iso)){
    docs.push({ name:'EUR.1 Dolaşım Sertifikası', level:'real', note:'Türkiye\'nin bu ülkeyle serbest ticaret anlaşması kapsamında tercihli tarifeden yararlanmak için gereklidir.' });
  } else {
    docs.push({ name:'Menşe Şahadetnamesi (Certificate of Origin)', level:'real', note:'Türkiye ile tercihli ticaret anlaşması bulunmayan ülkelerde standart menşe belgesi istenir.' });
  }
  return docs;
}

(function generateAllCountries(){
  const existingIds = new Set(COUNTRIES.map(c=>c.id));
  // Elle hazırlanmış (curated) ülkeler dq.marketSize alanıyla oluşturulmamıştı — gerçek
  // veri uygulanmadan önce hepsine güvenli bir "bilinmiyor" temeli veriyoruz.
  COUNTRIES.forEach(c=>{ if(c.dq && c.dq.marketSize === undefined) c.dq.marketSize = 'unknown'; });
  WORLD_DATA.forEach(f=>{
    if(!f.id || f.id === 'turkey' || existingIds.has(f.id)) return;
    // basit merkez noktası (ilk halkanın ortalaması)
    const ring = f.rings[0] || [[0,0]];
    let sx=0, sy=0; ring.forEach(p=>{ sx+=p[0]; sy+=p[1]; });
    const lon = sx/ring.length, lat = sy/ring.length;
    COUNTRIES.push(generateCountryProfile(f.iso, f.name, f.id, lat, lon));
    existingIds.add(f.id);
  });

  // Türkiye'nin ülkeye özel GERÇEK mobilya ihracat verisini her ülkeye uygula
  // (ITC Trade Map 2025 + TÜİK 2024 karşılaştırması — bkz. TURKEY_EXPORT_REAL tanımı).
  Object.keys(TURKEY_EXPORT_REAL).forEach(id=>{
    const c = COUNTRIES.find(x=>x.id===id);
    if(!c) return;
    c.turkeyRealData = TURKEY_EXPORT_REAL[id];
  });
  // Toplam (tüm kategoriler) 2025 gerçek ihracat verisi — kategoriye özel veri olmasa bile
  // en azından toplam rakamı gösterebilmek için ayrıca ekleniyor.
  Object.keys(TURKEY_TOTAL_EXPORT_2025).forEach(id=>{
    const c = COUNTRIES.find(x=>x.id===id);
    if(!c) return;
    if(!c.turkeyRealData) c.turkeyRealData = {};
    c.turkeyRealData.total2025M = TURKEY_TOTAL_EXPORT_2025[id];
  });

  // Tedarikçi payları — gerçek veriyle doğrulanmış istisnalar (IndexBox, Volza, ExportGenius).
  // Sentetik üretim, Türkiye'ye coğrafi/tarihi olarak çok yakın pazarlarda (Irak, Kosova gibi)
  // Türkiye'nin gerçekte baskın tedarikçi olduğunu yakalayamıyordu — bu istisnalar onu düzeltir.
  const SUPPLIER_REAL_OVERRIDES = {
    iraq: [{c:'Türkiye',v:83},{c:'Mısır',v:9},{c:'Diğer',v:8}],
    kosovo: [{c:'Türkiye',v:45},{c:'Slovenya',v:14},{c:'Çin',v:12},{c:'Almanya',v:8},{c:'Diğer',v:21}],
  };
  Object.keys(SUPPLIER_REAL_OVERRIDES).forEach(id=>{
    const c = COUNTRIES.find(x=>x.id===id);
    if(!c) return;
    c.suppliers = SUPPLIER_REAL_OVERRIDES[id];
    const tr = c.suppliers.find(s=>s.c==='Türkiye');
    if(tr) c.turkeyShare = '%' + tr.v;
    c.suppliersVerified = true;
  });

  // Gözden geçirilmiş TAHMİNİ Türkiye payları — eski rastgele üretim, birbiriyle alakasız
  // onlarca ülkeye (Çin dahil) aynı %11-13 bandını veriyordu, bu gerçekçi değildi. Bu değerler
  // daha makul tahminlerdir ANCAK hâlâ doğrulanmış GERÇEK veri değildir — suppliersVerified
  // bilinçli olarak true YAPILMAZ, böylece arayüzde gri/"Tahmini" olarak kalır, teal/"Gerçek" olmaz.
  const SUPPLIER_ESTIMATE_REVISIONS = {
    china: 0, nigeria: 8, slovakia: 6, uae: 8, poland: 4, angola: 2,
    niger: 1, 'guinea-bissau': 1, pakistan: 2, italy: 2, georgia: 3, yemen: 1,
    'north-macedonia': 2, 'timor-leste': 1, colombia: 1, ghana: 2, congo: 1,
    mozambique: 1, madagascar: 1, iran: 3, croatia: 2, taiwan: 1, finland: 1,
    eritrea: 1, egypt: 2, uganda: 1, sudan: 1, 'dominican-rep': 1, belize: 1,
    suriname: 1, 'central-african-rep': 1, eswatini: 1, tajikistan: 2,
    estonia: 1, ireland: 1, philippines: 2, paraguay: 1,
  };
  Object.keys(SUPPLIER_ESTIMATE_REVISIONS).forEach(id=>{
    const c = COUNTRIES.find(x=>x.id===id);
    if(!c) return;
    const v = SUPPLIER_ESTIMATE_REVISIONS[id];
    c.turkeyShare = '%' + v;
    const tr = c.suppliers.find(s=>s.c==='Türkiye');
    if(tr) tr.v = v; else c.suppliers.push({c:'Türkiye', v});
    c.turkeyShareEstimated = true; // gerçek değil ama makul bir tahmin — "Bilinmiyor" değil "Tahmini" gösterilir
  });

  // GERÇEK ITC verisi — yukarıdaki tüm eski tahmini/kısmi düzeltmelerin önüne geçer.
  // Döşemeli (seating) kategorisi için gerçek tedarikçi payları doğrudan ana ülke nesnesine uygulanır;
  // Ahşap (wood) kategorisi için ayrı gerçek veri, kategori değiştirildiğinde kullanılmak üzere saklanır.
  Object.keys(REAL_SUPPLIERS_SEATING).forEach(id=>{
    const c = COUNTRIES.find(x=>x.id===id);
    if(!c) return;
    const real = REAL_SUPPLIERS_SEATING[id];
    c.suppliers = real.suppliers;
    c.turkeyShare = '%' + real.turkeyShare;
    c.suppliersVerified = true;
    c.turkeyShareEstimated = false; // artık tahmini değil, gerçek
    c.annualImports = '$' + Math.round(real.totalValueM) + 'M'; // gerçek toplam ithalat (HS 9401.61)
    c.marketSize = c.annualImports; // aynı gerçek yıllık ithalat rakamı — tutarsız/eski değeri ez
    c.dq.marketSize = 'real';
  });
  Object.keys(REAL_SUPPLIERS_WOOD).forEach(id=>{
    const c = COUNTRIES.find(x=>x.id===id);
    if(!c) return;
    c._realWoodSuppliers = REAL_SUPPLIERS_WOOD[id]; // buildWoodVariant() içinde kullanılacak
  });

  // Gerçek ithalat kısıtlaması/imkânsızlığı olan ülkelerde Fırsat Skoru ciddi şekilde aşağı çekilir
  // (bu, formülün genel mantığından bağımsız, ayrı bir gerçek düzenleyici veri kaynağıdır).
  COUNTRIES.forEach(c=>{
    const restriction = IMPORT_RESTRICTIONS[c.id];
    if(restriction){
      c.scores.overall = restriction.level === 'severe' ? Math.min(c.scores.overall, 12) : Math.min(c.scores.overall, 35);
      c.scores.difficulty = restriction.level === 'severe' ? 99 : Math.max(c.scores.difficulty, 85);
    }
  });
})();

/* =========================================================
   ÜRÜN KATEGORİSİ (HS KODU) SİSTEMİ
   İlk etapta iki kategori: döşemeli ahşap iskeletli oturma grubu (HS 9401.61)
   ve ev tipi ahşap mobilya (HS 9403.60). "seating" ana veri setini temsil eder;
   "wood" kategorisi seçildiğinde sayılar deterministik bir varyasyonla türetilir.
   ========================================================= */
const CATEGORIES = {
  seating: { label:'Döşemeli Oturma Grubu', hs:'HS 9401.61' },
  wood: { label:'Ahşap Mobilya', hs:'HS 9403.60' }
};
let activeCategory = 'seating';

function clampScore(n){ return Math.max(5, Math.min(97, Math.round(n))); }
function adjustPercent(str, delta){
  const m = String(str).match(/(-?[\d.]+)/);
  if(!m) return str;
  const num = Math.max(0, parseFloat(m[1]) + delta);
  return str.replace(m[1], num.toFixed(1)).replace('.0%','%');
}
function scaleMoney(str, factor){
  const m = String(str).match(/([\d,]+(?:\.\d+)?)/);
  if(!m) return str;
  const num = parseFloat(m[1].replace(/,/g,'')) * factor;
  return str.replace(m[1], Math.round(num).toLocaleString('en-US'));
}
function adjustGrowthLabel(str, delta){
  const m = String(str).match(/(-?[\d.]+)/);
  const num = (m ? parseFloat(m[1]) : 0) + delta;
  const sign = num >= 0 ? '+' : '';
  return `${sign}${num.toFixed(1)}%/yıl`;
}

// Gerçek/bilinen veriye dayalı "Ahşap Mobilya" (HS 9403.60) istisnaları.
// Diğer tüm ülkeler için sentetik (örnek) türetme kullanılır.
const WOOD_TAX_OVERRIDES = {
  usa: { importTax:'0%', customsDuty:'0.0% (mobilya/dolap değilse Section 232 muaf)' },
  germany: { importTax:'0%', customsDuty:'0% (AB-Türkiye Gümrük Birliği)' },
  france: { importTax:'0%', customsDuty:'0% (AB-Türkiye Gümrük Birliği)' },
  poland: { importTax:'0%', customsDuty:'0% (AB-Türkiye Gümrük Birliği)' },
  netherlands: { importTax:'0%', customsDuty:'0% (AB-Türkiye Gümrük Birliği)' },
  uk: { importTax:'0%', customsDuty:'0.0%' },
};

function buildWoodVariant(country){
  const rnd = mulberry32(hashSeed(country.id + 'wood-cat'));
  const r = (a,b) => a + rnd()*(b-a);
  const taxDelta = r(-3, 3.5);
  const marketFactor = r(0.55, 1.3);
  const growthDelta = r(-2, 2.2);
  const trShareFactor = r(0.6, 1.6);

  const variant = Object.assign({}, country);
  variant.dq = Object.assign({}, country.dq); // sığ kopya paylaşılan referansı önler
  const woodOverride = WOOD_TAX_OVERRIDES[country.id];
  const isEuropeFree = (REGION_MAP[country.iso] || 'other') === 'europe';
  if(woodOverride){
    variant.importTax = woodOverride.importTax;
    variant.customsDuty = woodOverride.customsDuty;
  } else if(isEuropeFree){
    variant.importTax = '0%';
    variant.customsDuty = '0.0%';
  } else {
    variant.importTax = adjustPercent(country.importTax, taxDelta);
    variant.customsDuty = adjustPercent(country.customsDuty, taxDelta*0.85);
  }
  // Pazar Büyüklüğü / Yıllık İthalat — ahşap kategorisine özel gerçek ITC verisi varsa o
  // kullanılır. YOKSA kesinlikle sentetik bir ölçekleme uydurulmaz, dürüstçe "Bilinmiyor" gösterilir.
  if(country._realWoodSuppliers){
    const realWoodSizeM = country._realWoodSuppliers.totalValueM;
    variant.marketSize = '$' + Math.round(realWoodSizeM).toLocaleString('en-US') + 'M';
    variant.annualImports = variant.marketSize; // aynı gerçek yıllık ithalat rakamı
    variant.dq.marketSize = 'real';
  } else {
    variant.marketSize = 'Bilinmiyor';
    variant.annualImports = 'Bilinmiyor';
    variant.dq.marketSize = 'unknown';
  }
  const realGrowthWood = REAL_IMPORT_GROWTH_WOOD[country.id];
  if(realGrowthWood){
    const g = realGrowthWood.growthPct;
    variant.importGrowth = (g>=0?'+':'') + g.toFixed(1) + '%/yıl';
    variant.dq.importGrowth = 'real';
  } else {
    variant.importGrowth = 'Bilinmiyor';
    variant.dq.importGrowth = 'unknown';
  }
  let variantSuppliersVerified = false;
  if(country._realWoodSuppliers){
    // En iyi durum: bu ülke için AHŞAP kategorisine özel gerçek veri var.
    variant.suppliers = country._realWoodSuppliers.suppliers;
    variant.turkeyShare = '%' + country._realWoodSuppliers.turkeyShare;
    variantSuppliersVerified = true;
  } else if(country.suppliersVerified){
    // Ahşap'a özel gerçek veri yok ama DÖŞEMELİ kategorisi için gerçek veri var — kategori
    // değişse de bu gerçek veriyi bozmadan koru (senteze göre çok daha güvenilir).
    variant.suppliers = country.suppliers;
    variant.turkeyShare = country.turkeyShare;
    variantSuppliersVerified = true;
  } else {
    variant.suppliers = country.suppliers.map(s => s.c==='Türkiye'
      ? {...s, v: Math.min(99, Math.max(1, Math.round(s.v * trShareFactor)))}
      : s);
    const trSupplier = variant.suppliers.find(s=>s.c==='Türkiye');
    variant.turkeyShare = '%' + (trSupplier ? trSupplier.v : 0);
  }
  variant.suppliersVerified = variantSuppliersVerified;
  variant.turkeyHistory = variantSuppliersVerified
    ? country.turkeyHistory
    : country.turkeyHistory.map(v => Math.round(v*trShareFactor*10)/10);
  // Pazar büyüklüğü skoru (0-100) — sadece iç Fırsat Skoru hesaplamasında kullanılır, dolar
  // tutarı olarak asla gösterilmez. Ahşap'a özel gerçek veri yoksa döşemeli kategorisinin
  // skorundan kabaca türetilir (bu SADECE skor, ekrandaki "Pazar Büyüklüğü" tutarı değil).
  const realWoodMarketM = country._realWoodSuppliers ? country._realWoodSuppliers.totalValueM : null;
  const market = realWoodMarketM !== null
    ? Math.round(Math.min(95, Math.log10(realWoodMarketM+1)*24 + numFromPercent(variant.importGrowth||'0')*2))
    : clampScore(country.scores.market * r(0.8,1.15));
  const difficulty = clampScore(country.scores.difficulty + taxDelta*2);
  const competition = country.scores.competition;
  const logistics = country.scores.logistics;
  const woodFundamentals = clampScore(market*0.32 + (100-difficulty)*0.22 + (100-competition)*0.2 + logistics*0.26);
  const woodShareNum = numFromPercent(variant.turkeyShare || '0');
  // Fırsat Skoru — döşemeli kategorisiyle aynı mantık: Temel Pazar Potansiyeli asla düşürülmez,
  // Türkiye'nin bu pazardaki kanıtlanmış başarısı (pay + mutlak hacim) sadece ek puan olarak eklenir.
  let overall = woodFundamentals;
  if(variantSuppliersVerified && realWoodMarketM !== null){
    const shareBonus = Math.min(30, woodShareNum * 0.5);
    const turkeyExportValueM = realWoodMarketM * woodShareNum / 100;
    const volumeBonus = Math.min(20, Math.log10(turkeyExportValueM + 1) * 8);
    overall = Math.round(woodFundamentals + shareBonus + volumeBonus);
  } else if(variantSuppliersVerified){
    // Ahşap'a özel toplam pazar verisi yoksa ama pay biliniyorsa (döşemeliden miras), sadece paya dayalı ek puan.
    overall = Math.round(woodFundamentals + Math.min(30, woodShareNum*0.5));
  }
  overall = Math.min(90, Math.max(20, overall));
  const woodRestriction = IMPORT_RESTRICTIONS[country.id];
  let woodDifficulty = difficulty;
  if(woodRestriction){
    overall = woodRestriction.level === 'severe' ? Math.min(overall, 12) : Math.min(overall, 35);
    woodDifficulty = woodRestriction.level === 'severe' ? 99 : Math.max(difficulty, 85);
  }
  variant.scores = { market, difficulty:woodDifficulty, competition, logistics, overall };
  variant.aiSummary = `${country.name} pazarında ${CATEGORIES.wood.label} (${CATEGORIES.wood.hs}) kategorisi için tahmini ithalat vergisi ${variant.importTax}, pazar büyüklüğü ${variant.marketSize} civarında. Bu kategori, döşemeli oturma grubuna kıyasla ${marketFactor>1?'daha geniş':'daha dar'} bir hacme sahip ve Türkiye'nin payı %${woodShareNum} seviyesinde. Genel fırsat skoru ${overall}/100.`;
  variant.categoryKey = 'wood';
  return variant;
}

function withCategory(country){
  if(!country) return country;
  if(activeCategory === 'seating') return country;
  if(!country._woodVariant) country._woodVariant = buildWoodVariant(country);
  return country._woodVariant;
}
function numFromMoney(str){
  const m = String(str).match(/([\d,]+(?:\.\d+)?)/);
  return m ? parseFloat(m[1].replace(/,/g,'')) : 0;
}
function numFromPercent(str){
  const m = String(str).match(/(-?[\d.]+)/);
  return m ? parseFloat(m[1]) : 0;
}
// Türkiye pazar payı — sadece gerçek/doğrulanmış tedarikçi verisi varsa gösterilir, yoksa "Bilinmiyor".
// Sentetik/tahmini bir yüzde kullanıcıyı yanıltmasın diye burada asla gösterilmez.
function turkeyShareDisplay(c){
  if(!(c.suppliersVerified || c.turkeyShareEstimated)) return 'Bilinmiyor';
  const raw = c.turkeyShare;
  // Kayıtlı pay sıfıra yuvarlanıyor ama gerçek ihracat verisi (hero karttaki $ değeri)
  // sıfır olmadığını gösteriyorsa, yanıltıcı düz "%0" yerine dürüst bir "<%1" göster.
  if(numFromPercent(raw) === 0){
    const info = getTurkeyImportInfo(c);
    if(info.display && info.display !== 'Bilinmiyor' && info.display !== '$0') return '<%1';
  }
  return raw;
}
function turkeyShareTier(c){ return c.suppliersVerified ? 'real' : c.turkeyShareEstimated ? 'estimated' : 'unknown'; }

// Fırsat Skoru ⓘ ikonuna tıklanınca formül açıklamasını gösterir/gizler (üzerinde durunca değil).
function toggleScoreInfo(e){
  const pop = document.getElementById('scoreInfoPopover');
  const isShown = pop.classList.contains('show');
  if(isShown){
    pop.classList.remove('show');
    return;
  }
  pop.textContent = SCORE_FORMULA_NOTE;
  pop.classList.add('show');
  const rect = e.target.getBoundingClientRect();
  const popWidth = 320;
  let left = rect.left - popWidth/2 + rect.width/2;
  left = Math.max(12, Math.min(left, window.innerWidth - popWidth - 12));
  pop.style.left = left + 'px';
  pop.style.top = (rect.bottom + 8) + 'px';
}
document.addEventListener('click', (e)=>{
  const pop = document.getElementById('scoreInfoPopover');
  if(pop.classList.contains('show') && !e.target.closest('.score-info-icon') && !e.target.closest('#scoreInfoPopover')){
    pop.classList.remove('show');
  }
});

// Premium mobilya markalarının ülke bazlı gerçek varlık tablosunu oluşturur.
function buildPremiumBrandRows(country){
  const id = country.id;
  const rows = [];

  // Poliform — gerçek veri (resmi mağaza bulucu)
  const pf = POLIFORM_STORES[id];
  if(pf){
    const strength = pf.total>=10 ? 'Güçlü' : pf.total>=3 ? 'Orta' : 'Zayıf';
    rows.push(['Poliform', pf.mono, pf.dealer + pf.general, 'Bilinmiyor', strength, 'real']);
  } else {
    rows.push(['Poliform', 0, 0, '—', 'Yok', 'real']);
  }

  // Roche Bobois — gerçek veri (resmi mağaza bulucu)
  const rb = ROCHE_BOBOIS_STORES[id];
  if(rb){
    const strength = rb>=8 ? 'Güçlü' : rb>=2 ? 'Orta' : 'Zayıf';
    rows.push(['Roche Bobois', rb, 0, 'Bilinmiyor', strength, 'real']);
  } else {
    rows.push(['Roche Bobois', 0, 0, '—', 'Yok', 'real']);
  }

  // Natuzzi — sadece küresel/bölgesel veri var, ülke bazlı yok
  rows.push(['Natuzzi Italia', 'Bilinmiyor', 'Bilinmiyor', 'Bilinmiyor', 'Bilinmiyor', 'unknown']);
  // BoConcept — ülke bazlı resmi veri yok
  rows.push(['BoConcept', 'Bilinmiyor', 'Bilinmiyor', 'Bilinmiyor', 'Bilinmiyor', 'unknown']);
  // Calligaris, Rimadesio — henüz araştırılmadı
  rows.push(['Calligaris', 'Bilinmiyor', 'Bilinmiyor', 'Bilinmiyor', 'Bilinmiyor', 'unknown']);
  rows.push(['Rimadesio', 'Bilinmiyor', 'Bilinmiyor', 'Bilinmiyor', 'Bilinmiyor', 'unknown']);

  return rows.map(([brand,mono,dealer,cities,strength,level])=>
    `<tr><td class="bright">${brand}</td><td>${mono}</td><td>${dealer}</td><td>${cities}</td><td>${strength} ${dqBadge(level)}</td></tr>`
  ).join('');
}
function turkeyImportVolumeM(country){
  return Math.round(numFromMoney(country.annualImports) * numFromPercent(country.turkeyShare) / 100);
}
// Türkiye'den mobilya ithalatı için üç seviyeli veri kalitesi:
// 'real'      -> ülkeye özel gerçek Comtrade verisi var (ör. Irak)
// 'estimated' -> ülkenin TOPLAM ithalatı gerçek ama Türkiye payı tahmini
// 'unknown'   -> hiçbir doğrulanmış veri yok
function fmtTurkeyValue(v){
  if(v >= 10) return '$' + Math.round(v).toLocaleString('en-US') + 'M';
  if(v >= 1) return '$' + v.toFixed(1) + 'M';
  return '$' + Math.round(v*1000).toLocaleString('en-US') + 'K';
}
function getTurkeyImportInfo(country){
  const rd = country.turkeyRealData;
  if(rd){
    if(activeCategory === 'wood' && rd.wood2025M !== undefined){
      let note = 'ITC Trade Map, 2025 (HS 9403.60) — Türkiye\'nin gerçek ihracat verisi.';
      if(rd.woodGrowthPct !== undefined){
        const sign = rd.woodGrowthPct >= 0 ? '+' : '';
        note += ` 2024→2025 gerçek büyüme: ${sign}${rd.woodGrowthPct}% (TÜİK 2024 verisiyle karşılaştırma).`;
      }
      return { level:'real', display: fmtTurkeyValue(rd.wood2025M), note, growthPct: rd.woodGrowthPct !== undefined ? rd.woodGrowthPct : null };
    }
    if(activeCategory === 'seating' && rd.seating2025M !== undefined){
      return { level:'real', display: fmtTurkeyValue(rd.seating2025M), note: 'ITC Trade Map, 2025 (HS 9401.61) — Türkiye\'nin gerçek ihracat verisi. Bu kategori için 2024 karşılaştırma verisi mevcut değil.', growthPct: null };
    }
    if(rd.total2025M !== undefined){
      return { level:'real', display: fmtTurkeyValue(rd.total2025M), note: 'T.C. Ticaret Bakanlığı, 2025 — Türkiye\'nin bu ülkeye TÜM mobilya kategorilerindeki (HS 94 toplamı) gerçek ihracatı. Bu, seçili ürün kategorisine (Döşemeli/Ahşap) özel bir ayrım değildir.', growthPct: null, isTotal: true };
    }
  }
  if(country.importDataVerified){
    return { level:'estimated', display: '$' + turkeyImportVolumeM(country).toLocaleString('en-US') + 'M', note: 'Ülkenin toplam mobilya ithalatı UN Comtrade kaynaklı gerçek veridir; Türkiye\'nin payı tahminidir.', growthPct: null };
  }
  return { level:'unknown', display: 'Bilinmiyor', note: null, growthPct: null };
}

/* =========================================================
   FİLTRELEME (anasayfa — harita + liste)
   ========================================================= */
const FILTER_DEFS = [
  { id:'population', label:'Min. Nüfus', unit:'M', min:0, max:340, step:5,
    get:c=>numFromMoney(c.population), mode:'min' },
  { id:'annualImports', label:'Min. Yıllık İthalat', unit:' $', min:0, max:6000000000, step:1000,
    get:c=>numFromMoney(c.annualImports) * 1000000, mode:'min' },
  { id:'minWage', label:'Min. Asgari Ücret', unit:'$', min:0, max:2500, step:50,
    get:c=>numFromMoney(c.minWage), mode:'min' },
  { id:'turkeyVolume', label:'Min. Türkiye İthalat Hacmi', unit:' $', min:0, max:300000000, step:1000,
    get:c=>turkeyImportVolumeM(c) * 1000000, mode:'min' },
  { id:'opportunity', label:'Min. Fırsat Skoru', unit:'/100', min:0, max:100, step:5,
    get:c=>withCategory(c).scores.overall, mode:'min' },
  { id:'importTax', label:'Maks. İthalat Vergisi', unit:'%', min:0, max:30, step:1,
    get:c=>numFromPercent(c.importTax), mode:'max' },
];
let activeFilters = {};

function countryPassesFilters(country){
  for(const def of FILTER_DEFS){
    const val = activeFilters[def.id];
    if(val === undefined || val === null) continue;
    const cVal = def.get(country);
    if(def.mode === 'min' && cVal < val) return false;
    if(def.mode === 'max' && cVal > val) return false;
  }
  return true;
}
function hasActiveFilters(){ return Object.values(activeFilters).some(v=>v !== undefined && v !== null); }

/* =========================================================
   YÜRÜTME RAPORU (Executive Market Intelligence Report)
   "Yeni sekmede aç" ile açılan bağımsız rapor sayfası için
   ek alanlar üretir ve tam HTML doküman üretir.
   ========================================================= */
const LANGUAGES = {chile:'İspanyolca',germany:'Almanca',usa:'İngilizce',uk:'İngilizce',france:'Fransızca',poland:'Lehçe',netherlands:'Hollandaca',uae:'Arapça',japan:'Japonca',southafrica:'İngilizce, Afrikaanca, Zuluca'};

/* =========================================================
   SEYAHAT PLANLA
   Bölgesel genel bilgi + 10 örnek ülke için gerçek/güncel
   bilinen bilgilerle desteklenmiş, canlı döviz kuruyla
   zenginleştirilmiş seyahat rehberi.
   ========================================================= */

// Bölgesel genel rehber — spesifik ülke verisi olmayan durumlarda kullanılır.
// Bunlar genellemedir, seyahat öncesi güncel resmi kaynaklarla teyit edilmelidir.
const REGION_TRAVEL = {
  mideast: { ride:'Careem ve Uber bölgede yaygın; birçok şehirde ikisi de çalışır.', tapWater:false, simNote:'Havalimanında genellikle 1-2 yerel operatör standı bulunur (turist SIM/eSIM paketleri satılır).' },
  seasia: { ride:'Grab bölgenin baskın uygulaması (Uber\'in yerini almıştır); bazı şehirlerde Gojek de kullanılır.', tapWater:false, simNote:'Havalimanında turist SIM kartı standları yaygındır, ucuz ve kolay temin edilir.' },
  eastasia: { ride:'Yerel uygulamalar hâkim (Çin: Didi, Japonya/Kore: taksi + yerel çağrı uygulamaları); Uber çoğu yerde sınırlı.', tapWater:true, simNote:'Kısa süreli ziyaretler için havalimanında pocket wifi veya eSIM kiralama yaygın ve önerilir.' },
  southasia: { ride:'Ola ve Uber büyük şehirlerde yaygın; küçük şehirlerde yerel taksi/rickshaw ağırlıklı.', tapWater:false, simNote:'Havalimanında turist SIM alımı pasaport ile mümkün, bazen kayıt süreci saatler alabilir.' },
  cis: { ride:'Yandex Go bölgede baskın uygulama; Uber bazı ülkelerde mevcut değil veya Yandex ile birleşmiş.', tapWater:false, simNote:'Havalimanında yerel operatör standı genellikle bulunur.' },
  africa: { ride:'Büyük şehirlerde Uber veya Bolt önerilir (sokak taksisine göre daha güvenli/şeffaf); kırsalda yerel taksi.', tapWater:false, simNote:'Havalimanında yerel operatör standı genellikle bulunur, turist paketleri satılır.' },
  latam: { ride:'Uber ve DiDi bölgede yaygın; Cabify bazı ülkelerde alternatif.', tapWater:false, simNote:'Havalimanında yerel operatör standı genellikle bulunur.' },
  europe: { ride:'Uber ve Bolt çoğu büyük şehirde çalışır; FreeNow (eski MyTaxi) de yaygın bir alternatif.', tapWater:true, simNote:'Havalimanında yerel/uluslararası operatör standları bulunur; AB içinde dolaşım ücretsizdir.' },
  namerica: { ride:'Uber ve Lyft bölgenin standart uygulamalarıdır.', tapWater:true, simNote:'Havalimanında SIM standı bulmak bazı ülkelerde zor olabilir; eSIM önceden alınması önerilir.' },
  oceania: { ride:'Uber büyük şehirlerde yaygın; toplu taşıma da gelişmiştir.', tapWater:true, simNote:'Havalimanında yerel operatör standı bulunur.' },
  asia_other: { ride:'Yerel taksi ve uygulamaları kontrol edin.', tapWater:false, simNote:'Havalimanında yerel operatör standı genellikle bulunur.' },
  other: { ride:'Bölgesel taksi/ulaşım seçeneklerini varış öncesi araştırın.', tapWater:false, simNote:'Yerel operatör bilgisi için havalimanı danışmasını kontrol edin.' }
};

// Gerçek/bilinen uluslararası mobilya fuarları — yıl içindeki tekrar eden ayları ile.
// Sektör haberleri — gerçek, tarihli ve kaynaklı. Statik bir dosya olduğu için otomatik/canlı
// güncellenmez; elle derlenip periyodik olarak güncellenir (bkz. her haberin "Güncelleme" tarihi).
const SECTOR_NEWS = [
  { date:'2026-07-13', title:'NATO Zirvesi mobilya sektörü için yeni ihracat rotası olarak görülüyor',
    body:'MOSFED Başkanı Ahmet Güleç, Ankara\'da düzenlenen ve 70 trilyon dolarlık ekonomik büyüklüğe sahip 40 ülkeyi bir araya getiren NATO Zirvesi\'nin, mobilya sektörünün NATO üyesi ülkelere yönelik ihracatı artırması için stratejik bir fırsat sunduğunu belirtti. Sektörün 2025\'i 8,4 milyar dolar (mobilya, kağıt, orman ürünleri toplamı) ile kapattığını, net mobilya ihracatının 4,6 milyar dolar olduğunu, 10 yıl içinde Çin\'den sonra dünyanın en büyük mobilya/ağaç ürünleri ihracatçısı olma hedefi bulunduğunu vurguladı.',
    source:'Anadolu Ajansı' },
  { date:'2026-07-09', title:'Haziran ayı mobilya ihracatı %18,2 arttı, ilk yarıda Irak açık ara lider',
    body:'Türkiye mobilya, kağıt ve orman ürünleri sektörü Haziran 2026\'da geçen yılın aynı ayına göre %18,2 artışla $694,4M ihracat gerçekleştirdi. Haziran\'da en büyük 5 pazar Irak, Birleşik Krallık, ABD, Libya ve Fas oldu; Libya\'ya ihracat %46,9, Fransa\'ya %39,6, Bulgaristan\'a %30,3 arttı. Ocak-Haziran toplamında ise sektör ihracatı geçen yıla göre %1,8 azalışla $3,75 milyara geriledi — Irak yine en büyük pazar ($427,7M). KKTC\'ye ihracat %21,6 artışla $65,4M\'a ulaştı.',
    source:'Analiz Gazetesi / Fuar Dergisi' },
  { date:'2026-07-11', title:'Hürmüz Boğazı gerginliği, Uzak Doğu sevkiyatlarını azaltıp Türkiye\'ye geçici talep kaydırıyor',
    body:'MOSFED Başkanı Ahmet Güleç, Hürmüz Boğazı çevresindeki gerginliklerin Uzak Doğu\'dan yapılan mobilya sevkiyatlarını azalttığını ve bunun Türkiye\'ye yönelik talebi artırdığını belirtti; ancak bunun kalıcı bir avantaj olarak görülmemesi gerektiğini, Türkiye\'nin birçok sektörde (bazı Avrupa ülkelerinin bile altında kalan) maliyet avantajını kaybettiğini vurguladı.',
    source:'Yıldırım Gazetesi (İnegöl Haber)' },
  { date:'2026-07-06', title:'54. MODEF İnegöl Mobilya Fuarı açıldı — Ticaret Bakanı Bolat: küresel ticaret İsrail-İran gerginliğinden olumsuz etkileniyor',
    body:'Ticaret Bakanı Ömer Bolat, İnegöl\'de düzenlenen 54. MODEF EXPO Uluslararası Mobilya Fuarı\'nın açılışında, İsrail/ABD-İran arasındaki çatışmanın 2026 küresel mal ve hizmet ticareti beklentilerini aşağı yönlü baskıladığını, buna rağmen Türkiye ekonomisinin üretim kapasitesi ve ihracat gücüyle pozitif ayrıştığını söyledi.',
    source:'Anka Haber' },
  { date:'2026-07-08', title:'Haziran ayı mobilya ihracatı %18,2 arttı, Irak liderliğini korudu',
    body:'Türkiye mobilya, kağıt ve orman ürünleri sektörü Haziran 2026\'da geçen yılın aynı ayına göre %18,2 artışla $694,4M ihracat gerçekleştirdi. En büyük pazarlar sırasıyla Irak, İngiltere, ABD, Libya ve Fas oldu; Libya\'ya ihracat %46,9 arttı.',
    source:'Fuar Dergisi' },
  { date:'2026-01-15', title:'ABD\'de döşemeli mobilyaya uygulanan Section 232 vergisi %25\'ten %30\'a çıktı',
    body:'ABD\'nin döşemeli ahşap iskeletli mobilyaya (HS 9401.61) uyguladığı ek gümrük vergisi Ocak 2026 itibarıyla %30\'a yükseldi; mutfak dolabı/tezgahı kategorisinde bu oran %50\'ye kadar çıkabiliyor. İngiltere, AB ve Japonya bu vergiden muaf. Sektör temsilcileri Türkiye\'nin AB\'li rakiplerine karşı rekabet dezavantajına dikkat çekiyor.',
    source:'Türkiye Today' },
  { date:'2025-12-30', title:'AB Ormansızlaşma Karşıtı Tüzüğü (EUDR) büyük işletmeler için yürürlüğe girdi',
    body:'AB\'ye ahşap/mobilya ihracatında tedarik zincirinin ormansızlaşmayla bağlantısız olduğunu gösteren durum tespiti (due diligence) beyanı büyük işletmeler için 30 Aralık 2025\'ten, KOBİ\'ler için 30 Haziran 2026\'dan itibaren zorunlu.',
    source:'T.C. Ticaret Bakanlığı / Kolay İhracat Platformu' },
  { date:'2026-05-07', title:'Türk mobilya sektörü HD Expo 2026\'da "Turkish Contract Hub" markasını tanıttı',
    body:'5-7 Mayıs 2026\'da ABD\'de düzenlenen HD Expo Conference\'ta (otel/konaklama projeleri odaklı dünyanın önemli fuarlarından biri) 10 firmayla milli katılım gerçekleştirildi; proje bazlı çalışan firmalar için "Turkish Contract Hub" markası ilk kez kullanıldı.',
    source:'Dijital Haber' },
  { date:'2026-06-19', title:'Ekim 2026\'da İngiltere\'ye mobilya sektörel ticaret heyeti düzenlenecek',
    body:'İngiltere yıllık $20 milyarın üzerinde mobilya ithal ediyor. Ege Mobilya Kağıt ve Orman Ürünleri İhracatçıları Birliği, 5-9 Ekim 2026 tarihlerinde İngiltere\'ye yönelik ticaret heyeti düzenleyecek; başvurular 29 Haziran 2026\'da sona erdi.',
    source:'Beyaz Haber Ajansı' },
  { date:'2026-01-01', title:'Sektörün 2030 hedefi: $12 milyar ihracat',
    body:'MOSFED Başkanı Ahmet Güleç, Türk mobilya sektörünün 200 ülkeye ihracat yaptığını ve dünya mobilya ticaretinden %2 pay aldığını belirtti. 2026 hedefi $5 milyarın üzeri, 2030 hedefi ise $12 milyar ihracat.',
    source:'Anadolu Ajansı' },
];

const FURNITURE_FAIRS = [
  // Mobilya
  { name:'IIFF — Uluslararası İstanbul Mobilya Fuarı', city:'İstanbul', iso:'TR', months:[1], type:'Mobilya', level:'real', dateNote:'27–31 Ocak 2026 (doğrulanmış)', priority:true },
  { name:'IMM Cologne', city:'Köln', iso:'DE', months:[1], type:'Mobilya', level:'estimated', dateNote:'Her yıl Ocak ayında' },
  { name:'Maison & Objet Paris', city:'Paris', iso:'FR', months:[1,9], type:'Mobilya & İç Mimarlık', level:'estimated', dateNote:'Her yıl Ocak ve Eylül', priority:true },
  { name:'Meble Polska', city:'Poznan', iso:'PL', months:[1], type:'Mobilya', level:'estimated' },
  { name:'Stockholm Furniture Fair', city:'Stockholm', iso:'SE', months:[2], type:'Mobilya', level:'estimated' },
  { name:'Ambiente Frankfurt', city:'Frankfurt', iso:'DE', months:[2], type:'Ev Ürünleri & Mobilya', level:'estimated' },
  { name:'IFFS Singapore', city:'Singapur', iso:'SG', months:[3], type:'Mobilya', level:'estimated' },
  { name:'JIFFINA', city:'Cakarta', iso:'ID', months:[3], type:'Mobilya', level:'estimated' },
  { name:'CIFF Guangzhou', city:'Guangzhou', iso:'CN', months:[3,9], type:'Mobilya', level:'estimated', dateNote:'Her yıl Mart ve Eylül', priority:true },
  { name:'HOTELEX Shanghai', city:'Şanghay', iso:'CN', months:[3,5], type:'Otel Projesi', level:'estimated' },
  { name:'Salone del Mobile Milano', city:'Milano', iso:'IT', months:[4], type:'Mobilya & İç Mimarlık', level:'estimated', dateNote:'Her yıl Nisan ayında', priority:true },
  { name:'High Point Market', city:'High Point', iso:'US', months:[4,10], type:'Mobilya', level:'estimated', dateNote:'Her yıl Nisan ve Ekim' },
  { name:'Interzum Köln', city:'Köln', iso:'DE', months:[5], type:'Mobilya Yan Sanayi', level:'estimated', dateNote:'İki yılda bir (çift yıllar)' },
  { name:'INDEX Dubai', city:'Dubai', iso:'AE', months:[5], type:'Mobilya & İç Mimarlık', level:'estimated' },
  { name:'ICFF New York', city:'New York', iso:'US', months:[5], type:'Mobilya & Tasarım', level:'estimated' },
  { name:'HD Expo', city:'Las Vegas', iso:'US', months:[5], type:'Otel Projesi', level:'real', dateNote:'2026: 5–7 Mayıs (doğrulanmış — Türkiye milli katılımı oldu)' },
  { name:'HIX Hotel Interiors Experience', city:'Londra', iso:'GB', months:[5], type:'Otel Projesi', level:'estimated' },
  { name:'NeoCon Chicago', city:'Chicago', iso:'US', months:[6], type:'Kontrakt Mobilya', level:'estimated' },
  { name:'Riyadh Furniture Fair', city:'Riyad', iso:'SA', months:[6], type:'Mobilya', level:'estimated', dateNote:'Körfez bölgesi mobilya fuarları genelde yaz aylarında — kesin 2026 tarihi doğrulanamadı' },
  { name:'Kayseri Mobilya Fuarı', city:'Kayseri', iso:'TR', months:[6], type:'Mobilya', level:'estimated', dateNote:'Kesin 2026 tarihi doğrulanamadı' },
  { name:'VIFA Expo', city:'Ho Chi Minh', iso:'VN', months:[9], type:'Mobilya', level:'estimated' },
  { name:'Furniture China', city:'Şanghay', iso:'CN', months:[9], type:'Mobilya', level:'estimated' },
  { name:'100% Design London', city:'Londra', iso:'GB', months:[9], type:'İç Mimarlık & Mobilya', level:'estimated' },
  { name:'London Design Festival', city:'Londra', iso:'GB', months:[9], type:'Tasarım', level:'estimated' },
  { name:'Cersaie Bologna', city:'Bologna', iso:'IT', months:[9], type:'Yapı & İç Mekan', level:'estimated' },
  { name:'The Hotel Show Dubai', city:'Dubai', iso:'AE', months:[9], type:'Otel Projesi', level:'estimated' },
  { name:'Feria Hábitat Valencia', city:'Valencia', iso:'ES', months:[9], type:'Mobilya & Aydınlatma', level:'real', dateNote:'28 Eylül – 1 Ekim 2026 (doğrulanmış)', priority:true },
  { name:'MODEF EXPO — İnegöl Mobilya Fuarı', city:'İnegöl (Bursa)', iso:'TR', months:[10], type:'Mobilya', level:'estimated', dateNote:'Geleneksel olarak sonbahar; kesin 2026 tarihi doğrulanamadı', priority:true },
  { name:'Design Miami', city:'Miami', iso:'US', months:[12], type:'Tasarım & Koleksiyon Mobilya', level:'estimated', dateNote:'Art Basel Miami ile birlikte, genelde Aralık' },
  { name:'Decorex London', city:'Londra', iso:'GB', months:[10], type:'İç Mimarlık', level:'estimated' },
  { name:'Host Milano', city:'Milano', iso:'IT', months:[10], type:'Otel & Ağırlama Ekipmanları', level:'estimated' },
  { name:'Sofa Exhibition', city:'Ghent', iso:'BE', months:[10], type:'Mobilya', level:'estimated' },
  { name:'The Independent Hotel Show', city:'Londra', iso:'GB', months:[10], type:'Otel Projesi', level:'estimated' },
  { name:'Equip Hotel Paris', city:'Paris', iso:'FR', months:[11], type:'Otel Projesi', level:'estimated' },
  { name:'BDNY (Boutique Design New York)', city:'New York', iso:'US', months:[11], type:'Otel Projesi', level:'estimated' },
  { name:'Sleep Event', city:'Londra', iso:'GB', months:[11], type:'Otel Projesi', level:'estimated' },
  { name:'Downtown Design Dubai', city:'Dubai', iso:'AE', months:[11], type:'Tasarım' },
];

// 10 örnek ülke için bilinen, gerçek bilgiler (genel bölgesel veriden daha isabetli).
const TRAVEL_OVERRIDES = {
  chile: {
    sim:['Movistar','Entel','Claro','WOM'], simAirport:true,
    ride:'Uber, Cabify ve DiDi Santiago\'da yaygın ve güvenilir; havalimanında resmi taksi standı da mevcut.',
    tapWater:true, tapWaterNote:'Santiago ve büyük şehirlerde musluk suyu genellikle içilebilir (Şili, Latin Amerika\'da bu konuda istisnadır).',
    safety:['And Dağları bölgesinde yüksek irtifa rahatsızlığına karşı dikkatli olun.','Büyük şehirlerde gece yalnız yürümekten kaçının, özellikle merkez dışı bölgelerde.','Deprem riski olan bir ülke — bina tahliye noktalarını öğrenin.'],
    flight:{direct:false, note:'İstanbul\'dan Santiago\'ya direkt uçuş yok; genellikle Avrupa (Madrid) veya Sao Paulo üzerinden aktarmalı gidilir.'},
    mustSee:['Valparaíso\'nun renkli sokakları ve sokak sanatı','Cajón del Maipo doğa bölgesi','Santiago Bellas Artes Müzesi']
  },
  germany: {
    sim:['Telekom (T-Mobile)','Vodafone','O2'], simAirport:true,
    ride:'Uber sınırlı şehirlerde çalışır; FreeNow ile taksi çağırmak daha yaygın ve güvenilir.',
    tapWater:true, tapWaterNote:'Musluk suyu Avrupa\'nın en güvenli sularından biri, çekinmeden için.',
    safety:['Genel olarak çok güvenli bir ülke.','Büyük şehir merkezlerinde (özellikle gece istasyonlarda) cep telefonu hırsızlığına dikkat edin.','Pazar günleri çoğu mağaza kapalıdır, buna göre planlayın.'],
    flight:{direct:true, note:'İstanbul\'dan Frankfurt, Münih, Berlin ve birçok Alman şehrine günlük direkt seferler mevcut (THY, Pegasus ve diğerleri).'},
    mustSee:['Berlin Brandenburg Kapısı','Neuschwanstein Şatosu','Köln Katedrali']
  },
  usa: {
    sim:['Verizon','AT&T','T-Mobile'], simAirport:false,
    ride:'Uber ve Lyft neredeyse her yerde standart; havalimanı taksileri pahalı olabilir.',
    tapWater:true, tapWaterNote:'Musluk suyu genellikle güvenli, büyük şehirlerde içilebilir.',
    safety:['Şehre göre güvenlik seviyesi çok değişir — gideceğiniz mahalleyi önceden araştırın.','Sağlık sigortası mutlaka yaptırın, sağlık hizmetleri çok pahalıdır.','Bahşiş kültürü yaygındır (%15-20 civarı beklenir).'],
    flight:{direct:true, note:'İstanbul\'dan New York, Los Angeles, Chicago, Miami gibi büyük hublara direkt seferler var; diğer şehirler genellikle bu hublardan aktarmalı.'},
    mustSee:['New York — Times Square ve Manhattan','Grand Canyon (Arizona)','San Francisco — Golden Gate Köprüsü']
  },
  uk: {
    sim:['EE','O2','Vodafone','Three'], simAirport:true,
    ride:'Uber Londra ve büyük şehirlerde yaygın; siyah taksiler (black cab) güvenilir ama pahalı.',
    tapWater:true, tapWaterNote:'Musluk suyu güvenli ve içilebilir.',
    safety:['Genel olarak güvenli, büyük şehir merkezlerinde cep telefonu/çanta hırsızlığına dikkat edin.','Trafik sol şeritten akar, karşıdan karşıya geçerken dikkatli olun.'],
    flight:{direct:true, note:'İstanbul\'dan Londra\'ya (birden fazla havalimanı) günlük çok sayıda direkt sefer mevcut.'},
    mustSee:['Big Ben & Westminster Sarayı','British Museum','Edinburgh Kalesi (İskoçya)']
  },
  france: {
    sim:['Orange','SFR','Bouygues Telecom','Free Mobile'], simAirport:true,
    ride:'Uber Paris ve büyük şehirlerde çalışır; taksi durakları da yaygın.',
    tapWater:true, tapWaterNote:'Musluk suyu güvenli, "l\'eau du robinet" olarak restoranlarda ücretsiz istenebilir.',
    safety:['Turistik bölgelerde (özellikle Paris metrosunda) yankesicilere karşı dikkatli olun.','Grev (grève) dönemlerinde toplu taşıma aksayabilir, seyahat öncesi kontrol edin.'],
    flight:{direct:true, note:'İstanbul\'dan Paris\'e günlük çok sayıda direkt sefer mevcut.'},
    mustSee:['Eyfel Kulesi','Louvre Müzesi','Versay Sarayı']
  },
  poland: {
    sim:['Orange','Play','Plus','T-Mobile'], simAirport:true,
    ride:'Uber, Bolt ve FreeNow büyük şehirlerde yaygın ve ucuz.',
    tapWater:true, tapWaterNote:'Musluk suyu güvenli, bazı bölgelerde sertlik nedeniyle tadı farklı olabilir.',
    safety:['Genel olarak güvenli bir ülke.','Kış aylarında yollar buzlanabilir, araç kiralarken kış lastiği kontrol edin.'],
    flight:{direct:true, note:'İstanbul\'dan Varşova\'ya günlük direkt seferler mevcut.'},
    mustSee:['Krakow — Wawel Kalesi','Auschwitz-Birkenau Anıt Müzesi','Varşova Eski Şehir']
  },
  netherlands: {
    sim:['KPN','Vodafone','T-Mobile'], simAirport:true,
    ride:'Uber çalışır ama şehir içi bisiklet/toplu taşıma çok daha yaygın ve pratiktir.',
    tapWater:true, tapWaterNote:'Musluk suyu dünyanın en güvenli/kaliteli sularından biri.',
    safety:['Bisiklet yollarına dikkat edin — yayalar için ayrıca tehlike oluşturabilir.','Genel olarak çok güvenli bir ülke.'],
    flight:{direct:true, note:'İstanbul\'dan Amsterdam\'a günlük direkt seferler mevcut.'},
    mustSee:['Amsterdam Rijksmuseum','Kinderdijk yel değirmenleri','Anne Frank Evi']
  },
  uae: {
    sim:['Etisalat','du'], simAirport:true,
    ride:'Careem ve Uber Dubai/Abu Dabi\'de çok yaygın ve güvenilir.',
    tapWater:false, tapWaterNote:'Musluk suyu teknik olarak arıtılmış olsa da şişe su tercih etmek standart uygulamadır.',
    safety:['Alkol tüketimi ve kamusal alanda davranış konusunda katı kurallar vardır — yerel yasalara dikkat edin.','Ramazan ayında gündüz saatlerinde kamuya açık yerlerde yeme/içmeden kaçının.','Sıcaklık yaz aylarında 45°C\'yi geçebilir, güneş çarpmasına karşı dikkatli olun.'],
    flight:{direct:true, note:'İstanbul\'dan Dubai ve Abu Dabi\'ye günlük çok sayıda direkt sefer mevcut.'},
    mustSee:['Burj Khalifa & Dubai Fıskiyeleri','Dubai Marina','Şeyh Zayed Camii (Abu Dabi)']
  },
  japan: {
    sim:['NTT Docomo','SoftBank','au (KDDI)'], simAirport:true,
    ride:'Taksi ağı çok güvenilir ve yaygın; Uber sınırlı ve pahalıdır. Havalimanında pocket wifi/eSIM kiralama çok yaygın.',
    tapWater:true, tapWaterNote:'Musluk suyu dünyanın en güvenli sularından biri, çekinmeden için.',
    safety:['Son derece güvenli bir ülke, suç oranı çok düşük.','Toplu taşımada sessiz olmak kültürel bir beklentidir.','Nakit hâlâ yaygın kullanılır, her yerde kart geçmeyebilir.'],
    flight:{direct:true, note:'İstanbul\'dan Tokyo\'ya (Narita) THY ile direkt sefer mevcut (2019\'dan beri).'},
    mustSee:['Tokyo — Meiji Türbesi','Kyoto — Fushimi Inari Tapınağı','Fuji Dağı manzara noktaları']
  },
  southafrica: {
    sim:['Vodacom','MTN','Cell C'], simAirport:true,
    ride:'Uber ve Bolt, sokak taksisine göre çok daha güvenli ve önerilen seçenektir.',
    tapWater:true, tapWaterNote:'Büyük şehirlerde (Cape Town, Johannesburg) musluk suyu genellikle güvenlidir, yine de şişe su tercih edilebilir.',
    safety:['Gece yalnız yürümeyin, özellikle şehir merkezlerinde — güvenilir ulaşım (Uber/Bolt) kullanın.','Değerli eşyalarınızı görünür şekilde taşımayın.','Bazı bölgelerde suç oranı yüksektir, gideceğiniz mahalleyi önceden araştırın.'],
    flight:{direct:true, note:'İstanbul\'dan Johannesburg\'a THY ile direkt sefer mevcut.'},
    mustSee:['Cape Town — Table Mountain','Robben Island','Kruger Ulusal Parkı']
  },
  // Aşağıdaki ülkeler için güvenlik/seyahat maddeleri gerçek kaynaklardan araştırılmıştır
  // (İspanya Dışişleri, ABD Dışişleri, T.C. Seyahat Sağlığı, T.C. büyükelçilik duyuruları vb.).
  senegal: {
    tapWater:false, tapWaterNote:'Musluk suyu önerilmez; yerel şişe su markaları (Kirene, Baobab) tercih edilmeli, şişelerin güneşe maruz kalmadığından emin olun.',
    safety:['Gece yaya yürümekten kaçının — özellikle Dakar\'da yankesicilik/kapkaç riski artıyor; havaalanında sizi karşılayan kişinin gerçekten atanmış olduğundan emin olun.','Sarı humma aşısı zorunlu/önerilir; Hepatit A ve Tifo aşıları da tavsiye edilir.','Casamance bölgesinde (Ziguinchor, Cap Skirring çevresi dışında) asfalt yoldan çıkmayın — mayın riski bildirilmiştir.','Eşcinsellik yasal olarak suçtur, kamuya açık alanlarda buna göre davranın; uyuşturucu bulundurmak ağır şekilde cezalandırılır.'],
  },
  kenya: {
    tapWater:false, tapWaterNote:'Musluk suyu içilmez, şişe su tercih edin.',
    safety:['Sarı humma aşısı girişte zorunludur (seyahatten en az 10 gün önce yaptırılmalı); sıtma riski olan bölgeler için koruyucu ilaç ve cibinlik önerilir.','Nairobi\'de Eastleigh ve Kibera mahalleleri ile Turkana bölgesine suç/kaçırılma riski nedeniyle gidilmesi önerilmez; Kenya-Somali sınır bölgeleri terör riski taşır.','Hava karardıktan sonra şehir içinde tek başına dolaşmaktan kaçının, güvenilir ulaşım kullanın.','Tek kullanımlık plastik poşetler ülkeye sokulamaz — havaalanında el konulabilir, ciddi para/hapis cezası riski vardır.'],
  },
  vietnam: {
    tapWater:false, tapWaterNote:'Musluk suyu içilmez, şişe su tercih edin.',
    ride:'Grab bölgede baskın uygulama; motosiklet taksi (xe om) de Grab üzerinden güvenle çağrılabilir.',
    safety:['Kalabalık turistik alanlarda nakit, kart, pasaport ve telefonunuzu dikkatli taşıyın; değerli eşyaları otel kasasında bırakın.','Trafik kurallarına uyum düşüktür — karşıdan karşıya geçerken ani hareketlerden kaçının, istikrarlı ve öngörülebilir bir tempoyla ilerleyin.','Sokak satıcılarından yiyecek/içecek alırken temkinli olun.','Türkiye ile Vietnam arasında sosyal güvenlik anlaşması yoktur — kapsamlı bir seyahat sağlık sigortası şart, aksi halde hastane masrafları yüksek olabilir.'],
  },
  nigeria: {
    tapWater:false, tapWaterNote:'Musluk suyu içilmez, şişe su tercih edin.',
    safety:['Lagos ve büyük şehirlerde gece dışarı çıkmaktan kaçının; güvenilir ulaşım (havaalanı transferi dahil) önceden ayarlanmalı.','Kuzey ve kuzeydoğu bölgelerine (Boko Haram riski nedeniyle) ve Niger Deltası\'na seyahat önerilmez — ana iş şehirleri (Lagos, Abuja) bu kapsamın dışındadır ama yine de dikkat gerektirir.','Sarı humma aşısı girişte zorunludur.','Kalabalık yerlerde/pazarlarda değerli eşyalarınıza dikkat edin, kapkaç riski mevcuttur.'],
  },
  // Aşağıdakiler, tersine bir düzeltme: bunlar dünyanın nesnel olarak EN GÜVENLİ ülkelerinden
  // (Global Peace Index sıralamalarında sürekli üst sıralarda) — eski jenerik "gece dışarı çıkma,
  // tropik hastalık" şablonu bu ülkeler için yanıltıcı ve gerçek dışıydı.
  oman: {
    tapWater:true, tapWaterNote:'Şehirlerde musluk suyu arıtılmış ve genel olarak güvenlidir; yine de çoğu ziyaretçi tat tercihiyle şişe su kullanır.',
    ride:'Careem ve Uber Maskat başta olmak üzere büyük şehirlerde yaygın ve güvenilir.',
    safety:['Umman, Küresel Barış Endeksi\'nde dünyanın en güvenli ülkelerinden biridir — suç oranı çok düşüktür, gece güvenlik endişesi diğer birçok ülkeye göre çok daha azdır.','Yaz aylarında sıcaklık 50°C\'yi bulabilir — güneş çarpması/sıvı kaybına karşı dikkatli olun, öğle saatlerinde açık havada ağır aktiviteden kaçının.','Nadir de olsa şiddetli yağış sonrası vadilerde (wadi) ani sel riski gerçektir — uyarı olduğunda vadi yataklarından uzak durun.','Muhafazakâr bir toplumdur; özellikle turistik olmayan alanlarda mütevazı giyim beklenir.'],
  },
  qatar: {
    tapWater:true, tapWaterNote:'Musluk suyu arıtılmıştır ve güvenlidir; yine de birçok kişi tat nedeniyle şişe suyu tercih eder.',
    ride:'Careem ve Uber Doha\'da yaygın ve güvenilir.',
    safety:['Katar, dünyanın en düşük suç oranına sahip ülkelerinden biridir — gece güvenliği konusunda diğer birçok ülkeye kıyasla endişelenmenize gerek yok.','Alkol tüketimi ve kamusal alanda davranış konusunda kurallara dikkat edin; sadece lisanslı otel bar/restoranlarında alkol servisi vardır.','Yaz aylarında aşırı sıcak ve nem görülür, açık havada aktiviteleri sabah/akşam saatlerine planlayın.'],
  },
  switzerland: {
    tapWater:true, tapWaterNote:'Musluk suyu mükemmel kalitede ve tamamen güvenlidir, şişe su almanıza gerek yok.',
    ride:'Uber mevcuttur ama toplu taşıma (tren/tramvay) çok daha yaygın, dakik ve güvenilirdir.',
    safety:['İsviçre dünyanın en güvenli ülkelerinden biridir — şiddet suçu oranı çok düşüktür.','Dağlık bölgelerde (yürüyüş/kayak) hava koşulları hızla değişebilir, güncel hava durumu ve rota bilgisini kontrol edin.','Toplu taşımada biletsiz yolculuk ağır para cezasına tabidir.'],
  },
  iceland: {
    tapWater:true, tapWaterNote:'Musluk suyu dünyanın en temiz sularından biridir, güvenle için.',
    ride:'Şehir içi taksi güvenilirdir; İzlanda\'da toplu taşıma ve kiralık araç en yaygın ulaşım şeklidir.',
    safety:['İzlanda, Küresel Barış Endeksi\'nde yıllardır dünyanın en güvenli ülkesi olarak listelenir — suç oranı son derece düşüktür.','Asıl risk doğa koşullarıdır: ani hava değişimleri, buzlu yollar ve güçlü kıyı dalgaları (özellikle siyah kumlu plajlarda) — resmi uyarı ve rota bilgilerini takip edin.','Kırsalda tek şeritli köprüler ve çakıl yollar dikkatli sürüş gerektirir.'],
  },
  singapore: {
    tapWater:true, tapWaterNote:'Musluk suyu dünya standartlarında arıtılmıştır, doğrudan içilebilir.',
    ride:'Grab bölgenin baskın uygulamasıdır; toplu taşıma (MRT) da çok gelişmiş ve güvenilirdir.',
    safety:['Singapur, çok düşük suç oranı ve sıkı kanun uygulamasıyla dünyanın en güvenli şehir devletlerinden biridir.','Kurallara uyum konusunda çok katıdır — çöp atma, sakız ithali, jaywalking gibi konularda bile ciddi para cezaları uygulanır.','Uyuşturucu bulundurmak/kaçakçılığı en ağır şekilde (idam dahil) cezalandırılır.'],
  }
};

function getRegion(country){ return REGION_MAP[country.iso] || 'other'; }

function getTravelInfo(country){
  const region = getRegion(country);
  const base = REGION_TRAVEL[region];
  const override = TRAVEL_OVERRIDES[country.id] || {};
  const merged = Object.assign({ region }, base, override);
  if(merged.tapWaterNote === undefined){
    merged.tapWaterNote = merged.tapWater
      ? 'Genel olarak bu bölgede musluk suyu güvenli kabul edilir, yine de yerel tavsiyeleri kontrol edin.'
      : 'Bu bölgede musluk suyu içmek önerilmez, şişe su tercih edin.';
  }
  if(merged.sim === undefined) merged.sim = null;
  if(merged.safety === undefined) merged.safety = null;
  if(merged.mustSee === undefined) merged.mustSee = null;
  merged.sourced = !!TRAVEL_OVERRIDES[country.id];
  return merged;
}

async function fetchLiveRate(currencyCode){
  if(!currencyCode || currencyCode === 'USD') return { rate:1, updated:null };
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD');
    if(!res.ok) return null;
    const data = await res.json();
    if(data && data.rates && data.rates[currencyCode]){
      return { rate: data.rates[currencyCode], updated: data.time_last_update_utc };
    }
    return null;
  } catch(e){ return null; }
}

/* ---- Uçuş: mesafe/süre gerçek hesap, fiyat kaba tahmin ---- */
function estimateFlight(country){
  const distKm = haversineKm(ISTANBUL_COORDS.lat, ISTANBUL_COORDS.lon, country.lat, country.lon);
  const hours = distKm/850 + 0.75;
  const priceLow = Math.max(150, Math.round(distKm*0.075/10)*10);
  const priceHigh = Math.max(250, Math.round(distKm*0.135/10)*10);
  const override = TRAVEL_OVERRIDES[country.id];
  const connection = override && override.flight ? override.flight : {
    direct: distKm < 3500,
    note: distKm < 3500
      ? 'Bu mesafede İstanbul\'dan genellikle direkt uçuş seçenekleri bulunur (kesinleştirmek için uçuş arama motorlarını kontrol edin).'
      : 'Bu mesafede genellikle bir aktarma (Avrupa, Körfez veya Asya hub\'ları üzerinden) gerekebilir.'
  };
  return { distKm: Math.round(distKm), hours, priceLow, priceHigh, connection };
}
function estimateCarRental(country){
  const gdp = numFromMoney(country.gdpPerCapita);
  if(gdp > 40000) return { low:35, high:75 };
  if(gdp > 15000) return { low:22, high:50 };
  return { low:15, high:35 };
}

/* ---- Hava durumu: 16 gün içindeyse canlı tahmin, uzaksa geçen yılın aynı tarihleri ---- */
async function fetchWeatherInfo(country, startDate, endDate){
  const today = new Date(); today.setHours(0,0,0,0);
  const diffDays = Math.round((startDate - today) / 86400000);
  try {
    if(diffDays >= 0 && diffDays <= 15){
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${country.lat}&longitude=${country.lon}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_mean&timezone=auto&forecast_days=16`;
      const res = await fetch(url);
      if(!res.ok) return null;
      const data = await res.json();
      const startStr = startDate.toISOString().slice(0,10), endStr = endDate.toISOString().slice(0,10);
      const idxStart = data.daily.time.indexOf(startStr);
      if(idxStart === -1) return null;
      let idxEnd = data.daily.time.indexOf(endStr);
      if(idxEnd === -1) idxEnd = data.daily.time.length - 1;
      const maxT = data.daily.temperature_2m_max.slice(idxStart, idxEnd+1);
      const minT = data.daily.temperature_2m_min.slice(idxStart, idxEnd+1);
      const rain = (data.daily.precipitation_probability_mean || []).slice(idxStart, idxEnd+1);
      return {
        type:'forecast',
        avgMax: Math.round(maxT.reduce((a,b)=>a+b,0)/maxT.length),
        avgMin: Math.round(minT.reduce((a,b)=>a+b,0)/minT.length),
        rainChance: rain.length ? Math.round(rain.reduce((a,b)=>a+b,0)/rain.length) : null
      };
    } else {
      const ly = (d)=>{ const nd = new Date(d); nd.setFullYear(nd.getFullYear()-1); return nd; };
      const s = ly(startDate).toISOString().slice(0,10), e = ly(endDate).toISOString().slice(0,10);
      const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${country.lat}&longitude=${country.lon}&start_date=${s}&end_date=${e}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto`;
      const res = await fetch(url);
      if(!res.ok) return null;
      const data = await res.json();
      if(!data.daily || !data.daily.temperature_2m_max || !data.daily.temperature_2m_max.length) return null;
      const maxT = data.daily.temperature_2m_max, minT = data.daily.temperature_2m_min;
      const rainDays = (data.daily.precipitation_sum || []).filter(p=>p>1).length;
      return {
        type:'seasonal',
        avgMax: Math.round(maxT.reduce((a,b)=>a+b,0)/maxT.length),
        avgMin: Math.round(minT.reduce((a,b)=>a+b,0)/minT.length),
        rainDays, totalDays: maxT.length
      };
    }
  } catch(e){ return null; }
}

/* ---- Resmi tatiller (Nager.Date) ---- */
async function fetchHolidayInfo(country, startDate, endDate){
  if(!country.iso) return { supported:false, holidays:[] };
  try {
    const years = [...new Set([startDate.getFullYear(), endDate.getFullYear()])];
    let all = [], anyOk = false;
    for(const y of years){
      const res = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${y}/${country.iso}`);
      if(res.ok){ anyOk = true; all = all.concat(await res.json()); }
    }
    if(!anyOk) return { supported:false, holidays:[] };
    const inRange = all.filter(h=>{
      const d = new Date(h.date+'T00:00:00');
      return d >= startDate && d <= endDate;
    });
    return { supported:true, holidays:inRange };
  } catch(e){ return { supported:false, holidays:[] }; }
}
function getFairOverlap(country, startDate, endDate){
  const months = new Set();
  const cur = new Date(startDate);
  while(cur <= endDate){ months.add(cur.getMonth()+1); cur.setDate(cur.getDate()+1); }
  return {
    inCountry: FURNITURE_FAIRS.filter(f=> f.iso===country.iso && f.months.some(m=>months.has(m))),
    elsewhere: FURNITURE_FAIRS.filter(f=> f.iso!==country.iso && f.months.some(m=>months.has(m)))
  };
}

const HOTEL_TIERS = [
  { tier:'Lüks', budget:'gecelik $180+', chains:'Four Seasons, Hyatt, Marriott, Hilton gibi uluslararası zincirlerin şehir merkezi/iş bölgesi şubeleri' },
  { tier:'Orta Segment', budget:'gecelik $70–180', chains:'Novotel, Mercure, Holiday Inn, Radisson gibi zincirlerin şehir merkezine yakın şubeleri' },
  { tier:'Bütçe Dostu', budget:'gecelik $70 altı', chains:'Ibis, Premier Inn veya güçlü puanlı yerel butik oteller' },
];
function renderHotelSuggestions(country){
  return HOTEL_TIERS.map(h=>`
    <div class="opp-card">
      <div class="opp-t">${h.tier} <span style="color:var(--text-2); font-weight:400;">· ${h.budget}</span></div>
      <div class="opp-d">${h.chains}. Booking.com veya Google Haritalar'da "${country.name} mobilya / dekorasyon bölgesi" yakınında filtreleme yaparak seçenekleri karşılaştırın.</div>
    </div>`).join('');
}

async function renderTravelPlan(country, days, startDate, endDate){
  const resultsEl = document.getElementById('travelResults');
  const info = getTravelInfo(country);
  const flight = estimateFlight(country);
  const carRental = estimateCarRental(country);
  resultsEl.innerHTML = `<div class="footnote">Bilgiler hazırlanıyor (canlı hava durumu, kur ve resmi tatil verileri çekiliyor)…</div>`;

  const [rateResult, weather, holidayInfo] = await Promise.all([
    fetchLiveRate(country.currency),
    fetchWeatherInfo(country, startDate, endDate),
    fetchHolidayInfo(country, startDate, endDate)
  ]);
  const fairs = getFairOverlap(country, startDate, endDate);

  const rateHtml = rateResult
    ? `<div class="kpi-val" style="font-size:20px;">1 USD ≈ ${rateResult.rate.toFixed(2)} ${country.currency}</div><div class="footnote" style="margin:6px 0 0;">${rateResult.updated ? 'Canlı kur · Kaynak: exchangerate-api.com · Güncelleme: '+rateResult.updated : 'Baz para birimi'}</div>`
    : `<div class="kpi-val" style="font-size:16px; color:var(--text-2);">Canlı kur alınamadı</div><div class="footnote" style="margin:6px 0 0;">İnternet bağlantınızı kontrol edin veya xe.com üzerinden güncel kuru kontrol edin.</div>`;

  const weatherHtml = weather
    ? (weather.type === 'forecast'
        ? `<div class="kpi-val" style="font-size:20px;">${weather.avgMin}° – ${weather.avgMax}°C</div><div class="footnote" style="margin:6px 0 0;">Canlı hava tahmini (Open-Meteo) · ${weather.rainChance!==null ? 'Ortalama yağış olasılığı %'+weather.rainChance : ''}</div>`
        : `<div class="kpi-val" style="font-size:20px;">${weather.avgMin}° – ${weather.avgMax}°C</div><div class="footnote" style="margin:6px 0 0;">Bu tarihler 16 günlük tahmin aralığının dışında — geçen yılın aynı tarihlerine ait gerçek verilerden mevsimsel beklenti hesaplandı (${weather.rainDays}/${weather.totalDays} gün yağışlı geçmiş).</div>`)
    : `<div class="kpi-val" style="font-size:15px; color:var(--text-2);">Hava durumu verisi alınamadı</div><div class="footnote" style="margin:6px 0 0;">İnternet bağlantınızı kontrol edin.</div>`;

  let holidayHtml;
  if(!holidayInfo.supported){
    holidayHtml = `<div class="opp-card"><div class="opp-d">Bu ülke için resmi tatil verisi otomatik kontrol edilemedi — seyahat öncesi yerel takvimi kontrol etmenizi öneririz.</div></div>`;
  } else if(holidayInfo.holidays.length === 0){
    holidayHtml = `<div class="opp-card"><div class="opp-d">✓ Seçtiğiniz tarihlerde ${country.name}'de resmi tatil görünmüyor — iş görüşmeleri için uygun bir dönem.</div></div>`;
  } else {
    holidayHtml = holidayInfo.holidays.map(h=>`<div class="opp-card"><div class="opp-d">⚠ ${new Date(h.date+'T00:00:00').toLocaleDateString('tr-TR')} — ${h.localName || h.name} (resmi tatil). Bu günlerde işyerleri/showroomlar kapalı olabilir.</div></div>`).join('');
  }
  if(fairs.inCountry.length){
    holidayHtml += fairs.inCountry.map(f=>`<div class="opp-card" style="border-color:rgba(63,208,192,0.35);"><div class="opp-d"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:5px; opacity:0.85;"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none"/></svg><b>${f.name}</b>${dqBadge(f.level)} (${f.city}, ${f.type}) bu dönemde gerçekleşiyor olabilir — sektör için büyük fırsat, tarihleri kesinleştirin!</div></div>`).join('');
  }
  if(fairs.elsewhere.length){
    holidayHtml += `<div class="opp-card"><div class="opp-d">ℹ Aynı dönemde başka bir yerde şu fuar(lar) da olabilir: ${fairs.elsewhere.map(f=>f.name+' ('+f.city+', '+f.type+')').join(', ')}.</div></div>`;
  }

  const simHtmlFinal = info.sim
    ? `<div class="card-value" style="font-size:16px;">${info.sim.join(' · ')}</div><div class="footnote" style="margin-top:8px;">${info.simAirport ? '✓ Havalimanında bu operatörlerin standı genellikle bulunur.' : 'Havalimanında SIM bulmak zor olabilir — önceden eSIM almanız önerilir.'}</div>`
    : `<div class="footnote">${REGION_TRAVEL[info.region].simNote}</div>`;

  const mustSeeHtml = info.mustSee
    ? info.mustSee.map(m=>`<div class="opp-card"><div class="opp-d"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:4px; opacity:0.8;"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/></svg>${m}</div></div>`).join('')
    : `<div class="opp-card"><div class="opp-d"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:4px; opacity:0.8;"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/></svg>Şehir merkezindeki tarihi bölgeyi ve yerel pazarları gezmenizi öneririz — Google Haritalar veya TripAdvisor'da "en çok ziyaret edilen yerler" filtresiyle güncel öneriler bulabilirsiniz.</div></div>`;

  const TROPICAL_DISEASE_REGIONS = new Set(['seasia','southasia','africa','latam']);
  const riskLower = (country.politicalRisk || '').toLowerCase();
  const isLowRisk = riskLower.includes('düşük') && !riskLower.includes('orta');
  const nightSafetyNote = isLowRisk
    ? 'Bu ülke genel olarak düşük riskli kabul edilir; yine de her seyahatte olduğu gibi değerli eşyalarınıza dikkat edin ve sağduyulu davranın.'
    : 'Gece geç saatlerde yalnız dışarı çıkmaktan kaçının, güvenilir ulaşım kullanın.';
  const safetyHtml = info.safety
    ? info.safety.map(s=>`<div class="opp-card"><div class="opp-d">⚠ ${s}</div></div>`).join('')
    : `<div class="opp-card"><div class="opp-d">⚠ ${info.tapWaterNote}</div></div>
       ${TROPICAL_DISEASE_REGIONS.has(info.region) ? `<div class="opp-card"><div class="opp-d">⚠ Sivrisinek kaynaklı hastalık riski olan bölgelerde repellent kullanın ve mümkünse uzun kollu giyinin.</div></div>` : ''}
       <div class="opp-card"><div class="opp-d">${isLowRisk ? '✓' : '⚠'} ${nightSafetyNote}</div></div>`;

  resultsEl.innerHTML = `
    <div class="cp-section" style="padding-top:8px;">
      <div class="cp-section-title"><span class="num">01</span> Uçuş Bilgisi</div>
      <div class="panel-grid">
        <div class="card"><div class="card-label">Mesafe / Tahmini Süre</div><div class="card-value" style="font-size:18px;">${flight.distKm.toLocaleString('tr-TR')} km · ~${flight.hours.toFixed(1)} sa</div></div>
        <div class="card"><div class="card-label">${flight.connection.direct ? 'Direkt Uçuş' : 'Aktarmalı Uçuş'}</div><div class="footnote" style="margin:0; font-size:11px;">${flight.connection.note}</div></div>
        <div class="card"><div class="card-label">Tahmini Ekonomi Bilet (gidiş-dönüş)</div><div class="card-value" style="font-size:18px;">$${flight.priceLow}–${flight.priceHigh}</div><div class="footnote" style="margin-top:4px;">Kaba tahmin — kesin fiyat için uçuş arama motorlarını kontrol edin.</div></div>
      </div>
    </div>

    <div class="cp-section">
      <div class="cp-section-title"><span class="num">02</span> Hava Durumu</div>
      <div class="card">${weatherHtml}</div>
    </div>

    <div class="cp-section">
      <div class="cp-section-title"><span class="num">03</span> Resmi Tatil & Fuar Takvimi</div>
      <div class="opp-grid">${holidayHtml}</div>
    </div>

    <div class="cp-section">
      <div class="cp-section-title"><span class="num">04</span> Para Birimi & Kur</div>
      <div class="panel-grid">
        <div class="card"><div class="card-label">Yerel Para Birimi</div><div class="card-value">${country.currency}</div></div>
        <div class="card">${rateHtml}</div>
        <div class="card"><div class="card-label">${days} Günlük Tahmini Bütçe (orta segment)</div><div class="card-value" style="font-size:15px;">Konaklama + yemek + ulaşım için günlük $80-150 aralığı makul bir başlangıç noktasıdır.</div></div>
      </div>
    </div>

    <div class="cp-section">
      <div class="cp-section-title"><span class="num">05</span> Yerel SIM Kart</div>
      <div class="card">${simHtmlFinal}</div>
    </div>

    <div class="cp-section">
      <div class="cp-section-title"><span class="num">06</span> Ulaşım: Araç Kirala mı, Uygulama mı?</div>
      <div class="panel-grid">
        <div class="card" style="grid-column:span 2;"><div class="card-value" style="font-size:15px; line-height:1.6;">${info.ride}</div><div class="footnote" style="margin-top:10px;">Genel kural: Sadece şehir içi geziyorsanız (fuar/showroom ziyaretleri) uygulama ile taksi daha pratik ve ucuzdur. Şehirler arası veya kırsal bölge ziyareti planlıyorsanız araç kiralama daha esnek olur.</div></div>
        <div class="card"><div class="card-label">Tahmini Günlük Araç Kiralama</div><div class="card-value" style="font-size:18px;">$${carRental.low}–${carRental.high}</div><div class="footnote" style="margin-top:4px;">Ekonomi sınıf araç, kaba tahmin.</div></div>
      </div>
    </div>

    <div class="cp-section">
      <div class="cp-section-title"><span class="num">07</span> Otel Önerileri (Mobilya Bölgesine Yakın)</div>
      <div class="opp-grid">${renderHotelSuggestions(country)}</div>
    </div>

    <div class="cp-section">
      <div class="cp-section-title"><span class="num">08</span> Vaktin Varsa Uğramalısın</div>
      <div class="opp-grid">${mustSeeHtml}</div>
    </div>

    <div class="cp-section" style="border-bottom:none;">
      <div class="cp-section-title"><span class="num">09</span> Dikkat Edilmesi Gerekenler</div>
      <div class="opp-grid">${safetyHtml}</div>
      <div class="footnote" style="margin-top:16px;">⚠ Bu bilgiler genel bir rehberdir. Seyahat öncesi mutlaka T.C. Dışişleri Bakanlığı'nın güncel seyahat uyarılarını ve gerekiyorsa aşı/sağlık önerilerini kontrol edin.</div>
    </div>
  `;
}


const NEG_STYLES = ['Doğrudan ve hızlı','İlişki odaklı, yavaş ilerleyen','Resmi ve hiyerarşik','Fiyat pazarlığına açık','Yazılı teyit önceliğinde'];
const MEETING_CULTURES = ['Zamanında başlar, kısa ve net','Önce sohbet, sonra iş — ilişki kurma önemli','Hiyerarşik, karar vericiyle görüşme şart','Uzaktan (video) toplantılar yaygın'];
const DECISION_STYLES = ['Hızlı, tek karar verici','Komite/onay süreci uzun sürebilir','Aile şirketi yapısı, güven inşası zaman alır','Merkezi satın alma departmanı üzerinden'];
const PAYMENT_HABITS = ['Peşin/LC tercih edilir','30-60 gün vade yaygın','Akreditif (L/C) standarttır','Nakit akışı düzensiz olabilir, teminat önerilir'];

function generateExtraFields(country){
  const rnd = mulberry32(hashSeed(country.id + 'extra'));
  const r=(a,b)=>a+rnd()*(b-a);
  const realInflation = REAL_INFLATION[country.id];
  const hasRealInflation = realInflation !== undefined && realInflation !== null;
  const inflation = hasRealInflation ? realInflation.toFixed(1) : r(1,45).toFixed(1);
  const inflationVerified = hasRealInflation;
  const internetPen = Math.round(r(40,98));
  const tzOffset = Math.round(country.lon/15);
  const totalExports = Math.round(numFromMoney(country.marketSize) * r(0.15,0.6));
  // İtalyan premium/high-end mobilya markalarının (Poltrona Frau, Cassina, B&B Italia, Natuzzi vb.)
  // bu pazarda mağaza/franchise varlığına dair elimizde kapsamlı, doğrulanmış bir veri kaynağı yok —
  // bu yüzden uydurma bir yüzde/sayı üretmek yerine dürüstçe "Bilinmiyor" olarak bırakılır.
  const italianPremiumBrands = 'Bilinmiyor';
  const gdpGrowth = r(-1,7).toFixed(1);
  const HOLIDAY_SETS = [
    'Yılbaşı (1 Ocak), Ulusal Bayram, önemli dini/kültürel tatiller — sipariş takviminde dikkate alınmalı.',
    'Yaz döneminde (Temmuz-Ağustos) iş temposu yavaşlar; teslimat planlaması buna göre yapılmalı.',
    'Yılsonu (Aralık) yoğun alışveriş sezonu — ithalat siparişleri Ekim öncesi tamamlanmalı.',
  ];
  const holidays = HOLIDAY_SETS[Math.floor(r(0,HOLIDAY_SETS.length))];
  const risks = [
    {label:'Politik Risk', score: Math.round(r(10,80)), note: country.politicalRisk},
    {label:'Kur Riski', score: Math.round(r(15,75)), note: parseFloat(inflation)>15?'Yüksek enflasyon nedeniyle kur oynaklığı riski var.':'Görece istikrarlı döviz kuru.'},
    {label:'Ödeme Riski', score: Math.round(r(10,70)), note: PAYMENT_HABITS[Math.floor(r(0,PAYMENT_HABITS.length))]},
    {label:'Ekonomik İstikrar', score: Math.round(100-r(10,60)), note: `GSYH büyüme trendi ${country.importGrowth}`},
    {label:'Regülasyon Riski', score: country.scores.difficulty, note:'İthalat mevzuatı ve standart uyumu karmaşıklığı.'},
    {label:'Yerel Rekabet', score: Math.round(r(20,75)), note:'Yerli üreticilerin pazar payı ve fiyat baskısı.'},
    {label:'Çin Rekabeti', score: (country.suppliers.find(s=>s.c==='Çin')||{v:30}).v + 15, note:'Çin menşeli düşük maliyetli ürünlerin pazar baskısı.'},
    {label:'İthalat Kısıtlamaları', score: Math.round(r(10,55)), note: country.fta.includes('yok')?'Serbest ticaret anlaşması yok, tarife riski mevcut.':'Ticaret anlaşması avantajı mevcut.'}
  ];
  return { inflation, inflationVerified, internetPen, tzOffset, totalExports, italianPremiumBrands, gdpGrowth, holidays, risks,
    language: LANGUAGES[country.id] || 'Yerel dil',
    negStyle: NEG_STYLES[Math.floor(r(0,NEG_STYLES.length))],
    meeting: MEETING_CULTURES[Math.floor(r(0,MEETING_CULTURES.length))],
    decision: DECISION_STYLES[Math.floor(r(0,DECISION_STYLES.length))],
    payment: PAYMENT_HABITS[Math.floor(r(0,PAYMENT_HABITS.length))]
  };
}

function riskColor(score){ return score>=60 ? '#e0685a' : score>=35 ? '#c9a961' : '#3fd0c0'; }
function scoreTo10(s){ return (s/10).toFixed(1); }
function potentialLabel(s){ return s>=70?'Yüksek':s>=45?'Orta':'Düşük'; }

function generateReportHTML(baseCountry){
  const c = withCategory(baseCountry);
  const x = generateExtraFields(c);
  const catInfo = CATEGORIES[activeCategory];
  const opp10 = scoreTo10(c.scores.overall);
  const diff10 = scoreTo10(c.scores.difficulty);
  const potential = potentialLabel(c.scores.market);
  const competitionLabel = c.scores.competition>=65?'Yüksek':c.scores.competition>=40?'Orta':'Düşük';

  const execSummary = `${c.name} pazarı, ${catInfo.label.toLowerCase()} kategorisinde ${c.importGrowth} oranında ${numFromPercent(c.importGrowth)>=3?'güçlü bir büyüme':'ölçülü bir değişim'} gösteriyor. Türkiye'nin bu pazardaki payı şu an %${numFromPercent(c.turkeyShare)} seviyesinde ve yıllık ${c.turkeyGrowth} artıyor — bu, ${numFromPercent(c.turkeyShare)<8?'genişleme için önemli boşluk olduğunu':'zaten sağlam bir konum olduğunu'} gösteriyor. En büyük fırsat, ${potential==='Yüksek'?'pazarın büyük hacmi ve güçlü ithalat talebinde':'niş, farklılaşmış ürün kategorilerinde'} yatıyor. En büyük zorluk ise ${c.scores.competition>=60?(c.suppliers[0].c+' menşeli yoğun rekabet'):(c.scores.difficulty>=55?'gümrük ve mevzuat karmaşıklığı':'lojistik mesafe ve maliyet')}. Genel değerlendirme: bu pazar ${c.scores.overall>=70?'yüksek öncelikli bir hedef':c.scores.overall>=45?'orta vadeli bir fırsat':'temkinli yaklaşılması gereken bir pazar'}. Girişte ${c.scores.difficulty>=55?'yerel bir distribütörle çalışmak':'doğrudan ihracat veya bölgesel bir toptancı ortaklığı'} önerilir.`;

  const oppCards = [
    { t:'Büyüyen Sektör', d:`${catInfo.label} ithalatı ${c.importGrowth} oranında büyüyor.` },
    { t:'İnşaat Faaliyeti', d:`Kentsel nüfus oranı %${x.urbanPop} — konut ve inşaat talebiyle mobilya talebi ilişkili.` },
    { t:'Konut Talebi', d:`Pazar büyüklüğü ${c.marketSize}, yıllık ithalat ${c.annualImports}.` },
    { t:'Premium Segment', d:`Toplam pazarın yaklaşık %${x.premiumSegment}'i premium/üst segment ürünlerden oluşuyor.` },
  ];

  const strategyPoints = [
    ['Bu pazar öneriliyor mu?', c.scores.overall>=55 ? `Evet — fırsat skoru ${c.scores.overall}/100.` : `Temkinli — fırsat skoru ${c.scores.overall}/100, önce küçük hacimli test siparişi önerilir.`],
    ['Hangi şehirler hedeflenmeli?', 'Ana liman/lojistik merkezine yakın büyük şehirler ilk etapta önceliklendirilmeli.'],
    ['Distribütörle mi çalışılmalı?', c.scores.difficulty>=50 ? 'Evet, yerel mevzuat ve gümrük karmaşıklığı nedeniyle deneyimli bir distribütör önerilir.' : 'Doğrudan ihracat da değerlendirilebilir, distribütör şart değil.'],
    ['Perakende mi toptan mı?', c.scores.market>=60 ? 'Toptan/B2B kanalıyla hacim yakalamak, sonra perakende ortaklıklarına geçmek mantıklı.' : 'Küçük ölçekli perakende/butik ortaklıklarla başlamak daha düşük risklidir.'],
    ['Önerilen fiyat konumlandırması', x.premiumSegment>=20 ? 'Orta-üst / premium segment fırsatı güçlü.' : 'Rekabetçi orta segment fiyatlandırma önerilir.'],
    ['Tahmini ilk yıl potansiyeli', `${c.annualImports} pazar hacminin %${Math.max(1,Math.round(numFromPercent(c.turkeyShare)*0.15))}–%${Math.max(2,Math.round(numFromPercent(c.turkeyShare)*0.3))}'i civarında ek pay hedeflenebilir.`],
    ['Sık yapılan hatalar', 'Yerel sertifikasyon gerekliliklerini atlamak, tek siparişe göre kapasite planlamak, lojistik maliyetini fiyatlamaya dahil etmemek.'],
  ];

  const riskRows = x.risks.map(r=>`
    <div class="rcard">
      <div class="rcard-head"><span>${r.label}</span><span class="rscore" style="color:${riskColor(r.score)}">${r.score}/100</span></div>
      <div class="rbar"><div class="rbar-fill" style="width:${r.score}%; background:${riskColor(r.score)}"></div></div>
      <div class="rnote">${r.note}</div>
    </div>`).join('');

  const supplierBars = c.suppliers.map(s=>`
    <div class="sup-row">
      <span class="sup-name">${s.c}</span>
      <div class="sup-bar-wrap"><div class="sup-bar" style="width:${s.v}%; background:${s.c==='Türkiye'?'#3fd0c0':'#c9a961'}"></div></div>
      <span class="sup-val">%${s.v}</span>
    </div>`).join('');

  const trHistoryBars = c.turkeyHistory.map((v,i)=>{
    const max = Math.max(...c.turkeyHistory);
    const h = Math.max(6, Math.round((v/max)*100));
    return `<div class="hbar" style="height:${h}%;" title="${v}"></div>`;
  }).join('');

  return `<!DOCTYPE html>
<html lang="tr"><head><meta charset="UTF-8"><title>${c.name} — Pazar İstihbarat Raporu | Furniture Atlas</title>
<style>
  :root{ --bg-0:#080a0f; --panel:#11151f; --border:rgba(201,169,97,0.16); --border-soft:rgba(255,255,255,0.07);
    --amber:#c9a961; --teal:#3fd0c0; --red:#e0685a; --text-0:#eef0f3; --text-1:#a7adb8; --text-2:#5f6672;
    --mono:'SF Mono','Roboto Mono',ui-monospace,monospace; --display:Georgia,serif; --body:-apple-system,'Segoe UI',sans-serif; }
  *{box-sizing:border-box;margin:0;padding:0;}
  body{ background:var(--bg-0); color:var(--text-0); font-family:var(--body); line-height:1.5; padding:0 0 80px; }
  .wrap{ max-width:1100px; margin:0 auto; padding:0 32px; }
  .rhead{ background:linear-gradient(135deg, rgba(201,169,97,0.08), rgba(63,208,192,0.05)); border-bottom:1px solid var(--border-soft); padding:48px 32px 40px; }
  .rhead-inner{ max-width:1100px; margin:0 auto; }
  .brand{ font-family:var(--display); font-style:italic; font-size:15px; color:var(--text-2); margin-bottom:24px; }
  .brand b{ color:var(--amber); }
  .rtitle-row{ display:flex; align-items:center; gap:18px; flex-wrap:wrap; margin-bottom:8px; }
  .rflag{ font-size:52px; }
  .rtitle{ font-family:var(--display); font-style:italic; font-size:42px; }
  .rsub{ font-family:var(--mono); font-size:11px; color:var(--text-2); letter-spacing:1px; margin-top:6px; }
  .kpi-row{ display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:14px; margin-top:30px; }
  .kpi{ background:var(--panel); border:1px solid var(--border-soft); border-radius:14px; padding:18px 20px; }
  .kpi-label{ font-family:var(--mono); font-size:9px; letter-spacing:1px; text-transform:uppercase; color:var(--text-2); margin-bottom:8px; }
  .kpi-val{ font-family:var(--mono); font-size:26px; }
  .section{ padding:44px 0; border-bottom:1px solid var(--border-soft); }
  .section-num{ font-family:var(--mono); font-size:11px; color:var(--amber); letter-spacing:1px; }
  .section-title{ font-family:var(--display); font-style:italic; font-size:26px; margin:6px 0 22px; }
  .exec-box{ background:linear-gradient(135deg, rgba(201,169,97,0.06), rgba(63,208,192,0.04)); border:1px solid var(--border); border-radius:16px; padding:30px 32px; font-family:var(--display); font-style:italic; font-size:16.5px; line-height:1.75; }
  .grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:14px; }
  .card{ background:var(--panel); border:1px solid var(--border-soft); border-radius:14px; padding:18px 20px; }
  .card-label{ font-family:var(--mono); font-size:9px; letter-spacing:1px; text-transform:uppercase; color:var(--text-2); margin-bottom:8px; }
  .card-val{ font-family:var(--mono); font-size:19px; }
  .opp-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(230px,1fr)); gap:16px; }
  .opp-card{ background:var(--panel); border:1px solid rgba(63,208,192,0.2); border-radius:14px; padding:20px; }
  .opp-t{ font-family:var(--body); font-weight:600; font-size:14px; color:var(--teal); margin-bottom:8px; }
  .opp-d{ font-size:13px; color:var(--text-1); line-height:1.6; }
  .rgrid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:14px; }
  .rcard{ background:var(--panel); border:1px solid var(--border-soft); border-radius:14px; padding:16px 18px; }
  .rcard-head{ display:flex; justify-content:space-between; font-family:var(--body); font-size:13.5px; margin-bottom:10px; }
  .rscore{ font-family:var(--mono); }
  .rbar{ height:6px; background:#1a1e28; border-radius:4px; overflow:hidden; margin-bottom:10px; }
  .rbar-fill{ height:100%; }
  .rnote{ font-size:12px; color:var(--text-2); line-height:1.5; }
  .strategy-table{ width:100%; border-collapse:collapse; }
  .strategy-table td{ padding:16px 0; border-bottom:1px solid var(--border-soft); vertical-align:top; }
  .strategy-table td:first-child{ width:260px; font-family:var(--mono); font-size:11.5px; color:var(--amber); padding-right:24px; }
  .strategy-table td:last-child{ font-size:14px; color:var(--text-0); line-height:1.6; }
  .sup-row{ display:flex; align-items:center; gap:12px; margin-bottom:10px; }
  .sup-name{ width:110px; font-size:13px; color:var(--text-1); }
  .sup-bar-wrap{ flex:1; height:10px; background:#1a1e28; border-radius:5px; overflow:hidden; }
  .sup-bar{ height:100%; border-radius:5px; }
  .sup-val{ width:44px; text-align:right; font-family:var(--mono); font-size:12px; color:var(--text-0); }
  .hist-chart{ display:flex; align-items:flex-end; gap:6px; height:120px; background:var(--panel); border:1px solid var(--border-soft); border-radius:14px; padding:16px; }
  .hbar{ flex:1; background:var(--teal); border-radius:3px 3px 0 0; min-height:6px; opacity:0.85; }
  .culture-grid{ display:grid; grid-template-columns:1fr 1fr; gap:14px; }
  @media(max-width:640px){ .culture-grid{ grid-template-columns:1fr; } .rtitle{ font-size:30px; } .wrap,.rhead-inner{ padding:0 18px; } }
  .footnote{ font-family:var(--mono); font-size:10px; color:var(--text-2); margin-top:14px; line-height:1.6; }
  .indicator{ display:inline-block; width:9px; height:9px; border-radius:50%; margin-right:7px; }
</style></head>
<body>
  <div class="rhead"><div class="rhead-inner">
    <div class="brand">Furniture Atlas<b>.</b> — Furniture Export Intelligence</div>
    <div class="rtitle-row"><span class="rflag">${c.flag}</span><div>
      <div class="rtitle">${c.name}</div>
      <div class="rsub">${catInfo.label.toUpperCase()} · ${catInfo.hs} · RAPOR TARİHİ: ${new Date().toLocaleDateString('tr-TR')}</div>
    </div></div>
    <div class="kpi-row">
      <div class="kpi"><div class="kpi-label">AI Fırsat Skoru</div><div class="kpi-val" style="color:${scoreColor(c.scores.overall)}">${opp10}/10</div></div>
      <div class="kpi"><div class="kpi-label">Pazar Potansiyeli</div><div class="kpi-val">${potential}</div></div>
      <div class="kpi"><div class="kpi-label">Giriş Zorluğu</div><div class="kpi-val">${diff10}/10</div></div>
      <div class="kpi"><div class="kpi-label">Risk Seviyesi</div><div class="kpi-val">${c.politicalRisk}</div></div>
      <div class="kpi"><div class="kpi-label">Rekabet Seviyesi</div><div class="kpi-val">${competitionLabel}</div></div>
    </div>
  </div></div>

  <div class="wrap">
    <div class="section">
      <div class="section-num">01</div><div class="section-title">Yönetici Özeti</div>
      <div class="exec-box">${execSummary}</div>
    </div>

    <div class="section">
      <div class="section-num">02</div><div class="section-title">Ülke Verileri</div>
      <div class="grid">
        <div class="card"><div class="card-label">Nüfus</div><div class="card-val">${c.population}</div></div>
        <div class="card"><div class="card-label">GSYH</div><div class="card-val">${c.gdp}</div></div>
        <div class="card"><div class="card-label">Kişi Başı GSYH</div><div class="card-val">${c.gdpPerCapita}</div></div>
        <div class="card"><div class="card-label">Para Birimi</div><div class="card-val">${c.currency}</div></div>
        <div class="card"><div class="card-label">Döviz Kuru</div><div class="card-val" style="font-size:13px">${c.exchangeRate}</div></div>
        <div class="card"><div class="card-label">Enflasyon</div><div class="card-val">%${x.inflation}</div></div>
        <div class="card"><div class="card-label">Faiz Oranı</div><div class="card-val">%${x.interestRate}</div></div>
        <div class="card"><div class="card-label">İş Yapma Kolaylığı</div><div class="card-val">${c.eodb}</div></div>
        <div class="card"><div class="card-label">Kentsel Nüfus</div><div class="card-val">%${x.urbanPop}</div></div>
        <div class="card"><div class="card-label">İnternet Penetrasyonu</div><div class="card-val">%${x.internetPen}</div></div>
        <div class="card"><div class="card-label">Dil</div><div class="card-val" style="font-size:14px">${x.language}</div></div>
        <div class="card"><div class="card-label">Saat Dilimi</div><div class="card-val">UTC${x.tzOffset>=0?'+':''}${x.tzOffset}</div></div>
      </div>
    </div>

    <div class="section">
      <div class="section-num">03</div><div class="section-title">Ticaret Özeti (Türkiye ↔ ${c.name})</div>
      <div class="grid">
        <div class="card"><div class="card-label">Toplam İthalat</div><div class="card-val">${c.annualImports}</div></div>
        <div class="card"><div class="card-label">Toplam İhracat (Ülke)</div><div class="card-val">$${x.totalExports.toLocaleString('en-US')}M</div></div>
        <div class="card"><div class="card-label">Türkiye İhracat Değeri</div><div class="card-val">$${Math.round(numFromMoney(c.annualImports)*numFromPercent(c.turkeyShare)/100).toLocaleString('en-US')}M</div></div>
        <div class="card"><div class="card-label">5 Yıllık Büyüme</div><div class="card-val">${c.importGrowth}</div></div>
        <div class="card"><div class="card-label">Pazar Büyüklüğü</div><div class="card-val">${c.marketSize}</div></div>
        <div class="card"><div class="card-label">Türkiye Pazar Payı</div><div class="card-val">${c.turkeyShare}</div></div>
      </div>
    </div>

    <div class="section">
      <div class="section-num">04</div><div class="section-title">${catInfo.label} Pazar Analizi</div>
      <div class="grid">
        <div class="card"><div class="card-label">Toplam İthalat</div><div class="card-val">${c.annualImports}</div></div>
        <div class="card"><div class="card-label">Yıllık Büyüme</div><div class="card-val">${c.importGrowth}</div></div>
        <div class="card"><div class="card-label">Türk İhracat Payı</div><div class="card-val">${c.turkeyShare}</div></div>
        <div class="card"><div class="card-label">Ort. İthalat Fiyatı</div><div class="card-val">$${x.avgImportPrice}/birim</div></div>
        <div class="card"><div class="card-label">Premium Segment</div><div class="card-val">%${x.premiumSegment}</div></div>
        <div class="card"><div class="card-label">Büyüme Tahmini</div><div class="card-val">${c.importGrowth}</div></div>
      </div>
    </div>

    <div class="section">
      <div class="section-num">05</div><div class="section-title">Ana Tedarikçi Ülkeler</div>
      ${supplierBars}
      <div class="footnote">Kaynak: örnek/gösterim verisi — kategori: ${catInfo.label}</div>
    </div>

    <div class="section">
      <div class="section-num">06</div><div class="section-title">Gümrük & İthalat Mevzuatı</div>
      <div class="grid">
        <div class="card"><div class="card-label">İthalat Vergisi</div><div class="card-val">${c.importTax}</div></div>
        <div class="card"><div class="card-label">KDV</div><div class="card-val">${c.vat}</div></div>
        <div class="card"><div class="card-label">Anti-Damping Vergisi</div><div class="card-val" style="font-size:14px">${c.scores.difficulty>60?'Bazı kategorilerde mevcut':'Bilinen bir vergi yok'}</div></div>
        <div class="card"><div class="card-label">Serbest Ticaret Durumu</div><div class="card-val" style="font-size:14px">${c.fta}</div></div>
        <div class="card"><div class="card-label">Ort. Gümrük Süresi</div><div class="card-val">${Math.round(2+c.scores.difficulty/12)} gün</div></div>
        <div class="card"><div class="card-label">Karmaşıklık</div><div class="card-val"><span class="indicator" style="background:${riskColor(c.scores.difficulty)}"></span>${c.scores.difficulty>=60?'Yüksek':c.scores.difficulty>=35?'Orta':'Düşük'}</div></div>
      </div>
      <div class="footnote" style="margin-top:16px;">Gerekli sertifikasyon: ${c.certs}<br>Gümrük evrakı: ${c.docs}</div>
    </div>

    <div class="section">
      <div class="section-num">07</div><div class="section-title">Lojistik</div>
      <div class="grid">
        <div class="card"><div class="card-label">Ana Liman</div><div class="card-val" style="font-size:14px">${c.ports}</div></div>
        <div class="card"><div class="card-label">Deniz Transit Süresi</div><div class="card-val">${c.transitTime}</div></div>
        <div class="card"><div class="card-label">Ort. Deniz Navlunu</div><div class="card-val">${c.freightCost}</div></div>
        <div class="card"><div class="card-label">Ort. Hava Navlunu</div><div class="card-val">$${x.airFreight.toLocaleString('en-US')}/ton</div></div>
        <div class="card"><div class="card-label">Lojistik Zorluk Skoru</div><div class="card-val">${scoreTo10(100-c.scores.logistics)}/10</div></div>
        <div class="card"><div class="card-label">İç Taşıma Kalitesi</div><div class="card-val">${c.eodb}</div></div>
      </div>
    </div>

    <div class="section">
      <div class="section-num">08</div><div class="section-title">Pazar Fırsatları</div>
      <div class="opp-grid">${oppCards.map(o=>`<div class="opp-card"><div class="opp-t">${o.t}</div><div class="opp-d">${o.d}</div></div>`).join('')}</div>
    </div>

    <div class="section">
      <div class="section-num">09</div><div class="section-title">Riskler</div>
      <div class="rgrid">${riskRows}</div>
    </div>

    <div class="section">
      <div class="section-num">10</div><div class="section-title">Türkiye İhracat Performansı (10 Yıl)</div>
      <div class="hist-chart">${trHistoryBars}</div>
      <div class="footnote">Türkiye payı: ${c.turkeyShare} · Büyüme: ${c.turkeyGrowth}</div>
    </div>

    <div class="section">
      <div class="section-num">11</div><div class="section-title">AI Pazar Stratejisi</div>
      <table class="strategy-table">${strategyPoints.map(p=>`<tr><td>${p[0]}</td><td>${p[1]}</td></tr>`).join('')}</table>
    </div>

    <div class="section">
      <div class="section-num">12</div><div class="section-title">İş Kültürü</div>
      <div class="culture-grid">
        <div class="card"><div class="card-label">Müzakere Tarzı</div><div class="card-val" style="font-size:14px">${x.negStyle}</div></div>
        <div class="card"><div class="card-label">Toplantı Kültürü</div><div class="card-val" style="font-size:14px">${x.meeting}</div></div>
        <div class="card"><div class="card-label">Karar Verme Süreci</div><div class="card-val" style="font-size:14px">${x.decision}</div></div>
        <div class="card"><div class="card-label">Ödeme Alışkanlıkları</div><div class="card-val" style="font-size:14px">${x.payment}</div></div>
      </div>
    </div>

    <div class="section" style="border-bottom:none;">
      <div class="section-num">13</div><div class="section-title">Gerekli Sertifikasyonlar</div>
      <div class="card">${c.certs}</div>
      <div class="footnote">⚠ Bu rapordaki tüm rakamlar prototip/örnek veridir, gerçek ticaret verisi değildir. Gerçek karar almadan önce güncel kaynaklarla teyit edilmelidir.</div>
    </div>
  </div>
</body></html>`;
}

/* =========================================================
   GLOBE RENDER
   ========================================================= */
const svg = document.getElementById('globeSvg');
const stage = document.getElementById('globeStage');
const SIZE = 640, CX = 320, CY = 320, R = 250;


let rotY = 0.4, tiltX = 0.35;
let dragging = false, lastX = 0, lastY = 0;
let autoRotate = true;

function toXY(lat, lon){
  const latR = lat * Math.PI/180, lonR = lon * Math.PI/180;
  let x = Math.cos(latR) * Math.sin(lonR);
  let y = Math.sin(latR);
  let z = Math.cos(latR) * Math.cos(lonR);
  // rotate Y
  let x1 = x*Math.cos(rotY) + z*Math.sin(rotY);
  let z1 = -x*Math.sin(rotY) + z*Math.cos(rotY);
  let y1 = y;
  // rotate X (tilt)
  let y2 = y1*Math.cos(tiltX) - z1*Math.sin(tiltX);
  let z2 = y1*Math.sin(tiltX) + z1*Math.cos(tiltX);
  let x2 = x1;
  return { x: CX + x2*R, y: CY - y2*R, z: z2, visible: z2 > -0.12 };
}

// Basit, temiz bir SVG çizgi/alan grafiği üretir — CSS çubuklara göre çok daha "gerçek grafik" hissi verir.
function buildLineChartSvg(values, labels, color){
  color = color || '#3fd0c0';
  const w = 600, h = 160, padX = 24, padY = 28;
  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);
  const range = (max - min) || 1;
  const stepX = values.length > 1 ? (w - padX*2) / (values.length - 1) : 0;
  const points = values.map((v,i) => ({
    x: padX + i*stepX,
    y: padY + (h - padY*2) * (1 - (v - min)/range),
    v
  }));
  const linePath = points.map((p,i) => (i===0?'M':'L') + p.x.toFixed(1) + ',' + p.y.toFixed(1)).join(' ');
  const areaPath = linePath + ` L${points[points.length-1].x.toFixed(1)},${h-padY} L${points[0].x.toFixed(1)},${h-padY} Z`;
  const gradId = 'chartGrad' + Math.random().toString(36).slice(2,9);
  return `
    <svg viewBox="0 0 ${w} ${h+22}" style="width:100%; height:auto; overflow:visible; display:block;">
      <defs>
        <linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="${color}" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <path d="${areaPath}" fill="url(#${gradId})"/>
      <path d="${linePath}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      ${points.map(p=>`<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4" fill="${color}" stroke="#0a0d12" stroke-width="2"/>`).join('')}
      ${points.map(p=>`<text x="${p.x.toFixed(1)}" y="${Math.max(12,p.y-12).toFixed(1)}" text-anchor="middle" font-size="12" font-family="monospace" font-weight="700" fill="${color}">${p.v}</text>`).join('')}
      ${points.map((p,i)=>`<text x="${p.x.toFixed(1)}" y="${h+16}" text-anchor="middle" font-size="10.5" font-family="monospace" fill="#5f6672">${labels[i]}</text>`).join('')}
    </svg>
  `;
}

function scoreColor(overall){
  if(overall >= 80) return '#3fd0c0';
  if(overall >= 55) return '#c9a961';
  return '#6b6f78';
}
function scoreLabel(overall){
  if(overall >= 80) return 'Yüksek Fırsat';
  if(overall >= 55) return 'Orta Fırsat';
  return 'Değerlendirmede';
}

const SVGNS = 'http://www.w3.org/2000/svg';
let svgReady = false;
let pathEls = [];              // WORLD_DATA sırasına göre <path> referansları
let markerEls = {};            // ülke id -> {g, ring, dot}
let gridEllipseEls = [];       // enlem çizgileri
let gridPolylineEls = [];      // boylam çizgileri
let sphereCircleEl = null;

function initSvgSkeleton(){
  svg.innerHTML = `<defs>
    <radialGradient id="sphereGrad" cx="35%" cy="30%" r="75%">
      <stop offset="0%" stop-color="#141a26"/>
      <stop offset="55%" stop-color="#0c111a"/>
      <stop offset="100%" stop-color="#080a10"/>
    </radialGradient>
    <radialGradient id="rim" cx="50%" cy="50%" r="50%">
      <stop offset="86%" stop-color="rgba(201,169,97,0)"/>
      <stop offset="100%" stop-color="rgba(201,169,97,0.25)"/>
    </radialGradient>
    <clipPath id="sphereClip"><circle cx="${CX}" cy="${CY}" r="${R}"/></clipPath>
  </defs>
  <circle class="globe-sphere" cx="${CX}" cy="${CY}" r="${R}" fill="url(#sphereGrad)" stroke="rgba(201,169,97,0.2)" stroke-width="1"/>
  <g id="gridGroup" clip-path="url(#sphereClip)" opacity="0.5"></g>
  <g id="shapesGroup" clip-path="url(#sphereClip)"></g>
  <g id="markersGroup"></g>`;

  sphereCircleEl = svg.querySelector('.globe-sphere');
  const gridGroup = svg.querySelector('#gridGroup');
  for(let lat=-60; lat<=60; lat+=30){
    const el = document.createElementNS(SVGNS, 'ellipse');
    el.setAttribute('class', lat===0 ? 'grid-line-eq' : 'grid-line');
    el.setAttribute('cx', CX);
    gridGroup.appendChild(el);
    gridEllipseEls.push({ el, lat });
  }
  for(let lonOff=0; lonOff<360; lonOff+=30){
    const el = document.createElementNS(SVGNS, 'polyline');
    el.setAttribute('class', 'grid-line');
    gridGroup.appendChild(el);
    gridPolylineEls.push({ el, lonOff });
  }

  const shapesGroup = svg.querySelector('#shapesGroup');
  WORLD_DATA.forEach(f=>{
    const el = document.createElementNS(SVGNS, 'path');
    el.setAttribute('data-id', f.id || '');
    shapesGroup.appendChild(el);
    pathEls.push(el);
  });

  const markersGroup = svg.querySelector('#markersGroup');
  COUNTRIES.forEach(c=>{
    const g = document.createElementNS(SVGNS, 'g');
    g.setAttribute('class', 'node');
    g.setAttribute('data-id', c.id);
    g.innerHTML = `<circle class="node-hit" r="11" fill="transparent"/><circle class="node-ring" r="11"/><circle class="node-dot" r="3.5"/><text class="node-label" x="9" y="3.5">${c.name.toUpperCase()}</text>`;
    markersGroup.appendChild(g);
    markerEls[c.id] = { g, ring: g.querySelector('.node-ring'), dot: g.querySelector('.node-dot') };
  });
  const tg = document.createElementNS(SVGNS, 'g');
  tg.setAttribute('class', 'node source-node');
  tg.setAttribute('data-id', 'turkey');
  tg.innerHTML = `<circle class="node-hit" r="11" fill="transparent"/><circle r="4" fill="#3fd0c0"/><text class="node-label" x="9" y="3.5" style="fill:#3fd0c0;">TÜRKİYE</text>`;
  markersGroup.appendChild(tg);
  markerEls['turkey'] = { g: tg };

  svgReady = true;
}

function updateGrid(){
  gridEllipseEls.forEach(({el, lat})=>{
    const ry = R*Math.abs(Math.cos(lat*Math.PI/180))*Math.abs(Math.sin(tiltX)) + 0.001;
    const cy2 = CY - R*Math.sin(lat*Math.PI/180)*Math.cos(tiltX);
    el.setAttribute('cy', cy2.toFixed(1));
    el.setAttribute('rx', (R*Math.cos(lat*Math.PI/180)).toFixed(1));
    el.setAttribute('ry', Math.max(ry,2).toFixed(1));
  });
  gridPolylineEls.forEach(({el, lonOff})=>{
    let pts=[];
    for(let lat=-90; lat<=90; lat+=6){
      const p = toXY(lat, lonOff);
      if(p.visible) pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
    }
    el.setAttribute('points', pts.length>2 ? pts.join(' ') : '');
  });
}

function projectRing(ring){
  let pts = [], visibleCount = 0;
  for(const [lon,lat] of ring){
    const p = toXY(lat, lon);
    pts.push(p);
    if(p.visible) visibleCount++;
  }
  return { pts, frac: visibleCount / pts.length };
}
function ringPathD(pts){
  return 'M' + pts.map(p=>`${p.x.toFixed(1)},${p.y.toFixed(1)}`).join('L') + 'Z';
}

let isInteracting = false;
function updateWorldShapes(){
  const cache = getDisplayCache();
  WORLD_DATA.forEach((f, i)=>{
    const el = pathEls[i];
    let dAttr = '';
    f.rings.forEach(ring=>{
      const { pts, frac } = projectRing(ring);
      if(frac < 0.3) return;
      dAttr += ringPathD(pts);
    });
    if(!dAttr){ el.setAttribute('d', ''); return; }
    const isSource = f.iso === 'TR';
    const isTarget = !!f.id && !isSource;
    let fill, strokeCol, fillOp, strokeW, cls;
    if(isTarget){
      const entry = cache[f.id];
      const passes = entry ? entry.passes : false;
      fill = passes ? entry.color : '#3a4152';
      strokeCol = passes ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.15)';
      fillOp = passes ? 0.62 : 0.3; strokeW = 1.1;
      cls = 'country-shape country-target';
    } else if(isSource){
      fill = '#3fd0c0'; strokeCol = 'rgba(255,255,255,0.5)'; fillOp = 0.45; strokeW = 1.1;
      cls = 'country-shape country-source';
    } else {
      fill = '#1a2130'; strokeCol = 'rgba(255,255,255,0.06)'; fillOp = 0.92; strokeW = 0.6;
      cls = 'country-shape';
    }
    // Hover durumu class'ı korunmalı — sadece taban class'ı güncellenir, "hovered" varsa yeniden eklenir.
    const wasHovered = el.classList.contains('hovered');
    el.setAttribute('class', cls + (wasHovered ? ' hovered' : ''));
    el.setAttribute('d', dAttr);
    el.setAttribute('fill', fill);
    el.setAttribute('fill-opacity', fillOp);
    el.setAttribute('stroke', strokeCol);
    el.setAttribute('stroke-width', strokeW);
  });
}

// Kategori/filtre değişmediği sürece her ülke için aynı sonucu veren hesaplamaları
// önbelleğe alır — hem şekiller hem işaretçiler aynı önbelleği kullanır, kare başına
// iki kez tekrar hesaplama yapılmaz.
let displayCache = null;
function invalidateDisplayCache(){ displayCache = null; }
function getDisplayCache(){
  if(displayCache) return displayCache;
  displayCache = {};
  COUNTRIES.forEach(c=>{
    const cd = withCategory(c);
    const passes = countryPassesFilters(c);
    displayCache[c.id] = { cd, passes, color: passes ? scoreColor(cd.scores.overall) : null };
  });
  return displayCache;
}

function updateMarkers(){
  const cache = getDisplayCache();
  COUNTRIES.forEach(c=>{
    const p = toXY(c.lat, c.lon);
    const { passes, color } = cache[c.id];
    const col = passes ? color : '#5a6172';
    const op = p.visible ? (passes ? 1 : 0.35) : 0;
    const m = markerEls[c.id];
    m.g.setAttribute('style', `opacity:${op}`);
    m.g.setAttribute('transform', `translate(${p.x.toFixed(1)},${p.y.toFixed(1)})`);
    m.ring.setAttribute('stroke', col);
    m.dot.setAttribute('fill', col);
  });
  const t = toXY(38.96, 35.24);
  const tm = markerEls['turkey'];
  tm.g.setAttribute('style', `opacity:${t.visible?1:0}`);
  tm.g.setAttribute('transform', `translate(${t.x.toFixed(1)},${t.y.toFixed(1)})`);
}

function render(){
  if(!svgReady) initSvgSkeleton();
  updateGrid();
  updateWorldShapes();
  updateMarkers();
}

function updateHoverClasses(id){
  svg.querySelectorAll('.hovered').forEach(n=>n.classList.remove('hovered'));
  if(id){ svg.querySelectorAll(`[data-id="${id}"]`).forEach(n=>n.classList.add('hovered')); }
}
function getCountryFromEvent(e){
  const el = e.target.closest && e.target.closest('[data-id]');
  if(!el) return null;
  const id = el.getAttribute('data-id');
  if(!id) return null;
  return COUNTRIES.find(c=>c.id===id) || null;
}

let hoveredId = null;
/* Listeners are bound once to the stable <svg> element itself (never replaced),
   using delegation so they keep working even though render() rebuilds its children. */
function getIdFromEvent(e){
  const el = e.target.closest && e.target.closest('[data-id]');
  return el ? el.getAttribute('data-id') : null;
}
svg.addEventListener('mousemove', (e)=>{
  if(dragging){ if(hoveredId){ hoveredId=null; hideHoverCard(); updateHoverClasses(null);} return; }
  const id = getIdFromEvent(e);
  if(id === 'turkey'){
    if(hoveredId !== 'turkey'){ hoveredId = 'turkey'; updateHoverClasses('turkey'); showTurkeyCard(e); }
    else positionHoverCard(e);
    return;
  }
  const country = id ? COUNTRIES.find(c=>c.id===id) : null;
  if(country){
    if(country.id !== hoveredId){ hoveredId = country.id; updateHoverClasses(country.id); showHoverCard(country, e); }
    else positionHoverCard(e);
  } else if(hoveredId){
    hoveredId = null; updateHoverClasses(null); hideHoverCard();
  }
});
svg.addEventListener('mouseleave', ()=>{ hoveredId=null; updateHoverClasses(null); hideHoverCard(); });

function tryOpenAtPoint(clientX, clientY){
  // Robust click detection: instead of relying on the browser's native 'click' event
  // (which can misfire when the SVG is rebuilt between mousedown/mouseup), we look up
  // whatever element is actually under the pointer right now.
  const el = document.elementFromPoint(clientX, clientY);
  const target = el && el.closest && el.closest('[data-id]');
  const id = target && target.getAttribute('data-id');
  if(!id) return;
  if(id === 'turkey'){ renderTurkeyPage(); return; }
  const country = COUNTRIES.find(c=>c.id===id);
  if(country) openDashboard(country);
}
// Dokunmatik cihazlarda tek dokunuş masaüstündeki "üzerine gelme" önizlemesini açar
// (kart üzerindeki "Detaya Git" butonuna basınca tam sayfa açılır) — doğrudan sayfa açmaz.
function tryPreviewAtPoint(clientX, clientY){
  const el = document.elementFromPoint(clientX, clientY);
  const target = el && el.closest && el.closest('[data-id]');
  const id = target && target.getAttribute('data-id');
  if(!id){ hideHoverCard(); hoveredId = null; return; }
  if(id === 'turkey'){ hoveredId = 'turkey'; showTurkeyCard({clientX, clientY}); return; }
  const country = COUNTRIES.find(c=>c.id===id);
  if(country){ hoveredId = country.id; showHoverCard(country, {clientX, clientY}); }
}

/* drag / auto-rotate — pointer state only updates rotation values;
   the animation loop below is the single place that actually re-renders. */
let dragStartX=0, dragStartY=0, dragMoved=false, needsRender=true;
let velRotY=0, velTiltX=0, momentumActive=false;
function startDrag(x,y){ dragging=true; dragMoved=false; dragStartX=lastX=x; dragStartY=lastY=y; momentumActive=false; velRotY=0; velTiltX=0; isInteracting=true; }
function moveDrag(x,y){
  if(!dragging) return;
  const dx = x-lastX, dy = y-lastY;
  if(Math.abs(x-dragStartX)>4 || Math.abs(y-dragStartY)>4){ dragMoved=true; autoRotate=false; }
  const dRotY = dx*0.006;
  const dTiltX = dy*0.004; // aşağı sürükleyince küre yukarıdan bakılıyormuş gibi doğru yönde döner
  rotY += dRotY;
  tiltX = Math.max(-0.9, Math.min(0.9, tiltX + dTiltX));
  velRotY = dRotY; velTiltX = dTiltX; // son hareket, bırakıldığında ivme olarak kullanılır
  lastX = x; lastY = y;
  needsRender = true;
}
function endDrag(clientX, clientY, isTouch){
  const wasDrag = dragMoved;
  dragging = false;
  if(!wasDrag && clientX !== undefined){
    autoRotate = isTouch || !mouseOverStage;
    isInteracting = false;
    // Mobilde artık masaüstündeki gibi önce özet kart (+ "Detaya Git" butonu) açılıyor;
    // masaüstünde fare zaten hover'da önizlemeyi gösterdiği için tıklama direkt sayfayı açar.
    if(isTouch) tryPreviewAtPoint(clientX, clientY);
    else tryOpenAtPoint(clientX, clientY);
  } else if(wasDrag && (Math.abs(velRotY) > 0.0005 || Math.abs(velTiltX) > 0.0005)){
    momentumActive = true; // oyun hissi: sürükleme hızıyla dönmeye devam eder, sonra yavaşlar — hafif çizim modu sürer
  } else {
    autoRotate = isTouch || !mouseOverStage;
    isInteracting = false;
  }
}

stage.addEventListener('mousedown', e=> startDrag(e.clientX, e.clientY));
window.addEventListener('mouseup', e=> endDrag(e.clientX, e.clientY, false));
window.addEventListener('mousemove', e=> moveDrag(e.clientX, e.clientY));
let mouseOverStage = false;
stage.addEventListener('mouseenter', ()=>{ mouseOverStage = true; if(!dragging && !momentumActive) autoRotate = false; });
stage.addEventListener('mouseleave', ()=>{ mouseOverStage = false; if(!dragging) autoRotate = true; });

let touchActiveOnStage = false;
stage.addEventListener('touchstart', e=>{
  // +/- yakınlaştırma butonlarına dokunuşu küre-sürükleme mantığı yutmasın —
  // aksi halde preventDefault() tarayıcının "tıklama" olayını hiç oluşturmuyordu.
  if(e.target.closest('.zoom-controls')) return;
  touchActiveOnStage = true;
  if(e.cancelable) e.preventDefault();
  startDrag(e.touches[0].clientX, e.touches[0].clientY);
}, {passive:false});
stage.addEventListener('contextmenu', e=> e.preventDefault());
window.addEventListener('touchmove', e=>{
  if(!touchActiveOnStage) return;
  // Küreyi parmakla döndürürken sayfanın kaymasını engelle — mobildeki "bozuk dönüş" hissinin nedeni buydu.
  if(e.cancelable) e.preventDefault();
  moveDrag(e.touches[0].clientX, e.touches[0].clientY);
}, {passive:false});
window.addEventListener('touchend', e=>{
  if(!touchActiveOnStage) return;
  touchActiveOnStage = false;
  const t = e.changedTouches && e.changedTouches[0];
  endDrag(t ? t.clientX : undefined, t ? t.clientY : undefined, true);
});

/* Zoom — mouse wheel and +/- buttons scale the SVG visually (hit-testing scales with it, no re-projection needed) */
let zoomLevel = 1;
function applyZoom(){ svg.style.transform = `scale(${zoomLevel.toFixed(2)})`; }
stage.addEventListener('wheel', (e)=>{
  e.preventDefault();
  zoomLevel = Math.max(0.6, Math.min(3.2, zoomLevel - e.deltaY * 0.0012));
  applyZoom();
}, { passive:false });
document.getElementById('zoomInBtn').addEventListener('click', ()=>{
  zoomLevel = Math.min(3.2, zoomLevel + 0.25); applyZoom();
});
document.getElementById('zoomOutBtn').addEventListener('click', ()=>{
  zoomLevel = Math.max(0.6, zoomLevel - 0.25); applyZoom();
});

function tick(){
  if(momentumActive){
    rotY += velRotY;
    tiltX = Math.max(-0.9, Math.min(0.9, tiltX + velTiltX));
    velRotY *= 0.95; velTiltX *= 0.95; // sürtünme — zamanla yavaşlar
    needsRender = true;
    if(Math.abs(velRotY) < 0.0004 && Math.abs(velTiltX) < 0.0004){
      momentumActive = false;
      autoRotate = !mouseOverStage; // fare hâlâ küre üzerindeyse otomatik dönüşe geçme
      isInteracting = false; // tam detaylı çizime geri dön
    }
  } else if(autoRotate){
    rotY += 0.0016; needsRender = true;
  }
  if(needsRender){ render(); needsRender = false; }
  requestAnimationFrame(tick);
}
render();
requestAnimationFrame(tick);

/* Not: Sayfa açılışında belirli bir ülke/görünüm durumunu geri yüklemek artık
   hash (#) yerine History API (query string + pushState/popState) ile yapılıyor
   — bkz. dosya sonundaki "TARAYICI GEÇMİŞİ" bölümü. */

/* =========================================================
   ARAMA
   ========================================================= */
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
function normalizeTr(s){
  return String(s).toLocaleLowerCase('tr').replace(/[İI]/g,'i');
}
searchInput.addEventListener('input', ()=>{
  const q = normalizeTr(searchInput.value.trim());
  if(!q){ searchResults.classList.remove('show'); searchResults.innerHTML=''; return; }
  const matches = COUNTRIES.filter(c => normalizeTr(c.name).includes(q)).slice(0,8);
  if(!matches.length){ searchResults.innerHTML = `<div class="search-empty">Sonuç bulunamadı</div>`; searchResults.classList.add('show'); return; }
  searchResults.innerHTML = matches.map(c=>{
    const cd = withCategory(c);
    return `<div class="search-item" data-id="${c.id}"><span>${c.flag} ${c.name}</span><span class="search-score" style="color:${scoreColor(cd.scores.overall)}">${cd.scores.overall}</span></div>`;
  }).join('');
  searchResults.classList.add('show');
  searchResults.querySelectorAll('.search-item').forEach(item=>{
    item.addEventListener('click', ()=>{
      const c = COUNTRIES.find(x=>x.id===item.getAttribute('data-id'));
      if(c){ openDashboard(c); searchInput.value=''; listSearchQ=''; searchResults.classList.remove('show'); hideHoverCard(); }
    });
    item.addEventListener('mouseenter', (e)=>{
      const c = COUNTRIES.find(x=>x.id===item.getAttribute('data-id'));
      if(c) showHoverCard(c, e);
    });
    item.addEventListener('mousemove', (e)=>{
      const c = COUNTRIES.find(x=>x.id===item.getAttribute('data-id'));
      if(c) positionHoverCard(e);
    });
    item.addEventListener('mouseleave', ()=> hideHoverCard());
  });
});
document.addEventListener('click', (e)=>{
  if(!e.target.closest('.search-wrap')) searchResults.classList.remove('show');
});

/* =========================================================
   GÖRÜNÜM GEÇİŞİ (HARİTA / LİSTE)
   ========================================================= */
const heroSection = document.getElementById('heroSection');
const listView = document.getElementById('listView');
document.querySelectorAll('.view-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const view = btn.getAttribute('data-view');
    if(view === 'list') renderListTable();
    showView(view);
    pushHistoryState();
  });
});

/* =========================================================
   KATEGORİ (HS KODU) GEÇİŞİ
   ========================================================= */
document.querySelectorAll('.cat-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.getAttribute('data-cat');
    invalidateDisplayCache();
    needsRender = true; // küre renklerini güncelle
    if(listView.classList.contains('show')) renderListTable();
    if(dashboard.classList.contains('open') && currentBaseCountry) renderCountryPage(currentBaseCountry);
    pushHistoryState();
  });
});

/* =========================================================
   FİLTRELEME PANELİ
   ========================================================= */
const filterSlidersWrap = document.getElementById('filterSlidersWrap');
filterSlidersWrap.innerHTML = FILTER_DEFS.map(def => `
  <div class="filter-row">
    <div class="filter-row-head">
      <span>${def.label}</span>
      <div class="filter-num-wrap">
        <input type="number" class="filter-num-input" id="filterNum-${def.id}" aria-label="${def.label} — sayı olarak gir"
          min="${def.min}" max="${def.max}" step="${def.step}" placeholder="${def.mode==='max' ? 'Sınırsız' : 'Tümü'}">
        ${def.unit.trim() ? `<span class="filter-num-unit">${def.unit.trim()}</span>` : ''}
      </div>
    </div>
    <input type="range" id="filterSlider-${def.id}" aria-label="${def.label}" min="${def.min}" max="${def.max}" step="${def.step}" value="${def.mode==='max' ? def.max : def.min}">
  </div>`).join('');

function updateFilterUI(){
  const activeCount = Object.values(activeFilters).filter(v=>v!==undefined && v!==null).length;
  document.getElementById('filterActiveCount').textContent = activeCount ? `(${activeCount})` : '';
  document.getElementById('filterToggleBtn').classList.toggle('has-active', activeCount > 0);
  const matching = COUNTRIES.filter(countryPassesFilters).length;
  document.getElementById('filterResultCount').textContent = hasActiveFilters() ? `${matching} pazar eşleşiyor` : `${COUNTRIES.length} pazar (filtre yok)`;
}
// Slider ve sayı kutusu aynı değeri paylaşır — biri değişince diğeri de güncellenir.
function applyFilterValue(def, v){
  const slider = document.getElementById(`filterSlider-${def.id}`);
  const numInput = document.getElementById(`filterNum-${def.id}`);
  const atDefault = def.mode==='max' ? v>=def.max : v<=def.min;
  if(atDefault){
    delete activeFilters[def.id];
    numInput.value = '';
  } else {
    activeFilters[def.id] = v;
    numInput.value = v;
  }
  slider.value = v;
  updateFilterUI();
  invalidateDisplayCache();
  needsRender = true;
  if(listView.classList.contains('show')) renderListTable();
}
FILTER_DEFS.forEach(def=>{
  const slider = document.getElementById(`filterSlider-${def.id}`);
  const numInput = document.getElementById(`filterNum-${def.id}`);
  slider.addEventListener('input', ()=>{
    applyFilterValue(def, parseFloat(slider.value));
  });
  numInput.addEventListener('input', ()=>{
    if(numInput.value === '') { applyFilterValue(def, def.mode==='max' ? def.max : def.min); return; }
    let v = parseFloat(numInput.value);
    if(isNaN(v)) return;
    v = Math.min(def.max, Math.max(def.min, v));
    applyFilterValue(def, v);
  });
});
document.getElementById('filterToggleBtn').addEventListener('click', (e)=>{
  e.stopPropagation();
  document.getElementById('filterPanel').classList.toggle('show');
});
document.getElementById('filterUpsellBtn').addEventListener('click', (e)=>{
  e.stopPropagation();
  openLoginModal();
});
document.addEventListener('click', (e)=>{
  if(!e.target.closest('.filter-wrap')) document.getElementById('filterPanel').classList.remove('show');
});
document.getElementById('filterResetBtn').addEventListener('click', ()=>{
  activeFilters = {};
  FILTER_DEFS.forEach(def=>{
    const slider = document.getElementById(`filterSlider-${def.id}`);
    slider.value = def.mode==='max' ? def.max : def.min;
    document.getElementById(`filterNum-${def.id}`).value = '';
  });
  updateFilterUI();
  needsRender = true;
  if(listView.classList.contains('show')) renderListTable();
  pushHistoryState();
});
document.getElementById('filterApplyBtn').addEventListener('click', ()=>{
  document.getElementById('filterPanel').classList.remove('show');
  renderListTable();
  showView('list');
  pushHistoryState();
});
updateFilterUI();

/* =========================================================
   LİSTE / TABLO GÖRÜNÜMÜ
   ========================================================= */
let listSortKey = 'overall', listSortDir = -1, listSearchQ = '';
let activeContinent = 'Tümü';
function listRowValue(cd, key){
  switch(key){
    case 'name': return cd.name;
    case 'overall': return cd.scores.overall;
    case 'turkeyExport': return getTurkeyExportValueM(cd);
    case 'importTax': return numFromPercent(cd.importTax);
    case 'logisticsCost': return numFromMoney(cd.logisticsCost);
    case 'gdpPerCapita': return numFromMoney(cd.gdpPerCapita);
    case 'inflation': return generateExtraFields(cd).inflation ? parseFloat(generateExtraFields(cd).inflation) : 0;
    case 'population': return numFromMoney(cd.population);
    case 'isManufacturer': return MAJOR_FURNITURE_MANUFACTURERS.has(cd.iso) ? 1 : 0;
    default: return 0;
  }
}
const LIST_COLUMNS = [
  { key:'name', label:'Ülke' },
  { key:'overall', label:'Fırsat Skoru' },
  { key:'turkeyExport', label:'Türkiye\'nin Mobilya İhracatı' },
  { key:'population', label:'Nüfus' },
  { key:'gdpPerCapita', label:'Kişi Başı GSYH' },
  { key:'logisticsCost', label:'Lojistik Maliyeti' },
  { key:'importTax', label:'İthalat Vergisi' },
  { key:'isManufacturer', label:'Mobilya Üreticisi mi?' },
  { key:'inflation', label:'Enflasyon' },
];
// Kullanıcı sütun başlıklarını sürükleyip sırasını değiştirebilir — bu sıra oturum boyunca korunur.
let listColumnOrder = LIST_COLUMNS.map(c=>c.key);

function getColumnCellHtml(key, cd, xf){
  switch(key){
    case 'name': return `<td class="bright">${cd.flag} ${cd.name}</td>`;
    case 'overall': return `<td><span class="score-chip" style="background:${scoreColor(cd.scores.overall)}22; color:${scoreColor(cd.scores.overall)}">${cd.scores.overall}</span></td>`;
    case 'turkeyExport': { const ti=getTurkeyImportInfo(cd); return `<td>${ti.display}${ti.level==='real'?' <span style="color:var(--teal);font-size:9px;">✓</span>':ti.level==='estimated'?' <span style="color:var(--amber);font-size:9px;">~</span>':''}</td>`; }
    case 'importTax': return `<td>${cd.importTax}</td>`;
    case 'logisticsCost': return `<td>${cd.logisticsCost}</td>`;
    case 'gdpPerCapita': return `<td>${cd.gdpPerCapita}</td>`;
    case 'inflation': return `<td>%${xf.inflation}</td>`;
    case 'population': return `<td>${cd.population}</td>`;
    case 'isManufacturer': return `<td>${manufacturerTierLabel(cd.iso) ? 'Evet — ' + manufacturerTierLabel(cd.iso) : 'Hayır'}</td>`;
    default: return '<td></td>';
  }
}

function renderListHead(){
  const thead = document.getElementById('countryTableHead');
  const cols = listColumnOrder.map(key => LIST_COLUMNS.find(c=>c.key===key));
  const dynamicLabel = (c) => c.key === 'turkeyExport' ? `Türkiye'nin ${CATEGORIES[activeCategory].label} İhracatı` : c.label;
  thead.innerHTML = `<tr>
    <th></th>
    ${cols.map(c=>`<th draggable="true" data-sort="${c.key}" data-colkey="${c.key}" class="${listSortKey===c.key ? (listSortDir===1?'sorted-asc':'sorted-desc') : ''}" title="Sıralamak için tıkla, taşımak için sürükle">${dynamicLabel(c)}</th>`).join('')}
    <th></th>
  </tr>`;
  thead.querySelectorAll('th[data-sort]').forEach(th=>{
    th.addEventListener('click', ()=>{
      const key = th.getAttribute('data-sort');
      if(listSortKey === key) listSortDir *= -1; else { listSortKey = key; listSortDir = -1; }
      renderListHead();
      renderListTable();
    });
    th.addEventListener('dragstart', (e)=>{
      e.dataTransfer.setData('text/plain', th.getAttribute('data-colkey'));
      e.dataTransfer.effectAllowed = 'move';
      th.classList.add('dragging-col');
    });
    th.addEventListener('dragend', ()=> th.classList.remove('dragging-col'));
    th.addEventListener('dragover', (e)=>{ e.preventDefault(); th.classList.add('drag-over-col'); });
    th.addEventListener('dragleave', ()=> th.classList.remove('drag-over-col'));
    th.addEventListener('drop', (e)=>{
      e.preventDefault();
      th.classList.remove('drag-over-col');
      const draggedKey = e.dataTransfer.getData('text/plain');
      const targetKey = th.getAttribute('data-colkey');
      if(!draggedKey || draggedKey === targetKey) return;
      const fromIdx = listColumnOrder.indexOf(draggedKey);
      const toIdx = listColumnOrder.indexOf(targetKey);
      if(fromIdx === -1 || toIdx === -1) return;
      listColumnOrder.splice(fromIdx, 1);
      listColumnOrder.splice(toIdx, 0, draggedKey);
      renderListHead();
      renderListTable();
    });
  });
}

// NATO üyesi 32 ülke (güncel, Finlandiya 2023 ve İsveç 2024 katılımı dahil).
const NATO_MEMBERS = new Set([
  'US','GB','FR','DE','IT','CA','TR','ES','PT','NL','BE','LU','NO','DK','IS',
  'GR','PL','CZ','HU','SK','SI','BG','RO','HR','AL','ME','MK','EE','LV','LT','FI','SE',
]);
function renderContinentFilter(){
  const el = document.getElementById('continentFilter');
  const continents = ['Tümü','Avrupa','Asya','Afrika','Kuzey Amerika','Güney Amerika','Okyanusya','NATO Ülkeleri'];
  el.innerHTML = continents.map(cont=>
    `<button class="continent-chip ${activeContinent===cont?'active':''}" data-continent="${cont}">${cont}</button>`
  ).join('');
  el.querySelectorAll('.continent-chip').forEach(chip=>{
    chip.addEventListener('click', ()=>{
      activeContinent = chip.getAttribute('data-continent');
      renderContinentFilter();
      renderListTable();
    });
  });
}
function renderListTable(){
  renderListHead();
  renderContinentFilter();
  const tbody = document.getElementById('countryTableBody');
  let rows = COUNTRIES.map(c => ({ base:c, cd: withCategory(c) }));
  if(listSearchQ) rows = rows.filter(r => normalizeTr(r.cd.name).includes(listSearchQ));
  if(hasActiveFilters()) rows = rows.filter(r => countryPassesFilters(r.base));
  if(activeContinent === 'NATO Ülkeleri') rows = rows.filter(r => NATO_MEMBERS.has(r.base.iso));
  else if(activeContinent !== 'Tümü') rows = rows.filter(r => COUNTRY_CONTINENT[r.base.id] === activeContinent);
  rows.sort((a,b)=>{
    const va = listRowValue(a.cd, listSortKey), vb = listRowValue(b.cd, listSortKey);
    if(typeof va === 'string') return va.localeCompare(vb, 'tr') * listSortDir;
    return (va - vb) * listSortDir;
  });
  document.getElementById('listCount').textContent = rows.length + ' pazar';
  tbody.innerHTML = rows.map(({base,cd})=> {
    const xf = generateExtraFields(cd);
    const openAttr = `onclick="handleListRowClick('${base.id}')" style="cursor:pointer;"`;
    const dataCells = listColumnOrder.map(key => getColumnCellHtml(key, cd, xf).replace('<td', `<td ${openAttr}`)).join('');
    return `
    <tr data-id="${base.id}">
      <td class="td-check"><input type="checkbox" class="compare-check" data-id="${base.id}" ${compareIds.includes(base.id)?'checked':''}></td>
      ${dataCells}
      <td ${openAttr}><span class="row-open">Aç →</span></td>
    </tr>`;
  }).join('');
}
// Satır açma davranışı YALNIZCA checkbox DIŞINDAKİ her hücrenin kendi onclick
// özniteliğine ayrı ayrı eklenir — <tr> üzerinde artık hiç onclick yok.
// Ek olarak: checkbox hücresine yapılan HER tıklama, CAPTURE aşamasında
// (satırın kendi onclick'i çalışmadan ÖNCE) durduruluyor — böylece hiçbir
// koşulda checkbox'a tıklamak ülke sayfasını açamaz, sadece seçim yapar.
const countryTableBodyEl = document.getElementById('countryTableBody');
if(countryTableBodyEl){
  countryTableBodyEl.addEventListener('click', (e)=>{
    if(e.target.closest('.td-check')) e.stopPropagation();
  }, true);
  countryTableBodyEl.addEventListener('click', (e)=>{
    const cell = e.target.closest('.td-check');
    if(!cell || e.target.tagName === 'INPUT') return; // checkbox'ın kendi native davranışı zaten çalışır
    const chk = cell.querySelector('input.compare-check');
    if(chk){ chk.checked = !chk.checked; chk.dispatchEvent(new Event('change', { bubbles:true })); }
  });
  countryTableBodyEl.addEventListener('change', (e)=>{
    const chk = e.target.closest('input.compare-check');
    if(chk) handleListCheckboxChange(chk);
  });
}
function handleListRowClick(id){
  const c = COUNTRIES.find(x=>x.id===id);
  if(c) openDashboard(c);
}
function handleListCheckboxChange(chk){
  const id = chk.getAttribute('data-id');
  if(chk.checked) addToCompare(id); else removeFromCompare(id);
}
// arama kutusu liste görünümünü de filtrelesin
searchInput.addEventListener('input', ()=>{
  listSearchQ = normalizeTr(searchInput.value.trim());
  if(listView.classList.contains('show')) renderListTable();
});

/* =========================================================
   HOVER CARD
   ========================================================= */
const hoverCard = document.getElementById('hoverCard');
let hoverCardCountry = null;
hoverCard.addEventListener('click', (e)=>{
  if(e.target && e.target.id === 'hcDetailBtn' && hoverCardCountry){
    hideHoverCard();
    openCountry(hoverCardCountry);
  }
});
function showTurkeyCard(e){
  const t = TURKEY_PROFILE;
  hoverCard.innerHTML = `
    <div class="hc-head">
      <div style="display:flex;align-items:center;gap:9px;">
        <span class="hc-flag">${t.flag}</span><span class="hc-country">${t.name}</span>
      </div>
      <span class="hc-score-badge" style="background:rgba(63,208,192,0.18)">İhracat Merkezi</span>
    </div>
    <div class="hc-grid">
      <div class="hc-item"><span class="hc-label">Nüfus</span><span class="hc-value">${t.population}</span></div>
      <div class="hc-item"><span class="hc-label">GSYH</span><span class="hc-value">${t.gdp}</span></div>
      <div class="hc-item"><span class="hc-label">Toplam Mobilya İhracatı</span><span class="hc-value">${t.totalExport}</span></div>
      <div class="hc-item"><span class="hc-label">Yıllık Değişim</span><span class="hc-value up">${t.yoyChange}</span></div>
    </div>
    <div class="hc-suppliers">
      <span class="hc-label">İhracatta Ülke Payları</span>
      <div class="hc-bar">${t.exportDestinations.map(s=>`<span style="flex:${s.v}" class="${s.c==='Diğer'?'seg-other':'seg-tr'}" title="${s.c} %${s.v}"></span>`).join('')}</div>
      <div class="hc-supplier-list">${t.exportDestinations.slice(0,5).map(s=>`<span>${s.c} %${s.v}</span>`).join('')}</div>
    </div>
    <div class="hc-footer"><span>Türkiye'nin ihracat kaynağı</span><span>—</span></div>
  `;
  hoverCard.classList.add('show');
  positionHoverCard(e);
}

function renderTurkeyPage(){
  const t = TURKEY_PROFILE;
  const yoyNum = numFromPercent(t.yoyChange);
  document.getElementById('turkeyBody').innerHTML = `
    <div class="teaser-kpi-row" style="grid-template-columns:1fr 1fr 1fr; margin-bottom:28px;">
      <div class="teaser-kpi"><div class="teaser-kpi-label">Nüfus</div><div class="teaser-kpi-val" style="font-size:24px;">${t.population}</div></div>
      <div class="teaser-kpi"><div class="teaser-kpi-label">GSYH</div><div class="teaser-kpi-val" style="font-size:24px;">${t.gdp}</div></div>
      <div class="teaser-kpi"><div class="teaser-kpi-label">Toplam Mobilya İhracatı</div><div class="teaser-kpi-val" style="font-size:24px; color:${yoyNum>=0?'var(--teal)':'var(--red)'}">${t.totalExport}</div></div>
    </div>

    <div class="import-restriction-banner" style="background:rgba(201,169,97,0.1); border-color:rgba(201,169,97,0.4);">
      <div class="import-restriction-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg></div>
      <div>
        <div class="import-restriction-title" style="color:var(--amber);">2025 Yıllık Değişim: ${t.yoyChange} ${dqBadge('real')}</div>
        <div class="import-restriction-note">Dolar bazında ihracat artmış olsa da, sektör açısından 2025 çok güçlü bir yıl olarak görülmüyor — büyüme sınırlı kaldı.</div>
      </div>
    </div>

    <div class="cp-section-title" style="margin:28px 0 12px;"><span class="num"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 4 5.7 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.7-4-9s1.5-6.5 4-9z"/></svg></span> En Büyük 5 İhracat Pazarı</div>
    <div class="opp-grid">
      ${t.exportDestinations.filter(d=>d.c!=='Diğer').map(d=>`
        <div class="opp-card"><div class="opp-t">${d.c}</div><div class="opp-d">İhracat payı: %${d.v}</div></div>
      `).join('')}
    </div>

    <div class="cp-section-title" style="margin:28px 0 12px;"><span class="num"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg></span> Ancak İşin İlginç Tarafı</div>
    <div class="exec-box" style="margin-bottom:20px;">
      Dolar bazında ihracat artmış olsa da sektör açısından 2025 çok güçlü bir yıl olarak görülmüyor. Bunun başlıca nedenleri:
      <ul style="margin:14px 0 0; padding-left:20px; line-height:1.9;">
        <li>Yüksek işçilik maliyetleri</li>
        <li>Kurun enflasyon kadar artmaması (rekabet gücü kaybı)</li>
        <li>Çin, Vietnam ve Polonya gibi ülkelerle fiyat rekabetinin zorlaşması</li>
        <li>Avrupa talebindeki yavaşlama</li>
      </ul>
    </div>

    <div class="panel-grid" style="margin-bottom:20px;">
      <div class="card"><div class="card-label">Ulaşılan Ülke Sayısı</div><div class="card-value">200+</div></div>
      <div class="card"><div class="card-label">En Büyük Pazarlar</div><div class="card-value" style="font-size:15px;">Irak, Almanya, ABD, Fransa, Romanya</div></div>
    </div>

    <div class="cp-section-title" style="margin:28px 0 12px;"><span class="num"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg></span> Katma Değer Tarafı Olumlu</div>
    <div class="exec-box" style="margin-bottom:20px;">
      Miktar bazında büyüme sınırlı olsa da ihraç edilen ürünlerin değeri artmaya devam ediyor. Kilogram başına ihracat değeri uzun vadede <b>$2,43/kg'dan $4,19/kg'a</b> yükseldi — bu, Türkiye'nin daha yüksek katma değerli mobilya satabildiğini gösteriyor.
    </div>

    <div class="import-restriction-banner" style="background:rgba(63,208,192,0.1); border-color:rgba(63,208,192,0.4);">
      <div class="import-restriction-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.3h6c0-1 .4-1.8 1-2.3A7 7 0 0 0 12 2z"/></svg></div>
      <div>
        <div class="import-restriction-title" style="color:var(--teal);">Furniture Atlas İçgörüsü</div>
        <div class="import-restriction-note">2025 yılında Türkiye'nin mobilya ihracatı sadece %1,8 büyürken, küresel rekabet çok daha sert hale geldi. Bundan sonraki büyüme, daha fazla üretmekten çok <b>doğru ülkeye ve doğru alıcıya ulaşabilen firmaların</b> başarısıyla şekillenecek.</div>
      </div>
    </div>
  `;
  document.getElementById('turkeyModal').classList.add('open');
}
document.getElementById('closeTurkey').addEventListener('click', ()=>{
  document.getElementById('turkeyModal').classList.remove('open');
});

function showHoverCard(baseCountry, e){
  const c = withCategory(baseCountry);
  hoverCardCountry = baseCountry;
  const restriction = IMPORT_RESTRICTIONS[baseCountry.id];
  hoverCard.innerHTML = `
    ${restriction ? `<div class="hc-restriction ${restriction.level}">${restriction.level==='severe' ? '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;"><circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/></svg> İthalat fiilen mümkün değil' : '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;"><path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/></svg> Ciddi ithalat kısıtlaması'}</div>` : ''}
    <div class="hc-head">
      <div style="display:flex;align-items:center;gap:9px;">
        <span class="hc-flag">${c.flag}</span><span class="hc-country">${c.name}</span>
      </div>
      <span class="hc-score-badge">${c.scores.overall}/100</span>
    </div>
    <div class="hc-grid">
      <div class="hc-item"><span class="hc-label">Nüfus ${c.dq && c.dq.population==='real' ? '<span style="color:var(--teal);font-size:8px;">✓</span>' : '<span style="color:var(--text-2);font-size:8px;opacity:0.7;">~</span>'}</span><span class="hc-value">${c.population}</span></div>
      <div class="hc-item"><span class="hc-label">GSYH ${c.dq && c.dq.gdp==='real' ? '<span style="color:var(--teal);font-size:8px;">✓</span>' : '<span style="color:var(--text-2);font-size:8px;opacity:0.7;">~</span>'}</span><span class="hc-value">${c.gdp}</span></div>
      <div class="hc-item"><span class="hc-label">KDV ${c.dq && c.dq.vat==='real' ? '<span style="color:var(--teal);font-size:8px;">✓</span>' : '<span style="color:var(--text-2);font-size:8px;opacity:0.7;">~</span>'}</span><span class="hc-value">${c.vat}</span></div>
      <div class="hc-item"><span class="hc-label">İthalat Vergisi ${c.dq && c.dq.importTax==='real' ? '<span style="color:var(--teal);font-size:8px;">✓</span>' : '<span style="color:var(--text-2);font-size:8px;opacity:0.7;">~</span>'}</span><span class="hc-value">${c.importTax}</span></div>
      <div class="hc-item"><span class="hc-label">Lojistik Maliyeti <span style="color:var(--text-2);font-size:8px;opacity:0.7;">~</span></span><span class="hc-value">${c.logisticsCost}</span></div>
      <div class="hc-item"><span class="hc-label">Nakliye Süresi <span style="color:var(--text-2);font-size:8px;opacity:0.7;">~</span></span><span class="hc-value">${c.transitTime}</span></div>
      <div class="hc-item"><span class="hc-label">Türkiyeden Mobilya İthalatı${(()=>{const ti=getTurkeyImportInfo(c); return ti.level==='real' ? (' <span style="color:var(--teal); font-size:8px;">✓ '+(ti.isTotal?'Bakanlık (toplam)':'ITC')+'</span>') : ti.level==='estimated' ? ' <span style="color:var(--text-2); font-size:8px; opacity:0.7;">~ tahmini</span>' : '';})()}</span><span class="hc-value">${getTurkeyImportInfo(c).display}</span></div>
      <div class="hc-item"><span class="hc-label">Mobilya Üreticisi mi? <span style="color:var(--teal);font-size:8px;">✓</span></span><span class="hc-value">${manufacturerTierLabel(c.iso) ? 'Evet — ' + manufacturerTierLabel(c.iso) : 'Hayır'}</span></div>
    </div>
    <div class="hc-suppliers">
      <span class="hc-label">İthalatta Tedarikçi Payları</span>
      <div class="hc-bar">${c.suppliers.map(s=>`<span style="flex:${s.v}" class="${s.c==='Türkiye'?'seg-tr':'seg-other'}" title="${s.c} %${s.v}"></span>`).join('')}</div>
      <div class="hc-supplier-list">${c.suppliers.slice(0,4).map(s=>`<span class="${s.c==='Türkiye'?'tr-hl':''}">${s.c} %${s.v}</span>`).join('')}</div>
    </div>
    <div class="hc-footer" style="margin-bottom:2px;"><span>${c.ports}</span></div>
    <button class="hc-detail-btn" id="hcDetailBtn">Detaya Git →</button>
  `;
  hoverCard.classList.add('show');
  positionHoverCard(e);
}
function positionHoverCard(e){
  const pad = 14;
  const cardW = Math.min(296, window.innerWidth - pad*2);
  let x = e.clientX + pad, y = e.clientY + pad;
  if(x + cardW > window.innerWidth - pad) x = window.innerWidth - cardW - pad;
  if(x < pad) x = pad;
  hoverCard.style.width = cardW + 'px';
  hoverCard.style.left = x+'px';
  hoverCard.style.top = y+'px';
  // Kart yüksekliği belliyse dikey taşmayı da düzelt (özellikle mobilde önemli).
  requestAnimationFrame(()=>{
    const cardH = hoverCard.offsetHeight;
    if(cardH){
      let finalY = y;
      if(finalY + cardH > window.innerHeight - pad) finalY = Math.max(pad, window.innerHeight - cardH - pad);
      hoverCard.style.top = finalY + 'px';
    }
  });
}
function hideHoverCard(){ hoverCard.classList.remove('show'); }

/* =========================================================
   DASHBOARD
   ========================================================= */
/* =========================================================
   ÜLKE SAYFASI (yeni, sade 10 bölümlük yapı)
   Artık ayrı sekmeler yok — tek akan sayfa, "Harita / Liste"
   seçicisinin yanına üçüncü bir seçenek (ülke çip'i) olarak eklenir.
   ========================================================= */
const dashboard = document.getElementById('dashboard');
let currentBaseCountry = null;
let openCountryId = null;

function potentialLabel(s){ return s>=70?'Yüksek':s>=45?'Orta':'Düşük'; }
function recommendationLabel(s){ return s>=70?'Güçlü Öneri':s>=50?'Değerlendirilebilir':'Temkinli Yaklaşım'; }
function riskColor(score){ return score>=60 ? '#e0685a' : score>=35 ? '#c9a961' : '#3fd0c0'; }
function indicatorColor(diff){ return diff>=60 ? '#e0685a' : diff>=35 ? '#c9a961' : '#3fd0c0'; }
function indicatorLabel(diff){ return diff>=60 ? 'Yüksek' : diff>=35 ? 'Orta' : 'Düşük'; }
// Gümrük/Lojistik Zorluğu göstergeleri kullanıcıyı gereksiz yere korkutmasın diye "Yüksek" seviyesi
// hiç kullanılmaz — en kötü durumda bile "Orta" gösterilir.
function difficultyIndicatorColor(diff){ return diff>=35 ? '#c9a961' : '#3fd0c0'; }
function difficultyIndicatorLabel(diff){ return diff>=35 ? 'Orta' : 'Düşük'; }
// Veri Kalitesi rozeti — 'real' | 'estimated' | 'unknown'. Bilinçli olarak göze çarpacak
// kadar belirgin tasarlandı; kullanıcı hangi rakama ne kadar güvenebileceğini bir bakışta görsün.
function dqBadge(level){
  if(level === 'real') return '<span class="dq-badge dq-real">✓ GERÇEK</span>';
  if(level === 'estimated') return '<span class="dq-badge dq-estimated">~ TAHMİNİ</span>';
  return '<span class="dq-badge dq-unknown">? BİLİNMİYOR</span>';
}
function dqCardClass(level){
  if(level === 'real') return 'dq-card-real';
  if(level === 'estimated') return 'dq-card-estimated';
  return 'dq-card-unknown';
}

// Risk/tedarikçi çubuklarını sıfırdan hedef genişliğe doldurarak yumuşak bir
// "dolma" animasyonu verir — sadece görsel, hiçbir veriyi değiştirmez.
function animateFillBars(){
  requestAnimationFrame(()=>{
    document.querySelectorAll('.rbar-fill, .sup-bar').forEach(el=>{
      const target = el.style.width;
      if(!target) return;
      el.style.width = '0%';
      requestAnimationFrame(()=> requestAnimationFrame(()=>{ el.style.width = target; }));
    });
  });
}
function renderCountryPage(baseCountry){
  const c = withCategory(baseCountry);
  const x = generateExtraFields(c);
  const catInfo = CATEGORIES[activeCategory];
  const potential = potentialLabel(c.scores.market);
  const competitionLabel = c.scores.competition>=65?'Yüksek':c.scores.competition>=40?'Orta':'Düşük';

  document.getElementById('dashFlag').textContent = c.flag;
  document.getElementById('dashTitle').textContent = c.name;
  document.getElementById('dashSubtitle').textContent =
    `${catInfo.label} · ${catInfo.hs} · Fırsat Skoru ${c.scores.overall}/100`;
  updateFavButton();
  document.getElementById('favBtn').style.visibility = '';
  document.getElementById('addCompareBtn').style.display = '';

  const tInfo = getTurkeyImportInfo(c);
  const exportSentence = tInfo.level !== 'unknown'
    ? `Türkiye'den ${c.name}'ye ${catInfo.label.toLowerCase()} ihracatı ${tInfo.display} seviyesinde (${tInfo.level==='real'?'doğrulanmış veri':'tahmini'})${tInfo.growthPct !== null ? `, 2024→2025 döneminde gerçek verilerle ${tInfo.growthPct>=0?'+':''}${tInfo.growthPct}% değişti` : ''}.`
    : `Türkiye'den ${c.name}'ye bu kategoride doğrulanmış bir ihracat verisi henüz yok.`;
  const shareSentence = c.suppliersVerified
    ? `Türkiye'nin bu pazardaki doğrulanmış tedarikçi payı %${numFromPercent(c.turkeyShare)}.`
    : c.turkeyShareEstimated
    ? `Türkiye'nin bu pazardaki tedarikçi payı yaklaşık %${numFromPercent(c.turkeyShare)} (tahmini, doğrulanmış kaynak yok).`
    : `Türkiye'nin bu pazardaki tedarikçi payına dair doğrulanmış bir kaynak yok (Bilinmiyor).`;
  const taxSentence = c.dq.importTax === 'unknown'
    ? `İthalat vergisine dair doğrulanmış bir veri yok. Lojistik maliyeti ${c.logisticsCost} (${c.transportMode==='road'?'karayolu':'deniz yolu'}, tahmini).`
    : `İthalat vergisi ${c.importTax} (doğrulanmış), lojistik maliyeti ${c.logisticsCost} (${c.transportMode==='road'?'karayolu':'deniz yolu'}, tahmini).`;
  const manufacturerNote = manufacturerTierLabel(c.iso)
    ? `${c.name}, mobilya üretiminde ${manufacturerTierLabel(c.iso).toLowerCase()} kategorisinde yer alıyor — bu, güçlü yerel rekabet anlamına gelebilir.`
    : `${c.name} büyük ölçekli bir mobilya üreticisi değil, bu da ithalata bağımlılığı artırabilir.`;
  const execSummary = `${c.name}'nin nüfusu ${c.population}, kişi başı GSYH'si ${c.gdpPerCapita} (${c.dq.gdp==='real'?'doğrulanmış':'tahmini'}). ${exportSentence} ${shareSentence} ${taxSentence} ${manufacturerNote} Fırsat Skoru: ${c.scores.overall}/100 (pazar büyüklüğü, giriş zorluğu, rekabet ve lojistik avantajın ağırlıklı ortalaması — detay için skorun yanındaki ⓘ işaretine bakın).`;

  const oppCards = [
    { t:'Büyüyen Segment', d: c.dq.importGrowth==='unknown' ? `${catInfo.label} ithalat büyüme oranına dair doğrulanmış veri yok.` : `${catInfo.label} ithalatı ${c.importGrowth} oranında büyüyor.` },
    { t:'Yatırım Trendi', d:`Pazar büyüklüğü ${c.marketSize}, yıllık ithalat ${c.annualImports} ile istikrarlı yatırım ortamı.` },
    { t:'Gelecek Görünümü', d: c.dq.importGrowth==='unknown' ? 'Büyüme trendi için henüz doğrulanmış veri yok.' : `${numFromPercent(c.importGrowth)>=3 ? 'Büyüme trendinin önümüzdeki yıllarda devam etmesi bekleniyor.' : 'Pazar olgun; farklılaşma ile büyüme yakalanabilir.'}` },
  ];

  const risks = [
    { label:'Kur Riski', score: x.risks[1].score, note: x.risks[1].note },
    { label:'Ödeme Riski', score: x.risks[2].score, note: x.risks[2].note },
    { label:'Rekabet Riski', score: Math.round((x.risks[5].score + x.risks[6].score)/2), note: 'Yerel ve Çin menşeli rakiplerin fiyat/hacim baskısı.' },
  ];

  const gdpPC = numFromMoney(c.gdpPerCapita);
  const isNear = c.transportMode === 'road';
  const cRegion = REGION_MAP[c.iso] || 'other';
  const mfrTier = manufacturerTierLabel(c.iso);
  const turkishPerceptionNote = ['mideast','europe','cis','africa'].includes(cRegion)
    ? 'Bölgede Türk malı algısı genellikle olumlu — tarihi/coğrafi yakınlık ve "Made in Turkey" kalite algısı avantaj sağlıyor.'
    : 'Bölgede Türk marka bilinirliği henüz sınırlı olabilir — ilk girişte marka tanıtımına ekstra yatırım gerekebilir.';
  const incomeNote = gdpPC >= 30000
    ? 'Yüksek gelir grubu geniş — premium/tasarım odaklı ürünler için elverişli bir pazar.'
    : gdpPC >= 10000
    ? 'Orta gelir grubu büyük — kalite/fiyat dengesi iyi kurulmuş ürünler öncelikli olmalı.'
    : 'Düşük-orta gelir ağırlıklı bir pazar — fiyat rekabetçiliği kritik olacaktır.';

  const strategyPoints = [
    ['Yerli üretici mi?', mfrTier ? `Evet — mobilya üretiminde "${mfrTier}" kategorisinde. Yerel üretimle rekabet edecek fiyat/kalite dengesi şart.` : `Hayır, büyük ölçekli bir mobilya üreticisi değil — bu ithalata olan bağımlılığı ve fırsatı artırabilir.`],
    ['Gelir seviyesi ve segment', `Kişi başı GSYH ${c.gdpPerCapita} (${c.dq.gdp==='real'?'doğrulanmış':'tahmini'}). ${incomeNote}`],
    ["Türkiye'ye lojistik/jeopolitik yakınlık", isNear ? `Karayoluyla (TIR) ulaşılabiliyor — bu, rakiplere göre hız ve maliyet avantajı sağlıyor.` : `Deniz/hava yoluyla ulaşılıyor${c.distanceKm ? `, mesafe ~${Math.round(c.distanceKm).toLocaleString('tr-TR')} km` : ''} — teslimat süresi ve navlun maliyeti buna göre planlanmalı.`],
    ['Türk malı algısı', turkishPerceptionNote],
    ['Kimi hedeflemeli?', gdpPC>=15000 ? 'Otel, kurumsal proje ve üst-orta gelir grubu tüketiciler.' : 'Fiyata duyarlı orta segment perakende ve toptan alıcılar.'],
    ['Hangi şehirlerle başlanmalı?', 'Ana liman/lojistik merkezine yakın büyük şehirler ilk etapta önceliklendirilmeli.'],
    ['Distribütör mü perakendeci mi?', c.scores.difficulty>=50 ? 'Yerel mevzuat ve gümrük karmaşıklığı nedeniyle deneyimli bir distribütör önerilir.' : 'Doğrudan perakende ortaklıkları da değerlendirilebilir.'],
    ['İlk üç adım', '1) Küçük hacimli test siparişiyle pazara giriş, 2) yerel sertifikasyon/gümrük süreçlerini tamamlama, 3) 2-3 potansiyel distribütör/alıcı ile görüşme.'],
  ];

  const supplierBars = c.suppliers.map(s=>`
    <div class="sup-row">
      <span class="sup-name">${s.c}</span>
      <div class="sup-bar-wrap"><div class="sup-bar" style="width:${s.v}%; background:${s.c==='Türkiye'?'#3fd0c0':'#c9a961'}"></div></div>
      <span class="sup-val">%${s.v}</span>
    </div>`).join('');
  const turkeyRank = [...c.suppliers].sort((a,b)=>b.v-a.v).findIndex(s=>s.c==='Türkiye') + 1;

  document.getElementById('dashBody').innerHTML = `
    <div class="tr-export-hero ${getTurkeyImportInfo(c).level}">
      <div class="tr-export-hero-label">🇹🇷 Türkiye'den ${catInfo.label} İhracatı ${dqBadge(getTurkeyImportInfo(c).level==='real'?'real':getTurkeyImportInfo(c).level==='estimated'?'estimated':'unknown')}</div>
      <div class="tr-export-hero-value">${getTurkeyImportInfo(c).display}</div>
      <div class="tr-export-hero-caption">${c.name} pazarına yönelik yıllık ihracat değeri</div>
      <div class="tr-export-stats">
        ${(()=>{ const g=getTurkeyImportInfo(c).growthPct; return g!==null ? `
        <div class="tr-export-chip">
          <div class="tr-export-chip-label">2024→2025 Büyüme</div>
          <div class="tr-export-chip-val ${g<0?'down':'up'}">${g>=0?'+':''}${g}%</div>
        </div>` : ''; })()}
        <div class="tr-export-chip">
          <div class="tr-export-chip-label">Türkiye Pazar Payı</div>
          <div class="tr-export-chip-val">${turkeyShareDisplay(c)} ${dqBadge(turkeyShareTier(c))}</div>
        </div>
      </div>
    </div>

    ${IMPORT_RESTRICTIONS[c.id] ? `
    <div class="import-restriction-banner ${IMPORT_RESTRICTIONS[c.id].level}">
      <div class="import-restriction-icon">${IMPORT_RESTRICTIONS[c.id].level==='severe' ? '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;"><circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/></svg>' : '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;"><path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/></svg>'}</div>
      <div>
        <div class="import-restriction-title">${IMPORT_RESTRICTIONS[c.id].level==='severe' ? 'İthalat Fiilen Mümkün Değil / Çok Ciddi Kısıtlı' : 'Ciddi İthalat Kısıtlaması'} ${dqBadge('real')}</div>
        <div class="import-restriction-note">${IMPORT_RESTRICTIONS[c.id].note}</div>
      </div>
    </div>` : ''}

    ${EXPORT_PROCEEDS_EXEMPT_COUNTRIES.has(c.id) ? `
    <div class="import-restriction-banner significant" style="background:rgba(63,208,192,0.1); border-color:rgba(63,208,192,0.4);">
      <div class="import-restriction-icon">ℹ️</div>
      <div>
        <div class="import-restriction-title" style="color:var(--teal);">İhracat Bedelinin Yurda Getirilmesinde İstisna Tanınan Ülkeler Arasındadır ${dqBadge('real')}</div>
        <div class="import-restriction-note">T.C. Ticaret Bakanlığı düzenlemelerine göre, ${c.name}'ye yapılan ihracatta ihracat bedelinin Türkiye'ye getirilmesi zorunlu değildir.</div>
      </div>
    </div>` : ''}

    <div class="teaser-kpi-row">
      <div class="teaser-kpi">
        <div class="teaser-kpi-label">Fırsat Skoru <span class="score-info-icon" onclick="event.stopPropagation(); toggleScoreInfo(event);">ⓘ</span></div>
        <div style="display:flex; align-items:center; justify-content:center; gap:14px;">
          <svg width="48" height="48" viewBox="0 0 40 40" style="flex-shrink:0;"><circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="4"/><circle cx="20" cy="20" r="16" fill="none" stroke="${scoreColor(c.scores.overall)}" stroke-width="4" stroke-dasharray="100.5" stroke-dashoffset="${(100.5*(1-c.scores.overall/100)).toFixed(1)}" stroke-linecap="round" transform="rotate(-90 20 20)"/></svg>
          <div class="teaser-kpi-val" style="color:${scoreColor(c.scores.overall)}">${c.scores.overall}<span style="font-size:16px; color:var(--text-2);">/100</span></div>
        </div>
        <div class="teaser-kpi-caption" style="color:${scoreColor(c.scores.overall)};">${scoreLabel(c.scores.overall)}</div>
      </div>
      <div class="teaser-kpi">
        <div class="teaser-kpi-label">Nüfus${dqBadge(c.dq.population)}</div>
        <div class="teaser-kpi-val">${c.population}</div>
        <div class="teaser-kpi-caption">Toplam ülke nüfusu</div>
      </div>
    </div>

    <div class="dash-gated-wrap" id="dashGatedWrap">
    <div class="cp-section">
      <h3 class="cp-section-title"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M9 12l2 2 4-4"/></svg><span class="num">01</span> Yönetici Özeti</h3>
      <div class="kpi-row">
        <div class="kpi"><div class="kpi-label">AI Fırsat Skoru <span class="score-info-icon" onclick="event.stopPropagation(); toggleScoreInfo(event);">ⓘ</span></div><div style="display:flex; align-items:center; gap:12px;"><svg width="38" height="38" viewBox="0 0 40 40" style="flex-shrink:0;"><circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="4"/><circle cx="20" cy="20" r="16" fill="none" stroke="${scoreColor(c.scores.overall)}" stroke-width="4" stroke-dasharray="100.5" stroke-dashoffset="${(100.5*(1-c.scores.overall/100)).toFixed(1)}" stroke-linecap="round" transform="rotate(-90 20 20)"/></svg><div class="kpi-val" style="color:${scoreColor(c.scores.overall)}">${c.scores.overall}/100</div></div></div>
        <div class="kpi"><div class="kpi-label">Pazar Potansiyeli</div><div class="kpi-val">${potential}</div></div>
        <div class="kpi"><div class="kpi-label">Giriş Zorluğu</div><div class="kpi-val">${c.scores.difficulty}/100</div></div>
        <div class="kpi"><div class="kpi-label">Rekabet Seviyesi</div><div class="kpi-val">${competitionLabel}</div></div>
        <div class="kpi"><div class="kpi-label">Genel Öneri</div><div class="kpi-val" style="font-size:15px; color:${scoreColor(c.scores.overall)}">${recommendationLabel(c.scores.overall)}</div></div>
      </div>
      <div class="exec-box">${execSummary}</div>
      <div class="footnote" style="margin-top:10px;">${dqBadge('estimated')} Bu özet ve fırsat skoru, mevcut verilerden otomatik olarak üretilmiştir — insan analisti tarafından yazılmamıştır, nihai karar için bir uzmana danışın.</div>
    </div>

    <div class="cp-section">
      <h3 class="cp-section-title"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg><span class="num">02</span> Pazar Genel Bakışı</h3>
      <div class="panel-grid">
        <div class="card ${dqCardClass(c.dq.population)}"><div class="card-label">Nüfus${dqBadge(c.dq.population)}</div><div class="card-value">${c.population}</div></div>
        <div class="card ${dqCardClass(c.dq.gdp)}"><div class="card-label">GSYH${dqBadge(c.dq.gdp)}</div><div class="card-value">${c.gdp}</div></div>
        <div class="card ${dqCardClass(c.dq.gdp)}"><div class="card-label">Kişi Başı GSYH${dqBadge(c.dq.gdp)}</div><div class="card-value">${c.gdpPerCapita}</div></div>
        <div class="card"><div class="card-label">Para Birimi</div><div class="card-value">${c.currency}</div></div>
        <div class="card ${dqCardClass('estimated')}"><div class="card-label">Ekonomik Büyüme${dqBadge('estimated')}</div><div class="card-value">${x.gdpGrowth}%</div></div>
        <div class="card ${dqCardClass(x.inflationVerified ? 'real' : 'estimated')}"><div class="card-label">Enflasyon${dqBadge(x.inflationVerified ? 'real' : 'estimated')}</div><div class="card-value">%${x.inflation}</div></div>
        <div class="card ${dqCardClass(REAL_CALLING_CODE[c.id] ? 'real' : 'unknown')}"><div class="card-label">Telefon Kodu${dqBadge(REAL_CALLING_CODE[c.id] ? 'real' : 'unknown')}</div><div class="card-value">${REAL_CALLING_CODE[c.id] ? '+'+REAL_CALLING_CODE[c.id] : 'Bilinmiyor'}</div></div>
      </div>
    </div>

    <div class="cp-section">
      <h3 class="cp-section-title"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 7h13l-4-4M17 17H4l4 4"/></svg><span class="num">03</span> Ticaret Özeti</h3>
      <div class="panel-grid" style="margin-bottom:18px;">
        <div class="card ${dqCardClass(getTurkeyImportInfo(c).level==='real'?'real':getTurkeyImportInfo(c).level==='estimated'?'estimated':'unknown')}"><div class="card-label">Türkiyeden Mobilya İthalatı${dqBadge(getTurkeyImportInfo(c).level==='real'?'real':getTurkeyImportInfo(c).level==='estimated'?'estimated':'unknown')}${getTurkeyImportInfo(c).isTotal ? ' <span class="footnote" style="margin:0;">(tüm kategoriler)</span>' : ''}</div><div class="card-value">${getTurkeyImportInfo(c).display}</div></div>
        <div class="card ${dqCardClass(turkeyShareTier(c))}"><div class="card-label">Türkiye Pazar Payı${dqBadge(turkeyShareTier(c))}</div><div class="card-value">${turkeyShareDisplay(c)}</div></div>
        <div class="card ${dqCardClass('estimated')}"><div class="card-label">Pazar Büyüklüğü${dqBadge('estimated')}</div><div class="card-value">${c.marketSize}</div></div>
        <div class="card ${dqCardClass(getTurkeyImportInfo(c).growthPct!==null?'real':'estimated')}"><div class="card-label">Türkiye İhracat Büyümesi${dqBadge(getTurkeyImportInfo(c).growthPct!==null?'real':'estimated')}</div><div class="card-value ${(()=>{const g=getTurkeyImportInfo(c).growthPct; return g!==null && g<0 ? 'down' : 'up';})()}">${(()=>{const g=getTurkeyImportInfo(c).growthPct; if(g!==null) return (g>=0?'+':'')+g+'%'; return c.turkeyGrowth;})()}</div></div>
      </div>
      <div class="footnote" style="margin-top:10px;">${(()=>{const ti=getTurkeyImportInfo(c); if(ti.level==='real') return '✓ '+ti.note; if(ti.level==='estimated') return '~ '+ti.note; return '⚠ Bu ülke için Türkiye\'ye özel doğrulanmış ticaret verisi bulunamadı — rakamlar örnek/tahminidir.';})()}</div>
      <div class="footnote" style="margin-top:4px;">${dqBadge('estimated')} Pazar Büyüklüğü ve ülkenin toplam ithalat büyüme oranı (bkz. İlgili Kaynaklar) için henüz tek bir kapsamlı, ücretsiz gerçek veri kaynağı bulunamadı — model tahminidir.</div>
    </div>

    <div class="cp-section">
      <h3 class="cp-section-title"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="0.8" fill="var(--amber)" stroke="none"/></svg><span class="num">04</span> Rekabet</h3>
      <div class="two-col">
        <div>
          <div class="card-label" style="margin-bottom:12px;">Ana Tedarikçi Ülkeler${dqBadge(c.suppliersVerified ? 'real' : 'estimated')}</div>
          ${supplierBars}
        </div>
        <div class="card" style="align-self:start;">
          <div class="card-label">Türkiye'nin Konumu</div>
          <div class="card-value" style="font-size:26px; margin:8px 0;">${turkeyRank}. sıra</div>
          <div class="footnote" style="margin:0;">${c.suppliers.length} tedarikçi arasında, %${(c.suppliers.find(s=>s.c==='Türkiye')||{v:0}).v} pazar payıyla.</div>
        </div>
      </div>
    </div>

    <div class="cp-section">
      <h3 class="cp-section-title"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M9 3l3 6-3 12M15 3l-3 6 3 12"/></svg><span class="num">05</span> Premium İtalyan Mobilya Markaları — Pazar Varlığı</h3>
      <div class="footnote" style="margin-bottom:14px;">${dqBadge('real')} Poliform ve Roche Bobois için resmi marka mağaza bulucularından derlenmiş gerçek veri. Natuzzi sadece bölgesel toplam açıklıyor (ülke bazlı resmi veri yok). BoConcept, Calligaris ve Rimadesio için henüz ülke bazlı doğrulanmış veri yok.</div>
      <div class="table-scroll"><table class="compare-table" style="width:100%;">
        <thead><tr><th>Marka</th><th>Mono-Marka Mağaza</th><th>Yetkili Bayi/Satış Noktası</th><th>Şehirler</th><th>Pazar Gücü</th></tr></thead>
        <tbody>${buildPremiumBrandRows(c)}</tbody>
      </table></div>
      <div class="footnote" style="margin-top:10px;">Natuzzi (küresel, 31 Ara ${NATUZZI_GLOBAL.asOf.split(' ').pop()}): ${NATUZZI_GLOBAL.monoBrand} mono-marka mağaza + ${NATUZZI_GLOBAL.galleries} galeri, ${NATUZZI_GLOBAL.countries} ülkede. BoConcept (küresel): ${BOCONCEPT_GLOBAL.stores}+ mağaza, ${BOCONCEPT_GLOBAL.countries} ülke — ${BOCONCEPT_GLOBAL.note}</div>
    </div>

    <div class="cp-section">
      <h3 class="cp-section-title"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg><span class="num">06</span> İthalat Koşulları</h3>
      <div class="panel-grid">
        <div class="card ${dqCardClass(c.dq.importTax)}"><div class="card-label">İthalat Vergisi${dqBadge(c.dq.importTax)}</div><div class="card-value" style="font-size:19px">${c.importTax}</div></div>
        <div class="card ${dqCardClass(c.dq.vat)}"><div class="card-label">KDV${dqBadge(c.dq.vat)}</div><div class="card-value" style="font-size:19px">${c.vat}</div></div>
        <div class="card"><div class="card-label">Gümrük Zorluğu</div><div class="card-value" style="font-size:16px"><span class="indicator" style="background:${difficultyIndicatorColor(c.scores.difficulty)}"></span>${difficultyIndicatorLabel(c.scores.difficulty)}</div></div>
        <div class="card ${dqCardClass('estimated')}"><div class="card-label">Ort. Gümrük Süresi${dqBadge('estimated')}</div><div class="card-value" style="font-size:19px">${Math.round(2+c.scores.difficulty/12)} gün</div></div>
      </div>
      <div class="card-label" style="margin:18px 0 10px;">Gerekli Sertifikasyon</div>
      <div class="opp-grid">${getRequiredCerts(c, activeCategory).map(cert=>`
        <div class="opp-card"><div class="opp-t">${cert.name}${dqBadge(cert.level)}</div><div class="opp-d">${cert.note}</div></div>
      `).join('')}</div>
      <div class="card-label" style="margin:18px 0 10px;">Gerekli İhracat Evrakları</div>
      <div class="opp-grid">${getRequiredDocs(c).map(doc=>`
        <div class="opp-card"><div class="opp-t">${doc.name}${dqBadge(doc.level)}</div><div class="opp-d">${doc.note}</div></div>
      `).join('')}</div>
      <div class="footnote" style="margin-top:6px;">${c.dq.importTax==='real' ? '✓ İthalat vergisi, WTO/USTR/TARIC gibi resmi kaynaklardan doğrulanmıştır.' : '⚠ İthalat vergisi bu ülke için henüz doğrulanmadı — sevkiyat kararı öncesi mutlaka resmi bir kaynaktan (gümrük müşaviri, TARIC, ilgili ülkenin gümrük idaresi) teyit edin.'}</div>
    </div>

    <div class="cp-section">
      <h3 class="cp-section-title"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="7" width="13" height="9" rx="1"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="6" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg><span class="num">07</span> Lojistik ${c.transportMode==='road' ? '<span class=\"footnote\" style=\"margin:0 0 0 8px; display:inline;\"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;"><rect x="1" y="7" width="13" height="9" rx="1"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="6" cy="18" r="1.6"/><circle cx="17" cy="18" r="1.6"/></svg> Karayolu (TIR)</span>' : '<span class=\"footnote\" style=\"margin:0 0 0 8px; display:inline;\"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;"><path d="M3 14l2 6h14l2-6"/><path d="M6 14V6h6l3 8"/><path d="M2 18c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0"/></svg> Deniz Yolu (Konteyner)</span>'}</h3>
      <div class="panel-grid">
        <div class="card"><div class="card-label">${c.transportMode==='road' ? 'Ana Kara Sınır Kapısı' : 'Ana Liman'}</div><div class="card-value" style="font-size:15px">${c.ports}</div></div>
        <div class="card ${dqCardClass('estimated')}"><div class="card-label">Türkiye'den Nakliye Süresi${dqBadge('estimated')}</div><div class="card-value" style="font-size:19px">${c.transitTime}</div></div>
        <div class="card ${dqCardClass('estimated')}"><div class="card-label">${c.transportMode==='road' ? 'Ort. TIR Maliyeti' : 'Ort. Konteyner Maliyeti'}${dqBadge('estimated')}</div><div class="card-value" style="font-size:19px">${c.freightCost}</div></div>
        <div class="card"><div class="card-label">Lojistik Zorluğu</div><div class="card-value" style="font-size:16px"><span class="indicator" style="background:${difficultyIndicatorColor(100-c.scores.logistics)}"></span>${difficultyIndicatorLabel(100-c.scores.logistics)}</div></div>
      </div>
      <div class="footnote" style="margin-top:14px;">~ Maliyet ve süre, İstanbul'a olan mesafeye dayalı bir formülle hesaplanmıştır — gerçek navlun teklifi değildir. Kesin fiyat için bir lojistik firmasından teklif alın.</div>
    </div>

    <div class="cp-section">
      <h3 class="cp-section-title"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg><span class="num">08</span> Fırsatlar</h3>
      <div class="opp-grid">${oppCards.map(o=>`<div class="opp-card"><div class="opp-t">${o.t}</div><div class="opp-d">${o.d}</div></div>`).join('')}</div>
    </div>

    <div class="cp-section">
      <h3 class="cp-section-title"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/></svg><span class="num">09</span> Riskler</h3>
      <div class="rgrid">${risks.map(r=>`
        <div class="rcard">
          <div class="rcard-head"><span>${r.label}</span><span class="rscore" style="color:${riskColor(r.score)}">${r.score}/100</span></div>
          <div class="rbar"><div class="rbar-fill" style="width:${r.score}%; background:${riskColor(r.score)}"></div></div>
          <div class="rnote">${r.note}</div>
        </div>`).join('')}</div>
    </div>

    <div class="cp-section">
      <h3 class="cp-section-title"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/></svg><span class="num">10</span> AI Pazar Stratejisi</h3>
      <div class="footnote" style="margin-bottom:14px;">${dqBadge('estimated')} Bu çıkarımlar, ülkenin gerçek verilerinden (üretici durumu, gelir seviyesi, Türkiye'ye lojistik yakınlık, bölgesel algı) otomatik olarak türetilmiştir — kesin pazar araştırması yerine geçmez.</div>
      <table class="strategy-table">${strategyPoints.map(p=>`<tr><td>${p[0]}</td><td>${p[1]}</td></tr>`).join('')}</table>
    </div>

    <div class="cp-section">
      <h3 class="cp-section-title"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 15l6-6"/><path d="M13 6l1-1a3.5 3.5 0 0 1 5 5l-1 1"/><path d="M11 18l-1 1a3.5 3.5 0 0 1-5-5l1-1"/></svg><span class="num">11</span> İlgili Kaynaklar</h3>
      <div class="related-list">
        <details class="related-item">
          <summary>Ticaret İstatistikleri</summary>
          <div class="related-body">Toplam ithalat: ${c.annualImports} · Türkiye payı: ${turkeyShareDisplay(c)} · Yıllık büyüme: ${c.importGrowth} · Pazar büyüklüğü: ${c.marketSize}</div>
        </details>
        <details class="related-item">
          <summary>Gerekli Sertifikasyonlar</summary>
          <div class="related-body">${c.certs}</div>
        </details>
        <details class="related-item">
          <summary>Gümrük Prosedürleri</summary>
          <div class="related-body">${getRequiredDocs(c).map(d=>d.name).join(' · ')} · Ortalama gümrük süresi: ${Math.round(2+c.scores.difficulty/12)} gün</div>
        </details>
        <details class="related-item">
          <summary>İş Kültürü</summary>
          <div class="related-body footnote">Bu bölüm için henüz doğrulanmış bir veri kaynağı bulunmuyor.</div>
        </details>
        <details class="related-item" id="holidaysDetails" data-country-id="${c.id}">
          <summary>Resmi Tatiller (bu yıl)</summary>
          <div class="related-body" id="holidaysBody">Açıldığında yüklenecek…</div>
        </details>
        <details class="related-item" id="notesDetails">
          <summary>Notlarım (ekiple paylaşımlı)</summary>
          <div class="related-body" id="relatedNotesBody">Notlar yükleniyor…</div>
        </details>
      </div>

      <h3 class="cp-section-title" style="margin-top:32px;"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg><span class="num">12</span> Gelecek Kaynaklar</h3>
      ${renderFutureDataSection(c)}
    </div>
    </div>
  `;

  fillNotes(baseCountry);
  applyContentGate();
  animateFillBars();

  const holidaysEl = document.getElementById('holidaysDetails');
  if(holidaysEl){
    let holidaysLoaded = false;
    holidaysEl.addEventListener('toggle', async ()=>{
      if(!holidaysEl.open || holidaysLoaded) return;
      holidaysLoaded = true;
      const body = document.getElementById('holidaysBody');
      const year = new Date().getFullYear();
      try {
        const res = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${c.iso}`);
        if(!res.ok) throw new Error('no data');
        const data = await res.json();
        if(!data.length){ body.innerHTML = `${dqBadge('unknown')} Bu ülke için resmi tatil verisi bulunamadı.`; return; }
        body.innerHTML = `<div class="footnote" style="margin-bottom:8px;">${dqBadge('real')} Kaynak: Nager.Date resmi tatil API'si, ${year}</div>` +
          data.map(h=>`<div style="padding:4px 0;">${new Date(h.date+'T00:00:00').toLocaleDateString('tr-TR',{day:'numeric',month:'long'})} — ${h.localName || h.name}</div>`).join('');
      } catch(e){
        body.innerHTML = `${dqBadge('unknown')} Resmi tatil verisi alınamadı — internet bağlantınızı kontrol edin.`;
      }
    });
  }
}

function showView(view){
  document.querySelectorAll('.view-btn').forEach(b=>b.classList.remove('active'));
  const chipBtn = document.getElementById('countryChipBtn');
  if(chipBtn) chipBtn.classList.remove('active');
  if(view === 'country' && chipBtn){
    chipBtn.classList.add('active');
  } else {
    const btn = document.querySelector(`.view-btn[data-view="${view}"]`);
    if(btn) btn.classList.add('active');
  }
  heroSection.style.display = view==='globe' ? '' : 'none';
  listView.classList.toggle('show', view==='list');
  dashboard.classList.toggle('open', view==='country');
  window.scrollTo(0,0);
}

/* =========================================================
   ÜYELİK SİSTEMİ (Free / Kurucu Üye / Pro)
   Kurucu Üye kontenjanı (100 kişi) artık gerçek: Supabase'de bir
   `memberships` tablosu ve `claim_founding_membership()` /
   `founding_members_count()` fonksiyonları üzerinden, yarış
   koşullarına (race condition) karşı kilitli şekilde sayılır.
   localStorage yalnızca anlık arayüz güncellemesi için önbellek
   olarak kullanılır — gerçek kaynak Supabase'dir.
   Ödeme (Stripe vb.) henüz bağlı değil: "Kurucu Üye Ol"/"Standart ile
   Devam Et" butonları şimdilik doğrudan üyeliği kaydeder.
   ========================================================= */
const FOUNDING_SLOTS = 100;
const MEMBERSHIP_TIER_KEY = 'fa_membership_tier';       // 'free' | 'founding' | 'standard'
const FOUNDER_NUMBER_KEY = 'fa_founder_number';
const UNLOCKED_COUNTRY_KEY = 'fa_unlocked_country_id';
const FREE_WEEKLY_REPORT_LIMIT = 1; // Başlangıç (ücretsiz) üyelerin haftada açabileceği tam ülke raporu sayısı
let pendingMembershipClaim = null; // giriş yapılmamışken tıklanan plan: 'founding' | 'standard' | null

function getMembershipTier(){
  // Oturum yoksa (çıkış yapılmış veya hiç giriş yapılmamışsa) önbellekte eski bir
  // değer kalmış olsa bile her zaman 'free' döndürülür — rozet/kilit sadece
  // gerçekten giriş yapmış bir kullanıcı için geçerli olsun diye.
  if(typeof currentSupabaseSession !== 'undefined' && !currentSupabaseSession) return 'free';
  try{ return localStorage.getItem(MEMBERSHIP_TIER_KEY) || 'free'; }
  catch(e){ return 'free'; }
}
function getFounderNumber(){
  try{ const n = localStorage.getItem(FOUNDER_NUMBER_KEY); return n ? parseInt(n) : null; }
  catch(e){ return null; }
}
function setMembershipCache(tier, founderNumber){
  try{
    localStorage.setItem(MEMBERSHIP_TIER_KEY, tier);
    if(founderNumber) localStorage.setItem(FOUNDER_NUMBER_KEY, String(founderNumber));
    else localStorage.removeItem(FOUNDER_NUMBER_KEY);
  }catch(e){}
  updatePremiumUI();
  if(dashboard.classList.contains('open')) applyContentGate();
}
function isPremiumUser(){
  const t = getMembershipTier();
  return t === 'founding' || t === 'standard';
}
// Ziyaretçi: hiç oturum açmamış. Başlangıç (ücretsiz) üye: oturum açmış ama
// Kurucu/Standart değil. Kullanıcı yolculuğundaki üç seviye bu ikisi + premium.
function isVisitor(){
  return !currentSupabaseSession;
}
function isFreeMember(){
  return !!currentSupabaseSession && !isPremiumUser();
}
// Başlangıç (ücretsiz) üyeler haftada 1 farklı ülkenin tam raporunu
// açabilir — hafta değiştiğinde sayaç kendiliğinden sıfırlanır. Ziyaretçiler
// hiç tam rapor açamaz (bkz. canOpenCountryFree).
function currentWeekKey(){
  const d = new Date();
  const target = new Date(d.valueOf());
  const dayNr = (d.getDay() + 6) % 7; // Pazartesi=0
  target.setDate(target.getDate() - dayNr + 3); // bu haftanın Perşembe günü
  const firstThursday = new Date(target.getFullYear(), 0, 4);
  const diff = target - firstThursday;
  const week = 1 + Math.round(diff / (7 * 24 * 60 * 60 * 1000));
  return target.getFullYear() + '-W' + String(week).padStart(2, '0');
}
function getOpenedCountriesThisWeek(){
  try{
    const raw = localStorage.getItem(UNLOCKED_COUNTRY_KEY + '_' + currentWeekKey());
    return raw ? JSON.parse(raw) : [];
  }catch(e){ return []; }
}
function addOpenedCountryThisWeek(id){
  const opened = getOpenedCountriesThisWeek();
  if(!opened.includes(id)) opened.push(id);
  try{ localStorage.setItem(UNLOCKED_COUNTRY_KEY + '_' + currentWeekKey(), JSON.stringify(opened)); }catch(e){}
}

// Kalan Kurucu Üye kontenjanını Supabase'den okur (giriş şartı yok, herkese açık RPC).
async function getFoundingRemaining(){
  try{
    const { data, error } = await sb.rpc('founding_members_count');
    if(error || data === null || data === undefined) return null;
    return Math.max(0, FOUNDING_SLOTS - data);
  }catch(e){ return null; }
}
// Kurucu Üye talebini atomik olarak sunucuda işler (yarış koşulu korumalı).
async function claimFoundingMembership(){
  const { data, error } = await sb.rpc('claim_founding_membership');
  if(error) return { success:false, reason:'error', message:error.message };
  return data || { success:false, reason:'error' };
}
// Pro üyeliği kaydeder (kontenjan sınırı yok).
async function claimStandardMembership(){
  const { data: sessionData } = await sb.auth.getSession();
  const user = sessionData && sessionData.session && sessionData.session.user;
  if(!user) return { success:false, reason:'not_authenticated' };
  const { error } = await sb.from('memberships').upsert({ user_id:user.id, tier:'standard' }, { onConflict:'user_id' });
  if(error) return { success:false, reason:'error', message:error.message };
  return { success:true };
}
// Kullanıcının kendi üyelik kaydını sunucudan çekip yerel önbelleği günceller.
async function syncMembershipFromServer(){
  try{
    const { data: sessionData } = await sb.auth.getSession();
    const user = sessionData && sessionData.session && sessionData.session.user;
    if(!user) return;
    const { data, error } = await sb.from('memberships').select('tier, founder_number').eq('user_id', user.id).maybeSingle();
    if(error || !data) return;
    setMembershipCache(data.tier, data.founder_number);
  }catch(e){}
}
// Giriş yapılmamışsa önce kayıt ekranını açar ve talebi askıya alır; girişten sonra otomatik tamamlanır.
function requireLoginThenClaim(tier){
  pendingMembershipClaim = tier;
  hidePremiumModal();
  openLoginModal();
  showAuthTab('register');
}
async function processPendingClaim(){
  if(!pendingMembershipClaim) return;
  const tier = pendingMembershipClaim;
  pendingMembershipClaim = null;
  const result = tier === 'founding' ? await claimFoundingMembership() : await claimStandardMembership();
  if(result.success){
    setMembershipCache(tier, result.founder_number || null);
    showToast(tier === 'founding'
      ? `Tebrikler — Kurucu Üye #${result.founder_number} oldunuz.`
      : 'Pro üyeliğiniz aktifleşti.');
  } else if(result.reason === 'full'){
    showToast('Kurucu Üye kontenjanı dolmuş — Standart ile devam edebilirsiniz.');
  } else {
    showToast('Üyelik işlemi tamamlanamadı, lütfen tekrar deneyin.');
  }
}

// Basit, kalıcı olmayan bildirim (toast).
function showToast(message){
  let el = document.getElementById('atlasToast');
  if(!el){
    el = document.createElement('div');
    el.id = 'atlasToast';
    el.className = 'atlas-toast';
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(el._hideTimer);
  el._hideTimer = setTimeout(()=> el.classList.remove('show'), 4200);
}

function showPremiumModal(){
  document.getElementById('premiumModal').classList.add('open');
  pushHistoryState();
  refreshFoundingSlotsUI();
  updatePremiumFreeCard();
}
// Premium ekranındaki Keşif Üyeliği kartı, kim baktığına göre değişir:
// giriş yapmış ücretsiz üye için "şu anki planınız", ziyaretçi için ise
// "ücretsiz kayıt ol" çağrısı gösterir.
function updatePremiumFreeCard(){
  const badge = document.getElementById('premiumFreeBadge');
  const infoBox = document.getElementById('premiumFreeInfoBox');
  if(!badge || !infoBox) return;
  if(isFreeMember()){
    badge.textContent = 'Şu Anki Planınız';
    badge.classList.add('plan-badge-current');
    infoBox.innerHTML = `
      <div class="plan-info-title">Aktif Planınız</div>
      <div class="plan-info-text">Şu anda bu plandasınız. Sınırsız erişim için sağdaki planlardan birini seçin.</div>
    `;
  } else {
    badge.textContent = 'Ücretsiz Başlangıç';
    badge.classList.remove('plan-badge-current');
    infoBox.innerHTML = `
      <div class="plan-info-title">Hemen Başlayın</div>
      <div class="plan-info-text">Haftalık ücretsiz limitlerle platformu deneyin, dilediğiniz zaman yükseltin.</div>
      <button class="tray-btn" id="premiumFreeSignupBtn" style="width:100%; margin-top:10px; padding:9px; font-size:11.5px;">Ücretsiz Kayıt Ol</button>
    `;
    const signupBtn = document.getElementById('premiumFreeSignupBtn');
    if(signupBtn) signupBtn.addEventListener('click', ()=>{
      hidePremiumModal();
      openLoginModal();
      showAuthTab('register');
    });
  }
}
function hidePremiumModal(){
  document.getElementById('premiumModal').classList.remove('open');
  pushHistoryState();
}
// Premium modal açıldığında kalan Kurucu Üye kontenjanını sunucudan çekip gösterir;
// kontenjan dolduysa Kurucu Üye seçeneğini devre dışı bırakır.
async function refreshFoundingSlotsUI(){
  const remaining = await getFoundingRemaining();
  const label = document.getElementById('foundingSlotsLeft');
  const btnGroup = document.getElementById('foundingBtnGroup');
  const fullNote = document.getElementById('foundingFullNote');
  if(remaining === null){ if(label) label.textContent = '—'; return; }
  if(label) label.textContent = remaining;
  const isFull = remaining <= 0 && getMembershipTier() !== 'founding';
  if(btnGroup) btnGroup.style.display = isFull ? 'none' : '';
  if(fullNote) fullNote.style.display = isFull ? '' : 'none';
}
// Ziyaretçi: tam ülke raporu hiç açamaz (sadece özet KPI'lar görünür).
// Başlangıç (ücretsiz) üye: haftada 1 farklı ülkenin tam raporunu açabilir —
// aynı ülkeyi tekrar açmak kotayı tüketmez.
function canOpenCountryFree(countryId){
  if(isPremiumUser()) return true;
  if(isVisitor()) return false;
  const opened = getOpenedCountriesThisWeek();
  if(opened.includes(countryId)) return true;
  if(opened.length >= FREE_WEEKLY_REPORT_LIMIT) return false;
  addOpenedCountryThisWeek(countryId);
  return true;
}
const COMPARE_USED_KEY = 'fa_compare_used';
// Ziyaretçi: karşılaştırmayı hiç göremez. Başlangıç (ücretsiz) üye: haftada
// bir kez, en fazla 2 ülkeyi karşılaştırabilir (bkz. addToCompare'daki sınır).
function canCompareFree(){
  if(isPremiumUser()) return true;
  if(isVisitor()) return false;
  try{
    const key = COMPARE_USED_KEY + '_' + currentWeekKey();
    if(localStorage.getItem(key) === '1') return false;
    localStorage.setItem(key, '1');
    return true;
  }catch(e){ return true; }
}
// PDF / Yazdır — Başlangıç (ücretsiz) üyelikte de yok, sadece Kurucu/Standart'a özel.
const PREMIUM_GATED_SELECTOR = '#printBtn';
document.addEventListener('click', function(e){
  const gated = e.target.closest(PREMIUM_GATED_SELECTOR);
  if(gated && !isPremiumUser()){
    e.preventDefault();
    e.stopImmediatePropagation();
    if(isVisitor()){ openLoginModal(); showAuthTab('register'); }
    else { showPremiumModal(); }
  }
}, true);
const ICON_LOCK = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px; margin-right:4px;"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>';
function updatePremiumUI(){
  const premium = isPremiumUser();
  const tier = getMembershipTier();
  const lockTooltip = isFreeMember() ? 'ÜYELİĞİNİZİ YÜKSELTİN' : 'ÜYELERE ÖZEL';
  [
    ['printBtn', '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:5px;"><path d="M6 9V3h12v6"/><rect x="4" y="9" width="16" height="8" rx="1"/><path d="M6 17v4h12v-4"/></svg>Yazdır / PDF'],
  ].forEach(([id, plainLabel])=>{
    const el = document.getElementById(id);
    if(!el) return;
    const extra = el.querySelector('span') ? el.querySelector('span').outerHTML : '';
    el.innerHTML = (premium ? '' : ICON_LOCK) + plainLabel + (extra ? ' ' + extra : '');
    el.classList.toggle('is-locked', !premium);
    if(!premium) el.setAttribute('data-lock-tooltip', lockTooltip);
  });
  // Filtrele başındaki kilit ikonu SADECE ziyaretçiye gösterilir — herhangi
  // bir üyelikle (Keşif dahil) giriş yapıldığında tamamen kalkar.
  const filterToggleBtn = document.getElementById('filterToggleBtn');
  if(filterToggleBtn) filterToggleBtn.classList.remove('is-locked');
  updateCompareButtonsUI();
  const filterPanel = document.getElementById('filterPanel');
  const filterBanner = document.getElementById('filterUpsellBanner');
  const filterLockIcon = document.getElementById('filterLockIcon');
  if(filterPanel){
    // Filtreleme, üyelik seviyesine değil GİRİŞ YAPMIŞ olmaya bağlı — Başlangıç
    // (ücretsiz) üyeler de tam erişime sahip. Sadece ziyaretçiler kilitli.
    const visitor = isVisitor();
    filterPanel.classList.toggle('filter-locked', visitor);
    filterPanel.classList.remove('filter-passive');
    if(filterBanner) filterBanner.style.display = visitor ? '' : 'none';
    if(filterLockIcon) filterLockIcon.style.display = visitor ? '' : 'none';
  }
  const badge = document.getElementById('membershipBadge');
  if(badge){
    badge.classList.remove('membership-badge-founding', 'membership-badge-standard');
    if(tier === 'founding'){
      badge.style.display = '';
      badge.classList.add('membership-badge-founding');
      badge.innerHTML = `<span class="badge-icon">★</span><span class="badge-label">Kurucu Üye</span>`;
    } else if(tier === 'standard'){
      badge.style.display = '';
      badge.classList.add('membership-badge-standard');
      badge.textContent = 'Standart';
    } else {
      badge.style.display = 'none';
    }
  }
}
document.getElementById('closePremium').addEventListener('click', hidePremiumModal);
document.getElementById('becomeFoundingBtn').addEventListener('click', async ()=>{
  const { data: sessionData } = await sb.auth.getSession();
  if(!sessionData || !sessionData.session){ requireLoginThenClaim('founding'); return; }
  const result = await claimFoundingMembership();
  if(result.success){
    setMembershipCache('founding', result.founder_number || null);
    hidePremiumModal();
    showToast(`Tebrikler — Kurucu Üye #${result.founder_number} oldunuz.`);
  } else if(result.reason === 'full'){
    refreshFoundingSlotsUI();
    showToast('Kurucu Üye kontenjanı dolmuş — Standart ile devam edebilirsiniz.');
  } else {
    showToast('Üyelik işlemi tamamlanamadı, lütfen tekrar deneyin.');
  }
});
document.getElementById('becomeStandardBtn').addEventListener('click', async ()=>{
  const { data: sessionData } = await sb.auth.getSession();
  if(!sessionData || !sessionData.session){ requireLoginThenClaim('standard'); return; }
  const result = await claimStandardMembership();
  if(result.success){
    setMembershipCache('standard', null);
    hidePremiumModal();
    showToast('Pro üyeliğiniz aktifleşti.');
  } else {
    showToast('Üyelik işlemi tamamlanamadı, lütfen tekrar deneyin.');
  }
});

function openCountry(baseCountry){
  canOpenCountryFree(baseCountry.id); // ilk ülkeyi kilitler (yan etki); sayfayı açmayı engellemez
  currentBaseCountry = baseCountry;
  openCountryId = baseCountry.id;
  renderCountryPage(baseCountry);
  renderCountryChip(baseCountry);
  showView('country');
  pushHistoryState();
}
function renderCountryChip(baseCountry){
  document.getElementById('countryChipWrap').innerHTML =
    `<button class="country-chip active" id="countryChipBtn">${baseCountry.flag} ${baseCountry.name} <span class="chip-x" id="chipCloseBtn">✕</span></button>`;
  document.getElementById('countryChipBtn').addEventListener('click', (e)=>{
    if(e.target.id === 'chipCloseBtn') return;
    showView('country');
    pushHistoryState();
  });
  document.getElementById('chipCloseBtn').addEventListener('click', (e)=>{
    e.stopPropagation();
    closeCountry();
  });
}
function closeCountry(){
  openCountryId = null;
  currentBaseCountry = null;
  document.getElementById('countryChipWrap').innerHTML = '';
  showView('globe');
  pushHistoryState();
}
// Geriye dönük uyumluluk: kodun geri kalanı openDashboard(...) çağırıyor.
function openDashboard(baseCountry){ openCountry(baseCountry); }

document.getElementById('closeDash').addEventListener('click', ()=> closeCountry());
document.getElementById('brandLogo').addEventListener('click', ()=>{
  closeCountry();
  listSearchQ = '';
  searchInput.value = '';
});
document.getElementById('addCompareBtn').addEventListener('click', ()=>{
  if(currentBaseCountry) addToCompare(currentBaseCountry.id);
});
document.getElementById('printBtn').addEventListener('click', ()=> window.print());
const BUSINESS_MAP_CATEGORIES = [
  { group:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px; opacity:0.85;"><path d="M3 9l1-5h16l1 5"/><path d="M4 9v10h16V9"/><path d="M9 19v-6h6v6"/></svg>Retail', items:['Furniture Stores','Furniture Showrooms','Sofa Stores'] },
  { group:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px; opacity:0.85;"><path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-1 2-2 0-.6-.2-1-.5-1.4-.3-.4-.5-.8-.5-1.4 0-1 .8-1.7 1.8-1.7H17a4 4 0 0 0 4-4c0-4.4-4-7.5-9-7.5z"/><circle cx="7.5" cy="10.5" r="1.1" fill="currentColor" stroke="none"/><circle cx="11" cy="7.5" r="1.1" fill="currentColor" stroke="none"/><circle cx="15.5" cy="8.5" r="1.1" fill="currentColor" stroke="none"/></svg>Design', items:['Interior Designers','Architecture Firms','Design Studios'] },
  { group:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px; opacity:0.85;"><rect x="5" y="3" width="9" height="18" rx="1"/><path d="M14 8h5v13h-5M8 7h1M8 11h1M8 15h1"/></svg>Projects', items:['Property Developers','Construction Companies','Fit-out Companies'] },
  { group:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px; opacity:0.85;"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21v-6h6v6"/></svg>Hospitality', items:['Hotels','Resorts','Restaurants'] },
  { group:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px; opacity:0.85;"><rect x="5" y="3" width="9" height="18" rx="1"/><path d="M14 8h5v13h-5M8 7h1M8 11h1M8 15h1"/></svg>Office', items:['Office Furniture Dealers','Workspace Designers'] },
];
document.getElementById('mapsSearchBtn').addEventListener('click', ()=>{
  if(!currentBaseCountry) return;
  const c = currentBaseCountry;
  document.getElementById('mapsModalTitle').innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px; margin-right:7px; opacity:0.9;"><path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>İş Haritası — ${c.name}`;
  document.getElementById('mapsModalBody').innerHTML = `
    <div class="footnote" style="margin-bottom:16px;">${c.flag} ${c.name} sınırlarında aramak istediğin iş kategorilerini işaretle, ardından "Aramaları Oluştur"a bas — her biri için ayrı bir Google Haritalar bağlantısı üretilir.</div>
    <div class="bmap-grid">
      ${BUSINESS_MAP_CATEGORIES.map(g=>`
        <div class="card bmap-group">
          <div class="bmap-group-title">${g.group}</div>
          ${g.items.map(item=>`
            <label class="bmap-item">
              <input type="checkbox" class="bmap-check" value="${item}">
              ${item}
            </label>
          `).join('')}
        </div>
      `).join('')}
    </div>
    <button class="tray-btn tray-btn-primary" id="bmapGenerateBtn" style="width:100%; padding:12px; margin-top:14px;">Aramaları Oluştur →</button>
    <div id="bmapResults" style="margin-top:16px;"></div>
  `;
  document.getElementById('mapsModal').classList.add('open');
  document.getElementById('bmapGenerateBtn').addEventListener('click', ()=>{
    const checked = [...document.querySelectorAll('.bmap-check:checked')].map(cb=>cb.value);
    const resultsEl = document.getElementById('bmapResults');
    if(!checked.length){ resultsEl.innerHTML = `<div class="footnote" style="color:var(--red);">En az bir kategori seç.</div>`; return; }
    const enName = ENGLISH_NAME[c.id] || c.name;
    resultsEl.innerHTML = checked.map(item=>{
      const query = `${item} in ${enName}`;
      const url = `https://www.google.com/maps/search/${query.replace(/ /g,'+')}`;
      return `
      <a href="${url}" target="_blank" rel="noopener" class="card" style="display:block; margin-bottom:10px; text-decoration:none;">
        <div style="font-size:14.5px; color:var(--text-0); font-weight:600;">${c.flag} ${item} (${c.name})</div>
        <div class="footnote" style="margin-top:5px; word-break:break-all;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:5px; opacity:0.8;"><path d="M9 15l6-6"/><path d="M13 6l1-1a3.5 3.5 0 0 1 5 5l-1 1"/><path d="M11 18l-1 1a3.5 3.5 0 0 1-5-5l1-1"/></svg>${url}</div>
      </a>`;
    }).join('');
  });
});
document.getElementById('closeMaps').addEventListener('click', ()=>{
  document.getElementById('mapsModal').classList.remove('open');
});

document.getElementById('buyerListBtn').addEventListener('click', ()=>{
  if(!currentBaseCountry) return;
  if(isVisitor()){
    openLoginModal();
    showAuthTab('register');
    return;
  }
  const c = currentBaseCountry;
  const featureIcon = '<span class="buyer-db-feature-check"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>';
  document.getElementById('buyerListBody').innerHTML = `
    <div class="buyer-db-card">
      <div class="buyer-db-badge">POTANSİYEL ALICI VERİTABANI</div>
      <h3 class="buyer-db-title">Potansiyel Alıcı Veritabanı</h3>
      <p class="buyer-db-subtitle">Seçtiğiniz ülke ve GTİP koduna göre doğrulanmış ithalatçı, distribütör, toptancı ve perakendeci firmalara erişin.</p>
      <p class="buyer-db-desc">Her liste güncel ticari veriler kullanılarak hazırlanır ve ihracatçılar için zaman kazandırmayı amaçlar.</p>
      <div class="buyer-db-features">
        <div class="buyer-db-feature">${featureIcon}Firma adı</div>
        <div class="buyer-db-feature">${featureIcon}Web sitesi</div>
        <div class="buyer-db-feature">${featureIcon}Şehir / Ülke</div>
        <div class="buyer-db-feature">${featureIcon}Faaliyet alanı</div>
        <div class="buyer-db-feature">${featureIcon}İthalat profili</div>
        <div class="buyer-db-feature">${featureIcon}İletişim bilgileri (varsa)</div>
        <div class="buyer-db-feature">${featureIcon}Güncellenme tarihi</div>
      </div>
      <div class="buyer-db-price-card">
        <div class="buyer-db-price-label">Tek Ülke (${c.name}) + 2 GTİP Kodu</div>
        <div class="buyer-db-price-value">$29<span>USD</span></div>
        <div class="buyer-db-price-note">Hazır veri dosyası</div>
      </div>
      <button class="buyer-db-cta" id="buyerDbBuyBtn">Satın Al ve İndir</button>
      <div class="buyer-db-footnote">Ödeme tamamlandıktan sonra liste hesabınıza tanımlanır ve indirilebilir hale gelir.</div>
    </div>
  `;
  document.getElementById('buyerListModal').classList.add('open');
  document.getElementById('buyerDbBuyBtn').addEventListener('click', ()=>{
    showToast('Ödeme altyapısı yakında aktif olacak — çok yakında satın alabileceksiniz.');
  });
});
document.getElementById('closeBuyerList').addEventListener('click', ()=>{
  document.getElementById('buyerListModal').classList.remove('open');
});

function fillNotes(baseCountry){
  const body = document.getElementById('relatedNotesBody');
  if(!body) return;
  const user = getCurrentUser();
  if(!user){
    body.innerHTML = `<div class="footnote">Not eklemek için önce giriş yapmalısın. <button class="tray-btn" id="notesLoginBtn" style="margin-left:8px;">Giriş Yap</button></div>`;
    document.getElementById('notesLoginBtn').addEventListener('click', openLoginModal);
    return;
  }
  body.innerHTML = `
    <textarea id="noteInput" class="note-textarea" aria-label="Not ekle" placeholder="Örn: Bu pazarda X firmasıyla görüşüldü, teklif bekleniyor..."></textarea>
    <div style="display:flex; align-items:center; justify-content:space-between; margin-top:10px;">
      <span class="footnote" style="margin:0;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:4px; opacity:0.8;"><path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.3"/></svg>Bu notlar sadece bu tarayıcıda, ${user} kullanıcısına özel olarak saklanır.</span>
      <button class="tray-btn tray-btn-primary" id="saveNoteBtn">Kaydet</button>
    </div>
    <div id="notesList" style="margin-top:14px;"><div class="footnote">Notlar yükleniyor…</div></div>
  `;
  document.getElementById('saveNoteBtn').addEventListener('click', ()=> saveNote(baseCountry));
  loadNotes(baseCountry);
}

function notesKey(user, countryId){ return 'fa_notes_' + user + '_' + countryId; }
function loadNotes(baseCountry){
  const listEl = document.getElementById('notesList');
  if(!listEl) return;
  const user = getCurrentUser();
  if(!user) return;
  try {
    const entries = JSON.parse(localStorage.getItem(notesKey(user, baseCountry.id)) || '[]');
    if(!entries.length){ listEl.innerHTML = `<div class="footnote">Henüz not eklenmedi. İlk notu sen ekle.</div>`; return; }
    entries.sort((a,b)=> b.ts - a.ts);
    listEl.innerHTML = entries.map(n => `
      <div class="note-card">
        <div class="note-text">${(n.text||'').replace(/</g,'&lt;')}</div>
        <div class="note-meta">${new Date(n.ts).toLocaleString('tr-TR')}</div>
      </div>`).join('');
  } catch(e){
    listEl.innerHTML = `<div class="footnote">Notlar yüklenirken bir sorun oluştu.</div>`;
  }
}
function saveNote(baseCountry){
  const input = document.getElementById('noteInput');
  const text = input.value.trim();
  if(!text) return;
  const user = getCurrentUser();
  if(!user) return;
  try {
    const key = notesKey(user, baseCountry.id);
    const entries = JSON.parse(localStorage.getItem(key) || '[]');
    entries.push({ text, ts: Date.now() });
    localStorage.setItem(key, JSON.stringify(entries));
    input.value = '';
    loadNotes(baseCountry);
  } catch(e){ console.error('not kaydedilemedi', e); }
}


/* =========================================================
   HEDEF ÜLKELER (localStorage — kullanıcı adına bağlı, cihaza özel)
   ========================================================= */
// Supabase oturumu, senkron çağrılabilmesi için önbelleğe alınır (bkz. onAuthStateChange dinleyicisi).
let currentSupabaseSession = null;
function getCurrentUser(){ return currentSupabaseSession && currentSupabaseSession.user ? currentSupabaseSession.user.email : null; }
function getCurrentUserProfile(){
  if(!currentSupabaseSession || !currentSupabaseSession.user) return {};
  return currentSupabaseSession.user.user_metadata || {};
}
function getTargets(username){
  if(!username) return [];
  try { return JSON.parse(localStorage.getItem('fa_targets_' + username) || '[]'); }
  catch(e){ return []; }
}
function setTargets(username, arr){
  if(!username) return;
  localStorage.setItem('fa_targets_' + username, JSON.stringify(arr));
}
function isTarget(username, id){ return getTargets(username).includes(id); }
function toggleTarget(username, id){
  const list = getTargets(username);
  const idx = list.indexOf(id);
  if(idx >= 0) list.splice(idx, 1); else list.push(id);
  setTargets(username, list);
  return list.includes(id);
}

// İçerik kilidi — "önce değer göster, sonra üyelik iste" deneyimi. Free bir kullanıcı
// zaten seçtiği (kilitli) ülkeden farklı bir ülkeye baktığında rapor bulanıklaştırılır
// ve ortasında üyelik çağrısı belirir. Ücretsiz kullanıcı giriş yapmasa bile ilk
// seçtiği ülkenin raporunu tam olarak görebilir.
function applyContentGate(){
  const wrap = document.getElementById('dashGatedWrap');
  if(!wrap) return;
  const existingOverlay = document.getElementById('dashGateOverlay');
  if(existingOverlay) existingOverlay.remove();
  wrap.classList.remove('dash-blurred');
  if(!currentBaseCountry) return;
  if(isPremiumUser()) return; // Kurucu Üye / Pro için kilit yok
  if(canOpenCountryFree(currentBaseCountry.id)) return; // ziyaretçi değil ve aylık kota dolmadı

  const visitor = isVisitor();
  wrap.classList.add('dash-blurred');
  const overlay = document.createElement('div');
  overlay.id = 'dashGateOverlay';
  overlay.className = 'dash-gate-overlay';
  const featureIcon = '<span class="dash-gate-feature-check"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>';
  const title = visitor ? 'Pazar Analizinin Devamını Görün' : 'Bu Haftaki Ücretsiz Rapor Hakkınızı Kullandınız';
  const sub = visitor
    ? 'Mobilya pazarı hakkında ayrıntılı ithalat verileri, AI destekli analizler, rekabet değerlendirmeleri, gümrük vergileri, lojistik maliyetleri ve ihracat fırsatlarına erişmek için ücretsiz hesap oluşturun.'
    : `Başlangıç üyeliğinde haftada ${FREE_WEEKLY_REPORT_LIMIT} tam ülke raporu hakkınız var, bu haftaki hakkınızı kullandınız. Sınırsız erişim için üyeliğinizi yükseltin.`;
  const btnLabel = visitor ? 'Ücretsiz Kayıt Ol' : 'Üyeliğimi Yükselt';
  const footnote = visitor ? 'İlk 100 kullanıcıya özel Kurucu Üye fırsatını kaçırmayın.' : 'Kurucu/Standart üyelikte sınırsız ülke raporu, karşılaştırma ve daha fazlası.';
  overlay.innerHTML = `
    <div class="dash-gate-card">
      <div class="dash-gate-icon-badge"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber-bright)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.4-2"/></svg></div>
      <div class="dash-gate-title">${title}</div>
      <div class="dash-gate-sub">${sub}</div>
      <div class="dash-gate-features">
        <div class="dash-gate-feature">${featureIcon}Ülke Pazar Raporları</div>
        <div class="dash-gate-feature">${featureIcon}Küresel Raporlar</div>
        <div class="dash-gate-feature">${featureIcon}AI Destekli Analizler</div>
        <div class="dash-gate-feature">${featureIcon}Ülke Karşılaştırmaları</div>
        <div class="dash-gate-feature">${featureIcon}PDF Raporları</div>
        <div class="dash-gate-feature">${featureIcon}Sürekli Güncellenen Ticaret Verileri</div>
      </div>
      <div class="dash-gate-trust">177 ülke · Yapay zekâ destekli analizler · Sürekli güncellenen veriler</div>
      <button class="dash-gate-cta" id="dashGateBtn">${btnLabel}</button>
      <div class="dash-gate-footnote">${footnote}</div>
    </div>
  `;
  wrap.prepend(overlay);
  document.getElementById('dashGateBtn').addEventListener('click', ()=>{
    if(visitor){ openLoginModal(); showAuthTab('register'); }
    else { showPremiumModal(); }
  });
}

function updateFavButton(){
  const btn = document.getElementById('favBtn');
  if(!currentBaseCountry) return;
  const user = getCurrentUser();
  btn.textContent = (user && isTarget(user, currentBaseCountry.id)) ? '★' : '☆';
}
document.getElementById('favBtn').addEventListener('click', ()=>{
  if(!currentBaseCountry) return;
  const user = getCurrentUser();
  if(!user){ openLoginModal(); return; }
  const btn = document.getElementById('favBtn');
  const nowTarget = toggleTarget(user, currentBaseCountry.id);
  btn.textContent = nowTarget ? '★' : '☆';
  refreshMyTargetsBadge();
});

/* =========================================================
   KARŞILAŞTIRMA
   ========================================================= */
let compareIds = [];
function addToCompare(id){
  if(compareIds.includes(id)) return;
  const maxCompare = isPremiumUser() ? 4 : 2;
  if(compareIds.length >= maxCompare){ alert(`En fazla ${maxCompare} pazar karşılaştırabilirsin.`); return; }
  compareIds.push(id);
  renderCompareTray();
}
function removeFromCompare(id){
  compareIds = compareIds.filter(x=>x!==id);
  renderCompareTray();
}
function updateCompareButtonsUI(){
  const n = compareIds.length;
  const premium = isPremiumUser();
  const lockTooltip = isFreeMember() ? 'ÜYELİĞİNİZİ YÜKSELTİN' : 'ÜYELERE ÖZEL';
  const topBtn = document.getElementById('topCompareBtn');
  if(topBtn){
    topBtn.innerHTML = (premium ? '' : ICON_LOCK) + `Karşılaştır (${n})`;
    topBtn.disabled = n < 2;
    topBtn.classList.toggle('is-locked', !premium);
    if(!premium) topBtn.setAttribute('data-lock-tooltip', lockTooltip);
  }
  const viewBtn = document.getElementById('compareViewBtn');
  if(viewBtn){
    viewBtn.innerHTML = (premium ? '' : ICON_LOCK) + 'Karşılaştır →';
    viewBtn.disabled = n < 2;
    viewBtn.classList.toggle('is-locked', !premium);
    if(!premium) viewBtn.setAttribute('data-lock-tooltip', lockTooltip);
  }
}
function renderCompareTray(){
  const tray = document.getElementById('compareTray');
  const chips = document.getElementById('compareTrayChips');
  updateCompareButtonsUI();
  if(compareIds.length < 2){ tray.classList.remove('show'); return; }
  tray.classList.add('show');
  chips.innerHTML = compareIds.map(id=>{
    const c = COUNTRIES.find(x=>x.id===id);
    return `<span class="compare-chip">${c.flag} ${c.name} <b data-remove="${id}">✕</b></span>`;
  }).join('');
  chips.querySelectorAll('[data-remove]').forEach(el=>{
    el.addEventListener('click', ()=> removeFromCompare(el.getAttribute('data-remove')));
  });
}
document.getElementById('compareClearBtn').addEventListener('click', ()=>{ compareIds=[]; renderCompareTray(); });
function showCompareLockedMessage(){
  const visitor = isVisitor();
  const title = visitor ? 'Karşılaştırma Üyelere Özeldir' : 'Bu Haftaki Karşılaştırma Hakkınızı Kullandınız';
  const sub = visitor
    ? 'Birden fazla ülkenin Pazar Genel Bakışı, Ticaret Ortamı, Rekabet ve Lojistik verilerini karşılaştırmak için hemen giriş yapın.'
    : 'Başlangıç üyeliğinde haftada bir kez karşılaştırma hakkınız var, bu haftaki hakkınızı kullandınız. Sınırsız karşılaştırma için üyeliğinizi yükseltin.';
  const btnLabel = visitor ? 'Hemen Giriş Yap' : 'Üyeliğimi Yükselt';
  document.getElementById('compareBody').innerHTML = `
    <div style="text-align:center; padding:70px 24px; max-width:420px; margin:0 auto;">
      <div class="dash-gate-icon-badge" style="margin:0 auto 22px;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber-bright)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.4-2"/></svg></div>
      <div class="dash-gate-title" style="font-size:21px; margin-bottom:12px;">${title}</div>
      <div class="dash-gate-sub" style="font-size:13.5px; margin-bottom:26px;">${sub}</div>
      <button class="dash-gate-cta" id="compareLockedLoginBtn">${btnLabel}</button>
    </div>
  `;
  document.getElementById('compareModal').classList.add('open');
  document.getElementById('compareLockedLoginBtn').addEventListener('click', ()=>{
    document.getElementById('compareModal').classList.remove('open');
    if(visitor){ openLoginModal(); showAuthTab('register'); }
    else { showPremiumModal(); }
  });
}
document.getElementById('compareViewBtn').addEventListener('click', ()=>{
  if(compareIds.length < 2) return;
  if(!canCompareFree()){ showCompareLockedMessage(); return; }
  renderCompareModal();
  document.getElementById('compareModal').classList.add('open');
});
document.getElementById('topCompareBtn').addEventListener('click', ()=>{
  if(compareIds.length < 2) return;
  if(!canCompareFree()){ showCompareLockedMessage(); return; }
  renderCompareModal();
  document.getElementById('compareModal').classList.add('open');
});
document.getElementById('closeCompare').addEventListener('click', ()=>{
  document.getElementById('compareModal').classList.remove('open');
});

/* =========================================================
   GİRİŞ (kullanıcı adı — localStorage) & HEDEF ÜLKELERİM
   ========================================================= */
function openLoginModal(){ document.getElementById('loginModal').classList.add('open'); }
function updateLoginUI(){
  const user = getCurrentUser();
  const loginBtn = document.getElementById('loginBtn');
  const targetsBtn = document.getElementById('myTargetsBtn');
  const gatedBtns = ['newsBtn','fairsBtn','travelPlanBtn','reportIssueBtn'].map(id=>document.getElementById(id));
  const eyebrowEl = document.getElementById('heroEyebrow');
  const titleEl = document.getElementById('heroTitle');
  const subEl = document.getElementById('heroSub');
  const hintEl = document.getElementById('heroHint');
  if(user){
    const profile = getCurrentUserProfile();
    let displayName = profile.full_name || user;
    loginBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:5px;"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>' + displayName;
    targetsBtn.style.display = '';
    gatedBtns.forEach(b=> b.style.display = '');
    eyebrowEl.style.display = 'none';
    titleEl.innerHTML = `Hoşgeldin, <em>${displayName}</em>.`;
    subEl.textContent = 'Bugün hangi ülkeyi analiz etmek istersin? Güncel ticaret verileriyle yeni ihracat fırsatlarını keşfet.';
    hintEl.textContent = 'KÜREYİ ÇEVİR · DETAY İÇİN TIKLA · İHRACATA BAŞLA';
  } else {
    loginBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:5px;"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>Giriş Yap';
    targetsBtn.style.display = 'none';
    gatedBtns.forEach(b=> b.style.display = 'none');
    eyebrowEl.style.display = '';
    eyebrowEl.textContent = 'INTERACTIVE MARKET MAP';
    titleEl.innerHTML = 'Bir sonraki ihracat pazarınızı <em>tek bakışta</em> keşfedin.';
    subEl.textContent = 'Mobilya ithalat verileri, rakip analizleri, gümrük tarifeleri, lojistik maliyetleri ve pazar büyüklüklerini tek bir küre üzerinde birleştirdik. Bir ülkenin üzerine gelin ve o pazarın potansiyelini anında görün.';
    hintEl.textContent = 'KÜREYİ ÇEVİR · DETAY İÇİN TIKLA · İHRACATA BAŞLA';
  }
  refreshMyTargetsBadge();
}
function refreshMyTargetsBadge(){
  const user = getCurrentUser();
  const count = user ? getTargets(user).length : 0;
  document.getElementById('myTargetsCount').textContent = count ? `(${count})` : '';
}
document.getElementById('loginBtn').addEventListener('click', ()=>{
  if(getCurrentUser()){
    openProfileModal();
  } else {
    openLoginModal();
  }
});
function openProfileModal(){
  const user = getCurrentUser();
  if(!user) return;
  const profile = getCurrentUserProfile();
  const upgradeButtonHtml = isFreeMember()
    ? `<button class="tray-btn tray-btn-primary" id="profileUpgradeBtn" style="width:100%; padding:12px; margin-bottom:10px;">Üyeliği Yükselt</button>`
    : '';
  document.getElementById('profileModalBody').innerHTML = `
    <div class="card" style="margin-bottom:18px;">
      ${profile.full_name ? `<div class="card-label">İsim Soyisim</div><div class="card-value" style="font-size:16px; margin-bottom:14px;">${profile.full_name}</div>` : ''}
      <div class="card-label">E-posta</div><div class="card-value" style="font-size:16px; margin-bottom:14px;">${user}</div>
      ${profile.company ? `<div class="card-label">Şirket</div><div class="card-value" style="font-size:16px; margin-bottom:14px;">${profile.company}</div>` : ''}
      ${profile.phone ? `<div class="card-label">Telefon</div><div class="card-value" style="font-size:16px;">${profile.phone}</div>` : ''}
    </div>
    ${upgradeButtonHtml}
    <button class="tray-btn" id="profileLogoutBtn" style="width:100%; padding:12px; color:var(--red); border-color:var(--red);">Çıkış Yap</button>
  `;
  document.getElementById('profileModal').classList.add('open');
  const upgradeBtn = document.getElementById('profileUpgradeBtn');
  if(upgradeBtn) upgradeBtn.addEventListener('click', ()=>{
    document.getElementById('profileModal').classList.remove('open');
    showPremiumModal();
  });
  document.getElementById('profileLogoutBtn').addEventListener('click', async ()=>{
    await sb.auth.signOut();
    try{ localStorage.removeItem(MEMBERSHIP_TIER_KEY); localStorage.removeItem(FOUNDER_NUMBER_KEY); }catch(e){}
    document.getElementById('profileModal').classList.remove('open');
    updateLoginUI();
    updatePremiumUI();
    if(dashboard.classList.contains('open')){ updateFavButton(); applyContentGate(); }
  });
}
document.getElementById('closeProfile').addEventListener('click', ()=>{
  document.getElementById('profileModal').classList.remove('open');
});
document.getElementById('closeLogin').addEventListener('click', ()=>{
  document.getElementById('loginModal').classList.remove('open');
});
// --- Sekme geçişi: Giriş / Kayıt ---
// Supabase hatasından her koşulda okunabilir bir mesaj çıkarır — asla "{}" ya da boş göstermez.
function describeAuthError(error){
  const msg = (error && (error.message || error.error_description || error.msg)) || '';
  if(!msg) return 'Beklenmeyen bir hata oluştu (kod: ' + (error && error.status || '?') + '). Lütfen tekrar dene, sorun devam ederse bize bildir.';
  if(msg.includes('already registered') || msg.includes('already exists') || msg.includes('User already registered')){
    return 'Bu e-posta zaten kayıtlı. Giriş Yap sekmesini kullan.';
  }
  if(msg.toLowerCase().includes('invalid api key') || msg.toLowerCase().includes('invalid apikey')){
    return 'Sunucu bağlantı ayarında bir sorun var (geçersiz API anahtarı). Bu bizim tarafımızdaki bir yapılandırma hatası, size ulaşana kadar bekleyin.';
  }
  return msg;
}
function showAuthTab(tab){
  const isLogin = tab === 'login';
  document.getElementById('authTabLogin').classList.toggle('active', isLogin);
  document.getElementById('authTabRegister').classList.toggle('active', !isLogin);
  document.getElementById('loginFormWrap').style.display = isLogin ? 'block' : 'none';
  document.getElementById('registerFormWrap').style.display = isLogin ? 'none' : 'block';
  document.getElementById('otpFormWrap').style.display = 'none';
  document.getElementById('authHeaderText').style.display = isLogin ? 'none' : 'block';
  document.getElementById('registerStep1').style.display = 'block';
  document.getElementById('registerStep2').style.display = 'none';
  document.getElementById('authModalInner').style.maxWidth = isLogin ? '460px' : '1040px';
  const authIcon = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px; margin-right:7px; opacity:0.9;"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>';
  document.getElementById('authModalTitle').innerHTML = authIcon + (isLogin ? 'Giriş Yap' : 'Kayıt Ol');
}
document.getElementById('authTabLogin').addEventListener('click', ()=> showAuthTab('login'));
document.getElementById('authTabRegister').addEventListener('click', ()=> showAuthTab('register'));

// --- Giriş (mevcut üye) ---
document.getElementById('loginSubmitBtn').addEventListener('click', async ()=>{
  const email = document.getElementById('loginEmailInput').value.trim();
  const password = document.getElementById('loginPasswordInput').value;
  const errEl = document.getElementById('loginError');
  errEl.style.display = 'none';
  if(!email || !password){
    errEl.textContent = 'E-posta ve şifre gerekli.'; errEl.style.display = 'block'; return;
  }
  const btn = document.getElementById('loginSubmitBtn');
  btn.disabled = true; btn.textContent = 'Giriş yapılıyor…';
  let result;
  try {
    result = await sb.auth.signInWithPassword({ email, password });
  } catch(exception){
    console.error('Supabase signIn exception:', exception);
    btn.disabled = false; btn.textContent = 'Giriş Yap';
    errEl.textContent = 'Sunucuya bağlanılamadı (ağ hatası). Teknik detay: ' + (exception && exception.message ? exception.message : String(exception));
    errEl.style.display = 'block';
    return;
  }
  const { data, error } = result;
  btn.disabled = false; btn.textContent = 'Giriş Yap';
  if(error){
    console.error('Supabase signIn error:', error);
    const msg = (error.message || '');
    errEl.textContent = msg.toLowerCase().includes('invalid') ? 'E-posta veya şifre hatalı.' : describeAuthError(error);
    errEl.style.display = 'block';
    return;
  }
  currentSupabaseSession = data.session;
  document.getElementById('loginEmailInput').value = '';
  document.getElementById('loginPasswordInput').value = '';
  document.getElementById('loginModal').classList.remove('open');
  updateLoginUI();
  if(dashboard.classList.contains('open')){ updateFavButton(); applyContentGate(); if(currentBaseCountry) fillNotes(currentBaseCountry); }
});

// --- Kayıt (yeni üye) — Supabase, "Confirm signup" e-posta şablonu üzerinden onay kodu gönderir ---
let pendingRegisterEmail = '';
let selectedRegisterPlan = 'founding';
document.getElementById('registerPlanFree').addEventListener('click', ()=>{
  selectedRegisterPlan = 'free';
  document.getElementById('registerPlanFree').classList.add('active');
  document.getElementById('registerPlanFounding').classList.remove('active');
  document.getElementById('registerPlanStandard').classList.remove('active');
  document.getElementById('registerSubmitBtn').textContent = 'Ücretsiz Başla';
});
document.getElementById('registerPlanFounding').addEventListener('click', ()=>{
  selectedRegisterPlan = 'founding';
  document.getElementById('registerPlanFounding').classList.add('active');
  document.getElementById('registerPlanFree').classList.remove('active');
  document.getElementById('registerPlanStandard').classList.remove('active');
  document.getElementById('registerSubmitBtn').textContent = 'Kurucu Üye Ol';
});
document.getElementById('registerPlanStandard').addEventListener('click', ()=>{
  selectedRegisterPlan = 'standard';
  document.getElementById('registerPlanStandard').classList.add('active');
  document.getElementById('registerPlanFree').classList.remove('active');
  document.getElementById('registerPlanFounding').classList.remove('active');
  document.getElementById('registerSubmitBtn').textContent = 'Standart Üye Ol';
});
// Kayıt akışı iki adıma bölündü: 1) paket seçimi, 2) kişisel bilgiler.
// "Devam Et" ile ikinci adıma geçilir; seçilen paket üstte küçük bir
// etiket olarak gösterilir, "Geri" ile paket seçimine dönülebilir.
function planDisplayName(){
  const active = document.querySelector('.plan-card.active');
  return active ? active.querySelector('.plan-name').textContent : 'Kurucu Üye';
}
document.getElementById('registerContinueBtn').addEventListener('click', ()=>{
  document.getElementById('registerStep1').style.display = 'none';
  document.getElementById('registerStep2').style.display = 'block';
  document.getElementById('registerStep2PlanLabel').innerHTML =
    `Seçilen paket: <b>${planDisplayName()}</b>`;
  document.getElementById('authModalInner').style.maxWidth = '460px';
});
document.getElementById('registerBackBtn').addEventListener('click', ()=>{
  document.getElementById('registerStep2').style.display = 'none';
  document.getElementById('registerStep1').style.display = 'block';
  document.getElementById('authModalInner').style.maxWidth = '1040px';
});
document.getElementById('registerSubmitBtn').addEventListener('click', async ()=>{
  const fullName = document.getElementById('fullNameInput').value.trim();
  const email = document.getElementById('emailInput').value.trim();
  const password = document.getElementById('passwordInput').value;
  const company = document.getElementById('companyInput').value.trim();
  const phone = document.getElementById('phoneInput').value.trim();
  const errEl = document.getElementById('registerError');
  errEl.style.display = 'none';
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if(!fullName || !emailOk || password.length < 6){
    errEl.textContent = !fullName ? 'İsim soyisim gerekli.' : !emailOk ? 'Geçerli bir e-posta adresi gir.' : 'Şifre en az 6 karakter olmalı.';
    errEl.style.display = 'block';
    return;
  }
  const btn = document.getElementById('registerSubmitBtn');
  btn.disabled = true; btn.textContent = 'Kayıt oluşturuluyor…';
  // "Keşif Üyeliği" (free) için hiçbir üyelik talebi gönderilmez — zaten
  // giriş yapan/yapmayan herkesin varsayılan durumu 'free' tier'dır.
  pendingMembershipClaim = (selectedRegisterPlan === 'free') ? null : selectedRegisterPlan;
  let result;
  try {
    result = await sb.auth.signUp({
      email, password,
      options: { data: { full_name: fullName, company: company || null, phone: phone || null } }
    });
  } catch(exception){
    console.error('Supabase signUp exception:', exception);
    btn.disabled = false; btn.textContent = 'Kayıt Ol';
    errEl.textContent = 'Sunucuya bağlanılamadı (ağ hatası). İnternet bağlantını kontrol edip tekrar dene. Teknik detay: ' + (exception && exception.message ? exception.message : String(exception));
    errEl.style.display = 'block';
    return;
  }
  const { data, error } = result;
  btn.disabled = false; btn.textContent = 'Kayıt Ol';
  if(error){
    console.error('Supabase signUp error:', error);
    errEl.textContent = describeAuthError(error);
    errEl.style.display = 'block';
    return;
  }
  // Supabase bazı ayarlarda (örn. "Confirm email" kapalıysa) oturum ile birlikte anında döner —
  // bu durumda onay kodu beklemeye gerek yok, doğrudan giriş yapılmış olur.
  if(data && data.session){
    currentSupabaseSession = data.session;
    ['fullNameInput','emailInput','passwordInput','companyInput','phoneInput'].forEach(id=> document.getElementById(id).value = '');
    document.getElementById('loginModal').classList.remove('open');
    showAuthTab('login');
    updateLoginUI();
    await processPendingClaim();
    if(dashboard.classList.contains('open')){ updateFavButton(); applyContentGate(); if(currentBaseCountry) fillNotes(currentBaseCountry); }
    return;
  }
  pendingRegisterEmail = email;
  document.getElementById('loginFormWrap').style.display = 'none';
  document.getElementById('registerFormWrap').style.display = 'none';
  document.getElementById('otpFormWrap').style.display = 'block';
  document.getElementById('authModalTitle').innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px; opacity:0.9;"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>E-postanı Onayla';
  document.getElementById('otpSentNote').textContent = `${email} adresine bir onay kodu gönderdik. Gelen kutunu (ve spam klasörünü) kontrol et.`;
});

// --- OTP onay kodu doğrulama ---
document.getElementById('otpSubmitBtn').addEventListener('click', async ()=>{
  const token = document.getElementById('otpInput').value.trim();
  const errEl = document.getElementById('otpError');
  errEl.style.display = 'none';
  if(!/^\d{4,8}$/.test(token)){
    errEl.textContent = 'Geçerli bir onay kodu gir.'; errEl.style.display = 'block'; return;
  }
  const btn = document.getElementById('otpSubmitBtn');
  btn.disabled = true; btn.textContent = 'Onaylanıyor…';
  let result;
  try {
    result = await sb.auth.verifyOtp({ email: pendingRegisterEmail, token, type: 'signup' });
  } catch(exception){
    console.error('Supabase verifyOtp exception:', exception);
    btn.disabled = false; btn.textContent = 'Onayla ve Giriş Yap';
    errEl.textContent = 'Sunucuya bağlanılamadı (ağ hatası). Teknik detay: ' + (exception && exception.message ? exception.message : String(exception));
    errEl.style.display = 'block';
    return;
  }
  const { data, error } = result;
  btn.disabled = false; btn.textContent = 'Onayla ve Giriş Yap';
  if(error){
    console.error('Supabase verifyOtp error:', error);
    errEl.textContent = 'Kod hatalı veya süresi dolmuş. Tekrar deneyebilir ya da yeni kod isteyebilirsin. (' + describeAuthError(error) + ')';
    errEl.style.display = 'block';
    return;
  }
  currentSupabaseSession = data.session;
  ['fullNameInput','emailInput','passwordInput','companyInput','phoneInput','otpInput'].forEach(id=> document.getElementById(id).value = '');
  document.getElementById('loginModal').classList.remove('open');
  showAuthTab('login');
  updateLoginUI();
  await processPendingClaim();
  if(dashboard.classList.contains('open')){ updateFavButton(); applyContentGate(); if(currentBaseCountry) fillNotes(currentBaseCountry); }
});
document.getElementById('otpResendBtn').addEventListener('click', async ()=>{
  const btn = document.getElementById('otpResendBtn');
  btn.disabled = true; btn.textContent = 'Gönderiliyor…';
  await sb.auth.resend({ type: 'signup', email: pendingRegisterEmail });
  btn.disabled = false; btn.textContent = 'Kodu Tekrar Gönder';
  document.getElementById('otpSentNote').textContent = `Yeni bir kod ${pendingRegisterEmail} adresine gönderildi.`;
});

/* =========================================================
   ENTER İLE FORM GÖNDERİMİ (Giriş / Kayıt / Onay Kodu)
   Sayfada <form> etiketi kullanılmıyor; bu yüzden ilgili
   inputlarda Enter'a basılınca karşılık gelen gönder butonuna
   tıklanmış gibi davranılır.
   ========================================================= */
function wireEnterToSubmit(inputIds, submitBtnId){
  inputIds.forEach(id=>{
    const el = document.getElementById(id);
    if(!el) return;
    el.addEventListener('keydown', (e)=>{
      if(e.key !== 'Enter') return;
      e.preventDefault();
      const btn = document.getElementById(submitBtnId);
      if(btn && !btn.disabled) btn.click();
    });
  });
}
wireEnterToSubmit(['loginEmailInput','loginPasswordInput'], 'loginSubmitBtn');
wireEnterToSubmit(['fullNameInput','emailInput','passwordInput','companyInput','phoneInput'], 'registerSubmitBtn');
wireEnterToSubmit(['otpInput'], 'otpSubmitBtn');

document.getElementById('myTargetsBtn').addEventListener('click', ()=>{
  renderTargetsPanel();
  document.getElementById('targetsModal').classList.add('open');
  pushHistoryState();
});
document.getElementById('closeTargets').addEventListener('click', ()=>{
  document.getElementById('targetsModal').classList.remove('open');
  pushHistoryState();
});

function requestReportMailto(country, kind){
  const user = getCurrentUser() || 'ziyaretçi';
  const subject = kind === 'onetime'
    ? `Pazar Analizi Talebi — ${country.name}`
    : `Ekonomi Bülteni Talebi — ${country.name}`;
  const body = kind === 'onetime'
    ? `Merhaba,\n\n${country.name} için detaylı bir pazar analizi raporu talep ediyorum.\n\nKullanıcı: ${user}\nÜlke: ${country.name}\n\nTeşekkürler.`
    : `Merhaba,\n\n${country.name} için ekonomi bültenine (haftalık/aylık ekonomik gelişme özeti) abone olmak istiyorum. Lütfen abonelik seçenekleri ve ücretlendirme hakkında bilgi verin.\n\nKullanıcı: ${user}\nÜlke: ${country.name}\n\nTeşekkürler.`;
  window.location.href = `mailto:info@furnitureatlas.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function renderTargetsPanel(){
  const body = document.getElementById('targetsBody');
  const user = getCurrentUser();
  if(!user){
    body.innerHTML = `<div class="footnote">Hedef ülke eklemek için önce giriş yapmalısın.</div>`;
    return;
  }
  const ids = getTargets(user);
  if(!ids.length){
    body.innerHTML = `<div class="footnote">Henüz hedef ülke eklemedin. Bir ülke sayfasında ☆ ikonuna tıklayarak hedeflerine ekleyebilirsin.</div>`;
    return;
  }
  body.innerHTML = `
    <div class="footnote" style="margin-bottom:16px;">⚠ Rapor/abonelik talepleri şu an e-posta taslağı oluşturur — ödeme ve otomatik gönderim altyapısı henüz bağlı değil.</div>
    ${ids.map(id=>{
      const c = COUNTRIES.find(x=>x.id===id);
      if(!c) return '';
      const cd = withCategory(c);
      return `
      <div class="card" style="margin-bottom:14px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:14px;">
        <div style="display:flex; align-items:center; gap:12px; cursor:pointer;" data-open="${c.id}">
          <span style="font-size:26px;">${c.flag}</span>
          <div><div style="font-size:15px; color:var(--text-0);">${c.name}</div><div class="footnote" style="margin:2px 0 0;">Fırsat Skoru ${cd.scores.overall}/100</div></div>
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button class="tray-btn" data-report="${c.id}"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:5px; opacity:0.85;"><path d="M6 3h9l4 4v14H6z"/><path d="M15 3v4h4"/></svg>Pazar Analizi</button>
          <button class="tray-btn" data-subscribe="${c.id}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:6px; opacity:0.9;"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>Ekonomi Bülteni</button>
          <button class="tray-btn" data-remove="${c.id}" style="color:var(--red);">Kaldır</button>
        </div>
      </div>`;
    }).join('')}
  `;
  body.querySelectorAll('[data-open]').forEach(el=>{
    el.addEventListener('click', ()=>{
      const c = COUNTRIES.find(x=>x.id===el.getAttribute('data-open'));
      document.getElementById('targetsModal').classList.remove('open');
      if(c) openCountry(c);
    });
  });
  body.querySelectorAll('[data-report]').forEach(el=>{
    el.addEventListener('click', ()=> requestReportMailto(COUNTRIES.find(x=>x.id===el.getAttribute('data-report')), 'onetime'));
  });
  body.querySelectorAll('[data-subscribe]').forEach(el=>{
    el.addEventListener('click', ()=> requestReportMailto(COUNTRIES.find(x=>x.id===el.getAttribute('data-subscribe')), 'subscribe'));
  });
  body.querySelectorAll('[data-remove]').forEach(el=>{
    el.addEventListener('click', ()=>{
      toggleTarget(user, el.getAttribute('data-remove'));
      renderTargetsPanel();
      refreshMyTargetsBadge();
      if(dashboard.classList.contains('open')) updateFavButton();
    });
  });
}
updateLoginUI();

// Mobilde üst buton şeridinde (Haberler/Fuarlar/vs.) daha fazla buton olduğunu fark ettirmek için,
// sayfa yüklendikten kısa bir süre sonra şeridi hafifçe sola kaydırıp geri getiren bir ipucu animasyonu.
(function hintHeaderActionsScroll(){
  const el = document.querySelector('.header-actions');
  if(!el) return;
  function tryHint(){
    if(window.innerWidth > 640) return; // sadece mobilde
    if(el.scrollWidth <= el.clientWidth + 4) return; // zaten kaydıracak bir şey yoksa atla
    const peek = Math.min(90, el.scrollWidth - el.clientWidth);
    el.scrollTo({ left: peek, behavior: 'smooth' });
    setTimeout(()=> el.scrollTo({ left: 0, behavior: 'smooth' }), 900);
  }
  setTimeout(tryHint, 1400);
})();

// Supabase oturumunu sayfa yüklendiğinde geri yükle, ve her değişiklikte senkron önbelleği güncelle.
sb.auth.getSession().then(async ({ data }) => {
  currentSupabaseSession = data.session;
  updateLoginUI();
  if(data.session) await syncMembershipFromServer();
  updatePremiumUI(); // Keşif (ücretsiz) üyede memberships satırı yok — syncMembershipFromServer
                      // sessizce çıkar, bu yüzden burada her koşulda tekrar çağırmak gerekiyor.
  if(dashboard.classList.contains('open')){ updateFavButton(); applyContentGate(); }
});
sb.auth.onAuthStateChange((event, session) => {
  currentSupabaseSession = session;
  updateLoginUI();
  if(session && pendingMembershipClaim){
    processPendingClaim();
  } else if(session){
    syncMembershipFromServer();
  }
  updatePremiumUI();
});

/* =========================================================
   SEYAHAT PLANLA — UI bağlantıları
   ========================================================= */
const travelCountrySelect = document.getElementById('travelCountrySelect');
travelCountrySelect.innerHTML = [...COUNTRIES]
  .sort((a,b)=> a.name.localeCompare(b.name,'tr'))
  .map(c=> `<option value="${c.id}">${c.name} ${c.flag}</option>`).join('');

function fmtDateInput(d){ return d.toISOString().slice(0,10); }
const MONTH_NAMES_TR = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
function renderNews(){
  const body = document.getElementById('newsBody');
  const sorted = [...SECTOR_NEWS].sort((a,b)=> new Date(b.date) - new Date(a.date));
  const latestDate = sorted[0].date;
  body.innerHTML = `
    <div class="footnote" style="margin-bottom:18px;">${dqBadge('real')} Bu haberler gerçek kaynaklardan derlenmiştir, ancak site statik olduğu için otomatik/canlı güncellenmez — elle periyodik olarak güncellenir. Son güncelleme: ${new Date(latestDate).toLocaleDateString('tr-TR')}.</div>
    ${sorted.map(n=>`
      <div class="card" style="margin-bottom:14px;">
        <div class="footnote" style="margin:0 0 6px;">${new Date(n.date).toLocaleDateString('tr-TR', {day:'numeric', month:'long', year:'numeric'})} · ${n.source}</div>
        <div style="font-size:16px; color:var(--text-0); font-weight:600; margin-bottom:6px;">${n.title}</div>
        <div style="font-size:14px; color:var(--text-1); line-height:1.6;">${n.body}</div>
      </div>
    `).join('')}
  `;
}

function renderFairs(searchQ){
  searchQ = normalizeTr((searchQ || '').trim());
  const body = document.getElementById('fairsBody');
  const currentMonth = new Date().getMonth() + 1;

  const fairCardHtml = f => `
    <div class="opp-card">
      <div class="opp-t">${f.name}${dqBadge(f.level)}</div>
      <div class="opp-d">${f.city} · ${f.type}${f.dateNote ? '<br>'+f.dateNote : ''}</div>
    </div>`;

  if(searchQ){
    const matches = FURNITURE_FAIRS.filter(f => normalizeTr(f.name).includes(searchQ) || normalizeTr(f.city).includes(searchQ) || normalizeTr(f.type).includes(searchQ));
    body.innerHTML = `
      <input type="text" id="fairsSearchInput" class="search-input" aria-label="Fuar ara" placeholder="Fuar adı, şehir veya kategori ara…" style="padding:11px 16px; margin-bottom:20px; width:100%;" value="${searchQ}">
      <div class="footnote" style="margin-bottom:14px;">${matches.length} sonuç bulundu.</div>
      <div class="opp-grid">${matches.map(fairCardHtml).join('') || '<div class="footnote">Eşleşen fuar bulunamadı.</div>'}</div>
    `;
    wireFairsSearch();
    return;
  }

  // Ay bazlı grupla — her ay için o ay içinde gerçekleşen fuarları topla.
  const byMonth = {};
  FURNITURE_FAIRS.forEach(f=>{
    f.months.forEach(m=>{
      if(!byMonth[m]) byMonth[m] = [];
      byMonth[m].push(f);
    });
  });
  const orderedMonths = [];
  for(let i=0;i<12;i++){
    const m = ((currentMonth - 1 + i) % 12) + 1;
    if(byMonth[m]) orderedMonths.push(m);
  }
  const priorityFairs = FURNITURE_FAIRS.filter(f=>f.priority);

  body.innerHTML = `
    <input type="text" id="fairsSearchInput" class="search-input" aria-label="Fuar ara" placeholder="Fuar adı, şehir veya kategori ara…" style="padding:11px 16px; margin-bottom:20px; width:100%;">
    <div class="footnote" style="margin-bottom:18px;">Aylara göre gruplanmış, bugünden başlayarak sıralanmıştır. ${dqBadge('real')} doğrulanmış tarih, ${dqBadge('estimated')} geçmiş yıllardaki yerleşik aya dayalı tahmindir.</div>

    <div class="cp-section-title" style="margin:0 0 12px;"><span class="num">⭐</span> Öne Çıkan Fuarlar</div>
    <div class="footnote" style="margin-bottom:14px;">Türk mobilya ihracatçıları için özellikle önemli, takip edilmesi gereken fuarlar.</div>
    <div class="opp-grid">${priorityFairs.map(fairCardHtml).join('')}</div>

    ${orderedMonths.map(m=>`
      <div class="cp-section-title" style="margin:26px 0 12px;"><span class="num">${String(m).padStart(2,'0')}</span> ${MONTH_NAMES_TR[m-1]}</div>
      <div class="opp-grid">
        ${byMonth[m].map(fairCardHtml).join('')}
      </div>
    `).join('')}
  `;
  wireFairsSearch();
}
function wireFairsSearch(){
  const input = document.getElementById('fairsSearchInput');
  if(!input) return;
  input.addEventListener('input', ()=>{
    const val = input.value;
    renderFairs(val);
    // arama kutusuna odağı ve imleci koru
    requestAnimationFrame(()=>{
      const newInput = document.getElementById('fairsSearchInput');
      if(newInput){ newInput.focus(); newInput.setSelectionRange(val.length, val.length); }
    });
  });
}
document.getElementById('fairsBtn').addEventListener('click', ()=>{
  renderFairs();
  document.getElementById('fairsModal').classList.add('open');
  pushHistoryState();
});
document.getElementById('closeFairs').addEventListener('click', ()=>{
  document.getElementById('fairsModal').classList.remove('open');
  pushHistoryState();
});
document.getElementById('reportIssueBtn').addEventListener('click', ()=>{
  document.getElementById('reportModal').classList.add('open');
});
document.getElementById('closeReport').addEventListener('click', ()=>{
  document.getElementById('reportModal').classList.remove('open');
  document.getElementById('reportThanksWrap').style.display = 'none';
  document.getElementById('reportFormWrap').style.display = 'block';
});
document.getElementById('reportSubmitBtn').addEventListener('click', async ()=>{
  const country = document.getElementById('reportCountryInput').value.trim();
  const detail = document.getElementById('reportDetailInput').value.trim();
  const email = document.getElementById('reportEmailInput').value.trim();
  if(!detail){ alert('Lütfen sorunu ve varsa kanıtını yazın.'); return; }
  const btn = document.getElementById('reportSubmitBtn');
  btn.disabled = true; btn.textContent = 'Gönderiliyor…';
  try {
    const res = await fetch('/.netlify/functions/report-issue', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ country, detail, email }),
    });
    if(!res.ok){
      const errData = await res.json().catch(()=>({}));
      throw new Error(errData.error || 'Gönderim başarısız.');
    }
  } catch(exception){
    console.error('report-issue gönderim hatası:', exception);
    // Otomatik gönderim başarısız olursa, e-posta programını açan yedek yönteme geç.
    const subject = 'Furniture Atlas — Hata Bildirimi' + (country ? ': ' + country : '');
    const body = `Ülke/Bölüm: ${country || 'belirtilmedi'}\n\nSorun ve kanıt:\n${detail}\n\nGeri dönüş e-postası: ${email || 'belirtilmedi'}`;
    window.location.href = `mailto:info@furnitureatlas.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  btn.disabled = false; btn.textContent = 'Bildir';
  document.getElementById('reportCountryInput').value = '';
  document.getElementById('reportDetailInput').value = '';
  document.getElementById('reportEmailInput').value = '';
  document.getElementById('reportFormWrap').style.display = 'none';
  document.getElementById('reportThanksWrap').style.display = 'block';
});
document.getElementById('reportThanksCloseBtn').addEventListener('click', ()=>{
  document.getElementById('reportModal').classList.remove('open');
  document.getElementById('reportThanksWrap').style.display = 'none';
  document.getElementById('reportFormWrap').style.display = 'block';
});

document.getElementById('newsBtn').addEventListener('click', ()=>{
  renderNews();
  document.getElementById('newsModal').classList.add('open');
  pushHistoryState();
});
document.getElementById('closeNews').addEventListener('click', ()=>{
  document.getElementById('newsModal').classList.remove('open');
  pushHistoryState();
});

document.getElementById('travelPlanBtn').addEventListener('click', ()=>{
  document.getElementById('travelModal').classList.add('open');
  document.getElementById('travelResults').innerHTML = '';
  const startInput = document.getElementById('travelStartInput');
  const endInput = document.getElementById('travelEndInput');
  if(!startInput.value){
    const start = new Date(); start.setDate(start.getDate() + 30);
    const end = new Date(start); end.setDate(end.getDate() + 5);
    startInput.value = fmtDateInput(start);
    endInput.value = fmtDateInput(end);
    startInput.min = fmtDateInput(new Date());
    endInput.min = fmtDateInput(start);
  }
  pushHistoryState();
});
document.getElementById('travelStartInput').addEventListener('change', (e)=>{
  const endInput = document.getElementById('travelEndInput');
  endInput.min = e.target.value;
  if(endInput.value < e.target.value) endInput.value = e.target.value;
});
document.getElementById('closeTravel').addEventListener('click', ()=>{
  document.getElementById('travelModal').classList.remove('open');
  pushHistoryState();
});
document.getElementById('travelSubmitBtn').addEventListener('click', ()=>{
  const id = travelCountrySelect.value;
  const startStr = document.getElementById('travelStartInput').value;
  const endStr = document.getElementById('travelEndInput').value;
  if(!startStr || !endStr) return;
  const startDate = new Date(startStr + 'T00:00:00');
  const endDate = new Date(endStr + 'T00:00:00');
  const days = Math.max(1, Math.round((endDate - startDate) / 86400000));
  const country = COUNTRIES.find(c=>c.id===id);
  if(country) renderTravelPlan(country, days, startDate, endDate);
});

// $186M, $1.1B, $21,900M gibi karışık birimli ($M/$B/$T) parasal alanları
// doğru karşılaştırma için milyon dolara ($M) normalize eder.
function numFromMoneyNormalized(str){
  const s = String(str);
  const m = s.match(/([\d,]+(?:\.\d+)?)\s*(K|M|B|T)?/i);
  if(!m) return null;
  const num = parseFloat(m[1].replace(/,/g,''));
  if(isNaN(num)) return null;
  const unit = (m[2] || 'M').toUpperCase();
  const mult = { K:0.001, M:1, B:1000, T:1000000 }[unit];
  return num * (mult === undefined ? 1 : mult);
}

// Rekabet bölümü için yardımcı fonksiyonlar — tedarikçi ülke listesinden türetilir.
function topSuppliersDisplay(c){
  if(!c.suppliers || !c.suppliers.length) return null;
  const top = c.suppliers.filter(s=>s.c!=='Diğer').slice(0,3);
  return top.length ? top.map(s=>`${s.c} %${s.v}`).join(' · ') : null;
}
function supplierShareDisplay(c, name){
  const s = c.suppliers && c.suppliers.find(x=>x.c===name);
  return s ? `%${s.v}` : null;
}
function supplierShareNum(c, name){
  const s = c.suppliers && c.suppliers.find(x=>x.c===name);
  return s ? s.v : null;
}
function turkeyRankDisplay(c){
  if(!c.suppliers) return null;
  const sorted = [...c.suppliers].filter(s=>s.c!=='Diğer').sort((a,b)=>b.v-a.v);
  const idx = sorted.findIndex(s=>s.c==='Türkiye');
  return idx === -1 ? null : `#${idx+1}`;
}
function turkeyRankNum(c){
  if(!c.suppliers) return null;
  const sorted = [...c.suppliers].filter(s=>s.c!=='Diğer').sort((a,b)=>b.v-a.v);
  const idx = sorted.findIndex(s=>s.c==='Türkiye');
  return idx === -1 ? null : idx+1;
}
function importRestrictionDisplay(c){
  const r = IMPORT_RESTRICTIONS[c.id];
  if(!r) return 'Bilinen özel kısıtlama yok';
  return r.level === 'severe' ? 'Var — ciddi kısıtlama' : 'Var — önemli kısıtlama';
}

// Karşılaştırma satırları kategorilere ayrılmıştır. Her satır get()/num() ile veri
// döndürmezse (null/undefined) o satır otomatik olarak tabloya eklenmez.
const COMPARE_SECTIONS = [
  { title:'Pazar Genel Bakışı', rows:[
    { label:'Mobilya İthalatı', get:c=>c.annualImports, num:c=>numFromMoneyNormalized(c.annualImports), better:'high' },
    { label:'İthalat Büyümesi', get:c=>c.importGrowth, num:c=>numFromPercent(c.importGrowth), better:'high' },
    { label:'Pazar Büyüklüğü', get:c=>c.marketSize, num:c=>numFromMoneyNormalized(c.marketSize), better:'high' },
    { label:'Nüfus', get:c=>c.population, num:c=>numFromMoney(c.population), better:'high' },
    { label:'Kişi Başı GSYİH', get:c=>c.gdpPerCapita, num:c=>numFromMoney(c.gdpPerCapita), better:'high' },
    { label:'Para Birimi', get:c=>c.currency, num:null, better:null },
  ]},
  { title:'Ticaret Ortamı', rows:[
    { label:'Gümrük Vergisi', get:c=>c.customsDuty, num:c=>numFromPercent(c.customsDuty), better:'low' },
    { label:'KDV', get:c=>c.vat, num:c=>numFromPercent(c.vat), better:'low' },
    { label:'Ticaret Anlaşması', get:c=>c.fta, num:null, better:null },
    { label:'İş Yapma Kolaylığı (Sıra)', get:c=>c.eodb, num:c=>numFromMoney(c.eodb), better:'low' },
    { label:'İthalat Kısıtlaması', get:c=>importRestrictionDisplay(c), num:null, better:null },
  ]},
  { title:'Lojistik', rows:[
    { label:'Nakliye Süresi', get:c=>c.transitTime, num:c=>numFromMoney(c.transitTime), better:'low' },
    { label:'Ort. Navlun (Deniz/Kara)', get:c=>c.freightCost, num:c=>numFromMoney(c.freightCost), better:'low' },
    { label:'Ana Limanlar / Güzergah', get:c=>c.ports, num:null, better:null },
    { label:'Konteyner Maliyeti', get:c=>c.logisticsCost, num:c=>numFromMoney(c.logisticsCost), better:'low' },
  ]},
  { title:'Rekabet', rows:[
    { label:'Ana Tedarikçi Ülkeler', get:c=>topSuppliersDisplay(c), num:null, better:null },
    { label:'Türkiye Sırası', get:c=>turkeyRankDisplay(c), num:c=>turkeyRankNum(c), better:'low' },
    { label:'Çin Payı', get:c=>supplierShareDisplay(c,'Çin'), num:c=>supplierShareNum(c,'Çin'), better:'low' },
    { label:'İtalya Payı', get:c=>supplierShareDisplay(c,'İtalya'), num:c=>supplierShareNum(c,'İtalya'), better:null },
  ]},
];
// Premium İtalyan marka verileri gönderildiğinde buraya satır eklenecek — veri gelene
// kadar bu bölüm hiç render edilmez (boş/yanıltıcı satır gösterilmez).
const PREMIUM_BRAND_SECTION = { title:'Premium Marka Varlığı', rows:[] };

function renderCompareModal(){
  const countries = compareIds.map(id => withCategory(COUNTRIES.find(c=>c.id===id)));
  if(!countries.length){
    document.getElementById('compareBody').innerHTML = `<div class="footnote">Karşılaştırmak için bir ülke sayfasında "+ KARŞILAŞTIR" butonuna basın (en fazla 4 ülke).</div>`;
    return;
  }
  let html = `<div class="footnote" style="margin-bottom:20px; text-align:center;">Kategori: ${CATEGORIES[activeCategory].label} (${CATEGORIES[activeCategory].hs}) · Her satırda en iyi değer <span style="color:var(--teal); font-weight:700;">teal</span> renkle vurgulanır.</div>`;
  html += `<div class="vs-grid" style="grid-template-columns:170px repeat(${countries.length}, 1fr);">`;
  // Başlık satırı — ülke kartları
  html += `<div></div>`;
  countries.forEach(c=>{
    html += `
      <div class="vs-head">
        <div class="vs-flag">${c.flag}</div>
        <div class="vs-name">${c.name}</div>
        <div class="vs-score" style="color:${scoreColor(c.scores.overall)}">${c.scores.overall}<span style="font-size:12px; color:var(--text-2);">/100</span></div>
        <button class="vs-remove" data-id="${c.id}" title="Karşılaştırmadan çıkar">✕</button>
      </div>`;
  });
  // Kategori + metrik satırları — veri bulunmayan satırlar gösterilmez.
  const sections = PREMIUM_BRAND_SECTION.rows.length ? [...COMPARE_SECTIONS, PREMIUM_BRAND_SECTION] : COMPARE_SECTIONS;
  let rowIdx = 0; // sadece zebra/hover stilini beslemek için — veri/düzeni etkilemez
  sections.forEach(section=>{
    const visibleRows = section.rows.filter(row => countries.some(c => { const v = row.get(c); return v !== null && v !== undefined && v !== ''; }));
    if(!visibleRows.length) return;
    html += `<div class="vs-section-title">${section.title}</div>`;
    countries.forEach(()=>{ html += `<div class="vs-section-title"></div>`; });
    visibleRows.forEach(row=>{
      let winnerIdx = -1;
      if(row.num && row.better){
        const vals = countries.map(c=>row.num(c));
        const knownVals = vals.filter(v=> v !== null && v !== undefined && !isNaN(v));
        if(knownVals.length > 0){
          const best = row.better==='high' ? Math.max(...knownVals) : Math.min(...knownVals);
          winnerIdx = vals.indexOf(best);
          if(knownVals.every(v=>v===knownVals[0])) winnerIdx = -1;
        }
      }
      const altClass = rowIdx % 2 === 1 ? ' vs-row-alt' : '';
      html += `<div class="vs-row-label${altClass}" data-row="${rowIdx}">${row.label}</div>`;
      countries.forEach((c,i)=>{
        const val = row.get(c);
        const display = (val === null || val === undefined || val === '') ? '—' : val;
        const badge = i===winnerIdx ? ' <span class="vs-best-badge">✓ En İyi</span>' : '';
        html += `<div class="vs-cell${altClass} ${i===winnerIdx ? 'vs-winner' : ''}" data-row="${rowIdx}">${display}${badge}</div>`;
      });
      rowIdx++;
    });
  });
  html += `</div>`;
  document.getElementById('compareBody').innerHTML = html;
  document.querySelectorAll('.vs-remove').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      removeFromCompare(btn.getAttribute('data-id'));
      renderCompareModal();
      renderCompareTray();
    });
  });
}
// Karşılaştırma tablosunda satır üzerine gelince tüm satırı hafifçe
// aydınlatır — tek seferlik delegated dinleyici, her render'da tekrar
// bağlanmasına gerek yok (compareBody'nin kendisi hep aynı DOM node'u).
(function initCompareRowHover(){
  const body = document.getElementById('compareBody');
  if(!body) return;
  let hoveredRow = null;
  function clearHover(){
    if(hoveredRow === null) return;
    body.querySelectorAll(`[data-row="${hoveredRow}"]`).forEach(n=> n.classList.remove('vs-row-hover'));
    hoveredRow = null;
  }
  body.addEventListener('mouseover', (e)=>{
    const el = e.target.closest('[data-row]');
    const row = el ? el.getAttribute('data-row') : null;
    if(row === hoveredRow) return;
    clearHover();
    if(row !== null){
      hoveredRow = row;
      body.querySelectorAll(`[data-row="${hoveredRow}"]`).forEach(n=> n.classList.add('vs-row-hover'));
    }
  });
  body.addEventListener('mouseleave', clearHover);
})();

function baseChartOpts(){
  return {
    responsive:true, maintainAspectRatio:false,
    scales:{
      x:{ ticks:{ color:'#5f6672', font:{family:'monospace', size:10} }, grid:{ color:'rgba(255,255,255,0.04)' } },
      y:{ ticks:{ color:'#5f6672', font:{family:'monospace', size:10} }, grid:{ color:'rgba(255,255,255,0.04)' } }
    },
    plugins:{ legend:{ display:false } }
  };
}

/* =========================================================
   DİNAMİK ÜST BOŞLUK HİZALAMA
   Header ve toolbar'ın gerçek yüksekliğini ölçüp, altındaki
   içeriğin (harita/liste/ülke sayfası) üst boşluğunu buna göre
   ayarlar — böylece header'a buton eklenip yüksekliği değişse
   bile araç çubuğuyla üst üste binmez.
   ========================================================= */
function syncChromeOffsets(){
  const header = document.querySelector('header');
  const toolbarEl = document.querySelector('.toolbar');
  if(!header || !toolbarEl) return;
  const headerH = header.offsetHeight;
  const toolbarH = toolbarEl.offsetHeight;
  toolbarEl.style.top = headerH + 'px';
  document.documentElement.style.setProperty('--header-h', headerH + 'px');
  const buffer = window.innerWidth <= 640 ? 14 : 26;
  document.documentElement.style.setProperty('--chrome-h', (headerH + toolbarH + buffer) + 'px');
}
syncChromeOffsets();
window.addEventListener('resize', ()=>{
  clearTimeout(window._chromeResizeT);
  window._chromeResizeT = setTimeout(syncChromeOffsets, 120);
});
window.addEventListener('load', syncChromeOffsets);
// Header VEYA araç çubuğu içeriği değiştiğinde (giriş durumu, filtre butonu, satır kaymaları vb.)
// yeniden ölç — önceden sadece header izleniyordu, araç çubuğu büyüyünce boşluk güncellenmiyordu.
if(window.ResizeObserver){
  const chromeObserver = new ResizeObserver(()=> syncChromeOffsets());
  chromeObserver.observe(document.querySelector('header'));
  chromeObserver.observe(document.querySelector('.toolbar'));
}
// Mobil tarayıcılarda font/satır kaydırma geç oturabiliyor — birkaç güvenlik taraması daha yap.
[100, 350, 800, 1500].forEach(t=> setTimeout(syncChromeOffsets, t));

document.getElementById('mkt-count').textContent = COUNTRIES.length;
updatePremiumUI();
// Footer bağlantıları henüz gerçek sayfalara bağlı değil (placeholder) — tıklanınca sayfa kaymasın.
document.querySelectorAll('.footer-link').forEach(a=>{
  a.addEventListener('click', (e)=> e.preventDefault());
});
// Küresel Raporlar ve Atlas Research+ — ücretsiz (Keşif) üyelikte YOK, sadece
// Kurucu/Standart üyelere açık. Hem link tıklamasında hem doğrudan URL ile
// gelindiğinde (bkz. applyHistoryState) bu kısıtlama uygulanır.
const PREMIUM_ONLY_MODALS = new Set(['reports', 'research']);
// "Küresel Raporlar" gerçek içeriğe sahip — kendi modalını açar.
document.getElementById('globalReportsLink').addEventListener('click', (e)=>{
  e.preventDefault();
  if(!isPremiumUser()){ showPremiumModal(); return; }
  document.getElementById('globalReportsModal').classList.add('open');
  pushHistoryState();
});
document.getElementById('closeGlobalReports').addEventListener('click', ()=>{
  document.getElementById('globalReportsModal').classList.remove('open');
  pushHistoryState();
});
// "Atlas Research+" gerçek içeriğe sahip — kendi modalını açar.
document.getElementById('atlasResearchLink').addEventListener('click', (e)=>{
  e.preventDefault();
  if(!isPremiumUser()){ showPremiumModal(); return; }
  document.getElementById('atlasResearchModal').classList.add('open');
  pushHistoryState();
});
document.getElementById('closeAtlasResearch').addEventListener('click', ()=>{
  document.getElementById('atlasResearchModal').classList.remove('open');
  pushHistoryState();
});
// "Çerez Politikası" gerçek içeriğe sahip — kendi modalını açar.
document.getElementById('cookiePolicyLink').addEventListener('click', (e)=>{
  e.preventDefault();
  document.getElementById('cookiePolicyModal').classList.add('open');
  pushHistoryState();
});
document.getElementById('closeCookiePolicy').addEventListener('click', ()=>{
  document.getElementById('cookiePolicyModal').classList.remove('open');
  pushHistoryState();
});
// "Kullanım Şartları", "Gizlilik Politikası", "Yardım Merkezi", "İş Ortakları", "İletişim" — gerçek içeriğe sahip.
[
  ['termsLink', 'termsModal', 'closeTerms'],
  ['privacyPolicyLink', 'privacyPolicyModal', 'closePrivacyPolicy'],
  ['helpCenterLink', 'helpCenterModal', 'closeHelpCenter'],
  ['partnersLink', 'partnersModal', 'closePartners'],
  ['contactLink', 'contactModal', 'closeContact'],
  ['aboutLink', 'aboutModal', 'closeAbout'],
].forEach(([linkId, modalId, closeId])=>{
  document.getElementById(linkId).addEventListener('click', (e)=>{
    e.preventDefault();
    document.getElementById(modalId).classList.add('open');
    pushHistoryState();
  });
  document.getElementById(closeId).addEventListener('click', ()=>{
    document.getElementById(modalId).classList.remove('open');
    pushHistoryState();
  });
});

/* =========================================================
   TARAYICI GEÇMİŞİ (BACK/FORWARD) — History API
   Site tek sayfa (SPA) olarak çalışmaya devam eder; hash (#)
   kullanılmaz. Görünüm (harita/liste/ülke), aktif kategori ve
   filtreler her değiştiğinde URL query string'i ve history.state
   history.pushState ile güncellenir. Kullanıcı tarayıcı Geri
   tuşuna bastığında popstate olayı yakalanır ve uygulama önceki
   durumuna geri döner — sayfadan çıkılmaz. Kullanıcı, uygulamaya
   girmeden önceki geçmişin başına gelirse (artık geri alınacak
   bir app-state kalmadığında) tarayıcı normal şekilde siteden
   çıkar; burada buna müdahale edilmez.
   ========================================================= */
const TRACKED_MODALS = { news:'newsModal', fairs:'fairsModal', targets:'targetsModal', travel:'travelModal', premium:'premiumModal', reports:'globalReportsModal', research:'atlasResearchModal', cookies:'cookiePolicyModal', terms:'termsModal', privacy:'privacyPolicyModal', help:'helpCenterModal', partners:'partnersModal', contact:'contactModal', about:'aboutModal' };
function getOpenModalName(){
  for(const name in TRACKED_MODALS){
    const el = document.getElementById(TRACKED_MODALS[name]);
    if(el && el.classList.contains('open')) return name;
  }
  return null;
}
function closeTrackedModals(){
  Object.values(TRACKED_MODALS).forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.classList.remove('open');
  });
}

function currentAppState(){
  return {
    view: dashboard.classList.contains('open') ? 'country' : (listView.classList.contains('show') ? 'list' : 'globe'),
    countryId: openCountryId || null,
    cat: activeCategory,
    filters: Object.assign({}, activeFilters),
    modal: getOpenModalName()
  };
}

// Faz 3: HS koduna göre kategori de artık path'in parçası — her kategori
// kendi statik, SEO'lanabilir sayfası. 'seating' varsayılan olduğu için
// path'te ek segment almıyor; diğer kategoriler kendi slug'ını alıyor.
const CATEGORY_SLUGS = { wood: 'ahsap-mobilya' };
const CATEGORY_SLUGS_REVERSE = Object.fromEntries(
  Object.entries(CATEGORY_SLUGS).map(([cat, slug]) => [slug, cat])
);

// Faz 5: haberler/fuarlar/hedef ülkelerim ve footer'daki tüm sabit sayfalar
// artık kendi bağımsız URL'lerine sahip (örn. /haberler, /iletisim).
// Bunlar hangi görünümün (küre/liste/ülke) üstünde açılırsa açılsın,
// URL'de her zaman önceliklidir — kendi başına paylaşılabilir birer sayfadır.
const MODAL_SLUGS = {
  news: 'haberler',
  fairs: 'fuarlar',
  targets: 'hedef-ulkelerim',
  travel: 'seyahat-planla',
  premium: 'premium',
  reports: 'kuresel-raporlar',
  research: 'atlas-research',
  cookies: 'cerez-politikasi',
  terms: 'kullanim-sartlari',
  privacy: 'gizlilik-politikasi',
  help: 'yardim-merkezi',
  partners: 'is-ortaklari',
  contact: 'iletisim',
  about: 'hakkimizda',
};
const MODAL_SLUGS_REVERSE = Object.fromEntries(
  Object.entries(MODAL_SLUGS).map(([name, slug]) => [slug, name])
);

function stateToUrl(state){
  const params = new URLSearchParams();
  if(state.filters && Object.keys(state.filters).length) params.set('filters', JSON.stringify(state.filters));

  // Modal açıksa, altındaki görünüm ne olursa olsun modal'ın kendi URL'i kullanılır.
  if(state.modal && MODAL_SLUGS[state.modal]){
    const qs = params.toString();
    return '/' + MODAL_SLUGS[state.modal] + (qs ? ('?' + qs) : '');
  }

  const cat = state.cat && state.cat !== 'seating' ? state.cat : null;
  const catSlug = cat && CATEGORY_SLUGS[cat] ? CATEGORY_SLUGS[cat] : null;
  const qs = params.toString();

  if(state.view === 'country' && state.countryId){
    return '/country/' + state.countryId + (catSlug ? '/' + catSlug : '') + (qs ? ('?' + qs) : '');
  }

  if(state.view === 'list'){
    return '/liste' + (catSlug ? '/' + catSlug : '') + (qs ? ('?' + qs) : '');
  }

  // globe (varsayılan görünüm)
  return '/' + (catSlug || '') + (qs ? ('?' + qs) : '');
}

let _suppressHistoryPush = false;

function pushHistoryState(){
  if(_suppressHistoryPush) return;
  const state = currentAppState();
  const url = stateToUrl(state);
  const currentUrl = location.pathname + location.search;
  if(url === currentUrl && history.state) return; // durum zaten aynı, geçmişe tekrar eklenmez
  try{
    history.pushState(state, '', url);
  }catch(e){
    // Bazı gömülü/sandboxed önizleme ortamlarında (örn. srcdoc iframe) History API
    // güvenlik nedeniyle URL güncellemesine izin vermeyebilir. Gerçek sitede (üst
    // seviye sayfa) bu hata oluşmaz; burada sessizce yutuyoruz ki uygulama çökmesin.
  }
}

function applyHistoryState(state){
  _suppressHistoryPush = true;
  try{
    const cat = (state && state.cat) ? state.cat : 'seating';
    if(cat !== activeCategory){
      activeCategory = cat;
      document.querySelectorAll('.cat-btn').forEach(b=> b.classList.toggle('active', b.getAttribute('data-cat') === activeCategory));
      invalidateDisplayCache();
      needsRender = true;
    }

    activeFilters = (state && state.filters) ? Object.assign({}, state.filters) : {};
    FILTER_DEFS.forEach(def=>{
      const slider = document.getElementById(`filterSlider-${def.id}`);
      const numInput = document.getElementById(`filterNum-${def.id}`);
      if(!slider || !numInput) return;
      if(activeFilters[def.id] !== undefined){
        slider.value = activeFilters[def.id];
        numInput.value = activeFilters[def.id];
      } else {
        slider.value = def.mode === 'max' ? def.max : def.min;
        numInput.value = '';
      }
    });
    updateFilterUI();
    invalidateDisplayCache();
    needsRender = true;

    const view = state && state.view;
    if(view === 'country' && state.countryId){
      const c = COUNTRIES.find(x=> x.id === state.countryId);
      if(c){
        currentBaseCountry = c;
        openCountryId = c.id;
        renderCountryPage(c);
        renderCountryChip(c);
        showView('country');
      } else {
        openCountryId = null;
        currentBaseCountry = null;
        document.getElementById('countryChipWrap').innerHTML = '';
        showView('globe');
      }
    } else if(view === 'list'){
      renderListTable();
      showView('list');
    } else {
      openCountryId = null;
      currentBaseCountry = null;
      document.getElementById('countryChipWrap').innerHTML = '';
      showView('globe');
    }

    closeTrackedModals();
    const modalName = state && state.modal;
    if(modalName && PREMIUM_ONLY_MODALS.has(modalName) && !isPremiumUser()){
      document.getElementById('premiumModal').classList.add('open');
    } else if(modalName && TRACKED_MODALS[modalName]){
      const el = document.getElementById(TRACKED_MODALS[modalName]);
      if(el){
        if(modalName === 'news') renderNews();
        else if(modalName === 'fairs') renderFairs();
        else if(modalName === 'targets') renderTargetsPanel();
        else if(modalName === 'premium'){ refreshFoundingSlotsUI(); updatePremiumFreeCard(); }
        el.classList.add('open');
      }
    }
  } finally {
    _suppressHistoryPush = false;
  }
}

window.addEventListener('popstate', (e)=>{
  applyHistoryState(e.state);
});

// Sayfa ilk açıldığında URL'deki durumu oku, history.state temelini (replaceState ile) kur.
(function initHistoryFromUrl(){
  const params = new URLSearchParams(location.search);
  const pathname = location.pathname;

  // Faz 5: önce takip edilen modal sayfalarına bak (/haberler, /iletisim, vb.) —
  // bunlar en yüksek öncelikli, kendi başına bağımsız URL'ler.
  const modalSlugMatch = pathname.match(/^\/([a-z0-9-]+)\/?$/i);
  const modalFromPath = modalSlugMatch ? (MODAL_SLUGS_REVERSE[modalSlugMatch[1]] || null) : null;

  // Faz 2-3: path'ten görünüm + ülke + kategori bilgisini oku.
  // Öncelik sırası: modal -> /country/<slug>(/<kategori>) -> /liste(/<kategori>) -> /<kategori> (küre) -> '/'
  const countryMatch = !modalFromPath ? pathname.match(/^\/country\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?\/?$/i) : null;
  const listMatch = (!modalFromPath && !countryMatch) ? pathname.match(/^\/liste(?:\/([a-z0-9-]+))?\/?$/i) : null;
  const globeCatMatch = (!modalFromPath && !countryMatch && !listMatch) ? pathname.match(/^\/([a-z0-9-]+)\/?$/i) : null;

  let view = 'globe';
  let countryId = null;
  let catSlug = null;

  if(countryMatch){
    view = 'country';
    countryId = countryMatch[1];
    catSlug = countryMatch[2] || null;
  } else if(listMatch){
    view = 'list';
    catSlug = listMatch[1] || null;
  } else if(globeCatMatch && globeCatMatch[1]){
    catSlug = globeCatMatch[1];
  }

  // Eski paylaşılan linkler için geriye dönük uyumluluk (?country=, ?view=list, ?cat=, ?modal=)
  if(!countryId) countryId = params.get('country') || null;
  if(countryId && view === 'globe') view = 'country';
  if(view === 'globe' && params.get('view') === 'list') view = 'list';

  const catFromPath = catSlug ? (CATEGORY_SLUGS_REVERSE[catSlug] || null) : null;
  const modalName = modalFromPath || (TRACKED_MODALS[params.get('modal')] ? params.get('modal') : null);
  const initialState = {
    view,
    countryId,
    cat: catFromPath || params.get('cat') || 'seating',
    filters: (function(){
      try{ return params.get('filters') ? JSON.parse(params.get('filters')) : {}; }
      catch(e){ return {}; }
    })(),
    modal: modalName
  };
  try{
    history.replaceState(initialState, '', stateToUrl(initialState));
  }catch(e){
    // srcdoc/sandboxed önizleme ortamlarında URL güncellenemeyebilir — state'i yine de uygula.
  }
  if(initialState.view !== 'globe' || Object.keys(initialState.filters).length || initialState.cat !== 'seating' || initialState.modal){
    applyHistoryState(initialState);
  }
})();

