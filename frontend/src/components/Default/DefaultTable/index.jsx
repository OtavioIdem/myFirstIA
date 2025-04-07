import React, { memo, useEffect, useState, useCallback } from "react";
import { DataTable } from "primereact/datatable";
import { Skeleton } from "primereact/skeleton";
import { Column } from "primereact/column";
import DefaultInputTextFilter from "./session/DefaultInputTextFilter";
import _, { first } from "lodash";
import removerCaracteresEspeciais from "../../../utils/generic/removerCaracteresEspeciais";
import DefaultDropdown from "../Dropdown/DefaultDropdown";
import gerarHashAleatorio from "../../../utils/hash/gerarHashAleatorio";

//Para exibir o skeleton na DefaultTable, é necessário que a props "value" seja com valor "null"
const DefaultTable = ({
  value,
  defaultValue,
  rows = 15,
  className = "",
  emptyMessage = "Nenhum registro encontrado.",
  sortOrder = null,
  sortField = null,
  children,
  rowsSkeletonQuantity = 4,
  filter = false,
  filterInputText = "Filtrar",
  filterSpecifyField = "",
}) => {
  const [listaCampos, setListaCampos] = useState([]);

  useEffect(() => {
    if (children !== null && children !== undefined && children.length > 0) {
      const nomes = children.map((child) => child?.props);

      setListaCampos(nomes);
    }
  }, [value]);

  const rowsSkeletonArray = [];
  for (let i = 0; i < rowsSkeletonQuantity; i++) {
    rowsSkeletonArray.push(i);
  }

  const debouncedSetFilter = useCallback(
    _.debounce((newData) => {
      setFiltro(newData);
    }, 150),
    [] // A função debounce é criada apenas uma vez
  );

  const handleChange = (e) => {
    const newData = e.target.value;
    debouncedSetFilter(newData);
  };

  const [listaTipoFiltro, setListaTipoFiltro] = useState([]);

  useEffect(() => {
    if (!filter) return;

    for (let i = 0; i < listaCampos.length; i++) {
      if (listaCampos[i]?.field) {
        setTipoFiltro(listaCampos[i].field);
        break;
      }
    }

    if (filterSpecifyField !== "") {
      setListaTipoFiltro(
        listaCampos.filter((item) => item?.field === filterSpecifyField)
      );

      return;
    }

    setListaTipoFiltro(
      listaCampos.filter(
        (item) =>
          item?.field !== null &&
          item?.field !== undefined &&
          item?.field !== ""
      )
    );
  }, [listaCampos]);

  const [filtro, setFiltro] = useState("");

  const [tipoFiltro, setTipoFiltro] = useState("");
  useEffect(() => {
    const input = document.getElementById(idInputFiltro);
    if (input?.hasOwnProperty("value")) {
      setFiltro("");
      input.value = "";
    }
  }, [tipoFiltro]);

  const retornarInformacoesTabela = () => {
    if (value !== null) {
      if (filtro === "") return value;

      return value?.filter((item) =>
        removerCaracteresEspeciais(item[tipoFiltro]?.toLowerCase())?.includes(
          removerCaracteresEspeciais(filtro.toLowerCase())
        )
      );
    }

    return null;
  };

  const idInputFiltro = gerarHashAleatorio(6);

  return (
    <>
      {filter && (
        <div className="card-form mb-3">
          {filterSpecifyField === "" && (
            <div className="col-input" style={{ width: "200px" }}>
              {value !== null && (
                <DefaultDropdown
                  label="Filtrar por"
                  optionValue="field"
                  optionLabel="header"
                  options={listaTipoFiltro}
                  disabled={value === null}
                  value={tipoFiltro}
                  setValue={setTipoFiltro}
                />
              )}
              {value === null && (
                <Skeleton
                  height="3rem"
                  width="100%"
                  className="p-skeleton-input"
                />
              )}
            </div>
          )}
          <div className="col-input" style={{ width: "350px" }}>
            {value !== null && (
              <DefaultInputTextFilter
                label={filterInputText}
                value={filtro}
                defaultValue={filtro}
                onChange={handleChange}
                disabled={value === null}
                setValue={setFiltro}
                id={idInputFiltro}
              />
            )}
            {value === null && (
              <Skeleton
                height="3rem"
                width="100%"
                className="p-skeleton-input"
              />
            )}
          </div>
        </div>
      )}
      <div className="card grid">
        <div className="col-12">
          <DataTable
            paginator
            rows={rows}
            locale="ptbr"
            emptyMessage={emptyMessage}
            className={`w-full ${value === null ? "skeleton-table" : ""}${
              className ? " " + className : ""
            }`}
            value={
              value !== null ? retornarInformacoesTabela() : rowsSkeletonArray
            }
            defaultValue={defaultValue}
            sortOrder={sortOrder}
            sortField={sortField}
          >
            {value === null &&
              listaCampos.map((nome, i) => (
                <Column
                  body={<Skeleton />}
                  key={i}
                  header={nome.header}
                ></Column>
              ))}
            {value !== null && children}
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default memo(DefaultTable);
