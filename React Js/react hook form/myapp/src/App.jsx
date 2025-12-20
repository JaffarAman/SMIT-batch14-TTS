import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
const App = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const loginHandler = (event) => {
  //   event.preventDefault()
  //   console.log("loginHandler");
  //   console.log("obj", { email, password });
  // };

  // console.log("render")

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   watch,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  const loginSchema = yup.object({
    email: yup.string().required("Email Address"),
    password: yup.string().required().max(16).min(8),
  });

  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    reValidateMode: "onBlur",
  });

  // const passwordState = watch("password");
  // console.log("passwordState", passwordState);

  const loginHandler = (obj) => {
    console.log("loginHandler", obj);
  };

  // console.log("errors", errors);

  return (
    <div>
      <h1>Login Form</h1>

      {/* <form onSubmit={loginHandler} >
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          value={password}
          type="text"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
        <button type="button" >another btn</button>
        <button type="button"  onClick={()=>{
            setEmail("")
            setPassword("")
        }} >Clear form</button>
      </form> */}

      <form onSubmit={handleSubmit(loginHandler)}>
        {/* <input
          type="text"
          placeholder="Enter your email"
          {...register("email", {
            required: {
              value: true,
              message: "Email address required",
            },
          })}
        /> */}

        <Controller
          name="email"
          control={control}
          render={({ field, formState: { errors } }) => {
            return (
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...field}
                error={errors?.email}
                helperText={errors?.email?.message}
                inputProps={{
                  maxLength: 8, // Sets the character limit
                }}
                slotProps={{}}
              />
            );
          }}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, formState: { errors } }) => (
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              {...field}
              error={errors?.password}
              helperText={errors?.password?.message}
            />
          )}
        />

        {/* {errors.email && <span> {errors.email.message} </span>} */}
        <br />
        {/* <input
          type="text"
          placeholder="Enter your password"
          {...register("password" , {
            required : {
              value : true,
              message : "password is required"
            }
          })}
          /> */}
        {/* {errors.password && <span> {errors.password.message} </span>} */}
        <button>Login</button>
        <button type="button">another btn</button>
        <button
          type="button"
          onClick={() => {
            reset();
          }}
        >
          Clear form
        </button>
      </form>
    </div>
  );
};

export default App;
