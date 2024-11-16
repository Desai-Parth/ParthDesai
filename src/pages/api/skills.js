import connectMongoDb from '@/lib/mongodb';
import Skill from '@/models/skill';

export default async function handler(request, response) {
  await connectMongoDb(); // Connect to the database

  if (request.method === 'POST') {
    // Create a new skill
    try {
      const { name, x, y } = request.body;

      const skill = await Skill.create({ name, x, y });

      response.status(201).json({ message: 'Skill created successfully', skill });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else if (request.method === 'GET') {
    // Retrieve all skills
    try {
      const allSkills = await Skill.find();
      response.status(200).json({ skills: allSkills });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else if (request.method === 'PUT') {
    // Update an existing skill
    try {
      const { id } = request.query;
      const updates = request.body;

      const updatedSkill = await Skill.findByIdAndUpdate(id, updates, { new: true });

      if (!updatedSkill) {
        return response.status(404).json({ error: 'Skill not found' });
      }

      response.status(200).json({ message: 'Skill updated successfully', skill: updatedSkill });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else if (request.method === 'DELETE') {
    // Delete a skill
    try {
      const { id } = request.query;

      const deletedSkill = await Skill.findByIdAndDelete(id);

      if (!deletedSkill) {
        return response.status(404).json({ error: 'Skill not found' });
      }

      response.status(200).json({ message: 'Skill deleted successfully', skill: deletedSkill });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else {
    response.status(405).json({ error: 'Method not allowed' });
  }
}
