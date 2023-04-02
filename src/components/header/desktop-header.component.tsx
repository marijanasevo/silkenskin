import CartIcon from "../cart-icon/cart-icon.component";
import HeartIcon from "../heart-icon/heart-icon.component";
import AvatarIcon from "../avatar-icon/avatar-icon.component";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import css from './desktop-header.module.css';

const DesktopHeader = () => {
  return (
    <header className={css['header']}>

      <div className={css["notice"]}>
        Free shipping worldwide
      </div>

      <nav className={css['navigation'] + ' side-space'}>
        <div className={css["left-side-nav"]}>
          <a href="/shop">SHOP</a>
          <a href="/blog">BLOG</a>
          <a href="/about">ABOUT</a>
        </div>

        <div className={css["logo-container"]}>
          <a className={css['logo-link'] + ' logo'} href="/">
            <Logo className={css['logo']} />
          </a>
        </div>

        <div className={css["right-side-nav"]}>
          <a href="">
            <AvatarIcon />
          </a>
          <a href="">
            <HeartIcon />
          </a>
          <a href="">
            <CartIcon />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default DesktopHeader;