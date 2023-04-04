import ShopCategories from '../../components/shop-categories/shop-categories.component';
import ProductCard from '../../components/product-card/product-card.component';

import css from './shop.module.css';

const Shop = () => {

  return (
    <>
      <h1 className={'page-heading'}>Shop</h1>
      <ShopCategories />
      <ProductCard />
    </>
  )

};

export default Shop;