import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  signInAuthUserWithEmailAndPass,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import { navigateTo } from "../../utils/helpers/navigate";

import FormInputField from "../../components/form-input-field/form-input-field.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import css from "./authentication.module.css";

const defaultFormFields = {
  email: "",
  password: "",
};

export const logGoogleUser = async () => {
  await signInWithGooglePopup();
};

const Login = () => {
  const navigate = useNavigate();
  const handleNavigate = navigateTo(navigate);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value });
    },
    [formFields]
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        const response = await signInAuthUserWithEmailAndPass(email, password);
        const user = response?.user;

        navigate("/account");
      } catch (error) {
        if ((error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD) {
          alert("Wrong password");
        } else if ((error as AuthError).code === AuthErrorCodes.USER_DELETED) {
          alert("This user isn't registered");
        } else {
          console.log("User login encountered an error", error);
        }
      }
    },
    [formFields]
  );

  return (
    <div className={`${css["auth-form-container"]} page-container`}>
      <h1 className="page-heading">Login</h1>

      <div>
        <span className={css["subheading"]}>Login with Google</span>

        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={logGoogleUser}
        >
          Log In with Google
        </Button>
      </div>

      <div>
        <span className={`${css["subheading"]}`} style={{ marginBottom: 0 }}>
          Or your e-mail and password
        </span>

        <form className={css["form"]} onSubmit={handleSubmit}>
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

          <Button buttonType={BUTTON_TYPE_CLASSES.basic} type="submit">
            Log In
          </Button>
        </form>
      </div>

      <div>
        <span className={css["subheading"]}>New Customer?</span>
        <Button
          onClick={() => handleNavigate("/sign-up")}
          buttonType={BUTTON_TYPE_CLASSES.underlinedAuth}
        >
          CREATE AN ACCOUNT
        </Button>
      </div>
    </div>
  );
};

export default Login;
