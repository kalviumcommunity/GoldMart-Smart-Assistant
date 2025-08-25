import axios from "axios";

export const systemUserPrompt = async (req, res) => {
  try {
    const { systemPrompt, userPrompt, topK } = req.body;

    if (!userPrompt) {
      return res.status(400).json({ success: false, message: "User prompt is required" });
    }

    // Default top-k responses
    const k = topK || 1;

    const response = await axios.post(
      "https://api.openrouter.ai/v1/chat/completions",
      {
        model: "gpt-4.1-mini",
        messages: [
          { role: "system", content: systemPrompt || "You are a helpful assistant for second-hand gold sales." },
          { role: "user", content: userPrompt }
        ],
        n: k // top-k completions
      },
      {
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Extract the responses
    const responses = response.data.choices.map(choice => choice.message.content);

    res.json({ success: true, responses });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
