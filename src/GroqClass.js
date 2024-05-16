require("dotenv").config();

// Load Groq SDK using the 'groq-sdk' package
const Groq = require("groq-sdk");

class GroqClass {
  constructor() {
    this.groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  }

  /**
   * Asynchronously sends a user prompt to the GROQ AI and returns the chat completion.
   * @param {string} userPrompt - The user's input to send to the AI.
   * @returns {Promise<Object|boolean>} A promise that resolves to the AI's response or false if an error occurs.
   */
  async sendPrompt(userPrompt) {
    const maxTokens = parseInt(process.env.GROQ_MAX_TOKENS, 10);
    if (isNaN(maxTokens)) return false;

    console.info(`Start: groq sendPrompt(${userPrompt})`);

    try {
      const chatCompletion = await this.groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "Return an answer only in the same language you were asked!",
          },
          { role: "user", content: userPrompt },
        ],
        model: process.env.GROQ_MODEL,
        temperature: 1,
        max_tokens: maxTokens,
        top_p: 1,
        stop: null,
      });

      return chatCompletion;
    } catch (err) {
      console.error(`Error processing groq: ${err}`);
      return false;
    }
  }
}
module.exports = GroqClass;
