import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/userSchema.js";

export const SignupController = async (request, response) => {
  try {
    const { name, age, email, password } = request.body;

    if (!email || !password) {
      return response.json({
        message: "Required Fields are missing!",
      });
    }

    // Get User by email
    const user = await UserModel.findOne({ email });
    console.log("user", user);

    if (user) {
      return response.json({
        message: "Email address already exist!",
        status: false,
      });
    }

    // hash passowrd
    const hashPassword = await bcrypt.hash(password, 10);

    const userObj = {
      ...request.body,
      password: hashPassword,
    };
    await UserModel.create(userObj);

    response.json({
      message: "user sucessfully Signup!",
      status: true,
    });
  } catch (error) {
    response.json({
      message: error.message || "something went wrong",
      status: false,
    });
  }
};

export const LoginController = async (request, response) => {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return response.json({
        message: "required field are missing",
        status: false,
      });
    }

    // get user by email

    const user = await UserModel.findOne({ email });

    if (!user) {
      return response.json({
        message: "Invalid email or password",
        status: false,
      });
    }
    const comparePass = await bcrypt.compare(password, user.password);
    console.log("comparePass", comparePass);

    if (!comparePass) {
      return response.json({
        message: "Invalid email or password",
        status: false,
      });
    }

    // create json web token
    const data = { _id: user._id };
    const PRIVATE_KEY = "BATCH12";
    const token = jwt.sign(data, PRIVATE_KEY, {
      expiresIn: "24h",
    });
    console.log("token", token);

    return response.json({
      message: "User Login Successfully!",
      status: true,
      token,
    });
  } catch (error) {
    response.json({
      message: error.message,
      status: false,
    });
  }
};
