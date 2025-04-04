import verificarUsuarioAdmin from "../middleware/verificarUsuarioAdmin";
import verificarUsuarioManager from "../middleware/verificarUsuarioManager";
import idPaginas from "./idPaginas";
import AddKeyPropertyOpcoesSidebar from "../functions/Sidebar/addKeyPropertyOpcoesSidebar";

const opcoesSidebar = (navigate) => {
  const manager = verificarUsuarioManager();
  const admin = verificarUsuarioAdmin();

  const opcoesMenuUsuarioInicio = [
    {
      label: "Dashboard",
      icon: "pi pi-chart-bar",
      href: "/dashboard",
      id: idPaginas.dashboard,
    },
    {
      label: "Exemplos",
      icon: "pi pi-objects-column",
      items: [
        {
          label: "Padrão",
          icon: "pi pi-table",
          id: "Teste",
          items: [
            {
              label: "Formulário",
              icon: "pi pi-receipt",
              items: [
                {
                  label: "Diversos",
                  icon: "pi pi-star",
                  href: "/exemplos/padrao/formulario/diversos",
                  id: idPaginas.diversos,
                },
              ],
            },
          ],
        },
      ],
      id: idPaginas.exemplos,
    },
    {
      label: "Gerenciamento",
      icon: "pi pi-cog",
      visible: manager,
      items: [
        {
          label: "Usuários",
          icon: "pi pi-user",
          href: "/gerenciamento/usuarios",
          id: idPaginas.usuarios,
        },
      ],
    },
  ];

  AddKeyPropertyOpcoesSidebar(opcoesMenuUsuarioInicio);

  return [...opcoesMenuUsuarioInicio];
};

export default opcoesSidebar;
