import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { FloatingChat } from './components/FloatingChat';
import PortfolioChatbot from './components/PortfolioChatbot';

const queryClient = new QueryClient();

const App = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <FloatingChat />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>

    <section id="ai-assistant" className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            🤖 AI-Powered Assistant
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Try my RAG-powered chatbot built with Gemini 1.5 Pro.
            Ask about my experience, projects, skills, or certifications!
          </p>
        </div>
        <PortfolioChatbot />
      </div>
    </section>
  </>
);

export default App;
