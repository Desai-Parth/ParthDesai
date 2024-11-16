import mongoose from "mongoose";

const connection = {
  isConnected: 0,
};

const connectMongoDb = async () => {
  if (connection.isConnected) {
    console.log("MongoDb connection already established.");
    return;
  }
  try {
    console.log("Connecting to MongoDB...");
    const db = await mongoose.connect(process.env.MONGODB_URL);
    connection.isConnected = db.connections[0].readyState;
    console.log("MongoDb connected successfully! :)");
  } catch (error) {
    console.log("Error connecting to MongoDb: " + error.message);
  }
};

export default connectMongoDb;
