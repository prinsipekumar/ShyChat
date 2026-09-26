import { MessageCircleIcon } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-4 sm:p-6">
      <div className="size-16 sm:size-20 bg-linear-to-br from-blue-500/20 to-blue-400/10 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-md">
        <MessageCircleIcon className="size-8 sm:size-10 text-blue-400" />
      </div>

      <h3 className="text-base sm:text-xl font-semibold text-gray-200 mb-2 truncate max-w-55 sm:max-w-md">
        Select a conversation
      </h3>

      <p className="text-gray-400 text-xs sm:text-sm max-w-xs sm:max-w-md leading-relaxed">
        Choose a contact from the sidebar to start chatting or continue a
        previous conversation.
      </p>
    </div>
  );
};

export default NoConversationPlaceholder;
