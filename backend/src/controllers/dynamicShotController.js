// backend/src/controllers/dynamicShotController.js
import { callOpenRouter } from "../utils/openrouter.js";

/**
 * Example: Dynamic shots from a database, JSON file, or in-memory array.
 * Here, we simulate dynamic examples.
 */
const dynamicExamples = [
  {
    user: "I want to sell a 22k gold bracelet weighing 15 grams",
    bot: "Great! Please share your expected price and location."
  },
  {
    user: "How much is my 24k gold ring worth?",
    bot: "Please provide the weight and any additional details about the ring."
  },
  {
    user: "I want to buy a 22k gold necklace",
    bot: "Sure! How many grams and which design are you looking for?"
  },
  {
    user: "Can I sell a gold coin?",
    bot: "Absolutely! Let me know the weight, purity, and your asking price."
  }
];

export const dynamicShotPrompt = async (req, res) => {
  try {
    const { prompt, numExamples = 2 } = req.body; // numExamples optional

    if (!prompt) {
      return res.status(400).json({ success: false, message: "Prompt is required" });
    }

    // Pick last `numExamples` from dynamicExamples (or could use random selection)
    const selectedExamples = dynamicExamples.slice(-numExamples);

    let examplesText = "You are a chatbot for second-hand gold trading.\n";
    selectedExamples.forEach((ex, idx) => {
      examplesText += `Example ${idx + 1}:\nUser: "${ex.user}"\nBot: "${ex.bot}"\n\n`;
    });

    const fullPrompt = `${examplesText}User: "${prompt}"\nBot:`;

    const result = await callOpenRouter(fullPrompt);

    res.json({
      success: true,
      reply: result,
    });
  } catch (error) {
    console.error("DynamicShot Error:", error.message);
    res.status(500).json({ success: false, error: "Failed to process dynamic-shot prompt" });
  }
};
