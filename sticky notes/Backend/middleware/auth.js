import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    const isVerify = jwt.verify(token, process.env.SECRET_KEY);
    console.log("isVerify", isVerify);
    if (isVerify._id) {
      req.userId = isVerify._id;
      next();
    } else {
      res.status(401).json({
        message: "UnAuth user!",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: error.message || "UnAuth user!",
    });
  }
};
