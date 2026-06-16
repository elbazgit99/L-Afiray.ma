import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import os from "os";
import { fileURLToPath } from 'url';

import producerRoutes from "./Routes/Producer.route.js";
import CarModelRouter from "./Routes/CarModel.route.js";
import CarPartsRouter from "./Routes/CarParts.route.js";
import userRoutes from "./Routes/User.route.js";
import rolesRoutes from "./Routes/Roles.route.js";
import chatRoutes from "./Routes/Chat.route.js";
import moderationRoutes from "./Routes/Moderation.route.js";
import brandRoutes from "./Routes/Brand.route.js";
import saleRoutes from "./Routes/Sale.route.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve static files from uploads directory (handles local uploads vs Vercel /tmp uploads)
const uploadsDir = process.env.VERCEL 
  ? path.join(os.tmpdir(), 'uploads') 
  : path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadsDir));

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000', 'http://127.0.0.1:5173', 'http://127.0.0.1:5174'],
  credentials: true
}));

// Basic test route
app.get("/", (req, res) => {
  res.send("L'Afiray.ma Server is running!");
});

// API routes
app.use("/api/users", userRoutes);
app.use("/api/roles", rolesRoutes);
app.use("/api/producers", producerRoutes);
app.use("/api/models", CarModelRouter);
app.use("/api/carparts", CarPartsRouter);
app.use("/api/chat", chatRoutes);
app.use("/api/moderation", moderationRoutes);
app.use("/api/brands", brandRoutes);
app.use("/api/sales", saleRoutes);

export default app;
