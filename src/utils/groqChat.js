import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.REACT_APP_GROQ_API_KEY, dangerouslyAllowBrowser: true });

const groqChat = async (query) => {
    const chatCompletion = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: query,
            },
        ],
        model: "openai/gpt-oss-120b",
    });
    const groqData = chatCompletion.choices[0]?.message?.content || ""
    const cleanedData = groqData.replace(/``````/g, '').trim();
    const jsonList = JSON.parse(cleanedData)
    return jsonList
}

export default groqChat