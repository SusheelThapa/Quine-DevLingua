import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
});


export const askOpenAI = async (type, prompt) => {


    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "assistant",
                content: prompt,
            },
        ],
    });

    const message = response.choices[0];

    return message.message.content;
}


