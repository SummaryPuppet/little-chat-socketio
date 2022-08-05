import { useSocket } from "../context/SocketProvider";

function RoomButton({ roomName, roomId }) {
  const { joinRoom } = useSocket();

  const handleClick = (roomName) => {
    joinRoom(roomName);
  };

  if (roomName == "Default Room" && roomId == 1) {
    return (
      <button
        onClick={() => handleClick(roomName)}
        className="lg:w-full px-4 py-4 lg:px-0 py-2 bg-red-300 rounded-md"
      >
        {roomName}
      </button>
    );
  }

  return (
    <button
      onClick={() => handleClick(roomName)}
      className="lg:w-full px-4 py-4 lg:px-0 py-2 bg-slate-300 rounded-md"
    >
      {roomName}
    </button>
  );
}

export default RoomButton;
