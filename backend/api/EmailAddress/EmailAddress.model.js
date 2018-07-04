const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const EmailAddress = new Schema({
  emailAddress: {
    type: String,
    required: true,
  },
});

const EmailAddressModel = mongoose.model('emailaddress', EmailAddress);

module.exports = EmailAddressModel;
