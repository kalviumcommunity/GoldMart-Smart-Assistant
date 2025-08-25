// src/server.js
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import multiShotRoutes from "./routes/multiShotRoutes.js";
import zeroShotRoutes from "./src/routes/zeroShotRoutes.js";
import oneShotRoutes from "./src/routes/oneshotroutes.js";
import dynamicShotRoutes from "./routes/dynamicShotRoutes.js";
import systemUserRoute from "./routes/systemUserRoute.js";
dotenv.config();

const app = express();
app.use(bodyParser.json());

// routes
app.use("/api/zeroshot", zeroShotRoutes);
app.use("/api/oneshot", oneShotRoutes);
app.use("/api/multishot", multiShotRoutes);
app.use("/api/dynamicshot", dynamicShotRoutes);
app.use("/api/ai", systemUserRoute);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
