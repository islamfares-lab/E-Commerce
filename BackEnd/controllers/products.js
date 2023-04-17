const productModel = require("../models/product");
const uploads= require("../helpers/cloudinary");
async function createProduct(req, res, next) {
  var product = req.body.mainImages=[];
   const uploader=async (path)=>{
    return await uploads(path,"images")
   }
   for(var i=0; i<req.files.length; i++){
    const url=await uploader(req.files[i].path)
    product.push(url);
   }
   try {
     var createdProduct = await productModel.create(product);
     res.status(201).json(createdProduct);
   } catch (err) {
     res.status(422).json({ errro: err.message });
   }
 }

async function updateProduct(req, res) {
  var id = req.params.id;
  var data = req.body;
  try {
    var updatedProduct = await productModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );
    res.status(201).json(updatedProduct);
  } catch (err) {
    res.status(422).json(err.message);
  }
}
async function getAllProducts(req, res) {
  try {
    var allProducts = await productModel.find();
    res.status(201).json(allProducts);
  } catch (err) {
    res.status(422).json(err.message);
  }
}
async function getProductByID(req, res) {
  const id = req.params.id;
  try {
    var product = await productModel.findById(id);
    res.status(201).json(product);
  } catch (err) {
    res.status(422).json(err.message);
  }
}
async function deleteProduct(req, res) {
  const id = req.params.id;
  try {
    var deletedProduct = await productModel.findByIdAndDelete(id);
    res.status(201).json(deletedProduct);
  } catch (err) {
    res.status(422).json(err.message);
  }
}
module.exports = {
  createProduct,
  updateProduct,
  getAllProducts,
  getProductByID,
  deleteProduct,
};
