import InnerImageZoom from "react-inner-image-zoom";

import { CategoryItem } from "../../store/category/category.types";

import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import css from "./product-side-images.module.css";

type ProductSideImagesProps = {
  product?: CategoryItem;
};

const ProductSideImages = ({ product }: ProductSideImagesProps) => {
  return (
    <div className={css["gallery-container"]}>
      {product?.gallery.map((imageSource, i) => (
        <InnerImageZoom
          className={css["gallery-image"]}
          key={i}
          src={imageSource}
          imgAttributes={{ alt: `${product?.name} image ${i}` }}
        />
      ))}
    </div>
  );
};

export default ProductSideImages;
