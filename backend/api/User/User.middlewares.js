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

module.exports = {
  validateEmailAddress,
};
