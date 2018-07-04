const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const Address = new Schema({
  type: {
    type: String,
    default: 'residential',
  },
  streetAddress: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  country: {
    type: String,
    default: 'United States',
  },
});

const AddressModel = mongoose.model('address', Address);

module.exports = AddressModel;
