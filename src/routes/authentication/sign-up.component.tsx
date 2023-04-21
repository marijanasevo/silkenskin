import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";

import {
  createAuthUserWithEmailAndPass,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

import { AuthErrorCodes, AuthError } from "firebase/auth";

import { logGoogleUser } from "./login.component";

import FormInputField from "../../components/form-input-field/form-input-field.component.js";
import Button from "../../components/button/button.component.js";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component.js";
import css from "./authentication.module.css";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value });
    },
    [displayName, email, password, confirmPassword]
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (password !== confirmPassword) {
        alert("Your passwords are not matching");
        return;
      }

      try {
        const response = await createAuthUserWithEmailAndPass(email, password);
        const user = response?.user;
        if (!user) throw new Error("User is undefined. TypeScript was right.");
        await createUserDocumentFromAuth(user, { displayName });

        navigate("/account-created");
      } catch (error: unknown) {
        if (error instanceof FirebaseError) {
          if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
            alert("This email is already in use");
          } else if (
            (error as AuthError).code === AuthErrorCodes.INVALID_EMAIL
          ) {
            alert("This email is invalid");
          } else {
            console.log("User signup encountered an error", error);
          }
        }
      }
    },
    [displayName, email, password, confirmPassword]
  );

  return (
    <div className="auth-form-container">
      <h1 className="page-heading">Sign Up</h1>

      <span className={css["subheading"]}>Sign Up with Google</span>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={logGoogleUser}>
        Sign Up with Google
      </Button>

      <span className={css["subheading"]}>
        Or with your e-mail and password
      </span>

      <form onSubmit={handleSubmit} className={css["form"]}>
        <FormInputField
          label="Display Name"
          onChange={handleChange}
          type="text"
          required
          name="displayName"
          value={displayName}
        />

        <FormInputField
          label="Email"
          onChange={handleChange}
          type="email"
          required
          name="email"
          value={email}
        />

        <FormInputField
          label="Password"
          onChange={handleChange}
          type="password"
          required
          name="password"
          value={password}
        />

        <FormInputField
          label="Confirm Password"
          onChange={handleChange}
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button buttonType={BUTTON_TYPE_CLASSES.basic} type="submit">
          Sign Up
        </Button>
      </form>

      <Link className="underlined-link" to="/login">
        Go back to Login
      </Link>
    </div>
  );
};

export default SignUp;
