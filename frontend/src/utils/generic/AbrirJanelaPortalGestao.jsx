import verificaAmbienteAtualDev from "../env/verificaAmbienteAtualDev";

export default function AbrirJanelaPortalGestao() {
  window.open(
    verificaAmbienteAtualDev()
      ? "https://homolog-portalgestao.sisvansilweb.com.br:44375"
      : "https://portalgestao.sisvansilweb.com.br:44372",
    "_blank"
  );
}
