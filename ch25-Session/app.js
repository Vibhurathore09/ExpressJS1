import express from "express";
import session from "express-session";
import web from "./routes/web.js";
const app = express();
const port = process.nextTick.PORT || 3000;

// Session
app.use(
  session({
    name: "Vibhu",
    secret: "iamkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 10000 },
  })
);

app.use("/", web);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
