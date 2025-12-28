import express from "express";
import { bankOfficerAuth } from "../middleware/bankOfficerAuth.js";
import ComplaintModel from "../models/complaintSchema.js";
const bankOfficerRoute = express.Router();

bankOfficerRoute.get("/get-complaints", bankOfficerAuth, async (req, res) => {
  console.log("req user", req.user.bankId);
  const data = await ComplaintModel.find({ bankId: req.user.bankId });
  res.json({
    message: "complaints fetch",
    data,
  });
});

// enum: ["pending", "inProgress", "resolved", "closed", "rejected"],

bankOfficerRoute.put(
  "/update-complaint/:Cid",
  bankOfficerAuth,
  async (req, res) => {
    const { Cid } = req.params;
    const { status } = req.body;
    console.log("req Cid", Cid);
    console.log("status", status);

    const data = await ComplaintModel.findByIdAndUpdate(
      { _id: Cid },
      { status },
      { new: true }
    );
    res.json({
      message: "complaints status updated!",
      data,
    });
  }
);

export default bankOfficerRoute;
