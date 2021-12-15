const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = express.Router();
const db = require('./db');
var cors = require('cors');

//parser
app.use(express.json());
//cors
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

app.post('/checkout', (req, res)=>{
  console.log(req.body)
  res.end('Success')
})

app.use(express.static('client/dist/'))