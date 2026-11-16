import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MagnifyingGlass,
  Plus,
  ClockCounterClockwise,
  Bell,
  Gear,
  Question,
  CaretDown,
  User,
  SignOut
} from '@phosphor-icons/react';

const Header = ({ onLogout }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(() => localStorage.getItem('kios_admin_avatar') || null);
  const navigate = useNavigate();

  // Sinkronisasi foto profil dari localStorage & custom event
  useEffect(() => {
    const syncAvatar = () => {
      setAvatarUrl(localStorage.getItem('kios_admin_avatar') || null);
    };
    window.addEventListener('avatarUpdated', syncAvatar);
    window.addEventListener('storage', syncAvatar);
    return () => {
      window.removeEventListener('avatarUpdated', syncAvatar);
      window.removeEventListener('storage', syncAvatar);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <button className="add-btn" onClick={() => navigate('/barang')} title="Tambah Barang Baru">
          <Plus size={16} weight="bold" />
        </button>
        <ClockCounterClockwise
          size={22}
          color="var(--text-muted)"
          style={{ cursor: 'pointer' }}
          title="Riwayat Aktivitas"
          onClick={() => navigate('/transaksi')}
        />
        <div className="search-bar">
          <MagnifyingGlass size={18} color="var(--text-muted)" />
          <input type="text" placeholder="Pencarian barang, transaksi..." />
        </div>
      </div>

      <div className="header-right">
        {/* User Dropdown */}
        <div className="user-dropdown" onClick={() => setShowProfile(!showProfile)}>
          <span>Admin Zahid</span>
          <CaretDown size={14} />

          {showProfile && (
            <div
              style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                backgroundColor: 'white',
                border: '1px solid var(--border)',
                padding: '8px',
                borderRadius: '10px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                zIndex: 50,
                minWidth: '180px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                onClick={() => {
                  navigate('/profile');
                  setShowProfile(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--text-main)',
                  cursor: 'pointer',
                  fontSize: '13.5px',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  transition: 'background-color 0.15s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <User size={16} color="var(--primary)" />
                <span>Profil Saya</span>
              </div>

              <div
                onClick={() => {
                  navigate('/settings');
                  setShowProfile(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--text-main)',
                  cursor: 'pointer',
                  fontSize: '13.5px',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  transition: 'background-color 0.15s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f1f5f9')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <Gear size={16} color="var(--primary)" />
                <span>Pengaturan Sistem</span>
              </div>

              <div style={{ height: '1px', backgroundColor: 'var(--border)', margin: '4px 0' }}></div>

              <div
                onClick={() => {
                  setShowProfile(false);
                  onLogout();
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--red)',
                  cursor: 'pointer',
                  fontSize: '13.5px',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  transition: 'background-color 0.15s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fee2e2')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <SignOut size={16} />
                <span>Keluar Sistem</span>
              </div>
            </div>
          )}
        </div>

        <Bell
          size={22}
          style={{ cursor: 'pointer' }}
          title="Notifikasi & Peringatan Stok"
          onClick={() => navigate('/settings')}
        />
        <Gear
          size={22}
          style={{ cursor: 'pointer' }}
          title="Pengaturan"
          onClick={() => navigate('/settings')}
        />
        <Question
          size={22}
          style={{ cursor: 'pointer' }}
          title="Pusat Bantuan"
          onClick={() => alert('Sistem Informasi Kios UMKM v1.0. Dokumentasi & Panduan Admin.')}
        />
        <div
          className="avatar"
          style={{ cursor: 'pointer', overflow: 'hidden', padding: 0 }}
          title="Lihat Profil"
          onClick={() => navigate('/profile')}
        >
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Avatar Admin"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            'Z'
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
