const { string, number } = require("joi");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: String,
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

module.exports = mongoose.model("Product", ProductaSchema);
