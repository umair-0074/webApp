import { createMessage } from "../models/messagModel.js";
import nodemailer from "nodemailer";

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

    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP
      auth: {
        user: process.env.EMAIL_USER, //  email
        pass: process.env.EMAIL_PASS, //  app password
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: [process.env.EMAIL_USER, process.env.EMAIL_USER2], // send to yourself
      subject: `📩 New Message: ${subject}`,
      text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

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
