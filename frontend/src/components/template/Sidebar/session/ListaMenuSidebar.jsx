import { useContext, useEffect, useState } from "react";
import RenderizarItensSidebar from "./RenderizarItensSidebar";
import opcoesSidebar from "../../../../data/opcoesSidebar";
import { useNavigate } from "react-router-dom";
import { ItensCarregadosContext } from "../contexts/ItensCarregadosContext";
import { PaginaAtualContext } from "../../../App/contexts/PaginaAtualContext";

export default function ListaMenuSidebar() {
  const navigate = useNavigate();
  const [menuUsuario, setMenuUsuario] = useState([]);

  const { paginaAtual } = useContext(PaginaAtualContext);

  const { setCarregado } = useContext(ItensCarregadosContext);

  useEffect(() => {
    setCarregado(false);
  }, [paginaAtual]);

  useEffect(() => {
    if (menuUsuario.length > 0) {
      setTimeout(() => {
        setCarregado(true);
      }, 100);
    }
  }, [menuUsuario, paginaAtual]);

  useEffect(() => {
    setMenuUsuario(opcoesSidebar(navigate));
  }, []);

  return <RenderizarItensSidebar items={menuUsuario} />;
}
