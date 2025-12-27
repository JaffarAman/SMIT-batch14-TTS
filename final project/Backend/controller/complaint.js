import ComplaintModel from "../models/complaintSchema.js";

export const GenerateComplaint = async (req, res) => {
  try {
    const user = req.user;
    const { complaintType, category, description, priority, uploadedEvidence } =
      req.body;

    //   if(){}

    await ComplaintModel.create({ ...req.body, createdBy: user._id });
    res.status(200).json({
      message: "Complaint Generated!",
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

export const MyComplaints = async (req, res) => {
  try {
    const user = req.user;

    //   if(){}

    const data = await ComplaintModel.find({ createdBy: user._id });
    res.status(200).json({
      message: "Complaint fetched!",
      status: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};
