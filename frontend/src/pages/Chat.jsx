import { useEffect } from "react";
import { useSocket } from "../context/SocketProvider";

import Message from "../components/Message";
import MsgForm from "../components/MsgForm";
import NotConnectedPage from "./NotConnected";
import { useNavigate } from "react-router-dom";
import AllRooms from "../components/AllRooms";

function ChatPage() {
  const { msgs, user, isConnected } = useSocket();
  const navigate = useNavigate();


  if (!isConnected) return <NotConnectedPage />;

  if (!user) navigate("/");

  return (
    <div className="h-screen dark:bg-slate-700">
      <header className="px-1 lg:pl-2 py-4 flex gap-5 bg-slate-100 dark:bg-slate-900">
        <h1 className="text-4xl font-bold dark:text-white ">Room</h1>
        <span className="text-3xl dark:text-white">{user}</span>
      </header>
      <main className="pl-2 w-full lg:grid lg:grid-cols-5">
        <aside 
          className="pt-2 w-full lg:w-full lg:h-full lg:col-start-1 lg:col-end-2 lg:text-center flex lg:flex-col gap-2 "
        >
          <AllRooms />
        </aside>
        <section className=" lg:pl-3 lg:col-start-2 lg:col-end-6 flex flex-col gap-2">
          <ul className="h-100 lg:pr-2 overflow-y-auto">
            {msgs.map((msg, index) => (
              <Message
                key={index}
                text={msg.text}
                owner={msg.owner}
                date={msg.date.toString()}
                server={msg.server || false}
              />
            ))}
          </ul>
          <MsgForm />
        </section>
      </main>
    </div>
  );
}

export default ChatPage;
