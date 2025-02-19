import React from "react";
import "../assets/fileLink.css";

export const FileLink = () => {
  return (
    <div className="file">
      <div className="file-details">
        <p className="text-title">Documento</p>
        <p className="text-body">Descripcion del documento</p>
      </div>
      <a className="file-button" href="#" target="_blank">
        Leer
      </a>
    </div>
  );
};
