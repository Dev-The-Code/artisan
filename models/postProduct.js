var mongoose = require('mongoose');
var config = require('../config/config');


var postProduct = new mongoose.Schema({

  product: { type: String },
  categories: { type: Array },
  quantity: { type: Number },
  price: { type: Object },
  salePrice: { type: Object },
  materialType: { type: String },
  description: { type: String },
  images: { type: Array },
  sizes: { type: Array },
  width: { type: String },
  widthUnit: { type: String },
  height: { type: String },
  heightUnit: { type: String },
  variationPrices: { type: Array },
  color: { type: Array },
  shopId: { type: String },
  shopName: { type: String },
  user_Id: { type: String },
  profileId: { type: String },
  objectId: { type: String },
  productSKU: { type: String },
  date: { type: String },
  time: { type: String },

});

mongoose.model('postProduct', postProduct);
