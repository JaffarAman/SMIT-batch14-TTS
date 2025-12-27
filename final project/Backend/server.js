import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import bankRoute from "./routes/bank.js";
import complaintRoute from "./routes/complaint.js";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => console.log("MongoDB connected!"))
  .catch((err) => console.log("MongoDB Error!:", err.message));

app.use("/api/auth", authRoute);
app.use("/api/bank", bankRoute);
app.use("/api/complaint", complaintRoute);

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
