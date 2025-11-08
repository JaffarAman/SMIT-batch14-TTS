import UserModel from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
import OTPModel from "../models/otp.js";

export const signupController = async (req, res) => {
  try {
    const { name, mobileNumber, email, password } = req.body;
    if (!name || !mobileNumber || !email || !password) {
      return res.json({
        message: "Required fields are missing",
        status: false,
        data: null,
      });
    }

    // get user by email
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.json({
        message: "Email Address already exists!",
        status: false,
        data: null,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    console.log("hashPassword", hashPassword);

    const body = {
      ...req.body,
      password: hashPassword,
    };
    await UserModel.create(body);

    // send verfiy email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASS,
      },
    });
    const otp = uuidv4().slice(0, 6);
    console.log("otp", otp);

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Email Verification",
      //   text: "HELLO JANI KYA HAL hai?",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header img {
            max-width: 150px;
            height: auto;
        }
        .greeting {
            font-size: 18px;
            color: #333;
            margin-bottom: 10px;
        }
        .main-content {
            font-size: 16px;
            color: #555;
            margin-bottom: 20px;
        }
        .verification-button {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            font-size: 16px;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 5px;
            text-align: center;
            font-weight: bold;
        }
        .verification-button:hover {
            background-color: #45a049;
        }
        .footer {
            font-size: 12px;
            color: #888;
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <img src="https://www.hiringmine.com/assets/Hiring%20Mine%20Logo-453a72d3.png" alt="Your Logo">
        </div>
        <div class="greeting">
            <p>Hi ${name},</p>
        </div>
        <div class="main-content">
            <p>Thank you for signing up with HiringMine! We're excited to have you on board. To get started, please verify your email address by clicking the button below:</p>
        </div>
        <div style="text-align: center;">
            <button href="[Verification Link]" class="verification-button"> ${otp} </button>
        </div>
        <div class="footer">
            <p>If you didn't sign up for this account, please ignore this email.</p>
            <p>&copy; ${new Date().getFullYear()} HiringMine. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`,
    });

    const otpObj = {
      otp,
      email,
    };
    await OTPModel.create(otpObj);

    return res.json({
      message: "signup successfully!",
      status: true,
      //   data: null,
    });
  } catch (error) {
    res.json({
      message: error.message || "something went wrong",
      status: false,
      data: null,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        message: "Required fields are missing",
        status: false,
        data: null,
      });
    }

    // get user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({
        message: "Invalid email or password!",
        status: false,
        data: null,
      });
    }

    if (!user.isVerified) {
      return res.json({
        message: "your email is not verifed.Please Verify your email address!",
        status: false,
        data: null,
      });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    console.log("comparePassword", comparePassword);

    if (!comparePassword) {
      return res.json({
        message: "Invalid email or password!",
        status: false,
        data: null,
      });
    }
    const secretkey = process.env.SECRET_KEY;
    const token = jwt.sign({ _id: user._id }, secretkey, {
      expiresIn: "24h",
    });

    const userData = {
      name: user.name,
      email: user.email,
      mobileNumber: user.mobileNumber,
      _id: user._id,
    };
    return res.json({
      message: "Login successfully!",
      status: true,
      data: userData,
      token,
    });
  } catch (error) {
    res.json({
      message: error.message || "something went wrong",
      status: false,
      data: null,
    });
  }
};

export const verfiyOTPController = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.json({
        message: "Required field are missing",
        status: false,
      });
    }

    const isExist = await OTPModel.findOne({ email, isUsed: false }).sort({
      createdAt: -1,
    });
    console.log("isExist", isExist);

    if (!isExist) {
      return res.json({
        message: "Invalid OTP",
        status: false,
      });
    }

    if (isExist.otp !== otp) {
      return res.json({
        message: "Invalid OTP",
        status: false,
      });
    }

    await OTPModel.findByIdAndUpdate(isExist._id, { isUsed: true });
    await UserModel.findOneAndUpdate({ email }, { isVerified: true });

    // console.log("OTP VERIFY")
    return res.json({
      message: "otp verify",
      status: true,
    });
  } catch (error) {
    res.json({
      message: error.message || "something went wrong",
      status: false,
      data: null,
    });
  }
};

export const resetOTPController = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({
        message: "Required field are missing",
        status: false,
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({
        message: "invalid email address",
        status: false,
      });
    }

    const otp = uuidv4().slice(0, 6);
    console.log("otp", otp);

    // send verfiy email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Email Verification",
      //   text: "HELLO JANI KYA HAL hai?",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header img {
            max-width: 150px;
            height: auto;
        }
        .greeting {
            font-size: 18px;
            color: #333;
            margin-bottom: 10px;
        }
        .main-content {
            font-size: 16px;
            color: #555;
            margin-bottom: 20px;
        }
        .verification-button {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            font-size: 16px;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 5px;
            text-align: center;
            font-weight: bold;
        }
        .verification-button:hover {
            background-color: #45a049;
        }
        .footer {
            font-size: 12px;
            color: #888;
            text-align: center;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <img src="https://www.hiringmine.com/assets/Hiring%20Mine%20Logo-453a72d3.png" alt="Your Logo">
        </div>
        <div class="greeting">
            <p>Hi ${user.name},</p>
        </div>
        <div class="main-content">
            <p>Thank you for signing up with HiringMine! We're excited to have you on board. To get started, please verify your email address by clicking the button below:</p>
        </div>
        <div style="text-align: center;">
            <button href="[Verification Link]" class="verification-button"> ${otp} </button>
        </div>
        <div class="footer">
            <p>If you didn't sign up for this account, please ignore this email.</p>
            <p>&copy; ${new Date().getFullYear()} HiringMine. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`,
    });
    const otpObj = {
      otp,
      email,
    };
    await OTPModel.create(otpObj);
    res.json({
      message: "RESET OTP SUCCESSFULLY",
      status: true,
    });
  } catch (error) {
    res.json({
      message: error.message || "something went wrong",
      status: false,
      data: null,
    });
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({
        message: "Required field are missing",
        status: false,
      });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({
        message: "Invalid Email address",
        status: false,
      });
    }

    const token = jwt.sign(
      { _id: user._id, email: email },
      process.env.SECRET_KEY,
      {
        expiresIn: "10m",
      }
    );

    const FE_URL = `${process.env.FRONTEND_URL}/change-password?q=${token}`;

    // send verify link
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Forgot password verify",
      html: `<html> <body>  <button  > <a href=${FE_URL} target="_blank" >Change Password</a>  </button>   </body> </html>`,
    });
    res.json({
      message: "Please check your email ",
      status: true,
      // data: null,
    });
  } catch (error) {
    res.json({
      message: error.message || "something went wrong",
      status: false,
      data: null,
    });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    if (!token || !newPassword) {
      return res.json({
        message: "Required field are missing",
        status: false,
      });
    }

    const tokenVerify = jwt.verify(token, process.env.SECRET_KEY);
    console.log("tokenVerify", tokenVerify);

    if (!tokenVerify.email || !tokenVerify._id) {
      return res.json({
        message: "Invalid Token",
        status: false,
      });
    }
    const hashPassword = await bcrypt.hash(newPassword, 10);
    await UserModel.findByIdAndUpdate(tokenVerify._id, {
      password: hashPassword,
    });

    res.json({
      message: "password changed! ",
      status: true,
      // data: null,
    });
  } catch (error) {
    res.json({
      message: error.message || "something went wrong",
      status: false,
      data: null,
    });
  }
};
