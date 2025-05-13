import { use } from "react";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register User;
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !name || !password) {
      return res.json({ success: false, message: "All Field are required" });
    }
    const existingUser = await User.find({ email });
    if (existingUser) {
      return res.json({ success: false, message: "Email is already register" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashPassword });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  } catch (error) {}
};
