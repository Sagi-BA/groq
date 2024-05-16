![Alt text](https://media.licdn.com/dms/image/D4D16AQEbR646hmY3bg/profile-displaybackgroundimage-shrink_350_1400/0/1713437135249?e=1721260800&v=beta&t=OQyEZRB5hLvjqYXpHNpFol8GptSa3h0WArFmYQPHEUc)

# groq - language model 👇

[![](https://img.shields.io/badge/Node.js-white?style=for-the-badge&logo=nodedotjs&logoColor=5FA04E)](https://nodejs.org/)

## Support links

[![Support](https://img.shields.io/badge/linktree-white?style=for-the-badge&logo=linktree&logoColor=43E55E)](https://linktr.ee/sagib?lt_utm_source=lt_share_link#373198503)
[![Support](https://img.shields.io/badge/Buy_Me_A_Coffee-white?style=for-the-badge&logo=buymeacoffee&logoColor=FFDD00)](https://www.linkedin.com/in/sagi-bar-on)
[![Support](https://img.shields.io/badge/linkedin-white?style=for-the-badge&logo=linkedin&logoColor=0A66C2)](https://www.linkedin.com/in/sagi-bar-on)
[![Support](https://img.shields.io/badge/whatsapp-white?style=for-the-badge&logo=whatsapp&logoColor=25D366)](https://api.whatsapp.com/send?phone=972549995050)
[![Support](https://img.shields.io/badge/facebook-white?style=for-the-badge&logo=facebook&logoColor=0866FF)](https://www.facebook.com/sagi.baron)
[![Support](https://img.shields.io/badge/email_me-white?style=for-the-badge&logo=gmail&logoColor=EA4335)](mailto:sagi.baron76@gmail.com)

## 👀 What do i see ?
A class i made to use [Groq API](https://groq.com/) - a language model

## 👉 Guides & News

run [app.js](app.js) for testing
Note:

## 👉 Dependencies Installations

```shell
npm install dotenv --save
npm install groq-sdk --save
```

## Authorization

FREE

## Authentication

FREE

## Examples

Here i show how to use [GroqClass()](src/GroqClass.js)

### Send prompt message to groq

Use common js

```js
const whatsAppClient = require("@green-api/whatsapp-api-client");

const restAPI = whatsAppClient.restAPI({
  idInstance: "YOUR_ID_INSTANCE",
  apiTokenInstance: "YOUR_API_TOKEN_INSTANCE",
});

restAPI.message
  .sendMessage("79999999999@c.us", null, "hello world")
  .then((data) => {
    console.log(data);
  });
```

For Node.js app, you probably have to add in `package.json` property `"type": "module"`. Notice that
all examples below are ES6 based

```js

<script src="https://unpkg.com/@green-api/whatsapp-api-client/lib/whatsapp-api-client.min.js"></script>
<script>
  const groqManager = new GroqManager();
  const userPrompt = "Who is Anthony Hopkins?";
  const response = await groqManager.sendPrompt(userPrompt);

  if (response)
  {
    console.log(response.choices[0]?.message?.content || "");
  }
  else{
    console.error("Failed to get a response from Groq.");
  }
</script>
```

## Installations

- Live Server
- Start Live Server: "Open with Live Server"

## Deploying development environment

Any help with development and bug fixing is appreciated. In order to deploy test-ready environment please make the
steps:

1. Clone repo with `git clone`
2. Install dependencies with `npm install`
3. Install globally libraries `rollup` for bundled builds.
4. Add webhooks as new dev express via npm `npm install express --save-dev`. Don't forget to delete it before making
   pull request
5. Create .env file in root folder and add environment variables using example file [env.example](env.example)
6. Add `"type": "module"` to the package.json

## Build

Compile browser and node|webpack versions with single command:

```
npm run build
```

### Sending prompt to groq

Link to example: [sendTextMessage.js](/examples/sendTextMessage.js)

```
response = greenAPI.sending.sendMessage("11001234567@c.us", "Message text")

print(response.data)
```

## Service methods documentation

- groq website: [https://groq.com/](https://groq.com/).
  > Limits - These are the rate limits for you [Free Beta]

> sss

## External products

- [requests](https://requests.readthedocs.io/en/latest/) - for HTTP requests.

## License

FREE.
I Am that I Am, I will be what I will be
