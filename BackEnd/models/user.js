const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const joi = require("joi");
const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      minLength: 3,
      maxLength: 50,
      required: true,
    },
    email: {
      type: String,
      minLength: 4,
      maxLength: 100,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin", "subAdmin"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", function (next) {
  const salt = bcrypt.genSaltSync(7);
  const hashedPassword = bcrypt.hashSync(this.password, salt);
  this.password = hashedPassword;
  next();
});
module.exports = mongoose.model("User", userSchema);
