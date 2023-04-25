import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStripe, useElements } from "@stripe/react-stripe-js";

import {
  selectIsCartEmpty,
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart.selector";
import { setClearCart } from "../../store/cart/cart.reducer";
import {
  selectCurrentUser,
  selectIsUserLoggedIn,
} from "../../store/user/user.selector";

import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { CardElement } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import css from "./payment-form.module.css";
import { addUserOrder } from "../../utils/firebase/firebase.utils";

const PaymentForm = () => {
  const isCartEmpty = useSelector(selectIsCartEmpty);
  const currentUser = useSelector(selectCurrentUser);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const cartItems = useSelector(selectCartItems);
  const amount = useSelector(selectCartTotal);
  const [logInNote, setLogInNote] = useState(!isUserLoggedIn);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  console.log(cartItems);
  if (currentUser) {
    const order = {
      userEmail: currentUser.email,
      total: amount,
      products: cartItems.map((product) => ({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        quantity: product.quantity,
        thumbnail: product.thumbnailUrl,
      })),
    };

    console.log("order", order);
  }

  const paymentHandler = async (e: React.FormEvent<HTMLFormElement>) => {
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

    const cardDetails = elements.getElement(CardElement);
    if (!cardDetails) return;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardDetails,
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
      // TODO: here i can create object with info and send a request to firebase

      if (currentUser) {
        const order = {
          userEmail: currentUser.email,
          total: amount,
          products: cartItems.map((product) => ({
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            quantity: product.quantity,
            thumbnail: product.thumbnailUrl,
          })),
        };

        await addUserOrder(order);
        console.log("order completed");
      }

      dispatch(setClearCart());
      // TODO: Thank you for your purchase page
    }
  };

  const handleClose = () => setLogInNote(false);

  return (
    <>
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
      <Snackbar
        open={logInNote}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        message="Log in before purchasing to view this order in your history later!"
        sx={{
          "& .MuiPaper-root": {
            fontSize: "1.6rem",
            background: "white",
            color: "var(--strong-accent-color)",
            justifyContent: "center",
          },
        }}
      />
    </>
  );
};

export default PaymentForm;
