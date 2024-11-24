import connectMongoDb from "@/app/lib/mongodb";
import Skill from "@/app/models/skill";
import { NextResponse } from "next/server";

// Ensure the database is connected
await connectMongoDb();

// Create a new skill (POST)
export async function POST(req) {
  try {
    const { name, x, y } = await req.json(); // Parse the request body

    const skill = await Skill.create({ name, x, y });

    return NextResponse.json(
      { message: "Skill created successfully", skill },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Retrieve all skills (GET)
export async function GET() {
  try {
    const allSkills = await Skill.find();
    return NextResponse.json({ skills: allSkills }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Update an existing skill (PUT)
export async function PUT(req) {
  try {
    const { id } = Object.fromEntries(new URL(req.url).searchParams); // Extract query params
    const updates = await req.json(); // Parse the request body

    const updatedSkill = await Skill.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document
    });

    if (!updatedSkill) {
      return NextResponse.json({ error: "Skill not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Skill updated successfully", skill: updatedSkill },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Delete a skill (DELETE)
export async function DELETE(req) {
  try {
    const { id } = Object.fromEntries(new URL(req.url).searchParams); // Extract query params

    const deletedSkill = await Skill.findByIdAndDelete(id);

    if (!deletedSkill) {
      return NextResponse.json({ error: "Skill not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Skill deleted successfully", skill: deletedSkill },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
