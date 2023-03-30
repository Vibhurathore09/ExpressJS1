import express from "express";
import { join } from "path";
import web from './routes/web.js'
const app = express();
const port = process.env.PORT || "4000";

// Setup the Diretory where template files are loacted
// app.set('views' ,'./views');

// Setup the Template Engine to use
app.set('view engine', 'ejs');
// Static Files
app.use(express.static(join(process.cwd(), 'public')));
app.get('/', web)
app.get('/about', web)

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
