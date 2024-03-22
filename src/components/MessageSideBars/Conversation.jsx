import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConversation } from "../../utils/store/chatSlice";

function Conversation({ conversation, lastIdx }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chat.selectedConversation)
  console.log(data);

  const isSelected = data?.user_id === conversation.user_id
  console.log(isSelected);

  return (
    <div>
      <>
        <div
          className={`flex gap-2 items-center mr-3 hover:bg-sky-500 rounded p-2 py-2 cursor-pointer ${isSelected ? 'bg-sky-500' : ''}`}
          onClick={() => dispatch(addConversation({conversation}))}
        >
            <div className="w-12 rounded-full">
              <img src={conversation.dp_url} alt="user avatar" />
            </div>

          <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
              <p className="font-bold text-gray-950">
                {conversation.full_name}
              </p>
            </div>
          </div>
        </div>

        {!lastIdx && (
          <div className="border-b border-slate-300 my-0 py-0 h-1" />
        )}
      </>
    </div>
  );
}

export default Conversation;
