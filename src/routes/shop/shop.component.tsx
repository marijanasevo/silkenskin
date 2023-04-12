import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.context';

import ShopCategories from '../../components/shop-categories/shop-categories.component';
import ProductCard from '../../components/product-card/product-card.component';

import css from './shop.module.css';

const Shop = () => {
  let { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const currentProducts = category === undefined ? 
      Object.values(categoriesMap).flat() : 
      Array.from(categoriesMap[category?.replace(/-/g, " ")] || []);

    setProducts(currentProducts);
  }, [category, categoriesMap]);

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