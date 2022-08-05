import server from "./app";
import { PORT } from "./config";
import "./socket-io";

export const serverL = server.listen(PORT, () => {
  console.log(`Server on port: ${PORT}`);
});
