// src/routes/zeroShotRoutes.js
const express = require("express");
const { zeroShotPrompt } = require("../controllers/zeroShotController");

const router = express.Router();

// POST /api/zeroshot
router.post("/", zeroShotPrompt);

module.exports = router;
