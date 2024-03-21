import React from "react";
import Conversation from "./Conversation";

function Conversations() {
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {/* {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))} */}
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>
      <Conversation/>

      {/* {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null} */}
    </div>
  );
}

export default Conversations;
