import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  satisfiedClients: {
    type: Number,
    required: true,
  },
  projectsCompleted: {
    type: Number,
    required: true,
  },
  yearsOfExperience: {
    type: Number,
    required: true,
  },
});

const Profile =
  mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);
export default Profile;
