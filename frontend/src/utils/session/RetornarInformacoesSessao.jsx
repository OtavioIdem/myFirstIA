import toJson from "../jsonConvert/toJson";
import getItemLocalStorage from "../localStorage/getItemLocalStorage";

export default function retornarInformacoesSessao() {
  try {
    const sessaoDados = getItemLocalStorage("data-session");

    if (
      sessaoDados !== null &&
      sessaoDados !== undefined &&
      sessaoDados !== ""
    ) {
      return toJson(sessaoDados);
    }

    return null;
  } catch {
    console.error("Erro do cliente. Código RES0924.");
  }
}
