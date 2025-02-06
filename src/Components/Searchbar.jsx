import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Searchbar = () => {
  const [search, setsearch] = useState("");
  const maxLengthSearch = 30;

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= maxLengthSearch) {
      setsearch(value);
    }
  };

  const handleSearch = () => {
    if (search.length < 1 || search.length > maxLengthSearch) return;
    console.log(search);
  };

  return (
    <div className="header__search">
      <div className="search__searchbar">
        <input
          type="text"
          maxLength={maxLengthSearch}
          value={search}
          className="searchbar__input"
          placeholder="Buscar empleado..."
          onChange={handleChange}
        />
      </div>
      <button className="search__icon-container" onClick={handleSearch}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="icon-container__icon"
        />
      </button>
    </div>
  );
};
