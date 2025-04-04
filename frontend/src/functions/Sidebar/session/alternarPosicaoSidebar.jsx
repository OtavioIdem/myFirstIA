export default function alternarPosicaoSidebar(
  objetoPosicoesSidebarEmRelacaoARolagemDoTopoTela
) {
  const sidebar = document.getElementById("sidebar-default");

  if (!sidebar) return;

  const scrollY = window.scrollY; //Distância até o topo da página

  const posicaoPorExibicao = objetoPosicoesSidebarEmRelacaoARolagemDoTopoTela;

  const sidebarDefaultWidthContainer = document.getElementById(
    "sidebar-default-width-container"
  );

  if (scrollY >= 108) {
    sidebar.style.position = "fixed";
    sidebar.style.top = `${
      posicaoPorExibicao[Math.round(scrollY <= 174 ? scrollY : 174)]
    }px`;
    sidebar.style.left = "-8px";
    sidebar.style.borderTopLeftRadius = "0";
    sidebar.style.borderTopRightRadius = "0";
    sidebar.style.borderBottomLeftRadius = "0";
    sidebar.style.height = "auto";
    sidebar.margin = "0";
    sidebarDefaultWidthContainer.style.width = "228px";
  } else {
    sidebar.style.position = "";
    sidebar.style.top = "";
    sidebar.style.margin = "";
    sidebar.style.left = "";
    sidebar.style.borderTopLeftRadius = "";
    sidebar.style.borderTopRightRadius = "";
    sidebar.style.borderBottomLeftRadius = "";
    sidebar.style.height = "";
    sidebarDefaultWidthContainer.style.width = "220px";
  }
}
