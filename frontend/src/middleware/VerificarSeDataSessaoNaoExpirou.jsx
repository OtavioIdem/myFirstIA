import retornarInformacoesSessao from "../utils/session/retornarInformacoesSessao";

export default function verificarSeDataSessaoNaoExpirou() {
  // const isLocalHost = import.meta.env.VITE_LOCALHOST;

  const expiracaoData = retornarInformacoesSessao()?.expiracaoData;

  if (!expiracaoData) return false;

  return new Date() <= new Date(expiracaoData);

  // if (isLocalHost === "Y") {
  //   alert("Data da sessão expirada.");
  // }
}
