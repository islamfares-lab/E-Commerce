const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();
async function createUser(req, res) {
  var user = req.body;
  try {
    var createdUser = await userModel.create(user);
    res.status(201).json(createdUser);
  } catch (err) {
    res.status(422).json({ errro: err.message });
  }
}
// login
async function login(req, res) {
  var user = req.body;
  try {
    var result = await userModel.findOne({ email: user.email });
    if (result) {
      var valid = bcrypt.compareSync(user.password, result.password);
      if (valid) {
        var token = jwt.sign(
          {
            data: { userEmail: result.email, userId: result._id },
          },
          process.env.secret_password,
          { expiresIn: "1h" }
        );
        res.status(200).json(token);
      } else {
        res.status(401).json("please insert vaild Data");
      }
    } else {
      res.status(401).json("Email or Password is invalid Try again");
    }
  } catch (err) {
    res.status(422).json(err.message);
  }
}
async function updateUser(req, res) {
  var id = req.params.id;
  var data = req.body;
  try {
    var updatedUser = await userModel.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );
    res.status(201).json(updatedUser);
  } catch (err) {
    res.status(422).json(err.message);
  }
}
async function getAllUsers(req, res) {
  try {
    var allUsers = await userModel.find();
    res.status(201).json(allUsers);
  } catch (err) {
    res.status(422).json(err.message);
  }
}
async function getUserByID(req, res) {
  const id = req.params.id;
  try {
    var user = await userModel.findById(id);
    res.status(201).json(user);
  } catch (err) {
    res.status(422).json(err.message);
  }
}
async function deleteUser(req, res) {
  const id = req.params.id;
  try {
    var deletedUser = await userModel.findByIdAndDelete(id);
    res.status(201).json(deletedUser);
  } catch (err) {
    res.status(422).json(err.message);
  }
}
module.exports = {
  createUser,
  updateUser,
  getAllUsers,
  login,
  getUserByID,
  deleteUser,
};
