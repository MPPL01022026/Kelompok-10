import { ArrowsLeftRight, ArrowDownLeft, ArrowUpRight, Plus } from '@phosphor-icons/react';

const BarangMasukKeluar = () => {
  return (
    <div className="page-content" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ marginBottom: 0 }}>Transaksi Barang Masuk / Keluar</h2>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn-primary" style={{ backgroundColor: 'var(--success-text)' }}>
            <ArrowDownLeft size={16} weight="bold" /> Barang Masuk
          </button>
          <button className="btn-primary" style={{ backgroundColor: 'var(--danger-text)' }}>
            <ArrowUpRight size={16} weight="bold" /> Barang Keluar
          </button>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID Transaksi</th>
              <th>Tanggal</th>
              <th>Jenis</th>
              <th>Barang</th>
              <th>Jumlah</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>TRX-1092</strong></td>
              <td>08 Okt 2026, 10:30</td>
              <td>
                <span className="status-badge status-out">
                  <ArrowUpRight size={14} weight="bold" /> Keluar
                </span>
              </td>
              <td>Beras Ramos 5kg</td>
              <td><strong>2</strong> Sak</td>
              <td>Terjual ke Toko A</td>
            </tr>
            <tr>
              <td><strong>TRX-1091</strong></td>
              <td>08 Okt 2026, 09:15</td>
              <td>
                <span className="status-badge status-in">
                  <ArrowDownLeft size={14} weight="bold" /> Masuk
                </span>
              </td>
              <td>Minyak Goreng Bimoli 2L</td>
              <td><strong>10</strong> Pcs</td>
              <td>Restok dari Supplier</td>
            </tr>
            <tr>
              <td><strong>TRX-1090</strong></td>
              <td>07 Okt 2026, 16:45</td>
              <td>
                <span className="status-badge status-out">
                  <ArrowUpRight size={14} weight="bold" /> Keluar
                </span>
              </td>
              <td>Gula Pasir 1kg</td>
              <td><strong>5</strong> Kg</td>
              <td>Eceran</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BarangMasukKeluar;
