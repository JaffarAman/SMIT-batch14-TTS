import jwt from "jsonwebtoken";
import UserModel from "../models/UserSchema.js";
export const customerAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isVerify = jwt.verify(token, process.env.JWT_KEY);
    if (!isVerify) {
      return res.status(401).json({
        message: "UnAuth user",
        status: false,
      });
    }

    const user = await UserModel.findById({ _id: isVerify._id }).select("role");
    if (!user) {
      return res.status(401).json({
        message: "UnAuth user",
        status: false,
      });
    }

    if (user.role === "customer") {
        req.user = user
      next();
    } else {
      return res.status(401).json({
        message: "permission de",
        status: false,
      });
    }

    console.log("isVerify", user);
  } catch (error) {
    return res.status(401).json({
      message: "UnAuth user",
      status: false,
    });
  }
};
