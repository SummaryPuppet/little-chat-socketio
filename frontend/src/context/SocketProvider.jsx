import { useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { SocketContext } from "./SocketContext";

export const useSocket = () => {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error("useSocket must be used within SocketContext");
  }
  return context;
};

// const URL = import.meta.env.VITE_SOCKETIO_URL || "/";
// const socket = io(URL);
const socket = io("/")

export const SocketContextProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [msgs, setMsgs] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [rooms, setRooms] = useState([]);
  const [roomSelected, setRoomSelected] = useState("")

  const getDate = () => {
    const day = new Date();
    const date = `${day.getDay()}-${day.getMonth() + 1}-${day.getFullYear()}`;
    const dayString = `${date} ${day.getHours()}:${day.getMinutes()}`;
    return dayString;
  };

  const sendMsg = (msg) => {
    if (!isConnected) return "No connected";
    const day = getDate();

    const ms = {
      text: msg,
      owner: user,
      date: day,
    };

    socket.emit("ClientSendMsg", ms);

    setMsgs(msgs.concat(ms));
  };

  const recibeMsgs = () => {
    socket.on("ServerAllMsgs", (msg) => {
      setMsgs(msg);
    });
  };

  const newMsg = () => {
    socket.on("ServerNewMsg", (msg) => {
      setMsgs(msgs.concat(msg));
    });
  };

  const recibeUsers = () => {
    socket.on("ServerAllUsers", (users) => {
      setUsers(users);
    });
  };

  const signIn = (username) => {
    socket.emit("ClientNewUser", username);
    setUser(username);
  };

  const recibeRooms = () => {
    socket.on("ServerAllRooms", (rooms) => {
      setRooms(rooms);
    });
  };

  const joinRoom = (roomName) =>{
    socket.emit("ClientJoinRoom", roomName, user)
  }

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    recibeMsgs();

    newMsg();

    recibeUsers();

    recibeRooms();

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("ServerAllMsgs");
      socket.off("ServerAllUsers");
      socket.off("ServerAllRooms");
    };
  });

  return (
    <SocketContext.Provider
      value={{ 
        isConnected, 
        sendMsg, 
        msgs, 
        users, 
        user, 
        signIn, 
        rooms,
        joinRoom
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
