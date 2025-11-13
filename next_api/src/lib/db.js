// const {USERNAME, PASSWORD} = process.env
// export const connectionString = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.hifupab.mongodb.net/Product?appName=Cluster0`

import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to local MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
