import express from "express";
import { dbConnect } from "./config/db.js";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
dotenv.config();
import cors from "cors";
import noteRoute from "./routes/note.js";

const app = express();
const PORT = process.env.PORT || 5000;

// body parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//db connection
dbConnect();

// All routes
app.use("/api/auth", authRoute);
app.use("/api/note" , noteRoute )

//root api
app.get("/", (req, res) => {
  res.json({
    message: "SERVER RUNNING...",
  });
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
