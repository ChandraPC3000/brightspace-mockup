/* ============================================================
   Dataset brand — dipakai list-brand.html & brand-detail.html
   ------------------------------------------------------------
   desc    : deskripsi singkat. Diambil dari situs resmi brand
             (lihat `source`). null = belum tersedia.
   source  : { label, url } halaman sumber deskripsi.
   web     : situs resmi (dipakai bila desc belum tersedia).
   outlets : jumlah outlet DI SPBU — DUMMY, untuk demo tata letak.
   total   : total gerai nasional menurut sumber brand (string).
   ============================================================ */

const SPBU_POOL = [
  { name: "SPBU Jatinangor",     city: "Sumedang",          lahan: 3, status: "Tersedia" },
  { name: "SPBU Cibiru",         city: "Bandung",           lahan: 2, status: "Tersedia" },
  { name: "SPBU Dago",           city: "Bandung",           lahan: 4, status: "Tersedia" },
  { name: "SPBU Pasteur",        city: "Bandung",           lahan: 2, status: "Penuh" },
  { name: "SPBU Buah Batu",      city: "Bandung",           lahan: 3, status: "Tersedia" },
  { name: "SPBU Margonda",       city: "Depok",             lahan: 5, status: "Tersedia" },
  { name: "SPBU Cikini",         city: "Jakarta Pusat",     lahan: 2, status: "Tersedia" },
  { name: "SPBU Casablanca",     city: "Jakarta Selatan",   lahan: 4, status: "Tersedia" },
  { name: "SPBU Kemang",         city: "Jakarta Selatan",   lahan: 3, status: "Penuh" },
  { name: "SPBU Setiabudi",      city: "Jakarta Selatan",   lahan: 2, status: "Tersedia" },
  { name: "SPBU Pondok Indah",   city: "Jakarta Selatan",   lahan: 3, status: "Tersedia" },
  { name: "SPBU Kelapa Gading",  city: "Jakarta Utara",     lahan: 2, status: "Tersedia" },
  { name: "SPBU Cibubur",        city: "Jakarta Timur",     lahan: 4, status: "Tersedia" },
  { name: "SPBU BSD",            city: "Tangerang Selatan", lahan: 5, status: "Tersedia" },
  { name: "SPBU Alam Sutera",    city: "Tangerang",         lahan: 3, status: "Tersedia" },
  { name: "SPBU Ahmad Yani",     city: "Bekasi",            lahan: 2, status: "Penuh" },
  { name: "SPBU Diponegoro",     city: "Semarang",          lahan: 3, status: "Tersedia" },
  { name: "SPBU Malioboro",      city: "Yogyakarta",        lahan: 2, status: "Tersedia" },
  { name: "SPBU Basuki Rahmat",  city: "Surabaya",          lahan: 4, status: "Tersedia" },
  { name: "SPBU Kuta",           city: "Badung",            lahan: 3, status: "Tersedia" },
  { name: "SPBU Sudirman",       city: "Balikpapan",        lahan: 2, status: "Tersedia" },
  { name: "SPBU Sam Ratulangi",  city: "Makassar",          lahan: 3, status: "Tersedia" }
];

