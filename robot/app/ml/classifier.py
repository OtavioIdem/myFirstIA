import torch
import torch.nn as nn
import torch.nn.functional as F


class EmbeddingClassifier(nn.Module):
    def __init__(self, input_size=384, hidden_size=128, num_classes=5):
        super(EmbeddingClassifier, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.fc2 = nn.Linear(hidden_size, num_classes)

    def forward(self, x):
        x = F.relu(self.fc1(x))
        x = self.fc2(x)  # sem softmax, pois usamos CrossEntropyLoss
        return x
