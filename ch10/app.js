import express from 'express'
const app = express();
const port = process.env.PORT || 3002;
import web from './Routes/web.js';

app.use('/', web);
app.listen(port, () => {
  console.log(`Server is up on port http://localhost:${port}`);
});