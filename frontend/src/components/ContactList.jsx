import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";
import { useAuthStore } from "../store/useAuthStore";

const ContactList = () => {
  const { getAllContacts, allContacts, setSelectedUser, isUsersLoading } =
    useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <>
      {allContacts.map((contact) => (
        <div
          key={contact._id}
          onClick={() => setSelectedUser(contact)}
          aria-label={`Open chat with ${contact.fullName}`}
          className="bg-blue-500/10 p-2 sm:p-4 rounded-lg cursor-pointer hover:bg-cyan-500/20 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div
              className={`avatar ${
                onlineUsers.includes(contact._id)
                  ? "avatar-online"
                  : "avatar-offline"
              }`}
            >
              <div className="size-9 sm:size-12 rounded-full bg-blue-700 flex items-center justify-center">
                {contact?.profilePic ? (
                  <img
                    src={contact.profilePic}
                    alt={contact.fullName}
                    className="size-full object-cover rounded-full"
                  />
                ) : (
                  <span className="text-white text-base sm:text-xl font-bold">
                    {contact?.fullName
                      ? contact.fullName.charAt(0).toUpperCase()
                      : "U"}
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="text-gray-200 font-medium truncate max-w-30 sm:max-w-50 text-sm sm:text-base">
                {contact.fullName}
              </h4>
              <p className="text-gray-400 text-[11px] sm:text-xs">
                {onlineUsers.includes(contact._id) ? "Online" : "Offline"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactList;
