import express from "express";
import { systemUserPrompt } from "../controllers/systemUserPromptController.js";

const router = express.Router();

router.post("/system-user", systemUserPrompt);

export default router;
