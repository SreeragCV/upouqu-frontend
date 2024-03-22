import React, { useEffect } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import { addConversation } from "../../utils/store/chatSlice";

function MessageContainer() {
  const selectedConversation = useSelector(
    (state) => state.chat.selectedConversation
  );

  const dispatch = useDispatch()

  useEffect(() => {
	return () => dispatch(addConversation({conversation: null}))
  }, [])

  return (
    <div className="md:min-w-[450px] flex flex-col bg-stone-100 p-3">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className=" px-4 py-2 mb-2">
            <span className="label-text">To: </span>
            <span className="text-gray-900 font-bold">
              {selectedConversation.full_name}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

const NoChatSelected = () => {
  const fullName = useSelector((state) => state.auth.full_name);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-900 font-semibold flex flex-col items-center gap-2">
        <p>Welcome {fullName} 👋</p>
        <p>Select a chat to start messaging</p>
        {/* <TiMessages className='text-3xl md:text-6xl text-center' /> */}
      </div>
    </div>
  );
};

export default MessageContainer;