const RAW_BRANDS = [
  { name:"Amanda Brownies", cat:"Food & Beverage", sub:"Bakery", type:"Lokal", outlets:12, total:null,
    desc:null, source:null, web:{ label:"amandabrownies.com", url:"https://amandabrownies.com/" } },
  { name:"bengawan solo coffee", cat:"Food & Beverage", sub:"Coffee", type:"Nasional", outlets:48, total:null,
    desc:null, source:null, web:null },
  { name:"BINGXUE", cat:"Food & Beverage", sub:"Beverage", type:"Internasional", outlets:9, total:null,
    desc:null, source:null, web:null },
  { name:"Bright Cafe", cat:"Food & Beverage", sub:"Coffee", type:"Lokal", outlets:6, total:null,
    desc:"Kafe kopi milik Pertamina yang beroperasi di sejumlah SPBU, dikelola sebagai bagian dari layanan non-fuel retail.", source:null, web:null },
  { name:"BURGER KING", cat:"Food & Beverage", sub:"QSR", type:"Internasional", outlets:32, total:null,
    desc:null, source:null, web:{ label:"burgerking.co.id", url:"https://www.burgerking.co.id/" } },
  { name:"Chatime", cat:"Food & Beverage", sub:"Beverage", type:"Internasional", outlets:55, total:null,
    desc:null, source:null, web:{ label:"chatime.co.id", url:"https://www.chatime.co.id/" } },
  { name:"Chin Ma Ya", cat:"Food & Beverage", sub:"Beverage", type:"Lokal", outlets:7, total:null,
    desc:null, source:null, web:null },
  { name:"Dunkin' Donuts", cat:"Food & Beverage", sub:"Bakery", type:"Internasional", outlets:41, total:"14.000+ gerai global",
    desc:"Jaringan kopi dan donat global yang hadir di Indonesia sejak 1985; kini dikembangkan dengan konsep kafe modern, self-ordering kiosk, dan Dunkin' Rewards.",
    source:{ label:"dunkin.co.id", url:"https://www.dunkin.co.id/" } },
  { name:"Es Teh Poci", cat:"Food & Beverage", sub:"Beverage", type:"Lokal", outlets:18, total:null,
    desc:null, source:null, web:{ label:"estehpoci.com", url:"https://estehpoci.com/" } },
  { name:"Excelso", cat:"Food & Beverage", sub:"Coffee", type:"Nasional", outlets:27, total:"110+ gerai di 30+ kota",
    desc:"Kafe kopi Indonesia yang berdiri sejak 1991 di bawah Kapal Api Group; menyajikan kopi single origin Toraja, Gayo, Mandailing, Java, Bali, Flores, dan Papua.",
    source:{ label:"excelso-coffee.com", url:"https://excelso-coffee.com/" } },
  { name:"flash coffee", cat:"Food & Beverage", sub:"Coffee", type:"Internasional", outlets:15, total:null,
    desc:null, source:null, web:{ label:"flash-coffee.com", url:"https://flash-coffee.com/id/" } },
  { name:"Holland Bakery", cat:"Food & Beverage", sub:"Bakery", type:"Nasional", outlets:63, total:"470+ outlet, 25 cabang",
    desc:"Jaringan toko roti yang berdiri sejak 1978, dengan lebih dari 470 outlet dan 25 cabang; menyediakan roti, kue, dan pastry untuk kebutuhan harian.",
    source:{ label:"hollandbakery.co.id", url:"https://www.hollandbakery.co.id/" } },
  { name:"Javacafe", cat:"Food & Beverage", sub:"Coffee", type:"Nasional", outlets:5, total:null,
    desc:null, source:null, web:null },
  { name:"Kebab Turki Babarafi", cat:"Food & Beverage", sub:"QSR", type:"Nasional", outlets:22, total:null,
    desc:null, source:null, web:null },
  { name:"Kedai Kopi Kulo", cat:"Food & Beverage", sub:"Coffee", type:"Lokal", outlets:11, total:null,
    desc:null, source:null, web:null },
  { name:"KFC", cat:"Food & Beverage", sub:"QSR", type:"Internasional", outlets:74, total:"690 gerai di 169 kota",
    desc:"Pemegang hak waralaba tunggal KFC di Indonesia sejak 1978. Jaringan restoran cepat saji ayam goreng dengan produk ikonik Original Recipe dan Hot & Crispy Chicken.",
    source:{ label:"kfcku.co.id", url:"https://kfcku.co.id/kegiatan-usaha-perusahaan" } },
  { name:"Kopi Calf", cat:"Food & Beverage", sub:"Coffee", type:"Lokal", outlets:8, total:null,
    desc:null, source:null, web:null },
  { name:"Kopi Kenangan", cat:"Food & Beverage", sub:"Coffee", type:"Nasional", outlets:88, total:"1.400+ gerai di 7 pasar",
    desc:"Lahir di Jakarta pada 2017. Jaringan kedai kopi grab-and-go dengan menu kopi susu gula aren, kini beroperasi di 7 pasar termasuk Indonesia.",
    source:{ label:"kenanganglobal.com", url:"https://kenanganglobal.com/id/" } },
  { name:"Kopi Lain Hati", cat:"Food & Beverage", sub:"Coffee", type:"Lokal", outlets:14, total:null,
    desc:null, source:null, web:null },
  { name:"Kopi Soe", cat:"Food & Beverage", sub:"Coffee", type:"Lokal", outlets:19, total:null,
    desc:null, source:null, web:{ label:"kopisoe.com", url:"https://kopisoe.com/" } },
  { name:"Madu Pramuka", cat:"Food & Beverage", sub:"Snack", type:"Lokal", outlets:3, total:null,
    desc:null, source:null, web:null },
  { name:"Mc Donald", cat:"Food & Beverage", sub:"QSR", type:"Internasional", outlets:52, total:null,
    desc:null, source:null, web:{ label:"mcdonalds.co.id", url:"https://www.mcdonalds.co.id/" } },
  { name:"MISTER DONUT", cat:"Food & Beverage", sub:"Bakery", type:"Internasional", outlets:16, total:null,
    desc:null, source:null, web:{ label:"misterdonut.co.id", url:"https://www.misterdonut.co.id/" } },
  { name:"PIZZA HUT DELIVERY", cat:"Food & Beverage", sub:"QSR", type:"Internasional", outlets:29, total:null,
    desc:"Jaringan restoran pizza dengan layanan delivery dan takeaway di Indonesia, terhubung dengan aplikasi pemesanan dan program loyalitas.",
    source:{ label:"pizzahut.co.id", url:"https://www.pizzahut.co.id/" } },
  { name:"Rocket Chicken", cat:"Food & Beverage", sub:"QSR", type:"Nasional", outlets:24, total:null,
    desc:null, source:null, web:null },
  { name:"Roti'O", cat:"Food & Beverage", sub:"Bakery", type:"Nasional", outlets:21, total:"700+ toko di 110 kota",
    desc:"Roti coffee bun khas Indonesia sejak 2012 dengan topping kopi dan butter di dalamnya, disajikan hangat. Dikenal lewat gerai di bandara dan stasiun.",
    source:{ label:"rotio.id", url:"https://rotio.id/About" } },
  { name:"Spill The Beans", cat:"Food & Beverage", sub:"Coffee", type:"Lokal", outlets:4, total:null,
    desc:null, source:null, web:null },
  { name:"Teh Kotjok", cat:"Food & Beverage", sub:"Beverage", type:"Lokal", outlets:10, total:null,
    desc:null, source:null, web:null },
  { name:"Toko Kopi Teman", cat:"Food & Beverage", sub:"Coffee", type:"Lokal", outlets:2, total:null,
    desc:null, source:null, web:null },
  { name:"Tomoro Coffee", cat:"Food & Beverage", sub:"Coffee", type:"Nasional", outlets:39, total:null,
    desc:null, source:null, web:{ label:"tomorocoffee.com", url:"https://tomorocoffee.com/" } },
  { name:"TRUFFLE BELLY", cat:"Food & Beverage", sub:"Snack", type:"Lokal", outlets:1, total:null,
    desc:null, source:null, web:null }
];

