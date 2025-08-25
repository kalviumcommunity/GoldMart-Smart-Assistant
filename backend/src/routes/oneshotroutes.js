// backend/src/routes/oneshotRoutes.js
import express from "express";
import  {oneShotPrompt}  from "../controllers/oneshotcontroller.js";

const router = express.Router();

router.post("/oneshot", oneShotPrompt);

export default router;
