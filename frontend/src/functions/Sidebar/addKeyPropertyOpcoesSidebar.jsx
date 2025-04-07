import gerarHashAleatorio from "../../utils/hash/gerarHashAleatorio";
import removerCaracteresEspeciais from "../../utils/generic/removerCaracteresEspeciais";

export default function addKeyPropertyOpcoesSidebar(opcoesSidebar) {
  // Adiciona a propriedade 'key' com um hash aleatório a todas opcões da sidebar
  opcoesSidebar.forEach((opcao) => {
    const hash = gerarHashAleatorio();

    opcao.key =
      hash +
      (opcao.label.length > 0
        ? removerCaracteresEspeciais(
            opcao.label[opcao.label.length - opcao.label.length].toUpperCase()
          ) +
          removerCaracteresEspeciais(opcao.label[opcao.label.length - 1]) +
          hash[2]
        : hash[4].toUpperCase());

    // Se o objeto possui uma propriedade 'items' e ela é um array, chama a função recursivamente
    if (Array.isArray(opcao.items)) {
      addKeyPropertyOpcoesSidebar(opcao.items);
    }
  });
}
