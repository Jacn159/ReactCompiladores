import React from "react";
import "./resultado.css";
const Resultado = (props) => {
  return (
    <div className="resultado" style={{opacity:props.aparecer}}>
      <h1>Resultado</h1>
      <h2> {props.mostrar}</h2>
    </div>
  );
};

export default Resultado;
