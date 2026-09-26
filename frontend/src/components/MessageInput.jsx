import { useRef, useState } from "react";
import useKeyboardSound from "../hooks/useKeyboardSound";
import { useChatStore } from "../store/useChatStore";
import toast from "react-hot-toast";
import { ImageIcon, SendIcon, XIcon } from "lucide-react";

const MessageInput = () => {
  const { playRandomKeyStrokeSound } = useKeyboardSound();
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const fileInputRef = useRef(null);

  const { sendMessage, isSoundEnabled } = useChatStore();

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    if (isSoundEnabled) playRandomKeyStrokeSound();

    sendMessage({
      text: text.trim(),
      image: imagePreview,
    });
    setText("");
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => setImagePreview(reader.result);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="pt-3 sm:p-4 border-t border-gray-700/50">
      {imagePreview && (
        <div className="max-w-3xl mx-auto mb-2 sm:mb-3 flex items-center">
          <div className="relative">
            <img
              src={imagePreview}
              alt="preview"
              className="w-14 h-14 sm:w-20 sm:h-20 object-cover rounded-lg border border-gray-700 shadow-md hover:scale-105 transition-transform"
            />
            <button
              onClick={removeImage}
              aria-label="Remove image"
              type="button"
              className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-gray-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 animate-[wiggle_0.3s_ease-in-out]"
            >
              <XIcon className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
      <form
        onSubmit={handleSendMessage}
        className="flex items-center gap-1 sm:gap-3 w-full"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            isSoundEnabled && playRandomKeyStrokeSound();
          }}
          className="flex-1 text-xs sm:text-base text-white bg-gray-900/70 border border-gray-700 rounded-lg py-1.5 px-1 sm:py-2 sm:px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          placeholder="Type your message..."
        />

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />

        <button
          type="button"
          aria-label="Attach image"
          onClick={() => fileInputRef.current?.click()}
          className={`bg-gray-900/70 text-gray-400 hover:text-blue-400 rounded-lg p-1.5 sm:p-3 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            imagePreview ? "text-blue-500" : ""
          }`}
        >
          <ImageIcon className="w-3 h-3 sm:w-5 sm:h-5" />
        </button>

        <button
          type="submit"
          aria-label="Send message"
          disabled={!text.trim() && !imagePreview}
          className="send-btn bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-lg p-1.5 sm:p-3 font-medium shadow-md hover:shadow-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <SendIcon className="w-3 h-3 sm:w-5 sm:h-5" />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
