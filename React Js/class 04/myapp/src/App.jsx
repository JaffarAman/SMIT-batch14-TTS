import { useState } from "react";

function App() {
  // let userName = "Jaffar";

  // const userNameHandler = () => {
  //   userName = "Jaffar Aman";
  //   console.log("userName", userName);
  // };

  // [value , 1]

  // const state = useState("smit");
  // console.log("state", state);
  // const userNameHandler = () => {
  //   // state[0] = "saylani";
  // };

  // const state = useState("Jaffar");
  // console.log("state", state);

  // const foo = () => {
  //   state[1]("Jaffar Aman");
  // };

  // const foo = () => {
  //   setUserName();
  // };

  // const [name, setName] = useState("John");
  // const [age, setAge] = useState(30);
  // const [email, setEmail] = useState("john@gmail.com");

  // const [userName, setUserName] = useState("SMIT");
  // const [stdObj, setStdObj] = useState({
  //   name: "John Doe",
  //   age: 30,
  //   email: "John@gmail.com",
  // });

  // const updateHandler = () => {
  //   stdObj.name = "Jaffar";
  //   stdObj.age = 24;
  //   stdObj.email = "Jaffar@gmail.com";
  //   // console.log(stdObj);

  //   // const updateObj = {
  //   //   name : "Jaffar",
  //   //   email : "Jaffar@gmail.com",
  //   //   age  : 24,
  //   // }
  //   setStdObj({ ...stdObj });
  // };

  // console.log("render");

  const [cities, setCities] = useState(["karachi", "multan"]);

  const addCity = () => {
    const userCity = prompt("Enter your city");
    // console.log("userCity" , userCity)

    cities.push(userCity);
    setCities([...cities]);
  };

  console.log("cities", cities);
  return (
    <>
      {/* <h1>HELLO {userName} </h1>
      <button onClick={userNameHandler}>Update User Name</button> */}
      {/* <h1>HELLO {userName} </h1> */}
      {/* <button onClick={foo}>CLICK</button> */}
      {/* <button onClick={() => setUserName()}>CLICK</button> */}

      {/* <h1>HELLO {userName} </h1>
      <button
        onClick={() => {
          setUserName("Saylani");
        }}
      >
        update username
      </button>

      <ul>
        <li> name: {stdObj.name} </li>
        <li> age: {stdObj.age} </li>
        <li> email:{stdObj.email} </li>
      </ul>
      <button onClick={updateHandler}>Update Std</button> */}

      {/* <button
        onClick={() => {
          setName("Jaffar");
          setAge(24);
          setEmail("jaffar@gmail.com");
        }}
      >
        Update
      </button> */}

      <h1>Cities</h1>
      <button onClick={addCity}>Add city</button>
    </>
  );
}

export default App;
