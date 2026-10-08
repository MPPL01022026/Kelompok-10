import { CheckCircle, CaretDown, Package, WarningCircle } from '@phosphor-icons/react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dash-row">
        <div className="sales-activity">
          <div className="section-title">Aktivitas Penjualan</div>
          <div className="sa-boxes">
            <div className="sa-box">
              <div className="sa-val blue">228</div>
              <div className="sa-unit">Jml</div>
              <div className="sa-label"><CheckCircle size={14} weight="regular"/> AKAN DIKEMAS</div>
            </div>
            <div className="sa-box">
              <div className="sa-val red">6</div>
              <div className="sa-unit">Pkt</div>
              <div className="sa-label"><CheckCircle size={14} weight="regular"/> AKAN DIKIRIM</div>
            </div>
            <div className="sa-box">
              <div className="sa-val green">10</div>
              <div className="sa-unit">Pkt</div>
              <div className="sa-label"><CheckCircle size={14} weight="regular"/> AKAN DIANTAR</div>
            </div>
            <div className="sa-box">
              <div className="sa-val blue">474</div>
              <div className="sa-unit">Jml</div>
              <div className="sa-label"><CheckCircle size={14} weight="regular"/> AKAN DITAGIH</div>
            </div>
          </div>
        </div>
        <div className="inventory-summary">
          <div className="section-title">Ringkasan Inventaris</div>
          <div className="is-item">
            <span className="is-label">JUMLAH DI TANGAN</span>
            <span className="is-val">10.458</span>
          </div>
          <div className="is-item">
            <span className="is-label">JUMLAH AKAN DITERIMA</span>
            <span className="is-val">168</span>
          </div>
        </div>
      </div>

      <div className="dash-row">
        <div className="product-details">
          <div className="section-title">Detail Produk</div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <div className="pd-row red">
                <span className="pd-label">Stok Menipis</span>
                <span className="pd-val">3</span>
              </div>
              <div className="pd-row">
                <span className="pd-label">Grup Barang</span>
                <span className="pd-val">39</span>
              </div>
              <div className="pd-row">
                <span className="pd-label">Semua Barang</span>
                <span className="pd-val">190</span>
              </div>
              <div className="pd-row red">
                <span className="pd-label">Belum Dikonfirmasi <WarningCircle size={14}/></span>
                <span className="pd-val">121</span>
              </div>
            </div>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
              <div className="donut-chart">
                <div className="donut-inner">71%</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="top-selling">
          <div className="section-title">
            <span>Barang Terlaris</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)', textTransform: 'none', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontWeight: 500 }}>Tahun Lalu <CaretDown size={14}/></span>
          </div>
          <div className="ts-items">
            <div className="ts-item">
              <div className="ts-img"><Package size={48} color="#f59e0b" weight="fill"/></div>
              <div className="ts-name">Kain Katun Premium...</div>
              <div className="ts-val">171 <span style={{fontSize:'13px', fontWeight:'normal'}}>pcs</span></div>
            </div>
            <div className="ts-item">
              <div className="ts-img"><Package size={48} color="#3b82f6" weight="fill"/></div>
              <div className="ts-name">Setelan Baju Bayi...</div>
              <div className="ts-val">45 <span style={{fontSize:'13px', fontWeight:'normal'}}>set</span></div>
            </div>
            <div className="ts-item" style={{ border: 'none', background: 'transparent' }}>
              <div style={{ color: 'var(--primary)', fontSize: '14px', display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontWeight: 600 }}>+ 3 Lainnya</div>
            </div>
          </div>
        </div>
      </div>

      <div className="dash-row">
        <div className="purchase-order">
          <div className="section-title">
            <span>Pesanan Pembelian</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)', textTransform: 'none', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', fontWeight: 500 }}>Bulan Ini <CaretDown size={14}/></span>
          </div>
          <div className="po-content">
            <div className="po-label">Jumlah Dipesan</div>
            <div className="po-val">652.00</div>
          </div>
        </div>
        
        <div className="sales-order">
          <div className="section-title">Pesanan Penjualan</div>
          <table className="so-table">
            <thead>
              <tr>
                <th>Saluran</th>
                <th>Draf</th>
                <th>Dikonfirmasi</th>
                <th>Dikemas</th>
                <th>Dikirim</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Penjualan Langsung</td>
                <td>0</td>
                <td>50</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
