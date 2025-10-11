import express from "express";
import mongoose from "mongoose";
import UserModel from "./models/userSchema.js";

const app = express();
const PORT = process.env.PORT || 5000;

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const URI = `mongodb+srv://admin:admin123@hiringmine.r0d1qte.mongodb.net/?retryWrites=true&w=majority&appName=hiringmine`;
mongoose
  .connect(URI)
  .then((res) => console.log("mongoDb connected!"))
  .catch((err) => console.log("mongoDb error", err.message));

// create user

app.post("/createuser", async (request, response) => {
  try {
    const body = request.body;
    console.log("body", body);
    await UserModel.create(body);

    response.json({
      message: "user created!",
    });
  } catch (error) {
    response.json({
      message: error.message,
    });
  }
});

// update API
app.put("/updateuser/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("params", userId);

    const user = await UserModel.findById({ _id: userId });
    console.log("user", user);

    if (!user) {
      return res.json({
        status: false,
        message: "User not found!",
      });
    }

    const updateObj = req.body;
    console.log("updateObj", updateObj);

    await UserModel.findByIdAndUpdate(userId, updateObj);

    res.json({
      status: true,
      message: "user updated!",
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message || "something went wrong!",
    });
  }
});

// delete API
app.delete("/deleteuser/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("params", userId);

    const user = await UserModel.findById({ _id: userId });
    console.log("user", user);

    if (!user) {
      return res.json({
        status: false,
        message: "User not found!",
      });
    }

    await UserModel.findByIdAndDelete(userId);

    res.json({
      status: true,
      message: "user deleted!",
    });
  } catch (error) {
    res.json({
      status: false,
      message: error.message || "something went wrong!",
    });
  }
});

// get All
// app.get("/user", async (req, res) => {
//   try {
//     const users = await UserModel.find();
//     console.log("user", users);

//     res.json({
//       status: true,
//       message: "all fetch",
//       data: users,
//     });
//   } catch (error) {
//     res.json({
//       status: false,
//       message: error.message || "something went wrong!",
//     });
//   }
// });

// app.get("/userOne/:id", async (req, res) => {
//   // const { firstName } = req.params;
//   const { id } = req.params;

//   // const user = await UserModel.findOne({ firstName: firstName });
//   // const user = await UserModel.findById(id)
//   const user = await UserModel.find({ _id: id });
//   console.log(user);
//   res.json({
//     user,
//   });
// });

// app.get("/users", async (request, response) => {
//   try {
//     const userId = request.query.userId;
//     console.log("userId", userId);

//     if (userId) {
//       const user = await UserModel.findById(userId);

//       return response.json({
//         status: true,
//         message: "Single user get",
//         data: user,
//       });
//     }

//     const users = await UserModel.find({});
//     response.json({
//       status: true,
//       message: "All user get",
//       data: users,
//     });
//   } catch (error) {
//     res.json({
//       status: false,
//       message: error.message || "something went wrong!",
//     });
//   }
// });

app.post("/signup", (req, res) => {
  try {
    const body = req.body;

    const { firstName, lastName, age, email, password } = body;

    if (!firstName || !lastName || !age || !email || !password) {
      return res.json({
        message: "Required Fields are missing!",
      });
    }


    console.log("body" , body)







  } catch (error) {
    res.json({
      status: false,
      message: error.message || "something went wrong!",
    });
  }
});

//   server listen
app.listen(PORT, () => console.log(`server running on PORT:${PORT}`));
