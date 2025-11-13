import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  mobile: String,
  company: String,
  color: String,
  price: String,
});

export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

// Product in string is the collection name in MongoDB i.e is called table.