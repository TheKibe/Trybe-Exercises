import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      botao1: 0,
      botao2: 0,
      botao3: 0,
    }

    this.func1 = this.func1.bind(this);
    this.func2 = this.func2.bind(this);
    this.func3 = this.func3.bind(this);
  }

  func1(param) {

    this.setState((oldNumber) => ({
      botao1: oldNumber.botao1 + 1
    }));

    if ( this.state.botao1 % 2 !== 0 ) {
      param.target.style.backgroundColor = 'green';
    } else {
      param.target.style.backgroundColor = 'white';
    }

    console.log(param.target.style.backgroundColor);
  }

  func2(param) {

    this.setState((oldNumber) => ({
      botao2: oldNumber.botao2 + 1
    }));

    if ( this.state.botao2 % 2 !== 0 ) {
      param.target.style.backgroundColor = 'green';
    } else {
      param.target.style.backgroundColor = 'white';
    }

    console.log(param.target.style.backgroundColor);
  }

  func3(param) {
    
    this.setState((oldNumber) => ({
      botao3: oldNumber.botao3 + 1
    }));

    if ( this.state.botao3 % 2 !== 0 ) {
      param.target.style.backgroundColor = 'green';
    } else {
      param.target.style.backgroundColor = 'white';
    }

    console.log(param.target.style.backgroundColor);
  }

  render() {
    return (
      <div className="App">
        <button onClick={ this.func1 }>{this.state.botao1}</button>
        <button onClick={ this.func2 }>{this.state.botao2}</button>
        <button onClick={ this.func3 }>{this.state.botao3}</button>
      </div>
    );
  }
}

export default App;

// 8. Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.

// 9. A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!

// 🦜 Dica: Lembre-se de substituir a referência à função, no evento, por uma callback que invoca! Agora bora pra aula ao vivo e depois pros exercícios?! Hoje nós vamos incrementar a nossa Pokedex!