"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newRoom = exports.joinRoom = void 0;
function joinRoom(rooms, roomName, username, socketId) {
    if (!rooms)
        return console.error("No initializing");
    if (rooms.length == 0)
        return console.error("No rooms");
    const id = rooms.findIndex((room) => room.name == roomName);
    const user = {
        username,
        id: socketId,
    };
    rooms[id].users.push(user);
}
exports.joinRoom = joinRoom;
function newRoom(rooms, roomName, username, socketId) {
    if (!rooms)
        return console.error("No initializing");
    const len = rooms.length;
    const room = {
        id: len + 1,
        name: roomName,
        users: [
            {
                username,
                id: socketId,
            },
        ],
    };
    rooms.push(room);
}
exports.newRoom = newRoom;
