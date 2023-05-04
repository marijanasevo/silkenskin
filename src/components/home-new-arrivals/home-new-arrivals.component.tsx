import css from "./home-new-arrivals.module.css";
import ProductCard from "../product-card/product-card.component";
import { useEffect, useState } from "react";
import { CategoryItem } from "../../store/category/category.types";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category.selector";
import { applyFilters } from "../../routes/shop/apply-filters";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewArrivalsContainer = () => {
  const [productsToShow, setProductsToShow] = useState<CategoryItem[]>([]);
  const categoriesMap = useSelector(selectCategoriesMap);

  useEffect(() => {
    const productsToShow = applyFilters(
      categoriesMap,
      { newArrival: true },
      undefined
    );

    setProductsToShow(productsToShow);
  }, [categoriesMap]);

  const carouselSettings = {
    className: "center",
    speed: 500,
    autoplaySpeed: 2500,
    autoplay: true,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "40px",
    infinite: true,
    slidesToShow: 1,
    dots: true,
    customPaging: () => (
      <div style={{ fontSize: "2rem", color: "gray" }}>—</div>
    ),
    responsive: [
      {
        breakpoint: 2424,
        settings: {
          slidesToShow: 3,
          centerPadding: "140px",
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 875,
        settings: {
          slidesToShow: 2,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "120px",
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
          centerPadding: "0px",
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 398,
        settings: {
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div className={css["new-arrivals-container"]}>
      <h2 className={`${"section-title"} ${css["title"]}`}>New Arrivals</h2>

      <div className={css["new-arrivals-products"]}>
        <Slider {...carouselSettings}>
          {productsToShow.map((product) => (
            <div key={product.id} className={css["slider-product"]}>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>

      {/*<p style={{ textAlign: "center" }}>— — —</p>*/}
    </div>
  );
};

export default NewArrivalsContainer;
