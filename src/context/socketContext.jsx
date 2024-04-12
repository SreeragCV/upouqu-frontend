import { createContext, useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const {isVerified, user_id} = useSelector((state) => state.auth);

  useEffect(() => {
    if (true) {
      const socket = io("http://localhost:8080", {
        query: {
          userId: user_id
        }
      });
      
      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users); 
      })

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [isVerified, user_id]);

  return <SocketContext.Provider value={{socket, onlineUsers}}>{children}</SocketContext.Provider>;
};
