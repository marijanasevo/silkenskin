import css from './category-item.module.css';
import { Category } from '../categories-container/categories-container.component';
import { BgContainerStyle } from '../categories-container/categories-container.component';

type CategoryItemProps = {
  category: Category,
  bgImage: BgContainerStyle
}

const CategoryItem = ({category, bgImage}: CategoryItemProps) => {

  return (
    <div 
      key={category.id}
      className={css['category-container']} 
      style={bgImage}
    >
      <div className={css.details}>
        <h2 className='title'>{category.title}</h2>
        <a className={css['category-shop-link']} href="#">
          SHOP NOW
        </a>
      </div>
    </div>
  );
};

export default CategoryItem;
