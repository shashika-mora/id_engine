from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from downloader import extract_metadata

app = FastAPI(title="ID Engine API")

# Update CORS for frontend interaction
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # For dev. Fix later for prod.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class URLRequest(BaseModel):
    url: str

@app.post("/api/metadata")
async def get_metadata(request: URLRequest):
    try:
        info = extract_metadata(request.url)
        return {"status": "success", "data": info}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/api/download")
async def download_media(url: str, format_id: str):
    # Depending on requirements, we can pipe the download, 
    # but the easiest logic is actually sending the direct URL 
    # to the frontend if the server doesn't want to proxy it.
    # However, some URLs expire or are IP-binded. 
    # For a robust downloader, we'll proxy it or provide the generated link.
    # For now, this endpoint can be expanded later.
    return {"status": "not_implemented"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
