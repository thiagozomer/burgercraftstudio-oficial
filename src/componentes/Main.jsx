import './Main.css';
import { Link } from 'react-router-dom';
import Sobre from './Sobre.jsx';
import Divisor from './Divisor.jsx';
import Formulario from './Formulario.jsx';

const Main = () => {
  return (
    <main>
      <section id="inicio">
        <h2>A Hamburgueria</h2>
        <h1>número 1</h1>
        <h2>Do Rio</h2>

        <button>
          <Link to="/cardapio" className="btn-pedir">
            Pedir Agora
          </Link>
        </button>
      </section>

      <Divisor img="https://i.ibb.co/DH02mvqM/divisor.png" />

      <section id="sobre">
        <div className="pt1">
          <h1>Sobre Nós</h1>
          <p>
            Na Burger Craft Studio, acreditamos que um bom hambúrguer vai muito
            além de pão, carne e queijo. Cada detalhe é pensado para criar uma
            experiência saborosa, desde a escolha dos ingredientes até a
            montagem de cada lanche. Nossa proposta é unir qualidade,
            criatividade e sabor, trazendo combinações especiais para quem gosta
            de experimentar algo diferente sem abrir mão daquele hambúrguer
            clássico que nunca decepciona. Aqui, cada hambúrguer é preparado com
            cuidado e personalidade. Você escolhe o seu favorito, a gente cuida
            do resto.
          </p>
        </div>
        <img
          src="https://i.ibb.co/sJNnN1M8/burger-Craft.png"
          alt="burgerCraft"
        ></img>
      </section>

      <Divisor img="https://i.ibb.co/DH02mvqM/divisor.png" />

      <section id="contato">
        <div className="pt1">
          <Sobre
            img="https://i.ibb.co/N281JvdQ/location.png"
            titulo="LOCALIZAÇÃO"
            texto="Burger Craft Studio, 1234-
            Rio de Janeiro, RJ"
          />
          <Sobre
            img="https://i.ibb.co/cXLXSghs/wpp.png"
            titulo="WHATSAPP"
            texto="(21) 99999-9999"
          />
          <Sobre
            img="https://i.ibb.co/5x677d9r/email.png"
            titulo="E-MAIL"
            texto="contato@burguercraftsudio.com"
          />
          <Sobre
            img="https://i.ibb.co/0RCy9d59/relogio.png"
            titulo="HORÁRIO DE FUNCIONAMENTO"
            texto="Segunda a domingo - 18:00 às 00:00"
          />
        </div>

        <div className="ctt2">
          <h2>
            ENTRE EM <b>CONTATO</b>{' '}
          </h2>

          <h3>Fale com a burger Craft Studio.</h3>
          <p>
            Tem alguma dúvida, sugestão ou quer fazer um pedido? Entre em
            contato com a gente!
          </p>
        </div>
        <div className="ctt3">
          <div>
            <Formulario />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
