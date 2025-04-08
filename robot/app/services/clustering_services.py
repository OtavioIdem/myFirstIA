from sklearn.cluster import KMeans
import numpy as np


def agrupar_embeddings(embeddings: list, n_clusters: int = 5):
    """
    Agrupa uma lista de embeddings em clusters usando KMeans.
    Retorna os rótulos de cada embeddings
    """
    X = np.array(embeddings, dtype=np.float32)
    modelo = KMeans(n_clusters=n_clusters, random_state=42)
    modelo.fit(X)
    return modelo.labels_


def treinar_kmeans_model(embeddings: list, n_clusters: int = 5):
    """
    Treina um modelo KMeans com os embeddings fornecidos.
    Retorna o modelo treinado.
    """
    X = np.array(embeddings, dtype=np.float32)
    modelo = KMeans(n_clusters=n_clusters, random_state=42)
    modelo.fit(X)
    return modelo
