const hapi = require('@hapi/hapi');
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://db-mongo:27017/microservice', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => logger.info('Database connect!'))
  .catch((err) => logger.error('Something went wrong! ', err));

const Book = mongoose.model(
  'book',
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
  })
);
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
