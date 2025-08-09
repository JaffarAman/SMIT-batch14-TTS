import { useState } from "react";
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import Child3 from "./components/Child3";
import CartItem from "./components/Card";

function App() {
  console.log("parent cmp");

  const [state, setState] = useState("hello");

  // let userType = "user";
  let [userType, setUserType] = useState("user");

  // const [userLogin, setUserLogin] = useState(true);

  const handleUserRole = () => {
    if (userType == "user") {
      setUserType("admin");
    } else {
      setUserType("user");
    }
  };

  const [data, setData] = useState([{ name: "Jaffar" }]);
  console.log("data", data);
  return (
    <>
      {/* <input type="text" /> */}

      {/* <Child1 name="jaffar" age="24" email="jaffar@gmail.com" /> */}
      {/* <Child2 data={data} /> */}

      <CartItem title="Card 1" desc="desc card 1" price="100" />
      <CartItem title="Card 2" desc="desc card 2" price="200" />
      <CartItem title="Card 3" desc="desc card 3" price="300" />

      {/* <Child1 name="jaffar" age="24" email="jaffar@gmail.com" /> */}

      {/* <h1>App cmp</h1>
      <button
        onClick={() => {
          setState("HELLO WORLD");
        }}
      >
        CLICK
      </button>
      <Child1 />
      <Child2 />
      <Child3 /> */}

      {/* {
        // userType == "user" ?  true statement : false statement
        userType == "user" ? (
          <div>
            <h1>Hello USER 👏</h1>
            <h1>USER NAME</h1>
            <h1>Email</h1>
          </div>
        ) : (
          <h1>Hello Admin 👏</h1>
        )
      } */}

      {/* <button onClick={handleUserRole}>
        Switch {userType == "user" ? "Admin" : "User"}{" "}
      </button> */}

      {/* {
        userLogin ?  <h1>User login</h1> : null
      } */}
      {/* {userLogin && <h1>User login</h1>} */}
    </>
  );
}

export default App;
