import Quiz from '../img/quiz.svg';

import "./Welcome.css"
const Welcome = () => {
  return (
    <div id='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo apra começar:</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}

export default Welcome