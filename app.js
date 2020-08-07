const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();

const port = 80;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));


// open database in memory
let db = new sqlite3.Database('./db/test.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});


db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});

app.get('/', (req, res) => {
  res.send("main");
})

app.get('/test', (req, res) => {
  res.send("test")
})


app.listen(port, () => {
  console.log("start server");
});