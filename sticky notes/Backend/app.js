import express from "express";
import { dbConnect } from "./config/db.js";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
dotenv.config();
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// body parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//db connection
dbConnect();

// All routes
app.use("/api", authRoute);


//root api
app.get("/", (req, res) => {
  res.json({
    message: "SERVER RUNNING...",
  });
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
