import retornaBaseTemplate from "../env/retornaBaseTemplate";

export default function importarTemaEscuro() {
  import("primereact/resources/themes/lara-dark-indigo/theme.css");

  const baseTemplate = retornaBaseTemplate();

  if (baseTemplate === "FL") {
    import("../../style/felidae/root-dark.css");
  }

  if (baseTemplate === "VS" || baseTemplate === "VI") {
    import("../../style/v_saude_industria/root-dark.css");
  }

  if (baseTemplate === "NL") {
    import("../../style/naturelab/root-dark.css");
  }
}
