import { CategoryItem } from "../../store/category/category.types";
import css from "./product-side-images.module.css";

type ProductSideImagesProps = {
  product?: CategoryItem;
};

const ProductSideImages = ({ product }: ProductSideImagesProps) => {
  return (
    <div className={css["gallery-container"]}>
      {product?.gallery.map((imageSource, i) => (
        <img
          className={css["gallery-image"]}
          key={i}
          src={imageSource}
          alt={`${product?.name} image ${i}`}
        />
      ))}
    </div>
  );
};

export default ProductSideImages;
