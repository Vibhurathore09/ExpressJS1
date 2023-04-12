import dotenv from 'dotenv'
dotenv.config();
import express from "express";
import web from "./routes/web.js";
import connectDB from "./db/connectDB.js";
const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/";

// Set view engine
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
// Database connection
connectDB(DATABASE_URL);

// Load Routes
app.use("/", web);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
