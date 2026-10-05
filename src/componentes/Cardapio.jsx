import { useState } from 'react';
import { useCarrinho, valorParaNumero } from '../context/CarrinhoContext.jsx';
import './Cardapio.css';

const Cardapio = ({ img, titulo, texto, valor }) => {
  const { adicionar } = useCarrinho();
  const [adicionado, setAdicionado] = useState(false);

  const handleAdicionar = () => {
    adicionar({ id: titulo, titulo, img, preco: valorParaNumero(valor) });
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 1200);
  };

  return (
    <div className="cardapio-item">
      <div className="cardapio-imagem">
        <img src={img} alt={titulo} />
      </div>
      <h2>{titulo}</h2>
      <p>{texto}</p>
      <p>{valor}</p>
      <button type="button" onClick={handleAdicionar}>
        {adicionado ? 'Adicionado!' : 'Adicionar ao carrinho'}
      </button>
    </div>
  );
};

export default Cardapio;
