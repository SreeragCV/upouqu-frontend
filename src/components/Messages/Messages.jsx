import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";

function Messages() {
  const { messages, loading } = useGetMessage();

  const lastMessageRef = useRef();

  console.log(messages);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 10);
  }, [messages]);

  return (
    <div className="flex flex-col p-4 overflow-y-auto h-[24rem]">
      {!loading &&
        messages &&
        messages.length > 0 &&
        messages.map((message) => {
          return (
            <div key={message._id} ref={lastMessageRef}>
              <Message  messages={message} />
            </div>
          );
        })}
    </div>
  );
}

export default Messages;
