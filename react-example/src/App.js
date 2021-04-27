import logo from './logo.svg';
import './App.css';
import ListElement from "./ListElement"


function App() {
  const array = [
    { id: 1, content: 'firstElement'},
    { id: 1, content: 'secondElement'},
    { id: 1, content: 'thirdElement'},
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ListElement value={array}>
        </ListElement>
      </header>
    </div>
  );
}

export default App;
