import verificarSeDataSessaoNaoExpirou from "./verificarSeDataSessaoNaoExpirou";
import limparSessao from "./limparSessao";
import getItemLocalStorage from "../utils/localStorage/getItemLocalStorage";

export default function verificarSessaoSistemaAtiva() {
  if (
    !getItemLocalStorage("data-session") ||
    !getItemLocalStorage("token-sis", false) ||
    !verificarSeDataSessaoNaoExpirou()
  ) {
    limparSessao();
    return false;
  }

  return true;
}
