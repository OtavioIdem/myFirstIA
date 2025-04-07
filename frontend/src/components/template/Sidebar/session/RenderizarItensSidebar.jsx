import React, { useContext } from "react";
import { PaginaAtualContext } from "../../../App/contexts/PaginaAtualContext";
import { ExpandedItemsContext } from "../contexts/ExpandedItemsContext";
import { ItensCarregadosContext } from "../contexts/ItensCarregadosContext";
import Exception from "../../../../exception/Exception";
import navigateAnchor from "../../../../utils/generic/navigateAnchor";

export default function RenderizarItensSidebar({
  items,
  chamadaInterna = false,
}) {
  const { expandedItems, setExpandedItems } = useContext(ExpandedItemsContext);

  const { carregado } = useContext(ItensCarregadosContext);

  const toggleExpand = (key) => {
    setExpandedItems((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  const { paginaAtual } = useContext(PaginaAtualContext);

  const isExpanded = (key) => expandedItems.includes(key);

  const ItemListaMenuSidebar = ({ props, children, className = "" }) => {
    return (
      <li
        className={`anchor-default-sidebar${className !== "" ? className : ""}${
          paginaAtual === props?.id ? " anchor-current-page" : ""
        }${!chamadaInterna ? " anchor-default-sidebar-father" : ""}`}
      >
        <a
          href={props.href ?? null}
          className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
          onClick={(e) =>
            props.href == undefined
              ? toggleExpand(props.toggleExpand)
              : navigateAnchor(e, props.href)
          }
        >
          {typeof props.icone === "object" ? (
            props.icone
          ) : (
            <i className={`${props.icone} mr-2`}></i>
          )}

          <span className="font-medium">{props.nome}</span>
          {props.toggleExpand != null && (
            <i
              className={`pi pi-chevron-down ml-auto ${
                isExpanded(props.toggleExpand) ? "rotate-180" : ""
              }`}
            ></i>
          )}
        </a>
        {children}
      </li>
    );
  };

  const ListaInternaMenuSidebar = ({ children, expand }) => {
    return (
      <ul className={`list-none py-0 pl-3 pr-0 m-0 ${!expand ? "d-none" : ""}`}>
        {children}
      </ul>
    );
  };

  const coletarInformacoesTodosItensFilhosDaAba = (
    child,
    chamadaInterna = false
  ) => {
    const informacoes = {
      itensFilhos: [],
      quantidadeExpansiveis: !chamadaInterna ? 1 : 0,
    };

    informacoes.itensFilhos.push(child);
    informacoes.quantidadeExpansiveis++;

    if (!child.items) return informacoes;

    child.items.map((item) => {
      informacoes.itensFilhos.push(item);

      if (!item.items) return;

      const itensFilhosChild = coletarInformacoesTodosItensFilhosDaAba(
        item,
        true
      );

      informacoes.quantidadeExpansiveis =
        informacoes.quantidadeExpansiveis +
        itensFilhosChild.quantidadeExpansiveis;

      informacoes.itensFilhos.push(...itensFilhosChild.itensFilhos);
    });

    return informacoes;
  };

  const verificarFilhosSeNecessarioExpandir = (children) => {
    if (!children?.length) return false;

    let expandir = false;

    for (let i = 0; i < children.length; i++) {
      const informacoesItensFilhos = coletarInformacoesTodosItensFilhosDaAba(
        children[i]
      );

      if (informacoesItensFilhos.quantidadeExpansiveis > 5) {
        throw new Exception(
          "SBR0005",
          "Uma aba da sidebar pode ter no máximo 5 itens expansíveis"
        );
      }

      informacoesItensFilhos.itensFilhos.map((t) => {
        if (t.id === paginaAtual) {
          expandir = true;
        }
      });
    }

    return expandir;
  };

  return (
    <ul className="list-none p-0 mt-1">
      {items.map((item, i) => {
        const expandir = verificarFilhosSeNecessarioExpandir(item?.items);

        if (expandir && !isExpanded(item.key) && item.items) {
          if (!carregado) {
            setTimeout(() => {
              toggleExpand(item.key);
            }, 5);
          }
        }

        if (item?.visible !== false) {
          return (
            <ItemListaMenuSidebar
              key={i}
              props={{
                icone: item.icon,
                nome: item.label,
                toggleExpand: item.items ? item.key : undefined,
                href: item?.href ?? null,
                id: item.id,
                items: item?.items ?? null,
              }}
            >
              {item.items && (
                <ListaInternaMenuSidebar expand={isExpanded(item.key)}>
                  <RenderizarItensSidebar items={item.items} />
                </ListaInternaMenuSidebar>
              )}
            </ItemListaMenuSidebar>
          );
        }
      })}
    </ul>
  );
}
