import css from './home-hero.module.css';

const HomeHero = () => {

  return (
    <div className={css['home-hero']}>

      <div className={css["home-hero__details"]}>
        <span className={css['home-hero__subtitle']}>nourishment for your skin</span>

        <h1 className={css['home-hero__title']}>
          Experience the power of natural ingredients
        </h1>
      </div>

      <button className={css['square-button']}>SHOP NOW</button>
    </div>
  )
};

export default HomeHero;