import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  position: { type: String, required: true },
  company: { type: String, required: true },
  companyLink: { type: String },
  time: { type: String, required: true },
  address: { type: String },
  work: { type: String, required: true },
});

const Experience =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);

export default Experience;
