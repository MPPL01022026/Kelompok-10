import { ChartBar, Printer, Money, CalendarBlank } from '@phosphor-icons/react';

const LaporanTransaksi = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="page-content" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="print-hide">
        <div>
          <h2 style={{ marginBottom: '4px' }}>Laporan Transaksi</h2>
          <p className="text-muted">Ringkasan perputaran barang bulan ini.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-secondary">
            <CalendarBlank size={16} /> Bulan Ini
          </button>
          <button className="btn-primary" onClick={handlePrint}>
            <Printer size={16} /> Cetak Laporan
          </button>
        </div>
      </div>

      <div className="print-only">
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>LAPORAN TRANSAKSI KIOS IQBAL</h2>
      </div>

      <div className="cards-grid print-hide" style={{ marginBottom: '8px' }}>
        <div className="stat-card" style={{ padding: '24px' }}>
          <div className="stat-icon" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}>
            <Money size={24} weight="fill" />
          </div>
          <div className="stat-details">
            <h3>Total Penjualan</h3>
            <p style={{ fontSize: '24px' }}>Rp 4.250<span>.000</span></p>
          </div>
        </div>
        <div className="stat-card" style={{ padding: '24px' }}>
          <div className="stat-icon" style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', color: 'var(--primary)' }}>
            <ChartBar size={24} weight="fill" />
          </div>
          <div className="stat-details">
            <h3>Barang Terjual</h3>
            <p style={{ fontSize: '24px' }}>145 <span>Item</span></p>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Bulan</th>
              <th>Total Masuk</th>
              <th>Total Keluar</th>
              <th>Nilai Transaksi</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Oktober 2026</strong> (Berjalan)</td>
              <td>45 Item</td>
              <td>32 Item</td>
              <td>Rp 850.000</td>
              <td><span className="status-badge status-in">Positif</span></td>
            </tr>
            <tr>
              <td><strong>September 2026</strong></td>
              <td>120 Item</td>
              <td>145 Item</td>
              <td>Rp 4.250.000</td>
              <td><span className="status-badge status-in">Positif</span></td>
            </tr>
            <tr>
              <td><strong>Agustus 2026</strong></td>
              <td>200 Item</td>
              <td>180 Item</td>
              <td>Rp 5.100.000</td>
              <td><span className="status-badge status-in">Positif</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="print-only" style={{ marginTop: '40px', textAlign: 'right' }}>
        <p>Mengetahui,</p>
        <br/><br/><br/>
        <p><strong>Admin Zahid</strong></p>
      </div>
    </div>
  );
};

export default LaporanTransaksi;
