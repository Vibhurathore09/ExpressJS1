import express from "express";
import connectdb from "./db/connectdb.js";
import web from './routes/web.js';
import { join } from "path";
const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/";


app.set("view engine", "ejs");
// Database Connection
connectdb(DATABASE_URL);

// static Files
app.use(express.static(join(process.cwd(), "public")));

// load Routes
app.use('/student' , web)

app.listen(port, () => {
  console.log(`Listening on por http://localhost:${port}`);
});
