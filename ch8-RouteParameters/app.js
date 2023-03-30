import express from "express";
const app = express();
const port = process.env.PORT || 3001;

// app.get("/Student/delete/:id", (req, res) => {
//   console.log(req.params);
//   res.send(`Student Deleted ${req.params.id}`);
// });

// app.get("/product/:category/:id", (req, res) => {
//   console.log(req.params);
//   const { category, id } = req.params;
//   res.send(`Product ${id} of ${category}`);
// });

// app.get("/product/order/:year/:month/:day", (req, res) => {
//   console.log(req.params);
//   const { year, month, day } = req.params;
//   res.send(`Order Date ${day}/${month}/${year}`);
// });

// app.get("/train/:from-:to", (req, res) => {
//   console.log(req.params);
//   const { from, to } = req.params;
//   res.send(`Train from ${from} to ${to}`);
// });

// app.get("/location/:state.:city", (req, res) => {
//   console.log(req.params);
//   const { state, city } = req.params;
//   res.send(`Location ${city} of ${state}`);
// });

// app.param()

// app.param("id", (req, res, next, id) => {
//   console.log(`ID is ${id}`);
//   next();
// });
// app.get("/user/:id", (req, res , next) => {
//   console.log("This is user ID path 1");
//   next();
// });
// app.get("/user/:id", (req, res) => {
//   console.log("This is user ID path 2");
//   res.send("Response OK");
// });
// app.listen(port, () => {
//   console.log(`Server is up on port http://localhost:${port}`);
// });

// app.param() - Array of Route Parameter

// app.param(['id' , 'page'], (req, res, next, id) => {
//     console.log(`ID is ${id}`);
//     next();
//   });
//   app.get("/user/:id/:page", (req, res , next) => {
//     console.log("This is user ID path 1");
//     next();
//   });
//   app.get("/user/:id/:page", (req, res) => {
//     console.log("This is user ID path 2");
//     res.send("Response OK");
//   });

// QUERY STRING

app.get("/product", (req, res) => {
  console.log(req.query);
  const { category, id } = req.query;
  res.send(`Product OK ${category} and ID ${id}`);
});

app.listen(port, () => {
  console.log(`Server is up on port http://localhost:${port}`);
});
