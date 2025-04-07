export default function gerarHashAleatorio(tamanho = 12) {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const array = new Uint8Array(tamanho);

  window.crypto.getRandomValues(array);

  return Array.from(array, (byte) => caracteres[byte % caracteres.length]).join(
    ""
  );
}
