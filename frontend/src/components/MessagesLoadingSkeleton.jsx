const MessagesLoadingSkeleton = () => {
  return (
    <div
      className="max-w-full sm:max-w-3xl mx-auto space-y-2 sm:space-y-6"
      aria-hidden="true"
    >
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className={`chat ${index % 2 === 0 ? "chat-start" : "chat-end"} animate-pulse`}
        >
          <div
            className={`chat-bubble ${
              index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
            } text-white w-16 sm:w-32 md:w-40 ${
              index % 3 === 0 ? "h-5 sm:h-6" : "h-7 sm:h-8"
            } rounded-lg bg-linear-to-r from-gray-700 via-gray-600 to-gray-700`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default MessagesLoadingSkeleton;
