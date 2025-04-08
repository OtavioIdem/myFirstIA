import torch
from torch.utils.data import DataLoader, TensorDataset
from app.ml.classifier import EmbeddingClassifier

epochs = 20
batch_size = 16
lr = 0.001


def treinar_classificador(embeddings, labels, num_classes):
    """
    Treina o classificador de embeddings com base nos dados fornecidos.
    embeddings: lista de embeddings (float)
    labels: lista de inteiros (classes de cada embedding)
    """

    X = torch.tensor(embeddings, dtype=torch.float32)
    y = torch.tensor(labels, dtype=torch.long)

    dataset = TensorDataset(X, y)
    loader = DataLoader(dataset, batch_size=batch_size, shuffle=True)

    model = EmbeddingClassifier(input_size=X.shape[1], num_classes=num_classes)
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
