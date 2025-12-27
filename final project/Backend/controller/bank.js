import BankModel from "../models/bankSchema.js";

export const AddBankController = async (req, res) => {
  try {
    const { bankName, bankCode } = req.body;

    if (!bankName || !bankCode) {
      return res.status(400).json({
        message: "required field are missing",
        status: false,
      });
    }
    const objToSave = {
      bankName,
      bankCode,
    };
    const data = await BankModel.create(objToSave);

    res.status(200).json({
      message: "Bank created!",
      status: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};

export const BankDropdownController = async (req, res) => {
  try {
    const data = await BankModel.find({});

    res.status(200).json({
      message: "bank fetch",
      status: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
      data: null,
    });
  }
};
