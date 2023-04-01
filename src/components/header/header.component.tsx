import CartIcon from "../cart-icon/cart-icon.component";
import css from './header.module.css';

const Header = () => {
  return (
    <header className={css['header']}>
      <div className={css["notice"]}>
        Free shipping worldwide
      </div>
      <nav className={css['navigation']}>
        <div className={css["menu-button"]}>☰</div>
        <div className={css["logo"]}>
          <a className={css['logo-link']} href="#">Silken Skin Co.</a>
        </div>
        <div className={css["cart-icon"]}><CartIcon /></div>
      </nav>
    </header>
  )
}

export default Header;