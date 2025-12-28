import mongoose from "mongoose";

const ComplaintSchema = new mongoose.Schema(
  {
    complaintType: {
      type: String,
      required: true,
      enum: ["Complaint", "Fraud"],
    },
    category: {
      type: String,
      required: true,
      enum: ["ATM", "Card", "Online Banking", "Branch Banking", "Other"],
    },
    description: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
      enum: ["low", "medium", "high"],
    },
    status: {
      type: String,
      enum: ["pending", "inProgress", "resolved", "closed", "rejected"],
      default: "pending",
    },
    uploadedEvidence: {
      type: Array,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    bankId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bank",
    },
  },
  { timestamps: true }
);

const ComplaintModel = mongoose.model("complaint", ComplaintSchema);

export default ComplaintModel;
// name
// email
// password
// role (customer / bank_officer / sbp_admin)
// bankId
// createdAt
