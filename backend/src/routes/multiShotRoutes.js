// backend/src/routes/multiShotRoutes.js
import express from "express";
import { multiShotPrompt } from "../controllers/multiShotController.js";

const router = express.Router();

// POST /api/multishot
router.post("/", multiShotPrompt);

export default router;
