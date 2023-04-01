import express from "express";
import path from "path";
const app = express();
const port = process.env.PORT || 3005;
import web from "./router/web.js";
// Set Template Engine
app.set("view engine", "ejs");

// Load Routes
app.use("/", web);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
