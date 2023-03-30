import express from "express";
import studentRouter from "./routes/student.js";
import teacherRouter from "./routes/teacher.js";

const app = express();

const port = process.env.PORT || 3000;
// Load Router Modules
app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

// Messy Code
// All Student Routes
