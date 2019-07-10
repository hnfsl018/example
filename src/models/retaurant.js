const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
    name: String,
    address: String
  },{
      timestamps: true
  });
 
const Restaurant = mongoose.model('Restaurant', RestaurantSchema);  

module.exports = Restaurant
