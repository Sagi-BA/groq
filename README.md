![Alt text](https://i.imgur.com/RhRQLLN.jpg)

# 👀 Groq language model

This project demonstrates how to use the [Groq SDK](https://console.groq.com/docs/quickstart) in both Node.js and Python environments. It includes example code for sending prompts to the Groq AI and handling responses. [Rate Limits for Free Beta](https://console.groq.com/settings/limits)

The rate limits for the Free Beta are as follows:
| ID | REQUESTS PER MINUTE | REQUESTS PER DAY | TOKENS PER MINUTE |
|-------------------|---------------------|------------------|-------------------|
| gemma-7b-it | 30 | 14,400 | 15,000 |
| mixtral-8×7b-32768| 30 | 14,400 | 5,000 |
| llama3-70b-8192 | 30 | 14,400 | 6,000 |
| llama3-8b-8192 | 30 | 14,400 | 30,000 |

[![Support](https://img.shields.io/badge/linktree-white?style=for-the-badge&logo=linktree&logoColor=43E55E)](https://linktr.ee/sagib?lt_utm_source=lt_share_link#373198503)
[![Support](https://img.shields.io/badge/Buy_Me_A_Coffee-white?style=for-the-badge&logo=buymeacoffee&logoColor=FFDD00)](https://buymeacoffee.com/sagibar)
[![Support](https://img.shields.io/badge/linkedin-white?style=for-the-badge&logo=linkedin&logoColor=0A66C2)](https://www.linkedin.com/in/sagi-bar-on)
[![Support](https://img.shields.io/badge/whatsapp-white?style=for-the-badge&logo=whatsapp&logoColor=25D366)](https://api.whatsapp.com/send?phone=972549995050)
[![Support](https://img.shields.io/badge/facebook-white?style=for-the-badge&logo=facebook&logoColor=0866FF)](https://www.facebook.com/sagi.baron)
[![Support](https://img.shields.io/badge/email_me-white?style=for-the-badge&logo=gmail&logoColor=EA4335)](mailto:sagi.baron76@gmail.com)

## Prerequisites

- Node.js (v12 or higher)
- Python (v3.7 or higher)
- [Groq SDK](https://groq.dev/sdk)
- Environment variables setup (see `.env.example`)

## Setup

### Environment Variables

Create a `.env` file in the root directory of your project and add the following environment variables:

```.env
GROQ_API_KEY=your_api_key_here
GROQ_MAX_TOKENS=100
GROQ_MODEL=your_model_here
```

## Guides & News

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

## Dependencies

To install the required dependencies, run the following:

### Node.js

- dotenv: ^16.4.5
- groq-sdk: ^0.3.3

### Python

- Groq
- python-dotenv

## Examples

Here, I demonstrate how to use the [GroqClass()](src/GroqClass.js)

### 🚀 Send a Prompt Message to Groq

```python
# pythoe example
import asyncio
from GroqClass import GroqClass  # Corrected import statement

async def main():
    mygroq = GroqClass()
    userPrompt = "מי זה אנתוני הופקינס ?"
    response = await mygroq.sendsendPrompt(userPrompt)

    if response:
        print(response.choices[0].message.content)
    else:
        print("Failed to get a response from Groq.")

if __name__ == "__main__":
    asyncio.run(main())
```

```javascript
// JavaScript example
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

## License

This project is licensed under the ISC License. See the LICENSE file for details.

# I Am that I Am, I will be what I will be
