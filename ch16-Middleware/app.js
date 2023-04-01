import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import web from "./router/web.js";

app.set("view engine", "ejs");
app.use("/", web);

app.listen(port, () => {
  console.log(`Server is running on the port http://localhost:${port}`);
});