const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");

window.BRANDS = RAW_BRANDS.map((b, i) => {
  /* Jumlah SPBU per brand: 4–7, dipilih deterministik supaya contohnya konsisten.
     Daftar ini menggambarkan SPBU tempat brand MENYEWA lahan, bukan lahan tersedia. */
  const count = 4 + (i % 4);
  const spbu = Array.from({ length: count }, (_, k) => SPBU_POOL[(i * 3 + k * 5) % SPBU_POOL.length]);
  return {
    ...b,
    id: slug(b.name),
    spbu,
    city: spbu[0].city,
    spbuCount: spbu.length
  };
});

/* helper kecil dipakai dua halaman */
window.brandInitials = function(name){
  const parts = name.replace(/[^A-Za-z0-9 ]/g," ").split(/\s+/).filter(Boolean);
  if (!parts.length) return "?";
  return parts.length === 1 ? parts[0].slice(0,2).toUpperCase() : (parts[0][0] + parts[1][0]).toUpperCase();
};
window.brandColor = function(name){
  const palette = ["#0f766e","#1d4ed8","#b45309","#7c3aed","#be123c","#0369a1","#4d7c0f","#9a3412"];
  let h = 0; for (const c of name) h = (h * 31 + c.charCodeAt(0)) % 997;
  return palette[h % palette.length];
};
