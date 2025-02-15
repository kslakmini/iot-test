module.exports = (email, name, message, mobile) => {
  return `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <title>New Client Contact Submission</title>
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
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Message from ${name}</h2>
    </div>
    
    <div class="content">
      <p><strong>Contact Details:</strong></p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      
      <p>Please review and follow up as necessary.</p>
    </div>

    <div class="footer">
      <p>Admin Notification - Contact Message</p>
    </div>
  </div>
</body>
</html>
  `;
};
