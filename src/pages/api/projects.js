import connectMongoDb from "@/lib/mongodb";
import Project from "@/models/project";

export default async function handler(request, response) {
  await connectMongoDb(); // Connect to the database

  if (request.method === "POST") {
    // Create a new project
    try {
      const {
        title,
        position,
        technical_environment,
        company_link,
        project_link,
        project_number,
        description,
      } = request.body;

      const project = await Project.create({
        title,
        position,
        technical_environment,
        company_link,
        project_link,
        project_number,
        description,
      });

      response
        .status(201)
        .json({ message: "Project created successfully", project });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else if (request.method === "GET") {
    // Retrieve all projects
    try {
      const allProjects = await Project.find();
      response.status(200).json({ projects: allProjects });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else if (request.method === "PUT") {
    // Update an existing project
    try {
      const { id } = request.query;
      const updates = request.body;

      const updatedProject = await Project.findByIdAndUpdate(id, updates, {
        new: true, // Return the updated document
      });

      if (!updatedProject) {
        return response.status(404).json({ error: "Project not found" });
      }

      response.status(200).json({
        message: "Project updated successfully",
        project: updatedProject,
      });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else if (request.method === "DELETE") {
    // Delete a project
    try {
      const { id } = request.query;

      const deletedProject = await Project.findByIdAndDelete(id);

      if (!deletedProject) {
        return response.status(404).json({ error: "Project not found" });
      }

      response.status(200).json({
        message: "Project deleted successfully",
        project: deletedProject,
      });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else {
    response.status(405).json({ error: "Method not allowed" });
  }
}
