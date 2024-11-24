import axiosInstance from "@/app/utils/axiosInstance";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching skills
export const fetchSkills = createAsyncThunk("profile/fetchSkills", async () => {
  const response = await axiosInstance.get("/api/skills");
  return response.skills;
});

// Async thunk for fetching profile
export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async () => {
    const response = await axiosInstance.get("/api/profile");
    return response.profiles[0];
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    skills: [],
    profile: {
      satisfiedClients: 0,
      projectsCompleted: 0,
    },
    profileLoading: true,
    skillsLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Skills fetching
      .addCase(fetchSkills.pending, (state) => {
        state.skillsLoading = true;
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.skillsLoading = false;
        state.skills = action.payload;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.skillsLoading = false;
        state.error = action.error.message;
      })
      // Profile fetching
      .addCase(fetchProfile.pending, (state) => {
        state.profileLoading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profileLoading = false;
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.profileLoading = false;
        state.error = action.error.message;
      });
  },
});

export default profileSlice.reducer;
