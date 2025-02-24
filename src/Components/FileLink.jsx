import React from "react";
import "../assets/fileLink.css";

export const FileLink = () => {
  return (
    <div className="file">
      <div className="file-details">
        <p className="text-title">Normativas internas</p>
        <p className="text-body">Sobre las politicas internas del hospital</p>
      </div>
      <a className="file-button" href="JoseHerrera_Tarea3.pdf" target="_blank">
        Leer
      </a>
    </div>
  );
};
