export default function alterarPosicaoHeader() {
  const headerDefault = document.getElementById("header-default");

  if (!headerDefault) return;

  const scrollY = window.scrollY; //Distância até o topo da página
  const menuBarHeader = headerDefault.querySelector(".p-menubar");

  const topoPaginaHeader = [];

  for (let i = 100; i <= 174; i++) {
    topoPaginaHeader.push(i);
  }

  const posicoesHeader = [];

  for (let i = -74; i <= 0; i++) {
    posicoesHeader.push(i);
  }

  const posicaoPorExibicao = {};

  topoPaginaHeader.forEach((data, i) => {
    posicaoPorExibicao[data] = posicoesHeader[i];
  });

  if (scrollY >= 100) {
    headerDefault.style.height = "56px";
    headerDefault.style.position = "fixed";
    headerDefault.style.top = `${
      posicaoPorExibicao[Math.round(scrollY <= 174 ? scrollY : 174)]
    }px`;
    headerDefault.style.margin = "0";
    menuBarHeader.style.borderRadius = "0";
  } else {
    headerDefault.style.height = "";
    headerDefault.style.top = "";
    headerDefault.style.position = "";
    headerDefault.style.margin = "";
    menuBarHeader.style.borderRadius = "";
  }
}
