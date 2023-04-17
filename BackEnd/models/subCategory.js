const mongoose = require("mongoose");
const joi = require("joi");
const subcategorySchema = mongoose.Schema({
  name: joi.string().required().min(3).max(10).trim(),
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});
module.exports = mongoose.model("Subcategory", subcategorySchema);
