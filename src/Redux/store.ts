import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/sclice/cart";
import { productApi } from "./rtk-querry/rtkSllice";

export const store = configureStore({
  reducer: {
    cart: counterReducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
