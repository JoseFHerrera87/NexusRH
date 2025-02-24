import React, { useEffect, useState } from "react";
import { BoxInfo, FileLink } from "../../Components";
import { faMoneyBill, faUser } from "@fortawesome/free-solid-svg-icons";
import "../Styles/companyView.css";
import { useFetch } from "../../Hooks/useFetch";

export const CompanyView = () => {
  const [dataLength, setdataLength] = useState(0);

  const { data } = useFetch("http://localhost:3000/employees");

  useEffect(() => {
    if (data) {
      setdataLength(data.length);
    }
  }, [data]);

  const boxMoney = {
    title: "Capital",
    subtitle: "Datos de la bancatlan",
    icon: faMoneyBill,
    value: "L. --",
  };

  const boxEmployees = {
    title: "Empleados",
    subtitle: "Datos de nexusRH",
    icon: faUser,
    value: dataLength,
  };

  return (
    <>
      <div className="box_container">
        <BoxInfo {...boxMoney}></BoxInfo>
        <BoxInfo {...boxEmployees}></BoxInfo>
      </div>
      <div className="files_container">
        <FileLink></FileLink>
        <FileLink></FileLink>
        <FileLink></FileLink>
        <FileLink></FileLink>
        <FileLink></FileLink>
        <FileLink></FileLink>
        <FileLink></FileLink>
        <FileLink></FileLink>
        <FileLink></FileLink>
      </div>
    </>
  );
};
