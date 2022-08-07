"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
const messagesServices_1 = require("./services/messagesServices");
const roomsServices_1 = require("./services/roomsServices");
const usersServices_1 = require("./services/usersServices");
const io = new socket_io_1.Server(app_1.default, config_1.corsSocket);
let users = [];
let msgs = [];
let rooms = [
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
    socket.on("ClientNewUser", (username) => {
        socket.data.name = username;
        const u = {
            username,
            id: socket.id,
        };
        users.push(u);
        (0, messagesServices_1.serverSendMsgs)(socket, `User: ${username} in the reunion`);
    });
    socket.emit("ServerAllUsers", users);
    socket.on("ClientSendMsg", (msg) => {
        socket.broadcast.emit("ServerNewMsg", msg);
        msgs.push(msg);
    });
    socket.emit("ServerAllRooms", rooms);
    socket.on("ClientJoinRoom", (roomName, username) => {
        console.table({ username, socket: socket.data.username });
        console.log(`Socket ${username} joining ${roomName}`);
        (0, roomsServices_1.joinRoom)(rooms, roomName, username, socket.id);
        socket.join(roomName);
        io.to(roomName);
        (0, messagesServices_1.serverSendMsgs)(socket, `User: ${username} in the room ${roomName}`);
    });
    socket.on("ClientNewRoom", (roomName, username) => {
        (0, roomsServices_1.newRoom)(rooms, roomName, username, socket.id);
        socket.join(roomName);
    });
    socket.on("disconnect", () => {
        const username = (0, usersServices_1.deleteUser)(socket.id, users);
        (0, messagesServices_1.serverSendMsgs)(socket, `User: ${username} leaves the reunion`);
    });
});
