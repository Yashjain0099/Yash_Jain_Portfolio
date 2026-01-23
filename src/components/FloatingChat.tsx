// import { useState } from "react";
// import PortfolioChatbot from "./PortfolioChatbot";

// const FloatingChat = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleChat = () => setIsOpen(!isOpen);

//   return (
//     <>
//       {/* Floating button positioned above "Hire Me" */}
//       <button
//         onClick={toggleChat}
//         className="fixed bottom-24 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 z-50"
//       >
//         💬
//       </button>

//       {/* Chatbot Panel */}
//       {isOpen && (
//         <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-[500px] bg-slate-900 rounded-lg shadow-lg z-50 flex flex-col">
//           <div className="flex justify-between items-center p-4 bg-slate-800 rounded-t-lg">
//             <span className="text-white font-bold">Chatbot</span>
//             <button onClick={toggleChat} className="text-white font-bold">
//               ✕
//             </button>
//           </div>
//           <div className="flex-1 overflow-auto p-4">
//             <PortfolioChatbot />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default FloatingChat;
