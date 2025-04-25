from fastapi import APIRouter
from app.controllers.chatbot_controller import process_question_controller, train_main_model_controller, train_specialized_models_controller

router = APIRouter(prefix="/chatbot")


@router.post("/question")
async def process_question_route(payload: dict):
    return await process_question_controller(payload)


@router.post("/train")
async def train_main_model_route():
    return await train_main_model_controller()


@router.post("/train-specialized")
async def train_specialized_models_route():
    return await train_specialized_models_controller()
