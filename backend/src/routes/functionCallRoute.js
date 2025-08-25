import express from "express";
import { functionCallPrompt } from "../controllers/functionCallController.js";

const router = express.Router();

router.post("/function-call", functionCallPrompt);

export default router;
