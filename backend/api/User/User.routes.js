/* User Routes */

const {
  registerUser,
  signinUser,
} = require('./User.controller');

const {
  checkEligibility,
  validateEmailAddress,
  validateUsername,
  validatePasswordStrength,
  hashPassword,
  verifyPassword,
  findUserByLoginId,
} = require('./User.middlewares');

module.exports = (server) => {
    
  server.route('/user')
    .post(
      checkEligibility,
      validateEmailAddress,
      validateUsername,
      validatePasswordStrength,
      hashPassword,
      registerUser,
    );

  server.route('/user/login')
    .post(
      findUserByLoginId,
      verifyPassword,
      signinUser,
    );

};
