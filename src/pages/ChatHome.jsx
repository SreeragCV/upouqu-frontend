import React from "react";
import Sidebar from "../components/MessageSideBars/Sidebar";
import Modal from "../components/Modal/Modal";
import MessageContainer from "../components/Messages/MessageContainer";

function ChatHome() {
  return (
    <div className="  bg-slate-300 h-screen flex items-center justify-center">
      <div className="flex sm:h-[450px] justify-center md:h-[480px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
}

export default ChatHome;
