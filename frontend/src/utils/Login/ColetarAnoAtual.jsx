export default function coletarAnoAtual() {
  const dataAtualViaCliente = new Date();

  const anoAtual = dataAtualViaCliente.getFullYear();

  return anoAtual;
}
