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

//   server listen
app.listen(PORT, () => console.log(`server running on PORT:${PORT}`));
