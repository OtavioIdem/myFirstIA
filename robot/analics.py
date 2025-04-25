from app.models.tema import Tema
from app.core.database import SessionLocal
import joblib
import os
from app.ml.modelo import Modelo


def carregar_modelos_dinamicamente(num_camadas=2, num_neuronios=10):
    db = SessionLocal()
    temas = db.query(Tema).filter(Tema.modelo_path != None).all()
    db.close()

    modelos = {}

    for tema in temas:
        modelo = Modelo(num_camadas, num_neuronios)
        if os.path.exists(tema.modelo_path):
            modelo.modelo = joblib.load(tema.modelo_path)
            modelos[tema.nome.lower()] = modelo

    return modelos
