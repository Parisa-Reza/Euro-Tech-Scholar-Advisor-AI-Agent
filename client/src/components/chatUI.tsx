import MarkdownRenderer from "./MarkDownRender";
import { useMessages, useChat } from "../hooks";
import euStar from "../assets/EU.png"; 
import headerBg from "../assets/Europe.jpg"; 

const ChatInterface = () => {
  const messagesHook = useMessages();
  const { messages, clearMessages } = messagesHook;
  const {
    inputMessage,
    setInputMessage,
    isLoading,
    sendMessage,
    handleKeyPress,
  } = useChat(messagesHook);

  return (
    <div className="flex flex-col h-screen w-full max-w-4xl mx-auto bg-gray-50">

      {/* Header */}
      <div
        className="relative text-white p-6 md:p-8 shadow-md flex justify-center items-center"
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundSize: "100%", // slightly smaller
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* dark overlay */}
        <div className="relative z-10 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            EuroTech Scholar Advisor
          </h1>
          <p className="mt-1 text-sm md:text-base opacity-80">
            Ask about higher studies in Tech in Europe
          </p>
        </div>

        {/* EU Star bigger */}
        <div className="absolute top-4 right-4 w-17 h-17">
          <img src={euStar} alt="EU Star" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] px-2 py-2 rounded-xl relative shadow-md transition-all ${
                message.sender === "user"
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-xl hover:shadow-xl"
                  : "bg-white/90 text-gray-800 border border-gray-200 rounded-bl-xl backdrop-blur-sm hover:shadow-lg"
              }`}
            >
              <div className="break-words leading-relaxed">
                {message.sender === "bot" ? (
                  <MarkdownRenderer content={message.text} />
                ) : (
                  message.text
                )}
              </div>
              <div className="text-xs opacity-50 mt-1 text-right">
                {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[75%] px-3 py-2 rounded-2xl bg-white/90 border border-gray-200 shadow-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-200"></span>
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-400"></span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="flex items-center gap-4 p-4 bg-white border-t border-gray-300 shadow-inner relative">
        <textarea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about higher studies in Europe...."
          disabled={isLoading}
          rows={1}
          className="flex-1 px-4 py-3 text-sm rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-200 outline-none resize-none bg-white transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
        />
        <button
          onClick={sendMessage}
          disabled={!inputMessage.trim() || isLoading}
          className="bg-black text-white px-3 py-2 rounded-xl font-normal hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Send
        </button>
 <button
    onClick={clearMessages}
    disabled={isLoading}
    className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-2 rounded-xl font-normal transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
    title="New Chat"
  >
    New Chat
  </button>

      </div>
    </div>
  );
};

export default ChatInterface;