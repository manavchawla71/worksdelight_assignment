const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  text: {
    type: String,
    minlength: 6,
    maxlength: 50,
  },
  image: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
  tags: {
    type: [String],
    default: [],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
