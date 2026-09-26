import { MessageCircleIcon } from "lucide-react";

const NoChatHistoryPlaceholder = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-3 sm:p-6">
      <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-5">
        <MessageCircleIcon className="w-5 h-5 sm:w-8 sm:h-8 text-blue-400" />
      </div>

      <h3 className="text-xs sm:text-lg md:font-medium text-gray-200 mb-1.5 sm:mb-3 max-w-35 sm:max-w-md">
        Start your conversation with {name}
      </h3>

      <div className="flex flex-col space-y-1.5 sm:space-y-3 max-w-50 sm:max-w-md mb-3 sm:mb-5">
        <p className="text-gray-400 text-[11px] sm:text-sm">
          This is the beginning of your conversation. Send a message to start
          chatting!
        </p>
        <div className="h-px w-20 sm:w-32 bg-linear-to-r from-transparent via-blue-500/30 to-transparent mx-auto"></div>
      </div>

      <div className="flex flex-wrap gap-2 justify-center w-full sm:w-auto">
        <button
          aria-label="Say Hello"
          className="w-full sm:w-auto px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          👋 Say Hello
        </button>
        <button
          aria-label="Ask how are you"
          className="w-full sm:w-auto px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          🤝 How are you?
        </button>
        <button
          aria-label="Suggest meeting up soon"
          className="w-full sm:w-auto px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-medium text-blue-400 bg-blue-500/10 rounded-full hover:bg-blue-500/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          📅 Meet up soon?
        </button>
      </div>
    </div>
  );
};

export default NoChatHistoryPlaceholder;
