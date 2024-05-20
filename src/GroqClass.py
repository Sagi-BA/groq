import os
from groq import Groq

class GroqClass:
    def __init__(self):
        self.client = Groq(api_key=os.environ.get("GROQ_API_KEY"),)

    async def sendsendPrompt(self, userPrompt):        
        print(f"Start: groq send_prompt({userPrompt})")

        try:            
            chat_completion = self.client.chat.completions.create(
                messages=[
                    {
                        "role": "system",
                        "content": "Return an answer only in the same language you were asked!"
                    },
                    {
                        "role": "user",
                        "content": userPrompt
                    }
                ],
                model=os.getenv("GROQ_MODEL"),
                max_tokens=int(os.getenv("GROQ_MAX_TOKENS")),
                temperature=1,
                top_p=1,
                stop=None
            )
            return chat_completion
        except Exception as e:
            print(f"Error processing groq: {e}")
            return False
