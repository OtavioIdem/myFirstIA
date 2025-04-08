from fastapi import APIRouter
from app.controllers.chatbot_controller import process_question, treinar_classificador_controller


router = APIRouter(prefix="/chatbot", tags=["Chatbot"])


@router.post("/ask")
async def ask_question(payload: dict):
    """
    Endpoint to process a question and return the answer.
    """
    return await process_question(payload)


@router.post("/treiner")
async def train_model():
    return await treinar_classificador_controller()
