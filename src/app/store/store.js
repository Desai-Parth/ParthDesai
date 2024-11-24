import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./slice/projectsSlice";
import profileSlice from "./slice/profileSlice";
import experienceSlice from "./slice/experienceSlice";

const store = configureStore({
  reducer: {
    profile: profileSlice,
    experience: experienceSlice,
    projects: projectSlice,
  },
});

export default store;
