const UsersLoadingSkeleton = () => {
  return (
    <div className="space-y-1 sm:space-y-3" aria-hidden="true">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="bg-gray-800/30 p-1.5 sm:p-4 rounded-lg animate-pulse"
        >
          <div className="flex items-center gap-1 sm:gap-3 flex-wrap">
            <div className="w-6 h-6 sm:w-10 sm:h-10 bg-gray-700 rounded-full"></div>

            <div className="flex-1">
              <div className="h-2.5 bg-gray-700 rounded w-1/2 sm:w-3/4 mb-1 sm:mb-2"></div>
              <div className="h-2 bg-gray-700/70 rounded w-1/3 sm:w-1/2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersLoadingSkeleton;
