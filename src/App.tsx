import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentUser } from "./store/user/user.reducer";
import { selectCurrentUser } from "./store/user/user.selector";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  getUserOrderHistory,
  getUserDisplayName,
} from "./utils/firebase/firebase.utils";

import Spinner from "./components/spinner/spinner.component";
const Navigation = lazy(
  () => import("./routes/navigation/navigation.component")
);

const Home = lazy(() => import("./routes/home/home.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Product = lazy(() => import("./routes/product/product.component"));
const Login = lazy(() => import("./routes/authentication/login.component"));
const SignUp = lazy(() => import("./routes/authentication/sign-up.component"));
const Account = lazy(() => import("./routes/account/account.component"));
const AccountCreated = lazy(
  () => import("./routes/account-created/account-created.component")
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const Blog = lazy(() => import("./routes/blog/blog.component"));
const Post = lazy(() => import("./routes/post/post.component"));

import css from "./App.module.css";
import WishList from "./routes/wishlist/wishlist.component";
import { fetchCategoriesAsync } from "./store/category/category.reducer";
import { selectIsCategoriesEmpty } from "./store/category/category.selector";
import { AppDispatch } from "./store/store";
import { fetchPostsAsync } from "./store/posts/posts.reducer";
import { selectIsPostsEmpty } from "./store/posts/posts.selector";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentUser = useSelector(selectCurrentUser);
  const isCategoriesEmpty = useSelector(selectIsCategoriesEmpty);
  const isPostsEmpty = useSelector(selectIsPostsEmpty);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      let displayName, purchases;

      if (user) {
        await createUserDocumentFromAuth(user);
        displayName = await getUserDisplayName(user.uid);
        purchases = await getUserOrderHistory(user.uid);
        purchases = purchases.sort(
          (orderA, orderB) => orderB.createdAt - orderA.createdAt
        );
      }

      // Fix for non-serializable value in payload (not string, number or standard js object)
      const newUser = user && {
        accessToken: await user.getIdToken(),
        email: user.email,
        displayName: displayName,
        uid: user.uid,
        purchases,
      };

      dispatch(setCurrentUser(newUser));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (isCategoriesEmpty) {
      dispatch(fetchCategoriesAsync());
    }
  }, []);

  useEffect(() => {
    if (isPostsEmpty) dispatch(fetchPostsAsync());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <div className={css["app-container"]}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/shop/:category?" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:articleSlug" element={<Post />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account-created" element={<AccountCreated />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route
              path="/login"
              element={
                currentUser && currentUser ? (
                  <Navigate to="/account" replace />
                ) : (
                  <Login />
                )
              }
            />
            <Route
              path="/sign-up"
              element={
                currentUser ? <Navigate to="/account" replace /> : <SignUp />
              }
            />
          </Route>
          {/*<Route path="*" element={<PageNotFound />} />*/}
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
