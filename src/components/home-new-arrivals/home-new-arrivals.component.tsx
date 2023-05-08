import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/category/category.selector";
import { applyFilters } from "../../routes/shop/apply-filters";

import Slider from "react-slick";
import ProductCard from "../product-card/product-card.component";

import { CategoryItem } from "../../store/category/category.types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import css from "./home-new-arrivals.module.css";

const NewArrivalsContainer = () => {
  const [productsToShow, setProductsToShow] = useState<CategoryItem[]>([]);
  const categoriesMap = useSelector(selectCategoriesMap);
  const sliderRef = useRef<Slider | null>(null);

  const carouselSettings = {
    className: "center",
    speed: 500,
    autoplaySpeed: 2500,
    // autoplay: true,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "40px",
    infinite: true,
    slidesToShow: 1,
    dots: true,
    customPaging: () => (
      <div className={"paging"} style={{ fontSize: "2rem" }}>
        —
      </div>
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

  useEffect(() => {
    const productsToShow = applyFilters(
      categoriesMap,
      { newArrival: true },
      undefined
    );

    setProductsToShow(productsToShow);
  }, [categoriesMap]);

  useEffect(() => {
    // Get the maximum height of all product cards
    const productCards = document.querySelectorAll<HTMLDivElement>(
      ".slick-slide .product"
    ) as NodeListOf<HTMLDivElement>;

    let maxHeight = 0;
    productCards?.forEach((card) => {
      maxHeight = Math.max(maxHeight, card.offsetHeight);
    });

    // Set the height of each product card individually
    productCards?.forEach((card) => {
      card.style.height = `${maxHeight}px`;
    });
  }, [productsToShow]);

  return (
    <>
      <h2 className={`${"section-title"}`}>New Arrivals</h2>

      <div className={css["new-arrivals-products"]}>
        <Slider {...carouselSettings} ref={sliderRef}>
          {productsToShow.map((product) => (
            <div key={product.id} className={css["slider-product"]}>
              <ProductCard product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default NewArrivalsContainer;
