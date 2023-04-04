import { Link } from 'react-router-dom';
import css from './home-hero.module.css';

const HomeHero = () => {

  return (
    <div className={css['home-hero']}>

      <div className={css["home-hero__details"]}>
        <span className={css['home-hero__subtitle']}>nourish your skin</span>

        <h1 className={css['home-hero__title']}>
          Experience the power of natural ingredients
        </h1>
      </div>

      <Link to="shop" className={css['accented-link']}>SHOP NOW</Link>
    </div>
  )
};

export default HomeHero;