import React from "react";
import Sidebar from "../components/MessageSideBars/Sidebar";
import Modal from "../components/Modal/Modal";

function ChatHome() {
  return (
    <Modal open={true}>
      <div className="flex sm:h-[450px] md:h-[480px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
        {/* <MessageContainer /> */}
      </div>
    </Modal>
  );
}

export default ChatHome;
