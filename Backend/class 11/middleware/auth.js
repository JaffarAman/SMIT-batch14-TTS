import jwt from "jsonwebtoken";
// auth middleware
export const authMiddleware = (request, response, next) => {
  try {
    const PRIVATE_KEY = "BATCH12";
    // console.log("request" , request.headers['authorization'])
    // console.log("request" , request.headers.authorization)
    const token = request.headers?.authorization?.split(" ")[1];
    // request?.headers?.authorization?.split
    // console.log("bearer-log:", bearer);
    console.log("token", token);
    console.log("request.headers", request.headers);
    const isVerify = jwt.verify(token, PRIVATE_KEY);
    // console.log("isVerify", isVerify);
    // return;

    // console.log("checkAuth middleware ");
    // const isLogin = false;

    if (isVerify._id) {
      next();
    } else {
      response.json("unAuth user!");
    }
  } catch (error) {
    response.json({
      message: "UnAuth user"
    });
  }
};
