import mongoose from "mongoose";

const bankSchema = new mongoose.Schema(
  {
    bankName: {
      type: String,
      required: true,
    },
    bankCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BankModel = mongoose.model("bank", bankSchema);
export default BankModel;
