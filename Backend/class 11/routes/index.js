import express from "express";

import { LoginController, SignupController } from "../controller/auth.js";
import { authMiddleware } from "../middleware/auth.js";
import { welcomeEmail } from "../controller/email.js";

const route = express.Router();

route.post("/signup", SignupController);

route.post("/login", LoginController);

// private
route.post("/createpost", authMiddleware, (request, response) => {
  response.json("API HIT: post Created");
});
route.get("/getpost", authMiddleware, (request, response) => {
  response.json("API HIT: post Created");
});


route.post("/welcome-email" , welcomeEmail)


export default route;
