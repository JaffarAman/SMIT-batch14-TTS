import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
    },
    orderType: String,
    paymentType: String,
  },
  { timestamps: true }
);

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;
