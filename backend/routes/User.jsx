const express = require("express");
const router = express.Router();

let users = [
  {
    id: 123,
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    registerDate: "2023-12-15",
  },
  {
    id: 456,
    firstName: "Alice",
    lastName: "Smith",
    email: "alice@example.com",
    registerDate: "2023-12-14",
  },
];

// Get list of users sorted by registration date
router.get("/user", (req, res) => {
  res.json(users);
});

// Get User by id
router.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
});

// Create User
router.post("/user/create", (req, res) => {
  const newUser = req.body; // Assuming request body contains necessary user data

  users.push(newUser);
  res.status(201).json(newUser);
});

// Update User
router.put("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  res.json(updatedUser);
});

// Delete User
router.delete("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  users = users.filter((user) => user.id !== userId);
  res.json({ message: `User with ID ${userId} deleted` });
});

module.exports = router;
