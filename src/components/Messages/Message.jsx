import React from "react";

function Message() {
  return (
    <div>
      <div className="flex gap-4 mb-4">
        {/* Sender's message */}
        <div className="">
          <div className="w-9 h-10 rounded-full overflow-hidden">
            <img alt="Sender" src={"https://robohash.org/sender.png"} />
          </div>
        </div>
        <div className={`bg-blue-500 text-white py-2 px-4 rounded-lg max-w-xs`}>
          That's great to hear! How about you? Lorem ipsumcum atque, earum porro.
        </div>
      </div>
      <div className="flex flex-row-reverse gap-4 mb-4">
        {/* Receiver's message */}
        <div className="">
          <div className="w-9 h-10 rounded-full overflow-hidden">
            <img alt="Receiver" src={"https://robohash.org/receiver.png"} />
          </div>
        </div>
        <div
          className={`bg-green-500 text-white py-2 px-4 rounded-lg max-w-xs`}
        >
          hello, I'm doing great!atis ipsa corrupti?
        </div>
      </div>
    </div>
  );
}

export default Message;
