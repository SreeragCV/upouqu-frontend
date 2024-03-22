import React from "react";

function MessageInput() {
  return (
    <form className="px-2 my-2">
      <div className="flex items-center gap-1">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-200 text-white"
          placeholder="Send a message"
        />
      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
        <button type="submit" className="">
          <i style={{fontSize:"22px"}} className="fa">
            &#xf1d9;
          </i>
        </button>
      </div>
    </form>
  );
}

export default MessageInput;