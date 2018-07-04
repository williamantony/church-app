const User = require('./User.model');
const Person = require('../Person/Person.model');

const {
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
