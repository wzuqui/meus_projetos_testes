import * as express from "express";
import * as cors from "cors";
import { createServer } from "http";
import * as socketio from "socket.io";

import routes from "./routes";

const app = express();
const server = createServer(app);
const io = socketio(server);

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;

console.log("Ouvindo porta", PORT);

app.listen(PORT);

io.on("connection", (socket) => {
  console.log("novo usuário conectado");

  socket.on("nova-mensagem", (mensagem: string) => {
    console.log("nova mensagem: " + mensagem);
  });
  socket.on("disconnect", () => {
    console.log("usuário desconectado");
  });
});
