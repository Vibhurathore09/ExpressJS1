import express from "express";
const router = express.Router();
// import StduentController from "../Controller/StudentController.js";
import StudentController from "../Controller/StudentController.js";

router.get("/examplesession", StudentController.session_Example);
router.get("/devicesession", StudentController.get_Session_Data);
export default router;
