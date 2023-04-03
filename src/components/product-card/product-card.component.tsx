import css from './product-card.module.css';

const ProductCard = () => {
  return (
    <div className={css["products"]}>
      <div className={css["product"]}>
        <img src="https://via.placeholder.com/250x300" alt="" />
        <div className={css["product__details"]}>
          <h3 className={css["product__details__title"]}>Hair mask OUAI</h3>
          <span className={css["product__details__price"]}>$22</span>
          <p className={css["product__details__desc"]}>For dry skin</p>
          <button className={css["product__details__button"]}>ADD TO BAG</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;