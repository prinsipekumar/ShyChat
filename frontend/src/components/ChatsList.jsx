import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import NoChatsFound from "./NoChatsFound";
import { useAuthStore } from "../store/useAuthStore";

const ChatsList = () => {
  const { getMyChatPartners, chats, isUserLoading, setSelectedUser } =
    useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getMyChatPartners();
  }, [getMyChatPartners]);

  if (isUserLoading) return <UsersLoadingSkeleton />;
  if (chats.length === 0) return <NoChatsFound />;

  return (
    <>
      {chats.map((chat) => (
        <div
          key={chat._id}
          onClick={() => setSelectedUser(chat)}
          className="bg-blue-500/10 p-2 sm:p-4 rounded-lg cursor-pointer hover:bg-cyan-500/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div
              className={`avatar ${
                onlineUsers.includes(chat._id)
                  ? "avatar-online"
                  : "avatar-offline"
              }`}
            >
              <div className="size-9 sm:size-12 rounded-full bg-gray-700 flex items-center justify-center">
                {chat?.profilePic ? (
                  <img
                    src={chat.profilePic}
                    alt={chat.fullName}
                    className="size-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-white text-base sm:text-xl font-bold">
                    {chat?.fullName
                      ? chat.fullName.charAt(0).toUpperCase()
                      : "U"}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="text-gray-200 font-medium truncate max-w-30 sm:max-w-50 text-sm sm:text-base">
                {chat.fullName}
              </h4>
              {chat.lastMessage && (
                <p className="text-gray-400 text-xs sm:text-sm truncate max-w-30 sm:max-w-50">
                  {chat.lastMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChatsList;
