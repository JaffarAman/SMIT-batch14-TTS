import React, { useMemo, useState } from "react";
import Child1 from "./components/child1";


const App = () => {
  console.log("parent render");

  let [count, setCount] = useState(0);
  const [name, setname] = useState("Jaffar");
  return (
    <div>
      <h1>parent</h1>

      <Child1 name={name} />

      <button onClick={() => setCount(++count)}>CLICK</button>
    </div>
  );
};

export default App;
