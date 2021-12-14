const express = require('express');
const app = express();
const PORT = process.env.PORT;
const router = express.Router();

//parser
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

app.post('/', (req, res)=>{
  req.body
})

app.use(express.static('client/dist/'))