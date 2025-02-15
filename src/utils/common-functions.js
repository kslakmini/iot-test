/* eslint-disable camelcase */
const sgMail = require('@sendgrid/mail');
// const moment = require('moment1');
const axios = require('axios');
const nodemailer = require('nodemailer');
// const Banner = require('../models/Banner');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = (to, templateId, dynamicTemplateData, cc) =>
  new Promise((resolve, reject) => {
    try {
      const msg = {
        to,
        from: {
          name: 'Enuri Information Systems',
          email: 'pathumsimpson@gmail.com',
        },
        templateId,
        dynamicTemplateData,
        cc,
        hideWarnings: true,
      };

      sgMail
        .send(msg)
        .then((results) => resolve(results))
        .catch((err) => reject(err));
      resolve();
    } catch (error) {
      reject(error);
    }
  });

const slackWebhook = async ({ slackApiUrl, reportData }) => {
  try {
    await axios.post(slackApiUrl, reportData);
  } catch (error) {
    throw error;
  }
};

const joiErrorFormatter = (RawErrors) => {
  const errors = {};
  const Details = RawErrors.details;
  /* eslint-disable array-callback-return */
  Details.map((detail) => {
    errors[detail.path] = [detail.message];
  });
  /* eslint-enable array-callback-return */
  return errors;
};

const validateInput = (schema, data) => {
  const validInput = schema(data, { abortEarly: false });

  if (validInput.error) {
    return joiErrorFormatter(validInput.error);
  }
  return validInput;
};
const senderEmail = process.env.SENDER_EMAIL;
const senderPassword = process.env.APPLICATION_PASSWORD;

const sendEmail = ({ recipient_email, OTP }) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
    });

    const mail_configs = {
      from: senderEmail,
      to: recipient_email,
      subject: 'Mr Traveller',
      html: 'Test Email Sending',
    };
    transporter.sendMail(mail_configs, function (error, info) {
      if (error) {
        return reject({ message: `An error has occured` });
      }
      return resolve({ message: 'Email sent succesfuly' });
    });
  });
};

module.exports = { sendMail, validateInput, slackWebhook, sendEmail };
