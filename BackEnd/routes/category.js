const express = require("express");
const auth = require("../middlewares/auth");
const {
  createCategory,
  updateCategory,
  getAllCategory,
  getCategoryByID,
  deleteCategory,
} = require("../controllers/category");
const router = express.Router();
// Create Category
router.post("/", createCategory);
// Update Category
router.patch("/:id", updateCategory);
// Get All Category
router.get("/", auth, getAllCategory);
// Get Category by ID
router.get("/:id", auth, getCategoryByID);
// Delete Category
router.delete("/:id", auth, deleteCategory);
module.exports = router;
