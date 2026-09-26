import { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import ChatHeader from "./ChatHeader";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceholder";
import MessageInput from "./MessageInput";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";

const ChatContainer = () => {
  const {
    selectedUser,
    getMessagesByUserId,
    messages,
    isMessagesLoading,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    getMessagesByUserId(selectedUser._id);
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [
    selectedUser,
    getMessagesByUserId,
    subscribeToMessages,
    unsubscribeFromMessages,
  ]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full">
      <ChatHeader />
      <div
        ref={containerRef}
        className="flex-1 px-2 sm:px-6 overflow-y-auto py-4 sm:py-8 relative max-h-[60vh]"
      >
        {messages.length > 0 && !isMessagesLoading ? (
          <div className="max-w-full sm:max-w-3xl mx-auto space-y-2 sm:space-y-6">
            {messages.map((msg) => (
              <div
                key={msg._id}
                className={`chat ${
                  msg.senderId === authUser._id ? "chat-end" : "chat-start"
                }`}
              >
                <div
                  aria-label={`Message from ${
                    msg.senderId === authUser._id
                      ? "You"
                      : selectedUser.fullName
                  }`}
                  className={`chat-bubble relative text-xs sm:text-sm md:text-base ${
                    msg.senderId === authUser._id
                      ? "bg-cyan-600 text-white"
                      : "bg-gray-600 text-gray-200"
                  }`}
                >
                  {msg.image && (
                    <img
                      src={msg.image}
                      alt="Shared"
                      className="rounded-lg w-32 sm:w-60 object-cover"
                    />
                  )}
                  {msg.text && <p className="mt-0.5 sm:mt-1">{msg.text}</p>}
                  <p className="text-[9px] sm:text-xs mt-0.5 sm:mt-1 opacity-75 flex items-center gap-1">
                    {new Date(msg.createdAt).toLocaleDateString([], {
                      month: "short",
                      day: "numeric",
                    })}{" "}
                    {new Date(msg.createdAt).toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>
        ) : isMessagesLoading ? (
          <MessagesLoadingSkeleton />
        ) : (
          <NoChatHistoryPlaceholder name={selectedUser.fullName} />
        )}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;
