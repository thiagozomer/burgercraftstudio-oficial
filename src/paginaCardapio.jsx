import Cardapio from './componentes/Cardapio.jsx';
import './paginaCardapio.css';

const paginaCardapio = () => {
  return (
    <div className="cardapio-lista">
      <Cardapio
        img="https://razeburger.com.br/wp-content/uploads/2020/08/the-best.jpg"
        titulo="The Best Burger"
        texto="O nome já diz tudo... Burger de 210g de costela Black Angus, queijo prato, tirinhas crocantes de bacon, onion rings, molho especial a base de pimenta no pão de brioche."
        valor="R$55,00"
      />
      <Cardapio
        img="https://razeburger.com.br/wp-content/uploads/2019/06/house.jpg"
        titulo="House Burger"
        texto="Tradicional com o toque Craft. Burger de 210g de costela Black Angus, queijo cheddar, deliciosas cebolas caramelizadas, molho especial no pão australiano."
        valor="R$55,00"
      />
      <Cardapio
        img="https://razeburger.com.br/wp-content/uploads/2022/06/pepper-1.jpeg"
        titulo="Pepper Craft"
        texto="Com um sabor inigualável, esse burger agrada gregos e troianos. Pão de brioche, blend da casa, molho especial a base de curry, rúcula fresca, pepperoni, tomate grelhado, queijo meia cura e geleia de pimenta."
        valor="R$50,00"
      />
      <Cardapio
        img="https://razeburger.com.br/wp-content/uploads/2020/08/raze-duplo.jpg"
        titulo="Craft Burger Duplo"
        texto="O Hambúrguer Raiz. Burger de  2x 180g Black Angus, queijo prato, alface, tomate, cebola, bacon crocante e molho da casa a base de alho no pão de brioche."
        valor="R$60,00"
      />
      <Cardapio
        img="https://razeburger.com.br/wp-content/uploads/2020/08/raze.jpg"
        titulo="Craft Burger"
        texto="O Hambúrguer Raiz. Burger de 180g Black Angus, queijo prato, alface, tomate, cebola, bacon crocante e molho da casa a base de alho no pão de brioche."
        valor="R$45,00"
      />
      <Cardapio
        img="https://razeburger.com.br/wp-content/uploads/2020/08/junior.jpg"
        titulo="Junior"
        texto="Nosso Burger de 140gr Black Angus, queijo prato, molho da casa no pão de brioche."
        valor="R$30,00"
      />
    </div>
  );
};

export default paginaCardapio;
