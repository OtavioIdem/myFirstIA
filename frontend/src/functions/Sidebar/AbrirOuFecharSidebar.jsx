import travarDestravarOverflowBody from "./session/travarDestravarOverflowBody";

export default function abrirOuFecharSidebar(abrirSideBar) {
  const sidebar = document.getElementById("sidebar-default");

  if (!sidebar) return;

  if (abrirSideBar) {
    //Fechando a sidebar
    sidebar.classList.remove("sidebar-default-closed");
    travarDestravarOverflowBody(true);
  } else {
    //Abrindo a sidebar
    sidebar.classList.add("sidebar-default-closed");
    travarDestravarOverflowBody(false);
  }
}
