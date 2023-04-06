import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';

import CartIcon from "../cart-icon/cart-icon.component";
import css from './mobile-header.module.css';

const MobileHeader = () => {
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const signOutHandler = async () => {
    await signOutUser();
    navigate('/');
  }

  return (
    <header className={css['header']}>
      <div className={css["notice"]}>
        Free shipping worldwide
      </div>
      <nav className={css['navigation']}>

        <div className={css['base-menu']}>
          <div className={css["logo"]}>
            <Link className={css['logo-link']} to="/">Silken Skin Co.</Link>
          </div>
          <div className={css["cart-icon"]}><CartIcon /></div>
        </div>

        <label className={css["hamburger-menu"]}>
          <input type="checkbox" />
        </label>

        <aside className={css["sidebar-menu"]}>
          <ul className={css['menu-items']}>
            <li className={css['inline-links']}>
              {currentUser ? (
                <>
                  <Link to='/account'>PROFILE</Link> | <Link onClick={signOutHandler} to="">LOGOUT</Link>
                </>
              ) : (
                <>
                  <Link to='/login'>LOGIN</Link> | <Link to="/sign-up">SIGN UP</Link>
                </>
              )}
            </li>
            <li><Link to="/shop">SHOP</Link></li>
            <li><Link to='/blog'>BLOG</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="#">YOUR FAVORITES</Link></li>
          </ul>
        </aside>
      </nav>
    </header>
  )
}

export default MobileHeader;