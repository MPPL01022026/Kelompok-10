import { NavLink } from 'react-router-dom';
import { House, Package, ShoppingCart, Bag, Plug, ChartBar, FileText, CaretRight, BookBookmark, SignOut } from '@phosphor-icons/react';

const Sidebar = ({ onLogout }) => {
  return (
    <aside className="sidebar">
        <div className="brand">
            <BookBookmark weight="fill" size={28} color="var(--primary)" />
            <h2>Sistem Kios</h2>
        </div>
        <nav className="nav-menu">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
                <div className="nav-link-content">
                    <House size={20} />
                    <span>Beranda</span>
                </div>
            </NavLink>
            <NavLink to="/barang" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <div className="nav-link-content">
                    <Package size={20} />
                    <span>Inventaris</span>
                </div>
                <CaretRight size={14} />
            </NavLink>
            <NavLink to="/sales" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <div className="nav-link-content">
                    <ShoppingCart size={20} />
                    <span>Penjualan</span>
                </div>
                <CaretRight size={14} />
            </NavLink>
            <NavLink to="/purchases" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <div className="nav-link-content">
                    <Bag size={20} />
                    <span>Pembelian</span>
                </div>
                <CaretRight size={14} />
            </NavLink>
            <NavLink to="/integrations" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <div className="nav-link-content">
                    <Plug size={20} />
                    <span>Integrasi</span>
                </div>
            </NavLink>
            <NavLink to="/reports" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <div className="nav-link-content">
                    <ChartBar size={20} />
                    <span>Laporan</span>
                </div>
            </NavLink>
            <NavLink to="/documents" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                <div className="nav-link-content">
                    <FileText size={20} />
                    <span>Dokumen</span>
                </div>
            </NavLink>
            
            <a href="#" onClick={(e) => { e.preventDefault(); onLogout(); }} className="nav-link logout" style={{ marginTop: 'auto' }}>
                <div className="nav-link-content">
                    <SignOut size={20} />
                    <span>Keluar</span>
                </div>
            </a>
        </nav>
    </aside>
  );
};

export default Sidebar;
