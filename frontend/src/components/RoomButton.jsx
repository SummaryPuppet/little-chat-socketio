import { useSocket } from "../context/SocketProvider";

function RoomButton({ roomName, roomId }) {
  const { joinRoom, roomSelected } = useSocket();

  const handleClick = (roomName) => {
    joinRoom(roomName);
  };

  if (roomName == roomSelected.name && roomId == roomSelected.id) {
    return (
      <button
        onClick={() => handleClick(roomName)}
        className="lg:w-full px-4 py-4 lg:px-0 py-2 bg-red-500 rounded-md"
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
