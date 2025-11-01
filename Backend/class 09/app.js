import express from "express";
import mongoose from "mongoose";
import UserModel from "./models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const PORT = process.env.PORT || 5000;

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const URI = `mongodb+srv://admin:admin123@hiringmine.r0d1qte.mongodb.net/?retryWrites=true&w=majority&appName=hiringmine`;

// connect DB
mongoose
  .connect(URI)
  .then((res) => console.log("mongoDB connected"))
  .catch((err) => console.log("MongoDb Error:", err.message));

// Signup
// user details
// name , age , email , password
// email address unique
// password => real format => hash format

app.post("/signup", async (request, response) => {
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
});

app.post("/login", async (request, response) => {
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
    const token = jwt.sign(data, "BATCH12", {
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
});

// create post
// app.post("/createpost");

// admin user
// app.post("/createUserByAdmin", () => {});

const checkAuth = (request, response , next) => {


  console.log("checkAuth middleware ");
  const isLogin = false;

  if (isLogin) {

    next()

  } else {
    response.json("unAuth user!");
  }
};

// private
app.post("/createpost", checkAuth, (request, response) => {
  response.json("API HIT: post Created");
});



app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));
