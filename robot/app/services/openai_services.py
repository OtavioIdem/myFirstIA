import openai
import app.core.config as settings


openai.api_key = settings.OPENAI_API_KEY


def obter_resposta_openai(question: str) -> str:
    """
    Envia a pergunta à API da OpenAI e retorna a resposta.
    """

    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": (
                    "Você é um assistente corporativo especializado no sistema SAP, treinado para fornecer explicações técnicas, "
                    "esclarecimentos de funcionalidades e suporte conceitual aos usuários. Sempre interprete e reestruture a pergunta do usuário, "
                    "removendo ambiguidades e ruídos, para garantir que a resposta seja clara, direta e bem organizada. "
                    "Caso a solicitação esteja fora do escopo do SAP, responda de forma educada e profissional, indicando que não possui essa informação."
                )},
                {"role": "user", "content": question}
            ],
            # 1 token = 4 caracte (150 aproximadamente 600 caracteres)
            # Limite de tokens para a resposta
            max_tokens=150,
            # Número de respostas geradas, treinamento = 3; produção = 1
            n=1 if settings.TREINNING == "true" else 3,
            # Sequência de parada (None para não usar)
            stop=None,
            # Controle de aleatoriedade (0.0 a 1.0)
            temperature=0.3 if settings.TREINNING == "true" else 0.7,
        )

        return response.choices[0].message['content'].strip()
    except Exception as e:
        print(f"Erro ao obter resposta da OpenAI: {str(e)}")
        return "Desculpe, não consegui processar sua pergunta no momento."
