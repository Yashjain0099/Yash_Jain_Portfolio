import { useState } from "react";
import PortfolioChatbot from "./PortfolioChatbot";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Button at Bottom Center */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 z-50"
      >
        🔥
      </button>

      {/* Chatbot Panel */}
      {isOpen && (
        className="fixed bottom-24 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 z-50">
          <div className="flex justify-between items-center p-4 bg-slate-800 rounded-t-lg">
            <span className="text-white font-bold">Chatbot</span>
            <button onClick={toggleChat} className="text-white font-bold">
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-auto p-4">
            <PortfolioChatbot />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChat;
