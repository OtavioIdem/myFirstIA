export default function retornarDataExpiracaoSessao() {
  const now = new Date();
  now.setMinutes(now.getMinutes() + 60);

  // Adiciona 50 minutos
  return now.toISOString();
}
