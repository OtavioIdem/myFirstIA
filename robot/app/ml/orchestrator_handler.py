import torch
import os
from app.ml.orchestrator import Orchestrator

ORCHESTRATOR_MODEL_PATH = "models/orchestrator_model.pth"


def save_orchestrator(model, path=ORCHESTRATOR_MODEL_PATH):
    """
    Save the orchestrator model to a file.
    """
    os.makedirs(os.path.dirname(path), exist_ok=True)
    torch.save(model.state_dict(), path)


def load_orchestrator(input_size=384, num_outputs=3, path=ORCHESTRATOR_MODEL_PATH):
    """
    Load the orchestrator model from a file.
    """
    model = Orchestrator(input_size, 128, num_outputs)
    model.load_state_dict(torch.load(path))
    model.eval()

    return model
