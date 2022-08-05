import NotConnectedPage from "./NotConnected";
import UserForm from "../components/UserForm";
import { useSocket } from "../context/SocketProvider";

function Home() {
  const { isConnected } = useSocket();

  if (!isConnected) return <NotConnectedPage />;

  return (
    <main className="h-screen flex justify-center items-center dark:bg-slate-900">
      <div className="px-3 py-5 flex flex-col items-center gap-3 dark:border-2 dark:border-red-900 dark:shadow-md dark:shadow-red-900">
        <h1 className="text-5xl dark:text-red-500">Home Chat</h1>
        <section className="py-2 flex flex-col">
          <UserForm />
        </section>
      </div>
    </main>
  );
}

export default Home;
