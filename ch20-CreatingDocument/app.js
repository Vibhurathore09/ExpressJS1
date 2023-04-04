import express from "express";
import './models/student.js'
import connectDB from "./DB/connectDB.js";
import {getAllDoc , getAllDocSpecificField , getSingleDoc , getSingleDocSpecificField ,getDocByField , getDocByFieldSpecificField , getLimitedDoc , getSkipDoc , getDocCount, getSortedDoc, compDoc, logDoc} from "./models/student.js";
const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/";

// Database connection
connectDB(DATABASE_URL);

// getAllDoc();
// getAllDocSpecificField();
// getSingleDoc();
// getSingleDocSpecificField();
// getDocByField();
// getDocByFieldSpecificField();
// getLimitedDoc();
// getSkipDoc(); 
// getDocCount();
// getSortedDoc();
// compDoc();
logDoc();

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
