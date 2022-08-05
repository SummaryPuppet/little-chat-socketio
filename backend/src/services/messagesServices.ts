import {Message} from "../types";
import dayString from "../utils/dateNow";

export function serverSendMsgs (socket: any, text: string){
  if (socket == undefined) return false
  if (!socket.broadcast) return false

  const msg: Message = {
    text,
    owner: "Server",
    date: dayString,
    server: true
  }

  socket.broadcast.emit("ServerNewMsg", msg)
}
