// backend/src/controllers/zeroshotController.js
import axios from "axios";

// Make sure your API key is in .env
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

export const zeroShotPrompt = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ success: false, message: "Prompt is required" });
    }

    // Call OpenRouter API
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "gpt-4.1-mini",       // AI model
        messages: [
          { role: "system", content: "You are an assistant for second-hand gold buyers and sellers." },
          { role: "user", content: prompt }
        ],
        stop: ["\nUser:", "\nSystem:"], // <-- Stop sequence
        temperature: 0.7,                // randomness
        max_tokens: 300                  // response length limit
      },
      {
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    // Extract AI reply
    const aiReply = response.data.choices[0].message.content;

    res.json({ success: true, reply: aiReply });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
