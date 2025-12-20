import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: String,
    desc: String,
    price: String,
  },
  { timestamps: true }
);

const productModel = mongoose.model("product", productSchema);

export default productModel;
