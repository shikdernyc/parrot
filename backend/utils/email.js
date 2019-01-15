const nodemailer = require('nodemailer');

const transport = null;

if (process.env.NODE_ENV === 'production') {
  if (process.env.EMAIL_USERNAME === undefined || process.env.EMAIL_PASSWORD === undefined) {
    throw new Error('EMAIL_USERNAME and EMAIL_PASSWORD have to be added in the environment variables');
  } else {
    const transport = nodemailer.createTransport('SMTP', {
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    transport.verify(function (error, success) {
      if (error) {
        console.error(error);
      } else {
        console.log('Server is ready to take our messages');
      }
    });
  }
}

module.exports = transport;
