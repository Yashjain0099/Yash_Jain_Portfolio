// src/services/geminiService.ts
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export interface ChatMessage {
  role: 'user' | 'model';
  parts: string;
}

export class GeminiService {
  private model;
  private chat;

  constructor(systemPrompt: string) {
    this.model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-pro",
      generationConfig: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    });
    
    this.chat = this.model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "System: " + systemPrompt }],
        },
        {
          role: "model",
          parts: [{ text: "I understand. I'll act as Yash Jain's AI portfolio assistant and provide accurate, professional responses about his experience, projects, skills, and achievements." }],
        },
      ],
    });
  }

  async sendMessage(message: string): Promise<string> {
    try {
      const result = await this.chat.sendMessage(message);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini API Error:', error);
      throw new Error('Failed to get response from AI');
    }
  }

  async sendMessageWithContext(message: string, context: string): Promise<string> {
    try {
      const prompt = `Context about Yash Jain:\n${context}\n\nUser Question: ${message}\n\nProvide a helpful, professional response based on the context. If you mention projects or certifications, indicate that links are available.`;
      
      const result = await this.chat.sendMessage(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini API Error:', error);
      throw new Error('Failed to get response from AI');
    }
  }
}