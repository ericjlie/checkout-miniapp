const postgres = require('pg');
const db = new postgres({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

db.connect();

module.exports = db;