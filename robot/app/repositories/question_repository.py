import pyodbc
import os
from dotenv import load_dotenv
import numpy as np
from numpy.linalg import norm

load_dotenv()

# Connect to the database
def connect_to_db():
    return pyodbc.connect(os.getenv("DATABASE_URL"))

def save_question_response(question, response, embedding, systemId, sisId):
    conn = connect_to_db()
    cursor = conn.cursor()

    query = """
    INSERT INTO IA_QUESTIONRESPONSE(sisId, question, response, source, embedding, systemId)
    VALUES (?, ?, ?, ?, ?, ?)
    """

    embedding_bytes = np.array(embedding, dtype=np.float32).tobytes()
    cursor.execute(query, (sisId, question, response, "openai", embedding_bytes, systemId))
    conn.commit()
    conn.close()


def similar_response(embedding, system_id, limiar_similaridade=0.92):
    conn = connect_to_db()
    cursor = conn.cursor()

    query = """
    SELECT id, question, response, embedding 
    FROM IA_QUESTIONRESPONSE 
    WHERE systemId = ?
    """
    cursor.execute(query, (system_id,))
    rows = cursor.fetchall()

    embedding_atual = np.array(embedding, dtype=np.float32)

    for row in rows:
        emb_salvo = np.frombuffer(row.embedding, dtype=np.float32)
        similaridade = np.dot(embedding_atual, emb_salvo) / (norm(embedding_atual) * norm(emb_salvo))

        if similaridade >= limiar_similaridade:
            conn.close()
            return row.response

    conn.close()
    return None
