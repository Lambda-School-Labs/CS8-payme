const mongoose = require('mongoose');
const mongooseTypes = require('mongoose-types');

mongooseTypes.loadTypes(mongoose, 'email');

const { Email } = mongoose.Schema.Types;

const Invoice = new mongoose.Schema({
  number: {
    type: String,
    required: true,
    unique: true,
  },
  pdf: Array,
  totalAmount: {
    type: String,
    required: true,
  },
  phone: {
    number: Number,
    frequency: String,
  },
  email: {
    address: Email,
    frequency: String,
  },
});

module.exports = mongoose.model('Invoice', Invoice);
