const express = require("express");
const auth = require("../middlewares/auth");
const {
  createSubcategory,
  updateSubcategory,
  getAllSubcategory,
  getSubcategoryByID,
  deleteSubcategory,
} = require("../controllers/subCategory");
const router = express.Router();
// Create Category
router.post("/", createSubcategory);
// Update Category
router.patch("/:id", updateSubcategory);
// Get All Category
router.get("/", auth, getAllSubcategory);
// Get Category by ID
router.get("/:id", auth, getSubcategoryByID);
// Delete Category
router.delete("/:id", auth, deleteSubcategory);
module.exports = router;
