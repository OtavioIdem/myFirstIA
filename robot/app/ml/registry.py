from app.ml.classifier import EmbeddingClassifier
from app.ml.model_handler import load_model


def loading_model():
    """
    Carrega os modelos treinados por tema/sistema.
    """
    modelos = {
        "sap": load_model(EmbeddingClassifier, input_size=384, num_classes=0, model_path="app/ml/models/sap_model.pth"),
        "vendas": load_model(EmbeddingClassifier, input_size=384, num_classes=1, model_path="app/ml/models/vendas_model.pth"),
    }

    return modelos
