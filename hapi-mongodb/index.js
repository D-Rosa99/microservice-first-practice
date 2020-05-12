const Sequelize = require('sequelize');
const hapi = require('@hapi/hapi');

const db = new Sequelize('playGround', 'postgres', 'postgres');

const server = hapi.server({ host: '0.0.0.0', port: 3000 });

// server.route()

const init = async () => {
  await server.start();
  console.log('Server started on port 3000');
};

process.on('unhandledRejection', (err) => {
  console.log('Something went wrong ', err);
  process.exit(1);
});

init();
