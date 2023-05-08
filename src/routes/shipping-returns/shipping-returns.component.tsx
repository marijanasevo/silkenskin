import css from "./shipping-returns.module.css";

const ShippingReturns = () => {
  return (
    <div className={`page-container`}>
      <h1 className={`page-heading`}>Shipping + Returns</h1>

      <div className={css["shipping-returns-body"]}>
        <div className={css["section"]}>
          <h2>RETURNS</h2>
          <p>
            We understand there may be occasions where you order items in error.
            That is why we offer a 14 day return policy, so if for any reason
            you change your mind about your purchase, you can return it,{" "}
            <strong>
              unopened (including that little silver seal, perforated shrink
              band, and any sticker seal), in its original condition
            </strong>
            , within 30 days of the date you received it and receive a refund.{" "}
            <strong>
              The refund does not include the shipping charged of sending the
              item(s) to you, or return shipping costs
            </strong>
            . We recommend shipping your return with tracking to ensure it makes
            it back to us, otherwise we will not be able to issue a refund on
            your item(s).
          </p>
          <p>
            To make a return please get in touch with our support,{" "}
            <a href="mailto:hello@silkenskin.com">hello@silkenskin.com</a>. We
            will do our best to help you return items securely packaged with a
            copy of your packing slip to the following address:
          </p>
        </div>
        <div className={css["company-address"]}>
          <p>SILKEN SKIN CO</p>
          <p>1234 Park View Road</p>
          <p>Unit C-5678</p>
          <p>Los Angeles, CA 90001</p>
        </div>
        <div className={css["section"]}>
          <h2>SHIPPING + PROCESSING</h2>
          Standard Shipping - USPS or UPS Ground (2 to 5 Business Days once
          processed). Expedited Shipping - FedEx One Rate (2 Business Days once
          processed). Overnight Shipping - FedEx Overnight (1 Business Day once
          processed). Orders will be shipped the next business day. To request
          same day shipping, please email hello@silkenskin.com.
        </div>
        <div className={css["section"]}>
          <h2>INTERNATIONAL SHIPPING</h2>
          <p>
            Standard international shipping - 5-15 business days (FedEx Cross
            Border) once processed depending on destination.
          </p>
          <p>
            FedEx International Economy is 2-5 business days once processed
            depending on destination.
          </p>
          The goods will be imported on behalf of the consignee/buyer. The
          consignee authorizes Silken Skin Co. to import the goods on his/her
          behalf. Further, the consignee/buyer agrees Silken Skin Co. may
          delegate the obligation to import the goods on his/her behalf to a
          subcontractor (e.g. customs broker). The consignee will pay the taxes
          & duties in addition with the purchase price of the goods.
        </div>
      </div>
    </div>
  );
};

export default ShippingReturns;
