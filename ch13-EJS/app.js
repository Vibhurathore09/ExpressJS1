import express from "express";
const app = express();
const port = process.env.PROCESS || "3002";
import web from "./routes/web.js";

// Load Routes
app.set('view engine' , 'ejs');
app.set('views', 'views');
app.get("/", web);
app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
