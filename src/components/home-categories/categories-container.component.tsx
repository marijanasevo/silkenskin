import CategoryItem from "../category-item/category-item.component";
import { homeCategories } from "../../categories-data";
import css from "./categories-container.module.css";

export interface BgContainerStyle extends React.CSSProperties {
  "--bg-image": string;
}

const CategoriesContainer = () => {
  return (
    <div className={`${"section"} ${css["categories-section-container"]}`}>
      <h2 className="section-title">We Got You</h2>

      <div className={css["categories-container"]}>
        {homeCategories.map((category) => {
          const bgContainerStyle: BgContainerStyle = {
            "--bg-image": `url(${category.imageUrl})`,
          };

          return (
            <CategoryItem
              key={category.id}
              category={category}
              bgImage={bgContainerStyle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesContainer;
