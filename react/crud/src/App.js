import React from 'react';
import './App.css';
import Greating from './components/Greating';
import DataFetcher from './components/DataFetcher';
import LoginForm from './components/LoginForm';

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

  function onLoginStatusChange(isLogged) {
    setIsLogged(isLogged);
  }
  
  return (
    <div className="App">
      {isLogged 
        ? <div>
          <button onClick={onClick}>Sign out</button>
          <div>
            <Greating name={user} roles={roles} />
            <DataFetcher url={url} />
          </div>
        </div>
        : <div>
          <LoginForm onLogingStatusChange={onLoginStatusChange}/>
        </div>
      }
      <br/>
    </div>
  );
}

export default App;
