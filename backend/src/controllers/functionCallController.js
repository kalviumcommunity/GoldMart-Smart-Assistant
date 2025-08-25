import axios from "axios";
import { getGoldPrice, suggestSellingMethod } from "../utils/goldFunctions.js";

export const functionCallPrompt = async (req, res) => {
  try {
    const { userPrompt, weight } = req.body;

    if (!userPrompt) {
      return res.status(400).json({ success: false, message: "User prompt is required" });
    }

    // Call AI with function definitions
    const response = await axios.post(
      "https://api.openrouter.ai/v1/chat/completions",
      {
        model: "gpt-4.1-mini",
        messages: [{ role: "user", content: userPrompt }],
        functions: [
          {
            name: "getGoldPrice",
            description: "Calculates the estimated price of gold based on weight",
            parameters: {
              type: "object",
              properties: {
                weightInGrams: { type: "number", description: "Weight of gold in grams" }
              },
              required: ["weightInGrams"]
            }
          },
          {
            name: "suggestSellingMethod",
            description: "Suggests the best way to sell second-hand gold",
            parameters: { type: "object", properties: {} }
          }
        ],
        function_call: "auto" // AI can choose which function to call
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    // Extract AI function call
    const choice = response.data.choices[0];
    if (choice.message.function_call) {
      const { name, arguments: args } = choice.message.function_call;
      let result;
      const parsedArgs = JSON.parse(args);

      if (name === "getGoldPrice") {
        result = getGoldPrice(parsedArgs.weightInGrams || weight || 10); // fallback 10g
      } else if (name === "suggestSellingMethod") {
        result = suggestSellingMethod();
      }

      return res.json({ success: true, functionCalled: name, result });
    }

    res.json({ success: true, message: choice.message.content });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

