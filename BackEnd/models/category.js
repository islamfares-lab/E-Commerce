const mongoose = require("mongoose");
const joi = require("joi");
const categorySchema = mongoose.Schema({
  name: joi.string().required().min(3).max(10).trim(),
});
module.exports = mongoose.model("Category", categorySchema);
