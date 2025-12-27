import express from "express";
import { GenerateComplaint, MyComplaints } from "../controller/complaint.js";
import { customerAuth } from "../middleware/customerAuth.js";
const complaintRoute = express.Router();

complaintRoute.post("/generate", customerAuth, GenerateComplaint);
complaintRoute.get("/me", customerAuth, MyComplaints);

export default complaintRoute;
