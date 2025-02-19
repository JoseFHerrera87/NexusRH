import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/boxInfo.css";

export const BoxInfo = ({ title, subtitle, icon, value }) => {
  return (
    <div className="container_box">
      <header className="header_box">
        <h4 className="box_title">{title}</h4>
        <FontAwesomeIcon icon={icon} className="box_icon" />
      </header>

      <div className="box_container_data">
        <h2 className="box_data">{value}</h2>
      </div>

      <footer className="box_footer">
        <span className="box_subtitle">{subtitle}</span>
      </footer>
    </div>
  );
};
