import React from 'react';
import { NavLink } from 'react-router-dom';
import { DownloadCloud, LayoutGrid, Settings, HardDriveDownload } from 'lucide-react';

const NavBar = () => {
  return (
    <aside className="sidebar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
        <div style={{ 
          width: '36px', height: '36px', 
          borderRadius: 'var(--radius-md)', 
          background: 'var(--gradient-primary)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--on-primary-container)'
        }}>
          <HardDriveDownload size={20} />
        </div>
        <h1 className="title-md" style={{ margin: 0 }}>ID Engine</h1>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <NavItem to="/" icon={<DownloadCloud size={20} />} label="Downloader" />
        <NavItem to="/downloads" icon={<LayoutGrid size={20} />} label="Manager" />
        <div className="spacer" style={{ height: '2rem' }}></div>
        <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" />
      </nav>
      
      <div className="spacer"></div>
      
      <div style={{ opacity: 0.5 }}>
        <p className="label-sm">System Status</p>
        <p className="body-md" style={{ fontSize: '0.75rem', marginTop: '4px' }}>FastAPI Backend • Connected</p>
      </div>
    </aside>
  );
};

const NavItem = ({ to, icon, label }) => {
  return (
    <NavLink 
      to={to} 
      style={({ isActive }) => ({
        display: 'flex', alignItems: 'center', gap: '1rem',
        padding: '0.75rem 1rem',
        borderRadius: 'var(--radius-md)',
        color: isActive ? 'var(--primary)' : 'var(--on-surface-variant)',
        backgroundColor: isActive ? 'var(--surface-highest)' : 'transparent',
        transition: 'all 0.2s ease',
        fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-medium)',
      })}
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

export default NavBar;
