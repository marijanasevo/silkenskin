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
import css from "./App.module.css";

import { fetchCategoriesAsync } from "./store/category/category.reducer";
import { selectIsCategoriesEmpty } from "./store/category/category.selector";
import { AppDispatch } from "./store/store";
import { fetchPostsAsync } from "./store/posts/posts.reducer";
import { selectIsPostsEmpty } from "./store/posts/posts.selector";

const PageNotFound = lazy(
  () => import("./routes/page-not-found/page-not-found.component")
);

const ShippingReturns = lazy(
  () => import("./routes/shipping-returns/shipping-returns.component")
);

const TermsOfService = lazy(
  () => import("./routes/terms-of-service/terms-of-service.somponent")
);

const PrivacyPolicy = lazy(
  () => import("./routes/privacy-policy/privacy-policy.component")
);

const Contact = lazy(() => import("./routes/contact/contact.component"));

const Account = lazy(() => import("./routes/account/account.component"));
const AccountCreated = lazy(
  () => import("./routes/account-created/account-created.component")
);
const Login = lazy(() => import("./routes/authentication/login.component"));
const SignUp = lazy(() => import("./routes/authentication/sign-up.component"));
const WishList = lazy(() => import("./routes/wishlist/wishlist.component"));
const Post = lazy(() => import("./routes/post/post.component"));
const Blog = lazy(() => import("./routes/blog/blog.component"));
const About = lazy(() => import("./routes/about/about.component"));
const OrderMade = lazy(
  () => import("./routes/order-made/order-made.component")
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const Product = lazy(() => import("./routes/product/product.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Home = lazy(() => import("./routes/home/home.component"));
const Navigation = lazy(
  () => import("./routes/navigation/navigation.component")
);

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
            <Route path="/order-made" element={<OrderMade />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
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
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/shipping-returns" element={<ShippingReturns />} />
            <Route path="/*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
