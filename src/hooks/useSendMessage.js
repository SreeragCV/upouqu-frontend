import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/store/chatSlice";

function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, messages } = useSelector((state) => state.chat);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const sendMessage = async (message) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8080/user/chat/${selectedConversation.user_id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token,
          },
          body: JSON.stringify({ message }),
        }
      );
      const resData = await response.json();
      if (resData.error) {
        return setError(resData.error);
      }
      dispatch(addMessage({message: [...messages, resData]}));
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading, error };
}

export default useSendMessage;
