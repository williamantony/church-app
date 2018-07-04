const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const PhoneNumber = new Schema({
  countryCode: {
    type: String,
    default: '+1',
  },
  number: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'residential',
  },
  carrier: {
    type: String,
    default: 'unknown',
  },
});

const PhoneNumberModel = mongoose.model('phonenumber', PhoneNumber);

module.exports = PhoneNumberModel;
