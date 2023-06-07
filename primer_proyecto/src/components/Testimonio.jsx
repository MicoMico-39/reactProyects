import '../templates/styles/Testimonio.css';

export function Testimonio(props) {
  return (
    <div className="testimonio-div">
      <img className="img-testimonio" src={require(`../templates/images/testimonio-${props.imagen}.png`)} alt="imagen emma" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>

   
  );

}
