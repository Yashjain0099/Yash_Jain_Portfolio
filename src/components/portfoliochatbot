import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, ExternalLink, Award, Code, Sparkles, X } from 'lucide-react';
import { geminiChat } from '../services/geminiService';
import { generateContext } from '../data/portfolioKnowledge';

// Simulated Gemini API call (replace with actual implementation)
const handleSend = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In production, this would call your actual Gemini API
  // For demo purposes, generating intelligent responses based on context
  const responses: Record<string, string> = {
    experience: `Based on Yash's background, he has worked as an **AI/ML Engineer** where he's led the development of LLM-powered applications and RAG systems. His key achievements include:\n\n• Developed a RAG system that reduced response time by 40%\n• Implemented a fine-tuning pipeline improving model accuracy by 30%\n• Built a multi-agent AI system handling 10K+ queries daily\n\nHe's proficient in Python, LangChain, OpenAI APIs, Pinecone, and FastAPI. His work demonstrates strong expertise in production-grade AI systems.`,
    
    projects: `Yash has built several impressive AI projects:\n\n**1. Advanced RAG Chatbot System**\n• Production-ready RAG with vector search and streaming\n• 99.9% uptime, sub-500ms response time\n• Handles 10K+ queries/day\n• Technologies: Python, LangChain, Pinecone, FastAPI, React\n\n**2. LLM Fine-tuning Pipeline**\n• Automated pipeline for fine-tuning with LoRA/PEFT\n• 30% performance improvement, 90% cost reduction\n• Technologies: PyTorch, Hugging Face, Weights & Biases\n\n**3. Multi-Agent AI System**\n• Autonomous task planning and execution\n• Real-time agent collaboration\n• Technologies: LangGraph, CrewAI, OpenAI\n\nThese projects showcase his ability to build scalable, production-ready AI solutions.`,
    
    skills: `Yash has a comprehensive AI/ML skill set:\n\n**AI/ML Expertise:**\n• Large Language Models (LLMs) & Generative AI\n• Retrieval Augmented Generation (RAG)\n• Fine-tuning & Parameter-Efficient Fine-Tuning (PEFT)\n• Prompt Engineering & Multi-Agent Systems\n• Vector Databases & Transformers\n\n**Programming:** Python, TypeScript, JavaScript, SQL, C++\n\n**Frameworks:** TensorFlow, PyTorch, LangChain, LangGraph, Hugging Face, React, Next.js, FastAPI\n\n**Tools:** OpenAI API, Anthropic Claude, Google Gemini, Pinecone, AWS, Docker, Git\n\nThis diverse skill set makes him well-equipped for modern AI engineering roles.`,
    
    certifications: `Yash holds several industry-recognized certifications:\n\n**1. AWS Certified Machine Learning - Specialty** (2024)\n• Issued by Amazon Web Services\n• Covers ML on AWS, SageMaker, Model Deployment\n\n**2. Deep Learning Specialization** (2023)\n• Issued by DeepLearning.AI (Coursera)\n• Neural Networks, CNN, RNN, Transformers\n\n**3. LangChain & Vector Databases in Production** (2024)\n• Issued by Activeloop\n• LangChain, Vector Databases, RAG Systems\n\nThese certifications validate his expertise in cutting-edge AI/ML technologies. Credential links are available below.`,
    
    achievements: `Yash has accomplished several notable achievements:\n\n🏆 **Winner of National AI Hackathon 2024** - Built an AI-powered healthcare assistant\n\n📝 **Published Research** - Paper on "Efficient RAG Architectures" with 500+ citations\n\n⭐ **Open-Source Contributor** - Active contributor to LangChain, personal projects with 100+ stars\n\n🎓 **Mentorship** - Mentored 50+ students in AI/ML through workshops and bootcamps\n\n💡 **Impact** - Built AI tools used by 50,000+ users globally\n\nThese achievements demonstrate his technical excellence and community contribution.`,
    
    contact: `You can connect with Yash through multiple channels:\n\n📧 **Email:** yashjain@example.com\n💼 **LinkedIn:** linkedin.com/in/yashjain\n💻 **GitHub:** github.com/yashjain\n📍 **Location:** Ujjain, Madhya Pradesh, India\n\nFeel free to reach out to discuss AI/ML opportunities, collaborations, or just to connect! He's always open to interesting conversations about AI and technology.`,
    
    general: `**Yash Jain** is a talented **AI/ML Engineer specializing in LLMs and Generative AI**.\n\nHe's passionate about building production-grade AI applications, particularly focusing on:\n• Large Language Models & RAG systems\n• Fine-tuning & optimization\n• Multi-agent AI systems\n• Real-world AI deployments\n\nWith experience in building systems that serve 10K+ users daily and expertise in modern AI frameworks like LangChain, PyTorch, and Hugging Face, he brings both theoretical knowledge and practical implementation skills.\n\n**What would you like to know more about?**\n• His professional experience\n• AI/ML projects and demos\n• Technical skills and certifications\n• Achievements and contributions\n• Contact information`
  };
  
  // Determine response type based on message content
  const lowerMsg = message.toLowerCase();
  let responseType = 'general';
  
  if (lowerMsg.includes('experience') || lowerMsg.includes('work') || lowerMsg.includes('job')) {
    responseType = 'experience';
  } else if (lowerMsg.includes('project') || lowerMsg.includes('built') || lowerMsg.includes('portfolio')) {
    responseType = 'projects';
  } else if (lowerMsg.includes('skill') || lowerMsg.includes('technology') || lowerMsg.includes('tech')) {
    responseType = 'skills';
  } else if (lowerMsg.includes('certificate') || lowerMsg.includes('certification')) {
    responseType = 'certifications';
  } else if (lowerMsg.includes('achievement') || lowerMsg.includes('accomplishment')) {
    responseType = 'achievements';
  } else if (lowerMsg.includes('contact') || lowerMsg.includes('email') || lowerMsg.includes('reach')) {
    responseType = 'contact';
  }
  
  return responses[responseType];
};

