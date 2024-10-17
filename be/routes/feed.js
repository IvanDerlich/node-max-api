const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const {
  getPosts,
  postPost,
  getPost,
  updatePost,
} = require("../controllers/feed");

const postPostValidator = [
  body("title").trim().isLength({ min: 5 }),
  body("content").trim().isLength({ min: 5 }),
];

router.get("/posts", getPosts);
router.post("/post", postPostValidator, postPost);
router.get("/post/:postId", getPost);
router.put("/post/:postId", postPostValidator, updatePost);

module.exports = router;
