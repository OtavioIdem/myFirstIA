# Instruções do projeto
    
# Conteúdo:
## Chatbot Corporativo com IA
    
Este projeto implementa uma IA baseada em múltiplos motores para responder dúvidas sobre sistemas internos da empresa e SAP, usando aprendizado supervisionado e não supervisionado.

### Tecnologias principais:
- FastAPI (backend HTTP para ML)
- PyTorch (redes neurais)
- FAISS (busca vetorial)
- Sentence-Transformers (embeddings semânticos)
- SQL Server (banco de dados)
- OpenAI API (fallback de respostas)
- NestJS + React (comunicação com backend)

### Organização por motores:
- Motores por sistema
- Motores por assunto
- Cascata de decisão com rede neural
- Ensemble para combinação de respostas

### Setup rápido:
```
bash
python -m venv venv
source venv/bin/activate  # ou venv\Scripts\activate no Windows
pip install -r requirements.txt
```

### Rodando a API ML:
```
bash
uvicorn app.main:app --reload
```

# Após clonar o projeto
cp .env.exemplo .env  # Crie seu .env com a API Key da OpenAI
