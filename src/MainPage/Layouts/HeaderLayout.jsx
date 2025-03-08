import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export const HeaderLayout = () => {
  return (
    <header className="col-span-8 row-span-2 mb-2 mr-2 flex items-center justify-around pt-2">
      <div className="max-w-25 ">
        <img src="FrentByte.png" alt="logo" className="p-2" />
      </div>

      <h1 className="text-5xl tracking-widest text-center text-title title-gradient font-semibold">
        Nexus RRHH
      </h1>

      <a
        href="#"
        className="text-2xl text-center block rounded-2xl bg-primaryn px-3 py-2 cursor-pointer hover:bg-primary-ligth lg:px-1"
      >
        <FontAwesomeIcon icon={faUserPlus} className="text-icons lg:mr-1" />
        <span className="text-secondaryn hidden font-medium lg:text-nowrap lg:inline">
          Agregar Empleado
        </span>
      </a>
    </header>
  );
};
