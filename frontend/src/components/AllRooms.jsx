// import {useNavigate} from "react-router-dom";
import { useSocket } from "../context/SocketProvider";

import CreateRoomButton from "../components/CreateRoomButton";
import RoomButton from "../components/RoomButton"

function AllRooms() {
  const { rooms } = useSocket();
  // const navigate = useNavigate()

  const ulStyle =
    " lg:h-105 overflow-x-auto lg:overflow-y-auto flex lg:flex-col gap-2 lg:text-center";

  if (rooms.length == 0) {
    return (
      <ul className={ulStyle}>
        <CreateRoomButton />
      </ul>
    );
  }
  return (
    <ul className={ulStyle}>
      <CreateRoomButton />
      {rooms.map((room, index) => (
        <li key={index}>
          <RoomButton roomName={room.name} roomId={room.id} />
        </li>
      ))}
    </ul>
  );
}

export default AllRooms;
