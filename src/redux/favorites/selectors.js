export const selectFavorites = (state) => state.favorites;
export const isFavorite = (state, _id) =>
  state.favorites.some((fav) => fav._id === _id);
