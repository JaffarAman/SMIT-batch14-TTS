import express from "express";
import { dbConnect } from "./config/db.js";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
dotenv.config();
import cors from "cors";
import noteRoute from "./routes/note.js";
import imageRoute from "./routes/image.js";
import { cloudinaryConfig } from "./config/cloudinary.js";
// import userRoute from "./routes/userRoute.js";
import cron from "node-cron";
import OTPModel from "./models/otp.js";
import { createClient } from "redis";


const app = express();
const PORT = process.env.PORT || 5000;

// body parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Redis
const client  = createClient()
client.on("connect" , ()=>console.log("Redis connected!"))
client.on("error" , (err)=>console.log("Redis Error!" , err.message))


client.connect()




//db connection
dbConnect();
cloudinaryConfig();

// All routes
app.use("/api/auth", authRoute);
app.use("/api/note", noteRoute);
app.use("/api/image", imageRoute);
// app.use("/api/", userRoute);

//root api
app.get("/", (req, res) => {
  res.json({
    message: "SERVER RUNNING...",
  });
});

// cron.schedule("*/5 * * * * *", () => {
//   console.log("run after every 5 sec...");
// });

cron.schedule("52 18 * * *", async () => {
  // console.log("run after every 5 sec...");
  try {
    console.log("delete otp")
    await OTPModel.deleteMany({ isUsed: true });
  } catch (error) {
    console.log("ERROR:", error.message);
  }
});

app.listen(PORT, () =>
  console.log(`server running on http://localhost:${PORT}`)
);
