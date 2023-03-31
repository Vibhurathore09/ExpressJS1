import express from "express";
import path from "path";
const app = express();
const port = process.env.PORT || 3000;

// Set Template Engine
app.set("view engine", "ejs");

// Load Routes
app.use("/", web);

app.listen("/", () => {
  console.log(`Server running on port http://localhost:${port}`);
});
