// create user schema
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  isActive: Boolean,
  email: String,
  password: String,
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
