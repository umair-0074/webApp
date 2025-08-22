import { createMessage } from "../models/messagModel.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    //  Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields are required",
      });
    }

    // Save to DB
    const newMessage = await createMessage({ name, email, subject, message });

    //  Success response
    return res.status(201).json({
      success: true,
      data: newMessage,
    });
  } catch (err) {
    //  Error handled *here* instead of next()
    console.error(" Error saving message:", err.message);

    return res.status(500).json({
      success: false,
      error: "Internal server error. Please try again later.",
    });
  }
};
