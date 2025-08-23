// server.js
import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";

import messageRoute from "./src/routes/messageRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(helmet());
app.use(cors());

// Routes
app.use("/api/messages", messageRoute);

// Start server
app.listen(PORT, "0.0.0.0", (err) => {
  if (err) {
    console.error("❌ Failed to start server:", err);
  } else {
    console.log(`✅ Server is running at http://localhost:${PORT}`);
  }
});
