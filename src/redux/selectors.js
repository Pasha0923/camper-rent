export const selectAllAdverts = (state) => state.adverts.adverts;
export const selectIsLoading = (state) => state.adverts.isLoading;
export const selectError = (state) => state.adverts.error;
export const selectAdvertsById = (state, advertId) =>
  state.adverts.adverts.find((advert) => advert._id === advertId);
