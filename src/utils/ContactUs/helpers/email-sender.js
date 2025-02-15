const nodemailer = require("nodemailer");
const contactUsFormTemplate = require("../templates/contactFormClient");
const apsariContactFormClient = require("../templates/apsariContactFormClient");
const apsariContactForm = require("../templates/apsariContactForm");
const emailsignuptemplate = require("../templates/emailsignuptemplate");
const forgotpasswordForm = require("../templates/forgotpassword");

const smtpTransportContact = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "testhr716@gmail.com",
    pass: "nmpiccukqkotkfgy",
  },
});

const contactFormClient = async (email, firstName, companyName, regNo) => {
  const mailOptions = {
    from: `"HR System" <cchathurangiwijemanna@gmail.com>`,
    to: email,
    firstName,
    companyName,
    regNo,
    subject: "Thank you for reaching out!",
    html: contactUsFormTemplate(email, firstName, companyName, regNo),
  };

  return smtpTransportContact.sendMail(mailOptions);
};
const apsariContactFormApsari = async (email, name, message, mobile) => {
  const mailOptions = {
    from: email,
    to: `"Apsari" <apsaritillakaratne@gmail.com>`,
    name,
    message,
    mobile,
    subject: "Thank you for reaching out!",
    html: apsariContactForm(email, name, message, mobile),
  };

  return smtpTransportContact.sendMail(mailOptions);
};

const apsariContactsFormClient = async (email, name, message, mobile) => {
  const mailOptions = {
    from: `"Apsari" <apsaritillakaratne@gmail.com>`,
    to: email,
    name,
    message,
    mobile,
    subject: "Thank you for reaching out!",
    html: apsariContactFormClient(email, name, message, mobile),
  };

  return smtpTransportContact.sendMail(mailOptions);
};

const emailsignup = async (
  inviteEmail,
  companyID,
  isEmployee,
  firstName,
  lastName,
  companyName,
  regNo,
  role,
  userId
) => {
  const mailOptions = {
    from: "HR System <chathurangiw98@gmail.com>",
    to: inviteEmail,
    subject: "Welcome to HR SYSTEM",
    html: emailsignuptemplate(
      inviteEmail,
      companyID,
      isEmployee,
      firstName,
      lastName,
      companyName,
      regNo,
      role,
      userId
    ),
  };

  return smtpTransportContact.sendMail(mailOptions);
};

const forgotpasswordform = async (email) => {
  const mailOptions = {
    from: `"Admin" <chathurangiw98@gmail.com>`,
    to: email,
    subject: "Password Reset",
    html: forgotpasswordForm(email),
  };
  return smtpTransportContact.sendMail(mailOptions);
};

module.exports = {
  contactFormClient,
  emailsignup,
  forgotpasswordform,
  apsariContactsFormClient,
  apsariContactFormApsari,
};
