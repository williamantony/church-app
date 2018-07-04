const mongoose = require('mongoose');

const {
  Schema,
} = mongoose;

const User = new Schema({
  email: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  person: {
    type: Schema.ObjectId,
    ref: 'person',
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
  isEditorI: {
    type: Boolean,
    default: false,
  },
  isEditorII: {
    type: Boolean,
    default: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model('user', User);

module.exports = UserModel;
