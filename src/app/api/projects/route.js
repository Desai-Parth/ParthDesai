import connectMongoDb from "@/app/lib/mongodb";
import Project from "@/app/models/project";
import { NextResponse } from "next/server";

// Ensure DB connection
await connectMongoDb();

// Create a new project (POST)
export async function POST(req) {
  try {
    const {
      title,
      position,
      technical_environment,
      project_link,
      description,
    } = await req.json();

    // Validate required fields
    if (!title || !position || !technical_environment || !description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const project = new Project({
      title,
      position,
      technical_environment,
      project_link,
      description,
    });

    await project.save();
    return NextResponse.json(
      { message: "Project created successfully", project },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Get all projects (GET)
export async function GET() {
  try {
    const projects = await Project.find();
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Update a project by ID (PUT)
export async function PUT(req) {
  try {
    const { id } = Object.fromEntries(new URL(req.url).searchParams); // Extract query params
    const updates = await req.json();

    if (!id) {
      return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    const updatedProject = await Project.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Project updated successfully", project: updatedProject },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Delete a project by ID (DELETE)
export async function DELETE(req) {
  try {
    const { id } = Object.fromEntries(new URL(req.url).searchParams); // Extract query params

    if (!id) {
      return NextResponse.json({ error: "Project ID is required" }, { status: 400 });
    }

    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Project deleted successfully", project: deletedProject },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
