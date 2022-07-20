/* import './App.css';
import Image from './Image';

function App() {
  return (
    <div className="App">
      <Image source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' alternativeText='Cute cat staring' />
    </div>
  );
}

export default App; */

// arquivo App.js, criado pelo create-react-app, modificado
/* import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
        <Order order={headphone} />
        <Order order={energyDrink} />
      </div>
    );
  }
}

export default App; */

// 1. O que o componente App é em relação a Order?
// R: Pai

// 2.🚀 Complete o código acima de forma que os pedidos referentes aos produtos headphone e energyDrink sejam filhos de App.

// arquivo App.js, criado pelo create-react-app, modificado

import React from 'react';
import './App.css';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }
    ];

    return (
      <div className="App">
        {users.map(user => <UserProfile key={user.id} user={user} />)}
      </div>
    );
  }
}

export default App;

// Entretanto, a geração dinâmica dos componentes está incompleta, haja vista que é preciso passar uma key para UserProfile. Você pode averiguar isso copiando o código acima e entrando no console do Google Chrome, que lá vai estar presente um warning levantado pelo React.

// Dito isso, altere a chamada do componente de UserProfile de forma que a lista seja gerada dinamicamente de maneira adequada.