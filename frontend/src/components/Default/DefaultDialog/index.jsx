import React, { memo } from "react";
import { Dialog } from "primereact/dialog";
import { ProgressBar } from "primereact/progressbar";

const ProgressBarDialog = () => {
  return (
    <div className="card progress-bar-dialog">
      <ProgressBar mode="indeterminate" style={{ height: "3px" }}></ProgressBar>
    </div>
  );
};

const DefaultDialog = ({
  dialogLoad,
  openDialog,
  setOpenDialog,
  title,
  children,
  minWidth = "35rem",
  maxWidth = "50rem",
  className = "",
  closable = true,
}) => {
  const headerElement = (
    <div className="inline-flex align-items-center justify-content-center gap-2">
      {dialogLoad && <ProgressBarDialog />}
      <span className="font-bold p-dialog-title">{title}</span>
    </div>
  );

  return (
    <Dialog
      header={headerElement}
      position={"center"}
      visible={openDialog}
      style={{ minWidth: minWidth, maxWidth: maxWidth }}
      onHide={() => {
        if (!openDialog || !closable) return;
        setOpenDialog(false);
      }}
      resizable={false}
      draggable={false}
      dismissableMask
      blockScroll
      className={className}
    >
      {dialogLoad && <div className="body-overlay-loading"></div>}
      {children}
    </Dialog>
  );
};

export default memo(DefaultDialog);
