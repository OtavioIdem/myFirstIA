import React, { memo } from "react";
import { Tooltip } from "primereact/tooltip";
import Exception from "../../../exception/Exception";

const DefaultTooltip = ({ target }) => {
  if (target === undefined || target === null) {
    throw new Exception(
      "A propriedade target do DefaultTooltip precisa de um valor definido.",
      "ES2414"
    );
  }

  return <Tooltip showDelay={500} hideDelay={0} target={target} />;
};

export default memo(DefaultTooltip);
