# mailer

This is a Node.js module that exports a function named `mailer`. 

The function relies on several packages:

- `path`: a built-in Node.js package that allows the module to resolve file paths.
- `nodemailer`: a package that enables email functionality.
- `nodemailer-express-handlebars`: a package that allows for the use of Handlebars templates within emails.

The `mailer` function takes in several parameters:

- `from`: the email address of the sender.
- `to`: the email address of the recipient.
- `template`: the name of the Handlebars template that should be used when constructing the email.
- `data`: an object containing the context data that should be used when rendering the Handlebars template.
- `user`: the username for the email account from which the email should be sent.
- `pass`: the password for the email account from which the email should be sent.

The `mailer` function creates a `nodemailer` `Transport` object using the `gmail` service and the provided `user` and `pass`. It then uses the `nodemailer-express-handlebars` package to configure the `Transport` object to use Handlebars templates. 

The function constructs a `mailOptions` object that contains information about the email, including the sender, recipient, subject, and the Handlebars template and context data that should be used. Finally, it calls the `sendMail` method on the `Transport` object with the `mailOptions` object as a parameter. If the email is successfully sent, it logs a message indicating this. If there is an error sending the email, it logs an error message.