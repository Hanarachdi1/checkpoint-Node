var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rachdihana0@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'rachdihana0@gmail.com',
  to: 'bensalemabdelhafidh.go@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'HII!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});