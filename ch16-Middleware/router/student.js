import express from 'express';
const router = express.Router();
import { studentController } from '../controller/studentController.js';

router.get('/student', studentController);

export default router;