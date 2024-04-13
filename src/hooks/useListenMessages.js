import React, { useEffect } from "react";
import { useSocketContext } from "../context/socketContext";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/store/chatSlice";

function useListenMessages() {
  const { socket } = useSocketContext();
  const { messages } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  
  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
        dispatch(addMessage({message: [...messages, newMessage]}));
    })
    return () => socket?.off("newMessage")
  }, [messages, addMessage, socket])
}

export default useListenMessages;
