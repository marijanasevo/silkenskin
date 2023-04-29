import { CategoryMap } from "../../store/category/category.types";

export const getFilterOptions = (categoriesMap: CategoryMap) => {
  const suitedOptions = [
    ...Object.values(categoriesMap).reduce((acc, category) => {
      category.forEach((item) => acc.add(item.suited));
      return acc;
    }, new Set<string>()),
  ];

  const propertiesOptions = [
    ...Object.values(categoriesMap).reduce((acc, category) => {
      category.forEach((product) => {
        product.productProperties.forEach((property) => {
          acc.add(property);
        });
      });
      return acc;
    }, new Set<string>()),
  ];

  const targetOptions = [
    ...Object.values(categoriesMap).reduce((acc, category) => {
      category.forEach((product) => {
        product.targets?.forEach((target) => {
          acc.add(target);
        });
      });
      return acc;
    }, new Set<string>()),
  ];

  const brandOptions = [
    ...Object.values(categoriesMap).reduce((acc, category) => {
      category.forEach((product) => {
        acc.add(product.brand);
      });
      return acc;
    }, new Set<string>()),
  ];

  return {
    suited: suitedOptions,
    productProperties: propertiesOptions,
    targets: targetOptions,
    brand: brandOptions,
  };
};
