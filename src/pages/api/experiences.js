import connectMongoDb from "@/lib/mongodb";
import Experience from "@/models/experience";

export default async function handler(request, response) {
  await connectMongoDb(); // Connect to the database

  if (request.method === "POST") {
    // Create a new experience
    try {
      const { position, company, companyLink, time, address, work } =
        request.body;

      const experience = await Experience.create({
        position,
        company,
        companyLink,
        time,
        address,
        work,
      });

      response
        .status(201)
        .json({ message: "Experience created successfully", experience });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else if (request.method === "GET") {
    // Retrieve all experiences
    try {
      const allExperiences = await Experience.find();
      response.status(200).json({ experiences: allExperiences });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else if (request.method === "PUT") {
    // Update an existing experience
    try {
      const { id } = request.query;
      const updates = request.body;

      const updatedExperience = await Experience.findByIdAndUpdate(id, updates, {
        new: true, // Return the updated document
      });

      if (!updatedExperience) {
        return response.status(404).json({ error: "Experience not found" });
      }

      response.status(200).json({
        message: "Experience updated successfully",
        experience: updatedExperience,
      });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else if (request.method === "DELETE") {
    // Delete an experience
    try {
      const { id } = request.query;

      const deletedExperience = await Experience.findByIdAndDelete(id);

      if (!deletedExperience) {
        return response.status(404).json({ error: "Experience not found" });
      }

      response.status(200).json({
        message: "Experience deleted successfully",
        experience: deletedExperience,
      });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else {
    response.status(405).json({ error: "Method not allowed" });
  }
}
