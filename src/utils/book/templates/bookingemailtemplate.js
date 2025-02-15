module.exports = (
  metaId,
  customerId,
  formattedBatchNumber,
  totalWeight,
  containerNumber,
  vehicleNumber,
  newDate,
  firstName,
  lastName,
  customerAddress,
  phoneNumber
) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Customer Invoice</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
        color: #000;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      .header {
        text-align: center;
        margin-bottom: 10px;
        background-color: #395A7F;
        padding:30px;
      }
      .header h1 {
        margin: 0;
        color: #ffffff;
      }
      .header p{
        color: #ffffff;
        font-weight:bold;
      }
      .details {
        margin-bottom: 20px;
      }
      .details p {
        margin: 5px 0;
      }
      .details span {
        font-weight: bold;
      }
      .table-container {
        margin-top: 20px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 10px;
      }
      table th, table td {
        border: 1px solid #ddd;
        padding: 10px;
        text-align: left;
      }
      table th {
        background-color: #f5f5f5;
      }
      .footer {
        background-color: #395A7F;
        padding:40px;
        text-align: center;
        margin-top: 10px;
      }
      .footer h2{
        margin-bottom: 20px;
        color: #ffffff;
      }
      .footer p{
        color: #ffffff;
        font-weight:bold;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img align="center" border="0" src="cid:image4" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 26%;max-width: 150.8px;" width="150.8"/>
        <h1>Joash Cold Storage Services</h1>
        <p>BR Reg No: WCO/02152</p>
      </div>
      <div class="details">
        <p><span>Customer Name:</span> ${firstName} ${lastName}</p>
        <p><span>Address:</span> ${customerAddress}</p>
        <p><span>Phone Number:</span> ${phoneNumber}</p>
      </div>
      <div class="table-container">
        <h2>Invoice Details</h2>
        <table>
          <tr>
            <th>Batch Number</th>
            <th>${formattedBatchNumber}</th>
          </tr>
          <tr>
            <td>Invoice Date</td>
            <td>${newDate}</td>
          </tr>
          <tr>
            <td>Container Number</td>
            <td>${containerNumber}</td>
          </tr>
          <tr>
            <td>Vehicle Number</td>
            <td>${vehicleNumber}</td>
          </tr>
          <tr>
            <td>Total Weight</td>
            <td>${totalWeight} Kg</td>
          </tr>
        </table>
      </div>
      <div class="footer">
        <h2>Get in touch</h2>
        <p>© 2024 All Rights Reserved.</p>
        <p>Designed and Developed by Ollcode.</p>
      </div>
    </div>
  </body>
  </html>
  `;
};
