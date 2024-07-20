import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";
const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    adverts: [],
    // status: "idle",
    isLoading: false, // Изменение на использование isLoading
    isError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.isLoading = true;
        // state.status = "loading";
        state.isError = null; // Сброс ошибки при начале загрузки
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        // state.status = "succeeded";
        state.isLoading = false; // Установка isLoading в false при успешной загрузке
        const newAdverts = action.payload.filter(
          (newAd) => !state.adverts.some((advert) => advert._id === newAd._id)
        );
        state.adverts = [...state.adverts, ...newAdverts];
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        // state.status = "failed";
        state.isLoading = false; // Установка isLoading в false при ошибке загрузки
        state.isError = action.error.message;
      });
  },
});

export default advertsSlice.reducer;
