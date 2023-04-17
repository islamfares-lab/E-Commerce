const express = require("express");
const auth = require("../middlewares/auth");
const {
  createUser,
  updateUser,
  getAllUsers,
  login,
  getUserByID,
  deleteUser,
} = require("../controllers/users");
const router = express.Router();
// Create account
router.post("/", createUser);
// login
router.post("/login", login);
// Update User
router.patch("/:id", updateUser);
// Get All Users
router.get("/", auth, getAllUsers);
// Get User by ID
router.get("/:id", auth, getUserByID);
// Delete User
router.delete("/:id", auth, deleteUser);
module.exports = router;
