import { useState } from "react";
import Child1 from "./component/Child1";

function App() {
  console.log("parent render");

  const [userName, setUserName] = useState("Jaffar");

  const [childState, setChildState] = useState("");

  const getChildData = (childData) => {
    console.log("getChildData", childData);
    setChildState(childData);
  };

  const userArr = ["jaffar", "sufiyan", "bilal"];

  return (
    <>
      {/* <h1>PARENT CMP</h1>
      <Child1 userName={userName} getChildData={getChildData} />
      <h1>childState :  {childState} </h1> */}
      {/* {uiarr} */}

      {/* listing */}

      {/* {userArr.map((value, index) => {
        return( 
         <h1 key={index}  >Hello {value} </h1>
        )
      })} */}

      {userArr.map((value, index) => {
        return (
          <div key={index} >
            <h1> {index + 1}: Hello {value} </h1>
          </div>
        );
      })}
    </>
  );
}

export default App;
