import React, { memo } from "react";
import DefaultDialog from "../../../../Default/DefaultDialog";
import genericMessages from "../../../../../messages/genericMessages";

const InternetOfflineAlertDialog = ({
  openDialog,
  setOpenDialog,
  className,
}) => {
  return (
    <DefaultDialog
      title="Sem conexão com a internet"
      openDialog={openDialog}
      setOpenDialog={setOpenDialog}
      className={className}
      closable={false}
    >
      <div className="card grid">
        <div className="col-12">
          <p className="mb-0">{genericMessages.internetConnectionOff}</p>
          <p className="mt-0">
            <b>Verifique sua rede.</b>
          </p>
        </div>
      </div>
    </DefaultDialog>
  );
};

export default memo(InternetOfflineAlertDialog);
