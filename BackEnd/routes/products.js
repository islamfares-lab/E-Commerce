const express = require("express");
const auth = require("../middlewares/auth");
const {
  createProduct,
  updateProduct,
  getAllProducts,
  getProductByID,
  deleteProduct,
} = require("../controllers/products");
const upload = require("../helpers/multer");
const router = express.Router();
// Create Product
router.post("/", upload.array('img') ,createProduct);
// Update Product
router.patch("/:id", updateProduct);
// Get All Product
router.get("/", auth, getAllProducts);
// Get Product by ID
router.get("/:id", auth, getProductByID);
// Delete Product
router.delete("/:id", auth, deleteProduct);
module.exports = router;
