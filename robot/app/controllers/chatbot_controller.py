from app.use_cases.process_question import handle_question
from app.ml.training import treinar_classificador
from app.ml.model_handler import salvar_modelo
from app.ml.classifier import EmbeddingClassifier
from app.repositories.question_repository import obter_dados_para_treinamento
from app.repositories.question_repository import obter_dados_por_tema
from app.models.tema import Tema
from app.core.database import SessionLocal
from app.ml.model_handler import Modelo
import joblib
import os


async def process_question(payload: dict):
    pergunta = payload.get("pergunta")
    systemId = payload.get("systemId")
    sisId = payload.get("sisId")

    if not pergunta:
        return {"error": "Pergunta não fornecida."}

    resposta = await handle_question(pergunta, systemId, sisId)
    return {"resposta": resposta}


async def treinar_classificador_controller():
    try:
        # Coleta dados do banco
        embeddings, labels, num_classes = obter_dados_para_treinamento()
        # Treina o classificador
        modelo = treinar_classificador(embeddings, labels, num_classes)
        # Salva o modelo treinado
        salvar_modelo(modelo)

        return {"status": "Modelo treinado e salvo com sucesso."}
    except Exception as e:
        return {"error": str(e)}


async def treinar_modelos_especializados_controller():
    db = SessionLocal()
    temas = db.query(Tema).all()
    db.close()

    for tema in temas:
        embedding, labels = obter_dados_por_tema(tema.id)

        if not embedding:
            print(f"Sem dados para tema: {tema.nome}")
            continue

        modelo = Modelo(num_camadas=2, num_neuronios=10)
        modelo.treinar(embedding, labels)

        os.makedirs("models", exist_ok=True)
        caminho = f"models/{tema.nome.lower()}_model.sav"
        joblib.dump(modelo.modelo, caminho)
        print(f"Modelo treinado e salvo para o tema: {tema.nome} em {caminho}")

    return {"status": "Modelos especializados treinados e salvos com sucesso."}
