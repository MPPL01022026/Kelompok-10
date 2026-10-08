import { useState } from 'react';
import { MagnifyingGlass, Plus, ClockCounterClockwise, Bell, Gear, Question, CaretDown } from '@phosphor-icons/react';

const Header = ({ onLogout }) => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <header className="header">
        <div className="header-left">
            <button className="add-btn"><Plus size={16} weight="bold" /></button>
            <ClockCounterClockwise size={22} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
            <div className="search-bar">
                <MagnifyingGlass size={18} color="var(--text-muted)" />
                <input type="text" placeholder="Pencarian..." />
            </div>
        </div>
        <div className="header-right">
            <div className="user-dropdown" onClick={() => setShowProfile(!showProfile)}>
                <span>Admin Zahid</span>
                <CaretDown size={14} />
                {showProfile && (
                    <div style={{ position: 'absolute', top: 'calc(100% + 8px)', right: 0, backgroundColor: 'white', border: '1px solid var(--border)', padding: '8px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 20, minWidth: '150px' }}>
                        <div onClick={onLogout} style={{ color: 'var(--red)', cursor: 'pointer', fontSize: '14px', padding: '8px', borderRadius: '4px' }}>Keluar Sistem</div>
                    </div>
                )}
            </div>
            <Bell size={22} style={{ cursor: 'pointer' }} />
            <Gear size={22} style={{ cursor: 'pointer' }} />
            <Question size={22} style={{ cursor: 'pointer' }} />
            <div className="avatar">Z</div>
        </div>
    </header>
  );
};

export default Header;
