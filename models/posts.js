const sqlite3 = require('sqlite3').verbose();
const pool = require('../lib/database');

// TODO :: sqlite3로 쿼리 날리기

/* 전체 글 조회 */
const getAllPosts = () => {
  let sql = "SELECT * FROM Board;";
  return pool.execute(sql);
  // return sqlite3 
}

/* 글 작성  */
const createPost = (id, gender, age, info, start_date, end_date, place, group_name, story) => {
  let sql = `INSERT into Board (id, gender, age, info, start_date, end_date, place, group_name, story) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`;
  return pool.execute(sql, [id, gender, age, info, start_date, end_date, place, group_name, story]);
  // return sqlite3
}

/* 키워드로 게시판 글 검색 */
const getPostsByKeyword = (keyword) => {
  let sql = `SELECT * FROM Board WHERE keywords like '%${keyword}%';`;; // TODO :: sql 
  return pool.execute(sql);
}


module.exports = {
  getAllPosts, createPost, getPostsByKeyword
}