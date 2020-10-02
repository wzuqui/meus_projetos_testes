import * as express from 'express';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    mensagem: 'Servidor Rodando'
  })
});

export default routes;