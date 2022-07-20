import React, { Component } from 'react';

class Image extends Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;

// 1. Qual o nome do componente declarado acima?
// R: Classe Image

// 2. Chame o componente Image dentro do componente App, de forma que seja mostrada esta imagem, ou o texto Cute cat staring, caso a imagem não consiga ser carregada.