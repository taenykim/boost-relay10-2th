const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/chinook.db');

// db.run('CREATE TABLE User(id integer(50) primary key, pw varchar(20) not null, name varchar(20), gender number, age integer)');
// db.run('CREATE TABLE Board(' +
//   'no number primary key, ' +
//   'gender char(1), ' +
//   'age integer(10), ' +
//   'info text, ' +
//   'sDate date, ' +
//   'fDate date, ' +
//   'place varchar(20), ' +
//   'group_name varchar(20), ' +
//   'story text, ' +
//   'keywords text)');

db.run(`INSERT INTO User(pw, name, gender, age) VALUES('1234567', '릴레이1', 1, 45)`, function (err) {
  if (err) {
    return console.log(err.message);
  }
  console.log(`A row has been inserted with rowid ${this.lastID}`);
});

let sql = `SELECT * FROM User
           WHERE name = '릴레이1'`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row);
  });
});

db.close();