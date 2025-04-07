import removeItemLocalStorage from "../utils/localStorage/removeItemLocalStorage";

export default function limparSessao() {
  removeItemLocalStorage("data-session");
  removeItemLocalStorage("token-sis");
  removeItemLocalStorage("pic");
}
