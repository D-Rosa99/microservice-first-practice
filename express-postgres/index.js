const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Book = mongoose.model(
  'book',
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
  })
);

app.use(express.json());

app.get('/', async (req, res) => {
  const getBook = await Book.find();
  return res.json(getBook);
});

app.post('/', async (req, res) => {
  const userInput = req.body;
  const postBook = new Book(userInput);
  await postBook.save();
  return res.json(postBook);
});

app.listen('3000', console.log('Server started in port 3000'));
