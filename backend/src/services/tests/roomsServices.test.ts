import { Room } from "../../types";
import { joinRoom, newRoom } from "../roomsServices";

let rooms: Room[];
let roomName = "Test Room";
let username = "Flex";
let socketId = "12";

describe("joinRoom", () => {
  test("rooms not initializing", () => {
    const result = joinRoom(rooms, roomName, username, socketId);
    expect(result).toBeUndefined();
  });

  test("rooms empty", () => {
    rooms = []
    const result = joinRoom(rooms, roomName, username, socketId);
    expect(result).toBeUndefined();
  });
});

describe("newRoom", () => {
  test("rooms not initializing", () => {
    const result = newRoom(rooms, roomName, username, socketId);
    expect(result).toBeUndefined();
  });

  test("rooms empty", () => {
    rooms = []
    const result = newRoom(rooms, roomName, username, socketId);
    expect(result).toBeUndefined();
  });
});
