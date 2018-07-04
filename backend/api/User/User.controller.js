const jwt = require('jsonwebtoken');
const User = require('./User.model');
const Person = require('../Person/Person.model');

const { SECRET } = process.env;
const {
  SUCCESS,
  CREATED,
} = require('../status.codes');

const registerUser = async (req, res) => {
  const {
    email,
    username,
    passwordHash,
    personId,
  } = req.body;
  try {
    const createdUser = await User.create({
      username,
      email,
      password: passwordHash,
      person: personId,
    });
    await Person.findByIdAndUpdate(personId, { user: createdUser._id });
    res.status(CREATED).json(createdUser);
  }catch(error) {
    console.log(error);
  }
};

const signinUser = async (req, res) => {
  const { _id } = req.user;
  try {
    const jwtPayload = {
      user: _id,
    };
    const jwtOptions = {
      expiresIn: '1 hour',
    };
    const token = await jwt.sign(jwtPayload, SECRET, jwtOptions);
    res.status(SUCCESS).json({ token });
  } catch(error) {
    console.log(error);
  }
};

const searchUser = (req, res) => {
  
};

const updateUser = async (req, res) => {
  
};

const deleteUser = (req, res) => {
// Never Delete Record

};

module.exports = {
  registerUser,
  signinUser,
  searchUser,
  updateUser,
  deleteUser,
};
