import os
from dotenv import load_dotenv

load_dotenv()


class Setting:
    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
    DATATABASE_URL = os.getenv("DATABASE_URL")
    ENVIRONMENT = os.getenv("ENVIRONMENT")
    TREINNING = os.getenv("TREINNING")


settings = Setting()
