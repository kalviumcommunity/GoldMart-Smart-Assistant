// backend/src/controllers/oneshotcontroller.js
import { callOpenRouter } from "../utils/openrouter.js";

export const oneShotPrompt = async (req, res) => {
  try {
    const { prompt } = req.body;

    // One-shot example prompt (we give a single example to guide the AI)
    const example = `
You are a chatbot that helps users buy and sell second-hand gold.
Example:
User: "I want to sell my gold chain"
Bot: "Sure! Please share the weight, purity (like 22k or 24k), and expected price."

Now continue the conversation.
    `;

    const fullPrompt = `${example}\n\nUser: ${prompt}\nBot:`;

    const result = await callOpenRouter(fullPrompt);

    res.json({ reply: result });
  } catch (error) {
    console.error("OneShot Error:", error.message);
    res.status(500).json({ error: "Failed to process one-shot prompt" });
  }
};
