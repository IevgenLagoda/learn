import React from 'react';
import './App.css';
import Greating from './components/Greating';
import DataFetcher from './components/DataFetcher';

function App() {
  const user = "Developer";
  const roles = ['user', 'dev', 'admin'];
  
  const [isLogged, setIsLogged] = React.useState(false);
  const [url, setUrl] = React.useState(null);

  function onClick() {
    setIsLogged(!isLogged);
    if (isLogged) {
      setUrl('https://jsonplaceholder.typicode.com/todos/1');
    } else {
      setUrl(null);
    }
  }
  
  return (
    <div className="App">
      <button onClick={onClick}>
        {isLogged 
        ? <span>Sign out</span>
        : <span>Sign in</span>
        }
      </button>
      {isLogged && 
        <div>
          <Greating name={user} roles={roles} />
          <DataFetcher url={url} />
        </div>
      }
      <br/>
    </div>
  );
}

export default App;
