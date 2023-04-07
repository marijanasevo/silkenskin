import { useContext, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import CartIcon from "../cart-icon/cart-icon.component";
import css from './mobile-header.module.css';

const MobileHeader = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const checkboxRef = useRef(null);

  useEffect(() => {
    const closeMenuOnClickElsewhere = (event) => {
      if ( 
          checkboxRef.current &&
          checkboxRef.current.checked &&
          event.target !== checkboxRef.current.parentElement &&
          event.target !== checkboxRef.current
        ) {
        checkboxRef.current.checked = false;
      }

      // if (isCartOpen) {
      //   setIsCartOpen(false);
      //   console.log('l');
      // }
      // console.log('k', isCartOpen);
    };
  
    document.addEventListener('click', closeMenuOnClickElsewhere);
  
    return () => {
      document.removeEventListener('click', closeMenuOnClickElsewhere);
    };
  }, []);

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

        <label className={css["hamburger-menu"] + ' hamburger-menu'}>
          <input className='checkbox' ref={checkboxRef} type="checkbox" />
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