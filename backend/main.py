from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import httpx
import os
import datetime
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = FastAPI(title="MeBot Personal Website API")

# Configure CORS
cors_origins = os.getenv("CORS_ORIGINS", "http://localhost:5173,http://localhost:3000").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatMessage(BaseModel):
    message: str
    user_id: Optional[str] = None


class ChatResponse(BaseModel):
    response: str
    timestamp: str


@app.get("/")
async def root():
    """Root endpoint"""
    return {"message": "MeBot Personal Website API", "status": "online"}


@app.get("/api/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}


@app.post("/api/mebot/chat", response_model=ChatResponse)
async def chat_with_mebot(message: ChatMessage):
    """
    Chat with MeBot - integrates with external AI API
    """
    try:
        # Get API configuration from environment
        mebot_api_url = os.getenv("MEBOT_API_URL")
        mebot_api_key = os.getenv("MEBOT_API_KEY")
        
        # For now, return a mock response if API is not configured
        if not mebot_api_url or not mebot_api_key:
            return ChatResponse(
                response=f"你好！我是MeBot，你的AI助手。你说: '{message.message}'。API配置后我将能够提供更智能的回复。",
                timestamp=datetime.datetime.now().isoformat()
            )
        
        # Make request to external MeBot API
        async with httpx.AsyncClient() as client:
            response = await client.post(
                mebot_api_url,
                json={"message": message.message, "user_id": message.user_id},
                headers={"Authorization": f"Bearer {mebot_api_key}"},
                timeout=30.0
            )
            response.raise_for_status()
            data = response.json()
            
        return ChatResponse(
            response=data.get("response", "Sorry, no response available"),
            timestamp=data.get("timestamp", datetime.datetime.now().isoformat())
        )
        
    except httpx.HTTPError as e:
        raise HTTPException(status_code=500, detail=f"Error communicating with MeBot API: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal server error: {str(e)}")


if __name__ == "__main__":
    import uvicorn
    host = os.getenv("HOST", "0.0.0.0")
    port = int(os.getenv("PORT", 8000))
    uvicorn.run(app, host=host, port=port)
