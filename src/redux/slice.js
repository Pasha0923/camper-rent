import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";
const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    adverts: [],
    isLoading: false,
    isError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        const newAdverts = action.payload.filter(
          (newAd) => !state.adverts.some((advert) => advert._id === newAd._id)
        );
        state.adverts = [...state.adverts, ...newAdverts];
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default advertsSlice.reducer;
