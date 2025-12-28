import express from "express";
import { adminAuth } from "../middleware/adminAuth.js";
import ComplaintModel from "../models/complaintSchema.js";
const adminRoute = express.Router();

adminRoute.get("/all-complaints", adminAuth, async (req, res) => {
  const { bankId } = req.query;

  if (bankId) {
    const data = await ComplaintModel.find({ bankId });
    return res.json({
      data,
    });
  }

  const data = await ComplaintModel.find({});
  return res.json({
    data,
  });
});

export default adminRoute;
