import React, { memo } from "react";
import DefaultCard from "../../../Default/DefaultCard";

const CardDashboard = () => {
  return <DefaultCard title="Dashboard" showBackBtn={false}></DefaultCard>;
};

export default memo(CardDashboard);
