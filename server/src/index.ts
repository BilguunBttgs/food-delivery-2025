import cors from "cors";
import { configDotenv } from "dotenv";
import { connectMongoDB } from "./database";
import express, { Application } from "express";
import {
  foodRouter,
  authenticationRouter,
  foodCategoryRouter,
  foodOrderRouter,
} from "./routers";

configDotenv();
connectMongoDB();

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/food", foodRouter);
app.use("/auth", authenticationRouter);
app.use("/food-order", foodOrderRouter);
app.use("/food-category", foodCategoryRouter);

app.listen(PORT, () =>
  console.log(`Server is Running on http://localhost:${PORT}`)
);
