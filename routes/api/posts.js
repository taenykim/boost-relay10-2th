const express = require('express');
const router = express.Router();
const models = require('../../models/posts');

/*
* GET  api/posts
*/
router.get('/posts', async (req, res) => { // 게시물 가져오기
  try {
    const posts = await models.getAllPosts();
    res.status(200).json({ posts });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
})

/*
 * POST api/posts
 */
router.post('/posts', async (req, res) => {// 게시물 생성
  const { gender, age, info, from, to, place, group_name, story } = req.body;
  try {
    const ret = await models.createPost(gender, age, info, from, to, place, group_name, story);
    res.status(201).json({ message: 'success' });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
});


/**
* GET  api/posts/search/:keyword
*/
router.get('/posts/search/:keyword', async (req, res) => {//검색
  const { keyword } = req.params;
  try {
    const posts = await models.getPostsByKeyword(keyword)
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' })
  }
})


module.exports = router;