import express from "express";
import { signupController } from "../controller/auth.js";
import { AddBankController, BankDropdownController } from "../controller/bank.js";
const bankRoute = express.Router();

bankRoute.post("/add", AddBankController);
bankRoute.get("/dropdown", BankDropdownController);

export default bankRoute;
