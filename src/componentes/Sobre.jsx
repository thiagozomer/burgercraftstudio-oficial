import './Sobre.css';

const Sobre = ({ img, titulo, texto }) => {
  return (
    <div className="ctt1">
      <div>
        <img src={img} alt="location"></img>
      </div>
      <div className="divisao">
        <h2>{titulo}</h2>
        <p>{texto}</p>
      </div>
    </div>
  );
};

export default Sobre;
