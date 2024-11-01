# Quilbrium Voucher Validator

Script ini digunakan untuk memvalidasi voucher dari file .hex yang ada di folder `quil` dengan membandingkannya pada data referensi di `ceremony_vouchers.json`. Jika voucher ditemukan valid, maka voucher tersebut akan disimpan ke dalam file `final-output.json`.

## Persiapan

1. **Unduh Data Referensi**
   - Unduh file `ceremony_vouchers.json` dari URL berikut:
     [https://source.quilibrium.com/quilibrium/ceremonyclient/-/raw/main/node/execution/intrinsics/token/ceremony_vouchers.json](https://source.quilibrium.com/quilibrium/ceremonyclient/-/raw/main/node/execution/intrinsics/token/ceremony_vouchers.json).
   - Simpan file ini di dalam folder `quilbrium` bersama dengan file `index.js`.

2. **Struktur Folder**
   - Buat folder baru bernama `quilbrium`.
   - Di dalam folder `quilbrium`, buat file `index.js` dan salin kode dari `index.js` (lihat kode pada bagian selanjutnya).
   - Buat folder bernama `quil` di dalam `quilbrium`, dan masukkan file `.hex` yang ingin divalidasi ke dalam folder `quil`.

3. **Struktur Folder:**
   ```
   quilbrium
   ├── ceremony_vouchers.json
   ├── index.js
   └── quil
       ├── <file1>.hex
       ├── <file2>.hex
       └── ...
   ```

## Langkah-Langkah

1. **Instalasi dan Eksekusi**
   - Pastikan Anda berada di dalam folder `quilbrium`.
   - Buka terminal, jalankan perintah berikut:
     ```bash
     node index.js
     ```

2. **Output**
   - Setelah eksekusi, file `final-output.json` akan dibuat di dalam folder `quilbrium`. File ini berisi daftar voucher yang valid.

## Hasil Akhir

- File `final-output.json` akan berisi semua voucher valid dalam format JSON setelah proses validasi selesai.
