const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = express.Router();
const db = require('./db');
var cors = require('cors');

const data = [];

//parser
app.use(express.json());
//cors
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

app.post('/checkout', (req, res)=>{
  const checkout = new db.Transaction(req.body);
  console.log(checkout);
  data.push(req.body);
  checkout.save();
  res.end('Success')
})

app.get('/checkout', (req, res)=>{
  res.send(data)
})

app.use(express.static('client/dist/'))