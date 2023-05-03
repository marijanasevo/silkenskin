import { useNavigate } from "react-router-dom";
import { formatStrForSlug } from "../../utils/helpers/helpers";
import { navigateTo } from "../../utils/helpers/navigate";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  BgContainerStyle,
  Category,
} from "../categories-container/categories-container.component";

import css from "./category-item.module.css";

type CategoryItemProps = {
  category: Category;
  bgImage: BgContainerStyle;
};

const CategoryItem = ({ category, bgImage }: CategoryItemProps) => {
  const navigate = useNavigate();
  const handleNavigate = navigateTo(navigate);

  return (
    <div
      key={category.id}
      className={css["category-item-container"]}
      style={bgImage}
    >
      <div className={css.details}>
        <h2 className="title">{category.title}</h2>

        <Button
          onClick={() =>
            handleNavigate(`/shop/${formatStrForSlug(category.title)}`)
          }
          buttonType={BUTTON_TYPE_CLASSES.underlinedOverImage}
        >
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default CategoryItem;
