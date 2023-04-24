import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import css from "./product-reviews.module.css";
import { useSelector } from "react-redux";
import {
  selectProductReviews,
  selectReviewsLoading,
} from "../../store/review/review.selector";
import { useParams } from "react-router-dom";
import Spinner from "../spinner/spinner.component";

const ProductReviews = () => {
  const { id: productID } = useParams() as { id: string };
  const areReviewsLoading = useSelector(selectReviewsLoading);
  const productReviews = useSelector(selectProductReviews(productID));

  return areReviewsLoading ? (
    <Spinner />
  ) : (
    <div className={css["all-reviews"]}>
      {productReviews.length ? (
        productReviews?.map((review) => (
          <div className={css["review"]} key={review.id}>
            <div className={css["review-header"]}>
              <h3 className={css["review-title"] + " " + css["item-subtitle"]}>
                {review.userDisplayName}
              </h3>
              <span className="review-date">
                {review.createdAt
                  .toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                  })
                  .replace(/(\w+)\s(\d+)/, "$1, $2")}
              </span>
            </div>
            <div className="review-body">
              <p>{review.body}</p>
            </div>
            <div className={css["review-stars"]}>
              <Rating
                name="text-feedback"
                value={review.stars ?? 0}
                readOnly
                precision={0.1}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
                sx={{ color: "var(--moderate-accent-color)" }}
              />
            </div>
          </div>
        ))
      ) : (
        <div className={css["no-reviews-message"]}>
          Oh, it seems like there are no reviews for this product. We would love
          for you to try it out and be one of the first to share your feedback
          with us!
        </div>
      )}
    </div>
  );
};

export default ProductReviews;
