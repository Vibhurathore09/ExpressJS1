import express from "express";
import { aboutController } from "../controllers/aboutController.js";
const router = express.Router();
import { homeController } from "../controllers/homeController.js";

router.get("/", homeController);
router.get("/about", aboutController);


export default router;
