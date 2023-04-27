import { useState } from "react";
import "./Style/reset.css";
// import "./Style/rigth/rigth.css";
import "../src/App.css";
// import "./Style/left/left.css";
import Input from "./components/input";
import Resultado from "./components/resultado";
import Header from "./components/header";
import Cards from "./components/cards";
function App() {
  const [count, setCount] = useState(0);
  const [mostrarRespuesta, actualizarMostrar] = useState(false);
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarRespuesta);
  };
  return (
    <>
      <main>
        <Header cambio={cambiarMostrar}/>
        
        <Input></Input>

        
      </main>
    </>
  );
}

export default App;
