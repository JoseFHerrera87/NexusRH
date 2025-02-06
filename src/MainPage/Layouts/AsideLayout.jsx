import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faBuildingUser,
  faFileSignature,
  faGear,
  faFile,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/asideStyle.css";
import useStorePanel from "../../store/storePanel";
import { EmployeesView, CompanyView, PolicyView, ConfigView } from "../Views";
import { useRef } from "react";

export const AsideLayout = () => {
  const employeesRef = useRef(null);
  const companyRef = useRef(null);
  const policyRef = useRef(null);
  const configRef = useRef(null);

  const { changeView } = useStorePanel();

  const onSelectView = (e) => {
    if (e.currentTarget.classList.contains("nav__option--active")) return;

    employeesRef.current.classList.remove("nav__option--active");
    companyRef.current.classList.remove("nav__option--active");
    policyRef.current.classList.remove("nav__option--active");
    configRef.current.classList.remove("nav__option--active");

    e.currentTarget.classList.add("nav__option--active");

    switch (e.currentTarget.dataset.name) {
      case "EmployeesView":
        changeView(<EmployeesView />);
        break;
      case "CompanyView":
        changeView(<CompanyView />);
        break;
      case "PolicyView":
        changeView(<PolicyView />);
        break;
      case "ConfigView":
        changeView(<ConfigView />);
        break;
      default:
        changeView(<EmployeesView />);
        break;
    }
  };

  return (
    <aside>
      <header className="aside__header">
        <h1>Panel</h1>
        <svg className="header__polka"></svg>
      </header>

      <nav className="aside__nav">
        <li
          className="nav__option nav__option--active"
          ref={employeesRef}
          data-name="EmployeesView"
          onClick={onSelectView}
        >
          <div className="option__container">
            <FontAwesomeIcon icon={faFilter} className="option__icon" />
            <span className="option__text">Empleados</span>
          </div>
        </li>
        <li
          className="nav__option"
          ref={companyRef}
          data-name="CompanyView"
          onClick={onSelectView}
        >
          <div className="option__container">
            <FontAwesomeIcon icon={faBuildingUser} className="option__icon" />
            <span className="option__text">Empresa</span>
          </div>
        </li>
        <li
          className="nav__option"
          ref={policyRef}
          data-name="PolicyView"
          onClick={onSelectView}
        >
          <div className="option__container">
            <FontAwesomeIcon icon={faFileSignature} className="option__icon" />
            <span className="option__text">Politicas</span>
          </div>
        </li>
        <li
          className="nav__option"
          ref={configRef}
          data-name="ConfigView"
          onClick={onSelectView}
        >
          <div className="option__container">
            <FontAwesomeIcon icon={faGear} className="option__icon" />
            <span className="option__text">Ajustes</span>
          </div>
        </li>
      </nav>

      <a href="#" className="aside__button">
        <FontAwesomeIcon icon={faFile} className="button__icon" />
        <span className="button__text">Agregar Reporte E/S</span>
      </a>

      <div className="aside__exit">
        <a className="exit__btn" href="#">
          <FontAwesomeIcon icon={faRightFromBracket} className="btn__icon" />
          <span className="btn__text">Salir</span>
        </a>
      </div>
    </aside>
  );
};
