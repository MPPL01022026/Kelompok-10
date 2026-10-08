import { useState } from 'react';
import { Warehouse, LockKey, EnvelopeSimple } from '@phosphor-icons/react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifikasi username & password admin
    if (email === 'admin@kiosiqbal.com' && password === 'admin123') {
      setError('');
      onLogin();
    } else {
      setError('Email atau kata sandi salah!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <Warehouse size={48} color="var(--primary)" weight="fill" />
          <h2>Kios Iqbal</h2>
          <p>Masuk ke sistem manajemen gudang</p>
        </div>

        {error && (
          <div style={{ backgroundColor: 'var(--danger-bg)', color: 'var(--danger-text)', padding: '10px', borderRadius: '4px', marginBottom: '16px', fontSize: '13px', textAlign: 'center', border: '1px solid var(--danger-text)' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Alamat Email</label>
            <div className="input-with-icon">
              <EnvelopeSimple size={18} className="icon" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="admin@kiosiqbal.com" className="form-input" />
            </div>
          </div>
          <div className="form-group">
            <label>Kata Sandi</label>
            <div className="input-with-icon">
              <LockKey size={18} className="icon" />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" className="form-input" />
            </div>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '16px', padding: '12px' }}>
            Masuk
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: 'var(--text-muted)' }}>
          <span>Hint: admin@kiosiqbal.com / admin123</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
