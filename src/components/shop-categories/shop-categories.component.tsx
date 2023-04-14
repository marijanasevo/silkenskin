import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/category/category.selector";

import css from "./shop-categories.module.css";

const ShopCategories = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

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
