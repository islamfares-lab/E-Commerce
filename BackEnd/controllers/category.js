const categoryModel = require("../models/category");
async function createCategory(req, res) {
    var category = req.body;
    try {
      var createdCategory = await categoryModel.create(category);
      res.status(201).json(createdCategory);
    } catch (err) {
      res.status(422).json({ errro: err.message });
    }
  }
  async function updateCategory(req, res) {
    var id = req.params.id;
    var data = req.body;
    try {
      var updatedCategory = await categoryModel.findByIdAndUpdate(
        id,
        { $set: data },
        { new: true, runValidators: true }
      );
      res.status(201).json(updatedCategory);
    } catch (err) {
      res.status(422).json(err.message);
    }
  }
  async function getAllCategory(req, res) {
    try {
      var allCategory = await categoryModel.find();
      res.status(201).json(allCategory);
    } catch (err) {
      res.status(422).json(err.message);
    }
  }
  async function getCategoryByID(req, res) {
    const id = req.params.id;
    try {
      var category = await categoryModel.findById(id);
      res.status(201).json(category);
    } catch (err) {
      res.status(422).json(err.message);
    }
  }
  async function deleteCategory(req, res) {
    const id = req.params.id;
    try {
      var deletedCategory = await categoryModel.findByIdAndDelete(id);
      res.status(201).json(deletedCategory);
    } catch (err) {
      res.status(422).json(err.message);
    }
  }
  module.exports={
    createCategory,
    updateCategory,
    getAllCategory,
    getCategoryByID,
    deleteCategory
  }
