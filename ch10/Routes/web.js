import express from "express";
const router = express.Router();
import { HomeController } from "../Controller/HomeController.js";
import { aboutController } from "../Controller/AboutController.js";

router.get("/", HomeController);
router.get("/about", aboutController);

export default router;
