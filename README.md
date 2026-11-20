# Mockup Brightspace

Replika sederhana halaman Brightspace. Navigasi sama seperti situs asli: **Beranda · Jelajahi Lokasi · Tenant · Tentang Kami**.

## Halaman

| File | Isi |
|---|---|
| `home.html` | Beranda: hero + pencarian, rekomendasi lahan, kota, lahan baru, mitra tenant, promo |
| `mitra.html` | Replika `/mitra` (Tenant): hero, 3 kartu tipe mitra, 11 kategori bidang usaha, logo wall, CTA |
| `list-brand.html` | **Daftar brand sederhana** — tabel Nama Brand · Nama Perusahaan · Kategori Brand |

Tidak ada halaman detail brand dan **tidak ada klik per baris**. Semua data langsung terlihat di tabel.

## Alur

```
home.html → menu "Tenant" → mitra.html → klik kategori → list-brand.html?ca=3
```

Kategori di halaman Tenant hanya memfilter tabel (`?ca=`). Contoh: `list-brand.html?ca=3` menampilkan 8 brand Auto Care.

## Daftar brand (`list-brand.html`)

- Kolom: **No · Nama Brand · Nama Perusahaan · Kategori Brand**
- Pencarian nama brand/perusahaan dan filter kategori (opsional)
- Tanpa paginasi — semua baris ditampilkan (75 brand)
- Tanpa panel enhancement

### Isi kolom Nama Perusahaan

Terisi untuk brand yang terverifikasi, misalnya:

| Brand | Perusahaan |
|---|---|
| KFC | PT Fast Food Indonesia Tbk |
| Excelso | PT Excelso Multi Rasa |
| Roti'O | PT Sebastian Citra Indonesia |
| Dunkin' Donuts | PT Diamond Donuts Internasional |
| Alfamart | PT Sumber Alfaria Trijaya Tbk |
| Indomaret | PT Indomarco Prismatama |
| Bank BCA | PT Bank Central Asia Tbk |

Sisanya ditandai **“—”** dan perlu dilengkapi dari master data kemitraan. Datanya ada di `assets/brands.js` (objek `COMPANY`), tinggal tambah satu baris per brand.

## Data brand

Nama brand & kategori diambil dari `brightspace.pertamina.com/list/brand?Ca=…`:

| Kategori | ca | Jumlah |
|---|---|---|
| Food & Beverage | 1 | 31 |
| Convenience Store (C-Store) | 2 | 11 |
| Auto Care | 3 | 8 |
| Financial Service | 8 | 12 |
| Office | 9 | 1 |
| Other Service | 10 | 12 |
| Advertising / Activation / Fasilitas EBT / Produk Pertamina / UMKM | 5, 6, 13, 65, 66 | 0 (kosong juga di situs asli) |

## Aset

`assets/app.css` (style bersama), `assets/bootstrap-icons.css` + `assets/fonts/` (ikon lokal), `assets/mitra.webp` (hero Tenant), `assets/brand/*.webp` (3 kartu tipe mitra), `assets/mitra/*.webp` (ikon 11 kategori), `assets/BrightSpace.webp`, `assets/spbu.webp`, `assets/list-header.webp`.

`brand-detail.html` versi lama disimpan di `F:\benchmark-nfr\arsip-brand\` (tidak dipakai).

## Deploy

```powershell
powershell -ExecutionPolicy Bypass -File F:\benchmark-nfr\mockups\deploy.ps1
```

Situs: https://chandrapc3000.github.io/brightspace-mockup/
