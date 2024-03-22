import React, { useEffect, useState } from "react";
import axios from "axios";

function useGetConversation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [conversations, setConversations] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    try {
      setLoading(true);
      const getCoversations = async () => {
        const getCoversation = await axios.get(
          "http://localhost:8080/chat/conversations",
          {
            headers: {
                token
            }
          }
        );
        const data = getCoversation.data.allUsers;
        setConversations(data);
      };
      getCoversations()
    } catch (e) {
      setError(error);
    } finally {
        setLoading(false)
    }
  },[]);

  return { conversations, loading, error };
}

export default useGetConversation;
