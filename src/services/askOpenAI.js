import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
});


export const askOpenAI = async (type, mes) => {
    const preDefinedPrompt = {
        "CdeLingo": "A",
        "CodeInsight": "B",
        "CodeMaster": "C",
    }

    const prompt = `${preDefinedPrompt[type]}\n ${mes}`;

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


