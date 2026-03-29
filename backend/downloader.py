import yt_dlp

def extract_metadata(url: str):
    ydl_opts = {
        'quiet': True,
        'no_warnings': True,
        'extract_flat': False,
        'getcomments': False,
    }
    
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        try:
            info_dict = ydl.extract_info(url, download=False)
            
            # Reduce the payload for the frontend
            formats = []
            if 'formats' in info_dict:
                for f in info_dict.get('formats', []):
                    # Filter useful formats (video+audio, video-only, audio-only)
                    ext = f.get('ext')
                    if ext not in ['mp4', 'm4a', 'webm', 'mp3']:
                        continue
                        
                    formats.append({
                        'format_id': f.get('format_id'),
                        'ext': ext,
                        'resolution': f.get('resolution', 'audio only' if f.get('vcodec') == 'none' else 'unknown'),
                        'format_note': f.get('format_note', ''),
                        'vcodec': f.get('vcodec'),
                        'acodec': f.get('acodec'),
                        'filesize': f.get('filesize', 0),
                        'url': f.get('url') # Direct stream/download URL if available
                    })
            else:
                # Direct file or simple structure
                formats.append({
                    'format_id': info_dict.get('format_id', 'unknown'),
                    'ext': info_dict.get('ext', 'mp4'),
                    'resolution': info_dict.get('resolution', 'unknown'),
                    'url': info_dict.get('url')
                })
            
            # Sort formats by quality roughly if possible, or just return them
            return {
                'id': info_dict.get('id'),
                'title': info_dict.get('title'),
                'thumbnail': info_dict.get('thumbnail'),
                'duration': info_dict.get('duration'),
                'formats': formats,
                'uploader': info_dict.get('uploader'),
                'description': info_dict.get('description', '')[:200] if info_dict.get('description') else ''
            }
        except Exception as e:
            raise Exception(f"Failed to extract info: {str(e)}")
