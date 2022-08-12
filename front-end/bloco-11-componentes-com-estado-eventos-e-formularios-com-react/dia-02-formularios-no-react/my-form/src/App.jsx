// Para fixar

// 1 - Crie um formulário com um campo select, dois inputs de tipo diferente, uma textarea e faça de um deles um componente controlado, ou seja, elementos do formulário controlados pelo Estado ✔️

// 2 - Baixe a React Developer Tools e veja, nela, o dado inserido no elemento controlado sendo salvo no Estado. ✔️

// 3 - Faça todos os seus elementos componentes do formulário ficarem 100% controlados. Faça um event handler genérico para lidar com eles. ✔️

// 4 - Acrescente no seu formulário um input do tipo checkbox e garanta que seu event handler esteja tratando este caso corretamente. ✔️

// 5 - Busque na documentação de React acerca de formulários (primeiro link da seção de Recursos Adicionais!) como se deve adicionar um input para arquivos. Acrescente um ao seu formulário. ✔️

// 6 - Encapsule alguns dos seus campos num fieldset. Entenda como ele funciona lendo a documentação. ✔️

// 7 - Faça dois de seus campos serem componentes filhos do seu componente de formulário. Garanta que seu estado ainda pertence ao componente pai.

// 8 - Faça duas validações em um desses componentes filhos e uma em um outro.

// 9 - Crie, no estado do componente pai, um campo formularioComErros que deve ser true caso algum desses componentes tenha erros e false caso contrário.

// 🦜 Dica: Se algum dos componentes transmitir true para a função que fará o handle dos erros, qual valor deve ser armazenado no Estado?

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      selectXablau: '',
      name: '',
      age: 1,
      textArea: '',
      photo: '',
      checkbox: false
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <form action="" className='form'>
          <fieldset>
            <label htmlFor='selectXablau'>Seu Xablau Favorito:</label>
            <select
              name="selectXablau"
              value={this.state.selectXablau}
              onChange={this.handleChange}
            >
              <option value="XablauPrimeiro">Xablau 1°</option>
              <option value="XablauSegundo">Xablau 2°</option>
              <option value="XablauTerceiro">Xablau 3°</option>
            </select>

            <label htmlFor='name'>Nome completo:</label>
            <input
              name='name'
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <label htmlFor='number'> Idade: </label>
            <input
              type="number"
              name='age'
              value={this.state.age}
              onChange={this.handleChange}
            />
          </fieldset>

          <label htmlFor='textArea'>Sobre você: </label>
          <textarea
            cols="30"
            rows="10"
            name='textArea'
            value={this.state.textArea}
            onChange={this.handleChange}
          >
          </textarea>

          <fieldset>
            <label htmlFor='photo'>Foto: </label>
            <input
              type="file"
              name="photo"
              value={this.state.photo}
              onChange={this.handleChange}
            />

            <label htmlFor='checkbox'> Concorda com os termos de uso (vender sua alma):</label>
            <input
              type="checkbox"
              name="checkbox" F
              value={this.state.checkbox}
              onChange={this.handleChange}
            />
          </fieldset>
          <div>
            <button type="submit" className='submit'>Enviar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
