import { useState } from "react";
import CampoTexto from "../campoTexto";
import "./input.css"
const Input = (props) => {
 const [palabra, setPalabra] = useState("");

 const manejarEnvios = (evento) =>{
    evento.preventDefault();
    // let datosAEnviar = {
    //     palabra: palabra
    // }
    // console.log(datosAEnviar);
 }
 const borrarTexto = () => {
  setPalabra("");
};
  return (
    <div className="Input">
      <form onSubmit={manejarEnvios}>
        <CampoTexto
          valor={palabra}
          actualizarValor={setPalabra}
          click={props.click}
          borrarTexto={borrarTexto}
        />
      </form>
     
    </div>
  );
};

export default Input;
