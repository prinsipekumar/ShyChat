import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import { XIcon } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };
    window.addEventListener("keydown", handleEscKey);
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  return (
    <div className="flex justify-between items-center bg-gray-800/50 border-b border-gray-700/50 max-h-18 sm:max-h-21 px-2 sm:px-6 flex-1">
      <div className="flex items-center gap-2 sm:gap-3">
        <div
          className={`avatar ${isOnline ? "avatar-online" : "avatar-offline"}`}
        >
          <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gray-700 flex items-center justify-center">
            {selectedUser?.profilePic ? (
              <img
                src={selectedUser.profilePic}
                alt={selectedUser.fullName}
                className="size-full object-cover rounded-full"
              />
            ) : (
              <span className="text-white text-base sm:text-2xl font-bold">
                {selectedUser?.fullName
                  ? selectedUser.fullName.charAt(0).toUpperCase()
                  : "U"}
              </span>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-gray-200 font-medium truncate max-w-30 sm:max-w-50 text-sm sm:text-base">
            {selectedUser.fullName}
          </h3>
          <p className="text-gray-400 text-[11px] sm:text-sm">
            {isOnline ? "Online" : "Offline"}
          </p>
        </div>
      </div>

      <button
        onClick={() => setSelectedUser(null)}
        title="Close chat"
        aria-label="Close chat"
        className="text-gray-400 hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
      >
        <XIcon className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default ChatHeader;
