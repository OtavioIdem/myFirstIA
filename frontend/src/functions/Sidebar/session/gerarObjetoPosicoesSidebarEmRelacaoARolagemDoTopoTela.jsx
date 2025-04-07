function gerarArrayPosicaoTopoPagina() {
  //Lista de posições que representam a rolagem que o usuário fez em relação ao topo da página, para a posição da sidebar ser alterada. Começa a partir de 108px e vai até 182px
  const topoPaginaSidebar = [];

  for (let i = 108; i <= 182; i++) {
    topoPaginaSidebar.push(i);
  }

  return topoPaginaSidebar;
}

function gerarArrayPosicaoSidebarEmRelacaoAoTopo() {
  //Lista de posições  que a sidebar deve ficar em relação ao topo da página
  const posicoesSidebar = [];

  for (let i = -100; i <= -26; i++) {
    posicoesSidebar.push(i);
  }

  return posicoesSidebar;
}

export default function gerarObjetoPosicoesSidebarEmRelacaoARolagemDoTopoTela() {
  const topoPaginaSidebar = gerarArrayPosicaoTopoPagina();

  const posicoesSidebar = gerarArrayPosicaoSidebarEmRelacaoAoTopo();

  const posicaoPorExibicao = {};

  topoPaginaSidebar.forEach((data, i) => {
    posicaoPorExibicao[data] = posicoesSidebar[i];
  });

  return posicaoPorExibicao;
}
