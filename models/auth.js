const pool = require('../lib/database');

// TODO :: sqlite3로 쿼리 날리기

/* 로그인 */
const getUser = (id) => {
  let sql = "SELECT * FROM User WHERE id=?;";
  return pool.query(sql, id);
}

/* 회원추가 */
const addUser = (id, pw, name, gender, age) => {
  let sql = "INSERT INTO User (id, pw, name, gender, age) VALUES (?, ?, ?, ?, ?);";
  return pool.execute(sql, [id, pw, name, gender, age]);
}

module.exports = {
  getUser, addUser
}