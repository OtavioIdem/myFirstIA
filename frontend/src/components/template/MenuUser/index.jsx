import React, { useRef, memo, useEffect } from "react";
import { Menu } from "primereact/menu";
import { Badge } from "primereact/badge";
import classNames from "classnames";
import ProfilePicture from "../../../assets/prof.png";
import retornarInformacoesSessao from "../../../utils/session/retornarInformacoesSessao";
import { alterarTemaParaUsuarioAtual } from "../../../middleware/alterarOuVerificarTemaAtual";
import { verificaSeOTemaUsuarioAtualEscuro } from "../../../middleware/alterarOuVerificarTemaAtual";
import DefaultTooltip from "../../Default/DefaultTooltip";
import getEnv from "../../../utils/env/getEnv";
import navigateAnchor from "../../../utils/generic/navigateAnchor";
import verificaAmbienteAtualDev from "../../../utils/env/verificaAmbienteAtualDev";
import VerificaSeDispositivoMobile from "../../../utils/generic/verificaSeDispotivoMobile";
import { Button } from "primereact/button";
import "./style/MenuUser.css";

const MenuUser = () => {
  const menuRight = useRef(null);

  const isMobile = VerificaSeDispositivoMobile();

  useEffect(() => {
    document.addEventListener("scroll", () => {
      fecharMenu();
    });
    window.addEventListener("resize", () => {
      fecharMenu();
    });
  }, []);

  const fecharMenu = () => {
    if (menuRight) {
      menuRight?.current?.hide(true);
      const body = document.querySelector("body");
      body.style.overflowY = "auto";
    }
  };

  const dadosSessao = retornarInformacoesSessao();

  const itemRenderer = (item) => (
    <div
      className="p-menuitem-content"
      onClick={() => {
        if (item.function) {
          item.function();
        }
      }}
    >
      <a className="flex align-items-center p-menuitem-link">
        <span className={item.icon} />
        <span className="mx-2">{item.label}</span>
        {item.badge && <Badge className="ml-auto" value={item.badge} />}
        {item.shortcut && (
          <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
            {item.shortcut}
          </span>
        )}
      </a>
    </div>
  );

  const items = [
    {
      template: () => {
        return (
          isMobile && (
            <span className="flex justify-content-start align-items-center ml-3">
              <Button
                severity="secondary"
                outlined
                className="rounded-btn"
                icon="pi pi-times"
                onClick={() => {
                  const menuUser = document.getElementById("popup_menu_right");
                  menuUser.classList.add("default-menu-header-mobile-close");
                  setTimeout(() => {
                    fecharMenu();
                  }, 300);
                }}
              />
            </span>
          )
        );
      },
    },
    {
      className: "p-menu-custom",
      items: [
        {
          label: "Minha conta",
          icon: "pi pi-user",
          command: (e) => {
            navigateAnchor(e.originalEvent, "/minhaconta");
          },
          url: "/minhaconta",
          className: "p-menuitem-custom",
        },
        {
          label: verificaSeOTemaUsuarioAtualEscuro()
            ? "Tema padrão"
            : "Tema escuro",
          icon: `pi${
            verificaSeOTemaUsuarioAtualEscuro() ? " pi-sun" : " pi-moon"
          }`,
          theme: true,
          function: () => {
            menuRight.current.hide(true);
            alterarTemaParaUsuarioAtual();
            location.reload();
          },
          template: itemRenderer,
        },
        {
          template: () => {
            return (
              <div className="p-menuitem-content">
                <a
                  className="flex align-items-center p-menuitem-link"
                  href={
                    verificaAmbienteAtualDev()
                      ? "https://homolog-portalgestao.sisvansilweb.com.br:44375"
                      : "https://portalgestao.sisvansilweb.com.br:44372"
                  }
                  target="_blank"
                  onClick={() => {
                    menuRight.current.hide(true);
                  }}
                >
                  <img
                    src="/p-gestao.png"
                    className="p-gestao-logo-menu-user"
                    height={17}
                    width={17}
                  />
                  <span className="mx-2">Portal de Gestão</span>
                </a>
              </div>
            );
          },
        },
        {
          label: "Sair",
          icon: "pi pi-sign-out",
          command: (e) => {
            navigateAnchor(e.originalEvent, "/logout");
          },
          url: "/logout",
        },
      ],
    },
    {
      separator: true,
    },
    {
      template: (item, options) => {
        return (
          <button
            onClick={(e) => options.onClick(e)}
            className={classNames(
              options.className,
              "w-full p-link flex align-items-center p-2 pl-4 text-color hover:surface-200 border-noround"
            )}
          >
            <div className="flex flex-column align email-user-menu">
              <span className="email-user-menu-text">{dadosSessao?.nome}</span>
            </div>
          </button>
        );
      },
    },
  ];

  return (
    <div className="card flex justify-content-center">
      <div className="card flex justify-content-center">
        <Menu
          model={items}
          popup
          ref={menuRight}
          id="popup_menu_right"
          popupAlignment="right"
          className={`w-full md:w-15rem default-menu-header${
            isMobile ? " default-menu-header-mobile" : ""
          }`}
        />
      </div>
      <DefaultTooltip target=".sis-menu-user-tooltip" />
      <span
        className="avatar-user-container mr-2 sis-menu-user-tooltip"
        onClick={(event) => {
          menuRight.current.toggle(event);

          if (isMobile) {
            const body = document.querySelector("body");
            body.style.overflowY = "hidden";
          }
        }}
        aria-controls="popup_menu_right"
        aria-haspopup
        style={{ height: "40px", width: "40px" }}
        data-pr-tooltip={`Conta do ${getEnv("SIS_NOMENCLATURA")}`}
        data-pr-position="left"
        data-pr-mousetrack={true}
      >
        <img className="avatar-user" src={ProfilePicture} alt="Foto perfil" />
        <div className="overlay-avatar-user"></div>
      </span>
    </div>
  );
};

export default memo(MenuUser);
