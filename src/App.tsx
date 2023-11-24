import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { logic } from "./logic";

function App() {
  const [name, setName] = useState("");
  const [myText, setMyText] = useState<string[]>([]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setMyText((prevArray) => [...prevArray, name]);
    setName("");
  };

  const handleAbort = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setMyText(() => myText.slice(0, -1));
  };

  const callApi = async () => {
    const res = await fetch(process.env.REACT_APP_BACKEND_URL || "");
    const data = await res.text();
    console.log(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Enter Text:</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <input type="button" value="submit" onClick={handleSubmit} />
            <input type="button" value="remove" onClick={handleAbort} />
          </form>
        </div>

        <ul role="menuitem">
          {myText.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          CPF learn react {logic(1, 20)}
        </a>
        <button onClick={callApi}>CALL API</button>
      </header>
    </div>
  );
}

export default App;
