import setItemLocalStorage from "../localStorage/setItemLocalStorage";
import retornarDataExpiracaoSessao from "./retornarDataExpiracaoSessao";

export default async function iniciarSessao(sessionData) {
  const token = sessionData.token;

  const informacoesSessao = {
    email: sessionData.email,
    nome: sessionData.nome,
    admin: sessionData.admin,
    manager: sessionData.manager,
    expiracaoData: retornarDataExpiracaoSessao(),
    auth: "Y",
  };

  setItemLocalStorage("data-session", informacoesSessao);
  setItemLocalStorage("pic", sessionData.fotoPerfil);
  setItemLocalStorage("token-sis", token, false);
}
