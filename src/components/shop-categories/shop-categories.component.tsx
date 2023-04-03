import { Link } from 'react-router-dom';
import css from './shop-categories.module.css';

const ShopCategories = () => {
  return (
    <ul className={css['categories']}>
      <li className={css['category-item']}><Link to="">moisturizers</Link></li>
      <li className={css['category-item']}><Link to="">serums</Link></li>
      <li className={css['category-item']}><Link to="">masks</Link></li>
      <li className={css['category-item']}><Link to="">tools & accessories</Link></li>
      <li className={css['category-item']}><Link to="">body care</Link></li>
      <li className={css['category-item']}><Link to="">men</Link></li>
    </ul>
  )
};

export default ShopCategories;