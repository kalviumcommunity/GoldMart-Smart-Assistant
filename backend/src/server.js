// src/server.js
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const zeroShotRoutes = require("./routes/zeroShotRoutes");

dotenv.config();

const app = express();
app.use(bodyParser.json());

// routes
app.use("/api/zeroshot", zeroShotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
