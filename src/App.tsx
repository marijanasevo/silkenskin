import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentUser } from "./store/user/user.reducer";
import { selectCurrentUser } from "./store/user/user.selector";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  getUserDisplayName,
} from "./utils/firebase/firebase.utils";

import Spinner from "./components/spinner/spinner.component";
const Navigation = lazy(
  () => import("./routes/navigation/navigation.component")
);
const Login = lazy(() => import("./routes/authentication/login.component"));
const SignUp = lazy(() => import("./routes/authentication/sign-up.component"));
const Account = lazy(() => import("./routes/account/account.component"));
const AccountCreated = lazy(
  () => import("./routes/account-created/account-created.component")
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));

const Home = lazy(() => import("./routes/home/home.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));
// const Product = lazy(() => import("./routes/product/product.component"));
import Product from "./routes/product/product.component";
import css from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      let displayName;

      if (user) {
        await createUserDocumentFromAuth(user);
        displayName = await getUserDisplayName(user.uid);
      }

      // Fix for non-serializable value in payload (not string, number or standard js object)
      const pickedUser = user && {
        accessToken: await user.getIdToken(),
        email: user.email,
        displayName: displayName,
        uid: user.uid,
      };

      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <div className={css["app-container"]}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/shop/:category?" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
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
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
