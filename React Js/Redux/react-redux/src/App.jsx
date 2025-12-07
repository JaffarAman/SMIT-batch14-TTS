import React, { useState } from "react";
import CmpA from "./components/CmpA";
import CmpB from "./components/CmpB";
import CmpC from "./components/CmpC";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, minusTodo } from "./redux/slices/counterSlice";
import ProductListing from "./components/productlisting/ProductListing";
import Header from "./components/header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddToCardPage from "./components/productlisting/AddToCardPage";

const App = () => {
  let name = "jaffar";

  const [userName, setUserName] = useState("jaffar");
  console.log("userName parent", userName);

  let [counter, setCounter] = useState(0);

  // const selector = useSelector((state) => {
  //   return state;
  // });

  const { counterValue } = useSelector((store) => store.counterReducer);
  console.log("selector", counterValue);
  const dispatch = useDispatch();

  return (
    // <div>
    //   <h1>USERNAME: {userName} </h1>
    //   <button
    //     onClick={() => {
    //       setUserName("Jaffar Aman");
    //       // name = "Jaffar Aman";
    //     }}
    //   >
    //     CLICK
    //   </button>

    //   <CmpA userName={userName} />
    // </div>
    <>
      {/* <h1> Counter: {counterValue} </h1> */}

      {/* <button onClick={() => setCounter(++counter)}>PLUS COUNTER</button> */}
      {/* <button onClick={() => dispatch(addTodo({ name: "jaffar" }))}>
        PLUS COUNTER
      </button>
      <button onClick={() => dispatch(minusTodo())}>Minus COUNTER</button> */}


      <Header />
        <Routes>
          <Route index element={ <ProductListing />} />
          <Route path="/add-to-cart" element={ <AddToCardPage />} />
        </Routes>

     
    </>
  );
};

export default App;
