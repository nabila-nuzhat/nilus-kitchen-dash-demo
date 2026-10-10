// import { Router } from "express"; //suggested
import express from "express";
import { register, login } from "../controllers/authController.js";
import  validate  from "../middleware/validateMiddleware.js"; //????????? issue

import { registerSchema, loginSchema } from "../schemas/authSchema.js";

// const router = Router(); // suggested
const router = express.Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);

export default router;