import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
// import { registerSchema } from "./schemas/authSchema.js";
// import { validate } from "./middleware/validateMiddleware.js";
const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
}));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.get("/api/health", (req, res) => { // why api/health why not "/" when to write api/v1?
  res.status(200).json({
    success: true,
    message: "Nilus Kitchen Dashboard API is running",
  });
});



// TEMPORARY TEST ROUTE to test via POSTMAN ---------------
// http://localhost:5000/api/test-validation
    // app.post(
    //   "/api/test-validation",
    //   validate(registerSchema),
    //   (req, res) => {
    //     res.json({
    //       message: "Validation passed",
    //       data: req.validatedBody,
    //     });
    //   }
    // );
// --------------------------------------------------

export default app;