import { useContext, useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';

import CartIcon from "../cart-icon/cart-icon.component";
import css from './mobile-header.module.css';

const MobileHeader = () => {
  const { currentUser } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen ] = useState(false);
  const navigate = useNavigate();
  const checkboxRef = useRef(null);
  const dropdownMenuRef = useRef(null);

  // useEffect(() => {
  //   const closeMenuOnClickElsewhere = (event) => {
  //     console.log('runs each time you click mf');
  //     if ( 
  //         checkboxRef.current &&
  //         checkboxRef.current.checked &&
  //         event.target !== checkboxRef.current.parentElement &&
  //         event.target !== checkboxRef.current
  //       ) {
  //       checkboxRef.current.checked = false;
  //     }
  //   };
  
  //   document.addEventListener('click', closeMenuOnClickElsewhere);
  
  //   return () => {
  //     document.removeEventListener('click', closeMenuOnClickElsewhere);
  //   };
  // }, []);

  const closeMenuOnClickOutside = (event) => {
    console.log('runs each time you click mf');
    console.log(checkboxRef.current, event.target);
    if ( 
        isMenuOpen
        && !dropdownMenuRef.current.contains(event.target)
        && !event.target.contains(checkboxRef.current)
      ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", closeMenuOnClickOutside);
    } else {
      document.removeEventListener("mousedown", closeMenuOnClickOutside);
    }

    return () => document.removeEventListener('mousedown', closeMenuOnClickOutside);
  }, [isMenuOpen]);

  const handleMenuChange = () => {
    setIsMenuOpen(!isMenuOpen);
  }

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
          <input  
            ref={checkboxRef} 
            checked={isMenuOpen}
            onChange={handleMenuChange}
            className='checkbox'
            type="checkbox" 
          />
        </label>

        <aside 
          ref={dropdownMenuRef}
          className={css["sidebar-menu"]}>
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