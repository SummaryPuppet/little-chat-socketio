import Client from "socket.io-client";
// import { PORT } from "../config";
import { Server } from "socket.io";
// import {Message, Room, User} from "../types";

// let users: User[] = []
// let msgs: Message[] = []
// let rooms: Room[] = []

describe.skip("socket io", () => {
  let serverSocket: any, clientSocket: any, io: Server;

  beforeAll((done) => {
    clientSocket = Client("/");
    io = new Server(server);
    io.on("connection", (socket) => {
    console.log("aqui")
      serverSocket = socket;
    });

    clientSocket.on("connect", done);
  });

  afterAll(() => {
    io.close();
    clientSocket.close();
  });

  test("new user", (done) => {
    serverSocket.on("ClientNewUser", (username: string) => {
      expect(username).toBe("usuario");
      done();
    });

    clientSocket.emit("ClientNewUser", "usuario");
  });
});
