import Products from "../models/products";

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

const getProducts = async () => {
  await Products.find();
};

const productsById = async () => {
  await Products.findById("63cd6bd7581ced6f14b5f5f6");
};

const updateProducts = async () => {
  await Products.findByIdAndUpdate(
    "63cd6dd6b9594c8780a4db6d",
    {},
    { new: true }
  );
};

const deleteProducts = async () => {
  await Products.findByIdAndDelete("63cd6dd6b9594c8780a4db6d");
};
