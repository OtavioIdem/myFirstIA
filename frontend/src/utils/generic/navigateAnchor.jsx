import history from "../../libs/history";
import verificarSessaoSistemaAtiva from "../../middleware/verificarSessaoSistemaAtiva";

export default function navigateAnchor(e, href) {
  if (verificarSessaoSistemaAtiva()) {
    e.preventDefault();

    history.push(href);
    return;
  }

  history.push("/logout");
}
