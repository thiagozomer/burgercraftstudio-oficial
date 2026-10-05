import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './componentes/Header.jsx';
import Main from './componentes/Main.jsx';
import PaginaCardapio from './paginaCardapio.jsx';
import PaginaCarrinho from './paginaCarrinho.jsx';
import { CarrinhoProvider } from './context/CarrinhoContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CarrinhoProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cardapio" element={<PaginaCardapio />} />
          <Route path="/carrinho" element={<PaginaCarrinho />} />
        </Routes>
      </CarrinhoProvider>
    </BrowserRouter>
  </StrictMode>
);
