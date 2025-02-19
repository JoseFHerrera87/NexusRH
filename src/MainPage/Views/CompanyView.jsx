import React from "react";
import { BoxInfo, FileLink } from "../../Components";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";

export const CompanyView = () => {
  const boxData = {
    title: "Capital",
    subtitle: "Datos de la bancatlan",
    icon: faMoneyBill,
    value: "$45,231.89",
  };

  return (
    <>
      <BoxInfo {...boxData} />
      <FileLink />
    </>
  );
};
