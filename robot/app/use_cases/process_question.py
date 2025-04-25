from app.services.embedding_services import generate_embedding
from app.services.openai_services import get_openai_response
from app.repositories.question_repository import find_similar_response, save_question_response
from app.ml.orchestrator_handler import load_orchestrator
from app.ml.dispatcher import execute_specialized_model
import torch

# Carrega o modelo orquestrador treinado
orchestrator_model = load_orchestrator()

# Definições de ação
ACTION_USE_SPECIALIZED = 0
ACTION_CREATE_MODEL = 1
ACTION_USE_OPENAI = 2

# Mapeamento fixo de tema para modelo
theme_to_model = {
    0: "sap",
    1: "vendas"
}


async def handle_question(question: str, system_id: int, user_id: int):
    # 1. Gera o embedding da pergunta
    embedding = generate_embedding(question)

    # 2. Passa pela rede neural orquestradora
    input_tensor = torch.tensor([embedding], dtype=torch.float32)
    action_logits = orchestrator_model(input_tensor)
    action = torch.argmax(action_logits, dim=1).item()

    print(f"[ORCHESTRATOR] Ação sugerida: {action}")

    # 3. Executa ação com base no output da rede
    if action == ACTION_USE_SPECIALIZED:
        # Previsão de tema e execução do modelo especializado
        theme_id = torch.argmax(action_logits, dim=1).item()
        area = theme_to_model.get(theme_id)
        if area:
            result = execute_specialized_model(area, embedding)
            print(f"[SPECIALIZED MODEL] Resultado: {result}")

    elif action == ACTION_CREATE_MODEL:
        # Aqui apenas loga por enquanto
        print("[AUTOEXPANSION] Novo modelo sugerido para criação futura.")

    # 4. Tenta buscar resposta similar no banco
    similar_response = find_similar_response(embedding, system_id)
    if similar_response:
        return similar_response

    # 5. Fallback: OpenAI
    openai_response = await get_openai_response(question)

    # 6. Salva pergunta e resposta
    save_question_response(
        question=question,
        response=openai_response,
        embedding=embedding,
        system_id=system_id,
        user_id=user_id
    )

    return openai_response
