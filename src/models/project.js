import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  position: { type: String, required: true },
  technical_environment: { type: String, required: true },
  company_link: { type: String, required: true },
  project_link: { type: String, required: false },
  project_number: { type: Number, required: true },
  description: { type: String, required: true },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;
