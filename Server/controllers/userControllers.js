import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie-parser";

// Register User;
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !name || !password) {
      return res.json({ success: false, message: "All Field are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "Email is already register" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashPassword });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return res.json({
      success: true,
      user: { email: user.email, name: user.name },
    });
  } catch (error) {
    console.log(error.message);

    res.json({ success: false, message: error.message });
  }
};

// Login User;

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ success: false, message: "All fields are required.." });
    }
    const checkEmail = await User.findOne({ email });
    if (!checkEmail) {
      return res.json({ success: false, message: "Email id is not register" });
    }
    const checkPassword=await bcrypt.compare(password,checkEmail.password);
    if(!checkPassword){
        return res.json({success:flase,message:"password is not correct.."})
    }

  } catch (error) {}
};
