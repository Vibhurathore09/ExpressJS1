import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import web from "./router/web.js";
import myLogger from "./middleware/logger-middleware.js";
// import stide from "./controller/studentController.js";
import student from "./router/student.js";
app.set("view engine", "ejs");

// Application Level Middleware
app.use(myLogger)
// app.use('/about' , myLogger);

// Load Routes
app.use("/", web);
app.use("/", student);
app.listen(port, () => {
  console.log(`Server is running on the port http://localhost:${port}`);
});
