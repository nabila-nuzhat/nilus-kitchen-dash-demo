import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js"

// register user owner
const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.validatedBody;

    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email or username already exists",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10); // changed to 10 from suggested 12

    const user = await User.create({
      username,
      email,
      passwordHash,
    });

    return res.status(201).json({
      message: "Owner registered",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        emailVerified: user.emailVerified,
      },
    });
  } catch (error) {
    next(error);
  }
};

// login user owner
const login = async (req, res, next) => {
  try {
    const { email, password } = req.validatedBody;

    const user = await User.findOne({ email }).select("+passwordHash");

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { sub: user._id.toString(), role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export {register, login}