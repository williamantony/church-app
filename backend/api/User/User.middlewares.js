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

module.exports = {
  validateEmailAddress,
  validateUsername,
  validatePasswordStrength,
};
