import React, { useState } from "react";

const Child1 = (props) => {
  console.log("CHILD 1", props);
  //   let userName = "Jaffar";

  // useState()

  // const [state, setState] = useState("muhammad");
  // console.log("state", state);
  // console.log("setState", setState);

  // const  [readValue , writeValue] = useState("Jaffar")

  const [userName, setUserName] = useState("Jaffar");

  const handleUserName = () => {
    setUserName("Jaffar Aman");
    // userName = "Jaffar Aman";
    // setState("muhammad sufiyan");
  };

  return (
    <>
      <h1>CHILD 1 </h1>

      {/* <h1>HELLO {userName} </h1> */}
      {/* <h1>HELLO {userName} </h1> */}

      <h1>username : {props.name} </h1>
      <h1>age : {props.age} </h1>
      <h1>email : {props.email} </h1>
      <button onClick={handleUserName}>UPDATE USERNAME</button>
    </>
  );
};

export default Child1;
