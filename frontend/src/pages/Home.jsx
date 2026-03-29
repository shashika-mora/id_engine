import React, { useState } from 'react';
import UrlInput from '../components/UrlInput';
import MediaResultCard from '../components/MediaResultCard';
import { AlertCircle } from 'lucide-react';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const extractInfo = async (url) => {
    setLoading(true);
    setResult(null);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:8000/api/metadata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || 'Failed to fetch metadata');
      
      setResult(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <UrlInput onIdentify={extractInfo} isLoading={loading} />
      
      {error && (
        <div className="card animate-fade-in" style={{ maxWidth: '800px', display: 'flex', gap: '1rem', alignItems: 'center', backgroundColor: '#93000a', color: '#ffdad6' }}>
          <AlertCircle />
          <p className="body-md" style={{ color: 'inherit' }}>{error}</p>
        </div>
      )}
      
      {result && <MediaResultCard data={result} />}
    </div>
  );
};

export default Home;
