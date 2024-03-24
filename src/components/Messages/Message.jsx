import React from "react";
import { useSelector } from "react-redux";
import { extractTime } from "../../utils/extractTime";

function Message({ messages }) {
  const currentUser = useSelector((state) => state.auth);
  const selectedConversation = useSelector(
    (state) => state.chat.selectedConversation
  );
  const formattedTime = extractTime(messages.createdAt);
  const fromMe = messages.senderId === currentUser.user_id;
  const profilePic = fromMe ? currentUser.dp_url : selectedConversation.dp_url;
  return (
    <div>
      <div className={`flex gap-2 mb-4 ${fromMe ? "flex-row-reverse" : ""}`}>
        {/* Sender's message */}
        <div className="">
          <div className="w-9 h-10 rounded-full overflow-hidden">
            <img alt="Sender" src={profilePic} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div
            className={`text-white py-2 px-4 rounded-lg max-w-xs ${
              fromMe ? "bg-green-500" : "bg-blue-500"
            }`}
          >
            {messages.message}
          </div>
          <div className="opacity-50 text-xs flex gap-1 items-center">
            {formattedTime}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
