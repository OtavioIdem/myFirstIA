export default function rolarParaCimaCasoATelaEstejaNoFooter(abrirSideBar) {
  const distanciaDoBottom =
    document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

  if (distanciaDoBottom < 68 && abrirSideBar) {
    window.scrollTo(
      0,
      document.documentElement.scrollHeight - window.innerHeight - 68
    );
  }
}
