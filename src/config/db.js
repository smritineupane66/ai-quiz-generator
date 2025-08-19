import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Connect to MongoDB
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error("DB Connection Failed", error);
    process.exit(1); // Stop server if DB fails
  }
};

export default connectDB;
