import Book from '../model/index';
import express from 'express';
const router = express.Router();

router.get('/', async (req, res) => {
  const getBook = await Book.findAll();
  return res.json(getBook);
});

router.post('/', async (req, res) => {
  const postBook = await Book.create(req.body);
  return res.json(postBook);
});

export default router;
