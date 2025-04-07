import VerificarSessaoAtiva from "./verificarSessaoSistemaAtiva";
import retornarInformacoesSessao from "../utils/session/retornarInformacoesSessao";

export default function verificarUsuarioManager() {
  if (!VerificarSessaoAtiva()) return false;

  const sessaoInfo = retornarInformacoesSessao();

  const manager = sessaoInfo?.manager;

  return manager === "Y";
}
