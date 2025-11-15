import mongoose from "mongoose";
console.log("process.env.MONGODB_URI", process.env.MONGODB_URI);
export const dbConnect = () => {
  const URI = process.env.MONGODB_URI;
  mongoose
    .connect(URI)
    .then(() => console.log("✅ mongoDB connected!"))
    .catch((error) => console.log("❌mongoDB Error!", error.message));
};
