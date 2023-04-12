import express from "express";
import web from "./routes/web.js";
import connectDB from "./db/connectdb.js";
const port = process.env.PORT || 3000;

const Database_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/";
const app = express();
// Database connection
connectDB(Database_URL);

app.use("/", web);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
