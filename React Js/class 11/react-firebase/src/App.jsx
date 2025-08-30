import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { app } from "./firebase";
import TodoApp from "./components/TodoApp";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  const [count, setCount] = useState(0);

  console.log("app", app);
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<TodoApp />} />
      </Routes>

      {/* <TodoApp /> */}
    </>
  );
}

export default App;
