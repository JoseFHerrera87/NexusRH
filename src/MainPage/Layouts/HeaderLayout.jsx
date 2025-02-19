import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Searchbar } from "../../Components";

import "../Styles/headerStyle.css";

export const HeaderLayout = () => {
  return (
    <>
      <header className="head__header">
        <div className="header__logo">
          <img src="FrentByte.png" alt="logo" className="logo__img" />
        </div>
        <h1 className="header_title">Nexus RRHH</h1>
        <a className="header__link" href="#">
          <FontAwesomeIcon icon={faUserPlus} className="link__icon" />
          <h3 className="link__text">Agregar Empleado</h3>
        </a>
      </header>
    </>
  );
};
