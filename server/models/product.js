const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2')
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
  model: {
    required: [true, 'You need to provide a guitar model'],
    type: String,
    unique: 1,
    maxlength: 100
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'Brand',
    required: true
  },
  frets: {
    required: true,
    type: Number
  },
  woodtype: {
    type: String,
    required: true
  },
  description: {
    required: [true, 'You need to provide a description'],
    type: String,
    maxlength: 500
  },
  price: {
    required: true,
    type: Number,
    maxlength: 255
  },
  available: {
    required: [true, 'Items in stock'],
    type: Number,
    maxlength: 500,
    default: 0
  },
  itemSold: {
    required: true,
    type: Number,
    maxlength: 255,
    default: 0
  },
  shipping: {
    type: Boolean,
    required: [true, 'Free shipping available?'],
    default: false
  },
  images: {
    type: Array,
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  }
});

productSchema.plugin(aggregatePaginate);

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }