import { WarningCircle, ArrowRight, Funnel, MagnifyingGlass } from '@phosphor-icons/react';

const InfoStok = () => {
  return (
    <div className="page-content" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ marginBottom: 0 }}>Informasi Stok & Opname</h2>
        <button className="btn-primary">
          Mulai Stok Opname
        </button>
      </div>

      <div className="cards-grid" style={{ marginBottom: '8px' }}>
        <div className="stat-card" style={{ padding: '20px', gap: '16px' }}>
          <div className="stat-icon rose" style={{ width: '48px', height: '48px' }}>
            <WarningCircle size={24} weight="fill" />
          </div>
          <div className="stat-details">
            <h3>Stok Kritis</h3>
            <p style={{ fontSize: '24px' }}>5 <span style={{ fontSize: '14px' }}>Barang</span></p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '16px', marginBottom: '8px' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <MagnifyingGlass size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input type="text" className="form-input" style={{ paddingLeft: '42px' }} placeholder="Cari barang untuk cek stok..." />
        </div>
        <button className="btn-secondary">
          <Funnel size={16} /> Filter
        </button>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Kode</th>
              <th>Nama Barang</th>
              <th>Kategori</th>
              <th>Stok Sistem</th>
              <th>Stok Fisik</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'BRG-002', name: 'Minyak Goreng Bimoli 2L', cat: 'Sembako', sys: 15, phy: 15, status: 'Aman' },
              { id: 'BRG-005', name: 'Indomie Goreng (Dus)', cat: 'Makanan', sys: 8, phy: 8, status: 'Menipis' },
              { id: 'BRG-008', name: 'Tepung Terigu Segitiga Biru', cat: 'Sembako', sys: 3, phy: 3, status: 'Kritis' },
            ].map((item, i) => (
              <tr key={i}>
                <td><strong>{item.id}</strong></td>
                <td>{item.name}</td>
                <td><span className="status-badge">{item.cat}</span></td>
                <td>{item.sys}</td>
                <td>
                  <input type="number" defaultValue={item.phy} className="form-input" style={{ width: '80px', padding: '6px 12px' }} />
                </td>
                <td>
                  <span className={`status-badge ${item.status === 'Kritis' ? 'status-danger' : item.status === 'Menipis' ? 'status-out' : 'status-in'}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  <button className="btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>Sesuaikan</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfoStok;
