import {User} from "../types";

export function deleteUser(socketId: string, users: User[]){
  const id = users.findIndex(user => user.id == socketId)

  const [ removedUser ] = users.splice(id, 1)

  if (!removedUser) return console.log("No removed user")

  if (removedUser.username == "") return console.log("No user")

  return removedUser.username
}


