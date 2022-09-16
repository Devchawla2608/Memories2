const express = require('express')
const router = express.Router();

const postController = require('../controller/posts_controller');

router.get('/' , postController.getPost);
router.post('/create' , postController.createPost);

module.exports = router;