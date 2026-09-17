/* ===== PENGATURAN DASAR ===== */
:root {
    --primer: #2563eb;
    --sukses: #10b981;
    --bahaya: #ef4444;
    --gelap: #1e293b;
    --abu: #64748b;
    --terang: #f8fafc;
    --putih: #ffffff;
    --bayangan: 0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
    --bayangan-lembut: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
    --radius: 16px;
    --radius-kecil: 10px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
}

body {
    background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%);
    min-height: 100vh;
    padding: 20px 16px;
}

.container {
    max-width: 520px;
    margin: 0 auto;
}

/* ===== JUDUL APLIKASI ===== */
.app-header {
    text-align: center;
    margin-bottom: 28px;
}

.app-header h1 {
    font-size: 24px;
    font-weight: 700;
    color: var(--gelap);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.app-header h1 i {
    color: var(--primer);
}

.subtitle {
    color: var(--abu);
    font-size: 14px;
    margin-top: 4px;
}

/* ===== KOTAK SALDO UTAMA ===== */
.saldo-card {
    background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
    color: white;
    padding: 30px 24px;
    border-radius: var(--radius);
    box-shadow: 0 15px 30px rgba(37, 99, 235, 0.25);
    margin-bottom: 24px;
    text-align: center;
    transition: transform 0.3s ease;
}

.saldo-card:hover {
    transform: translateY(-3px);
}

.saldo-label {
    font-size: 15px;
    opacity: 0.9;
    margin-bottom: 8px;
}

.saldo-card h2 {
    font-size: 36px;
    font-weight: 800;
    margin-bottom: 24px;
    letter-spacing: 0.5px;
}

.saldo-stats {
    display: flex;
    justify-content: space-around;
    gap: 12px;
}

.stat {
    flex: 1;
    background: rgba(255, 255, 255, 0.18);
    padding: 14px 12px;
    border-radius: var(--radius-kecil);
    backdrop-filter: blur(10px);
}

.stat i {
    font-size: 18px;
    margin-bottom: 6px;
    display: inline-block;
}

.stat.masuk i { color: #86efac; }
.stat.keluar i { color: #fca5a5; }

.stat span {
    display: block;
    font-size: 12px;
    opacity: 0.85;
    margin-bottom: 4px;
}

.stat strong {
    font-size: 15px;
    display: block;
}

/* ===== KOTAK UMUM ===== */
.card {
    background: var(--putih);
    border-radius: var(--radius);
    padding: 26px;
    margin-bottom: 20px;
    box-shadow: var(--bayangan-lembut);
    transition: box-shadow 0.3s ease;
}

.card:hover {
    box-shadow: var(--bayangan);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
}

.card h3 {
    font-size: 18px;
    color: var(--gelap);
    display: flex;
    align-items: center;
    gap: 8px;
}

.card h3 i {
    color: var(--primer);
}

/* ===== FORM INPUT ===== */
.form-row {
    margin-bottom: 14px;
}

form select,
form input {
    width: 100%;
    padding: 14px 16px;
    border: 2px solid #e2e8f0;
    border-radius: var(--radius-kecil);
    font-size: 15px;
    transition: border-color 0.3s, box-shadow 0.3s;
    background: #fcfdfe;
}

form select:focus,
form input:focus {
    outline: none;
    border-color: var(--primer);
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.btn-primary {
    width: 100%;
    padding: 14px;
    background: linear-gradient(90deg, var(--primer), #3b82f6);
    color: white;
    border: none;
    border-radius: var(--radius-kecil);
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
}

.btn-primary:active {
    transform: translateY(0);
}

/* ===== DAFTAR TRANSAKSI ===== */
.btn-icon {
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 16px;
    padding: 6px 10px;
    border-radius: 8px;
    transition: background 0.2s;
}

.btn-icon.danger {
    color: var(--abu);
}

.btn-icon.danger:hover {
    background: #fee2e2;
    color: var(--bahaya);
}

ul {
    list-style: none;
}

li {
    padding: 16px;
    border-radius: var(--radius-kecil);
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    animation: muncul 0.3s ease forwards;
    opacity: 0;
}

@keyframes muncul {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

li.pemasukan {
    background: linear-gradient(90deg, #f0fdf4, #dcfce7);
    border-left: 4px solid var(--sukses);
}

li.pengeluaran {
    background: linear-gradient(90deg, #fef2f2, #fee2e2);
    border-left: 4px solid var(--bahaya);
}

.isi-transaksi strong {
    display: block;
    color: var(--gelap);
    font-size: 15px;
    margin-bottom: 2px;
}

.isi-transaksi span {
    font-size: 14px;
    color: var(--sukses);
    font-weight: 600;
}

.pengeluaran .isi-transaksi span {
    color: var(--bahaya);
}

.hapus-item {
    background: transparent;
    border: none;
    color: #cbd5e1;
    font-size: 20px;
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
}

.hapus-item:hover {
    background: #fecaca;
    color: var(--bahaya);
}

.empty-state {
    flex-direction: column;
    gap: 12px;
    padding: 40px 20px;
    color: var(--abu);
    text-align: center;
    border: none;
    animation: none;
    opacity: 1;
}

.empty-state i {
    font-size: 42px;
    color: #cbd5e1;
}

.empty-state p {
    font-size: 14px;
    line-height: 1.5;
}
