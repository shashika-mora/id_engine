import React from 'react';
import { Download, Film, Music } from 'lucide-react';

const MediaResultCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="card animate-fade-in" style={{ maxWidth: '800px', display: 'flex', gap: '2rem', padding: '2rem' }}>
      <div style={{ flex: '0 0 240px' }}>
        <img 
          src={data.thumbnail || 'https://via.placeholder.com/240x135'} 
          alt={data.title} 
          style={{ width: '100%', borderRadius: 'var(--radius-md)', objectFit: 'cover', aspectRatio: '16/9', backgroundColor: 'var(--surface-high)' }}
        />
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <p className="label-sm" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{data.uploader || 'External Source'}</p>
        <h2 className="title-md" style={{ marginBottom: '0.5rem' }}>{data.title}</h2>
        <p className="body-md" style={{ marginBottom: '1.5rem', maxHeight: '3rem', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
          {data.description || 'No description provided.'}
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: 'auto' }}>
          {data.formats.slice(0, 5).map((fmt, idx) => (
            <a 
              key={idx} 
              href={fmt.url} 
              target="_blank" 
              rel="noreferrer"
              className={idx === 0 ? "btn btn-primary" : "btn btn-secondary"}
              style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
            >
              {fmt.vcodec === 'none' ? <Music size={16} /> : <Film size={16} />}
              {fmt.resolution || 'Audio'} ({fmt.ext})
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaResultCard;
