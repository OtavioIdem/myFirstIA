import retornaBaseTemplate from "../env/retornaBaseTemplate";

export default function importarTemaPadrao() {
  import("primereact/resources/themes/lara-light-blue/theme.css");

  const baseTemplate = retornaBaseTemplate();

  if (baseTemplate === "FL") {
    import("../../style/felidae/root-main.css");
  }

  if (baseTemplate === "VS" || baseTemplate === "VI") {
    import("../../style/v_saude_industria/root-main.css");
  }

  if (baseTemplate === "NL") {
    import("../../style/naturelab/root-main.css");
  }
}
