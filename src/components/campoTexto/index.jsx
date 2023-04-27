import "./campoTexto.css";
import React, { useState } from "react";
import Resultado from "../resultado";
import compilador from "../logic/compilador";
import "./campoTexto.css";
export const Contexto = React.createContext();

const campoTexto = (props) => {
  const [wau, setWau] = useState("");
  const [ocultar, setOcultar] = useState("");
  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  let meow = () => {
    setOcultar("1")
    const resultado = compilador(props.valor);
    if (resultado=="") {
        setOcultar("0")
    }else setWau(resultado);
    
  };
  const aparecer = ()=> {
    props.borrarTexto();
    setOcultar("0")
  }
  return (
    <div>
      <div className="campoTexto">
        <label onClick={props.click}>
          Hola a todos, este es nuestro automata
        </label>
        <textarea
          value={props.valor}
          onChange={manejarCambio}
          className="input"
          placeholder="Escribe ..."
        />
        <div className="botonera">
          <button className="boton" onClick={meow}>
            Verificar
          </button>
          <button className="boton" onClick={aparecer}> Borrar</button>
        </div>
      </div>

      <Resultado mostrar={wau} aparecer={ocultar}></Resultado>

      {/* <Resultado mostrar={resultado}></Resultado> */}
    </div>
  );
};

export default campoTexto;
