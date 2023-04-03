import express from "express";
import connectDB from "./db/connectDB.js";
const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/schoolDb";

// Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/schoolDb").then(() => {
//   console.log("Connected Successfully to MongoDB..");
// });
connectDB(DATABASE_URL);
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
