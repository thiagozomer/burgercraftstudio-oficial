import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCarrinho, formatarMoeda } from './context/CarrinhoContext.jsx';
import './paginaCarrinho.css';

// Desenha um "QR Code" de mentira (só visual, não lê em nenhum app)
const QrFalso = ({ seed }) => {
  const tam = 25;
  const finder = (x, y) => {
    const dentro = (cx, cy) => x >= cx && x < cx + 7 && y >= cy && y < cy + 7;
    for (const [cx, cy] of [
      [0, 0],
      [tam - 7, 0],
      [0, tam - 7],
    ]) {
      if (dentro(cx, cy)) {
        const dx = x - cx,
          dy = y - cy;
        const borda = dx === 0 || dx === 6 || dy === 0 || dy === 6;
        const centro = dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4;
        return borda || centro ? 1 : 0;
      }
    }
    return null;
  };
  const celulas = [];
  for (let y = 0; y < tam; y++) {
    for (let x = 0; x < tam; x++) {
      const f = finder(x, y);
      const preenchido =
        f !== null ? f : ((x * 31 + y * 17 + seed) * 2654435761) % 7 < 3;
      if (preenchido)
        celulas.push(
          <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />
        );
    }
  }
  return (
    <svg
      className="pix-qr"
      viewBox={`-2 -2 ${tam + 4} ${tam + 4}`}
      role="img"
      aria-label="QR Code Pix de exemplo"
    >
      <rect x="-2" y="-2" width={tam + 4} height={tam + 4} fill="#fff" />
      <g fill="#000">{celulas}</g>
    </svg>
  );
};

const PaginaCarrinho = () => {
  const { itens, alterarQuantidade, remover, limpar, totalValor } =
    useCarrinho();
  const [etapa, setEtapa] = useState('carrinho'); // 'carrinho' | 'pix' | 'pago'
  const [pedido, setPedido] = useState({ total: 0, numero: '' });
  const [copiado, setCopiado] = useState(false);

  const codigoPix =
    '00020126580014br.gov.bcb.pix0136exemplo-trabalho-faculdade@burger.com' +
    `5204000053039865406${totalValor.toFixed(
      2
    )}5802BR5911BURGERCRAFT6009SAO PAULO62070503***6304ABCD`;

  const iniciarPix = () => setEtapa('pix');

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(codigoPix);
    } catch {}
    setCopiado(true);
    setTimeout(() => setCopiado(false), 1500);
  };

  const confirmarPagamento = () => {
    setPedido({
      total: totalValor,
      numero: String(Math.floor(1000 + Math.random() * 9000)),
    });
    limpar();
    setEtapa('pago');
  };

  // Pedido confirmado
  if (etapa === 'pago') {
    return (
      <div className="carrinho-vazio">
        <h1>Pagamento confirmado!</h1>
        <p>
          Pedido #{pedido.numero} no valor de {formatarMoeda(pedido.total)}.
        </p>
        <p>Seu hambúrguer já está sendo preparado.</p>
        <Link to="/cardapio" className="carrinho-btn">
          Fazer outro pedido
        </Link>
      </div>
    );
  }

  // Carrinho vazio
  if (itens.length === 0) {
    return (
      <div className="carrinho-vazio">
        <h1>Seu carrinho está vazio</h1>
        <p>Escolha um burger no cardápio para começar o pedido.</p>
        <Link to="/cardapio" className="carrinho-btn">
          Ver cardápio
        </Link>
      </div>
    );
  }

  // Tela do Pix
  if (etapa === 'pix') {
    return (
      <div className="carrinho pix">
        <h1>Pagamento via Pix</h1>
        <p className="pix-valor">
          Valor a pagar: <strong>{formatarMoeda(totalValor)}</strong>
        </p>

        <QrFalso seed={Math.round(totalValor)} />

        <p>Ou copie o código abaixo e cole no app do seu banco:</p>
        <textarea className="pix-codigo" readOnly value={codigoPix} rows={4} />

        <div className="carrinho-acoes pix-acoes">
          <button
            type="button"
            className="carrinho-btn secundario"
            onClick={copiar}
          >
            {copiado ? 'Código copiado!' : 'Copiar código Pix'}
          </button>
          <button
            type="button"
            className="carrinho-btn"
            onClick={confirmarPagamento}
          >
            Já paguei
          </button>
        </div>
        <button
          type="button"
          className="pix-voltar"
          onClick={() => setEtapa('carrinho')}
        >
          Voltar ao carrinho
        </button>
        <p className="pix-aviso">
          Simulação para fins acadêmicos. Nenhum pagamento real é realizado.
        </p>
      </div>
    );
  }

  // Carrinho
  return (
    <div className="carrinho">
      <h1>Seu pedido</h1>

      <ul className="carrinho-lista">
        {itens.map((item) => (
          <li key={item.id} className="carrinho-item">
            <img src={item.img} alt={item.titulo} />
            <div className="carrinho-info">
              <h2>{item.titulo}</h2>
              <p>{formatarMoeda(item.preco)}</p>
            </div>
            <div className="carrinho-qtd">
              <button
                type="button"
                onClick={() => alterarQuantidade(item.id, -1)}
                aria-label="Diminuir quantidade"
              >
                −
              </button>
              <span>{item.quantidade}</span>
              <button
                type="button"
                onClick={() => alterarQuantidade(item.id, 1)}
                aria-label="Aumentar quantidade"
              >
                +
              </button>
            </div>
            <strong className="carrinho-subtotal">
              {formatarMoeda(item.preco * item.quantidade)}
            </strong>
            <button
              type="button"
              className="carrinho-remover"
              onClick={() => remover(item.id)}
              aria-label={`Remover ${item.titulo}`}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="carrinho-resumo">
        <p className="carrinho-total">
          Total: <strong>{formatarMoeda(totalValor)}</strong>
        </p>
        <div className="carrinho-acoes">
          <button
            type="button"
            className="carrinho-btn secundario"
            onClick={limpar}
          >
            Esvaziar carrinho
          </button>
          <button type="button" className="carrinho-btn" onClick={iniciarPix}>
            Finalizar com Pix
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaginaCarrinho;
