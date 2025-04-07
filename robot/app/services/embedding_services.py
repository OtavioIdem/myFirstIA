from sentence_transformers import SentenceTransformer

# Carrega o modelo uma unica vez
_model = SentenceTransformer('all-MiniLM-L6-v2')

def gerar_embedding(text:str):
    """
    Gera o embedding de um texto usando um modelo transformer
    retorna o vetor como lista de floats
    """

    embedding = _model.encode(text)
    return embedding.tolist()