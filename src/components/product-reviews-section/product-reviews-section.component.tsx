import css from "./product-reviews-section.module.css";
import ProductReviewForm from "../product-review-form/product-review-form.component";
import ProductReviews from "../product-reviews/product-reviews.component";

const ProductReviewsSection = () => {
  return (
    <div className={css["reviews-section"]}>
      <h2 className={css["reviews-heading"]}>Review</h2>
      <ProductReviewForm />
      <ProductReviews />
    </div>
  );
};

export default ProductReviewsSection;
