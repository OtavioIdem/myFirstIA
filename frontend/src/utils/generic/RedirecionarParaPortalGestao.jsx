import verificaAmbienteAtualDev from "../env/verificaAmbienteAtualDev";

export default function redirecionarParaPortalGestao() {
  return (window.location.href = verificaAmbienteAtualDev()
    ? "https://homolog-portalgestao.sisvansilweb.com.br:44375"
    : "https://portalgestao.sisvansilweb.com.br:44372");
}
