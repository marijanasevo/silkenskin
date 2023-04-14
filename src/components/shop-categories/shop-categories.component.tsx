import { useContext } from "react";
import { Link } from "react-router-dom";
import css from "./shop-categories.module.css";

import { CategoriesContext } from "../../contexts/categories.context";

const ShopCategories = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <ul className={css["categories"]}>
      <li className={css["category-item"]}>
        <Link to="/shop">all</Link>
      </li>
      {Object.keys(categoriesMap).map((categoryTitle) => (
        <li key={categoryTitle} className={css["category-item"]}>
          <Link to={`/shop/${categoryTitle.replace(/\s+/g, "-")}`}>
            {categoryTitle}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ShopCategories;
