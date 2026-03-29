import React from 'react';

const DownloadsManager = () => {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', maxWidth: '800px' }}>
      <h1 className="display-md" style={{ marginBottom: '1rem' }}>Active <span style={{ color: 'var(--primary)' }}>Transfers</span></h1>
      <p className="body-md" style={{ marginBottom: '2.5rem' }}>Monitor and manage your current downloads.</p>
      
      {/* Empty State / Mock State */}
      <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
        <p className="body-md" style={{ opacity: 0.5 }}>No active downloads</p>
      </div>
    </div>
  );
};

export default DownloadsManager;
