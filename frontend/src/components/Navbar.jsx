import { useLocation, useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";

function Navbar({ text }) {
  const { user, resetAll } = useSocket();
  const navigate = useNavigate();
  const location = useLocation();

  const isChat = () => {
    if (location.pathname == "/chat") {
      resetAll();
      navigate("/", { replace: true });
    } else {
      navigate(-1);
    }
  };

  const handleClick = () => {
    isChat();
  };

  return (
    <nav className="px-1 lg:pl-2 py-4 flex gap-5 bg-slate-100 dark:bg-slate-900">
      <button
        onClick={handleClick}
        className="text-4xl font-bold dark:text-white"
      >
        {text}
      </button>
      <span className="text-3xl dark:text-white">{user}</span>
    </nav>
  );
}

export default Navbar;
