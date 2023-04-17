const mongoose = require("mongoose");
const joi = require("joi");
const orderSchema = mongoose.Schema(
  {
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    adress: {
      region: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      streetName: {
        type: String,
        required: true,
        trim: true,
      },
    },
    total: {
      type: Number,
      required: true,
    },
    subTotal: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", orderSchema);
