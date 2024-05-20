# pythoe example
import asyncio
from GroqClass import GroqClass  # Corrected import statement

# import os
# from groq import Groq

async def testsendsendPrompt():
    myGroq = GroqClass()
    userPrompt = "מי זה אנתוני הופקינס ?"
    response = await myGroq.sendPrompt(userPrompt)

    if response:
        print(response.choices[0].message.content)
    else:
        print("Failed to get a response from Groq.")

# async def testSpeechtoText():
#     client = Groq(api_key=os.environ.get("GROQ_API_KEY"),)
#     filename = os.path.dirname(__file__) + "/output.mp3"

#     with open(filename, "rb") as file:
#         translation = 
#         client.audio.translations.create(
#         file=(filename, file.read()),
#         model="whisper-large-v3",
#         )
#         print(translation.text)

if __name__ == "__main__":
    asyncio.run(testsendsendPrompt())
    # asyncio.run(testSpeechtoText())