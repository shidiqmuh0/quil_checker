const fs = require('fs');
const path = require('path');

// Lokasi folder yang berisi file .hex
const folderPath = './quil';

// Fungsi untuk mendapatkan 114 karakter terakhir dari file .hex dan menambahkan prefix "0x"
function getHexWithPrefix(filePath) {
    const data = fs.readFileSync(filePath, 'utf8').trim();
    const last114Chars = data.slice(-114);
    return `0x${last114Chars}`;
}

// Baca file voucher referensi
const quilData = new Set(JSON.parse(fs.readFileSync('ceremony_vouchers.json', 'utf8')));

// Array untuk menyimpan voucher yang valid (288 karakter)
const finalValidVouchers = [];

// Baca semua file dalam folder quil
const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.hex'));

files.forEach(file => {
    const filePath = path.join(folderPath, file);
    const hexData = fs.readFileSync(filePath, 'utf8').trim();

    // Ambil 114 karakter terakhir dari hexData dengan prefix "0x"
    const hexEndingWithPrefix = `0x${hexData.slice(-114)}`;

    // Cek apakah voucher 114 karakter dengan prefix "0x" ada di dalam ceremony_vouchers.json
    if (quilData.has(hexEndingWithPrefix)) {
        finalValidVouchers.push(hexData); // Tambahkan seluruh data 288 karakter jika cocok
    }
});

// Simpan hasil akhir ke final-output.json
fs.writeFileSync('final-output.json', JSON.stringify(finalValidVouchers, null, 2));
console.log("Proses selesai! File final-output.json berhasil dibuat dengan voucher yang valid.");
