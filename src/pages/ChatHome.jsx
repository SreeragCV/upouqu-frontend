import React from "react";
import Sidebar from "../components/MessageSideBars/Sidebar";
import MessageContainer from "../components/Messages/MessageContainer";
import withAuth from "../HOC/withAuth";

function ChatHome() {
  return (
    <div className="  bg-slate-300 h-screen sm:p-10 flex items-center justify-center">
      <div className="flex sm:h-[400px]  justify-center md:h-[480px] rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
}

export default withAuth(ChatHome);
