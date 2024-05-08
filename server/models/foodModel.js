const mongoose = require("mongoose");

const FoodScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const FoodModel = mongoose.model("foods", FoodScheme);

module.exports = FoodModel;
