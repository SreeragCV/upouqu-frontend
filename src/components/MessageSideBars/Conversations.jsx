import React from "react";
import Conversation from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";

function Conversations() {
  const { conversations, loading, error } = useGetConversation();
  
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations && conversations.length > 0 &&
        conversations.map((conversation, idx) => (
          <>
            <Conversation
              key={conversation.user_id}
              conversation={conversation}
              lastIdx={idx === conversations.length - 1}
            />
          </>
        ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto">
          <Loader />
        </span>
      ) : null}
    </div>
  );
}

export default Conversations;
