import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentUser } from "./store/user/user.reducer";

import Navigation from "./routes/navigation/navigation.component";
import Login from "./routes/authentication/login.component";
import SignUp from "./routes/authentication/sign-up.component";
import Accout from "./routes/account/account.component";
import AccoutCreated from "./routes/account-created/account-created.component";
import Checkout from "./routes/checkout/checkout.component";

import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import css from "./App.module.css";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  getUserDisplayName,
} from "./utils/firebase/firebase.utils";
import { selectCurrentUser } from "./store/user/user.selector";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
        user.displayName = await getUserDisplayName(user.uid);
      }

      // Fix for non-serializable value in payload (not string, number or standard js object)
      const pickedUser = user && {
        accessToken: user.accessToken,
        email: user.email,
        displayName: user.displayName,
      };

      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);

  return (
    <div className={css["app-container"]}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop/:category?" element={<Shop />} />
          <Route path="/account" element={<Accout />} />
          <Route path="/account-created" element={<AccoutCreated />} />
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
  );
};

export default App;
