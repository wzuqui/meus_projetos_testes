import * as express from 'express';
import * as cors from 'cors';
import { createServer } from 'http';
import * as socketio from 'socket.io';

const PORT = process.env.PORT || 3333;

const app = express();
const server = createServer(app);
const io = socketio(server);

app.use(cors());
app.use(express.json());
app.get('/', (_: express.Request, res: express.Response) => {
    return res.json({ mensage: 'Servidor Socket.IO'});
});

io.on('connection', (socket) => {
  console.log('novo usuário conectado', socket.id);

  socket.on('adicionarMensagem', (mensagem: string) => {
    console.log('nova mensagem: ' + mensagem);
    io.emit('novaMensagem', socket.id, mensagem);
  });
  socket.on('disconnect', () => {
    console.log('usuário desconectado');
  });
});

server.listen(PORT);
