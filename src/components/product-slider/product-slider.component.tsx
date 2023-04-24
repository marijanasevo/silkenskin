import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CategoryItem } from "../../store/category/category.types";

import css from "./product-slider.module.css";

const carouselSettings = {
  className: "center",
  centerMode: true,
  centerPadding: "60px",
  infinite: true,
  slidesToShow: 1,
  speed: 300,
  adaptiveHeight: true,
  dots: false,
};

export type ProductSliderProps = {
  product: CategoryItem | undefined;
};

const ProductSlider = ({ product }: ProductSliderProps) => {
  return (
    <div className={`${css["item-visual"]}`}>
      {product?.gallery.length && (
        <Slider {...carouselSettings}>
          {product?.gallery?.map((imageSource) => (
            <div className={css["item-image-container"]} key={product.id}>
              <img
                className={css["item-image"]}
                alt={product.name}
                src={imageSource}
              />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default ProductSlider;
