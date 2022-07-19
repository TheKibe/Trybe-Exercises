import './App.css';

const moio = ['ir mercado', 'terminar projeto', 'dormir'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      {moio.map((i) => Task(i))}
    </div>
  );
}

export default App;
