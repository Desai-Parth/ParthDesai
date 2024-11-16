import connectMongoDb from "@/lib/mongodb";
import Profile from "@/models/profile";

export default async function handler(request, response) {
  await connectMongoDb(); // Connect to the database

  if (request.method === "POST") {
    // Create a new profile
    try {
      const { satisfiedClients, projectsCompleted, yearsOfExperience } =
        request.body;

      const profile = await Profile.create({
        satisfiedClients,
        projectsCompleted,
        yearsOfExperience,
      });

      response
        .status(201)
        .json({ message: "Profile created successfully", profile });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else if (request.method === "GET") {
    // Retrieve all profiles
    try {
      const allProfiles = await Profile.find();
      response.status(200).json({ profiles: allProfiles });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else if (request.method === "PUT") {
    // Update an existing profile
    try {
      const { id } = request.query;
      const updates = request.body;

      const updatedProfile = await Profile.findByIdAndUpdate(id, updates, {
        new: true, // Return the updated document
      });

      if (!updatedProfile) {
        return response.status(404).json({ error: "Profile not found" });
      }

      response.status(200).json({
        message: "Profile updated successfully",
        profile: updatedProfile,
      });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else if (request.method === "DELETE") {
    // Delete a profile
    try {
      const { id } = request.query;

      const deletedProfile = await Profile.findByIdAndDelete(id);

      if (!deletedProfile) {
        return response.status(404).json({ error: "Profile not found" });
      }

      response.status(200).json({
        message: "Profile deleted successfully",
        profile: deletedProfile,
      });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else {
    response.status(405).json({ error: "Method not allowed" });
  }
}
