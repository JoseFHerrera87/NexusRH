import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export const HeaderLayout = () => {
  return (
    <>
      <header className="h-12 px-1 py-6 flex items-center">
        <div className="w-20">
          <img
            src="FrentByte.png"
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-6xl grow-1 tracking-widest text-center text-title title-gradient font-semibold">
          Nexus RRHH
        </h1>
        <a
          className="text-2xl rounded-2xl bg-primaryn px-1.5 py-3 flex grow-1 max-w-30 justify-between items-center h-4 cursor-pointer hover:bg-primary-ligth"
          href="#"
        >
          <FontAwesomeIcon icon={faUserPlus} className="text-icons w-3 h-3" />
          <h3 className="text-secondaryn text-nowrap font-medium">
            Agregar Empleado
          </h3>
        </a>
      </header>
    </>
  );
};
