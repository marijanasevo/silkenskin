import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createReview, Product } from "../../utils/firebase/firebase.utils";
import {
  selectCurrentUser,
  selectIsUserLoggedIn,
} from "../../store/user/user.selector";
import { fetchReviewsAsync } from "../../store/review/review.reducer";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/base/FormControl";
import { Rating, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { AppDispatch } from "../../store/store";
import css from "./product-review-form.module.css";

type ReviewFieldsState = {
  rating: number | null;
  feedback: string;
  name: string;
};

const defaultReviewFields: ReviewFieldsState = {
  rating: 0,
  feedback: "",
  name: "",
};

const ProductReviewForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectCurrentUser);
  const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const { id: productID } = useParams() as { id: string };
  const [formFields, setFormFields] = useState(defaultReviewFields);
  const { rating, feedback, name } = formFields;
  const [errorMessage, setErrorMessage] = useState("");
  const [thankYouNoteOpen, setThankYouNotOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const userPurchasedTheProduct = () => {
    const userPurchasedProducts = currentUser?.purchases.flatMap(
      (order) => order.products
    );

    if (!userPurchasedProducts) return false;

    return userPurchasedProducts.some(
      (product) => product.id === Number(productID)
    );
  };

  const submitReviewHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let userName = currentUser ? currentUser.displayName : name;

    if (!rating || !feedback || !userName) {
      const errorMessages = [];
      if (!userName) errorMessages.push("enter your name");
      if (!feedback) errorMessages.push("tell us about your experience");
      if (!rating) errorMessages.push("select a rating");

      setErrorMessage(
        `We would love to hear from you but all fields are required. Please ` +
          errorMessages.map((errorMessage, i) => {
            return i === errorMessages.length - 1 && errorMessages.length > 1
              ? " and also " + errorMessage
              : " " + errorMessage;
          }) +
          "."
      );

      return;
    }

    setErrorMessage("");

    let product: Product = {
      userDisplayName: userName,
      stars: rating,
      body: feedback,
      productId: productID,
      userEmail: currentUser?.email || null,
      verifiedPurchase: userPurchasedTheProduct(),
    };

    await createReview(product);

    setFormFields(defaultReviewFields);
    dispatch(fetchReviewsAsync());
    setThankYouNotOpen(true);
  };

  const handleNoteClose = () => {
    setThankYouNotOpen(false);
  };

  return (
    <>
      <FormControl required>
        <Box
          component="form"
          autoComplete="off"
          className={css["form-review"]}
          sx={{
            marginTop: "-3rem",
          }}
          onSubmit={submitReviewHandler}
        >
          {!isUserLoggedIn && (
            <TextField
              id="standard-textarea"
              label="Your name"
              variant="standard"
              onChange={handleChange}
              name="name"
              value={name}
              sx={{
                "&.MuiTextField-root": {
                  margin: "0",
                },
                "& .Mui-focused.MuiInputLabel-root": {
                  color: "var(--strong-accent-color)",
                  fontSize: "1.9rem",
                  top: "-0.5rem",
                },
                "& .MuiInputLabel-shrink": {
                  top: "-0.5rem",
                  fontSize: "1.9rem",
                  color: "var(--strong-accent-color)",
                },
                "& .MuiInputLabel-root": {
                  fontSize: "1.5rem",
                  color: "var(--strong-accent-color)",
                },
                "& .MuiInputBase-root::before": {
                  borderBottom: "0 !important",
                },
                "& .MuiInputBase-input": {
                  fontSize: "1.4rem",
                  padding: "1rem",
                  borderBottom:
                    "2px dashed var(--strong-accent-color) !important",
                  lineHeight: "130%",
                },
                "& .MuiInputBase-input.Mui-focused::before": {
                  fontSize: "1.4rem",
                  padding: "1rem",
                  borderBottom: "0",
                },
                "& .MuiInputBase-root.Mui-focused::after": {
                  fontSize: "1.4rem",
                  padding: "1rem",
                  borderBottom: "0",
                },
                "& .MuiInputBase-root-MuiInput-root:after": {
                  borderBottom: "0 !important",
                },
              }}
            />
          )}
          <TextField
            id="standard-textarea"
            label="Your experience"
            multiline
            variant="standard"
            onChange={handleChange}
            name="feedback"
            value={feedback}
            sx={{
              "&.MuiTextField-root": {
                margin: "0",
              },
              "& .Mui-focused.MuiInputLabel-root": {
                color: "var(--strong-accent-color)",
                fontSize: "1.9rem",
                top: "-0.5rem",
              },
              "& .MuiInputLabel-shrink": {
                top: "-0.5rem",
                fontSize: "1.9rem",
                color: "var(--strong-accent-color)",
              },
              "& .MuiInputLabel-root": {
                fontSize: "1.5rem",
                color: "var(--strong-accent-color)",
              },
              "& .MuiInputBase-root::before": {
                borderBottom: "0 !important",
              },
              "& .MuiInputBase-inputMultiline": {
                fontSize: "1.4rem",
                padding: "1rem",
                borderBottom:
                  "2px dashed var(--strong-accent-color) !important",
                lineHeight: "130%",
              },
              "& .MuiInputBase-multiline.Mui-focused::before": {
                fontSize: "1.4rem",
                padding: "1rem",
                borderBottom: "0",
              },
              "& .MuiInputBase-multiline.Mui-focused::after": {
                fontSize: "1.4rem",
                padding: "1rem",
                borderBottom: "0",
              },
              "& .MuiInputBase-multiline:hover": {
                borderBottom: "0 !important",
              },
              "& .MuiInputBase-root::after": {
                borderBottom: "0!important",
              },
            }}
          />

          <Rating
            sx={{
              "& .MuiRating-icon": {
                color: "#a89565",
              },
            }}
            name="rating"
            value={rating}
            onChange={(event, newValue) => {
              setFormFields({ ...formFields, rating: newValue });
            }}
            precision={0.5}
            size="large"
          />

          <Button buttonType={BUTTON_TYPE_CLASSES.basic}>Leave Feedback</Button>
          {errorMessage && (
            <Typography
              variant="caption"
              color="error"
              sx={{
                color: "var(--strong-accent-color)",
                fontSize: "1.1rem",
              }}
            >
              {errorMessage}
            </Typography>
          )}
        </Box>
      </FormControl>

      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={thankYouNoteOpen}
        onClose={handleNoteClose}
        message="We appreciate your feedback!"
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

export default ProductReviewForm;
