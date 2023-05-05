import css from "./product-reviews-section.module.css";
import ProductReviewForm from "../product-review-form/product-review-form.component";
import ProductReviews from "../product-reviews/product-reviews.component";

type ProductReviewsSectionProps = {
  isMobile: boolean;
};

const ProductReviewsSection = ({ isMobile }: ProductReviewsSectionProps) => {
  return (
    <div
      className={`${css["reviews-section"]} ${
        !isMobile ? css["reviews-bigger-screen"] : ""
      }`}
    >
      <h2 className={css["reviews-heading"]}>Reviews</h2>
      <ProductReviewForm />
      <ProductReviews />
    </div>
  );
};

export default ProductReviewsSection;
