const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Welcome route
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// In-memory user storage
let users = [];

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Add a new user
app.post("/users", (req, res) => {
  const { id, name, email } = req.body;
  users.push({ id, name, email });
  res.json({ message: "User added successfully", users });
});

// Update a user
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  users = users.map(user => (user.id === id ? { id, name, email } : user));
  res.json({ message: "User updated successfully", users });
});

// Delete a user
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id !== id);
  res.json({ message: "User deleted successfully", users });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
