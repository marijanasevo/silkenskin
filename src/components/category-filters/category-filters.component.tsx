import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category.selector";
import css from "./category-filters.module.css";
import { formatStrForSlug } from "../../utils/helpers/helpers";

const CategoryFilters = () => {
  let { category } = useParams<string>();
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <div className={css["categories"]}>
      <div className={css["category-item"]}>
        <Link
          className={category === undefined ? css["active-item"] : ""}
          to="/shop"
        >
          all
        </Link>
      </div>
      {Object.keys(categoriesMap).map((categoryTitle) => (
        <div key={categoryTitle} className={`${css["category-item"]}`}>
          <Link
            className={
              formatStrForSlug(categoryTitle) === category
                ? css["active-item"]
                : ""
            }
            to={`/shop/${formatStrForSlug(categoryTitle)}`}
          >
            {categoryTitle}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilters;
