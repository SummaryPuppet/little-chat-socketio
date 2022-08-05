import Loader from "../components/Loader"

function NotConnectedPage() {
  return (
    <main className="h-screen flex flex-col justify-center items-center gap-8 dark:bg-slate-900">
      <h1 className="text-5xl text-center text-red-500 font-bold">No estas conectado</h1>
      <Loader />
      <p className="text-xl dark:text-neutral-200">intentando conexion . . .</p>
    </main>
  );
}

export default NotConnectedPage;
