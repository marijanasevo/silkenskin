import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.context';

import ShopCategories from '../../components/shop-categories/shop-categories.component';
import ProductCard from '../../components/product-card/product-card.component';

import css from './shop.module.css';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <h1 className={'page-heading'}>Shop</h1>
      
      <ShopCategories />
      
      <div className={css["products"]}>
      {products.map(product => (
          <ProductCard key={product.id} product={product} />
        
      ))}
      </div>
    </>
  )

};

export default Shop;