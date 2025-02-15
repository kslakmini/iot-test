module.exports = (email, name,message, mobile ) => {
  return `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <title>Contact Us Success</title>
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      background-color: #f9f9f9;
      font-family: 'Cabin', sans-serif;
    }
    table, td {
      color: #000000;
      border-collapse: collapse;
    }
    a {
      color: #6d9f1c;
      text-decoration: underline;
    }
    .container {
      max-width: 60%;
      width: 100%;
      margin: 0 auto;
      background-color: #ffffff;
    }
    @media (max-width: 620px) {
      .container {
        max-width: 95% !important;
      }
    }
    .content {
      padding: 20px;
      line-height: 160%;
      color: #000;
    }
    .header, .footer {
      background-color: #6d9f1c;
      color: #ffffff;
      text-align: center;
      padding: 15px;
    }
    .button {
      display: inline-block;
      padding: 14px 20px;
      background-color: #4CAF50;
      color: #ffffff;
      text-decoration: none;
      border-radius: 5px;
      font-size: 16px;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <h2>Thank You for Contacting Us!</h2>
    </div>
    
    <div class="content">
      <p>Hi ${name},</p>
      <p>Thank you for reaching out! We have received your message and will get back to you soon.</p>
      
      <p><strong>Details:</strong></p>
      <p>Email: ${email}</p>
      <p>Mobile: ${mobile}</p>
      <p>Message: ${message}</p>
      
      <p>If you need immediate assistance, feel free to reach out to our support team.</p>
    </div>

    <div class="footer">
      <p>Kind Regards,<br>Customer Support Team</p>
    </div>
  </div>
</body>
</html>
  `;
};
