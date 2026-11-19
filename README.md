# Mockup "Bayangan" Brightspace

Replika halaman Brightspace + satu halaman usulan, untuk eksplorasi enhancement sebelum masuk development.

Buka `home.html` lebih dulu, lalu navigasi ke halaman lain lewat menu.

## Halaman

| File | Status | Isi |
|---|---|---|
| `home.html` | **Replika** beranda | Hero + pencarian (Cari Kota / Cari Kode), Rekomendasi Lahan, kota, lahan baru, mitra tenant, promo, CTA |
| `list-brand.html` | **Replika** `/list/brand` | Filter, grid 31 brand, paginasi, panel **Enhancement** untuk membandingkan baseline vs usulan |
| `brand-detail.html` | **Usulan baru** | Detail tenant **dinamis** (`?id=<slug>`): deskripsi dari situs resmi brand + link sumber, total outlet (dummy) tertaut ke Kemitraan, daftar SPBU **berdasarkan nama area** (SPBU Jatinangor, SPBU Cikini, dst), galeri, brand serupa, sidebar kontak |
| `assets/brands.js` | Dataset bersama | 31 brand + deskripsi/sumber + 22 nama SPBU. Dipakai `list-brand` dan `brand-detail`. |

Alur demo: `home.html` → menu **Brand** → `list-brand.html` → klik kartu / **Lihat detail** → `brand-detail.html?id=…`.

## Detail tenant (yang diminta)

Klik salah satu kartu di `list-brand.html`, lalu halaman detail menampilkan:

1. **Deskripsi singkat** brand. Diambil dari situs resmi brand dan ditampilkan bersama **link sumber** + tanggal ambil.
   Sudah terisi untuk: **KFC, Dunkin', Excelso, Roti'O, Holland Bakery, Kopi Kenangan, Pizza Hut**.
   Untuk brand lain, halaman menampilkan status jujur *"deskripsi belum tersedia"* + link situs resmi (tidak dikarang).
2. **Total outlet** — dua angka:
   - *Outlet di SPBU* → **dummy**, dengan tautan **"Lihat di Kemitraan"** ke `kemitraan.patraniaga.com`.
   - *Total gerai nasional* → dari sumber brand (mis. KFC 690 gerai), dengan tautan sumber.
3. **Daftar SPBU berdasarkan nama area**, bukan nomor — mis. `SPBU Jatinangor`, `SPBU Cibiru`, `SPBU Cikini`, `SPBU Kemang` — lengkap dengan kota, jumlah lahan, dan status.

Contoh URL: `brand-detail.html?id=kfc`, `?id=kopi-kenangan`, `?id=chatime` (contoh fallback).

### Menambah deskripsi brand

Edit `assets/brands.js`, isi `desc` + `source`:

```js
{ name:"Chatime", ...,
  desc:"Isi deskripsi singkat dari situs resmi.",
  source:{ label:"chatime.co.id", url:"https://www.chatime.co.id/" } }
```

## Aset

| File | Keterangan |
|---|---|
| `assets/app.css` | Stylesheet bersama (token warna, navbar, hero, footer, kartu) untuk home & brand-detail |
| `assets/bootstrap-icons.css` + `assets/fonts/` | Ikon disimpan lokal supaya tetap tampil tanpa internet |
| `assets/BrightSpace.webp`, `assets/list-header.webp`, `assets/spbu.webp` | Aset dari situs asli, disimpan lokal karena hotlink diblokir |
| `preview-*.png` | Hasil render tiap halaman |

`list-brand.html` sengaja **standalone** (CSS internal) agar paling mudah diedit sendiri; dua halaman lain memakai `app.css`.

## Yang sama dengan halaman asli

- Navbar fixed putih 75px, logo, menu Beranda / Jelajahi Lokasi / Tenant / Tentang Kami, akun mitra.
- Tipografi **Exo**, body 16px, background `#f7fafc`, kartu radius 6px, footer navy `#032c48` 4 kolom.
- Hero beranda memakai foto asli (`spbu.webp`) + overlay, judul dan tagline asli, dua tab pencarian.
- Panel filter semi-transparan, komposisi 6+2+2+2, tombol **Cari** gelap.
- 31 nama brand F&B dan 8 kartu lahan memakai kode/alamat/harga yang benar-benar tampil di situs.

## Yang dummy (jangan dianggap data asli)

- **Logo brand** = monogram inisial. Isi properti `logo` pada `assets/brands.js` untuk memakai logo asli.
- **Jumlah outlet di SPBU, jumlah SPBU terpasang, luas, jumlah SPBU per kota** = angka contoh untuk demo tata letak.
- **Nama SPBU** (SPBU Jatinangor, SPBU Cikini, dst) = nama area ilustratif, bukan daftar resmi.
- **Sub kategori, tipe brand, kebutuhan lahan, "Mitra sejak 2022"** = contoh.
- **Peta sebaran outlet** = ilustrasi CSS, bukan peta sungguhan.

Di `list-brand.html` dan `brand-detail.html` ada keterangan bahwa sebagian data adalah dummy.

## Panel Enhancement (`list-brand.html`)

Default semua aktif. Tombol **Semua enhancement** mematikan semuanya sekaligus → kembali ke tampilan baseline.

| Toggle | Usulan |
|---|---|
| Jumlah hasil | “Menampilkan 1–12 dari 31 brand” |
| Urutkan | Nama A–Z, Z–A, outlet terbanyak |
| Info outlet & kota | Meta pada kartu |
| CTA “Lihat detail” | Kartu mengarah ke `brand-detail.html` |
| Simpan / favorit | Bookmark brand |
| Sub kategori dinamis | Opsi mengikuti kategori |
| Warna brand | Tombol & paginasi merah Pertamina (aslinya biru Bootstrap) |

## Bagian yang paling sering diubah

| Ingin mengubah | Cari di file |
|---|---|
| Daftar brand, deskripsi, sumber | `assets/brands.js` (`RAW_BRANDS`) |
| Nama-nama SPBU | `assets/brands.js` (`SPBU_POOL`) |
| Kartu per halaman | `const PER_PAGE = 12;` |
| Warna aksen | `--brand` di `:root` (`app.css` atau `<style>` list-brand) |
| Tinggi hero | `.hero-home` / `.hero-half` |
| Isi kartu lahan | markup `<article class="lahan-card">` di `home.html` |
| Isi profil brand | `<div class="brand-meta">` dan `.panel-card` di `brand-detail.html` |
| Teks banner "USULAN" | `#proposalBar` di `brand-detail.html` |

## Catatan teknis

- Tanpa build step. Font Exo masih dari Google Fonts (ada fallback system font); ikon sudah lokal.
- Interaksi murni client-side: tab pencarian, filter, sort, paginasi, bookmark (belum persisten).
- Aksesibilitas dasar: skip-link, `aria-current`, `aria-selected`, `aria-live` pada jumlah hasil, label input.

## Kandidat berikutnya

1. **Jelajahi Lokasi (`/explore`)** — filter + peta + kartu lahan.
2. **Detail Lahan** — spesifikasi, deposit, form kontak, lahan lain di SPBU yang sama.
3. **Detail SPBU + Analytic Overview** — 7 tab analitik dan Best Use Recommendation.
4. **Dashboard mitra** — pengajuan, kontrak, tagihan, dokumen (belum ada di produksi).
