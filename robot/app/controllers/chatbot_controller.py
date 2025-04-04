from app.use_cases.process_question import handle_question

async def process_question(payload: dict):
    pergunta = payload.get("pergunta")
    systemId = payload.get("systemId")
    sisId = payload.get("sisId")

    if not pergunta:
        return {"error": "Pergunta não fornecida."}
    
    resposta = await handle_question(pergunta, systemId, sisId)
    return {"resposta": resposta}