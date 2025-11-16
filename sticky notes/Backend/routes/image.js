import express from "express";
import { createNote } from "../controllers/note.js";
import { upload } from "../middleware/multerMiddleware.js";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { cloudinaryUploader } from "../config/cloudinary.js";
import fs from "fs";
import { authMiddleware } from "../middleware/auth.js";
import UserModel from "../models/user.js";
console.log(
  process.env.CLOUDINARY_CLOUD_NAME,
  "process.env.CLOUDINARY_CLOUD_NAME"
);

const imageRoute = express.Router();

imageRoute.post(
  "/upload",
  authMiddleware,
  upload.single("profileImage"),
  async (req, res) => {
    try {
      console.log("req file", req.file);
      console.log("req file", req.userId);

      // image save on cloudinary
      const imageRes = await cloudinaryUploader.upload(req.file.path);

      // get user by id and save image URL

      console.log("imageRes", imageRes);

      await UserModel.findByIdAndUpdate(req.userId, {
        imageUrl: imageRes.secure_url,
      });

      res.json({
        message: "image uploaded",
        url: imageRes.secure_url,
      });
    } catch (error) {
      console.log("error upload image", error.message);
    } finally {
      console.log("finally");
      fs.unlinkSync(req.file.path);
    }
  }
);

export default imageRoute;
