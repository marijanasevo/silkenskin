import { Link } from "react-router-dom";

import CartIcon from "../cart-icon/cart-icon.component";
import HeartIcon from "../heart-icon/heart-icon.component";
import AvatarIcon from "../avatar-icon/avatar-icon.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import css from "./desktop-header.module.css";

const DesktopHeader = () => {
  return (
    <header className={css["header"]}>
      <div className={css["notice"]}>Free shipping worldwide</div>

      <nav className={css["navigation"] + " side-space"}>
        <div className={css["left-side-nav"]}>
          <Link to="/shop">SHOP</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/about">ABOUT</Link>
        </div>

        <div className={css["logo-container"]}>
          <Link className={css["logo-link"] + " logo"} to="/">
            <Logo className={css["logo"]} />
          </Link>
        </div>

        <div className={css["right-side-nav"]}>
          <Link to="/login">
            <AvatarIcon />
          </Link>
          <Link to="/wishlist">
            <HeartIcon />
          </Link>
          <div>
            <CartIcon />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopHeader;
