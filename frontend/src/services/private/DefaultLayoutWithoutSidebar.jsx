import React, { memo, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import DefaultLayout from "../../components/DefaultLayout";

const DefaultLayoutWithoutSidebar = () => {
  const params = useParams();

  useEffect(() => {
    //Garantindo que a rolagem da página esteja no topo sempre que o usuário trocar de página
    window.scroll(0, 0);
  }, [params]);

  return (
    <DefaultLayout showSidebar={false}>
      <Outlet />
    </DefaultLayout>
  );
};

export default memo(DefaultLayoutWithoutSidebar);
