import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsMenuOpen } from "../../store/menu/menu.selector";
import { setIsMenuOpen } from "../../store/menu/menu.reducer";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import css from "./mobile-header.module.css";
import { navigateTo } from "../../utils/helpers/navigate";

const MobileHeader = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isMenuOpen = useSelector(selectIsMenuOpen);
  const navigate = useNavigate();
  const handleNavigate = navigateTo(navigate);
  const checkboxRef = useRef(null);
  const dropdownMenuRef = useRef(null);

  const closeMenuOnClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    if (isMenuOpen && !target?.contains(checkboxRef.current)) {
      dispatch(setIsMenuOpen(false));
    }
  };

  useEffect(() => {
    return () => {
      dispatch(setIsMenuOpen(false));
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mouseup", closeMenuOnClickOutside);
    } else {
      document.removeEventListener("mouseup", closeMenuOnClickOutside);
    }

    return () =>
      document.removeEventListener("mouseup", closeMenuOnClickOutside);
  }, [isMenuOpen]);

  const handleMenuChange = () => {
    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  const signOutHandler = async () => {
    await signOutUser();
    handleNavigate("/login");
  };

  return (
    <header className={css["header"]}>
      <div className={css["notice"]}>Free shipping worldwide</div>
      <nav className={css["navigation"]}>
        <div className={css["base-menu"]}>
          <div className={css["logo"]}>
            <Link className={css["logo-link"]} to="/">
              Silken Skin Co.
            </Link>
          </div>
          <div className={css["cart-icon"]}>
            <CartIcon />
          </div>
        </div>

        <label className={css["hamburger-menu"] + " hamburger-menu"}>
          <input
            ref={checkboxRef}
            checked={isMenuOpen}
            onChange={handleMenuChange}
            className="checkbox"
            type="checkbox"
          />
        </label>

        <aside ref={dropdownMenuRef} className={css["sidebar-menu"]}>
          <ul className={css["menu-items"]}>
            <li className={css["inline-links"]}>
              {currentUser ? (
                <>
                  <Link to="/account">PROFILE</Link> |{" "}
                  <Link onClick={signOutHandler} to="">
                    LOGOUT
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">LOGIN</Link> |{" "}
                  <Link to="/sign-up">SIGN UP</Link>
                </>
              )}
            </li>
            <li>
              <Link to="/shop">SHOP</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/wishlist">YOUR WISHLIST</Link>
            </li>
          </ul>
        </aside>
      </nav>
    </header>
  );
};

export default MobileHeader;
