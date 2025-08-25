// src/controllers/zeroShotController.js

const zeroShotPrompt = (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ success: false, message: "Prompt is required" });
  }

  // Dummy response for now
  res.json({
    success: true,
    inputPrompt: prompt,
    message: `This is a Zero-Shot Chatbot response for: "${prompt}"`
  });
};

export default zeroShotPrompt;
