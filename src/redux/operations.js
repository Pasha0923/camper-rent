import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://660ef702356b87a55c509176.mockapi.io/";

export const fetchAdverts = createAsyncThunk(
  "adverts/get",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=${page}&limit=4`);
      return response.data;
    } catch (error) {
      console.error("Error fetching campers:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
