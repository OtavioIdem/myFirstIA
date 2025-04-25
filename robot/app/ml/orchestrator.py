import torch
import torch.nn as nn
import torch.nn.functional as F


class Orchestrator(nn.Module):
    def __init__(self, input_size=384, hidden_size=128, num_outputs=3):
        # num_outputs: representa as ações que o orquestrador pode tomar
        super(Orchestrator, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.fc2 = nn.Linear(hidden_size, num_outputs)
        # Ex: [usar_modelo, criar_modelo, usar_opanai]

    def forward(self, x):
        x = F.relu(self.fc1(x))
        return self.fc2(x)
