import React from 'react';

const Settings = () => {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', maxWidth: '800px' }}>
      <h1 className="display-md" style={{ marginBottom: '1rem' }}>System <span style={{ color: 'var(--primary)' }}>Configuration</span></h1>
      <p className="body-md" style={{ marginBottom: '3rem' }}>Configure engine parameters and extraction preferences.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="card">
          <h3 className="title-md" style={{ marginBottom: '0.5rem' }}>Default Resolution</h3>
          <p className="body-md" style={{ marginBottom: '1rem' }}>Set the target resolution for single-click downloads.</p>
          <select style={{ width: '100%', padding: '0.75rem', background: 'var(--surface-low)', border: '1px solid var(--outline-variant)', borderRadius: 'var(--radius-md)', color: 'var(--on-surface)', outline: 'none' }}>
            <option>Best Available</option>
            <option>1080p</option>
            <option>720p</option>
            <option>Audio Only (MP3)</option>
          </select>
        </div>

        <div className="card">
          <h3 className="title-md" style={{ marginBottom: '0.5rem' }}>ffmpeg Path</h3>
          <p className="body-md" style={{ marginBottom: '1rem' }}>Required for mixing video and audio streams into a single container.</p>
          <input type="text" placeholder="Auto-detect" style={{ width: '100%', padding: '0.75rem', background: 'var(--surface-low)', border: '1px solid var(--outline-variant)', borderRadius: 'var(--radius-md)', color: 'var(--on-surface)', outline: 'none', fontFamily: 'inherit' }} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
