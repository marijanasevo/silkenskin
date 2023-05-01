import { configureStore, Middleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
  blacklist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  blacklist: ["user", "categories", "reviews", "posts"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  (middleWare): middleWare is Middleware => Boolean(middleWare)
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "reviews/fetchReviewsAsync/fulfilled",
          "posts/fetchPostsAsync/fulfilled",
        ],
        ignoredPaths: ["reviews", "posts"],
      },
    }).concat(middleWares),
});

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
