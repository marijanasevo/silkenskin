import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../store/category/category.selector";
import { selectWishlistProductsIDs } from "../../store/wishlist/wishlist.selector";
import { removeFromWishlist } from "../../store/wishlist/wishlist.reducer";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoryItem } from "../../store/category/category.types";
import { AppDispatch } from "../../store/store";
import css from "./wishlist.module.css";

const Wishlist = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categoriesArray = useSelector(selectCategories);
  const wishlistProductsIDs = useSelector(selectWishlistProductsIDs);
  const [wishListProducts, setWishListProducts] = useState<CategoryItem[]>([]);
  const [isWishlistEmpty, setIsWishlistEmpty] = useState(true);

  useEffect(() => {
    const allProducts = categoriesArray.flatMap((category) => category.items);
    const wishlistProd = allProducts.filter((product) =>
      wishlistProductsIDs.includes(product.id)
    );
    const isWishlistEmpty = Boolean(!wishlistProd.length);

    setWishListProducts(wishlistProd);
    setIsWishlistEmpty(isWishlistEmpty);
  }, [categoriesArray, wishlistProductsIDs]);

  return (
    <div className={`page-container`}>
      <h1 className="page-heading">Your Wishlist</h1>
      {!isWishlistEmpty ? (
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
      ) : (
        <div className={css["empty-wishlist-message"]}>
          Go on, dare to add something to the wishlist!
        </div>
      )}
    </div>
  );
};

export default Wishlist;
