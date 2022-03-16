const sanitizeHtml = require("sanitize-html");
const sendgrid = require("@sendgrid/mail");
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
const numbersRegex = /[0-9]/;
const symbolsRegex = /[$-/:-?{-~!"^_`\[\]]/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const safeHtmlConfig = {
  allowedTags: ["b", "i"],
  allowedAttributes: {},
};

const noHtmlConfig = {
  allowedTags: [],
  allowedAttributes: {},
};

const validateName = (first, last) => {
  const errors = {};

  if (typeof first !== "string" || first === "") {
    errors.firstName = "Please enter your first name.";
  } else if (numbersRegex.test(first) === true) {
    errors.firstName = "Your first name cannot contain numbers.";
  } else if (symbolsRegex.test(first) === true) {
    errors.firstName = "Your first name cannot contain symbols.";
  }

  if (typeof last !== "string" || last === "") {
    errors.lastName = "Please enter your last name.";
  } else if (numbersRegex.test(last) === true) {
    errors.lastName = "Your last name cannot contain numbers.";
  } else if (symbolsRegex.test(last) === true) {
    errors.lastName = "Your last name cannot contain symbols.";
  }

  return errors;
};

const validateEmail = (email) => {
  const errors = {};

  if (typeof email !== "string" || email === "") {
    errors.emailAddress = "Please enter your email address.";
  } else if (emailRegex.test(email) === false) {
    errors.emailAddress = "Please enter a valid email address.";
  }

  return errors;
};

const validateSubject = (subject) => {
  const errors = {};
  const min = 5,
    max = 100;

  if (typeof subject !== "string" || subject === "") {
    errors.subject = "Please enter an email subject.";
  } else if (subject.length < min || subject.length > max) {
    errors.subject = `Your email subject must be between ${min} and ${max} characters in length.`;
  }

  return errors;
};

const validateBody = (body) => {
  const errors = {};
  const max = 500;

  if (typeof body !== "string" || body === "") {
    errors.body = "Please enter an email body.";
  } else if (body.length > max) {
    errors.body = `Your email body cannot contain more than ${max} characters.`;
  }

  return errors;
};

const validateConsent = (consent) => {
  const errors = {};
  if (typeof consent !== "boolean" || consent === false) {
    errors.consent =
      "You need to provide consent to use your name and email address.";
  }
  return errors;
};

module.exports = (req, res) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "This method is not allowed.", validationErrors: [] });
  }

  let { firstName, lastName, emailAddress, subject, body, consent } = req.body;
  const validationErrors = {
    ...validateName(firstName, lastName),
    ...validateEmail(emailAddress),
    ...validateSubject(subject),
    ...validateBody(body),
    ...validateConsent(consent),
  };
  if (Object.keys(validationErrors).length > 0) {
    return res.status(400).json({
      error: "There were issues validating your inputs.",
      validationErrors,
    });
  }

  // Format the first and last names.
  firstName =
    firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

  // Strip out all HTML from the email subject, and most HTML from the body.
  subject = sanitizeHtml(subject, noHtmlConfig);
  body = sanitizeHtml(body, safeHtmlConfig);

  // Email Template
  const template = `
    <div style="background-color: hsl(0, 0%, 90%);">
      <h1 style="width: 100%; padding: 8px; box-sizing: border-box; color: white; background-color: hsl(212, 100%, 10%);">
        Dennis Griffin's Portfolio
      </h1>
      <p style="padding: 8px; box-sizing: border-box;">
        You have a new contact email!<br /><br />
        Name: ${firstName} ${lastName}<br />
        Email Address: ${emailAddress}<br />
        Subject: ${subject}<br /><br />
        ${body}
      </p>
    </div>
  `;

  // Send the email.
  sendgrid
    .send({
      from: `Dennis Griffin's Portfolio <${process.env.EMAIL_SENDER}>`,
      to: `Dennis Griffin <${process.env.EMAIL_RECEIVER}>`,
      subject: `New Contact Email From: ${firstName} ${lastName}`,
      html: template,
    })
    .then((ctx) => {
      console.log(ctx);
      res.status(202).json({ message: "Your message has been sent." });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: "Something went wrong. Try again later.",
        validationErrors: [],
      });
    });
};
