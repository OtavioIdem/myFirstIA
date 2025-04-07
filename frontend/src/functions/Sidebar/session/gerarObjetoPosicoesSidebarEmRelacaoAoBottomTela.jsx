export default function gerarObjetoPosicoesSidebarEmRelacaoAoBottomTela() {
  const footer = document.querySelector("footer");

  const numero = footer.offsetHeight + 8;

  const objetoAltura = {};

  for (let i = 0; i <= numero; i++) {
    objetoAltura[`${numero - i}`] = i + 1;
  }

  return objetoAltura;
}
