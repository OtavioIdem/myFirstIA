from app.services.embedding_services import gerar_embedding
from app.services.openai_services import obter_resposta_openai
from app.repositories.question_repository import buscar_resposta_similar, salvar_pergunta_resposta
from app.ml.model_handler import carregar_modelo
from app.ml.classifier import EmbeddingClassifier
import torch

# Parametros do modelo
INPUT_SIZE = 384
NUM_CLASSES = 5

# Carregar o modelo treinado
modelo_classificador = carregar_modelo(EmbeddingClassifier, INPUT_SIZE, NUM_CLASSES)


async def handle_question(question: str, systemId: int, sisId: int):
    # 1. Gera embedding
    embedding = gerar_embedding(question)

    # 2. Previsão de tema com rede neural
    entrada = torch.tensor([embedding], dtype=torch.float32)
    saida = modelo_classificador(entrada)
    tema_previsto = torch.argmax(saida, dim=1).item()

    # (Opcional) imprimir ou logar o tema previsto
    print(f"Tema previsto: {tema_previsto}")

    # 3. Busca por resposta similar (por embedding e sistema)
    resposta_existente = buscar_resposta_similar(embedding, systemId)
    if resposta_existente:
        return resposta_existente

    # 4. Fallback: OpenAI
    resposta = obter_resposta_openai(question)

    # 5. Armazena para aprendizado futuro
    salvar_pergunta_resposta(question, resposta, embedding, systemId, sisId)

    return resposta
