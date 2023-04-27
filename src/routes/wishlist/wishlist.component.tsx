import css from "./wishlist.module.css";
import ProductCard from "../../components/product-card/product-card.component";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../store/category/category.selector";
import { useEffect, useState } from "react";
import { CategoryItem } from "../../store/category/category.types";
import { AppDispatch } from "../../store/store";
import { selectWishlistProductsIDs } from "../../store/wishlist/wishlist.selector";
import { removeFromWishlist } from "../../store/wishlist/wishlist.reducer";

const Wishlist = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categoriesArray = useSelector(selectCategories);
  const wishlistProductsIDs = useSelector(selectWishlistProductsIDs);
  const [wishListProducts, setWishListProducts] = useState<CategoryItem[]>([]);

  // const removeItemFromWishlistHandler = (productId: string) => {
  //   dispatch(removeItemFromWishlist(productId));
  // };

  useEffect(() => {
    const allProducts = categoriesArray.flatMap((category) => category.items);
    const wishlistProd = allProducts.filter((product) =>
      wishlistProductsIDs.includes(product.id)
    );
    setWishListProducts(wishlistProd);
  }, [categoriesArray, wishlistProductsIDs]);

  return (
    <>
      <h1 className="page-heading">Your Wishlist</h1>
      <div className={css["products"]}>
        {wishListProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isInWishList
            onRemoveFromWishlist={() =>
              dispatch(removeFromWishlist(product.id))
            }
          ></ProductCard>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
