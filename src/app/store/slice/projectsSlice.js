import axiosInstance from "@/app/utils/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await axiosInstance.get("/api/projects");
    return response.projects;
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default projectsSlice.reducer;
