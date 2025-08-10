import React, { useState } from "react";
import styles from "./App.module.css";
console.log("styles", styles);
import Header from "./components/Header";
const App = () => {

  const [name , setName] = useState("")

  const handleInput = () => {
    console.log("name" , name)
  };

  return (
    <div className={styles.class}>
      <h1 className={styles.h1}>Todo App</h1>
      <Header />

      <input
        type="text"
        placeholder="Enter your name"
        onChange={(event) => {
          console.log("event", event.target.value);
          setName(event.target.value)
        }}
      />
      <button onClick={handleInput}>Get Value</button>
    </div>
  );
};

export default App;
