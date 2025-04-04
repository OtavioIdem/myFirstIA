import getCookie from "../utils/cookie/getCookie";
import limparSessao from "./limparSessao";

export default function verificarSessaoSSOAtiva() {
  if (
    getCookie("token") !== undefined &&
    getCookie("token") !== null &&
    getCookie("token") !== "" &&
    getCookie("SSO") !== undefined &&
    getCookie("SSO") !== null &&
    getCookie("SSO") !== ""
  ) {
    return true;
  }

  limparSessao();
  return false;
}
