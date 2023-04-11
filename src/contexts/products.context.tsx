import { createContext, useEffect, useState } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// import PRODUCTS_DATA from "../products-data";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
// addCollectionAndDocuments(PRODUCTS_DATA, 'categories');

export const ProductsContext = createContext({
  products: []
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      console.log('k');
    }

    getCategoriesMap();
  }, []);

  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      { children }
    </ProductsContext.Provider>
  )
};
