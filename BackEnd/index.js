const express = require("express");
const mongoose = require("mongoose");
const usersRoutes = require("./routes/users");
const categoryRoutes = require("./routes/category");
const subCategoryRoutes = require("./routes/subCategory");
const productsRoutes = require("./routes/products");
const app = express();
const PORT = 3333;
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/BOB-Cat", () => {
  console.log("MongoDB Connected Successfuly>>>>");
});


app.use("/uploads", express.static("uploads"));

app.use("/user", usersRoutes);
app.use("/category", categoryRoutes);
app.use("/subcategory", subCategoryRoutes);
app.use("/products", productsRoutes);
app.use("*", (req, res) => {
  res.status(404).json("Page Not Found");
});

// Error Handling Middleware
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log("Server Running Successfully.....");
});
