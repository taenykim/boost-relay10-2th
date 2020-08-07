const express = require('express');
const router = express.Router()


const postRouter = require('./api/posts/index');
const authRouter = require('./api/auth/index');

router.use('/posts', postRouter);
router.use('/auth', authRouter);

module.exports = router;