<<<<<<< HEAD
# Kelompok-10
# 📦 Sistem Informasi Warehouse UMKM

Sistem Informasi Warehouse UMKM merupakan aplikasi berbasis website yang dirancang untuk membantu UMKM dalam mengelola **data barang, stok, transaksi penjualan, dan laporan penjualan** secara lebih terstruktur.

Sistem ini juga menyediakan **dashboard admin** yang dilengkapi dengan statistik dan grafik riwayat penjualan sehingga pemilik UMKM dapat lebih mudah memantau perkembangan dan menganalisis kondisi bisnis.

---

## 🎯 Tujuan

Sistem ini dibuat untuk:

- Mempermudah pengelolaan data barang dan stok.
- Membantu pencatatan transaksi penjualan.
- Menyediakan laporan penjualan secara terstruktur.
- Menampilkan statistik penjualan dalam bentuk grafik.
- Membantu pemilik UMKM dalam memantau dan menganalisis perkembangan bisnis.

---

## ✨ Fitur

### 👤 Admin Dashboard
Dashboard digunakan sebagai pusat pengelolaan sistem dan menampilkan informasi penting mengenai aktivitas penjualan.

### 📦 Manajemen Barang
Admin dapat melakukan:

- Menambahkan data barang.
- Melihat daftar barang.
- Mengubah data barang.
- Menghapus data barang.
- Memantau jumlah stok barang.

### 🛒 Pencatatan Transaksi
Sistem menyediakan fitur untuk mencatat transaksi penjualan sehingga riwayat transaksi dapat tersimpan dengan lebih terstruktur.

### 📊 Statistik Penjualan
Data transaksi ditampilkan dalam bentuk grafik untuk membantu pemilik UMKM melihat perkembangan penjualan dan mengetahui tren bisnis.

### 📋 Laporan Penjualan
Sistem dapat menampilkan rekap data penjualan berdasarkan transaksi yang telah dicatat.

---

## 🗂️ Ruang Lingkup

### In Scope

- Pengelolaan data barang dan stok.
- Pencatatan transaksi penjualan.
- Pembuatan laporan penjualan.
- Dashboard admin dan statistik penjualan.

### Out of Scope

- Sistem pembayaran digital seperti QRIS atau kartu debit.
- Integrasi dengan marketplace atau platform e-commerce.
- Pengelolaan gaji karyawan.

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Kegunaan |
|---|---|
| HTML | Struktur halaman website |
| CSS | Tampilan dan desain website |
| JavaScript | Interaksi dan fungsi pada website |
| PHP | Backend dan proses sistem |
| MySQL | Database sistem |
| Chart.js | Menampilkan grafik statistik penjualan |
| Figma | Perancangan wireframe dan mockup |

---

## 🗄️ Struktur Data

Database sistem menggunakan **MySQL** untuk menyimpan data yang berkaitan dengan warehouse dan penjualan.

Beberapa data utama yang digunakan antara lain:

- **Produk** — menyimpan informasi barang dan stok.
- **Transaksi** — menyimpan riwayat transaksi penjualan.
- **Admin** — menyimpan data pengguna yang memiliki akses untuk mengelola sistem.

---

## 📁 Struktur Project

```text
warehouse-umkm/
│
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
│
├── admin/
│   ├── dashboard/
│   ├── produk/
│   └── transaksi/
│
├── config/
│   └── database.php
│
├── index.php
├── produk.php
├── detail-produk.php
└── README.md
```

> Struktur folder dapat disesuaikan kembali dengan struktur project yang digunakan.

---

## 🚀 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/username/warehouse-umkm.git
```

### 2. Masuk ke Folder Project

```bash
cd warehouse-umkm
```

### 3. Jalankan Web Server

Jika menggunakan **XAMPP**, letakkan folder project di:

```text
C:/xampp/htdocs/
```

Kemudian jalankan:

- Apache
- MySQL

### 4. Membuat Database

Buka **phpMyAdmin**, kemudian buat database baru, misalnya:

```text
warehouse_umkm
```

Import file database `.sql` yang terdapat pada project.

### 5. Konfigurasi Database

Sesuaikan konfigurasi database pada file:

```text
config/database.php
```

Contoh:

```php
$host = "localhost";
$user = "root";
$password = "";
$database = "warehouse_umkm";
```

### 6. Menjalankan Website

Buka browser dan akses:

```text
http://localhost/warehouse-umkm/
```

---

## 📊 Dashboard

Dashboard admin digunakan untuk menampilkan informasi penting seperti:

- Jumlah produk.
- Jumlah stok.
- Jumlah transaksi.
- Riwayat penjualan.
- Grafik statistik penjualan.

Grafik statistik dibuat menggunakan **Chart.js** sehingga data penjualan dapat divisualisasikan dengan lebih mudah.

---

## 🔐 Hak Akses

Sistem memiliki akses khusus untuk **Admin**.

Admin dapat mengelola:

```text
Data Barang
     ↓
Data Stok
     ↓
Transaksi Penjualan
     ↓
Laporan Penjualan
     ↓
Statistik / Grafik
```

---

## 🎨 Perancangan UI/UX

Perancangan antarmuka sistem dibuat menggunakan **Figma** sebelum masuk ke tahap pengembangan.

Perancangan mencakup:

- Wireframe halaman katalog.
- Halaman daftar produk.
- Halaman detail produk.
- Dashboard admin.
- Grafik statistik penjualan.

---

## 🧪 Pengujian

Pengujian dilakukan untuk memastikan setiap fitur sistem dapat berjalan sesuai dengan kebutuhan.

Beberapa fitur yang diuji meliputi:

- Login admin.
- Pengelolaan data produk.
- Pengelolaan stok.
- Pencatatan transaksi.
- Perhitungan dan rekap penjualan.
- Tampilan grafik statistik.
- Koneksi database.

---

## 👥 Pengembang

**Project:** Sistem Informasi Warehouse UMKM  
**Jenis:** Project Akademik  
**Platform:** Website  
**Database:** MySQL

---

## 📌 Status Project

> 🚧 **in-Development**

Project masih dalam tahap pengembangan dan dapat dikembangkan lebih lanjut sesuai dengan kebutuhan UMKM.

---

## 📄 Lisensi

Project ini dibuat untuk keperluan **akademik dan pembelajaran**.

© 2026 Sistem Informasi Warehouse UMKM
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
>>>>>>> f67a90e (App added)
