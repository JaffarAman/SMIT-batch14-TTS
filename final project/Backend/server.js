import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import bankRoute from "./routes/bank.js";
import complaintRoute from "./routes/complaint.js";
import docRoute from "./routes/doc.js";
import { cloudinaryConfig } from "./config/cloudinary.js";
import bankOfficerRoute from "./routes/bankOfficerRoute.js";
import adminRoute from "./routes/adminRoute.js";
import cors from "cors";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => console.log("MongoDB connected!"))
  .catch((err) => console.log("MongoDB Error!:", err.message));

cloudinaryConfig();

app.use("/api/auth", authRoute);
app.use("/api/bank", bankRoute);
app.use("/api/complaint", complaintRoute);
app.use("/api/doc", docRoute);

// bank officer
app.use("/api/bank-officer", bankOfficerRoute);

// admin
app.use("/api/admin", adminRoute);

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
