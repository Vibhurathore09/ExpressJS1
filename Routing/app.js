// Routing
// const express = require('express');
import express from "express";
const app = express();
const port = process.env.PORT || "3002";

// Routes
app.get("/", (req, res) => {
  res.send("Get Method ");
});

// // String Path
// app.get("/about", (req, res) => {
//   res.send("About page");
// });
// app.get("/contact", (req, res) => {
//   res.send("Contact page");
// });

// String Pattern Path
// app.get("/ab?cd", (req ,res) => {
//   res.send("This route path will match acd and abcd");
// });

// Regular Expression Path
// app.get(/a/, (req ,res) => {
//   res.send("This is a");
// });

// One callback
// app.get('/cbexample' , (req , res)=>{
//   res.send('One callback Example')
// })

// More than one Callback
// app.get('/cbexample2' , (req , res , next)=>{
//   console.log("First callback");
//   next()

// } , (req ,res)=>{
//   console.log("Second callback");
//   res.send('More than One callback Example')
// })

// An Array of Callback
// const cb1 = (req, res ,next) => {
//   console.log("First callback");
//   next();
// };
// const cb2 = (req, res , next) => {
//   console.log("Second callback");
//   next();
// };
// const cb3 = (req, res) => {
//   console.log("Third callback");
//   res.send("AN array of callbacks Example");
//   // next();
// };
// app.get("/cbexample3", [cb1, cb2, cb3]);

// Combination of Independent Function and Array of Functions

// const cb1 = (req, res, next) => {
//   console.log("First callback");
//   next();
// };
// const cb2 = (req, res, next) => {
//   console.log("Second callback");
//   next();
// };
// app.get("/cbexample4", [cb1, cb2], (req, res, next) => {
//   console.log("Third Callback");
//   next();
// },(req , res)=>{
//   console.log("Fourth callback");
//   res.send('HELLO I AM FOURTH CALLBACK')
// });

// Chained Route Callback

// app.route("/student")
//   .all((req, res, next) => {
//     console.log("First Run This for all HTTP Method");
//     next();
//   })
//   .get((req, res) => {
//     console.log("Get Method");
//     res.send("All Student");
//   })
//   .post((req, res) => {
//     console.log("Post Method");
//     res.send("Add new Student");
//   })
//   .put((req, res) => {
//     console.log("PUT Method");
//     res.send("Add new Student");
//   });

// app.post('/student')

// app.all('/sabkux' , (req , res) =>{
//     res.send("ALL Method");
// })

// Messy Route
// All student Routes
// app.get("/student/all", (req, res) => {
//   res.send("All student");
// });
// app.post("/student/create", (req, res) => {
//   res.send("New Studernt Created");
// });
// app.put("/student/update", (req, res) => {
//   res.send("Student Updated");
// });
// app.delete("/student/delete", (req, res) => {
//   res.send("Student Deleted");
// });
// app.get("/teacher/all", (req, res) => {
//   res.send("All Teacher");
// });
// app.post("/teacher/create", (req, res) => {
//   res.send("New teaccher Created");
// });
// app.put("/teacher/update", (req, res) => {
//   res.send("Teacher Updated");
// });
// app.delete("/teacher/delete", (req, res) => {
//   res.send("Teacher Deleted");
// });

// ALL
app.all("*", (req, res) => {
  res.send("Page not Found !!");
});
app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
