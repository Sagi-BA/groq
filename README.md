![Alt text](https://media.licdn.com/dms/image/D4D16AQEbR646hmY3bg/profile-displaybackgroundimage-shrink_350_1400/0/1713437135249?e=1721260800&v=beta&t=OQyEZRB5hLvjqYXpHNpFol8GptSa3h0WArFmYQPHEUc)

# 👇 groq - language model

[![](https://img.shields.io/badge/Node.js-white?style=for-the-badge&logo=nodedotjs&logoColor=5FA04E)](https://nodejs.org/)

## 👇 Support links

[![Support](https://img.shields.io/badge/linktree-white?style=for-the-badge&logo=linktree&logoColor=43E55E)](https://linktr.ee/sagib?lt_utm_source=lt_share_link#373198503)
[![Support](https://img.shields.io/badge/Buy_Me_A_Coffee-white?style=for-the-badge&logo=buymeacoffee&logoColor=FFDD00)](https://buymeacoffee.com/sagibar)
[![Support](https://img.shields.io/badge/linkedin-white?style=for-the-badge&logo=linkedin&logoColor=0A66C2)](https://www.linkedin.com/in/sagi-bar-on)
[![Support](https://img.shields.io/badge/whatsapp-white?style=for-the-badge&logo=whatsapp&logoColor=25D366)](https://api.whatsapp.com/send?phone=972549995050)
[![Support](https://img.shields.io/badge/facebook-white?style=for-the-badge&logo=facebook&logoColor=0866FF)](https://www.facebook.com/sagi.baron)
[![Support](https://img.shields.io/badge/email_me-white?style=for-the-badge&logo=gmail&logoColor=EA4335)](mailto:sagi.baron76@gmail.com)

## 👀 What Do I See?

I created a class to ask questions to an AI and get responses. I'm using the [Groq API](https://groq.com/) - a powerful language model.

[Rate Limits for Free Beta](https://console.groq.com/settings/limits)

The rate limits for the Free Beta are as follows:
| ID | REQUESTS PER MINUTE | REQUESTS PER DAY | TOKENS PER MINUTE |
|-------------------|---------------------|------------------|-------------------|
| gemma-7b-it | 30 | 14,400 | 15,000 |
| mixtral-8×7b-32768| 30 | 14,400 | 5,000 |
| llama3-70b-8192 | 30 | 14,400 | 6,000 |
| llama3-8b-8192 | 30 | 14,400 | 30,000 |

## 👉 Guides & News

To get started, follow these steps:

1. Clone the repository using:

```shell
git clone https://github.com/Sagi-BA/groq.git
```

2. Install the required dependencies by running:

```shell
npm install --omit=dev
```

3. Create a .env file in the root folder of the project. Use the [env.example](env.example) file as a template and add your environment variables.

4. Register on the Groq platform and create an [API Key](https://console.groq.com/keys)

5. To test the application, run the [app.js](app.js) file. You can change the starting JavaScript file by modifying the [launch.json](.vscode/launch.json) configuration.

## 👉 Dependencies

To install the required dependencies, run the following commands:

```shell
npm install dotenv --save
npm install groq-sdk --save
```

You can find the complete list of dependencies in the [package.json](package.json)
file.

## 👉 Authorization

FREE

## 👉 Authentication

FREE

## 👉 Examples

Here, I demonstrate how to use the [GroqClass()](src/GroqClass.js)

### 🚀 Send a Prompt Message to Groq

```javascript
// Import the GroqManager class using CommonJS syntax
const GroqClass = require("./GroqClass");

// Main function to send a user prompt and handle the response
async function main() {
  const mygroq = new GroqClass();
  const userPrompt = "Who is Anthony Hopkins?";

  const response = await mygroq.sendPrompt(userPrompt);

  if (response) {
    console.log(response.choices[0]?.message?.content || "");
  } else {
    console.error("Failed to get a response from Groq.");
  }
}

// Call the main function
main().catch(console.error);
```

# I Am that I Am, I will be what I will be
