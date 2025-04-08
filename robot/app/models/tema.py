from sqlalchemy import Column, Integer, String
from app.core.database import Base


class Tema(Base):
    __tablename__ = "IA_TEMA"

    id = Column(Integer, primary_key=True, index=True),
    name = Column(String(100), nullable=False, unique=True)
