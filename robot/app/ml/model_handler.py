import torch
import os

MODEL_PATH = "models/classifier.pth"


def salvar_modelo(model, path=MODEL_PATH):
    """
    Salva o estado do modelo em um arquivo.
    """
    os.makedirs(os.path.dirname(path), exist_ok=True)
    torch.save(model.state_dict(), path)


def carregar_modelo(model_class, input_size, num_classes, path=MODEL_PATH):
    """
    Carrega o estado do modelo salvo.
    model_class: classe do modulo (ex: EmbeddingsClassifier)
    """
    model = model_class(input_size, num_classes)
    model.load_state_dict(torch.load(path))
    model.eval()
    return model
