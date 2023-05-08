import css from "./terms-of-service.module.css";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className={"page-container"}>
      <h1 className={"page-heading"}>Terms Of Service</h1>

      <div className={css["body-container"]}>
        <p>
          Welcome to Silken Skin Co. Please read these terms of service
          carefully before using our website or making a purchase. By using our
          website, you agree to be bound by these terms and conditions.
        </p>

        <h2>PRODUCT INFORMATION</h2>

        <p>
          Silken Skin Co. sells organic and natural skincare products. We take
          great care to provide accurate product descriptions and images, but we
          cannot guarantee that colors or textures will match what you see on
          your computer screen. If you have any questions or concerns about a
          product, please contact us before making a purchase.
        </p>

        <h2>SHIPPING AND RETURNS</h2>

        <p>
          Silken Skin Co. offers free shipping on all orders. If you are not
          satisfied with a product, you may return it within 30 days for a full
          refund. Please <Link to={"/contact-us"}>contact us</Link> at to
          initiate a return. We will refund your payment to the same bank
          account you used to make the purchase.
        </p>

        <h2>PRIVACY POLICY</h2>

        <p>
          We collect personal information, such as email address, username, and
          order history, only for the purposes of providing you with a user
          account where you can see your orders and reviews, and to show reviews
          to other users. We will never share your personal information with
          third parties without your consent. Please see our{" "}
          <Link to={"/privacy-policy"}>privacy policy</Link> for more
          information.
        </p>

        <h2>WEBSITE USE</h2>

        <p>
          You agree to use our website and social media accounts only for lawful
          purposes and in a manner that does not infringe the rights of others.
          You agree to respect the intellectual property rights of Silken Skin
          Co. and other users of the website. You may not use our website or
          social media accounts to harass, defame, or discriminate against
          anyone.
        </p>

        <h2>LIMITATION OF LIABILITY</h2>

        <p>
          Silken Skin Co. is not liable for any damages, including but not
          limited to direct, indirect, incidental, consequential, or punitive
          damages, arising from the use or inability to use our products or
          website. We make no warranties or guarantees about the effectiveness
          or safety of our products, and we do not guarantee that our website
          will be uninterrupted or error-free.
        </p>

        <h2>CHANGES TO TERMS OF SERVICE</h2>

        <p>
          Silken Skin Co. reserves the right to modify or update these terms of
          service at any time without prior notice. We encourage you to check
          this page regularly for changes. Your continued use of our website and
          products after any changes to the terms of service constitutes
          acceptance of the new terms.
        </p>

        <h2>GOVERNING LAW</h2>

        <p>
          These terms of service are governed by the laws of USA. Any disputes
          arising from or related to the use of our website or products shall be
          resolved in the courts of USA.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
