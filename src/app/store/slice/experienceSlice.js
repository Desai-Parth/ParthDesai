import axiosInstance from "@/app/utils/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch experience data
export const fetchExperiences = createAsyncThunk(
  "experience/fetchExperiences",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/api/experiences");
      return response.experiences;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || "Failed to fetch experiences"
      );
    }
  }
);

const experienceSlice = createSlice({
  name: "experience",
  initialState: {
    experiences: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExperiences.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExperiences.fulfilled, (state, action) => {
        state.loading = false;
        state.experiences = action.payload;
      })
      .addCase(fetchExperiences.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default experienceSlice.reducer;
