import { useChatStore } from "../store/useChatStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

const ChatPage = () => {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="w-full flex items-center justify-center p-4 bg-gray-900">
      <div className="relative w-full max-w-6xl h-auto">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row min-h-[85vh]">
            <div className="w-full md:w-72 lg:w-80 bg-gray-800/50 backdrop-blur-sm flex flex-col border-r border-gray-700/50 p-4 sm:p-6">
              <ProfileHeader />
              <ActiveTabSwitch />
              <div className="flex-1 overflow-y-auto mt-4 space-y-4">
                {activeTab === "chats" ? <ChatsList /> : <ContactList />}
              </div>
            </div>

            <div className="w-full md:flex-1 flex flex-col bg-gray-900/50 backdrop-blur-sm p-4 sm:p-6">
              {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
};

export default ChatPage;
