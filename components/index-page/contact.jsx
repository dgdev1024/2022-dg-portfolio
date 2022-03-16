/**
 * @file components/index-page/contact.jsx
 */

import { useState } from "react";
import Axios from "axios";
import Styles from "./contact.module.css";

export default () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    subject: "",
    body: "",
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  const onFormSubmit = async (ev) => {
    ev.preventDefault();

    setResult({});
    setLoading(true);

    try {
      const res = await Axios.post("/api/send-mail", inputs);
      setInputs({
        firstName: "",
        lastName: "",
        emailAddress: "",
        subject: "",
        body: "",
        consent: false,
      });
      setResult({ success: "Your message has been sent." });
    } catch (err) {
      if (err.response) {
        console.error(err.response.data);
        setResult(err.response.data);
      } else {
        console.error(err);
        setResult({ error: "Something went wrong. Try again later." });
      }
    }

    setLoading(false);
  };

  return (
    <section className={`section ${Styles.contactSection}`} id="contact">
      <div className={`sectionContainer ${Styles.contactSectionContainer}`}>
        <div className={Styles.contactInstructions}>
          <h2 className={`heading ${Styles.contactHeading}`}>
            Let's Get In Touch
          </h2>
          <p className="text">
            Use the contact form to send me a message right from this page. The
            details, which you send to me <em>with your explicit consent</em>,
            may be used by me to reply to the message you send. Other than that,
            the information sent will not be used or stored in any way, shape or
            form.
            <br />
            <br />
            You may also send me an email at{" "}
            <a href="mailto:contact@dgdev1024.com">
              <strong>contact@dgdev1024.com</strong>
            </a>
            , or send me a direct message on my Facebook or Twitter page, if
            you'd so like.
          </p>
        </div>
        <form className={Styles.contactForm} onSubmit={onFormSubmit}>
          <div className={Styles.contactFormElement}>
            <input
              className={Styles.contactFormText}
              type="text"
              name="firstName"
              id="firstName"
              value={inputs.firstName}
              onChange={(ev) =>
                setInputs({ ...inputs, firstName: ev.target.value })
              }
            />
            <label className={Styles.contactFormLabel} htmlFor="firstName">
              First Name
            </label>
            {result?.validationErrors?.firstName && (
              <p className={Styles.contactFormError}>
                {result.validationErrors.firstName}
              </p>
            )}
          </div>
          <div className={Styles.contactFormElement}>
            <input
              className={Styles.contactFormText}
              type="text"
              name="lastName"
              id="lastName"
              value={inputs.lastName}
              onChange={(ev) =>
                setInputs({ ...inputs, lastName: ev.target.value })
              }
            />
            <label className={Styles.contactFormLabel} htmlFor="lastName">
              Last Name
            </label>
            {result?.validationErrors?.lastName && (
              <p className={Styles.contactFormError}>
                {result.validationErrors.lastName}
              </p>
            )}
          </div>
          <div className={Styles.contactFormElement}>
            <input
              className={Styles.contactFormText}
              type="email"
              name="emailAddress"
              id="emailAddress"
              value={inputs.emailAddress}
              onChange={(ev) =>
                setInputs({ ...inputs, emailAddress: ev.target.value })
              }
            />
            <label className={Styles.contactFormLabel} htmlFor="emailAddress">
              Email Address
            </label>
            {result?.validationErrors?.emailAddress && (
              <p className={Styles.contactFormError}>
                {result.validationErrors.emailAddress}
              </p>
            )}
          </div>
          <div className={Styles.contactFormElement}>
            <input
              className={Styles.contactFormText}
              type="text"
              name="subject"
              id="subject"
              value={inputs.subject}
              onChange={(ev) =>
                setInputs({ ...inputs, subject: ev.target.value })
              }
            />
            <label className={Styles.contactFormLabel} htmlFor="subject">
              Message Subject (
              {inputs.subject.length < 5
                ? `${inputs.subject.length} < 5`
                : `${inputs.subject.length} / 100`}
              )
            </label>
            {result?.validationErrors?.subject && (
              <p className={Styles.contactFormError}>
                {result.validationErrors.subject}
              </p>
            )}
          </div>
          <div
            className={`${Styles.contactFormElement} ${Styles.contactFormTextAreaElement}`}
          >
            <textarea
              className={`${Styles.contactFormText} ${Styles.contactFormTextArea}`}
              name="body"
              id="body"
              value={inputs.body}
              onChange={(ev) => setInputs({ ...inputs, body: ev.target.value })}
            ></textarea>
            <label className={Styles.contactFormLabel} htmlFor="body">
              Message Body ({`${inputs.body.length} / 500`})
            </label>
            {result?.validationErrors?.body && (
              <p className={Styles.contactFormError}>
                {result.validationErrors.body}
              </p>
            )}
          </div>

          <div
            className={`${Styles.contactFormElement} ${Styles.contactFormCheckboxElement}`}
          >
            <input
              className={Styles.contactFormCheckbox}
              name="consent"
              id="consent"
              type="checkbox"
              checked={inputs.consent}
              onChange={(ev) =>
                setInputs({ ...inputs, consent: ev.target.checked })
              }
            />
            <label className={Styles.contactFormLabel} htmlFor="consent">
              I understand that my full name and email address will be shown in
              the email sent to Dennis Griffin from this contact form. I also
              understand that this information may be used in replies to any
              emails sent from this form. By checking this checkbox, I hereby
              give explicit consent to both events.
            </label>
          </div>
          <button
            disabled={inputs.consent === false || loading === true}
            className={`button ${Styles.contactFormButton}`}
            type="submit"
          >
            {inputs.consent === true
              ? loading === true
                ? "Sending Message..."
                : "Send Message"
              : "Please Proivde Consent"}
          </button>
          {result?.error && <p className={Styles.formError}>{result.error}</p>}
          {result?.success && (
            <p className="text textCenter textItalic">{result.success}</p>
          )}
        </form>
      </div>
    </section>
  );
};
