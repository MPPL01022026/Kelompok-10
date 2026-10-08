import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import DataBarang from './pages/DataBarang';
import InfoStok from './pages/InfoStok';
import BarangMasukKeluar from './pages/BarangMasukKeluar';
import LaporanTransaksi from './pages/LaporanTransaksi';
import Login from './pages/Login';

// Mock Pages
const PlaceholderPage = ({ title }) => (
  <div className="page-placeholder">
    <h2>{title}</h2>
    <p>Halaman ini sedang dalam tahap pengembangan aktif. Harap periksa kembali nanti.</p>
  </div>
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh', width: '100%' }}>
        <Sidebar onLogout={handleLogout} />
        <main className="main-content">
          <Header onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/barang" element={<DataBarang />} />
            <Route path="/stok" element={<InfoStok />} />
            <Route path="/transaksi" element={<BarangMasukKeluar />} />
            <Route path="/laporan" element={<LaporanTransaksi />} />
            
            <Route path="/sales" element={<PlaceholderPage title="Modul Penjualan" />} />
            <Route path="/purchases" element={<PlaceholderPage title="Modul Pembelian" />} />
            <Route path="/integrations" element={<PlaceholderPage title="Modul Integrasi API" />} />
            <Route path="/reports" element={<LaporanTransaksi />} />
            <Route path="/documents" element={<PlaceholderPage title="Arsip Dokumen" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
