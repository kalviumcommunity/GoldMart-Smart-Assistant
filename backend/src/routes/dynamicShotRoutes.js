// backend/src/routes/dynamicShotRoutes.js
import express from "express";
import { dynamicShotPrompt } from "../controllers/dynamicShotController.js";

const router = express.Router();

// POST /api/dynamicshot
router.post("/", dynamicShotPrompt);

export default router;
