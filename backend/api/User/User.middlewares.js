const bcrypt = require('bcrypt');

const User = require('./User.model');
const {
  SERVER_ERROR,
} = require('../status.codes');

const validateEmailAddress = async (req, res, next) => {
  const { email } = req.body;
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
  validateEmailAddress,
  validateUsername,
  validatePasswordStrength,
  hashPassword,
  findUserByLoginId,
  verifyPassword,
};
