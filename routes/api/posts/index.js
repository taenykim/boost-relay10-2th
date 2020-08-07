const express = require('express');
const controller = require('./posts.contollers');
const router = express.Router();

router.get('/', controller.getPosts);
router.post('/', controller.createPost);
router.get('/search/:keyword', controller.searchPostByKeyword);

module.exports = router;