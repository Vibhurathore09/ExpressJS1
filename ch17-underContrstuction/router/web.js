import express from "express";
// import path from "path";

// import { homeController } from "../controller/homeController";
import {homeController} from '../controller/homeController.js';
import {aboutController} from '../controller/aboutController.js';
const router = express.Router();

router.get("/", homeController);
router.get("/about", aboutController);

export default router;
