import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: process.env.dbName || "school",
    };
    // await mongoose.connect(DATABASE_URL);
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Database connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
