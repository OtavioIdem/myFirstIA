import numpy as np
from numpy.linalg import norm
from sqlalchemy.orm import Session
from app.core.database import SessionLocal
from app.models.question import Question


def save_question_response(question, response, embedding, systemId, sisId):
    db: Session = SessionLocal()
    emb_bytes = np.array(embedding, dtype=np.float32).tobytes()

    nova = Question(
        sisId=sisId,
        question=question,
        response=response,
        source="IA",
        embedding=emb_bytes,
        systemId=systemId,
    )
    db.add(nova)
    db.commit()
    db.close()


def similar_response(embedding, system_id, limiar_similaridade=0.92):
    db: Session = SessionLocal()
    results = db.query(Question).filter(Question.systemId == system_id).all()
    db.close()

    embedding_atual = np.array(embedding, dtype=np.float32)

    for r in results:
        emb = np.frombuffer(r.embedding, dtype=np.float32)
        similar = np.dot(embedding_atual, emb) / (norm(embedding_atual) * norm(emb))
        if similar >= limiar_similaridade:
            return r.response

    return None


def get_training_data():
    """
    Busca embeddings e rótulos de tema para treinar o classificador
    Supondo que IA_QUESTIONRESPONSE tenha uma coluna 'tema' para o rótulo
    """

    db: Session = SessionLocal()
    results = db.query(Question).filter(
        Question.embedding.isnot(None),
        Question.temaId.isnot(None)
    ).all()
    db.close()

    embeddings = []
    labels = []

    for r in results:
        emb = np.frombuffer(r.embedding, dtype=np.float32)
        embeddings.append(emb)
        labels.append(r.temaId)  # Supondo que a resposta seja o rótulo

    num_class = len(set(labels))
    return embeddings, labels, num_class
