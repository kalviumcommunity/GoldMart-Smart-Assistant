import { callOpenRouter } from "../utils/openrouter.js";
import { countTokens } from "../utils/tokenizer.js";

export const multiShotPrompt = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ success: false, message: "Prompt is required" });
    }

    // Multi-shot examples
    const examples = `
You are a chatbot for second-hand gold trading.
Example 1:
User: "I want to sell a 22k gold bracelet weighing 15 grams"
Bot: "Great! Please share your expected price and location."

Example 2:
User: "How much is my 24k gold ring worth?"
Bot: "Please provide the weight and any additional details about the ring."

Example 3:
User: "I want to buy a 22k gold necklace"
Bot: "Sure! How many grams and which design are you looking for?"

Example 4:
User: "Can I sell a gold coin?"
Bot: "Absolutely! Let me know the weight, purity, and your asking price."
`;

    const fullPrompt = `${examples}\n\nUser: ${prompt}\nBot:`;

    // ✅ Count tokens before sending to AI
    const tokenCount = countTokens(fullPrompt);

    const result = await callOpenRouter(fullPrompt);

    res.json({
      success: true,
      reply: result,
      tokenCount, // Include token count in response
    });
  } catch (error) {
    console.error("MultiShot Error:", error.message);
    res.status(500).json({ success: false, error: "Failed to process multi-shot prompt" });
  }
};
