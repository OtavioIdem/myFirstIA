export default function removerCaracteresEspeciais(texto) {
  return texto
    .normalize("NFD") // Decompõe caracteres acentuados
    .replace(/[\u0300-\u036f]/g, "") // Remove os sinais diacríticos (acentos)
    .replace(/[^a-zA-Z0-9\s]/g, ""); // Remove caracteres especiais
}
