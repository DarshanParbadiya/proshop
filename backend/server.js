import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from 'colors'

const app = express();

dotenv.config();

connectDB()

app.get("/", (req, res) => {
  res.send("service is running....");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`server is running on port ${PORT}`.yellow.bold));
