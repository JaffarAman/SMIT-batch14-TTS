import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

export default userModel;
