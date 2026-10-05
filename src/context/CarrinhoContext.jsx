import { createContext, useContext, useEffect, useState } from 'react';

const CarrinhoContext = createContext(null);

// "R$60,00" -> 60
export const valorParaNumero = (valor) =>
  Number(
    String(valor)
      .replace(/[^\d,]/g, '')
      .replace(',', '.')
  ) || 0;

export const formatarMoeda = (n) =>
  n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('carrinho')) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('carrinho', JSON.stringify(itens));
    } catch {}
  }, [itens]);

  const adicionar = (produto) =>
    setItens((atual) => {
      const existe = atual.find((i) => i.id === produto.id);
      if (existe) {
        return atual.map((i) =>
          i.id === produto.id ? { ...i, quantidade: i.quantidade + 1 } : i
        );
      }
      return [...atual, { ...produto, quantidade: 1 }];
    });

  const alterarQuantidade = (id, delta) =>
    setItens((atual) =>
      atual
        .map((i) =>
          i.id === id ? { ...i, quantidade: i.quantidade + delta } : i
        )
        .filter((i) => i.quantidade > 0)
    );

  const remover = (id) => setItens((atual) => atual.filter((i) => i.id !== id));
  const limpar = () => setItens([]);

  const totalItens = itens.reduce((s, i) => s + i.quantidade, 0);
  const totalValor = itens.reduce((s, i) => s + i.preco * i.quantidade, 0);

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionar,
        alterarQuantidade,
        remover,
        limpar,
        totalItens,
        totalValor,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export const useCarrinho = () => useContext(CarrinhoContext);
