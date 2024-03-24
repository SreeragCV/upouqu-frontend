import React, { useState } from "react";
import useSendMessage from "../../hooks/useSendMessage";
import Loader from "../Loader/Loader.jsx";
import { useSelector } from "react-redux";

function MessageInput() {
  const [message, setMessage] = useState("");
  const { sendMessage, loading, error } = useSendMessage();
  const messages = useSelector((state) => state.chat.messages)

  async function handleSubmit(event) {
    event.preventDefault();
    if(message === ""){
      return;
    }
    await sendMessage(message);
    setMessage("")
  }

  return (
    <form onSubmit={handleSubmit} className="px-2 my-2">
      <div className="flex items-center gap-1">
        <input
          type="text"
          value={message}
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-200 text-white"
          placeholder="Send a message"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit" className="">
          {loading ? (
            <Loader />
          ) : (
            <i style={{ fontSize: "22px" }} className="fa">
              &#xf1d9;
            </i>
          )}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
