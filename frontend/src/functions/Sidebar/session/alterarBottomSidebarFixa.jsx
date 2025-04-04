export default function alterarBottomSidebarFixa(
  objetoPosicoesSidebarEmRelacaoARolagemDoBottomTela
) {
  const sidebar = document.getElementById("sidebar-default");

  if (!sidebar) return;

  const footer = document.querySelector("footer");

  if (scrollY >= 100) {
    const scrollY = window.scrollY; // Quanto foi rolado na página
    const windowHeight = window.innerHeight; // Altura da janela de visualização
    const documentHeight = document.documentElement.scrollHeight; // Altura total do documento
    const distanceFromBottom = documentHeight - (scrollY + windowHeight); // Distância até o final da página

    const numero = footer.offsetHeight + 8;

    const listaAltura = objetoPosicoesSidebarEmRelacaoARolagemDoBottomTela;

    if (!listaAltura) return;

    sidebar.style.marginBottom = "0";

    if (distanceFromBottom <= numero) {
      sidebar.style.bottom = `${listaAltura[Math.round(distanceFromBottom)]}px`;
      sidebar.style.borderBottomRightRadius = "";
    } else {
      sidebar.style.borderBottomRightRadius = "0";
      sidebar.style.bottom = "0";
    }
  } else {
    sidebar.style.marginBottom = "";
    sidebar.style.bottom = "";
    sidebar.style.borderBottomRightRadius = "";
  }
}
