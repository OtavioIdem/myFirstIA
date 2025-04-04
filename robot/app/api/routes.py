from fastapi import APIRouter
from app.controllers.chatbot_controller import process_question

router = APIRouter(prefix="/chatbot", tags=["Chatbot"])

@router.post("/ask")
async def ask_question(payload: dict):
    """
    Endpoint to process a question and return the answer.
    """
    return await process_question(payload)