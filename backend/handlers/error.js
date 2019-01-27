/**
 * Simple error handler
 * @returns - the error message specified in next(error.message) and next(error.status)
 */
const email = require('../utils/email');

function errorHandler (error, request, response, next) {
  console.error(error);
  if (error.status === undefined) {
    // production send email
    if (process.env.NODE_ENV === 'production') {
      let mailOptions = {
        from: process.env.ADMIN_EMAIL,
        to: process.env.ADMIN_EMAIL,
        subject: 'error',
        text: error.stack
      };
      email.sendMail(mailOptions, error => {
        console.error(error);
      });
    }
    return response.status(500).json({
      message: 'Something is wrong!'
    });
  }
  return response.status(error.status).json({
    message: error.message
  });
}

module.exports = errorHandler;
