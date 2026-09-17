// Ambil elemen dari HTML
const form = document.getElementById('formTransaksi');
const daftarTransaksi = document.getElementById('daftarTransaksi');
const elemenSaldo = document.getElementById('saldo');
const btnHapusSemua = document.getElementById('hapusSemua');

// Ambil data dari penyimpanan peramban
let transaksi = JSON.parse(localStorage.getItem('dataTransaksi')) || [];

// Format angka ke Rupiah
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(angka);
}

// Hitung dan tampilkan saldo
function hitungSaldo() {
    const total = transaksi.reduce((sum, trx) => {
        return trx.jenis === 'pemasukan' 
            ? sum + trx.jumlah 
            : sum - trx.jumlah;
    }, 0);
    elemenSaldo.textContent = formatRupiah(total);
}

// Simpan ke penyimpanan lokal
function simpanData() {
    localStorage.setItem('dataTransaksi', JSON.stringify(transaksi));
}

// Tampilkan daftar transaksi
function tampilkanTransaksi() {
    daftarTransaksi.innerHTML = '';

    if (transaksi.length === 0) {
        daftarTransaksi.innerHTML = '<li class="kosong">Belum ada transaksi.</li>';
        return;
    }

    transaksi.forEach((trx, indeks) => {
        const item = document.createElement('li');
        item.className = trx.jenis;
        item.innerHTML = `
            <div>
                <strong>${trx.keterangan}</strong><br>
                <span>${formatRupiah(trx.jumlah)}</span>
            </div>
            <button class="hapus-item" data-index="${indeks}">×</button>
        `;
        daftarTransaksi.appendChild(item);
    });
}

// Tambah transaksi baru
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const jenis = document.getElementById('jenis').value;
    const jumlah = parseFloat(document.getElementById('jumlah').value);
    const keterangan = document.getElementById('keterangan').value;

    transaksi.push({ jenis, jumlah, keterangan });
    simpanData();
    tampilkanTransaksi();
    hitungSaldo();

    // Reset form
    form.reset();
});

// Hapus satu transaksi
daftarTransaksi.addEventListener('click', function(e) {
    if (e.target.classList.contains('hapus-item')) {
        const indeks = parseInt(e.target.dataset.index);
        transaksi.splice(indeks, 1);
        simpanData();
        tampilkanTransaksi();
        hitungSaldo();
    }
});

// Hapus semua data
btnHapusSemua.addEventListener('click', function() {
    if (confirm('Yakin ingin menghapus SEMUA data?')) {
        transaksi = [];
        simpanData();
        tampilkanTransaksi();
        hitungSaldo();
    }
});

// Inisialisasi saat halaman dibuka
tampilkanTransaksi();
hitungSaldo();
