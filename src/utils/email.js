const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "tomasa.swaniawski65@ethereal.email",
    pass: "kKUUKHnzT3tMqn62HY",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function mail() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Car" <tomasa.swaniawski65@ethereal.email>', // sender address
    to: "kevinlmorataya@gmail.com", // list of receivers
    subject: "Hello", // Subject line
    text: "Prueba", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

export default mail;
