import css from "./button.module.css";

export const BUTTON_TYPE_CLASSES = {
  basic: "basic-button",
  inverted: "inverted-button",
  accented: "accented-button",
  transparentBg: "transparent-bg-button",
  spinner: "spinner-container",
};

const Button = ({ children, buttonType, disabled, ...otherProps }) => {
  return (
    <button
      disabled={disabled}
      className={css["button-container"] + " " + css[buttonType]}
      {...otherProps}
    >
      {disabled ? <div className={css["spinner"]}></div> : children}
    </button>
  );
};

export default Button;
