import { useContext, useCallback } from "react";
import { PaginaAtualContext } from "../../components/App/contexts/PaginaAtualContext";

const useCurrentPage = () => {
  const { paginaAtual, setPaginaAtual } = useContext(PaginaAtualContext);

  const currentPage = useCallback(() => {
    return paginaAtual;
  }, [paginaAtual]);
  const setCurrentPage = useCallback(
    (value) => {
      setPaginaAtual(value === undefined ? null : value);
    },
    [setPaginaAtual]
  );
  return { currentPage, setCurrentPage };
};
export default useCurrentPage;
