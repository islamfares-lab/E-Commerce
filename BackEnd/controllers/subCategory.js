const subcategoryModel = require("../models/subCategory");
async function createSubcategory(req, res) {
  var subcategory = req.body;
  try {
    var createdSubcategory = await subcategoryModel.create(subcategory);
    res.status(201).json(createdSubcategory);
  } catch (err) {
    res.status(422).json({ errro: err.message });
  }
}
async function updateSubcategory(req, res) {
  var id = req.params.id;
  var data = req.body;
  try {
    var updatedSubcategory = await subcategoryModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );
    res.status(201).json(updatedSubcategory);
  } catch (err) {
    res.status(422).json(err.message);
  }
}
async function getAllSubcategory(req, res) {
  try {
    var allSubcategory = await subcategoryModel.find().populate("category");
    res.status(201).json(allSubcategory);
  } catch (err) {
    res.status(422).json(err.message);
  }
}
async function getSubcategoryByID(req, res) {
  const id = req.params.id;
  try {
    var subcategory = await subcategoryModel.findById(id).populate("category");
    res.status(201).json(subcategory);
  } catch (err) {
    res.status(422).json(err.message);
  }
}
async function deleteSubcategory(req, res) {
  const id = req.params.id;
  try {
    var deletedSubcategory = await subcategoryModel.findByIdAndDelete(id);
    res.status(201).json(deletedSubcategory);
  } catch (err) {
    res.status(422).json(err.message);
  }
}
module.exports = {
  createSubcategory,
  updateSubcategory,
  getAllSubcategory,
  getSubcategoryByID,
  deleteSubcategory,
};
