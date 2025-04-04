import setItemLocalStorage from "../localStorage/setItemLocalStorage";

export default function tryReload() {
  //Definindo o valor de número de tentativas de repetir a ação caso ocorra uma falha no frontend que trave a aplicação
  setItemLocalStorage("try-reload", 0);
}
