import express from "express";
import { createNote } from "../controllers/note.js";
import { authMiddleware } from "../middleware/auth.js";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 100 requests per windowMs
  message: "Too many requests, please try again later.",
  standardHeaders: true, // Sends `RateLimit-*` response headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
});

const noteRoute = express.Router();

noteRoute.post("/create-note", [limiter, authMiddleware], createNote);






// noteRoute.post("/upload", limiter, authMiddleware, createNote);
// noteRoute.get("/all-notes" ,   authMiddleware , getAllNotes )
// noteRoute.get("/single-note/:id" ,   authMiddleware , getAllNotes )

export default noteRoute;
