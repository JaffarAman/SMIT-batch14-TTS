// create user schema
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  isActive: {
    type : Boolean,
    default : true
  },
  email: String,
  password: String,
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
