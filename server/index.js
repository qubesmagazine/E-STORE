import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { notFound, errorHandler } from "./config/error.js";
import sendProducts from "./SendToMongo.js";
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/authUser.js";
import searchRoutes from "./routes/search.js";
import categoryRoutes from "./routes/category.js";
import orderRoutes from './routes/orders.js'

const app = express();
dotenv.config();
app.use(cors());

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Mongodb connected successfully");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(express.json());

//api
app.use("/api/import", sendProducts);

app.use("/api/products", productRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/catalog", searchRoutes);

app.use("/api/categories", categoryRoutes);
app.use("/api/orders", orderRoutes);

//
app.get("/", (req, res) => {
  res.send("app is running");
});

//error handler
app.use(errorHandler);
app.use(notFound);

//
app.listen(5000, () => {
  connect();
  console.log("connected to server");
});