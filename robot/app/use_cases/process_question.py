from app.services.embedding_services import gerar_embedding
from app.services.openai_services import obter_resposta_openai
from app.repositories.question_repository import buscar_resposta_similar, salvar_pergunta_resposta


async def handle_question(question:str, systemId:int, sisId:int):
    """
    Função para processar a pergunta e retornar a resposta.
    """
    # Gerar o embedding da pergunta
    embedding = gerar_embedding(question)

    # Buscar resposta similar no banco de dados
    resposta_similar = buscar_resposta_similar(embedding, systemId)

    if resposta_similar:
        return resposta_similar

    # Se não houver resposta similar, obter uma nova resposta usando OpenAI
    nova_resposta = await obter_resposta_openai(question)

    # Salvar a nova pergunta e resposta no banco de dados
    salvar_pergunta_resposta(question, nova_resposta, embedding, systemId, sisId)

    return nova_resposta