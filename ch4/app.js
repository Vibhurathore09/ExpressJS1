const express = require("express");
const app = express();
const port = process.env.PORT || '3002'

app.get('/' ,(req , res)=>{
    res.send('Hello World !!')
})
app.listen(port , ()=>{
    console.log(`Server listening at http://localhost:${port}`);
})