import { Room, User } from "../types";

export function joinRoom(
  rooms: Room[],
  roomName: string,
  username: string,
  socketId: string
) {
  if (!rooms) return console.error("No initializing")
  if (rooms.length == 0) return console.error("No rooms");

  const id = rooms.findIndex((room) => room.name == roomName);
  const user: User = {
    username,
    id: socketId,
  };

  rooms[id].users.push(user);
}

export function newRoom(
  rooms: Room[],
  roomName: string,
  username: string,
  socketId: string
) {
  if (!rooms) return console.error("No initializing")

  const len = rooms.length;

  const room: Room = {
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
