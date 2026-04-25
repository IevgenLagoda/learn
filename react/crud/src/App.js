import logo from './logo.svg';
import React from 'react';
import './App.css';
import Greating from './components/Greating';

function App() {
  const user = "Delveoper";
  const roles = ['user', 'dev', 'admin'];
  const [isLogged, setIsLogged] = React.useState(false);

  function onClick() {
    setIsLogged(!isLogged);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Greating name={user} roles={roles} />
      <button onClick={onClick} value="Click">
        {isLogged 
        ? <span>Sign out</span>
        : <span>Sign in</span>
        }
      </button>
    </div>
  );
}

export default App;
