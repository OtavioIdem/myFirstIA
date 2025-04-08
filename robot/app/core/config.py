import os
from dotenv import load_dotenv

load_dotenv()


class Setting:
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY")
    ENVIRONMENT: str = os.getenv("ENVIRONMENT")
    TREINNING: bool = os.getenv("TREINNING")

    DATABASE_USER: str = os.getenv("DATABASE_USER")
    DATABASE_PASSWORD: str = os.getenv("DATABASE_PASSWORD")
    DATABASE_HOST: str = os.getenv("DATABASE_HOST")
    DATABASE_PORT: str = os.getenv("DATABASE_PORT")
    DATABASE_NAME: str = os.getenv("DATABASE_NAME")
    DATABASE_DRIVER: str = os.getenv("DATABASE_DRIVER", "ODBC+Driver+17+for+SQL+Server")

    SQLSERVER_CONN: str = (
        f"mssql+pyodbc://{DATABASE_USER}:{DATABASE_PASSWORD}"
        f"@{DATABASE_HOST}:{DATABASE_PORT}/{DATABASE_NAME}"
        f"?driver={DATABASE_DRIVER.replace(' ', '+')}"
    )


settings = Setting()
