import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/hello-world.js';

const tasks = ['acordar', 'dar bom dia para a fofis', 'arrumar o quarto', 'ir para a roça', 'almoçar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>{tasks.map((element) => Task(element))}</ul>
        <HelloWorld />
      </header>
    </div>
  );
}

export default App;
