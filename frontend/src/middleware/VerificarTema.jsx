export default function verificarTema() {
  //Middleware para verificar se o sistema se encontra no tema padrão ou tema escuro
  const theme = parseInt(localStorage.getItem("theme"));

  return !theme ? false : theme === 1 ? true : false;
}
