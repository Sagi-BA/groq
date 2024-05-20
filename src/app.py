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