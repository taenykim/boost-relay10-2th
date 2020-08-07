const express = require('express');
const router = express.Router()

const postRouter = require('./api/posts/index');

router.use('/posts', postRouter);

module.exports = router;