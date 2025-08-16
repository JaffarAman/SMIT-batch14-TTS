import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  // form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const getValue = () => {
  //   console.log("inputValue", inputValue);
  // };

  // const signupHandler = () => {
  //   console.log("signupHandler", name, email, password);
  // };

  // const setValue = () => {
  //   setName("Jaffar Aman");
  //   setEmail("jaffar@gmail.com");
  //   setPassword(123465978);
  // };

  const signupHandler = (event) => {
    console.log("event", event);
    event.preventDefault();
  };

  return (
    <>
      {/* <input
        type="text"
        placeholder="UserName"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={getValue}>Submit</button> */}

      {/* <form onSubmit={signupHandler}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Signup 1</button>
        <button type="button">Signup 2</button>
        <button type="button">Signup3</button>
        <button type="button"> Signup4</button>
      </form> */}

      {/* <button onClick={setValue} >Set Value</button> */}
    </>
  );
}

export default App;
