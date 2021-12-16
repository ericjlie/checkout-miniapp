const mongoose = require('mongoose');

//const server = 'mongodb+srv://ericjlie:m0ng0D3t3ster@cluster0.etn9z.mongodb.net/checkout?retryWrites=true&w=majority'

async function main() {
  await mongoose.connect('mongodb+srv://ericjlie:m0ng0D3t3ster@cluster0.etn9z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
}

main()
.then(()=>{console.log('connecting to mongo')})
// .then(()=>{const silence = new Checkout({ name: 'Test' });
// console.log(silence.name); // 'Silence'
// silence.save();})
 .catch(err => console.log(err));

const transactionSchema = new mongoose.Schema({
  name: String,
  address: {
    lineOne: String,
    lineTwo: String,
    city: String,
    zip: String
  },
  payment: {
    cc: String,
    expDate: String,
    cvv: String,
    zip: String
  },
  email: String,
  password: String,
  phone: String
});
const Transaction = mongoose.model('Transaction', transactionSchema);

// const silence = new Transaction({ name: 'Test' });
// console.log(silence.name); // 'Silence'
// silence.save();

// const db = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// db.connect();

module.exports.mongoose = mongoose;
module.exports.Transaction = Transaction;