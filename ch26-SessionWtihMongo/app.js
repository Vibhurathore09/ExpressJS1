import express from "express";
import session from "express-session";
import web from "./routes/web.js";
import connectDB from "./db/connectDB.js";
import MongoStore from "connect-mongo";
const app = express();
const port = process.nextTick.PORT || 3000;
const Database_URl = process.env.Database_URl || "mongodb://127.0.0.1:27017/";
// Database Connection
connectDB(Database_URl);

// MongoDB Session
const sessionStorage = MongoStore.create({
  mongoUrl: Database_URl,
  dbName: "schoolDb",
  collectionName: "sessions",
  ttl: 14 * 24 * 60 * 60, //14 days
  autoRemove: "native",
});

// Session
app.use(
  session({
    name: "Vibhu",
    secret: "iamkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 100000 },
    store: sessionStorage,
  })
);

app.use("/", web);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
