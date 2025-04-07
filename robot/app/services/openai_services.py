import openai
import os
from dotenv import load_dotenv

# Carrega as variáveis de ambiente do arquivo .env
load_dotenv()

openai.api_key = os.getenv("OPENAI_API_KEY")

def obter_resposta_openai(question:str) -> str:
    """
    Envia a pergunta à API da OpenAI e retorna a resposta.
    """

    try:
        response = openai.ChatCompletion.create(
            model = "gpt-3.5-turbo",
            messages = [
                {"role": "system", "content": (
                    "Você é um assistente corporativo especializado no sistema SAP, treinado para fornecer explicações técnicas, "
                    "esclarecimentos de funcionalidades e suporte conceitual aos usuários. Sempre interprete e reestruture a pergunta do usuário, "
                    "removendo ambiguidades e ruídos, para garantir que a resposta seja clara, direta e bem organizada. "
                    "Caso a solicitação esteja fora do escopo do SAP, responda de forma educada e profissional, indicando que não possui essa informação."
                )},
                {"role": "user", "content": question}
            ],                            ## 1 token = 4 caracte (150 aproximadamente 600 caracteres)
            max_tokens = 150,             ## Limite de tokens para a resposta
            n = 1 if os.getenv("TREINNING") == "true" else 3,   ## Número de respostas a serem geradas, para treinamento usar 3 para produção usar 1
            stop = None,                  ## Sequência de parada (None para não usar)
            temperature = 0.3 if os.getenv("TREINNING") == "true" else 0.7,      ## Controle de aleatoriedade (0.0 a 1.0)
        )

        return response.choices[0].message['content'].strip()
    except Exception as e:
        print(f"Erro ao obter resposta da OpenAI: {str(e)}")
        return "Desculpe, não consegui processar sua pergunta no momento."