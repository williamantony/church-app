const bcrypt = require('bcrypt');
const User = require('./User.model');
const Person = require('../Person/Person.model');

const {
  UNAUTHORIZED,
  USER_ERROR,
  SERVER_ERROR,
} = require('../status.codes');

const checkEligibility = async (req, res, next) => {
  const { personId } = req.body;
  
  const foundPersonId = await Person.findById(personId || 0);
  
  if (!foundPersonId) {
    res.status(SERVER_ERROR) .json({
      error: 'You are not eligible to create account, please contact Technical Department',
    });
    return;
  }

  next();
};

const validateEmailAddress = async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    res.status(SERVER_ERROR) .json({
      error: 'Email address is required, but not found in your request.',
    });
    return;
  }

  const foundEmail = await User.findOne({ email });

  if (foundEmail) {
    res.status(SERVER_ERROR) .json({
      error: 'Email address already exists',
    });
    return;
  }
  
  next();
};

const validateUsername = (req, res, next) => {
  const { username } = req.body;

  if (!username) {
    res.status(SERVER_ERROR) .json({
      error: 'Username is required, but not found in your request.',
    });
    return;
  }

  if (username.length < 6) {
    res.status(USER_ERROR).json({
      error: 'Username should have alteast 6 characters',
    });
    return;
  }

  next();
};

const validatePasswordStrength = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    res.status(SERVER_ERROR) .json({
      error: 'Password is required, but not found in your request.',
    });
    return;
  }

  if (password.length < 8) {
    res.status(USER_ERROR).json({
      error: 'Password should have alteast 6 characters',
    });
    return;
  }

  if (!new RegExp(/\d/g).test(password)) {
    res.status(USER_ERROR).json({
      error: 'Password should contain number(s)',
    });
    return;
  }

  next();
};

const hashPassword = async (req, res, next) => {
  const { password } = req.body;
  try {
    req.body.passwordHash = await bcrypt.hash(password, 10);
    next();
  }
  catch(error) {
    res.status(SERVER_ERROR).json({
      error: 'Error hashing password, please try another one',
    });
  }
};

const findUserByLoginId = async (req, res, next) => {
  const { loginId } = req.body;
  const matchedUser = await User.findOne({
    $or: [
      { username: loginId },
      { email: loginId },
    ],
  });

  if (!matchedUser) {
    res.status(UNAUTHORIZED).json({
      error: 'Invalid login credentials',
    });
    return;
  }
  
  req.user = matchedUser;
  next();
};

const verifyPassword = async (req, res, next) => {
  const { user } = req;
  const { password } = req.body;
  const passwordMatched = await bcrypt.compare(password, user.password);

  if (!passwordMatched) {
    res.status(UNAUTHORIZED).json({
      error: 'Invalid login credentials',
    });
    return;
  }
  
  next();
};

module.exports = {
  checkEligibility,
  validateEmailAddress,
  validateUsername,
  validatePasswordStrength,
  hashPassword,
  findUserByLoginId,
  verifyPassword,
};
