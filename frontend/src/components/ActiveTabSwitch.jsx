import { useChatStore } from "../store/useChatStore";

const ActiveTabSwitch = () => {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="tabs tabs-boxed bg-transparent p-2 m-2 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-0">
      <button
        onClick={() => setActiveTab("chats")}
        aria-pressed={activeTab === "chats"}
        className={`tab w-full sm:flex-1 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-lg transition-colors ${
          activeTab === "chats"
            ? "bg-blue-500/20 text-blue-400"
            : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        }`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        aria-pressed={activeTab === "contacts"}
        className={`tab w-full sm:flex-1 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-lg transition-colors ${
          activeTab === "contacts"
            ? "bg-blue-500/20 text-blue-400"
            : "text-gray-400 hover:bg-blue-500/10 hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        }`}
      >
        Contacts
      </button>
    </div>
  );
};

export default ActiveTabSwitch;
