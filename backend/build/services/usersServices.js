"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
function deleteUser(socketId, users) {
    const id = users.findIndex(user => user.id == socketId);
    const [removedUser] = users.splice(id, 1);
    if (!removedUser)
        return console.log("No removed user");
    if (removedUser.username == "")
        return console.log("No user");
    return removedUser.username;
}
exports.deleteUser = deleteUser;
