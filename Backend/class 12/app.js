import express from "express";
const app = express();
const PORT = 5000;
import mongoose from "mongoose";
import userModel from "./models/userSchema.js";
import productModel from "./models/productSchema.js";
import orderModel from "./models/orderSchema.js";
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    `mongodb+srv://admin:admin123@hiringmine.r0d1qte.mongodb.net/?retryWrites=true&w=majority&appName=hiringmine`
  )
  .then((res) => console.log("mongoDB Connected"))
  .catch((error) => console.log("Error", error.message));

app.get("/", (req, res) => {
  res.json({
    message: "server up!",
  });
});

app.post("/create-user", async (req, res) => {
  const body = req.body;
  await userModel.create(body);
  res.json({
    message: "user created!",
  });
});

app.post("/create-product", async (req, res) => {
  const body = req.body;
  await productModel.create(body);
  res.json({
    message: "user created!",
  });
});

app.post("/create-order", async (req, res) => {
  const body = req.body;
  await orderModel.create(body);
  res.json({
    message: "user created!",
  });
});

app.get("/get-order/:id", async (req, res) => {
  const { id } = req.params;
  //   const resData = await orderModel.findById(id).populate("user product");
  const resData = await orderModel
    .findById(id)
    .select("paymentType user  product")
    .populate("user product");

  res.json({
    message: "get order!",
    data: resData,
  });
});

app.listen(PORT, () => console.log(`server running on PORT:${PORT}`));
