import css from "./privacy-policy.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={"page-container"}>
      <h1 className={"page-heading"}>Privacy Policy</h1>

      <div className={css["body-container"]}>
        <p>
          Silken Skin Co. is committed to protecting the privacy of our
          customers. This privacy policy explains how we collect, use, and
          protect personal information.
        </p>

        <h2>INFORMATION WE COLLECT</h2>

        <p>
          Silken Skin Co. collects the following personal information from
          customers:
        </p>

        <ul>
          <li>Email address</li>
          <li>User name</li>
          <li>Order history</li>
          <li>Reviews</li>
        </ul>

        <p>
          We collect this information only for the purposes of providing
          customers with a user account where they can see their orders and
          reviews, and to show reviews to other users.
        </p>

        <h2>SHARING OF INFORMATION</h2>

        <p>
          Silken Skin Co. does not share personal information with any third
          parties, including advertisers or marketing companies.
        </p>

        <h2>PROTECTION OF INFORMATION</h2>

        <p>
          Silken Skin Co. takes the protection of customer information
          seriously. We use industry-standard security measures to protect
          against unauthorized access, alteration, disclosure, or destruction of
          personal information. Customer information is protected by their own
          password which is handled by Firebase Authentication.
        </p>

        <h2>COOKIES AND TRACKING</h2>

        <p>
          Silken Skin Co. does not use cookies or other tracking technologies on
          our website.
        </p>

        <h2>CHILDREN'S PRIVACY</h2>

        <p>
          Silken Skin Co. does not knowingly collect personal information from
          children under the age of 13. If we become aware that we have
          collected personal information from a child under the age of 13, we
          will delete it immediately.
        </p>

        <h2>CHANGES TO PRIVACY POLICY</h2>

        <p>
          Silken Skin Co. reserves the right to modify or update this privacy
          policy at any time without prior notice. We encourage you to check
          this page regularly for changes. Your continued use of our website and
          products after any changes to the privacy policy constitutes
          acceptance of the new policy.
        </p>

        <p>
          If you have any questions or concerns about this privacy policy,
          please contact us. Thank you for choosing Silken Skin Co. for your
          skincare needs.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
