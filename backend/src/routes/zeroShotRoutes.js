// backend/src/routes/zeroshotRoutes.js
import express from "express";
import { zeroShotPrompt } from "../controllers/zeroshotController.js";

const router = express.Router();

// POST request to send prompt
router.post("/api/zeroshot", zeroShotPrompt);

export default router;
