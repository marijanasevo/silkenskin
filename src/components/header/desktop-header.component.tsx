import { Link, useNavigate } from "react-router-dom";
import { navigateTo } from "../../utils/helpers/navigate";

import CartIcon from "../cart-icon/cart-icon.component";
import Icon from "../icon/icon.component";

import css from "./desktop-header.module.css";

const DesktopHeader = () => {
  const navigate = useNavigate();
  const handleNavigate = navigateTo(navigate);
  return (
    <header className={`${css["header"]}`}>
      <div className={css["notice"]}>Free shipping worldwide</div>

      <nav className={css["navigation"] + " side-space"}>
        <div className={css["left-side-nav"]}>
          <Link to="/shop">SHOP</Link>
          <Link to="/blog">BLOG</Link>
          <Link to="/about">ABOUT</Link>
        </div>

        <div className={css["logo-container"]}>
          <Link className={css["logo-link"] + " logo"} to="/">
            <Icon icon={"logo"} iconSize={5} className={css["logo"]} />
          </Link>
        </div>

        <div className={css["right-side-nav"]}>
          <div
            className={css["menu-icon"]}
            onClick={() => handleNavigate("/login")}
          >
            <Icon icon="avatar" iconSize={2.5} />
          </div>
          <div
            className={css["menu-icon"]}
            onClick={() => handleNavigate("/wishlist")}
          >
            <Icon icon="heart" iconSize={2.5} />
          </div>
          <div>
            <CartIcon />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DesktopHeader;
