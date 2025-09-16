// src/index.ts
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    app.listen(process.env.PORT || 5000, () => console.log("Bizo backend running"));
  })
  .catch(err => console.log(err));
