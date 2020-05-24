import hapi from '@hapi/hapi';
import genreRoute from '../router/index';

const server = hapi.server({
  port: 3000,
  host: '0.0.0.0',
});

server.route(genreRoute);

async function initServerConection() {
  await server.start();
  console.log('Server started on port %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {
  console.log('Something went wrong', err);
  process.exit(1);
});

export { server, initServerConection };
