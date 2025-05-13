import express from "express";
import { register } from "../controllers/userControllers.js";
const userRouter = express.Router();

userRouter.post("/", register);

export default userRouter;
