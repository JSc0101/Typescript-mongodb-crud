import mongoose from "mongoose";
import Products from "./models/products";

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

const saveProducts = async () => {
  const products = new Products({
    name: "Lapto",
    price: 3000,
    amount: 4,
    date: "1991/09/24",
  });
  await products.save();
  console.log(products);
};
saveProducts();
