import connectMongoDb from "@/app/lib/mongodb";
import Profile from "@/app/models/profile";
import { NextResponse } from "next/server";

// Connect to the database
await connectMongoDb();

// Create a new profile (POST)
export async function POST(req) {
  try {
    const { satisfiedClients, projectsCompleted, yearsOfExperience } =
      await req.json();

    const profile = await Profile.create({
      satisfiedClients,
      projectsCompleted,
      yearsOfExperience,
    });

    return NextResponse.json(
      { message: "Profile created successfully", profile },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Retrieve all profiles (GET)
export async function GET() {
  try {
    const allProfiles = await Profile.find();
    return NextResponse.json({ profiles: allProfiles }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Update an existing profile (PUT)
export async function PUT(req) {
  try {
    const { id } = Object.fromEntries(new URL(req.url).searchParams); // Extract the ID from query params
    const updates = await req.json();

    const updatedProfile = await Profile.findByIdAndUpdate(id, updates, {
      new: true, // Return the updated document
    });

    if (!updatedProfile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Profile updated successfully", profile: updatedProfile },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Delete a profile (DELETE)
export async function DELETE(req) {
  try {
    const { id } = Object.fromEntries(new URL(req.url).searchParams); // Extract the ID from query params

    const deletedProfile = await Profile.findByIdAndDelete(id);

    if (!deletedProfile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Profile deleted successfully", profile: deletedProfile },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
