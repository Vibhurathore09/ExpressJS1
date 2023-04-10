import express from "express";
const router = express.Router();
import StduentController from "../Controller/StudentController.js";
import StudentController from "../Controller/StudentController.js";

router.get("/getsessioninfo", StduentController.get_session_info);
router.get('/deletesession' , StduentController.delete_session);
router.get('/regnsession' , StudentController.regn_session);
export default router;
