import { useEffect, useState } from "react";
import TodoApp from "./components/TodoApp";

const App = () => {
  let [count, setCount] = useState(0);
  let [input, setInput] = useState("");

  const foo = () => {
    console.log("foo");
    // api calling
  };

  // useEffect(() => {
  //   foo();
  // }, []);

  // foo();

  // useEffect(() => {
  //   console.log("run first time render");
  // }, []);

  // useEffect(() => {
  //   console.log("run after every re-render");
  // });


  useEffect(()=>{
    console.log("running...")
  } ,[count])

  return (
    <>
      {/* <TodoApp /> */}

      <h1>USE-EFFECT</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setCount(++count)}> {count}:counter </button>
    </>
  );
};

export default App;
