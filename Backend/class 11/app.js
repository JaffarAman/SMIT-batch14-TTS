import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./routes/index.js";
import dotenv from "dotenv";
// dotenv config
dotenv.config();

console.log("name", process.env.NAME);

const app = express();
const PORT = process.env.PORT || 5000;

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// const URI = ``;

// connect DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => console.log("mongoDB connected"))
  .catch((err) => console.log("MongoDb Error:", err.message));

// all routes
app.use(route);

app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));
