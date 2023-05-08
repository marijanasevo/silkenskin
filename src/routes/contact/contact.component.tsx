import css from "./contact.module.css";

const Contact = () => {
  return (
    <div className={"page-container"}>
      <h1 className="page-heading">Contact Us</h1>

      <div className={css["contact-body-container"]}>
        <div className={css["contact-section"]}>
          <h3>CUSTOMER SERVICE</h3>
          <p>
            <a href="mailto:hello@silkenskin.com">hello@silkenskin.com</a>
          </p>
          <p>Monday - Friday</p>
          <p>9:00 AM - 5:00 PM Pacific Time</p>
        </div>

        <div className={css["contact-section"]}>
          <h3>PRESS</h3>
          <p>
            For press and other media requests, please email{" "}
            <a href="mailto:hello@silkenskin.com">hello@silkenskin.com</a>
          </p>
        </div>

        <div className={css["contact-section"]}>
          <h3>WHOLESALE</h3>
          <p>
            For wholesale inquiries, please email{" "}
            <a href="mailto:hello@silkenskin.com">hello@silkenskin.com</a>
          </p>
        </div>

        <div className={css["contact-section"]}>
          <h3>SILKEN SKIN CO. OFFICE PHONE</h3>
          <p>(123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
