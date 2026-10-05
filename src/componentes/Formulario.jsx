import { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  function enviarMensagem() {
    setNome('');
    setEmail('');
    setMensagem('');
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  }

  return (
    <div className="formulario">
      <div className="formpt1">
        <p>Nome:</p>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <p>Email:</p>
        <input
          type="text"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="formpt2">
        <p>Mensagem</p>
        <textarea
          placeholder="Digite sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
      </div>

      <br />
      <button onClick={enviarMensagem}>Enviar Mensagem</button>

      {enviado && <p>Mensagem enviada com sucesso!</p>}
    </div>
  );
};

export default Formulario;
