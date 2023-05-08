import { useNavigate } from "react-router-dom";
import { navigateTo } from "../../utils/helpers/navigate";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";

import css from "./footer.module.css";

const Footer = () => {
  const navigate = useNavigate();
  const handleNavigate = navigateTo(navigate);

  return (
    <div className={`${"section"} ${css["footer"]}`}>
      <h4 className={css["footer-title"]}>YOUR BODY IS YOUR HOME</h4>
      <div className={css["socials"]}>
        <InstagramIcon className={css["nav-social"]} />
        <FacebookIcon className={css["nav-social"]} />
        <PinterestIcon className={css["nav-social"]} />
      </div>
      <div className={css["footer-navigation"]}>
        <div className={css["footer-navigation-info"]}>
          <h5 className={css["subtitles"]}>& LOVE STARTS AT HOME</h5>
          <span
            className={css["nav-item"]}
            onClick={() => handleNavigate("/shop")}
          >
            SHOP
          </span>
          <span
            className={css["nav-item"]}
            onClick={() => handleNavigate("/blog")}
          >
            BLOG
          </span>
          <span
            className={css["nav-item"]}
            onClick={() => handleNavigate("/wishlist")}
          >
            MY WISHLIST
          </span>
          <span
            className={css["nav-item"]}
            onClick={() => handleNavigate("/account")}
          >
            MY ACCOUNT
          </span>
          <span
            className={css["nav-item"]}
            onClick={() => handleNavigate("/about")}
          >
            ABOUT SILKEN SKIN
          </span>
        </div>

        <div className={css["footer-navigation-support"]}>
          <h5 className={css["subtitles"]}>FINE PRINT</h5>
          <span className={css["nav-item"]}>RETURNS + SHIPPING</span>
          <span
            onClick={() => handleNavigate("/privacy-policy")}
            className={css["nav-item"]}
          >
            PRIVACY POLICY
          </span>
          <span
            onClick={() => handleNavigate("/terms-of-service")}
            className={css["nav-item"]}
          >
            TERMS OF SERVICE
          </span>
          <span className={css["nav-item"]}>FAQ</span>
          <span className={css["nav-item"]}>CONTACT US</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
