import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Test from "./components/test";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/dashboard";
import TestPage from "./pages/test";
import PrivateRoute from "./routes/PrivateRoute";
import AuthRoute from "./routes/AuthRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* <Route path={"/admin/1"} element={<Test1 />}  />
      <Route path={"/admin/2"} element={<Test2 />}  />
      <Route path={"/admin/3"} element={<Test3 />}  /> */}

        {/* <Route path="/admin">
          <Route path="test" element={<TestPage />} /> */}
        {/* <Route path="/dashbaord" element={<Dashboard />} />
          <Route path="/User" element={<User />} /> */}
        {/* </Route> */}

        {/* <Route path="/test" element={<TestPage />} /> */}

        {/* Outlet */}

        {/* <Route path="/test" element={<TestPage />}>
          <Route path="child1" element={<Child1 />} />
          <Route path="child2" element={<Child2 />} />
          <Route path="child3" element={<Child3 />} />
        </Route> */}
      </Routes>

      {/* 
      <Test>
        <h1>CHILD</h1>
      </Test>

      <Test>
        <h1>CHILD 2</h1>
      </Test> */}
    </>
  );
}

const Child1 = () => {
  return <h1>CHILD 1</h1>;
};

const Child2 = () => {
  return <h1>CHILD 2</h1>;
};

const Child3 = () => {
  return <h1>CHILD 3</h1>;
};

export default App;
