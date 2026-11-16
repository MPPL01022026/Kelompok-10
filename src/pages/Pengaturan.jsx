import { useState } from 'react';
import {
  Storefront,
  Bell,
  Sliders,
  Database,
  FloppyDisk,
  CheckCircle,
  WarningCircle,
  ArrowsClockwise,
  Check,
  Code,
  ShieldCheck,
  Receipt,
  Printer
} from '@phosphor-icons/react';

const INITIAL_STORE_SETTINGS = {
  storeName: 'Sistem Kios UMKM Zahid',
  storeSlogan: 'Mitra Kebutuhan Pokok & Sembako Terpercaya',
  storeAddress: 'Jl. Veteran No. 45, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145',
  storePhone: '0812-3456-7890',
  storeEmail: 'operasional@kiosumkm.id',
  receiptFooter: 'Terima kasih telah berbelanja di Kios UMKM! Barang yang sudah dibeli tidak dapat ditukar kecuali ada perjanjian.',
  currency: 'IDR (Rp)',
  dateFormat: 'DD/MM/YYYY',
  receiptPaperSize: '58mm'
};

const INITIAL_INVENTORY_SETTINGS = {
  minStockAlert: 10,
  enableStockAlert: true,
  enableDailySummary: true,
  enableExpiryWarning: true,
  expiryDaysAlert: 30,
  autoDeductStockOnSale: true
};

const INITIAL_API_SETTINGS = {
  apiBaseUrl: 'http://localhost:8000/api',
  apiVersion: 'v1',
  environment: 'development',
  apiTimeout: 5000,
  enableMockFallback: true
};

