const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const Person = new Schema({
  isMember: {
    type: Boolean,
    default: false,
  },

  user: {
    type: Schema.ObjectId,
    ref: 'user',
  },
  
  prefix: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  otherName: {
    type: String,
  },

  emailAddress: [{
    type: Schema.ObjectId,
    ref: 'emailaddress',
  }],
  phone: [{
    type: Schema.ObjectId,
    ref: 'phonenumber',
  }],
  address: [{
    type: Schema.ObjectId,
    ref: 'address',
  }],
});

const PersonModel = mongoose.model('person', Person);

module.exports = PersonModel;
