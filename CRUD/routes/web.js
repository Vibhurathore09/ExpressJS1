import express from "express";
import { studentController } from "../controller/studentController.js";
const router = express.Router();
router.get('/' , studentController.getAllDoc);

export default router;