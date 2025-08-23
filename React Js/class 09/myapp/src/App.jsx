import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
  let [count, setCount] = useState(0);
  let [input, setInput] = useState("");

  // useEffect(() => {
  //   // fetchApi();
  //   console.log("first time render....   ")
  // }, []);

  // useEffect(() => {
  //   console.log("first time or every re-render");
  //   // fetchApi()
  // });

  useEffect(() => {
    fetchApi();
  }, [input, count]);

  const fetchApi = () => {
    console.log("API CALL");
  };

  // fetchApi()

  // console.log("cmp render")

  const [navbarShow, setNavbarShow] = useState(false);

  // axios

  // useEffect(() => {
  //   fetchProductApi();
  // }, []);

  // const fetchProductApi = async () => {
  //   console.log("fetchProductApi");
  //   // const response = await fetch("https://fakestoreapi.com/products/").then(
  //   //   (res) => res.json()
  //   // );
  //   // console.log("response", response);

  //   // axios
  //   const response = await axios.get("   ");
  //   console.log("response", response.data);
  // };

  const [githubUserName, setGithubUserName] = useState("");

  const [userObj, setuserobj] = useState({});

  const searchUser = async () => {
    console.log("githubUserName", githubUserName);
    try {
      if (!githubUserName) {
        return alert("invalid username");
      }

      const response = await axios.get(
        `https://api.github.com/users/${githubUserName}`
      );
      console.log("response", response.data);
      setuserobj({ ...response.data });
    } catch (error) {
      console.log("error", error.message);
    }
  };

  console.log("userObj", userObj);

  return (
    // <>
    //   {navbarShow && <Navbar  input={input} />}

    //   <button
    //     onClick={() => {
    //       setNavbarShow(!navbarShow );
    //     }}
    //   >
    //     {  navbarShow ? "Hide" : "Show"   }
    //   </button>

    //   {/* {navbarShow ? (
    //     <button
    //       onClick={() => {
    //         setNavbarShow(false);
    //       }}
    //     >
    //       Hide
    //     </button>
    //   ) : (
    //     <button
    //       onClick={() => {
    //         setNavbarShow(true);
    //       }}
    //     >
    //       Show
    //     </button>
    //   )} */}

    //   <h1>HELLO WORLD</h1>
    //   <input type="text" onChange={(e) => setInput(e.target.value)} />
    //   <button onClick={() => setCount(++count)}>CLICK</button>
    // </>

    <>
      <h1>Products</h1>

      <h1>GITHUB PROFILE</h1>
      <input
        type="text"
        placeholder="Enter Github UserName"
        onChange={(e) => setGithubUserName(e.target.value)}
      />
      <button onClick={searchUser}>Get</button>

      <img src={userObj.avatar_url} width={200} height={200} alt="" />
      <h1>USERNAME: {userObj.name} </h1>
      <p> Bio: {userObj.bio} </p>
    </>
  );
}

export default App;
