import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

const UrlInput = ({ onIdentify, isLoading }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      onIdentify(url.trim());
    }
  };

  return (
    <div style={{ maxWidth: '800px', width: '100%', marginBottom: '4rem' }} className="animate-fade-in">
      <h1 className="display-md" style={{ marginBottom: '1rem' }}>
        Intent <span style={{ color: 'var(--primary)' }}>Curated</span>
      </h1>
      <p className="body-md" style={{ marginBottom: '2.5rem', maxWidth: '600px', fontSize: '1.125rem' }}>
        Paste any URL from your favorite social media platforms. The ID Engine will extract the highest quality formats available.
      </p>

      <form onSubmit={handleSubmit} className={`url-input-container ${isLoading ? 'pulse' : ''}`} style={{ padding: '0.75rem', position: 'relative' }}>
        <input
          type="url"
          placeholder="https://youtu.be/..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={isLoading}
          required
        />
        <button 
          type="submit" 
          className="btn btn-primary"
          style={{ padding: '0.75rem 2rem' }}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 size={24} className="animate-spin" style={{ animation: 'spin 2s linear infinite' }} />
          ) : (
            <Search size={24} />
          )}
        </button>
      </form>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin { 100% { transform: rotate(360deg); } }
        .animate-spin { animation: spin 1s linear infinite; }
      `}} />
    </div>
  );
};

export default UrlInput;
