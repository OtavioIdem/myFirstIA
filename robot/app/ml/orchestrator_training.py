import torch
from torch.utils.data import DataLoader, TensorDataset
from app.ml.orchestrator import Orchestrator


def train_orchestrator(X, y, epochs=20, batch_size=16, lr=0.001):
    inputs = torch.tensor(X, dtype=torch.float32)
    targets = torch.tensor(y, dtype=torch.long)

    dataset = TensorDataset(inputs, targets)
    loader = DataLoader(dataset, batch_size=batch_size, shuffle=True)

    model = Orchestrator(input_size=inputs.shape[1], num_outputs=len(set(y)))
    criterion = torch.nn.CrossEntropyLoss()
    optimizer = torch.optim.Adam(model.parameters(), lr=lr)

    model.train()
    for epoch in range(epochs):
        for batch_X, batch_y in loader:
            optimizer.zero_grad()
            outputs = model(batch_X)
            loss = criterion(outputs, batch_y)
            loss.backward()
            optimizer.step()

    return model
