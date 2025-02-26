import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faBuildingUser,
  faFileSignature,
  faGear,
  faFile,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import useStorePanel from "../../store/storePanel";
import { EmployeesView, CompanyView, ConfigView, PayrollView } from "../Views";
import { useRef } from "react";

export const AsideLayout = () => {
  const employeesRef = useRef(null);
  const companyRef = useRef(null);
  const payrollRef = useRef(null);
  const configRef = useRef(null);

  const { changeView } = useStorePanel();

  const onSelectView = (e) => {
    if (e.currentTarget.classList.contains("nav__option--active")) return;

    employeesRef.current.classList.remove("nav__option--active");
    companyRef.current.classList.remove("nav__option--active");
    payrollRef.current.classList.remove("nav__option--active");
    configRef.current.classList.remove("nav__option--active");

    e.currentTarget.classList.add("nav__option--active");

    switch (e.currentTarget.dataset.name) {
      case "EmployeesView":
        changeView(<EmployeesView />);
        break;
      case "CompanyView":
        changeView(<CompanyView />);
        break;
      case "PayrollView":
        changeView(<PayrollView />);
        break;
      case "ConfigView":
        changeView(<ConfigView />);
        break;
    }
  };

  return (
    <aside className="bg-primaryn relative w-1/4 h-[calc(100vh - 14rem)] rounded-t-none rounded-r-2xl rounded-b-2xl rounded-l-none grow-1">
      <header className="px-2 py-1">
        <h1 className="text-center text-secondaryn text-4xl font-semibold tracking-wider">
          Panel
        </h1>
        <svg className="absolute w-5 h-9 top-0 left-0 z-1 polka opacity-30"></svg>
      </header>

      <nav className="my-1 h-2/4">
        <ul className="flex flex-col  w-full h-full">
          <li
            className=""
            ref={employeesRef}
            data-name="EmployeesView"
            onClick={onSelectView}
          >
            <div className="">
              <FontAwesomeIcon icon={faFilter} className="" />
              <span className="">Empleados</span>
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
            ref={payrollRef}
            data-name="PayrollView"
            onClick={onSelectView}
          >
            <div className="option__container">
              <FontAwesomeIcon
                icon={faFileSignature}
                className="option__icon"
              />
              <span className="option__text">Planillas</span>
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
        </ul>
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
