import {
  criarTemaCasoNecessario,
  verificaSeOTemaUsuarioAtualEscuro,
} from "../../middleware/alterarOuVerificarTemaAtual";
import importarTemaEscuro from "./importarTemaEscuro";
import importarTemaPadrao from "./importarTemaPadrao";
import preloadImage from "../generic/preloadImage";
import verificaSeDispositivoMobile from "../generic/verificaSeDispotivoMobile";

export default function themeVerify() {
  criarTemaCasoNecessario();

  if (verificaSeDispositivoMobile()) {
    import("../../style/mobile.css");
  }

  if (verificaSeOTemaUsuarioAtualEscuro()) {
    importarTemaEscuro();
    preloadImage("/sis-logo-branco.png");
    return;
  }
  importarTemaPadrao();
  preloadImage("/sis-logo.png");
  return;
}
