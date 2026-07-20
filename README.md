# Konservasi Penyu Pulau Pramuka

Website informasi dan reservasi kunjungan untuk konservasi penyu di Pulau
Pramuka. Proyek ini menggunakan Next.js App Router dan tidak memerlukan
database.

## Prerequisites

- Node.js `>=22.13.0`

## Menjalankan secara lokal

```bash
npm install
npm run dev
npm run build
```

## Deploy ke Vercel

1. Import repository ini di Vercel.
2. Pilih framework preset **Next.js**.
3. Biarkan Build Command (`next build`) dan Output Directory pada nilai default.
4. Deploy tanpa environment variable atau database tambahan.

Formulir reservasi menampilkan konfirmasi di sisi browser dan tidak menyimpan
data ke server.
