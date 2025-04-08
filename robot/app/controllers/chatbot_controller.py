from app.use_cases.process_question import handle_question
from app.ml.training import treinar_classificador
from app.ml.model_handler import salvar_modelo
from app.ml.classifier import EmbeddingClassifier
from app.repositories.question_repository import obter_dados_para_treinamento


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
