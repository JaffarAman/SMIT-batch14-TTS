import express from "express";
import { changePassword, forgotPassword, loginController, resetOTPController, signupController, verfiyOTPController } from "../controllers/auth.js";

const authRoute = express.Router();

authRoute.post("/signup", signupController);
authRoute.post("/login",loginController);
// otp
authRoute.post("/verify-otp" , verfiyOTPController )
authRoute.post("/reset-otp" , resetOTPController )
authRoute.post("/forgot-password" , forgotPassword )
authRoute.post("/change-password" , changePassword )


export default authRoute;
