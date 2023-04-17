const mongoose = require("mongoose");
const favSchema = mongoose.Schema({
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    }
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
},{ timestamps: true });
module.exports = mongoose.model("Favorite", favSchema);
