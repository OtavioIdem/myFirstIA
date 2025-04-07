import VerificarSessaoAtiva from "./verificarSessaoSistemaAtiva";
import retornarInformacoesSessao from "../utils/session/retornarInformacoesSessao";
import verificarUsuarioManager from "./verificarUsuarioManager";

export default function verificarUsuarioAdmin() {
  if (!VerificarSessaoAtiva()) return false;

  if (verificarUsuarioManager()) return true;

  const sessaoInfo = retornarInformacoesSessao();

  const admin = sessaoInfo?.admin;

  return admin === "Y";
}
