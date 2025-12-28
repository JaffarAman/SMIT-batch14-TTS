import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../store/features/auth.thunk";

const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.authReducer);
  console.log("loading", loading);

  const loginHandler = async (obj) => {
    console.log("obj", obj);
    try {
      dispatch(loginThunk(obj));
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit(loginHandler)}>
        <h1>Login</h1>
        <input type="text" placeholder="Email" {...register("email")} />
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <button>{loading ? "loading...." : "Login"}</button>
      </form>
    </div>
  );
};

export default Login;
