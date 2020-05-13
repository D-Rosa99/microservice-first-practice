const Sequelize = require('sequelize');
const express = require('express');
const app = express();

const db = new Sequelize('microservice', 'postgres', 'postgres', {
  host: 'db-postgres',
  dialect: 'postgres',
});

const Genre = db.define('genre', {
  name: { type: Sequelize.STRING, allowNull: false },
});

app.use(express.json());

app.get('/', async (req, res) => {
  const getBook = await Genre.findAll();
  return res.json(getBook);
});

app.post('/', async (req, res) => {
  const userInput = req.body;
  const postBook = new Genre.create(userInput);
  return res.json(postBook);
});

app.listen('3000', console.log('Server started in port 3000'));
