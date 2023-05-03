import css from "./button.module.css";
import React, { ButtonHTMLAttributes, FC } from "react";

export enum BUTTON_TYPE_CLASSES {
  basic = "basic-button",
  inverted = "inverted-button",
  transparentBg = "transparent-bg-button",
  spinner = "spinner-container",
  underlinedWishlist = "underlined-wishlist-button",
  underlinedOverImage = "underlined-over-image-button",
  underlinedHome = "underlined-home-button",
}

export type ButtonProps = {
  buttonType: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  disabled,
  className,
  ...otherProps
}) => {
  return (
    <button
      disabled={disabled}
      className={
        css["button-container"] +
        " " +
        css[buttonType] +
        " " +
        (className ? className : "")
      }
      {...otherProps}
    >
      {disabled ? <div className={css["spinner"]}></div> : children}
    </button>
  );
};

export default Button;
