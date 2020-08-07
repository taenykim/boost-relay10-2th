const model = require('../../../models/posts');

/*
* GET  api/posts
*/
const getPosts = async (req, res) => { // 게시물 가져오기
  try {
    const [rows] = await model.getAllPosts();
    res.status(200).json({ posts: rows });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
}


/*
 * POST api/posts
 * BODY :: id, gender, age, info, start_date, end_date, place, group_name, story
 */
const createPost = async (req, res) => {// 게시물 생성
  console.log(req.body)
  const { id, gender, age, info, start_date, end_date, place, group_name, story } = req.body;
  console.log(id, gender, age, info, start_date, end_date, place, group_name, story)
  try {
    const ret = await model.createPost(id, gender, age, info, start_date, end_date, place, group_name, story);
    res.status(201).json({ message: 'success' });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
}


/**
* GET  api/posts/search/:keyword
*/
const searchPostByKeyword = async (req, res) => {//검색
  const { keyword } = req.params;
  try {
    const [rows] = await model.getPostsByKeyword(keyword);
    console.log(rows)
    res.status(200).json({ posts: rows });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' })
  }
}


module.exports = { searchPostByKeyword, createPost, getPosts };