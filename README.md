# Mockup Brightspace

Replika halaman Brightspace untuk eksplorasi enhancement. Struktur navigasi dibuat **sama seperti situs asli**: Beranda · Jelajahi Lokasi · Tenant · Tentang Kami.

## Halaman

| File | Status | Isi |
|---|---|---|
| `home.html` | Replika beranda | Hero + pencarian (Cari Kota / Cari Kode), rekomendasi lahan, kota, lahan baru, mitra tenant, promo, CTA |
| **`mitra.html`** | **Replika `/mitra` (Tenant)** | Hero, "Berbagai Jenis Usaha Tersedia" (3 kartu tipe mitra), "Mitra Berdasarkan Bidang Usaha" (11 kategori), logo wall 30 brand, CTA "Siap Buka Usaha" |
| `list-brand.html` | Replika `/list/brand` | Tujuan klik kategori dari halaman Tenant (`?ca=`), grid 31 brand F&B, paginasi, panel Enhancement |

**Brand tidak lagi ada di navigasi.** Di situs asli, daftar brand memang diakses lewat **Tenant → kategori**, bukan menu tersendiri. Jadi `list-brand.html` tetap ada sebagai halaman turunan, persis seperti alur aslinya.

`brand-detail.html` (usulan tambahan) dipindah ke `F:\benchmark-nfr\arsip-brand\` — tidak dipakai di situs.

## Alur

```
home.html → menu "Tenant" → mitra.html → klik kategori (mis. Food & Beverage)
          → list-brand.html?ca=1
```

## Section Tenant (mitra.html)

| Bagian | Isi |
|---|---|
| Hero | "Raih Peluang Usaha dan Keuntungan dengan Mitra Andalan" + subjudul + CTA **Ajukan Kemitraan** |
| Jenis usaha | 3 kartu: **Mitra Internasional, Nasional, Lokal** (gambar `assets/brand/*.webp`) dengan overlay merah |
| Bidang usaha | 11 kategori dengan ikon asli (`assets/mitra/*.webp`), masing-masing menuju `list-brand.html?ca=N` |
| Logo wall | 30 nama brand/lembaga (Alfamart, Bank BCA, Bank Mandiri, dst) — di situs asli berupa gambar placeholder, di sini teks |
| CTA | "Siap Buka Usaha di SPBU Pertamina?" + tombol **Daftar Jadi Mitra** |

Semua CTA mengarah ke portal registrasi tenant Kemitraan Patra Niaga (URL diambil dari situs asli).

## Aset

| File | Keterangan |
|---|---|
| `assets/app.css` | Stylesheet bersama (navbar, hero, footer, kartu) |
| `assets/bootstrap-icons.css` + `assets/fonts/` | Ikon lokal, tetap tampil tanpa internet |
| `assets/mitra.webp` | Hero halaman Tenant |
| `assets/brand/*.webp` | Gambar 3 kartu tipe mitra |
| `assets/mitra/*.webp` | Ikon 11 kategori bidang usaha |
| `assets/BrightSpace.webp`, `assets/spbu.webp`, `assets/list-header.webp` | Logo, hero beranda, hero list |

## Data & batasan

- Nama brand pada `list-brand.html` (31 brand F&B) dan kartu lahan di beranda memakai data yang benar-benar tampil di situs asli.
- **Halaman Tenant tidak memuat angka** — sama seperti aslinya (hanya kategori, tipe mitra, dan logo wall).
- Data contoh hanya tersedia untuk kategori **Food & Beverage**. Klik kategori lain akan menampilkan pesan "Belum ada data contoh untuk kategori ini" (bukan error).
- Logo wall memakai teks, bukan logo gambar, karena aset aslinya berupa placeholder.

## Panel Enhancement (`list-brand.html`)

Alat bantu review, bukan bagian situs asli. Default semua aktif; tombol **Semua enhancement** mematikan semuanya.

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
