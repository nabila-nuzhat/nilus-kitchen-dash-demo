import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
}));

app.use(express.json());

app.get("/api/health", (req, res) => { // why api/health why not "/" when to write api/v1?
  res.status(200).json({
    success: true,
    message: "Nilus Kitchen Dashboard API is running",
  });
});

export default app;