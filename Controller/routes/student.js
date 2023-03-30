import express from "express";
const Router = express.Router();
import { allStudent, deleteStudent } from "../Controllers/studentController.js";

Router.get("/all", allStudent);
Router.get("/delete/:id([0-9]{2})", deleteStudent);

export default Router;
