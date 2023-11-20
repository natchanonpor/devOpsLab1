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

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Enter Text:
              <input
                role="inputText"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <input type="button" value="submit" onClick={handleSubmit} />
            <input type="button" value="remove" onClick={handleAbort} />
          </form>
        </div>

        <ul role="myText">
          {myText.map((text, index) => (
            <p key={index}>{text}</p>
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
      </header>
    </div>
  );
}

export default App;
