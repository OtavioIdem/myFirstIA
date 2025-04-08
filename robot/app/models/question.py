from sqlachemy import Column, Integer, String, ForeignKey, DateTime, LargeBinary
from app.core.database import Base
from datetime import datetime


class Question(Base):
    __tablename__ = "IA_QUESTIONRESPONSE"

    id = Column(Integer, primary_key=True, index=True)
    sisId = Column(Integer, nullable=False)
    question = Column(String(max), nullable=False)
    response = Column(String(max), nullable=False)
    source = Column(String(50), nullable=False)
    embedding = Column(LargeBinary, nullable=True)
    systemId = Column(Integer, ForeignKey("IA_SYSTEM.id"), nullable=False)
    createDate = Column(DateTime, default=datetime.utcnow, nullable=True)
