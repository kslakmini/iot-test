const nodemailer = require("nodemailer");

const bookingemailtemplate = require("../templates/bookingemailtemplate");

// Configure nodemailer transport with Gmail
const smtpTransportContact = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "prameshafern@gmail.com",
    pass: "iwqhffpsueerkpyt",
  },
});

const bookingemail = async (
  metaId,
  customerId,
  formattedBatchNumber,
  totalWeight,
  containerNumber,
  vehicaleNumber,
  newdate,
  email,
  firstName,
  lastName,
  customerAddress,
  phoneNumber
) => {
  const mailOptions = {
    from: "Placedrisk <prameshasandeepani4@gmail.com>",
    to: email,
    subject: "Stocke added",
    html: bookingemailtemplate(
      metaId,
      customerId,
      formattedBatchNumber,
      totalWeight,
      containerNumber,
      vehicaleNumber,
      newdate,
      firstName,
      lastName,
      customerAddress,
      phoneNumber
    ),
    attachments: [
      {
        filename: "image-4.png",
        path: "https://firebasestorage.googleapis.com/v0/b/image-upload-6851d.appspot.com/o/files%2Flogo.pngMon%20Dec%2009%202024%2009%3A24%3A50%20GMT%2B0530%20(India%20Standard%20Time)?alt=media&token=01b1d0e3-546c-441c-bcf3-82af1e4dad7d",
        cid: "image4",
      },
    ],
  };

  return smtpTransportContact.sendMail(mailOptions);
};

module.exports = {
  bookingemail,
};
