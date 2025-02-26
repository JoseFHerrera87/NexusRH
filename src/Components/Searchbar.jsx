import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

//Placeholder indica el texto de ayuda para el elemento a buscar, search y setsearch es el useState (el estado) que se le pasa al componente para saber que estado va a cambiar y poder usar la logica de busqueda en el componente que lo llama o en otro componente con una logica diferente
export const Searchbar = ({ placeholder, search, setsearch }) => {
  const maxLengthSearch = 40;

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxLengthSearch) {
      setsearch(value);
    }
  };

  return (
    <div className="search">
      <div className="search__searchbar">
        <input
          type="text"
          maxLength={maxLengthSearch}
          value={search}
          className="searchbar__input"
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
      <div className="search__icon-container">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="icon-container__icon"
        />
      </div>
    </div>
  );
};
