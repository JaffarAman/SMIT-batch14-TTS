import UserModel from "../models/UserSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const signupController = async (request, response) => {
  try {
    const { name, email, password, role, bankId } = request.body;

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

    return response.status(200).json({
      message: "user successfully created!",
      status: true,
      data,
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

export const loginController = async (request, response) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(400).json({
        message: "required field are missing",
        status: false,
      });
    }

    const userExist = await UserModel.findOne({ email }).lean();
    if (!userExist) {
      return response.status(400).json({
        message: "invalid email or password!",
        status: false,
      });
    }

    const comparePass = await bcryptjs.compare(password, userExist.password);
    console.log("hashPassword", comparePass);

    if (!comparePass) {
      return response.status(400).json({
        message: "Invalid email or password!",
        status: false,
      });
    }
    console.log("userExist", userExist);

    delete userExist["password"];
    const token = jwt.sign({ _id: userExist._id }, process.env.JWT_KEY, {
      expiresIn: "24h",
    });

    return response.status(200).json({
      message: "user successfully login!",
      status: true,
      data: userExist,
      token,
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};
