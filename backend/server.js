import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";

const app = express();

dotenv.config();

connectDB();

app.get("/", (req, res) => {
  res.send("service is running....");
});

app.use("/api/products", productRoutes);

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`server is running on port ${PORT}`.yellow.bold));
