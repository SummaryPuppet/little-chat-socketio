export interface User {
  username: string;
  id: string;
}

export interface Message {
  text: string;
  owner: string;
  date: date;
  server?: boolean;
}

export interface Room {
  id: number;
  name: string;
  users: user[];
}

export interface ServerToClientEvents {
  ServerAllUsers: (users: User[]) => void;
  ServerAllRooms: (rooms: Room[]) => void;
  ServerNewMsg: (msg: Message) => void;
}

export interface ClientToServerEvents {
  ClientNewUser: (username: string) => void;
  ClientSendMsg: (msg: Message) => void;
  ClientJoinRoom: (roomName: string, username: string) => void;
  ClientNewRoom: (roomName: string, username: string) => void
}

export interface SocketData {
  name: string;
  id: string;
  room: Room
}
