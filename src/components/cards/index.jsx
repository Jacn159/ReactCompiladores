import "./card.css";

const Cards = (props) => {
  return (
    <div className="card">
      <img src={props.imagen} alt="" />
      <p>{props.nombre}</p>
      <div class="redes">
        <ul>
          <li>
            {" "}
            <a href={props.github} Target="_blank">
              {" "}
              Github
            </a>
          </li>
          <li>
            {" "}
            <a href={props.linkedin} Target="_blank">
              {" "}
              Linkedin
            </a>
          </li>
        </ul>
        <button className="regresar" onClick={props.regresar}> 👈</button>
      </div>
    </div>
  );
};
export default Cards;
