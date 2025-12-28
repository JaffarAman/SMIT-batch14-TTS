import express from "express";
import { GenerateComplaint, MyComplaints } from "../controller/complaint.js";
import { customerAuth } from "../middleware/customerAuth.js";
import { upload } from "../middleware/multer.js";
import { cloudinaryUploader } from "../config/cloudinary.js";
const docRoute = express.Router();

docRoute.post(
  "/upload",
  [customerAuth, upload.any("files")],
  async (req, res) => {
    const docCollection = req.files;
    console.log("req filesdocCollection", docCollection);
    const fileArr = [];
    //   docCollection.forEach(async (file) => {
    //     const res = await cloudinaryUploader.upload(file.path);
    //     fileArr.push(res);
    //   });

    for (var file of docCollection) {
      const res = await cloudinaryUploader.upload(file.path);
      fileArr.push(res);
    }

    console.log("fileArr", fileArr);
    res.status(200).json({
      message: "uploaded",
      data: fileArr,
    });
  }
);

export default docRoute;
