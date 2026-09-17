const form = document.getElementById('formTransaksi');
const daftarTransaksi = document.getElementById('daftarTransaksi');
const elemenSaldo = document.getElementById('saldo');
const elemenTotalMasuk = document.getElementById('totalMasuk');
const elemenTotalKeluar = document.getElementById('totalKeluar');
const btnHapusSemua = document.getElementById('hapusSemua');

let transaksi = JSON.parse(localStorage.getItem('dataTransaksi')) || [];

// Format ke Rupiah
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(angka);
}

// Hitung & tampilkan semua angka
function hitungRingkasan() {
    const totalMasuk = transaksi
        .filter(t => t.jenis === 'pemasukan')
        .reduce((sum, t) => sum + t.jumlah, 0);
    
    const totalKeluar = transaksi
        .filter(t => t.jenis === 'pengeluaran')
        .reduce((sum, t) => sum + t.jumlah, 0);
    
    const saldo = totalMasuk - totalKeluar;

    elemenTotalMasuk.textContent = formatRupiah(totalMasuk);
    elemenTotalKeluar.textContent = formatRupiah(totalKeluar);
    elemenSaldo.textContent = formatRupiah(saldo);
}

// Simpan ke penyimpanan lokal
function simpanData() {
    localStorage.setItem('dataTransaksi', JSON.stringify(transaksi));
}

// Tampilkan daftar transaksi
function tampilkanTransaksi() {
    daftarTransaksi.innerHTML = '';

    if (transaksi.length === 0) {
        daftarTransaksi.innerHTML = `
            <li class="empty-state">
                <i class="fas fa-receipt"></i>
                <p>Belum ada transaksi.<br>Mulai catat keuanganmu sekarang!</p>
            </li>`;
        return;
    }

    // Tampilkan dari yang terbaru
    [...transaksi].reverse().forEach((trx, indeksTerbalik) => {
        const indeksAsli = transaksi.length - 1 - indeksTerbalik;
        const item = document.createElement('li');
        item.className = trx.jenis;
        item.innerHTML = `
            <div class="isi-transaksi">
                <strong>${trx.keterangan}</strong>
                <span>${trx.jenis === 'pemasukan' ? '+' : '-'}${formatRupiah(trx.jumlah)}</span>
            </div>
            <button class="hapus-item" data-index="${indeksAsli}">×</button>
        `;
        daftarTransaksi.appendChild(item);
    });
}

// Tambah transaksi baru
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const jenis = document.getElementById('jenis').value;
    const jumlah = parseFloat(document.getElementById('jumlah').value);
    const keterangan = document.getElementById('keterangan').value.trim();

    transaksi.push({ jenis, jumlah, keterangan });
    simpanData();
    tampilkanTransaksi();
    hitungRingkasan();
    form.reset();
});

// Hapus satu transaksi
daftarTransaksi.addEventListener('click', function(e) {
    if (e.target.classList.contains('hapus-item')) {
        const indeks = parseInt(e.target.dataset.index);
        transaksi.splice(indeks, 1);
        simpanData();
        tampilkanTransaksi();
        hitungRingkasan();
    }
});

// Hapus semua data
btnHapusSemua.addEventListener('click', function() {
    if (confirm('Yakin ingin menghapus SEMUA data transaksi?')) {
        transaksi = [];
        simpanData();
        tampilkanTransaksi();
        hitungRingkasan();
    }
});

// Jalankan saat halaman dibuka
tampilkanTransaksi();
hitungRingkasan();