const extractLinks = (query: string) => {
  const lowerQuery = query.toLowerCase();
  const links: Array<{ text: string; url: string; icon: string }> = [];
  
  if (lowerQuery.includes('project')) {
    links.push(
      { text: 'RAG Chatbot - GitHub', url: 'https://github.com/yashjain/rag-chatbot', icon: 'code' },
      { text: 'RAG Chatbot - Live Demo', url: 'https://demo.yashjain.dev', icon: 'external' },
      { text: 'LLM Fine-tuning - GitHub', url: 'https://github.com/yashjain/llm-finetuning', icon: 'code' }
    );
  }
  
  if (lowerQuery.includes('certificate') || lowerQuery.includes('certification')) {
    links.push(
      { text: 'View AWS ML Certificate', url: 'https://aws.amazon.com/verification/ABC123', icon: 'award' },
      { text: 'View Deep Learning Certificate', url: 'https://coursera.org/verify/COURSERA123', icon: 'award' },
      { text: 'View LangChain Certificate', url: 'https://learn.activeloop.ai/certificates/123', icon: 'award' }
    );
  }
  
  if (lowerQuery.includes('github')) {
    links.push({ text: 'GitHub Profile', url: 'https://github.com/yashjain', icon: 'code' });
  }
  
  if (lowerQuery.includes('linkedin') || lowerQuery.includes('contact')) {
    links.push({ text: 'LinkedIn Profile', url: 'https://linkedin.com/in/yashjain', icon: 'external' });
  }
  
  return links;
};

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  links?: Array<{ text: string; url: string; icon: string }>;
}

const PortfolioChatbot: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `Hi! 👋 I'm Yash's AI Assistant powered by **Gemini 1.5 Pro**.\n\nI can help you learn about:\n• Professional experience & work history\n• AI/ML projects and live demos\n• Technical skills and expertise\n• Certifications and credentials\n• Achievements and contributions\n• Contact information\n\n**What would you like to know?**`,
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsTyping(true);

    try {
      const context = generateContext(currentInput);
      const response = await geminiChat(currentInput, context);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date(),
        links: links.length > 0 ? links : undefined
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble processing your request right now. Please try again or ask something else!",
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickPrompts = [
    'Tell me about projects',
    'What are the key skills?',
    'Show certifications',
    'Notable achievements'
  ];

  return (
    <div className="w-full max-w-4xl mx-auto h-[600px] flex flex-col bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 rounded-2xl shadow-2xl border border-purple-500/30">
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 p-6 rounded-t-2xl border-b border-purple-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 shadow-lg">
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                AI Portfolio Assistant
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full border border-white/30">Gemini 1.5 Pro</span>
              </h2>
              <p className="text-sm text-purple-100">Ask me anything about Yash Jain</p>
            </div>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-950/50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}
          >
            {message.role === 'assistant' && (
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
            )}
            
            <div className={`flex flex-col max-w-[80%] ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div
                className={`rounded-2xl px-4 py-3 shadow-lg ${
                  message.role === 'user'
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white'
                    : 'bg-slate-800/90 text-slate-100 border border-purple-500/20 backdrop-blur-sm'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
              </div>
              
              {message.links && message.links.length > 0 && (
                <div className="mt-2 space-y-2 w-full">
                  {message.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/90 hover:bg-slate-700/90 border border-purple-500/30 rounded-xl transition-all group backdrop-blur-sm"
                    >
                      {link.icon === 'code' && <Code className="w-4 h-4 text-blue-400" />}
                      {link.icon === 'award' && <Award className="w-4 h-4 text-yellow-400" />}
                      {link.icon === 'external' && <ExternalLink className="w-4 h-4 text-purple-400" />}
                      <span className="text-sm text-slate-200 group-hover:text-blue-400 transition-colors flex-1">
                        {link.text}
                      </span>
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-purple-400 transition-colors" />
                    </a>
                  ))}
                </div>
              )}
              
              <span className="text-xs text-slate-500 mt-1 px-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>

            {message.role === 'user' && (
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                <User className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div className="bg-slate-800/90 border border-purple-500/20 rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-slate-800/50 backdrop-blur border-t border-purple-500/30 rounded-b-2xl">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about experience, projects, skills..."
            className="flex-1 px-4 py-3 bg-slate-900 border border-purple-500/30 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 font-medium shadow-lg"
          >
            {isTyping ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-2">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              onClick={() => setInput(prompt)}
              className="px-3 py-1.5 text-xs bg-slate-900 hover:bg-slate-700 text-slate-300 rounded-lg border border-purple-500/30 transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioChatbot;