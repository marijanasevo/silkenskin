import css from './product-card.module.css';

const ProductCard = ({ product }) => {
  
  return (
      <div className={css["product"]}>
        <img className={css['product__image']} src={ product.thumbnailUrl } alt={ product.name } />
        <div className={css["product__details"]}>
          <h3 className={css["product__details__title"]}>{ product.name }</h3>
          <span className={css["product__details__price"]}>{ product.price }</span>
          <p className={css["product__details__desc"]}>For dry skin</p>
          <button className={css["product__details__button"]}>ADD TO BAG</button>
        </div>
      </div>
  );
};

export default ProductCard;