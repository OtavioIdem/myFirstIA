import verificarSessaoSistemaAtiva from "./verificarSessaoSistemaAtiva";
import getItemLocalStorage from "../utils/localStorage/getItemLocalStorage";
import setItemLocalStorage from "../utils/localStorage/setItemLocalStorage";
import retornarInformacoesSessao from "../utils/session/retornarInformacoesSessao";
import usuarioTemaJson from "../data/usuarioTemaJson";
import removeItemLocalStorage from "../utils/localStorage/removeItemLocalStorage";
import toJson from "../utils/jsonConvert/toJson";

export const criarTemaCasoNecessario = () => {
  if (verificarSessaoSistemaAtiva()) {
    if (!verificaSeExisteLocalStorageDoTema()) {
      criarLocalStorageTemas();
    }

    if (!verificaSeUsuarioAtualJaPossuiTemaSalvo()) {
      criarTemaParaUsuarioAtual();
    }
  }
};

const verificaSeExisteLocalStorageDoTema = () => {
  const temaUsuariosSalvosStorage = getItemLocalStorage("theme-sis");

  if (
    temaUsuariosSalvosStorage === undefined ||
    temaUsuariosSalvosStorage === null ||
    temaUsuariosSalvosStorage === ""
  ) {
    return false;
  }

  return true;
};

export const alterarTemaParaUsuarioAtual = () => {
  if (verificarSessaoSistemaAtiva()) {
    try {
      if (verificaSeExisteLocalStorageDoTema()) {
        const temaUsuariosSalvosStorage = getItemLocalStorage("theme-sis");

        const dadosSessao = retornarInformacoesSessao();

        let temaUsuariosSalvos = toJson(temaUsuariosSalvosStorage);

        temaUsuariosSalvos?.map((tema, i) => {
          if (tema.user === dadosSessao.email) {
            temaUsuariosSalvos[i].theme =
              temaUsuariosSalvos[i].theme === 0 ? 1 : 0;
          }
        });

        setItemLocalStorage("theme-sis", temaUsuariosSalvos);

        return;
      }

      criarTemaCasoNecessario();
    } catch {
      console.error("Erro do cliente. Código LST1025.");
      apagarLocalStorageTemas();
    }

    return;
  }
};

export const verificaSeOTemaUsuarioAtualEscuro = () => {
  if (verificarSessaoSistemaAtiva()) {
    let estaEscuro = false;

    const dadosSessao = retornarInformacoesSessao();

    let listaLocalStorage = toJson(getItemLocalStorage("theme-sis"));

    listaLocalStorage?.map((tema) => {
      if (tema.user === dadosSessao.email) {
        if (tema.theme === 1) {
          estaEscuro = true;
        }
      }
    });

    return estaEscuro;
  }

  return false;
};

const criarLocalStorageTemas = () => {
  let temasUsuarios = [];

  if (verificarSessaoSistemaAtiva()) {
    setItemLocalStorage("theme-sis", temasUsuarios);
  }
};

const apagarLocalStorageTemas = () => {
  removeItemLocalStorage("theme-sis");
};

const criarTemaParaUsuarioAtual = () => {
  try {
    const dadosSessao = retornarInformacoesSessao();
    let userThemeJson = usuarioTemaJson;

    userThemeJson.user = dadosSessao.email;
    userThemeJson.theme = 0;

    let temasLista = toJson(getItemLocalStorage("theme-sis"));

    temasLista?.push(userThemeJson);

    setItemLocalStorage("theme-sis", temasLista);
  } catch {
    console.error("Erro do cliente. Código LTS1024.");
    apagarLocalStorageTemas();
  }
};

const verificaSeUsuarioAtualJaPossuiTemaSalvo = () => {
  const temaUsuariosSalvosStorage = getItemLocalStorage("theme-sis");
  const dadosSessao = retornarInformacoesSessao();

  let possuiTemaSalvo = false;

  if (
    temaUsuariosSalvosStorage !== undefined &&
    temaUsuariosSalvosStorage !== null &&
    dadosSessao !== null &&
    verificarSessaoSistemaAtiva()
  ) {
    const temaUsuariosSalvos = toJson(temaUsuariosSalvosStorage);

    temaUsuariosSalvos?.map((tema) => {
      if (tema.user === dadosSessao.email) {
        possuiTemaSalvo = true;
      }
    });

    return possuiTemaSalvo;
  }

  return null;
};
