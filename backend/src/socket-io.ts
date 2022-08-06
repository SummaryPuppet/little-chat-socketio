import { Server } from "socket.io";
import server from "./app";
import {corsSocket} from "./config";
import { serverSendMsgs } from "./services/messagesServices";
import { joinRoom, newRoom } from "./services/roomsServices";
import { deleteUser } from "./services/usersServices";
import {
  Message,
  Room,
  User,
  ClientToServerEvents,
  ServerToClientEvents,
  SocketData,
} from "./types";

const io = new Server<ClientToServerEvents, ServerToClientEvents, SocketData>(
  server, corsSocket
);

let users: User[] = [];
let msgs: Message[] = [];
let rooms: Room[] = [
  {
    id: 1,
    name: "Default Room",
    users: [],
  },
  {
    id: 2,
    name: "Test 2",
    users: [],
  },
  {
    id: 3,
    name: "Test 3",
    users: [],
  },
  {
    id: 4,
    name: "Test 4",
    users: [],
  },
  {
    id: 5,
    name: "Test 5",
    users: [],
  },
  {
    id: 6,
    name: "Test 6",
    users: [],
  },
  {
    id: 7,
    name: "Test 7",
    users: [],
  },
  {
    id: 8,
    name: "Test 8",
    users: [],
  },
];

io.on("connection", (socket) => {
  socket.data.id = socket.id;

  socket.on("ClientNewUser", (username: string) => {
    socket.data.name = username;

    const u: User = {
      username,
      id: socket.id,
    };
    users.push(u);

    serverSendMsgs(socket, `User: ${username} in the reunion`);
  });

  socket.emit("ServerAllUsers", users);

  socket.on("ClientSendMsg", (msg: Message) => {
    socket.broadcast.emit("ServerNewMsg", msg);
    msgs.push(msg);
  });

  socket.emit("ServerAllRooms", rooms);

  socket.on("ClientJoinRoom", (roomName: string, username: string) => {
    console.table({ username, socket: socket.data.username });
    console.log(`Socket ${username} joining ${roomName}`);
    joinRoom(rooms, roomName, username, socket.id);

    socket.join(roomName);
    io.to(roomName)
    serverSendMsgs(socket, `User: ${username} in the room ${roomName}`)
  });

  socket.on("ClientNewRoom", (roomName: string, username: string) => {
    newRoom(rooms, roomName, username, socket.id);
    socket.join(roomName);
  });

  socket.on("disconnect", () => {
    const username = deleteUser(socket.id, users);
    serverSendMsgs(socket, `User: ${username} leaves the reunion`);
  });
});
