import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { selectCategoriesMap } from "../../store/category/category.selector";
import { setCategories } from "../../store/category/category.action";

import ShopCategories from "../../components/shop-categories/shop-categories.component";
import ProductCard from "../../components/product-card/product-card.component";

import css from "./shop.module.css";

const Shop = () => {
  const dispatch = useDispatch();
  const categoriesMap = useSelector(selectCategoriesMap);

  let { category } = useParams();
  const [productsToShow, setProductsToShow] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const categoriesArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
    };

    getCategories();
  }, []);

  useEffect(() => {
    const filteredProducts =
      category === undefined
        ? Object.values(categoriesMap).flat()
        : Array.from(categoriesMap[category?.replace(/-/g, " ")] || []);

    setProductsToShow(filteredProducts);
  }, [category, categoriesMap]);

  return (
    <>
      <h1 className={"page-heading"}>Shop</h1>

      <ShopCategories />

      <div className={css["products"]}>
        {productsToShow.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Shop;
