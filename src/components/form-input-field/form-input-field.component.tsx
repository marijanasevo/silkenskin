import css from "./form-input-field.module.css";
import { InputHTMLAttributes } from "react";

type FormInputFieldProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInputField = ({ label, ...otherProps }: FormInputFieldProps) => {
  return (
    <div className={css["form-input-field"]}>
      <label
        className={
          css["form-input-field__label"] +
          ` ${otherProps.value && css["shrink"]}`
        }
      >
        {label}
      </label>

      <input className={css["form-input-field__input"]} {...otherProps} />
    </div>
  );
};

export default FormInputField;
