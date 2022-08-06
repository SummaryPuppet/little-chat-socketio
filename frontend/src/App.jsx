import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SocketContextProvider } from "./context/SocketProvider";

import ChatPage from "./pages/Chat";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CreateRoomForm from "./pages/CreateRoomForm";

function App() {
  return (
    <SocketContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/create-room" element={<CreateRoomForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </SocketContextProvider>
  );
}

export default App;
