import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export default async function handler(req: Request) {
  try {
    const { message, context } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    });

    const prompt = `Context:\n${context}\n\nUser: ${message}\n\nProvide a concise, professional answer based on the context.`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return new Response(JSON.stringify({ text }), { status: 200 });
  } catch (err) {
    console.error("Gemini API error:", err);
    return new Response(JSON.stringify({ error: "Gemini API call failed" }), { status: 500 });
  }
}
