// JavaScript example

// Import the GroqManager class using CommonJS syntax
const GroqClass = require("./GroqClass");

// Main function to send a user prompt and handle the response
async function main() {
  const mygroq = new GroqClass();
  const userPrompt = "מי זה אנתוני הופקינס ?";
  const response = await mygroq.sendPrompt(userPrompt);

  if (response) {
    console.log(response.choices[0]?.message?.content || "");
  } else {
    console.error("Failed to get a response from Groq.");
  }
}

//test
// Execute the main function
main().catch(console.error);
