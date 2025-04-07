export default function capturarPrimeiraPalavraFrase(frase) {
  return frase === null || frase === undefined ? "" : frase.split(" ")[0];
}
