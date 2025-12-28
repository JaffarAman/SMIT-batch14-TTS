import mongoose from "mongoose";
import dotenv from "dotenv";
import UserModel from "../models/UserSchema.js";
import bcryptjs from "bcryptjs";
// dotenv.config({
//     path :
// });

mongoose
  .connect(
    "mongodb+srv://admin:admin123@hiringmine.r0d1qte.mongodb.net/?retryWrites=true&w=majority&appName=hiringmine"
  )
  .then((res) => console.log("MongoDB connected!"))
  .catch((err) => console.log("MongoDB Error!:", err.message));

const signupController = async (request, response) => {
  try {
    const body = {
      name: "SBP Admin",
      email: "sbp_admin@gmail.com",
      password: "123456",
      role: "sbp_admin",
      bankId: "694fdf5a655ef755ccb71d56",
    };

    const { name, email, password, role, bankId } = body;
    if (!name || !email || !password || !bankId) {
      return response.status(400).json({
        message: "required field are missing",
        status: false,
      });
    }

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      return response.status(400).json({
        message: "Email address already exist!",
        status: false,
      });
    }

    const hashPassword = await bcryptjs.hash(password, 10);
    console.log("hashPassword", hashPassword);

    const objToSave = {
      name,
      email,
      password: hashPassword,
      role,
      bankId,
    };

    const data = await UserModel.create(objToSave);

    return console.log({
      message: "user successfully created!",
      status: true,
      data,
    });
  } catch (error) {
    console.log({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

signupController();