const Pengaturan = () => {
  const [activeTab, setActiveTab] = useState('store'); // 'store' | 'inventory' | 'receipt' | 'backend'
  const [storeSettings, setStoreSettings] = useState(INITIAL_STORE_SETTINGS);
  const [inventorySettings, setInventorySettings] = useState(INITIAL_INVENTORY_SETTINGS);
  const [apiSettings, setApiSettings] = useState(INITIAL_API_SETTINGS);

  // Alert State
  const [alert, setAlert] = useState(null);

  // Backend Test Ping State
  const [pingStatus, setPingStatus] = useState(null); // 'testing' | 'connected' | 'mock' | 'error'

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  const handleStoreChange = (e) => {
    const { name, value } = e.target;
    setStoreSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleInventoryChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInventorySettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : Number(value)
    }));
  };

  const handleApiChange = (e) => {
    const { name, value, type, checked } = e.target;
    setApiSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSaveStore = (e) => {
    e.preventDefault();
    showAlert('success', 'Pengaturan informasi kios berhasil disimpan.');
  };

  const handleSaveInventory = (e) => {
    e.preventDefault();
    showAlert('success', 'Preferensi ambang batas stok inventaris diperbarui.');
  };

  const handleSaveApi = (e) => {
    e.preventDefault();
    showAlert('success', 'Konfigurasi koneksi backend API berhasil disimpan.');
  };

  const handleTestConnection = () => {
    setPingStatus('testing');
    setTimeout(() => {
      // Mock result
      setPingStatus('mock');
      showAlert('success', 'Uji koneksi selesai: Backend saat ini berjalan dalam mode Mock Client (Frontend Siap API).');
    }, 800);
  };

  return (
    <div className="page-content">
      {/* Toast Alert */}
      {alert && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            right: '24px',
            backgroundColor: alert.type === 'success' ? '#10b981' : '#ef4444',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '10px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            zIndex: 1000,
            fontSize: '14px',
            fontWeight: '600'
          }}
        >
          {alert.type === 'success' ? <CheckCircle size={20} weight="bold" /> : <WarningCircle size={20} weight="bold" />}
          <span>{alert.message}</span>
        </div>
      )}

      {/* Header Halaman */}
      <div className="page-header">
        <div className="page-header-title">
          <h2>Pengaturan Sistem</h2>
          <p className="page-header-subtitle">
            Konfigurasi profil kios UMKM, parameter inventaris gudang, struk kasir, dan integrasi backend API.
          </p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          borderBottom: '1px solid var(--border)',
          paddingBottom: '2px',
          flexWrap: 'wrap'
        }}
      >
        <button
          onClick={() => setActiveTab('store')}
          style={{
            padding: '10px 18px',
            border: 'none',
            background: 'transparent',
            borderBottom: activeTab === 'store' ? '3px solid var(--primary)' : '3px solid transparent',
            color: activeTab === 'store' ? 'var(--primary)' : 'var(--text-muted)',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: '0.2s'
          }}
        >
          <Storefront size={18} weight={activeTab === 'store' ? 'bold' : 'regular'} /> Informasi Kios
        </button>

        <button
          onClick={() => setActiveTab('inventory')}
          style={{
            padding: '10px 18px',
            border: 'none',
            background: 'transparent',
            borderBottom: activeTab === 'inventory' ? '3px solid var(--primary)' : '3px solid transparent',
            color: activeTab === 'inventory' ? 'var(--primary)' : 'var(--text-muted)',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: '0.2s'
          }}
        >
          <Bell size={18} weight={activeTab === 'inventory' ? 'bold' : 'regular'} /> Peringatan Stok
        </button>

        <button
          onClick={() => setActiveTab('receipt')}
          style={{
            padding: '10px 18px',
            border: 'none',
            background: 'transparent',
            borderBottom: activeTab === 'receipt' ? '3px solid var(--primary)' : '3px solid transparent',
            color: activeTab === 'receipt' ? 'var(--primary)' : 'var(--text-muted)',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: '0.2s'
          }}
        >
          <Receipt size={18} weight={activeTab === 'receipt' ? 'bold' : 'regular'} /> Format & Struk
        </button>

        <button
          onClick={() => setActiveTab('backend')}
          style={{
            padding: '10px 18px',
            border: 'none',
            background: 'transparent',
            borderBottom: activeTab === 'backend' ? '3px solid var(--primary)' : '3px solid transparent',
            color: activeTab === 'backend' ? 'var(--primary)' : 'var(--text-muted)',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: '0.2s'
          }}
        >
          <Database size={18} weight={activeTab === 'backend' ? 'bold' : 'regular'} /> Konfigurasi Backend & API
        </button>
      </div>

      {/* Tab 1: Informasi Toko / Kios */}
      {activeTab === 'store' && (
        <div
          style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid var(--border)',
            padding: '28px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>
              Identitas Kios & Kontak Operasional
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Data ini ditampilkan pada kop laporan keuangan, cetakan transaksi barang, dan faktur pembelian/penjualan.
            </p>
          </div>

          <form onSubmit={handleSaveStore} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label>Nama Kios / Usaha UMKM</label>
                <input
                  type="text"
                  name="storeName"
                  value={storeSettings.storeName}
                  onChange={handleStoreChange}
                  className="form-input"
                  style={{ paddingLeft: '16px' }}
                  required
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label>Slogan / Keterangan Singkat</label>
                <input
                  type="text"
                  name="storeSlogan"
                  value={storeSettings.storeSlogan}
                  onChange={handleStoreChange}
                  className="form-input"
                  style={{ paddingLeft: '16px' }}
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label>Nomor Telepon / WhatsApp Resmi</label>
                <input
                  type="text"
                  name="storePhone"
                  value={storeSettings.storePhone}
                  onChange={handleStoreChange}
                  className="form-input"
                  style={{ paddingLeft: '16px' }}
                  required
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label>Email Resmi Operasional</label>
                <input
                  type="email"
                  name="storeEmail"
                  value={storeSettings.storeEmail}
                  onChange={handleStoreChange}
                  className="form-input"
                  style={{ paddingLeft: '16px' }}
                  required
                />
              </div>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label>Alamat Lengkap Toko / Gudang</label>
              <textarea
                name="storeAddress"
                rows="2"
                value={storeSettings.storeAddress}
                onChange={handleStoreChange}
                className="form-input"
                style={{ padding: '12px 16px', resize: 'vertical' }}
                required
              />
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label>Catatan Kaki Struk / Faktur</label>
              <textarea
                name="receiptFooter"
                rows="2"
                value={storeSettings.receiptFooter}
                onChange={handleStoreChange}
                className="form-input"
                style={{ padding: '12px 16px', resize: 'vertical' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setStoreSettings(INITIAL_STORE_SETTINGS)}
              >
                Reset Default
              </button>
              <button type="submit" className="btn-primary">
                <FloppyDisk size={18} weight="bold" /> Simpan Informasi Kios
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tab 2: Peringatan Stok */}
      {activeTab === 'inventory' && (
        <div
          style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid var(--border)',
            padding: '28px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
            maxWidth: '800px'
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>
              Pengaturan Ambang Batas Stok & Notifikasi
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Tentukan kapan sistem harus memberikan sinyal peringatan kepada admin ketika stok barang menipis di gudang.
            </p>
          </div>

          <form onSubmit={handleSaveInventory} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label>Batas Peringatan Stok Menipis (Unit/Pcs)</label>
                <input
                  type="number"
                  min="1"
                  max="500"
                  name="minStockAlert"
                  value={inventorySettings.minStockAlert}
                  onChange={handleInventoryChange}
                  className="form-input"
                  style={{ paddingLeft: '16px' }}
                  required
                />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
                  Barang dengan sisa stok ≤ angka ini akan ditandai dengan badge merah di menu Data Barang & Dashboard.
                </span>
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label>Hari Sebelum Peringatan Kadaluarsa</label>
                <input
                  type="number"
                  min="5"
                  max="180"
                  name="expiryDaysAlert"
                  value={inventorySettings.expiryDaysAlert}
                  onChange={handleInventoryChange}
                  className="form-input"
                  style={{ paddingLeft: '16px' }}
                  required
                />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
                  Jumlah hari sebelum tanggal expired untuk memunculkan reminder sortir sembako.
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  name="enableStockAlert"
                  checked={inventorySettings.enableStockAlert}
                  onChange={handleInventoryChange}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }}
                />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>Aktifkan Indikator Stok Kritis di Dashboard</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Menampilkan widget kartu peringatan cepat saat login.</div>
                </div>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  name="autoDeductStockOnSale"
                  checked={inventorySettings.autoDeductStockOnSale}
                  onChange={handleInventoryChange}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }}
                />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>Otomatis Kurangi Stok Saat Penjualan Dicatat</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Sinkronisasi otomatis antara modul transaksi penjualan dan kuantitas stok barang gudang.</div>
                </div>
              </label>

              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  name="enableDailySummary"
                  checked={inventorySettings.enableDailySummary}
                  onChange={handleInventoryChange}
                  style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }}
                />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>Rekap Ringkasan Harian Masuk/Keluar</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Mengelompokkan transaksi per tanggal pada halaman Laporan.</div>
                </div>
              </label>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setInventorySettings(INITIAL_INVENTORY_SETTINGS)}
              >
                Kembalikan Default
              </button>
              <button type="submit" className="btn-primary">
                <FloppyDisk size={18} weight="bold" /> Simpan Pengaturan Stok
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tab 3: Format & Struk */}
      {activeTab === 'receipt' && (
        <div
          style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid var(--border)',
            padding: '28px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
            maxWidth: '800px'
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>
              Format Cetak Dokumen & Struk Kasir
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Sesuaikan tata letak cetak dokumen dengan printer kasir termal atau printer kantor yang Anda gunakan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label>Jenis & Ukuran Kertas Struk Kasir</label>
              <select
                name="receiptPaperSize"
                value={storeSettings.receiptPaperSize}
                onChange={handleStoreChange}
                className="form-input"
                style={{ paddingLeft: '16px' }}
              >
                <option value="58mm">Kertas Termal 58mm (Kasir Portabel)</option>
                <option value="80mm">Kertas Termal 80mm (Printer Kasir Meja POS)</option>
                <option value="A4">Kertas Standar A4 / Folio (Invoice Laporan)</option>
              </select>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label>Format Mata Uang</label>
              <select
                name="currency"
                value={storeSettings.currency}
                onChange={handleStoreChange}
                className="form-input"
                style={{ paddingLeft: '16px' }}
              >
                <option value="IDR (Rp)">IDR (Rupiah Indonesia - Rp)</option>
                <option value="USD ($)">USD (US Dollar - $)</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: '24px', padding: '20px', background: '#f8fafc', borderRadius: '12px', border: '1px dashed var(--border)' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Printer size={18} /> Simulasi Pratinjau Tampilan Header Struk:
            </div>
            <div style={{ maxWidth: '280px', margin: '0 auto', background: 'white', padding: '16px', borderRadius: '8px', border: '1px solid #cbd5e1', fontFamily: 'monospace', fontSize: '12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{storeSettings.storeName}</div>
              <div style={{ fontSize: '10px', color: '#64748b', marginTop: '2px' }}>{storeSettings.storeSlogan}</div>
              <div style={{ fontSize: '10px', marginTop: '4px' }}>{storeSettings.storeAddress}</div>
              <div style={{ fontSize: '10px', marginTop: '2px' }}>Telp: {storeSettings.storePhone}</div>
              <div style={{ borderTop: '1px dashed #94a3b8', margin: '8px 0' }}></div>
              <div style={{ fontSize: '11px', textAlign: 'left' }}>No: TRX-20261116-001</div>
              <div style={{ fontSize: '11px', textAlign: 'left' }}>Kasir: Admin Zahid</div>
              <div style={{ borderTop: '1px dashed #94a3b8', margin: '8px 0' }}></div>
              <div style={{ fontSize: '10px', fontStyle: 'italic', marginTop: '6px' }}>{storeSettings.receiptFooter}</div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <button
              type="button"
              className="btn-primary"
              onClick={() => showAlert('success', 'Preferensi cetak struk kasir berhasil disimpan!')}
            >
              <FloppyDisk size={18} weight="bold" /> Simpan Pengaturan Cetak
            </button>
          </div>
        </div>
      )}

      {/* Tab 4: Konfigurasi Backend & API (Spesial untuk Developer Backend) */}
      {activeTab === 'backend' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              background: 'white',
              borderRadius: '16px',
              border: '1px solid var(--border)',
              padding: '28px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>
                    Konfigurasi REST API Server Backend
                  </h4>
                  <span className="status-badge badge-blue">
                    <Code size={14} weight="bold" /> Untuk Tim Backend
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  Hubungkan antarmuka frontend ini ke server backend Anda (Express.js, Laravel, PHP Native, FastAPI, dll.).
                </p>
              </div>

              <button
                type="button"
                className="btn-secondary"
                onClick={handleTestConnection}
                disabled={pingStatus === 'testing'}
              >
                <ArrowsClockwise size={16} className={pingStatus === 'testing' ? 'spin' : ''} />
                {pingStatus === 'testing' ? 'Menguji Koneksi...' : 'Uji Koneksi Backend (Ping)'}
              </button>
            </div>

            {/* Status Koneksi Card */}
            <div
              style={{
                padding: '16px 20px',
                borderRadius: '12px',
                backgroundColor: pingStatus === 'mock' ? '#f0fdf4' : '#f8fafc',
                border: pingStatus === 'mock' ? '1px solid #bbf7d0' : '1px solid var(--border)',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: pingStatus === 'mock' ? '#16a34a' : '#f59e0b',
                    boxShadow: pingStatus === 'mock' ? '0 0 0 3px #bbf7d0' : 'none'
                  }}
                />
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>
                    {pingStatus === 'mock' ? 'Frontend Siap API (Mode Mock State Aktif)' : 'Mode Standby / Siap Integrasi'}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {pingStatus === 'mock'
                      ? 'Frontend berjalan menggunakan local state terstruktur. Siap beralih ke fetch() / axios saat endpoint backend Anda siap.'
                      : 'Klik tombol Uji Koneksi untuk memverifikasi endpoint backend lokal.'}
                  </div>
                </div>
              </div>

              <span className="badge-code" style={{ fontSize: '13px' }}>
                Status: {pingStatus === 'mock' ? '200 OK (Simulated)' : 'Ready for backend'}
              </span>
            </div>

            <form onSubmit={handleSaveApi} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label>Base URL Server Backend</label>
                  <input
                    type="text"
                    name="apiBaseUrl"
                    value={apiSettings.apiBaseUrl}
                    onChange={handleApiChange}
                    className="form-input"
                    style={{ paddingLeft: '16px', fontFamily: 'monospace' }}
                    placeholder="http://localhost:8000/api"
                    required
                  />
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
                    Contoh: http://localhost:8000/api (Laravel) atau http://localhost:5000/api (Express)
                  </span>
                </div>

                <div className="form-group" style={{ margin: 0 }}>
                  <label>Environment Mode</label>
                  <select
                    name="environment"
                    value={apiSettings.environment}
                    onChange={handleApiChange}
                    className="form-input"
                    style={{ paddingLeft: '16px' }}
                  >
                    <option value="development">Development (Lokal)</option>
                    <option value="staging">Staging / Uji Coba</option>
                    <option value="production">Production (Live)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
                <button type="submit" className="btn-primary">
                  <FloppyDisk size={18} weight="bold" /> Simpan Konfigurasi Backend
                </button>
              </div>
            </form>
          </div>

          {/* Tabel Kontrak Endpoint REST API untuk Backend Dev */}
          <div className="table-card">
            <div className="table-toolbar">
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '2px' }}>
                  Daftar Kontrak Endpoint API (Backend Route Reference)
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  Rekomendasi rute API yang perlu dibuat oleh tim backend untuk mendukung seluruh halaman antarmuka ini:
                </p>
              </div>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Metode HTTP</th>
                    <th>Rute Endpoint API</th>
                    <th>Kegunaan / Fitur Frontend</th>
                    <th>Status Kesiapan UI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="status-badge badge-blue">GET / POST</span></td>
                    <td><span className="badge-code">/api/barang</span></td>
                    <td>Ambil daftar inventaris & tambah barang baru (Halaman Data Barang)</td>
                    <td><span className="status-badge badge-green"><Check size={14} weight="bold" /> UI Siap</span></td>
                  </tr>
                  <tr>
                    <td><span className="status-badge badge-amber">PUT / DELETE</span></td>
                    <td><span className="badge-code">/api/barang/:id</span></td>
                    <td>Edit dan hapus data barang gudang</td>
                    <td><span className="status-badge badge-green"><Check size={14} weight="bold" /> UI Siap</span></td>
                  </tr>
                  <tr>
                    <td><span className="status-badge badge-blue">GET / POST</span></td>
                    <td><span className="badge-code">/api/transaksi</span></td>
                    <td>Riwayat transaksi masuk/keluar & catat transaksi</td>
                    <td><span className="status-badge badge-green"><Check size={14} weight="bold" /> UI Siap</span></td>
                  </tr>
                  <tr>
                    <td><span className="status-badge badge-blue">GET / POST</span></td>
                    <td><span className="badge-code">/api/purchases</span></td>
                    <td>Pemesanan barang & penerimaan dari distributor (Modul Pembelian)</td>
                    <td><span className="status-badge badge-green"><Check size={14} weight="bold" /> UI Siap</span></td>
                  </tr>
                  <tr>
                    <td><span className="status-badge badge-purple">GET / PUT</span></td>
                    <td><span className="badge-code">/api/profile</span></td>
                    <td>Ambil & perbarui data profil admin (Halaman Profil)</td>
                    <td><span className="status-badge badge-green"><Check size={14} weight="bold" /> UI Siap</span></td>
                  </tr>
                  <tr>
                    <td><span className="status-badge badge-purple">POST</span></td>
                    <td><span className="badge-code">/api/profile/password</span></td>
                    <td>Ganti kata sandi admin (Keamanan Akun)</td>
                    <td><span className="status-badge badge-green"><Check size={14} weight="bold" /> UI Siap</span></td>
                  </tr>
                  <tr>
                    <td><span className="status-badge badge-purple">GET / PUT</span></td>
                    <td><span className="badge-code">/api/settings</span></td>
                    <td>Konfigurasi kios & ambang batas stok (Halaman Pengaturan)</td>
                    <td><span className="status-badge badge-green"><Check size={14} weight="bold" /> UI Siap</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pengaturan;

