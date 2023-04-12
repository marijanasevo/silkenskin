import { createContext, useEffect, useState } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

// import PRODUCTS_DATA from "../products-data";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
// addCollectionAndDocuments(PRODUCTS_DATA, 'categories');

export const CategoriesContext = createContext({
  categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    }

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      { children }
    </CategoriesContext.Provider>
  )
};
