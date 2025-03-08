import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingUser,
  faFileSignature,
  faGear,
  faFile,
  faRightFromBracket,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { useStorePanel } from "@storePanel";
import { ItemLi } from "@components";
import { EmployeesView, CompanyView, ConfigView, PayrollView } from "../Views";
import { useState } from "react";

export const AsideLayout = () => {
  const { changeView } = useStorePanel();
  const [activeOption, setActiveOption] = useState(1);

  const options = [
    { id: 1, title: "Empleados", icon: faFilter, view: EmployeesView },
    { id: 2, title: "Empresa", icon: faBuildingUser, view: CompanyView },
    { id: 3, title: "Planilla", icon: faFileSignature, view: PayrollView },
    { id: 4, title: "Ajustes", icon: faGear, view: ConfigView },
  ];

  const onSelect = (id, view) => {
    if (id !== activeOption) {
      setActiveOption(id);
      changeView(view);
    }
  };

  return (
    <aside className="bg-primaryn relative col-span-2 row-span-6 rounded-t-none rounded-r-2xl rounded-b-2xl rounded-l-none">
      <header className="px-2 py-1">
        <h1 className="text-center text-secondaryn text-4xl font-semibold tracking-wider">
          Panel
        </h1>
        <svg className="absolute w-5 h-9 top-0 left-0 z-1 polka opacity-30"></svg>
      </header>

      <nav className="my-1 h-2/4">
        <ul className="flex flex-col w-full h-full">
          {options.map((option) => (
            <ItemLi
              key={option.id}
              onSelect={onSelect}
              isActive={activeOption == option.id}
              {...option}
            />
          ))}
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
