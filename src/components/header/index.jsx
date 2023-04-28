import React, { useState } from "react";
import Cards from "../../components/cards";
import "./header.css";

const Header = () => {
  const [cardVisible, setCardVisible] = useState(false);
  const [cardData, setCardData] = useState({
    imagen: "",
    nombre: "",
    github: "",
    linkedin: "",
  });

  const [showSearch, setShowSearch] = useState(true);

  const showCard = (imagen, nombre, github, linkedin) => {
    setShowSearch(false);
    hideCard();
    setTimeout(() => {
      setCardData({
        imagen: imagen,
        nombre: nombre,
        github: github,
        linkedin: linkedin,
      });
      setCardVisible(true);
    }, 0);
  };
  
  const hideCard = () => {
    setCardVisible(false);
    setTimeout(() => {
      setShowSearch(true);
    }, 0);
    
  };
  return (
    <header className="Header">
      <img className="logo" src="/public/assets/logo.png" alt="" />
      <nav>
        <ul className="menu">
          <li className="mostrar" onClick={() => showCard("https://github.com/Jacn159.png", "Casma Nieto Jose Aldahir", "https://github.com/Jacn159", "https://www.linkedin.com/")}>
            Casma
          </li>
          <li className="mostrar" onClick={() => showCard("https://github.com/FredyPachas.png", "Pachas Napa Fredy Johan", "https://github.com/FredyPachas", "https://www.linkedin.com/in/example")}>
            Pachas?
          </li>
          <li className="mostrar" onClick={() => showCard("https://github.com/HerrSopMod.png", "Canales Cuellar Jose Luis Santiago", "https://github.com/HerrSopMod", "https://www.linkedin.com/in/another-example")}>
            Canales
          </li>
          <li className="mostrar" onClick={() => showCard("https://github.com/Jesus1905.png", "Magallanes Tasayco Jesus Antonio", "https://github.com/Jesus1905", "https://www.linkedin.com/in/last-example")}>
            Magallanes
          </li>
          <li className="mostrar" onClick={() => showCard("https://github.com/ProgramerPA.png", "Cama Valentin Piero Alexis", "https://github.com/ProgramerPA", "https://www.linkedin.com/in/last-example")}>
            Cama
          </li>
        </ul>
      </nav>
      {cardVisible ? (
      <div>
        <div className="transition">
          <img src="/public/assets/carga.gif" alt="" />
        </div>
              <div className="overlay">
        
        <Cards
          imagen={cardData.imagen}
          nombre={cardData.nombre}
          github={cardData.github}
          linkedin={cardData.linkedin}
          regresar={hideCard}
        />
      </div>
      </div>

    ) : (
      showSearch && (
        <div className="buscador">
          <div className="imagen">
            <img src="/public/assets/buscador.png" alt="" />
          </div>
          <p className="nofound">Selecciona un integrante</p>
        </div>
      )
    )}  
    </header>
  );
};

export default Header;
