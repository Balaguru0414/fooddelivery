const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const foodModel = require("./models/foodModel");

dotenv.config();
const app = express();

const port = 2000;

app.use(express.json());
app.use(cors());

// connect database and server
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB Connect Successfully");
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

// **Adding Data**
// const newFood = new foodModel({
//   name: "shrimp scampi sauteed in butter and garlic",
//   price: 280,
//   image:
//     "https://as1.ftcdn.net/v2/jpg/06/92/95/24/1000_F_692952458_j1g7ha6RWU0QxMoTAQplr5pUA8geWMjg.jpg",
// });

// newFood
//   .save()
//   .then((food) => console.log("Food added successfully!", food))
//   .catch((err) => console.log("Error adding food", err));

// get data
app.get("/", (req, res) => {
  foodModel
    .find({})
    .then((foods) => res.json(foods))
    .catch((err) => res.json(err));
});
