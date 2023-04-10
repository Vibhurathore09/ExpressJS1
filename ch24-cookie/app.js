import express from 'express'
import cookieParser from 'cookie-parser'
import web from './routes/web.js'
const app = express()
const port = process.env.PORT || 3000


// Cookie Parser
app.use(cookieParser())


// Routes
app.use('/', web)


app.listen(port , () =>{
    console.log(`Listening on port http://localhost:${port}`);
})
