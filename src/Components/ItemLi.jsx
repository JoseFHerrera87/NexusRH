import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ItemLi = ({ id, title, icon, view, onSelect, isActive }) => (
  <li
    className={`text-secondaryn w-full text-center lg:text-start cursor-pointer relative py-1 px-2
    ${isActive ? "li--active" : ""}`}
    onClick={() => onSelect(id, view)}
  >
    <FontAwesomeIcon icon={icon} className="text-3xl lg:text-2xl" />
    <span className="text-xl font-semibold ml-2 hidden lg:inline">{title}</span>
  </li>
);
