import logo from './logo.svg';
import './App.css';

function App() {

  const name = 'Luiz Felipe'


  return (
    <div className="App">

      <div id="titulo"><h1>Sorteador</h1>
        <form id="form">
            <br></br>
          <div class="text-center">Sortear    <input type="number" id="qtd_num_sortear"></input> número
            <br></br>
            entre <input type="number" id="numInicial"></input> e <input type="number" id="numFinal"></input>
          </div>
          <br></br>
          <div id="div_frase">Sorteador de números aleatórios gratuito!!!</div>
          <br></br>
          <div><button type="submit" id="btn_sortear">Sortear Agora!</button></div>
        </form>
      </div>
    </div>
  );
}

export default App;
