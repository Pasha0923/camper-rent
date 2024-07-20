import { configureStore } from "@reduxjs/toolkit";
import advertsReducer from "./slice";
import favoritesReducer from "./favorites/slice";
const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: favoritesReducer,
  },
});

export default store;
