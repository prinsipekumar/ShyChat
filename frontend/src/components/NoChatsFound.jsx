import { MessageCircleIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

const NoChatsFound = () => {
  const { setActiveTab } = useChatStore();

  return (
    <div className="flex flex-col items-center justify-center py-4 sm:py-10 text-center space-y-2 sm:space-y-4">
      <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
        <MessageCircleIcon className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
      </div>

      <div>
        <h4 className="text-gray-200 font-medium mb-1 text-sm sm:text-lg">
          No conversations yet
        </h4>
        <p className="text-gray-400 text-xs sm:text-sm px-2 sm:px-6">
          Start a new chat by selecting a contact from the contacts tab
        </p>
      </div>

      <button
        onClick={() => setActiveTab("contacts")}
        aria-label="Find contacts"
        className="w-full sm:w-auto px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-base text-blue-400 bg-blue-500/10 rounded-lg hover:bg-cyan-500/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Find contacts
      </button>
    </div>
  );
};

export default NoChatsFound;
