export async function geminiChat(message: string, context: string): Promise<string> {
  try {
    const res = await fetch("/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, context }),
    });

    if (!res.ok) throw new Error(`Server error: ${res.status}`);
    const data = await res.json();
    return data.text || "No response from Gemini.";
  } catch (err) {
    console.error("Error talking to Gemini API route:", err);
    return "Sorry, I had trouble reaching the AI service.";
  }
}
