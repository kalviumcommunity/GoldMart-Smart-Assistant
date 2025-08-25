import express from "express";
import zeroShotPrompt from "../controllers/zeroShotController.js"; // ✅ default import

const router = express.Router();

// POST /api/zeroshot
router.post("/", zeroShotPrompt);

export default router;
