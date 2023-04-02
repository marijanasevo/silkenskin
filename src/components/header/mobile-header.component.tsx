import CartIcon from "../cart-icon/cart-icon.component";
import css from './mobile-header.module.css';

const MobileHeader = () => {
  return (
    <header className={css['header']}>
      <div className={css["notice"]}>
        Free shipping worldwide
      </div>
      <nav className={css['navigation']}>

        <div className={css['base-menu']}>
          <div className={css["logo"]}>
            <a className={css['logo-link']} href="#">Silken Skin Co.</a>
          </div>
          <div className={css["cart-icon"]}><CartIcon /></div>
        </div>

        <label className={css["hamburger-menu"]}>
          <input type="checkbox" />
        </label>

        <aside className={css["sidebar-menu"]}>
          <ul className={css['menu-items']}>
            <li><a href="#">LOGIN | SIGN IN</a></li>
            <li><a href="#">SHOP</a></li>
            <li><a href="#">REFLECTIONS</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#"><span>your favorites</span> ♡ </a></li>
          </ul>
        </aside>
      </nav>
    </header>
  )
}

export default MobileHeader;