import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useStripe, useElements } from "@stripe/react-stripe-js";

import {
  addUserOrder,
  getUserOrderHistory,
} from "../../utils/firebase/firebase.utils";

import { setClearCart } from "../../store/cart/cart.reducer";
import {
  selectIsCartEmpty,
  selectCartTotal,
  selectCartItems,
} from "../../store/cart/cart.selector";
import { setPurchases } from "../../store/user/user.reducer";
import {
  selectCurrentUser,
  selectIsUserLoggedIn,
} from "../../store/user/user.selector";

import Snackbar from "@mui/material/Snackbar";
import { CardElement } from "@stripe/react-stripe-js";
import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import css from "./payment-form.module.css";
import { useNavigate } from "react-router-dom";
import { navigateTo } from "../../utils/helpers/navigate";

const PaymentForm = () => {
  const navigate = useNavigate();
  const handleNavigate = navigateTo(navigate);
  const dispatch = useDispatch();
  const isCartEmpty = useSelector(selectIsCartEmpty);
  const currentUser = useSelector(selectCurrentUser);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const cartItems = useSelector(selectCartItems);
  const amount = useSelector(selectCartTotal);
  const [logInNote, setLogInNote] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const storeUsersOrderInfo = async () => {
    if (currentUser) {
      const order = {
        userEmail: currentUser.email,
        total: +Math.trunc(amount),
        uid: currentUser.uid,
        id: "placeholder",
        createdAt: new Date().getTime(),
        products: cartItems.map((product) => ({
          id: product.id,
          brand: product.brand,
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          thumbnail: product.thumbnailUrl,
        })),
      };

      await addUserOrder(order);
      const purchases = await getUserOrderHistory(currentUser.uid);
      const purchasesSorted = purchases.sort(
        (orderA, orderB) => orderB.createdAt - orderA.createdAt
      );
      dispatch(setPurchases(purchasesSorted));
      console.log("order saved");
    }
  };

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
        amount: Math.trunc(amount * 100),
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

      storeUsersOrderInfo();
      dispatch(setClearCart());
      handleNavigate("/order-made");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setLogInNote(!isUserLoggedIn), 1000);

    return () => clearTimeout(timer);
  }, [isUserLoggedIn]);

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
        message="Log in before purchasing to view this order in your order history later"
        sx={{
          "& .MuiPaper-root": {
            fontSize: "1.6rem",
            background: "var(--soft-accent-color)",
            color: "black",
            textAlign: "center",
            textTransform: "uppercase",
          },
        }}
      />
    </>
  );
};

export default PaymentForm;
