"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverSendMsgs = void 0;
const dateNow_1 = __importDefault(require("../utils/dateNow"));
function serverSendMsgs(socket, text) {
    if (socket == undefined)
        return false;
    if (!socket.broadcast)
        return false;
    const msg = {
        text,
        owner: "Server",
        date: dateNow_1.default,
        server: true
    };
    socket.broadcast.emit("ServerNewMsg", msg);
}
exports.serverSendMsgs = serverSendMsgs;
