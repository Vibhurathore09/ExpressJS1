import express from "express";
const app = express();
const port = process.env.PORT || 3002;
import studentRouter from "./routes/student.js";
app.use('/student', studentRouter);

app.listen(port, () => {
  console.log(`Server is up on port http://localhost:${port}`);
});