import Hapi from 'hapi';
import path from 'path';
import Inert from 'inert';
import _config, { Routes, Path } from './config';

let config;

if (process.env.NODE_ENV === 'production') config = _config.production;
else config = _config.test;

const server = new Hapi.Server();
server.connection({ port: config.PORT, host: config.HOST });
console.log(Path());
server.register(Inert, (err) => {
  if (err) throw err;
  server.route(
    {
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: path.resolve('./dist/public') },
      },
    },
  );
});

server.start((err) => {
  if (err) throw err;
  console.log(`Server running at : ${server.info.uri}`);
});
