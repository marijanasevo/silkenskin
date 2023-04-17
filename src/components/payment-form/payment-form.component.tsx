import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStripe, useElements } from "@stripe/react-stripe-js";

import {
  selectIsCartEmpty,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { setClearCart } from "../../store/cart/cart.reducer";
import { selectCurrentUser } from "../../store/user/user.selector";

import { CardElement } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import css from "./payment-form.module.css";

const PaymentForm = () => {
  const isCartEmpty = useSelector(selectIsCartEmpty);
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount * 100,
      }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret: clientSecret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      console.log("Error:", paymentResult.error.message);
    } else {
      console.log("Success:", paymentResult.paymentIntent.status);
      dispatch(setClearCart());
      // TODO: Thank you for your purchase page
    }
  };

  return (
    <form onSubmit={paymentHandler} className={css["payment-form-container"]}>
      <h1 className={css["payment-heading"]}>Credit Card Payment:</h1>

      <CardElement className={css["card-element"]} />
      <Button
        disabled={isProcessingPayment}
        buttonType={BUTTON_TYPE_CLASSES.basic}
      >
        Pay now
      </Button>

      <span className={css["test-card-data"]}>
        Test card: 4242 4242 4242 4242, <br />
        date ahead of time, any cvc & zip code
      </span>

      {isCartEmpty && <div className={css["overlay"]}></div>}
    </form>
  );
};

export default PaymentForm;
