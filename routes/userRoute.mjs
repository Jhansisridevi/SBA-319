import express from "express";
import mongoose from "mongoose";
import dotenve from "dotenv";
import User from "../models/user.mjs";
import Post from "../models/post.mjs";
dotenve.config();
const router = express.Router();

mongoose.connect(process.env.URI); //database connection
mongoose.connection.on(
  "error",
  console.error.bind(console, "Connection error:")
); //open close db

// GET - one user
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.findById(id);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving users" });
  }
});

// POST - to add a new user
router.post("/users", async (req, res) => {
  const { username, email } = req.body;
  try {
    const newUser = new User({ username, email });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
});

// POST - a new post from an existing user
router.post("/users/:userId/posts", async (req, res) => {
  const { userId } = req.params;
  const { content, media, title, description } = req.body;
  //Application-side validation
  if (!content || content.length === 0) {
    return res.status(400).json({ error: "Content is required" });
  }

  if (content.length > 250) {
    return res
      .status(400)
      .json({ error: "Content exceeds maximum length of 250 characters" });
  }
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const newPost = new Post({
      content,
      media,
      title,
      description,
      user: userId,
    });
    const savedPost = await newPost.save();
    console.log(savedPost);
    res.json(savedPost);
  } catch (error) {
    res.status(500).json({ error: "Error creating post" });
  }
});

// PATCH - update an existing post
router.patch("/users/:userId/posts/:postId", async (req, res) => {
  const { userId, postId } = req.params;
  const { content, media, title, description } = req.body;
  try {
    const post = await Post.findOneAndUpdate(
      { _id: postId, user: userId },
      { content, media, title, description },
      { new: true }
    );

    if (!post) {
      return res
        .status(404)
        .json({ error: "Post not found / no permission to update it" });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Error updating post" });
  }
});
// DELETE - an user 
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const users = await User.findByIdAndDelete(id);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error deleting the users" });
  }
});

export default router;
