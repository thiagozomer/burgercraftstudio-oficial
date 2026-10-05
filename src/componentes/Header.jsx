import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useCarrinho } from '../context/CarrinhoContext.jsx';
import './Header.css';

const IconeCarrinho = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
  </svg>
);

const Header = () => {
  const { totalItens } = useCarrinho();

  return (
    <header className="header">
      <div className="logo-container">
        <img
          src="https://i.ibb.co/3919Vk0k/logo-burger.png"
          alt="Burger Craft Studio"
        />
      </div>

      <div className="nav-container">
        <nav className="nav">
          <HashLink to="/#inicio">Início</HashLink>
          <Link to="/cardapio">Cardápio</Link>
          <HashLink to="/#sobre">Sobre</HashLink>
          <HashLink to="/#contato">Contato</HashLink>
          <Link
            to="/carrinho"
            className="nav-carrinho"
            aria-label={`Carrinho, ${totalItens} itens`}
          >
            <IconeCarrinho />
            {totalItens > 0 && (
              <span className="nav-carrinho-badge">{totalItens}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
