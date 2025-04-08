from app.ml.registry import loading_model
import torch

modelos_especializados = loading_model()


def execute_model(model_name: str, embeddings: list):
    """
    Executa o modelo especializado por área informada
    """
    if model_name not in modelos_especializados:
        return None

    model = modelos_especializados[model_name]
    entry = torch.tensor([embeddings], dtype=torch.float32)
    output = model(entry)
    pred = torch.argmax(output, dim=1).item()

    return pred
