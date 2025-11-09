import express from "express";
import { createNote } from "../controllers/note.js";
import { authMiddleware } from "../middleware/auth.js";

const noteRoute = express.Router();



noteRoute.post("/create-note" ,  authMiddleware ,createNote)
// noteRoute.get("/all-notes" ,   authMiddleware , getAllNotes )
// noteRoute.get("/single-note/:id" ,   authMiddleware , getAllNotes )


export default noteRoute;
