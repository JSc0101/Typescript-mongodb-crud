import mongoose from "mongoose";


mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/crud-type");
    console.log("Connection Succesfully to: ", db.connection.db.databaseName);
  } catch (error) {
    throw error;
  }
};
connectDB();

