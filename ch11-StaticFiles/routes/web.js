import express from "express";
const router = express.Router();
import { homeController } from "../Controller/homeController.js";
// import { aboutController } from "../Controller/AboutController.js";

router.get("/", homeController);
router.get('/' , (req, res) => res.render('index'))
// router.get("/about", aboutController);

export default router;
