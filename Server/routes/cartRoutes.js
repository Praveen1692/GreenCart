import express from "express";
import { updateCart } from "../controllers/cartController.js";
const cartRoutes = express.Router();

cartRoutes.post("/", updateCart);

export default cartRoutes;
