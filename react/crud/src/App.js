import React from "react";
import "./App.css";
import Greating from "./components/Greating";
import DataFetcher from "./components/DataFetcher";
import LoginForm from "./components/LoginForm";

function App() {
  const user = "Developer";
  const roles = ["user", "dev", "admin"];

  const [isLogged, setIsLogged] = React.useState(false);
  const url = "https://jsonplaceholder.typicode.com/todos";

  function onClick(id) {
    setIsLogged(!isLogged);
  }

  function onLoginStatusChange(isLogged) {
    setIsLogged(isLogged);
  }

  return (
    <div className="App">
      {isLogged ? (
        <div>
          <button onClick={onClick}>Sign out</button>
          <div>
            <Greating name={user} roles={roles} />
            <DataFetcher url={url} />
          </div>
        </div>
      ) : (
        <div>
          <LoginForm onLogingStatusChange={onLoginStatusChange} />
        </div>
      )}
      <br />
    </div>
  );
}

export default App;
