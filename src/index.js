const path = require("path");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

async function mailer(from, to, template, data, user, pass) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  transporter.use(
    "compile",
    hbs({
      viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve(__dirname, "views"),
        defaultLayout: false,
      },
      viewPath: path.resolve(__dirname, "views"),
      extName: ".handlebars",
    })
  );

  const mailOptions = {
    from,
    to,
    subject: data.subject,
    template,
    context: data,
  };

  const { error, info } = await transporter.sendMail(mailOptions);

  if (error) {
    console.log({ message: error });
  } else {
    console.log({
      message: `Email sent: ${info.response}`,
    });
  }
}

module.exports = mailer;
