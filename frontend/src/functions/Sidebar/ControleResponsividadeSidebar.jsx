import { useContext, useEffect, useState } from "react";
import SidebarContext from "../../contexts/SidebarContext";
import AlterarBottomSidebarFixa from "./session/alterarBottomSidebarFixa";
import AlternarPosicaoSidebar from "./session/alternarPosicaoSidebar";
import RolarParaCimaCasoATelaEstejaNoFooter from "./session/rolarParaCimaCasoATelaEstejaNoFooter";
import { useParams } from "react-router-dom";
import GerarObjetoPosicoesSidebarEmRelacaoARolagemDoTopoTela from "./session/gerarObjetoPosicoesSidebarEmRelacaoARolagemDoTopoTela";
import GerarObjetoPosicoesSidebarEmRelacaoAoBottomTela from "./session/gerarObjetoPosicoesSidebarEmRelacaoAoBottomTela";

export default function ControleResponsividadeSidebar() {
  //Componente que realiza o controle da responsividade e animações da sidebar conforme o usuário rola a tela
  const { abrirSideBar } = useContext(SidebarContext);

  const [objetoPosicoesSidebarEmRelacaoARolagemDoTopoTela] = useState(
    GerarObjetoPosicoesSidebarEmRelacaoARolagemDoTopoTela()
  ); //Objeto que armazena a posição que o top da sidebar deve estar posicionado em relação ao tanto que o usuário rolou a tela. Ex: o usuário rolou 182px do topo da tela, então a sidebar quando estiver fixa, irá estar a -26px do topo da tela. Dessa forma, ele gera uma animação da sidebar ao trocar de posição absoluta para fixa e vice-versa

  const [
    objetoPosicoesSidebarEmRelacaoARolagemDoBottomTela,
    setObjetoPosicoesSidebarEmRelacaoARolagemDoBottomTela,
  ] = useState();

  const params = useParams();

  useEffect(() => {
    AlternarPosicaoSidebar(objetoPosicoesSidebarEmRelacaoARolagemDoTopoTela);
  }, [params]);

  useEffect(() => {
    setObjetoPosicoesSidebarEmRelacaoARolagemDoBottomTela(
      GerarObjetoPosicoesSidebarEmRelacaoAoBottomTela()
    );
    AlternarPosicaoSidebar(objetoPosicoesSidebarEmRelacaoARolagemDoTopoTela);
  }, []);

  useEffect(() => {
    AlternarPosicaoSidebar(objetoPosicoesSidebarEmRelacaoARolagemDoTopoTela);
    AlterarBottomSidebarFixa(
      objetoPosicoesSidebarEmRelacaoARolagemDoBottomTela
    );
    RolarParaCimaCasoATelaEstejaNoFooter(abrirSideBar);
  }, [abrirSideBar]);

  window.addEventListener("resize", () => {
    AlterarBottomSidebarFixa(
      objetoPosicoesSidebarEmRelacaoARolagemDoBottomTela
    );
  });

  document.addEventListener("scroll", () => {
    AlternarPosicaoSidebar(objetoPosicoesSidebarEmRelacaoARolagemDoTopoTela);
    AlterarBottomSidebarFixa(
      objetoPosicoesSidebarEmRelacaoARolagemDoBottomTela
    );
  });
}
