import express from "express";
import { signupController } from "../controller/auth.js";
import {
  AddBankController,
  BankDropdownController,
} from "../controller/bank.js";
import { adminAuth } from "../middleware/adminAuth.js";
const bankRoute = express.Router();

bankRoute.post("/add", adminAuth, AddBankController);
bankRoute.get("/dropdown", BankDropdownController);

export default bankRoute;
