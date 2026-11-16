import { useState } from 'react';
import {
  User,
  EnvelopeSimple,
  Phone,
  ShieldCheck,
  CalendarBlank,
  LockKey,
  CheckCircle,
  ClockCounterClockwise,
  FloppyDisk,
  Key,
  DeviceMobile,
  Check,
  WarningCircle,
  Camera
} from '@phosphor-icons/react';

const INITIAL_PROFILE = {
  fullName: 'Admin Zahid',
  username: 'zahid_admin',
  email: 'zahid.admin@kiosumkm.id',
  phone: '0812-3456-7890',
  role: 'Super Admin / Warehouse Manager',
  division: 'Operasional Gudang & Kasir',
  joinedDate: '12 Januari 2025',
  bio: 'Bertanggung jawab atas pengelolaan stok inventaris, pengawasan transaksi masuk/keluar, dan laporan keuangan pergudangan UMKM.',
  avatarUrl: null
};

const LOGIN_HISTORY = [
  { id: 1, device: 'Google Chrome on Windows 11', ip: '192.168.1.104', location: 'Malang, Jawa Timur', time: '16 Nov 2026, 23:15 WIB', status: 'Sesi Aktif Sekarang', isCurrent: true },
  { id: 2, device: 'Mobile Safari on iPhone 13', ip: '114.124.201.88', location: 'Surabaya, Jawa Timur', time: '15 Nov 2026, 14:20 WIB', status: 'Selesai', isCurrent: false },
  { id: 3, device: 'Google Chrome on Windows 11', ip: '192.168.1.104', location: 'Malang, Jawa Timur', time: '14 Nov 2026, 08:05 WIB', status: 'Selesai', isCurrent: false },
  { id: 4, device: 'Mozilla Firefox on Windows 10', ip: '180.252.160.22', location: 'Malang, Jawa Timur', time: '11 Nov 2026, 19:42 WIB', status: 'Selesai', isCurrent: false }
];

