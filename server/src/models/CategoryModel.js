const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: String,
  description: String,
  expenses: {
    
  }
});

const categoryModel = mongoose.model("Category", categorySchema);
module.exports = categoryModel;
