import express from "express";
import { join } from "path";
import web from "./routes/web.js";
const app = express();
const port = process.env.PORT || 5000;

// Static Files
app.use(express.static(join(process.cwd(), "public")));
// app.use("/static", express.static(join(process.cwd(), "public")));

// Load Routes
app.use("/", web);


app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