const Profil = () => {
  const [activeTab, setActiveTab] = useState('info'); // 'info' | 'security' | 'activity'
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [formData, setFormData] = useState({ ...INITIAL_PROFILE });
  
  // Password State
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Notification State
  const [alert, setAlert] = useState(null); // { type: 'success' | 'error', message: string }

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  };

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      showAlert('error', 'Nama lengkap dan email tidak boleh kosong.');
      return;
    }
    setProfile({ ...formData });
    showAlert('success', 'Profil admin berhasil diperbarui!');
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    if (!passwords.currentPassword) {
      showAlert('error', 'Masukkan kata sandi saat ini untuk verifikasi.');
      return;
    }
    if (passwords.newPassword.length < 6) {
      showAlert('error', 'Kata sandi baru minimal harus 6 karakter.');
      return;
    }
    if (passwords.newPassword !== passwords.confirmPassword) {
      showAlert('error', 'Konfirmasi kata sandi tidak cocok dengan kata sandi baru.');
      return;
    }

    setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' });
    showAlert('success', 'Kata sandi berhasil diperbarui! Silakan gunakan kata sandi baru untuk login berikutnya.');
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
            fontWeight: '600',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          {alert.type === 'success' ? <CheckCircle size={20} weight="bold" /> : <WarningCircle size={20} weight="bold" />}
          <span>{alert.message}</span>
        </div>
      )}

      {/* Header Halaman */}
      <div className="page-header">
        <div className="page-header-title">
          <h2>Profil Pengguna</h2>
          <p className="page-header-subtitle">
            Kelola data akun, informasi identitas, hak akses, dan pengaturan keamanan admin.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <span className="status-badge badge-green">
            <CheckCircle size={14} weight="fill" /> Akun Terverifikasi
          </span>
          <span className="status-badge badge-blue">
            <ShieldCheck size={14} weight="fill" /> {profile.role.split('/')[0]}
          </span>
        </div>
      </div>

      {/* Profile Overview Card */}
      <div
        style={{
          background: 'white',
          borderRadius: '16px',
          border: '1px solid var(--border)',
          padding: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '16px',
                backgroundColor: 'var(--primary)',
                color: 'white',
                fontSize: '28px',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(14, 165, 233, 0.3)'
              }}
            >
              {profile.fullName.charAt(0)}
            </div>
            <button
              title="Ubah Foto Profil"
              style={{
                position: 'absolute',
                bottom: '-4px',
                right: '-4px',
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: '#0f172a',
                color: 'white',
                border: '2px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              onClick={() => showAlert('success', 'Fitur unggah avatar siap dihubungkan ke backend endpoint /api/profile/avatar')}
            >
              <Camera size={14} weight="bold" />
            </button>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>
              {profile.fullName}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <EnvelopeSimple size={16} /> {profile.email}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={16} /> {profile.phone}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CalendarBlank size={16} /> Bergabung: {profile.joinedDate}
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ textAlign: 'center', padding: '10px 18px', background: '#f8fafc', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Divisi</div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a', marginTop: '2px' }}>Warehouse</div>
          </div>
          <div style={{ textAlign: 'center', padding: '10px 18px', background: '#f8fafc', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase' }}>Status</div>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#16a34a', marginTop: '2px' }}>Online Aktif</div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          borderBottom: '1px solid var(--border)',
          paddingBottom: '2px'
        }}
      >
        <button
          onClick={() => setActiveTab('info')}
          style={{
            padding: '10px 18px',
            border: 'none',
            background: 'transparent',
            borderBottom: activeTab === 'info' ? '3px solid var(--primary)' : '3px solid transparent',
            color: activeTab === 'info' ? 'var(--primary)' : 'var(--text-muted)',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: '0.2s'
          }}
        >
          <User size={18} weight={activeTab === 'info' ? 'bold' : 'regular'} /> Informasi Akun
        </button>

        <button
          onClick={() => setActiveTab('security')}
          style={{
            padding: '10px 18px',
            border: 'none',
            background: 'transparent',
            borderBottom: activeTab === 'security' ? '3px solid var(--primary)' : '3px solid transparent',
            color: activeTab === 'security' ? 'var(--primary)' : 'var(--text-muted)',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: '0.2s'
          }}
        >
          <LockKey size={18} weight={activeTab === 'security' ? 'bold' : 'regular'} /> Keamanan & Password
        </button>

        <button
          onClick={() => setActiveTab('activity')}
          style={{
            padding: '10px 18px',
            border: 'none',
            background: 'transparent',
            borderBottom: activeTab === 'activity' ? '3px solid var(--primary)' : '3px solid transparent',
            color: activeTab === 'activity' ? 'var(--primary)' : 'var(--text-muted)',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: '0.2s'
          }}
        >
          <ClockCounterClockwise size={18} weight={activeTab === 'activity' ? 'bold' : 'regular'} /> Riwayat Sesi Login
        </button>
      </div>

      {/* Tab 1: Informasi Akun */}
      {activeTab === 'info' && (
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
              Data Diri Admin
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Perbarui identitas dan kontak Anda. Data ini akan ditampilkan pada riwayat aktivitas pencatatan barang.
            </p>
          </div>

          <form onSubmit={handleSaveProfile} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label>Nama Lengkap</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInfoChange}
                  className="form-input"
                  style={{ paddingLeft: '16px' }}
                  placeholder="Masukkan nama lengkap..."
                  required
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label>Username Login</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInfoChange}
                  className="form-input"
                  style={{ paddingLeft: '16px' }}
                  placeholder="Masukkan username..."
                  required
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label>Alamat Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInfoChange}
                  className="form-input"
                  style={{ paddingLeft: '16px' }}
                  placeholder="admin@kiosumkm.id"
                  required
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label>Nomor WhatsApp / Telepon</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInfoChange}
                  className="form-input"
                  style={{ paddingLeft: '16px' }}
                  placeholder="081234567890"
                  required
                />
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label>Jabatan / Peran Sistem</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleInfoChange}
                  className="form-input"
                  style={{ paddingLeft: '16px', backgroundColor: '#f8fafc' }}
                  readOnly
                  title="Hubungi Administrator Utama untuk mengganti hak akses"
                />
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
                  *Role dan hak akses dikunci oleh Super Admin sistem.
                </span>
              </div>

              <div className="form-group" style={{ margin: 0 }}>
                <label>Divisi Kerja</label>
                <input
                  type="text"
                  name="division"
                  value={formData.division}
                  onChange={handleInfoChange}
                  className="form-input"
                  style={{ paddingLeft: '16px' }}
                  placeholder="Divisi kerja..."
                />
              </div>
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label>Bio / Catatan Tugas</label>
              <textarea
                name="bio"
                rows="3"
                value={formData.bio}
                onChange={handleInfoChange}
                className="form-input"
                style={{ padding: '12px 16px', resize: 'vertical' }}
                placeholder="Deskripsi singkat tanggung jawab atau catatan profil..."
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setFormData({ ...profile })}
              >
                Reset Perubahan
              </button>
              <button type="submit" className="btn-primary">
                <FloppyDisk size={18} weight="bold" /> Simpan Perubahan Profil
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tab 2: Keamanan & Password */}
      {activeTab === 'security' && (
        <div
          style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid var(--border)',
            padding: '28px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
            maxWidth: '700px'
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', marginBottom: '4px' }}>
              Perbarui Kata Sandi
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Pastikan Anda menggunakan kata sandi yang kuat dengan kombinasi huruf, angka, dan simbol untuk keamanan sistem kios.
            </p>
          </div>

          <form onSubmit={handleSavePassword} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label>Kata Sandi Saat Ini</label>
              <input
                type="password"
                name="currentPassword"
                value={passwords.currentPassword}
                onChange={handlePasswordChange}
                className="form-input"
                style={{ paddingLeft: '16px' }}
                placeholder="Masukkan kata sandi lama Anda..."
                required
              />
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label>Kata Sandi Baru</label>
              <input
                type="password"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                className="form-input"
                style={{ paddingLeft: '16px' }}
                placeholder="Minimal 6 karakter kombinasi..."
                required
              />
            </div>

            <div className="form-group" style={{ margin: 0 }}>
              <label>Konfirmasi Kata Sandi Baru</label>
              <input
                type="password"
                name="confirmPassword"
                value={passwords.confirmPassword}
                onChange={handlePasswordChange}
                className="form-input"
                style={{ paddingLeft: '16px' }}
                placeholder="Ulangi kata sandi baru..."
                required
              />
            </div>

            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', border: '1px solid var(--border)' }}>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
                Kriteria Keamanan Kata Sandi:
              </div>
              <ul style={{ fontSize: '12px', color: 'var(--text-muted)', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <li style={{ color: passwords.newPassword.length >= 6 ? '#16a34a' : 'inherit' }}>
                  Minimal terdiri dari 6 karakter
                </li>
                <li>Gunakan variasi huruf kapital dan huruf kecil</li>
                <li>Tambahkan setidaknya satu angka atau simbol (@, #, $)</li>
              </ul>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '10px' }}>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setPasswords({ currentPassword: '', newPassword: '', confirmPassword: '' })}
              >
                Batal
              </button>
              <button type="submit" className="btn-primary">
                <Key size={18} weight="bold" /> Perbarui Kata Sandi
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tab 3: Riwayat Aktivitas & Sesi */}
      {activeTab === 'activity' && (
        <div className="table-card">
          <div className="table-toolbar">
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', marginBottom: '2px' }}>
                Daftar Sesi Login & Perangkat
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Pantau riwayat masuk akun untuk memastikan tidak ada akses mencurigakan dari perangkat asing.
              </p>
            </div>
            <button
              className="btn-secondary"
              onClick={() => showAlert('success', 'Semua sesi lain berhasil dikeluarkan.')}
            >
              Keluarkan Semua Sesi Lain
            </button>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Perangkat & Browser</th>
                  <th>Alamat IP</th>
                  <th>Lokasi</th>
                  <th>Waktu Masuk</th>
                  <th>Status Sesi</th>
                </tr>
              </thead>
              <tbody>
                {LOGIN_HISTORY.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600' }}>
                        <DeviceMobile size={20} color="var(--primary)" />
                        <span>{item.device}</span>
                      </div>
                    </td>
                    <td>
                      <span className="badge-code">{item.ip}</span>
                    </td>
                    <td style={{ color: 'var(--text-muted)' }}>{item.location}</td>
                    <td style={{ color: 'var(--text-muted)', fontSize: '13px' }}>{item.time}</td>
                    <td>
                      {item.isCurrent ? (
                        <span className="status-badge badge-green">
                          <Check size={14} weight="bold" /> {item.status}
                        </span>
                      ) : (
                        <span className="status-badge badge-gray">{item.status}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;

