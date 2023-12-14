const express = require("express");
const router = express.Router();
let posts = [
  {
    id: 1,
    text: "Sample post 1",
    user: 123,
    tags: ["tag1", "tag2"],
  },
  {
    id: 2,
    text: "Sample post 2",
    user: 456,
    tags: ["tag3"],
  },
];
router.get("/post", (req, res) => {
  res.json(posts);
});

// Get list of posts for specific user sorted by creation date
router.get("/user/:id/post", (req, res) => {
  const userId = parseInt(req.params.id);
  const userPosts = posts.filter((post) => post.user === userId);
  res.json(userPosts);
});

// Get list of posts for specific tag sorted by creation date
router.get("/tag/:id/post", (req, res) => {
  const tagId = req.params.id;
  const tagPosts = posts.filter((post) => post.tags.includes(tagId));
  res.json(tagPosts);
});

// Get Post by id
router.get("/post/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.json(post);
});

// Create Post
router.post("/post/create", (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Update Post
router.put("/post/:id", (req, res) => {
  const postId = parseInt(req.params.id);

  const updatedPost = req.body; // Update this line with your logic
  res.json(updatedPost);
});

// Delete Post
router.delete("/post/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  posts = posts.filter((post) => post.id !== postId);
  res.json({ message: `Post with ID ${postId} deleted` });
});

module.exports = router;
