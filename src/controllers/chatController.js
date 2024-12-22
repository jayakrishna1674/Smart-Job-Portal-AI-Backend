const OpenAI = require("openai");
require('dotenv').config();
// Configure OpenAI
// const configuration = new Configuration({
//   apiKey: process.env.CHATGPT_API_KEY,
// });
const openai = new OpenAI({
  apiKey: process.env.CHATGPT_API_KEY,
});

// Handle ChatGPT Queries
exports.handleChat = async (req, res) => {
  const { query } = req.body;
    console.log(req.body);
  if (!query) {
    return res.status(400).json({ error: "Query is required" });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use the appropriate model
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant for job seekers.",
        },
        { role: "user", content: query },
      ],
    });

    const reply = response.data.choices[0].message.content.trim();
    res.status(200).json({ reply });
  } catch (error) {
    console.error("Error with ChatGPT API:", error.message);
    res.status(500).json({ error: "Failed to fetch response from ChatGPT" });
  }
};
