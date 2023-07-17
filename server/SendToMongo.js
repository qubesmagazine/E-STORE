import express from "express";
import Product from "./model/Product.js";
import Category from "./model/Category.js";
import data from "./Data.js";

const router = express.Router();

router.post("/products", async (req, res) => {
  await Product.deleteMany({});
  const sendProducts = await Product.insertMany(data.products);
  res.send({ sendProducts });
});

router.post("/categories", async (req, res) => {
  await Category.deleteMany({});
  const sendCategory = await Category.insertMany(data.categories);
  res.send({ sendCategory });
});

export default router;