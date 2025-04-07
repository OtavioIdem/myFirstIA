import React, { memo } from "react";
import DefaultCard from "../../../Default/DefaultCard";
import { Tooltip } from "primereact/tooltip";
import NoPicture from "../../../../assets/nopic.png";
import NoPictureDark from "../../../../assets/nopic_dark.png";
import DefaultButton from "../../../Default/Button/DefaultButton";
import "./style/CardMinhaConta.css";
import getItemLocalStorage from "../../../../utils/localStorage/getItemLocalStorage";
import { verificaSeOTemaUsuarioAtualEscuro } from "../../../../middleware/alterarOuVerificarTemaAtual";
import toJson from "../../../../utils/jsonConvert/toJson";
import verificaAmbienteAtualDev from "../../../../utils/env/verificaAmbienteAtualDev";
import navigateAnchor from "../../../../utils/generic/navigateAnchor";

const CardMinhaConta = () => {
  const item = toJson(getItemLocalStorage("data-session"));
  const fotoUsuario = toJson(getItemLocalStorage("pic"));

  return (
    <DefaultCard title="Minha conta" breadcrumb={false}>
      <Tooltip target=".change-picture-btn" showDelay={500} hideDelay={0} />
      <div className="card grid">
        <div className="col-12">
          <div className="table-container">
            <table className="table-configuracoes">
              <thead>
                <tr>
                  <th>Nome</th>
                  <td>{item?.nome}</td>
                </tr>
              </thead>
              <tbody className="divider-table"></tbody>
              <tbody>
                <tr>
                  <th>E-mail</th>
                  <td>{item?.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="card grid card-profile-container">
        <div className="col-auto">
          <div className="container-configuracoes mt-4 mr-4">
            <span className="user-profile-container">
              <img
                className="h-full w-full user-profile"
                src={
                  fotoUsuario
                    ? fotoUsuario
                    : verificaSeOTemaUsuarioAtualEscuro()
                    ? NoPictureDark
                    : NoPicture
                }
                alt="Sua foto de perfil"
              />
            </span>
          </div>
        </div>
        <div className="col-auto">
          <a
            href={
              verificaAmbienteAtualDev()
                ? "https://homolog-portalgestao.sisvansilweb.com.br:44375/myaccount"
                : "https://portalgestao.sisvansilweb.com.br:44372/myaccount"
            }
            target="_blank"
          >
            <DefaultButton
              icon="pi pi-upload"
              className="mt-4 change-picture-btn item-tooltip"
              label="Trocar foto"
              data_pr_tooltip="Será aberta uma nova aba do Portal de Gestão"
              data_pr_position="mouse"
              data_pr_showdelay={500}
              data_pr_mousetrack={true}
            />
          </a>
        </div>
      </div>
    </DefaultCard>
  );
};

export default memo(CardMinhaConta);
