import { Package, Plus, MagnifyingGlass, Funnel, DotsThreeOutlineVertical } from '@phosphor-icons/react';

const DataBarang = () => {
  return (
    <div className="page-content" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ marginBottom: 0 }}>Data Barang</h2>
        <button className="btn-view-all" style={{ backgroundColor: 'var(--primary)', color: 'white', borderColor: 'var(--primary)' }}>
          <Plus size={16} weight="bold" /> Tambah Barang
        </button>
      </div>
      
      <div style={{ display: 'flex', gap: '16px', marginBottom: '8px' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <MagnifyingGlass size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input type="text" placeholder="Cari barang..." style={{ width: '100%', padding: '12px 16px 12px 42px', borderRadius: '10px', border: '1px solid var(--border)', fontSize: '14px', outline: 'none' }} />
        </div>
        <button className="btn-view-all" style={{ backgroundColor: 'white' }}>
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
              <th>Harga Beli</th>
              <th>Harga Jual</th>
              <th>Stok</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'BRG-001', name: 'Beras Ramos 5kg', category: 'Sembako', buy: 'Rp 65.000', sell: 'Rp 70.000', stock: 24 },
              { id: 'BRG-002', name: 'Minyak Goreng Bimoli 2L', category: 'Sembako', buy: 'Rp 35.000', sell: 'Rp 38.000', stock: 15 },
              { id: 'BRG-003', name: 'Gula Pasir 1kg', category: 'Sembako', buy: 'Rp 15.000', sell: 'Rp 17.000', stock: 40 },
              { id: 'BRG-004', name: 'Telur Ayam 1kg', category: 'Sembako', buy: 'Rp 28.000', sell: 'Rp 30.000', stock: 12 },
              { id: 'BRG-005', name: 'Indomie Goreng (Dus)', category: 'Makanan', buy: 'Rp 110.000', sell: 'Rp 120.000', stock: 8 },
            ].map((item, index) => (
              <tr key={index}>
                <td><strong>{item.id}</strong></td>
                <td>{item.name}</td>
                <td><span className="status-badge" style={{ backgroundColor: '#f1f5f9', color: 'var(--text-muted)' }}>{item.category}</span></td>
                <td>{item.buy}</td>
                <td><strong>{item.sell}</strong></td>
                <td>{item.stock}</td>
                <td>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                    <DotsThreeOutlineVertical size={18} weight="fill" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataBarang;
