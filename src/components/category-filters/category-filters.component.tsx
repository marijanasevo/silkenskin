import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category.selector";
import css from "./category-filters.module.css";

const CategoryFilters = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <div className={css["categories"]}>
      <div className={css["category-item"]}>
        <Link to="/shop">all</Link>
      </div>
      {Object.keys(categoriesMap).map((categoryTitle) => (
        <div key={categoryTitle} className={css["category-item"]}>
          <Link to={`/shop/${categoryTitle.replace(/\s+/g, "-")}`}>
            {categoryTitle}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilters;
