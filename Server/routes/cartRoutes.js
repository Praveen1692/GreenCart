import express from "express";

import { updateCart } from "../controllers/cartController.js";
import authUser from "../middleware/authUser.js";
const cartRoutes = express.Router();

cartRoutes.post("/update", authUser, updateCart);

export default cartRoutes;
