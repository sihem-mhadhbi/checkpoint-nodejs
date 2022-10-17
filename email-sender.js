var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "*************",
    pass: "*************",
  },
});

var mailOptions = {
  from: "*************",
  to: "*************",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
  } else {
    console.log("Email sent: " + info.response);
  }
});
