import { useState, useRef } from "react";
import {
  LogOutIcon,
  VolumeOffIcon,
  Volume2Icon,
  LoaderIcon,
} from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const mouseClickSound = new Audio("/sounds/mouseClick.mp3");

const ProfileHeader = () => {
  const { logout, authUser, updateProfile, isUpdatingProfile } = useAuthStore();
  const { isSoundEnabled, toggleSound } = useChatStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="p-4 sm:p-6 border-b border-gray-700/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="md:-ml-8 avatar avatar-online">
            <button
              className="size-10 xs:size-12 sm:size-14 rounded-full bg-cyan-600 overflow-hidden relative group"
              onClick={() => fileInputRef.current.click()}
            >
              {selectedImg || authUser.profilePic ? (
                <img
                  src={selectedImg || authUser.profilePic}
                  alt={authUser?.fullName.charAt(0).toUpperCase()}
                  className="size-full object-cover"
                />
              ) : (
                <span className="text-white text-xl xs:text-2xl sm:text-3xl font-bold">
                  {authUser?.fullName
                    ? authUser.fullName.charAt(0).toUpperCase()
                    : "U"}
                </span>
              )}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span className="text-white text-xs">
                  {isUpdatingProfile ? (
                    <LoaderIcon className="w-full h-5 animate-spin text-center" />
                  ) : (
                    "Change"
                  )}
                </span>
              </div>
            </button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          <div>
            <h3 className="text-gray-200 font-medium text-sm sm:text-base max-w-35 sm:max-w-45 truncate">
              {authUser.fullName}
            </h3>
            <p className="text-gray-400 text-[11px] sm:text-xs md:text-sm">
              Online
            </p>
          </div>
        </div>

        <div className="flex gap-2 sm:gap-4 items-center">
          <button
            className="text-gray-400 hover:text-gray-200 transition-colors"
            onClick={logout}
          >
            <LogOutIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <button
            className="text-gray-400 hover:text-gray-200 transition-colors"
            onClick={() => {
              mouseClickSound.currentTime = 0;
              mouseClickSound
                .play()
                .catch((error) => console.log("Audio failed to play:", error));
              toggleSound();
            }}
          >
            {isSoundEnabled ? (
              <Volume2Icon className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <VolumeOffIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
