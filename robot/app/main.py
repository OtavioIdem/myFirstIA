from fastapi import FastAPI
from app.api.routes import router

app = FastAPI(title="IA Chatbot Corporate", version="0.1.0")

# router register
app.include_router(router)


@app.get("/")
def read_root():
    return {"message": "Welcome to IA Chatbot Corporate"}
