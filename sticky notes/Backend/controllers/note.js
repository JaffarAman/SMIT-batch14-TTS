import noteModel from "../models/note.js";

export const createNote = async (req, res) => {
  try {
    console.log("req user", req.userId);
    const body = req.body;
    console.log("body", body);

    if (!req.body.title || !req.body.note) {
      res.status(400).json({
        message: "Required fields are missing",
        status: false,
      });
    }

    const saveObj = {
      ...body,
      createdBy: req.userId,
    };

    await noteModel.create(saveObj);

    res.status(201).json({
      message: "Created!",
    });
  } catch (error) {
    res.status(500).json({
      message: "error!",
    });
  }
};

export const singleNote = async (req, res) => {
  const params = req.params;

  const body = req.body;
  console.log("body", body);

  const saveObj = {
    ...body,
    createdBy: req.userId,
  };

  await noteModel.create(saveObj);

  res.json({
    message: "Created!",
  });
};
