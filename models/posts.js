const sqlite3 = require('sqlite3').verbose();

// TODO :: sqlite3로 쿼리 날리기

/* 전체 글 조회 */
const getAllPosts = () => {
  let sql = "SELECT * FROM boards;";
  // return sqlite3 
}

/* 글 작성  */
const createPost = (gender, age, info, from, to, place, group_name, story) => {
  let sql = `INSERT into Board (gender, age, info, from, to, place, group_name, story) 
  VALUES (${gender}, ${age}, ${info}, ${from}, ${to}, ${place}, ${group_name}, ${story});`;
  // return sqlite3
}


/* 키워드로 게시판 글 검색 */
const getPostsByKeyword = (keyword) => {
  let sql = "";; // TODO :: sql 
  // return 
}


module.exports = {
  getAllPosts, createPost, getPostsByKeyword
}