
import connectMongoDb from "@/app/lib/mongodb";
import Experience from "@/app/models/experience";
import { NextResponse } from "next/server";

// Ensure the database is connected
await connectMongoDb();

// Create a new experience (POST)
export async function POST(req) {
  try {
    const { position, company, companyLink, time, address, work } = await req.json(); // Parse the request body

    const experience = await Experience.create({
      position,
      company,
      companyLink,
      time,
      address,
      work,
    });

    return NextResponse.json(
      { message: "Experience created successfully", experience },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Retrieve all experiences (GET)
export async function GET() {
  try {
    const allExperiences = await Experience.find();
    return NextResponse.json({ experiences: allExperiences }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Update an existing experience (PUT)
export async function PUT(req) {
  try {
    const { id } = Object.fromEntries(new URL(req.url).searchParams); // Extract query params
    const updates = await req.json(); // Parse the request body

    const updatedExperience = await Experience.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document
    });

    if (!updatedExperience) {
      return NextResponse.json({ error: "Experience not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Experience updated successfully", experience: updatedExperience },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Delete an experience (DELETE)
export async function DELETE(req) {
  try {
    const { id } = Object.fromEntries(new URL(req.url).searchParams); // Extract query params

    const deletedExperience = await Experience.findByIdAndDelete(id);

    if (!deletedExperience) {
      return NextResponse.json({ error: "Experience not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Experience deleted successfully", experience: deletedExperience },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
