# Mockup Brightspace

Replika halaman Brightspace untuk eksplorasi enhancement. Navigasi dibuat **sama seperti situs asli**: Beranda · Jelajahi Lokasi · Tenant · Tentang Kami.

## Halaman

| File | Status | Isi |
|---|---|---|
| `home.html` | Replika beranda | Hero + pencarian (Cari Kota / Cari Kode), rekomendasi lahan, kota, lahan baru, mitra tenant, promo, CTA |
| `mitra.html` | **Replika `/mitra` (Tenant)** | Hero, 3 kartu tipe mitra, 11 kategori bidang usaha, logo wall 30 brand, CTA "Siap Buka Usaha" |
| `list-brand.html` | Replika `/list/brand` | Daftar brand per kategori (`?ca=`), paginasi, kartu bisa diklik, panel Enhancement |
| `brand-detail.html` | **Detail tenant** | Profil brand, deskripsi + sumber, jumlah outlet, dan daftar SPBU tempat brand menyewa lahan |

Brand **tidak** ada di navigasi — sesuai situs asli, semua diakses lewat **Tenant**: `mitra.html → kategori → list-brand.html → klik brand → brand-detail.html`.

## Alur

```
home.html
  └─ menu "Tenant" → mitra.html
       └─ klik kategori (mis. Auto Care) → list-brand.html?ca=3
            └─ klik brand → brand-detail.html?id=auto-dazzling
```

## Detail tenant (`brand-detail.html`)

| Bagian | Isi |
|---|---|
| Header | Nama, kategori, sub, tipe, chip "Mitra aktif NFR Pertamina", deskripsi + **link sumber** |
| Statistik | Outlet di SPBU (dummy) · Total gerai nasional (sumber brand) · SPBU terpasang · Kota |
| **SPBU tempat brand beroperasi** | Daftar SPBU berdasarkan **nama area** + label "Outlet aktif" |
| Sidebar | Headline "Brand ini sudah bertumbuh di SPBU Pertamina", CTA **Ajukan Brand Anda** + **Lihat Lahan Tersedia** |
| Breadcrumb | Beranda → Tenant → kategori → brand |

Section **Kebutuhan lahan dihapus** supaya tidak menampilkan angka dummy sebagai data sewa. Info ketersediaan lahan juga tidak ditampilkan di sini — section ini murni rekam jejak brand.

## Data per kategori

Nama brand diambil dari `brightspace.pertamina.com/list/brand?Ca=…`:

| Kategori | ca | Jumlah brand |
|---|---|---|
| Food & Beverage | 1 | 31 |
| Convenience Store (C-Store) | 2 | 11 |
| Auto Care | 3 | 8 |
| Financial Service | 8 | 12 |
| Office | 9 | 1 |
| Other Service | 10 | 12 |
| Advertising / Activation / Fasilitas EBT / Produk Pertamina / UMKM | 5, 6, 13, 65, 66 | **0 — kosong juga di situs asli** |

Klik kategori kosong (mis. `?ca=6`) akan menampilkan pesan "Belum ada brand pada kategori ini".

## Yang dummy

- **Logo brand** = monogram inisial.
- **Jumlah outlet di SPBU, jumlah SPBU, kota** = angka contoh.
- **Nama SPBU** (SPBU Jatinangor, SPBU Cikini, dst) = nama area ilustratif.
- **Sub kategori & tipe brand** = contoh.
- **Deskripsi resmi** baru terisi untuk 7 brand (KFC, Dunkin', Excelso, Roti'O, Holland Bakery, Kopi Kenangan, Pizza Hut); sisanya menampilkan status "belum tersedia" + link situs resmi (tidak dikarang).
- Logo wall di `mitra.html` memakai teks, karena aset asli berupa placeholder.

## Panel Enhancement (`list-brand.html`)

Alat bantu review, bukan bagian situs asli. Default semua aktif.

| Toggle | Usulan |
|---|---|
| Jumlah hasil | "Menampilkan 1–12 dari 31 brand" |
| Urutkan | Nama A–Z, Z–A, outlet terbanyak |
| Info outlet & kota | Meta pada kartu |
| Simpan / favorit | Bookmark |
| Sub kategori dinamis | Opsi mengikuti kategori |
| Warna brand | Tombol & paginasi merah Pertamina |

## Deploy

```powershell
powershell -ExecutionPolicy Bypass -File F:\benchmark-nfr\mockups\deploy.ps1
```

Situs: https://chandrapc3000.github.io/brightspace-mockup/
